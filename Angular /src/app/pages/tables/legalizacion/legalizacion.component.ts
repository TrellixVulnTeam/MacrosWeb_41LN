import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ExcelExportService } from 'src/app/services/excel.services';
import { LegalizacionService } from 'src/app/services/legalizacion.service';
import { MatDialog } from '@angular/material/dialog';
import * as $ from 'jquery';
import { ModifyDatatableComponent } from 'src/app/modals/modify-datatable/modify-datatable.component';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.services';
import * as campos_fechas from 'src/assets/json/campos_fechas.json';
import * as campos_moneda from 'src/assets/json/campos_moneda.json';


/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-legalizacion',
  templateUrl: './legalizacion.component.html',
  styleUrls: ['./legalizacion.component.scss']
})
export class LegalizacionComponent {

  obrasSelect: any = "''2-4'',''2-8'',''104-164'',''104-165'',''104-166'',''104-167'',''104-168'',''104-169'',''107-100'',''107-101'',''107-102'',''107-103'',''107-104'',''107-106'',''107-107'',''107-108'',''107-109'',''107-110'',''107-111'',''107-116'',''107-117'',''107-118'',''107-119'',''107-121'',''107-122'',''107-123'',''107-124'',''107-125'',''107-126'',''107-127'',''107-128'',''107-129'',''107-130'',''107-133'',''107-134'',''107-135'',''107-136'',''107-137'',''107-138'',''107-139'',''107-140'',''107-141'',''107-142'',''107-143'',''107-144'',''107-145'',''108-105'',''108-106'',''111-146'',''111-147'',''112-1107'',''112-1108'',''112-1109'',''112-1110'',''112-1111'',''112-1112'',''112-1113'',''112-113'',''112-114'',''122-12'',''122-13'',''123-101'',''123-102'',''124-101'',''124-102'',''128-10'',''129-100'',''129-101'',''130-4'',''130-5'',''131-100'',''131-101'',''132-100'',''132-101'',''133-107'',''133-109'',''133-111'',''133-115'',''133-116'',''138-1'',''138-2'',''139-1'',''139-10'',''139-11'',''139-2'',''139-3'',''139-8'',''140-100'',''146-100'',''147-100'',''147-101'',''149-100'',''149-101'',''149-102'',''152-1'',''152-10'',''152-11'',''152-2'',''152-3'',''152-4'',''152-7'',''152-8'',''152-9'',''153-1'',''153-10'',''153-11'',''153-12'',''153-2'',''153-3'',''153-4'',''153-5'',''153-6'',''153-7'',''153-8'',''153-9'',''154-1'',''154-2'',''155-1'',''155-2'',''156-1'',''156-2'',''156-3'',''157-1'',''157-2'',''158-3'',''158-4'',''159-1'',''160-1'',''160-138'',''160-139'',''160-140'',''160-141'',''160-142'',''160-143'',''160-144'',''160-145'',''160-146'',''160-147'',''161-100'',''161-101'',''162-100'',''162-101'',''162-102'',''162-104'',''162-105'',''162-106'',''162-107'',''163-100'',''2-102'',''2-113'',''2-117'',''2-15'',''2-16'',''2-18'',''2-22'',''2-23'',''2-24'',''2-26'',''2-266'',''2-290'',''2-294'',''2-30'',''2-301'',''2-31'',''2-32'',''2-328'',''2-333'',''2-337'',''2-338'',''2-346'',''2-35'',''2-369'',''2-371'',''2-373'',''2-376'',''2-38'',''2-380'',''2-383'',''2-384'',''2-399'',''2-400'',''2-406'',''2-417'',''2-422'',''2-423'',''2-424'',''2-425'',''2-426'',''2-427'',''2-428'',''2-429'',''2-430'',''2-431'',''2-435'',''2-447'',''2-449'',''2-452'',''2-455'',''2-457'',''2-458'',''2-462'',''2-464'',''2-465'',''2-466'',''2-467'',''2-468'',''2-469'',''2-470'',''2-471'',''2-472'',''2-473'',''2-476'',''2-477'',''2-497'',''2-498'',''2-509'',''2-510'',''2-513'',''2-518'',''2-519'',''2-520'',''2-526'',''2-527'',''2-537'',''2-538'',''2-541'',''2-550'',''2-563'',''2-564'',''2-565'',''2-578'',''2-580'',''2-586'',''2-644'',''2-645'',''2-646'',''2-652'',''2-658'',''2-661'',''2-663'',''2-665'',''2-667'',''2-668'',''2-669'',''2-670'',''2-671'',''2-672'',''2-681'',''2-693'',''2-694'',''2-695'',''2-696'',''2-715'',''2-73'',''2-739'',''2-740'',''2-741'',''2-742'',''2-753'',''2-776'',''2-78'',''2-79'',''2-793'',''2-799'',''2-800'',''2-813'',''2-814'',''2-839'',''2-840'',''2-875'',''27-342'',''55-1'',''74-1'',''74-2'',''74-3'',''77-509'',''77-510'',''77-513'',''77-514'',''77-516'',''77-518'',''80-447'',''87-101'',''87-102'',''87-103'',''93-101'',''93-102'',''93-103'',''93-104'',''93-105'',''93-108'',''96-10'',''96-11'',''96-2'',''96-21'',''96-22'',''96-25'',''96-26'',''96-3'',''96-33'',''96-34'',''96-35'',''96-36'',''96-37'',''96-4'',''96-5'',''96-6'',''96-7'',''96-8'',''96-9''";

