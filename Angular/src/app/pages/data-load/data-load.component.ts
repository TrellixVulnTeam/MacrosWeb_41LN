import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { AppComponent } from 'src/app/app.component';
import { LegalizacionService } from 'src/app/services/legalizacion.service';
import { ConfirmationService } from 'primeng/api';
const EXCEL_EXTENSION = '.xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
import * as campos_lista from 'src/assets/json/campos_lista.json';

@Component({
  selector: 'app-data-load',
  templateUrl: './data-load.component.html',
  styleUrls: ['./data-load.component.scss']
})
export class DataLoadComponent implements OnInit {


  LEGALIZACION: number = 1;
  PROMESA: number = 2;
  SUBSIDIO: number = 3;
  SEGUIMIENTO_SUBSIDIO: number = 4;
  ENTREGA: number = 5;
  DESEMBOLSO: number = 6;
  RECAUDO: number = 7;
  TRAZABILIDAD: number = 8;
  ORDENES: number = 9;
  RENOVACION: number = 10;
  ESCRITURACION: number = 11;
  JUNTAS: number = 101;
  VIGENCIAS: number = 102;

  toolList = [
    { id: 1, name: 'Legalizacion' },
    { id: 2, name: 'Promesa' },
    { id: 3, name: 'Subsidio' },
    { id: 4, name: 'Seguimiento Subsidio' },
    { id: 5, name: 'Entrega' },
    { id: 6, name: 'Desembolso' },
    { id: 7, name: 'Recaudo' },
    { id: 8, name: 'Trazabilidad' },
    { id: 9, name: 'Ordenes' },
    { id: 10, name: 'Renovacion' },
    { id: 11, name: 'Escrituracion' },
    { id: 101, name: 'Juntas' },
    { id: 102, name: 'Vigencias' }
  ];
  currentTool: any = null;

  form: FormGroup;

  @ViewChild('UploadFileInput') uploadFileInput: any;
  myfilename = 'Select File';

  fileData: any;

  listaOpciones: any = [];
  opcionesHerramienta: any = {};
  listaCamposError: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private _legalizacionService: LegalizacionService,
    private confirmationService: ConfirmationService,
  ) {
    this.form = this.formBuilder.group(
      {
        tool: [],
      }
    );

    this.form.controls['tool'].valueChanges.subscribe(
      (change: any) => {
        this.currentTool = change;
      }
    )


    this.listaOpciones = campos_lista;
    this.listaOpciones = this.listaOpciones.default;
    console.log('this.listaOpciones', this.listaOpciones);


  }

  currentFile: any;

  ngOnInit(): void {
  }

  myUploader(event) {
    this.currentFile = event.files;
    //event.files == files to upload
    this.fileChangeEvent();
  }

  fileChangeEvent() {
    AppComponent.displayLoading = true;
    this.listaCamposError = [];

    if (this.currentFile && this.currentFile[0]) {


      const reader: FileReader = new FileReader();
      reader.readAsBinaryString(this.currentFile[0]);
      reader.onload = (e: any) => {
        /* create workbook */
        const binarystr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

        /* selected the first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        let data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
        console.log('data', data); // Data will be logged in array format containing objects

        if (this.currentTool == this.VIGENCIAS) {
          data = data.filter((thing, index, self) =>
            index === self.findIndex((t) => (
              t['EntidadCredito'] === thing['EntidadCredito']
            ))
          );
          console.log('lista sin duplicar ', data);
        }
        this.fileData = data;
        AppComponent.displayLoading = false;

        this.getOptionParam(data);
      };

    } else {
      AppComponent.displayLoading = false;

      this.myfilename = 'Select File';
    }
  }


  sendData() {

    AppComponent.displayLoading = true;
    this._legalizacionService.loadData(this.fileData, this.currentTool)
      .subscribe(
        (data: any) => {
          console.log('response', data);
          if (data.code == 0) {
            AppComponent.displayLoading = false;
            this.confirmationService.confirm({
              header: 'Mensaje',
              message: 'Se ha realizado la carga de archivo exitosamente',
              dismissableMask: true,
              rejectVisible: false,
              acceptLabel: 'OK',
              accept: () => {
                this.confirmationService.close();
                this.uploadFileInput.clear();
              }
            })
          } else {
            console.error('Error al persistir datos masivos: ', data.message);
            AppComponent.displayLoading = false;
            this.confirmationService.confirm({
              header: 'Mensaje',
              message: 'Se ha presentado un error al intentar realizar la carga de archivo',
              dismissableMask: true,
              rejectVisible: false,
              acceptLabel: 'OK',
              accept: () => {
                this.confirmationService.close();
              }
            })
          }
        }, err => {
          console.log('err', err);
          AppComponent.displayLoading = false;
        }
      )
  }


  downloadTemplate() {

    let order: any[] = ["UNI_ID", "FechaSeguimientoCoordinador", "EstadoCoordinador", "ObservacionCoordinador", "FechaSeguimientoAnalista", "EstadoAnalista", "ObservacionAnalista", "FechaAsignacion", "AsignacionAnalista", "AnalistaVarado", "FechaAsignacionVarado", "FechaDesvarado"];
    if (this.currentTool == this.PROMESA) {
      order = ["UNI_ID", "EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista"];
    } else if (this.currentTool == this.SUBSIDIO) {
      order = ["UNI_ID", "EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "Comentarios"];
    } else if (this.currentTool == this.SEGUIMIENTO_SUBSIDIO) {
      order = ["UNI_ID", "EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista"];
    } else if (this.currentTool == this.ENTREGA) {
      order = ["UNI_ID", "FechadeEntrega", "HoradeEntrega", "CreacionCaso", "Apoderado", "EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "Arquitecta"];
    } else if (this.currentTool == this.DESEMBOLSO) {
      order = ["UNI_ID", "EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "Comentarios"];
    } else if (this.currentTool == this.TRAZABILIDAD) {
      order = ["UNI_ID", "EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "TipificacionCorreccionesCtl", "NBR", "AnalistaTrazabilidad", "DetalleObservacion"];
    } else if (this.currentTool == this.ORDENES) {
      order = ["UNI_ID", "Frpl", "QuienFirmaEsfp", "EstadoEsfpFrpl", "EstadoCoordinador", "ObservacionCoordinador", "EstadoAuxiliar", "ObservacionAuxiliar", "EstadoAbogado", "ObservacionAbogado", "PresentoCambio", "CualFueElCambio", "NoPredialNacional", "NumeroId", "IdMunicipio", "RadicaciónOrdenPagoPySPredial", "FechaEstimadaDePyS", "TipoPyS", "MunicipioPyS", "EstadoPyS", "EstadoOrdenes","TipoProyectoM"];
    } else if (this.currentTool == this.RENOVACION) {
      order = ["UNI_ID", "FechaSeguimientoCoordinador", "EstadoCoordinador", "ObservacionCoordinador", "CampanasEspeciales", "CausalRenovacion", "FechaSeguimientoAnalista", "EstadoAnalista", "ObservacionAnalista", "EstadoPoderAnalista", "Asignacion", "Broker", "FechaAsignacion"];
    } else if (this.currentTool == this.ESCRITURACION) {
      order = ["UNI_ID", "EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista"];
    } else if (this.currentTool == this.RECAUDO) {
      order = ["UNI_ID", "EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "FechaAcuerdoProximoPago", "MontoPactado", "LlamadaNo1", "LlamadaNo2", "Carta1", "Carta2", "Carta3", "EstadoEscriturado"];
    } else if (this.currentTool == this.JUNTAS) {
      order = ["UNI_ID", "ProyEntrega", "ProyEscritura", "TorreManzana", "Unidad"];
    } else if (this.currentTool == this.VIGENCIAS) {
      order = ["EntidadCredito", "DiasRatificado", "DiasAprobado"];
    }


    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet([], { header: order });
    const workbook: XLSX.WorkBook = { Sheets: { 'Sheet1': worksheet }, SheetNames: ['Sheet1'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'template_');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }


  private async getOptionParam(data) {
    AppComponent.displayLoading = true;

    this.listaCamposError = [];

    let toolName: any = this.getToolName(this.currentTool);

    console.log('####this.currentTool ', this.currentTool);

    console.log('#####this.getToolName(this.currentTool) ', this.getToolName(this.currentTool));


    let campos = this.listaOpciones[this.getToolName(this.currentTool)];
    for (let index = 0; index < campos.length; index++) {
      const element = campos[index];
      let response = await this._legalizacionService.getOptionListModal(toolName, element).toPromise();
      console.log('response', response);
      this.opcionesHerramienta[element] = response;
    }
    AppComponent.displayLoading = false;


    AppComponent.displayLoading = true;


    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      var keys: any = Object.keys(element);
      if (keys.length > 0) {
        keys.forEach((key: any) => {
          let isOptionList = this.isOptionList(key, campos);
          if (isOptionList == true) {
            let isValueValid = this.isValueValid(key, element[key]);
            let campoTemporal = element[key];
            campoTemporal = campoTemporal != null && campoTemporal != undefined ? String(campoTemporal).toLowerCase() : '';
            if (!isValueValid && campoTemporal != 'null' && campoTemporal != 'vacio') {
              let item: any = { "UNI_ID": element['UNI_ID'], "campo": key, "valor": element[key] };
              this.listaCamposError.push(item);
            }
          }
        })
      }
    }

    AppComponent.displayLoading = false;


    if (this.listaCamposError.length > 0) {
      this.uploadFileInput.clear();
    }

  }

  private isOptionList(name: string, list) {
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      if (element == name) {
        return true;
      }
    }
    return false;
  }

  private isValueValid(campo: string, valor: string) {
    let listTemp = this.opcionesHerramienta[campo];

    for (let index = 0; index < listTemp.length; index++) {
      const element = listTemp[index];
      if (element == valor) {
        return true;
      }
    }
    return false;
  }


  protected getToolName(name: number): string {

    if (name == this.LEGALIZACION) {
      return 'Legalizacion';
    } else if (name == this.PROMESA) {
      return 'Promesas';
    } if (name == this.SUBSIDIO) {
      return 'Subsidio';
    } if (name == this.SEGUIMIENTO_SUBSIDIO) {
      return 'SegSubsidio';
    } if (name == this.ENTREGA) {
      return 'Entregas';
    } else if (name == this.DESEMBOLSO) {
      return 'Desembolso';
    } if (name == this.RECAUDO) {
      return 'Recaudo';
    } else if (name == this.TRAZABILIDAD) {
      return 'Trazabilidad';
    } else if (name == this.ORDENES) {
      return 'Ordenes';
    } else if (name == this.RENOVACION) {
      return 'Renovacion';
    } else if (name == this.ESCRITURACION) {
      return 'Escrituracion';
    } else if (name == this.JUNTAS) {
      return 'Juntas';
    } else if (name == this.VIGENCIAS) {
      return 'Vigencias';
    }

    return;
  }



}