  displayedColumns: String[] = [];
  dataSource = new MatTableDataSource<any>();
  dataTable: [] = [];
  page: any = 1;
  sizePage: any = 10;
  lengthTable = 0;
  sortFilter: any = {
    name: null,
    direction: null
  };
  displayLoading: boolean = false;
  filtersOptions: [] = [];
  rowSelected: any;

  public searchCondition: any = {};
  public searchConditionDateFilter: any = {};
  public searchValue: any = {};
  public searchTemp: string = null;
  public filterDateList: any[] = [];

  negativeColorRules: any = ["NEGADO", "VENCIDO", "SIN APROBAR", "VENCIDO.APROBACION", "VENCIDO_SBA2", "VENCIDO_SBAP", "SIN RADICAR", "PDTE. CI,AH,CS", "PDTE. CI,AH", "PDTE. CI,CS", "PDTE. AH,CS", "PDTE. CI", "PDTE. AH", "PDTE. CS"];
  ok1ColorRules: any = ["N/A", "PAZYSALVO", "RATIFICADO", "N/A", "APROBADO_SBA2", "APROBADO_SBAP", "OK"];
  ok2ColorRules: any = ["EN LEGALIZACION", "APROBADO", "RADICADO"];
  expirationColorRules: any = ["PROX.VENC", "PROX.VENC_SBA2", "PROX.VENC_SBAP"];

  // camposFecha: any = ["FechaSeguimientoCoordinador", "FechaSeguimientoAnalista", "FechaAsignacion", "FechaAsignacionVarado", "FechaDesvarado", "Fecha Cuota Inicial", "Fecha Progr FRE", "FechaConcre_FRE",
  //   "FechaPactada_ESFP", "FechaVenta", "FechaFactura", "FechaProgObra", "FechaProg_FREN", "FechaConcre_FREN", "CTO", "PYSP", "FVPS", "PZNO", "FirmaComprador_ESFP", "ESRN", "FGestionSubsidio",
  //   "F_GestionCredito", "VencimientoCredito_CRPA", "CreditoRatificado_CRAP", "VencimientoCredito", "SOLICITUD_AVALUO_SEAD", "SCC", "RECIBO DE CARTA COMPROMISO", "FirmaPCV_PRFI", "PYSCC_PZCC",
  //   "EnvioOrdenEscr_ESEO", "Entrega_FEPE", "CRSA", "CRAV", "ProyEntrega", "ProyEscritura", "SCR2", "SBAC", "RECEPCION_AVALUO_READ", "PETA", "PTIT", "RPH", "IDES AS BOLSA_DESISTIMIENTO_IDES",
  //   "FVPYS", "FechadeEntrega", "DESEMBOLSO_CREDITO_CRDS", "Fecha Notificacion Desembolso_CRDC", "FechaRadicacionCredito", "Envio_garantia_Banco", "FTramiteTrazabilidad", "PROGRAMACION_ENTREGA",
  //   "ENTREGA_INMUEBLE_FEPE", "FECHA_ENTREGA_OBRA_FEO", "ENVIO_EP_CIERRE_COPIA_ESNC", "FECHA_SALIDA_REGISTRO_FSR", "FECHA_INGRESO_REGISTRO_ESLC", "FIRMA_REP_LEGAL_BANCO_REFB", "ESCRITURA_LIBERACION_HIPOTECA_ESLL",
  //   "APROBACION_INICIAL_CREDITO_CRPA", "SubsidioAprobado_SBAP", "SubsidioAprobado2_SBA2", "SubsidioAprobadoSemilleroPropietarios_SASP", "SubsidioAprobadoConcurrente_SBAC", "SubsidioProrrogaConcurrente_SBC2",
  //   "SubsidioProrrogaSemillero2_SPS2", "NotifiDesemSubsidio_SBDC", "SDE2", "NotificacionDesemSubsidio3_SDE3", "DesembolsoSubsidio_SUDE", "RadicacionCobroSubsidio_SURC", "RadicacionCobroSubsidio2_SUR2", "RadicacionCobroSubsidio3_SUR3",
  //   "ENTREGA CERTIFICADOS HABITABILIDAD_ENCH", "FechaEstimadaDePyS", "FSAC", "FRAC", "FechaAcuerdoProximoPago", "Fecha Cuota Inicial1", "Negocios de riesgos IDES", "Radicacion Ahorro Programado APRP", "Radicación Cobro Cesantias RACE",
  //   "Fecha De radicacion de Crédito CRRA"
  // ];
  camposFecha: any = [];

  // campoMoneda: any = ['Neto', 'SaldoCI', 'ValorCredito', 'ValorPagadoCredito', 'Valor Subsidio 1', 'Valor Subsidio 2', 'Valor Subsidio Concurrente', 'Valor Pagado Subsidio', 'MontoPactado', 'SinVencer', 'Mora 1-30 dias', 'Mora 31-45 dias', 'Mora 46-60 dias', 'Mora 61-90 dias', 'Mora 91-120 dias', 'Mora 120 + dias', 'Vencido', 'Proyeccion_Mes', 'Valor_Gestionar', 'EjecutadoMes'];
  campoMoneda: any = [];

  quickSearch: FormControl;

  eventsSubjectDateFilter: Subject<void> = new Subject<void>();
  eventsSubjectSearchedSimpleFilter: Subject<void> = new Subject<void>();


  currentPage: string
  reportType: number;
  tableName: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


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

  constructor(
    private _excelExportService: ExcelExportService,
    private legalizacionService: LegalizacionService,
    private _utilsService: UtilsService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.camposFecha = campos_fechas;
    this.camposFecha = this.camposFecha.default;

    console.log('this.camposFecha', this.camposFecha);


    this.campoMoneda = campos_moneda;
    this.campoMoneda = this.campoMoneda.default;

    console.log('this.campoMoneda', this.campoMoneda);



    this.currentPage = router.routerState.snapshot.url;
    console.log('this.currentPage', this.currentPage);
    let pathPart: any = this.currentPage.split('/');
    console.log(pathPart);

    for (let index = 0; index < pathPart.length; index++) {
      const element = pathPart[index];
      let reportTypeTemp = this.getReportType(element);
      let reportNameTemp = this.getReportName(element);
      if (element != null) {
        this.reportType = reportTypeTemp;
      }
      if (element != null) {
        this.tableName = reportNameTemp;
      }

    }

    console.log('this.reportType', this.reportType);




    this.quickSearch = new FormControl();
    this.quickSearch.valueChanges.subscribe((x: string) => {
      console.log('x', x);
      if (x.length > 3) {
        let searchTemp = ` AND ( Nombre LIKE ''%${x}%'' OR Agrupacion LIKE ''%${x}%'' OR NIT LIKE ''%${x}%'' OR [NIT Seg] LIKE ''%${x}%'' )`;
        console.log(searchTemp);
        this.searchTemp = searchTemp;
        this.page = 1;
        this.getDataTable();
      } else if (x.length < 1 && this.searchTemp != null) {
        console.log('aquiii', this.searchTemp);

        this.searchTemp = '';
        this.page = 1;
        this.getDataTable();
      }
    });

  }

  ngAfterViewInit() {
    this.getDataTable(true);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  getDataTable(showHeader?: any) {

    let sortFilterTemp = this.sortFilter.name != null && this.sortFilter.direction != null ? `${/\s/g.test(this.sortFilter.name) ? `[${this.sortFilter.name}]` : this.sortFilter.name} ${String(this.sortFilter.direction).toUpperCase()}` : '';
    console.log('sortFilterTemp', sortFilterTemp);

    let filterTemp = this.getFilterParameters();

    if (filterTemp != null) {
      filterTemp = filterTemp.replaceAll(';', ',');
    }
    console.log('dataFilter 1', filterTemp);


    this.displayLoading = true;
    this.legalizacionService.getDataTable(this.obrasSelect, this.page, this.sizePage, sortFilterTemp, filterTemp, this.reportType)
      .subscribe(
        (data: any) => {
          console.log(data);

          if (showHeader) {
            let headers: String[] = data.headers;
            headers = headers.map((sweetItem: String) => {
              sweetItem = sweetItem.trim();

              if (sweetItem.includes('.') && !sweetItem.includes('=')) {
                let tempv = sweetItem.split('.');

                if (tempv[1].charAt(0) == '[') {
                  tempv[1] = tempv[1].substring(1);
                }
                if (tempv[1].charAt(tempv[1].length - 1) == ']') {
                  tempv[1] = tempv[1].substring(0, tempv[1].length - 1);
                }
                sweetItem = tempv[0] + '.' + tempv[1];
              } if (sweetItem.includes('=')) {
                let tempv = sweetItem.split('=');

                if (tempv[0].charAt(0) == '[') {
                  tempv[0] = tempv[0].substring(1);
                }
                if (tempv[0].charAt(tempv[0].length - 1) == ']') {
                  tempv[0] = tempv[0].substring(0, tempv[0].length - 1);
                }
                sweetItem = tempv[0] + '=' + tempv[1];
              } else {
                if (sweetItem.charAt(0) == '[') {
                  sweetItem = sweetItem.substring(1);
                }

                if (sweetItem.charAt(sweetItem.length - 1) == ']') {
                  sweetItem = sweetItem.substring(0, sweetItem.length - 1);
                }
              }


              // sweetItem = sweetItem.replace(/\[/g, '');
              // sweetItem = sweetItem.replace(/\]/g, '');
              // if (sweetItem.includes('.') && !sweetItem.includes('=')) {
              //   let tempv = sweetItem.split('.');
              //   tempv.length > 1 ? sweetItem = tempv[1] : sweetItem = tempv[0];
              // }
              return sweetItem.trim();
            })

            console.log('#####headers', headers);
            console.log('#####headers', JSON.stringify(headers));
            this.displayedColumns = headers;
          }

          this.dataTable = data.data;
          this.dataSource = new MatTableDataSource<any>(data.data);
          this.lengthTable = data.count;
          // this.dataSource.paginator = this.paginator;
          this.displayLoading = false;
        }, (err: any) => {
          console.log(err);
          this.displayLoading = false;
        }
      )
  }

  announceSortChange(name: any, direction?: any) {
    if (direction) {
      console.log(`Sorted ${direction}ending`);

      this.sortFilter = {
        name: name,
        direction: String(direction).toUpperCase()
      }
      console.log('sortFilter', this.sortFilter);

      let sortFilterTemp = `${/\s/g.test(name) ? `[${name}]` : name} ${String(direction).toUpperCase()}`;
      console.log('sortFilterTemp', sortFilterTemp);

      let filterTemp = this.getFilterParameters();

      if (filterTemp != null) {
        filterTemp = filterTemp.replaceAll(';', ',');
      }

      this.displayLoading = true;
      this.legalizacionService.getDataTable(this.obrasSelect, this.page, this.sizePage, sortFilterTemp, filterTemp, this.reportType)
        .subscribe(
          (resultado: any) => {
            console.log(resultado);
            // this.resultado = resultado;
            this.dataTable = resultado.data;
            this.dataSource = new MatTableDataSource<any>(resultado.data);
            this.lengthTable = resultado.count;
            this.displayLoading = false;
          }, err => {
            this.displayLoading = false;
          }
        )
    } else {
      console.log('Sorting cleared');
      console.log(`${name}`);
      this.sortFilter = {
        name: null,
        direction: null
      };
      this.getDataTable();
    }

    console.log(this.sortFilter);

  }

  changePage(evt: any) {
    console.log('evt', evt);
    // console.log('this.proyecto.value', this.proyecto.value);
    this.displayLoading = true;


    let sortFilterTemp = null;
    if (this.sortFilter.name != null && this.sortFilter.direction != null) {
      sortFilterTemp = `${/\s/g.test(this.sortFilter.name) ? `[${this.sortFilter.name}]` : this.sortFilter.name} ${String(this.sortFilter.direction).toUpperCase()}`;
    }

    let filterTemp = this.getFilterParameters();

    if (filterTemp != null) {
      filterTemp = filterTemp.replaceAll(';', ',');
    }

    this.legalizacionService.getDataTable(this.obrasSelect, evt.pageIndex + 1, evt.pageSize, sortFilterTemp, filterTemp, this.reportType)
      .subscribe(
        (resultado: any) => {
          console.log(resultado);
          // this.resultado = resultado;
          this.dataTable = resultado.data;
          this.dataSource = new MatTableDataSource<any>(resultado.data);
          this.lengthTable = resultado.count;
          this.sizePage = evt.pageSize;
          this.page = evt.pageIndex + 1;
          this.displayLoading = false;
        }, err => {
          this.displayLoading = false;
        }
      )
  }

  exportToExcel() {

    let sortFilterTemp = this.sortFilter.name != null && this.sortFilter.direction != null ? `${/\s/g.test(this.sortFilter.name) ? `[${this.sortFilter.name}]` : this.sortFilter.name} ${String(this.sortFilter.direction).toUpperCase()}` : '';
    console.log('sortFilterTemp', sortFilterTemp);

    let filterTemp = this.getFilterParameters();
    if (filterTemp != null) {
      filterTemp = filterTemp.replaceAll(';', ',');
    }
    this.displayLoading = true;
    this.legalizacionService.getDataTable(this.obrasSelect, 1, this.lengthTable, sortFilterTemp, filterTemp, this.reportType)
      .subscribe(
        (data: any) => {
          console.log('data export ', data);
          this._excelExportService.exportAsExcelFile(data.data, 'backup', this.reportType);
          this.displayLoading = false;
        }, (err: any) => {
          console.log(err);
          this.displayLoading = false;
        });

  }


  cleanFilter() {
    this.filterDateList = []
    this.searchCondition = {};
    this.searchConditionDateFilter = {};
    this.sortFilter = {
      name: null,
      direction: null
    }
    this.eventsSubjectDateFilter.next();

    this.quickSearch.setValue('');
    this.searchTemp = '';

    let filterTemp = this.getFilterParameters();
    let sortFilterTemp = null;
    if (this.sortFilter.name != null && this.sortFilter.direction != null) {
      sortFilterTemp = `${/\s/g.test(this.sortFilter.name) ? `[${this.sortFilter.name}]` : this.sortFilter.name} ${String(this.sortFilter.direction).toUpperCase()}`;

    }

    this.displayLoading = true;
    this.page = 1;

    if (filterTemp != null) {
      filterTemp = filterTemp.replaceAll(';', ',');
    }

    this.legalizacionService.getDataTable(this.obrasSelect, this.page, this.sizePage, sortFilterTemp, filterTemp, this.reportType)
      .subscribe(
        (resultado: any) => {
          console.log(resultado);
          this.dataTable = resultado.data;
          this.dataSource = new MatTableDataSource<any>(resultado.data);
          // this.dataSource.paginator = this.paginator;
          this.lengthTable = resultado.count;
          this.paginator.length = resultado.count;
          this.paginator.pageIndex = 0;
          console.log('####this.lengthTable', this.lengthTable);

          this.displayLoading = false;
        }, err => {
          this.displayLoading = false;
        }
      )
  }


  getHeaderOptionsTable(dataGroup: any) {
    console.log('####dataGroup ', dataGroup);

    let idTemp = this.removeWhiteSpaces(dataGroup);
    if (idTemp.includes('.') && !idTemp.includes('=')) {
      let tempv = idTemp.split('.');
      tempv.length > 1 ? idTemp = tempv[1] : idTemp = tempv[0];
    }

    // setTimeout(() => {
    //   console.log('car eventooooooo');
    $('#' + idTemp).show();

    // }, 250);
    let filterTemp: any = this.getFilterParameters(dataGroup);

    console.log('#### filterTemp ####', filterTemp);


    // this.displayLoading = true;
    AppComponent.displayLoading = true;

    let idFormat = dataGroup;
    idFormat = this._utilsService.getOriginalNameFromColumnCalculate(idFormat);
    console.log('####idFormat ', idFormat);

    if (filterTemp != null) {
      filterTemp = filterTemp.replaceAll(';', ',');
    }

    idFormat = this._utilsService.processComputedColumn(idFormat);
    console.log('calculada idFormat', idFormat);

    this.legalizacionService.getHeaderOptionsTable(this.obrasSelect, idFormat, filterTemp, this.reportType)
      .subscribe(
        (data: any) => {
          console.log(data);

          data = data.map((sweetItem: String) => {
            if (sweetItem == null || (sweetItem != null && sweetItem.toString().trim() == '')) {
              sweetItem = "Vacio";
            }
            return sweetItem;
          })

          this.filtersOptions[String(dataGroup)] = data;
          console.log(this.filtersOptions);
          this.eventsSubjectSearchedSimpleFilter.next();

          // this.displayLoading = false;
          AppComponent.displayLoading = false;

        }, (err: any) => {
          console.log(err);
          // this.displayLoading = false;
          AppComponent.displayLoading = false;

        }
      )
  }

  getHeaderOptionFilterList(evt: any) {


    let dataGroup = evt.id;
    let search = evt.search;
    console.log('---dato ', dataGroup);

    let filterTemp: string = this.getFilterParameters(dataGroup);

    console.log('#### filterTemp ####', filterTemp);


    AppComponent.displayLoading = true;

    let idFormat = dataGroup;
    if (/ /g.test(idFormat)) {
      if (String(idFormat).includes('=')) {
        if (String(idFormat).includes('when') || String(idFormat).includes('WHEN') || String(idFormat).includes('When')) {
          idFormat = idFormat.replaceAll("'", "''");
          idFormat = `(${idFormat})`;
        } else {
          idFormat = `(${idFormat})`;
        }
      } else {
        idFormat = `[${idFormat}]`;
      }
    }
    this.legalizacionService.getHeaderOptionFilterList(this.obrasSelect, idFormat, filterTemp, search, this.reportType)
      .subscribe(
        (data: any) => {
          console.log(data);

          data = data.map((sweetItem: String) => {
            if (sweetItem == null || (sweetItem != null && sweetItem.toString().trim() == '')) {
              sweetItem = "Vacio";
            }
            return sweetItem;
          })

          this.filtersOptions[String(dataGroup)] = data;
          console.log(this.filtersOptions);
          this.eventsSubjectSearchedSimpleFilter.next();

          AppComponent.displayLoading = false;
        }, (err: any) => {
          console.log(err);
          AppComponent.displayLoading = false;

        }
      )
  }


  openDateFilter(dataGroup: any) {
    console.log('borrrar comentario ', this.searchConditionDateFilter);

    dataGroup = this.safeColumn(dataGroup);
    console.log('openDateFilter', dataGroup + '-date');

    $('#' + dataGroup + '-date').show();
  }



  applyFilter(evt: any) {
    // console.log('##### evento padre',id);
    var keys: any = Object.keys(evt);
    if (keys.length > 0) {
      console.log('sub_keys', keys);
      keys.forEach((element: any) => {
        console.log(element);
        this.searchCondition[element] = evt[element];
      })
    }
    // this.searchCondition = evt;
    console.log('this.searchCondition', this.searchCondition);

    // $('#' + id).hide();

    let filterTemp = this.getFilterParameters();

    let sortFilterTemp = null;
    if (this.sortFilter.name != null && this.sortFilter.direction != null) {
      sortFilterTemp = `${/\s/g.test(this.sortFilter.name) ? `[${this.sortFilter.name}]` : this.sortFilter.name} ${String(this.sortFilter.direction).toUpperCase()}`;

    }
    this.page = 1;
    this.displayLoading = true;


    filterTemp = filterTemp.replaceAll(';', ',');
    console.log('calculada idFormat', filterTemp);

    this.legalizacionService.getDataTable(this.obrasSelect, this.page, this.sizePage, sortFilterTemp, filterTemp, this.reportType)
      .subscribe(
        (resultado: any) => {
          console.log(resultado);
          // this.resultado = resultado;
          this.dataTable = resultado.data;
          this.dataSource = new MatTableDataSource<any>(resultado.data);
          this.dataSource.paginator = this.paginator;
          this.lengthTable = resultado.count;
          this.displayLoading = false;
        }, err => {
          this.displayLoading = false;
        }
      )

  }

  clearColumn(evt: any): void {
    delete this.searchCondition[evt];
    console.log(this.searchCondition);
    let filterTemp = this.getFilterParameters();
    console.log('limpiar filtro ', filterTemp);
    this.getDataTable();

  }

  applyFilterDate(evt: any) {
    if (evt) {

      let isNew = true;
      for (let index = 0; index < this.filterDateList.length; index++) {
        const element = this.filterDateList[index];
        if (element.field == evt.field) {
          this.filterDateList[index].query = evt.query;
          console.log('filtro repetido, remplzando filtro');
          isNew = false;
        }
      }

      console.log(evt);
      if (isNew) {
        this.filterDateList.push(evt);
        this.searchConditionDateFilter[evt.field] = evt.query;
        console.log(evt.field);
        console.log('this.searchConditionDateFilter', this.searchConditionDateFilter);

      }

      this.page = 1;
      this.getDataTable();
      this.dataSource.paginator = this.paginator;

    }
  }

  deleteFilterDate(evt: any) {
    console.log(evt);
    let listTemp: any[] = [];
    for (let index = 0; index < this.filterDateList.length; index++) {
      const element = this.filterDateList[index];
      if (element.field != evt) {
        listTemp.push(element);
      } else {
        delete this.searchConditionDateFilter[evt];
      }
    }
    this.filterDateList = listTemp;
    this.getDataTable();

  }



  getFilterParameters(header?: any): any {
    console.log('armar filtros con esto', this.searchCondition);

    let filterTemp = "";
    var keys: any = Object.keys(this.searchCondition);
    if (keys.length > 0) {
      console.log('keys', keys);

      keys.forEach((element: any) => {
        console.log(element);
        console.log('filtro con header ' + header + ' keys ' + element);

        if (header != null && element == header) {
        } else {

          let listTemp = this.searchCondition[element].map((sweetItem: String) => {
            return `''${sweetItem}''`;
          });

          element = this._utilsService.getOriginalNameFromColumnCalculate(element);

          if (listTemp.length <= 1 && listTemp.includes("''Vacio''")) {
            filterTemp = filterTemp + ` AND (${element} IS NULL OR ${element} = '''') `;
          } else if (listTemp.length > 1 && listTemp.includes("''Vacio''")) {
            let itemTemp = listTemp.toString();
            itemTemp = itemTemp.replace(",''Vacio''", '');
            itemTemp = itemTemp.replace("''Vacio'',", '');
            itemTemp = itemTemp.replace("''Vacio''", '');

            if (/ /g.test(element)) {
              if (String(element).includes('=')) {
                if (String(element).includes('when') || String(element).includes('WHEN') || String(element).includes('When')) {
                  element = element.replaceAll("'", "''");
                  element = `(${element})`;
                } else {
                  element = `(${element})`;
                }
              } else {
                element = `[${element}]`;
              }
            }
            filterTemp = filterTemp + ` AND (${element} IN (${itemTemp}) OR ${element} IS NULL)`;
          } else {
            if (/ /g.test(element)) {
              if (String(element).includes('=')) {
                if (String(element).includes('when') || String(element).includes('WHEN') || String(element).includes('When')) {
                  element = element.replaceAll("'", "''");
                  element = `(${element})`;
                } else {
                  element = `(${element})`;
                }
              } else {
                element = `[${element}]`;
              }
            }
            filterTemp = filterTemp + ` AND ${element} IN (${listTemp.toString()})`;
          }
        }


      });


      console.log(filterTemp);
    }


    let searchQuicklyTemp = this.searchTemp;
    searchQuicklyTemp = searchQuicklyTemp == null ? '' : searchQuicklyTemp;
    console.log('agregamos ', searchQuicklyTemp);

    filterTemp = filterTemp + searchQuicklyTemp;

    for (let index = 0; index < this.filterDateList.length; index++) {
      let element = this.filterDateList[index];
      // element.query = element.query.replaceAll('RadicacionCobroSubsidio2_SUR2', 'SUR2');
      // element.query = element.query.replaceAll('RadicacionCobroSubsidio3_SUR3', 'SUR3');
      filterTemp = filterTemp + element.query;
    }

    return filterTemp == "" ? null : filterTemp;
  }

  selectRow(id) {
    console.log(id);
    this.rowSelected = id;
  }

  editElement(element) {
    console.log(`###### ${element}  ######`);

    let sortFilterTemp = null;
    if (this.sortFilter.name != null && this.sortFilter.direction != null) {
      sortFilterTemp = `${/\s/g.test(this.sortFilter.name) ? `[${this.sortFilter.name}]` : this.sortFilter.name} ${String(this.sortFilter.direction).toUpperCase()}`;

    }
    let filterTemp = this.getFilterParameters();

    const dialogRef = this.dialog.open(ModifyDatatableComponent, {
      height: '80%',
      data: {
        element: element,
        obras: this.obrasSelect,
        sortFilter: sortFilterTemp,
        filter: filterTemp,
        reportType: this.reportType
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getDataTable();
    });
  }

  getStatusRules(column, id) {
    if (column == 'GesCred' || column == 'GesSub' || column == 'GesCart') {

      for (let index = 0; index < this.negativeColorRules.length; index++) {
        const element = this.negativeColorRules[index];
        if (String(element).toUpperCase() == String(id).toUpperCase()) {
          return 0;
        }
      }
      for (let index = 0; index < this.ok1ColorRules.length; index++) {
        const element = this.ok1ColorRules[index];
        if (String(element).toUpperCase() == String(id).toUpperCase()) {
          return 1;
        }
      }

      for (let index = 0; index < this.ok2ColorRules.length; index++) {
        const element = this.ok2ColorRules[index];
        if (String(element).toUpperCase() == String(id).toUpperCase()) {
          return 2;
        }
      }
      for (let index = 0; index < this.expirationColorRules.length; index++) {
        const element = this.ok2ColorRules[index];
        if (String(element).toUpperCase() == String(id).toUpperCase()) {
          return 3;
        }
      }

    }
  }

  actionPanel() {
    console.log('actionPanel');
  }

  removeWhiteSpaces(txt) {
    txt = this._utilsService.getAliasFromColumnCalculate(txt);
    return txt.replace(/ /g, '');
  }

  getHeaderType(header) {
    let response = this._utilsService.getHeaderType(header);
    return response;
  }

  getAliasFromColumnCalculate(header) {
    return this._utilsService.getAliasFromColumnCalculate(header);
  }

  safeColumn(txt) {
    txt = String(txt).replace('+', '-');
    if (txt.includes('.') && !txt.includes('=')) {
      let tempv = txt.split('.');
      tempv.length > 1 ? txt = tempv[1] : txt = tempv[0];
    }
    txt = this._utilsService.getAliasFromColumnCalculate(txt);
    return txt.replace(/ /g, '');
  }


  protected getReportType(name: string): number {

    if (name == 'legalizacion') {
      return this.LEGALIZACION;
    } else if (name == 'promesas') {
      return this.PROMESA;
    } if (name == 'subsidios') {
      return this.SUBSIDIO;
    } if (name == 'segumientos-subsidio') {
      return this.SEGUIMIENTO_SUBSIDIO;
    } if (name == 'entregas') {
      return this.ENTREGA;
    } else if (name == 'desembolsos') {
      return this.DESEMBOLSO;
    } if (name == 'recaudos') {
      return this.RECAUDO;
    } else if (name == 'trazabilidad') {
      return this.TRAZABILIDAD;
    } else if (name == 'ordenes') {
      return this.ORDENES;
    } else if (name == 'renovaciones') {
      return this.RENOVACION;
    } else if (name == 'escrituracion') {
      return this.ESCRITURACION;
    }

    return;
  }

  protected getReportName(name: string): string {

    if (name == 'legalizacion') {
      return 'Legalizacion';
    } else if (name == 'promesas') {
      return 'Promesas';
    } if (name == 'subsidios') {
      return 'Subsidios';
    } if (name == 'segumientos-subsidio') {
      return 'Segumientos Subsidio';
    } if (name == 'entregas') {
      return 'Entregas';
    } else if (name == 'desembolsos') {
      return 'Desembolsos';
    } if (name == 'recaudos') {
      return 'Recaudos';
    } else if (name == 'trazabilidad') {
      return 'Trazabilidad';
    } else if (name == 'ordenes') {
      return 'Ordenes';
    } else if (name == 'renovaciones') {
      return 'Renovaciones';
    } else if (name == 'escrituracion') {
      return 'Escrituraciones';
    }

    return;
  }



}
