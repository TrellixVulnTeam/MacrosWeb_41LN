import { EventEmitter, Output } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationService } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';
import { LegalizacionService } from 'src/app/services/legalizacion.service';

@Component({
  selector: 'app-modify-datatable',
  templateUrl: './modify-datatable.component.html',
  styleUrls: ['./modify-datatable.component.scss']
})
export class ModifyDatatableComponent implements OnInit {

  obrasSelect: any = "''2-4'',''2-8'',''104-164'',''104-165'',''104-166'',''104-167'',''104-168'',''104-169'',''107-100'',''107-101'',''107-102'',''107-103'',''107-104'',''107-106'',''107-107'',''107-108'',''107-109'',''107-110'',''107-111'',''107-116'',''107-117'',''107-118'',''107-119'',''107-121'',''107-122'',''107-123'',''107-124'',''107-125'',''107-126'',''107-127'',''107-128'',''107-129'',''107-130'',''107-133'',''107-134'',''107-135'',''107-136'',''107-137'',''107-138'',''107-139'',''107-140'',''107-141'',''107-142'',''107-143'',''107-144'',''107-145'',''108-105'',''108-106'',''111-146'',''111-147'',''112-1107'',''112-1108'',''112-1109'',''112-1110'',''112-1111'',''112-1112'',''112-1113'',''112-113'',''112-114'',''122-12'',''122-13'',''123-101'',''123-102'',''124-101'',''124-102'',''128-10'',''129-100'',''129-101'',''130-4'',''130-5'',''131-100'',''131-101'',''132-100'',''132-101'',''133-107'',''133-109'',''133-111'',''133-115'',''133-116'',''138-1'',''138-2'',''139-1'',''139-10'',''139-11'',''139-2'',''139-3'',''139-8'',''140-100'',''146-100'',''147-100'',''147-101'',''149-100'',''149-101'',''149-102'',''152-1'',''152-10'',''152-11'',''152-2'',''152-3'',''152-4'',''152-7'',''152-8'',''152-9'',''153-1'',''153-10'',''153-11'',''153-12'',''153-2'',''153-3'',''153-4'',''153-5'',''153-6'',''153-7'',''153-8'',''153-9'',''154-1'',''154-2'',''155-1'',''155-2'',''156-1'',''156-2'',''156-3'',''157-1'',''157-2'',''158-3'',''158-4'',''159-1'',''160-1'',''160-138'',''160-139'',''160-140'',''160-141'',''160-142'',''160-143'',''160-144'',''160-145'',''160-146'',''160-147'',''161-100'',''161-101'',''162-100'',''162-101'',''162-102'',''162-104'',''162-105'',''162-106'',''162-107'',''163-100'',''2-102'',''2-113'',''2-117'',''2-15'',''2-16'',''2-18'',''2-22'',''2-23'',''2-24'',''2-26'',''2-266'',''2-290'',''2-294'',''2-30'',''2-301'',''2-31'',''2-32'',''2-328'',''2-333'',''2-337'',''2-338'',''2-346'',''2-35'',''2-369'',''2-371'',''2-373'',''2-376'',''2-38'',''2-380'',''2-383'',''2-384'',''2-399'',''2-400'',''2-406'',''2-417'',''2-422'',''2-423'',''2-424'',''2-425'',''2-426'',''2-427'',''2-428'',''2-429'',''2-430'',''2-431'',''2-435'',''2-447'',''2-449'',''2-452'',''2-455'',''2-457'',''2-458'',''2-462'',''2-464'',''2-465'',''2-466'',''2-467'',''2-468'',''2-469'',''2-470'',''2-471'',''2-472'',''2-473'',''2-476'',''2-477'',''2-497'',''2-498'',''2-509'',''2-510'',''2-513'',''2-518'',''2-519'',''2-520'',''2-526'',''2-527'',''2-537'',''2-538'',''2-541'',''2-550'',''2-563'',''2-564'',''2-565'',''2-578'',''2-580'',''2-586'',''2-644'',''2-645'',''2-646'',''2-652'',''2-658'',''2-661'',''2-663'',''2-665'',''2-667'',''2-668'',''2-669'',''2-670'',''2-671'',''2-672'',''2-681'',''2-693'',''2-694'',''2-695'',''2-696'',''2-715'',''2-73'',''2-739'',''2-740'',''2-741'',''2-742'',''2-753'',''2-776'',''2-78'',''2-79'',''2-793'',''2-799'',''2-800'',''2-813'',''2-814'',''2-839'',''2-840'',''2-875'',''27-342'',''55-1'',''74-1'',''74-2'',''74-3'',''77-509'',''77-510'',''77-513'',''77-514'',''77-516'',''77-518'',''80-447'',''87-101'',''87-102'',''87-103'',''93-101'',''93-102'',''93-103'',''93-104'',''93-105'',''93-108'',''96-10'',''96-11'',''96-2'',''96-21'',''96-22'',''96-25'',''96-26'',''96-3'',''96-33'',''96-34'',''96-35'',''96-36'',''96-37'',''96-4'',''96-5'',''96-6'',''96-7'',''96-8'',''96-9''";

  public estadoCoordinadorList: any = [];
  public estadoAnalistaList: any = [];
  public asignacionAnalistaList: any = [];
  public horaEntregaList: any = [];
  public tipificacionCorreccionesCtlList: any = [];
  public creacionCasoList: any = [];

  public frplList: any = [];
  public quienFirmaEsfpList: any = [];
  public estadoEsfpFrplList: any = [];
  public estadoAbogadoList: any = [];
  public presentoCambioList: any = [];
  public estadoPySList: any = [];
  public estadoEscrituradoList: any = [];
  public tipoProyectoMList: any = [];

  public campanasEspecialesList: any = [];
  public causalRenovacionList: any = [];
  public estadoPoderAnalistaList: any = [];
  public asignacionList: any = [];
  public brokerList: any = [];

  public estadoAuxiliarList:any = [];

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

  form: FormGroup;
  beforeList: [] = [];

  public currentElement: any = {};
  private obras: any;
  private sortStr: any;
  private filterStr: any;

  searchTextEstadoCoordinador: any;
  searchTextEstadoAnalista: any;
  searchTextEstadoAuxiliar: any;
  searchTextAsignacionAnalista: any;
  searchTextHoradeEntrega: any;
  searchTextTipificacionCorreccionesCtl: any;
  searchTextcreacionCaso: any;

  searchTextFrp: any;
  searchTextQuienFirmaEsfp: any;
  searchTextEstadoEsfpFrpl: any;
  searchTextEstadoAbogado: any;
  searchTextPresentoCambio: any;
  searchTextestadoPyS: any;

  searchTextCampanasEspeciales: any;
  searchTextCausalRenovacion: any;
  searchTextEstadoPoderAnalista: any;
  searchTextAsignacion: any;
  searchTextBroker: any;
  searchTextEstadoEscriturado: any;
  searchTextTipoProyectoM: any;



  displayLoading: boolean = false;

  reportType: number;

  disableValidation = {
    FechadeEntrega: true,
    HoradeEntrega: true,
    CreacionCaso: true,
    Apoderado: true,
    EstadoCoordinador: true,
    ObservacionCoordinador: true,
    EstadoAnalista: true,
    ObservacionAnalista: true,
    Arquitecta: true,

    FechaSeguimientoCoordinador: true,
    FechaSeguimientoAnalista: true,
    FechaAsignacion: true,
    AsignacionAnalista: true,
    AnalistaVarado: true,
    FechaAsignacionVarado: true,
    FechaDesvarado: true,

    Comentarios: true,

    TipificacionCorreccionesCtl: true,
    NBR: true,
    AnalistaTrazabilidad: true,
    DetalleObservacion: true,

    Frpl: true,
    QuienFirmaEsfp: true,
    EstadoEsfpFrpl: true,
    EstadoAbogado: true,
    ObservacionAbogado: true,
    PresentoCambio: true,
    CualFueElCambio: true,
    NoPredialNacional: true,
    NumeroId: true,
    IdMunicipio: true,
    RadicacionOrdenPagoPySPredial: true,
    FechaEstimadaDePyS: true,
    TipoPyS: true,
    MunicipioPyS: true,
    EstadoPyS: true,
    EstadoOrdenes: true,
    TipoProyectoM: true,
    ValorFacturaPazySalvoPredial: true,
    ValorEstampilla: true,
    ValorEstampillaDepartamental: true,

    Asignacion: true,
    Broker: true,

    CampanasEspeciales: true,
    CausalRenovacion: true,
    EstadoPoderAnalista: true,

    FechaAcuerdoProximoPago: true,
    MontoPactado: true,
    LlamadaNo1: true,
    LlamadaNo2: true,
    Carta1: true,
    Carta2: true,
    Carta3: true,
    EstadoEscriturado: true,

    EstadoAuxiliar: true,
    ObservacionAuxiliar: true,
  }

  constructor(
    private legalizacionService: LegalizacionService,
    public dialogRef: MatDialogRef<ModifyDatatableComponent>,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    console.log('##### data', data.element);
    this.currentElement = data.element;
    this.reportType = data.reportType;

    this.sortStr = data.sortFilter;
    this.filterStr = data.filter;
    this.obras = data.obras;


    let toolName = this.getToolName(this.reportType);

    AppComponent.displayLoading = true;
    this.legalizacionService.getOptionListModal(toolName, 'EstadoCoordinador')
      .subscribe(
        (response: any) => {
          console.log(response);
          this.estadoCoordinadorList = response;
          AppComponent.displayLoading = false;
          this.estadoCoordinadorList.unshift('Vacio');
        }
      )

    AppComponent.displayLoading = true;
    this.legalizacionService.getOptionListModal(toolName, 'EstadoAnalista')
      .subscribe(
        (response: any) => {
          console.log(response);
          this.estadoAnalistaList = response;
          AppComponent.displayLoading = false;
          this.estadoAnalistaList.unshift('Vacio');
        }
      )

    AppComponent.displayLoading = true;
    this.legalizacionService.getOptionListModal(toolName, 'AsignacionAnalista')
      .subscribe(
        (response: any) => {
          console.log(response);
          this.asignacionAnalistaList = response;
          AppComponent.displayLoading = false;
          this.asignacionAnalistaList.unshift('Vacio');
        }
      )

    if (this.reportType == 5) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'HoradeEntrega')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.horaEntregaList = response;
            AppComponent.displayLoading = false;
            this.horaEntregaList.unshift('Vacio');
          }
        )
    }
    if (this.reportType == 5) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'CreacionCaso')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.creacionCasoList = response;
            AppComponent.displayLoading = false;
            this.creacionCasoList.unshift('Vacio');
          }
        )
    }

    if (this.reportType == 7) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'EstadoEscriturado')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.estadoEscrituradoList = response;
            AppComponent.displayLoading = false;
            this.estadoEscrituradoList.unshift('Vacio');
          }
        )
    }


    if (this.reportType == 8) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'TipificacionCorreccionesCtl')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.tipificacionCorreccionesCtlList = response;
            AppComponent.displayLoading = false;
            this.tipificacionCorreccionesCtlList.unshift('Vacio');
          }
        )
    }

    if (this.reportType == 9) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'Frpl')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.frplList = response;
            AppComponent.displayLoading = false;
            this.frplList.unshift('Vacio');
          }
        )
    }

    if (this.reportType == 9) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'QuienFirmaEsfp')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.quienFirmaEsfpList = response;
            AppComponent.displayLoading = false;
            this.quienFirmaEsfpList.unshift('Vacio');
          }
        )
    }

    if (this.reportType == 9) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'EstadoEsfpFrpl')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.estadoEsfpFrplList = response;
            AppComponent.displayLoading = false;
            this.estadoEsfpFrplList.unshift('Vacio');
          }
        )
    }

    if (this.reportType == 9) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'EstadoAbogado')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.estadoAbogadoList = response;
            AppComponent.displayLoading = false;
            this.estadoAbogadoList.unshift('Vacio');
          }
        )
    }

    if (this.reportType == 9) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'PresentoCambio')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.presentoCambioList = response;
            AppComponent.displayLoading = false;
            this.presentoCambioList.unshift('Vacio');
          }
        )
    }

    if (this.reportType == 9) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'EstadoPyS')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.estadoPySList = response;
            AppComponent.displayLoading = false;
            this.estadoPySList.unshift('Vacio');
          }
        )
    }

    if (this.reportType == 9) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'TipoProyectoM')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.tipoProyectoMList = response;
            AppComponent.displayLoading = false;
            this.tipoProyectoMList.unshift('Vacio');
          }
        )
    }

    if (this.reportType == 9) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'EstadoAuxiliar')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.estadoAuxiliarList = response;
            AppComponent.displayLoading = false;
            this.estadoAuxiliarList.unshift('Vacio');
          }
        )
    }



    if (this.reportType == 10) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'CampanasEspeciales')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.campanasEspecialesList = response;
            AppComponent.displayLoading = false;
            this.campanasEspecialesList.unshift('Vacio');
          }
        )
    }

    if (this.reportType == 10) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'CausalRenovacion')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.causalRenovacionList = response;
            AppComponent.displayLoading = false;
            this.causalRenovacionList.unshift('Vacio');
          }
        )
    }

    if (this.reportType == 10) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'EstadoPoderAnalista')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.estadoPoderAnalistaList = response;
            AppComponent.displayLoading = false;
            this.estadoPoderAnalistaList.unshift('Vacio');
          }
        )
    }

    if (this.reportType == 10) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'Asignacion')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.asignacionList = response;
            AppComponent.displayLoading = false;
            this.asignacionList.unshift('Vacio');
          }
        )
    }

    if (this.reportType == 10) {
      AppComponent.displayLoading = true;
      this.legalizacionService.getOptionListModal(toolName, 'Broker')
        .subscribe(
          (response: any) => {
            console.log(response);
            this.brokerList = response;
            AppComponent.displayLoading = false;
            this.brokerList.unshift('Vacio');
          }
        )
    }

  }

  ngOnInit(): void {
    let role = localStorage.getItem('role');
    console.log('role', role);

    if (role == 'Administrador') {
      this.disableValidation = {
        FechadeEntrega: false,
        HoradeEntrega: false,
        CreacionCaso: false,
        Apoderado: false,
        EstadoCoordinador: false,
        ObservacionCoordinador: false,
        EstadoAnalista: false,
        ObservacionAnalista: false,
        Arquitecta: false,

        FechaSeguimientoCoordinador: false,
        FechaSeguimientoAnalista: false,
        FechaAsignacion: false,
        AsignacionAnalista: false,
        AnalistaVarado: false,
        FechaAsignacionVarado: false,
        FechaDesvarado: false,

        Comentarios: false,

        TipificacionCorreccionesCtl: false,
        NBR: false,
        AnalistaTrazabilidad: false,
        DetalleObservacion: false,

        Frpl: false,
        QuienFirmaEsfp: false,
        EstadoEsfpFrpl: false,
        EstadoAbogado: false,
        ObservacionAbogado: false,
        PresentoCambio: false,
        CualFueElCambio: false,
        NoPredialNacional: false,
        NumeroId: false,
        IdMunicipio: false,
        RadicacionOrdenPagoPySPredial: false,
        FechaEstimadaDePyS: false,
        TipoPyS: false,
        MunicipioPyS: false,
        EstadoPyS: false,
        EstadoOrdenes: false,
        TipoProyectoM: false,
        ValorFacturaPazySalvoPredial: false,
        ValorEstampilla: false,
        ValorEstampillaDepartamental: false,

        Asignacion: false,
        Broker: false,

        CampanasEspeciales: false,
        CausalRenovacion: false,
        EstadoPoderAnalista: false,

        FechaAcuerdoProximoPago: false,
        MontoPactado: false,
        LlamadaNo1: false,
        LlamadaNo2: false,
        Carta1: false,
        Carta2: false,
        Carta3: false,
        EstadoEscriturado: false,

        EstadoAuxiliar: false,
        ObservacionAuxiliar: false,
      }
    } else {
      if ((role == 'Administrador' || role == 'Analista') && this.reportType == 1) {
        this.disableValidation.EstadoAnalista = false;
        this.disableValidation.ObservacionAnalista = false;
        this.disableValidation.FechaSeguimientoAnalista = false;
        this.disableValidation.FechaAsignacion = false;
        this.disableValidation.AsignacionAnalista = false;
        this.disableValidation.AnalistaVarado = false;
        this.disableValidation.FechaAsignacionVarado = false;
        this.disableValidation.FechaDesvarado = false;
      } else if ((role == 'Administrador' || role == 'Coordinador') && this.reportType == 1) {
        this.disableValidation.EstadoCoordinador = false;
        this.disableValidation.ObservacionCoordinador = false;
        this.disableValidation.FechaSeguimientoCoordinador = false;
      }

      if ((role == 'Administrador' || role == 'Analista') && this.reportType == 2) {
        this.disableValidation.EstadoAnalista = false;
        this.disableValidation.ObservacionAnalista = false;
      } else if ((role == 'Administrador' || role == 'Coordinador') && this.reportType == 2) {
        this.disableValidation.EstadoCoordinador = false;
        this.disableValidation.ObservacionCoordinador = false;
      }



      if ((role == 'Administrador' || role == 'Analista' || role == 'Coordinador') && this.reportType == 3) {
        this.disableValidation.EstadoAnalista = false;
        this.disableValidation.ObservacionAnalista = false;
        this.disableValidation.Comentarios = false;
        this.disableValidation.EstadoCoordinador = false;
        this.disableValidation.ObservacionCoordinador = false;
      }

      if ((role == 'Administrador' || role == 'Analista') && this.reportType == 4) {
        this.disableValidation.EstadoAnalista = false;
        this.disableValidation.ObservacionAnalista = false;
      } else if ((role == 'Administrador' || role == 'Coordinador') && this.reportType == 4) {
        this.disableValidation.EstadoCoordinador = false;
        this.disableValidation.ObservacionCoordinador = false;
      }

      if ((role == 'Administrador' || role == 'Analista') && this.reportType == 5) {
        this.disableValidation.FechadeEntrega = false;
        this.disableValidation.HoradeEntrega = false;
        this.disableValidation.CreacionCaso = false;
        this.disableValidation.Apoderado = false;
        this.disableValidation.EstadoAnalista = false;
        this.disableValidation.ObservacionAnalista = false;
        this.disableValidation.Arquitecta = false;
      } else if ((role == 'Administrador' || role == 'Coordinador') && this.reportType == 5) {
        this.disableValidation.EstadoCoordinador = false;
        this.disableValidation.ObservacionCoordinador = false;
      }

      if ((role == 'Administrador' || role == 'Analista' || role == 'Coordinador') && this.reportType == 6) {
        this.disableValidation.EstadoAnalista = false;
        this.disableValidation.ObservacionAnalista = false;
        this.disableValidation.Comentarios = false;
        this.disableValidation.EstadoCoordinador = false;
        this.disableValidation.ObservacionCoordinador = false;
      }

      if ((role == 'Administrador' || role == 'Analista') && this.reportType == this.RECAUDO) {
        this.disableValidation.EstadoAnalista = false;
        this.disableValidation.ObservacionAnalista = false;
        this.disableValidation.FechaAcuerdoProximoPago = false;
        this.disableValidation.MontoPactado = false;
        this.disableValidation.LlamadaNo1 = false;
        this.disableValidation.LlamadaNo2 = false;
        this.disableValidation.Carta1 = false;
        this.disableValidation.Carta2 = false;
        this.disableValidation.Carta3 = false;
        this.disableValidation.EstadoEscriturado = false;
      } else if ((role == 'Administrador' || role == 'Coordinador') && this.reportType == this.RECAUDO) {
        this.disableValidation.EstadoAnalista = false;
        this.disableValidation.EstadoCoordinador = false;
        this.disableValidation.ObservacionCoordinador = false;
        this.disableValidation.FechaAcuerdoProximoPago = false;
        this.disableValidation.MontoPactado = false;
        this.disableValidation.Carta3 = false;
      }

      if ((role == 'Administrador' || role == 'Analista' || role == 'Coordinador' || role == 'Visualizador') && this.reportType == 8) {
        this.disableValidation.EstadoAnalista = false;
        this.disableValidation.ObservacionAnalista = false;
        this.disableValidation.TipificacionCorreccionesCtl = false;
        this.disableValidation.NBR = false;
        this.disableValidation.AnalistaTrazabilidad = false;
        this.disableValidation.DetalleObservacion = false;
        this.disableValidation.EstadoCoordinador = false;
        this.disableValidation.ObservacionCoordinador = false;
      }


      if ((role == 'Administrador' || role == 'Analista') && this.reportType == 9) {
        this.disableValidation.EstadoAuxiliar = false;
        this.disableValidation.ObservacionAnalista = false;

        this.disableValidation.EstadoAbogado = false;
        this.disableValidation.ObservacionAbogado = false;
        // this.disableValidation.Frpl = false;
        // this.disableValidation.QuienFirmaEsfp = false;
        // this.disableValidation.EstadoEsfpFrpl = false;
        // this.disableValidation.EstadoAbogado = false;
        // this.disableValidation.ObservacionAbogado = false;
        this.disableValidation.PresentoCambio = false;
        this.disableValidation.CualFueElCambio = false;
        this.disableValidation.NoPredialNacional = false;
        this.disableValidation.NumeroId = false;
        this.disableValidation.IdMunicipio = false;
        this.disableValidation.RadicacionOrdenPagoPySPredial = false;
        this.disableValidation.FechaEstimadaDePyS = false;
        this.disableValidation.TipoPyS = false;
        this.disableValidation.MunicipioPyS = false;
        this.disableValidation.EstadoPyS = false;
        this.disableValidation.EstadoOrdenes = false;

        this.disableValidation.TipoProyectoM = false;
        this.disableValidation.ValorFacturaPazySalvoPredial = false;
        this.disableValidation.ValorEstampilla = false;
        this.disableValidation.ValorEstampillaDepartamental = false;
      } else if ((role == 'Administrador' || role == 'Coordinador') && this.reportType == 9) {
        this.disableValidation.Frpl = false;
        this.disableValidation.QuienFirmaEsfp = false;
        this.disableValidation.EstadoEsfpFrpl = false;
        // this.disableValidation.EstadoAbogado = false;
        // this.disableValidation.ObservacionAbogado = false;


        this.disableValidation.EstadoCoordinador = false;
        this.disableValidation.ObservacionCoordinador = false;


        this.disableValidation.PresentoCambio = false;
        this.disableValidation.CualFueElCambio = false;
        this.disableValidation.NoPredialNacional = false;
        this.disableValidation.NumeroId = false;
        this.disableValidation.IdMunicipio = false;
        this.disableValidation.RadicacionOrdenPagoPySPredial = false;
        this.disableValidation.FechaEstimadaDePyS = false;
        this.disableValidation.TipoPyS = false;
        this.disableValidation.MunicipioPyS = false;
        this.disableValidation.EstadoPyS = false;
        this.disableValidation.EstadoOrdenes = false;

        this.disableValidation.TipoProyectoM = false;
        this.disableValidation.ValorFacturaPazySalvoPredial = false;
        this.disableValidation.ValorEstampilla = false;
        this.disableValidation.ValorEstampillaDepartamental = false;
      }


      if ((role == 'Administrador' || role == 'Analista') && this.reportType == 10) {
        this.disableValidation.EstadoAnalista = false;
        this.disableValidation.ObservacionAnalista = false;
        this.disableValidation.CampanasEspeciales = false;
        this.disableValidation.FechaSeguimientoAnalista = false;
        this.disableValidation.EstadoPoderAnalista = false;
        this.disableValidation.Broker = false;
      } else if ((role == 'Administrador' || role == 'Coordinador') && this.reportType == 10) {
        this.disableValidation.CampanasEspeciales = false;
        this.disableValidation.EstadoPoderAnalista = false;
        this.disableValidation.FechaSeguimientoCoordinador = false;
        this.disableValidation.EstadoCoordinador = false;
        this.disableValidation.ObservacionCoordinador = false;
        this.disableValidation.Asignacion = false;
        this.disableValidation.Broker = false;
        this.disableValidation.FechaAsignacion = false;
        this.disableValidation.CausalRenovacion = false;

      }

      if ((role == 'Administrador' || role == 'Analista') && this.reportType == 11) {
        this.disableValidation.EstadoAnalista = false;
        this.disableValidation.ObservacionAnalista = false;
      } else if ((role == 'Administrador' || role == 'Coordinador') && this.reportType == 11) {
        this.disableValidation.EstadoAnalista = false;
        this.disableValidation.ObservacionAnalista = false;
        this.disableValidation.EstadoCoordinador = false;
        this.disableValidation.ObservacionCoordinador = false;
      }
    }

    // this.getHeaderOptionsTable('EstadoCoordinador', 0);
    // this.getHeaderOptionsTable('EstadoAnalista', 1);
    // this.getHeaderOptionsTable('AsignacionAnalista', 2);
    // let timeFormat = new Date();
    // if (this.currentElement.HoradeEntrega != null) {
    //   let currentDate = new Date();
    //   let currentTimeSplit = this.currentElement.HoradeEntrega.split(':');
    //   console.log('currentTimeSplit.length', currentTimeSplit);

    //   if (currentTimeSplit.length > 2) {
    //     currentDate.setHours(currentTimeSplit[0]);
    //     currentDate.setMinutes(currentTimeSplit[1]);
    //     currentDate.setSeconds(currentTimeSplit[2]);
    //     timeFormat = currentDate;
    //   }
    // }
    console.log('this.currentElement.FechaAcuerdoProximoPago', this.currentElement.FechaAcuerdoProximoPago);

    this.form = this.formBuilder.group(
      {
        UNI_ID: [this.currentElement.UNI_ID],
        EstadoCoordinador: [{ value: this.currentElement.EstadoCoordinador, disabled: this.disableValidation.EstadoCoordinador }],
        ObservacionCoordinador: [{ value: this.currentElement.ObservacionCoordinador, disabled: this.disableValidation.ObservacionCoordinador }, [Validators.maxLength(8000)]],

        EstadoAnalista: [{ value: this.ORDENES != this.reportType ? this.currentElement.EstadoAnalista : this.currentElement.EstadoAuxiliar, disabled: this.disableValidation.EstadoAnalista }],
        ObservacionAnalista: [{ value: this.ORDENES != this.reportType ? this.currentElement.ObservacionAnalista : this.currentElement.ObservacionAuxiliar, disabled: this.disableValidation.ObservacionAnalista }, [Validators.maxLength(8000)]],

        AsignacionAnalista: [{ value: this.currentElement.AsignacionAnalista, disabled: this.disableValidation.AsignacionAnalista }],
        AnalistaVarado: [{ value: this.currentElement.AnalistaVarado, disabled: this.disableValidation.AnalistaVarado }],
        FechaSeguimientoCoordinador: [{ value: this.currentElement.FechaSeguimientoCoordinador != null ? new Date(this.currentElement.FechaSeguimientoCoordinador) : null, disabled: this.disableValidation.FechaSeguimientoCoordinador }],
        FechaAsignacion: [{ value: this.currentElement.FechaAsignacion != null ? new Date(this.currentElement.FechaAsignacion) : null, disabled: this.disableValidation.FechaAsignacion }],
        FechaSeguimientoAnalista: [{ value: this.currentElement.FechaSeguimientoAnalista != null ? new Date(this.currentElement.FechaSeguimientoAnalista) : null, disabled: this.disableValidation.FechaSeguimientoAnalista }],
        FechaAsignacionVarado: [{ value: this.currentElement.FechaAsignacionVarado != null ? new Date(this.currentElement.FechaAsignacionVarado) : null, disabled: this.disableValidation.FechaAsignacionVarado }],
        FechaDesvarado: [{ value: this.currentElement.FechaDesvarado != null ? new Date(this.currentElement.FechaDesvarado) : null, disabled: this.disableValidation.FechaDesvarado }],


        FechadeEntrega: [{ value: this.currentElement.FechadeEntrega != null ? new Date(this.currentElement.FechadeEntrega) : null, disabled: this.disableValidation.FechadeEntrega }],
        HoradeEntrega: [{ value: this.currentElement.HoradeEntrega != null ? this.currentElement.HoradeEntrega : null, disabled: this.disableValidation.HoradeEntrega }],
        Arquitecta: [{ value: this.currentElement.Arquitecta != null ? this.currentElement.Arquitecta : null, disabled: this.disableValidation.Arquitecta }],
        CreacionCaso: [{ value: this.currentElement.CreacionCaso != null ? this.currentElement.CreacionCaso : null, disabled: this.disableValidation.CreacionCaso }],
        Apoderado: [{ value: this.currentElement.Apoderado != null ? this.currentElement.Apoderado : null, disabled: this.disableValidation.Apoderado }],

        Comentarios: [{ value: this.currentElement.Comentarios != null ? this.currentElement.Comentarios : null, disabled: this.disableValidation.Comentarios }],


        TipificacionCorreccionesCtl: [{ value: this.currentElement.TipificacionCorreccionesCtl != null ? this.currentElement.TipificacionCorreccionesCtl : null, disabled: this.disableValidation.TipificacionCorreccionesCtl }],
        NBR: [{ value: this.currentElement.NBR != null ? this.currentElement.NBR : null, disabled: this.disableValidation.NBR }],
        AnalistaTrazabilidad: [{ value: this.currentElement.AnalistaTrazabilidad != null ? this.currentElement.AnalistaTrazabilidad : null, disabled: this.disableValidation.AnalistaTrazabilidad }],
        DetalleObservacion: [{ value: this.currentElement.DetalleObservacion != null ? this.currentElement.DetalleObservacion : null, disabled: this.disableValidation.DetalleObservacion }, [Validators.maxLength(8000)]],

        Frpl: [{ value: this.currentElement.Frpl != null ? this.currentElement.Frpl : null, disabled: this.disableValidation.Frpl }],
        QuienFirmaEsfp: [{ value: this.currentElement.QuienFirmaEsfp != null ? this.currentElement.QuienFirmaEsfp : null, disabled: this.disableValidation.QuienFirmaEsfp }],
        EstadoEsfpFrpl: [{ value: this.currentElement.EstadoEsfpFrpl != null ? this.currentElement.EstadoEsfpFrpl : null, disabled: this.disableValidation.EstadoEsfpFrpl }],
        EstadoAbogado: [{ value: this.currentElement.EstadoAbogado != null ? this.currentElement.EstadoAbogado : null, disabled: this.disableValidation.EstadoAbogado }],
        ObservacionAbogado: [{ value: this.currentElement.ObservacionAbogado != null ? this.currentElement.ObservacionAbogado : null, disabled: this.disableValidation.ObservacionAbogado }, [Validators.maxLength(8000)]],
        PresentoCambio: [{ value: this.currentElement.PresentoCambio != null ? this.currentElement.PresentoCambio : null, disabled: this.disableValidation.PresentoCambio }],
        CualFueElCambio: [{ value: this.currentElement.CualFueElCambio != null ? this.currentElement.CualFueElCambio : null, disabled: this.disableValidation.CualFueElCambio }],
        NoPredialNacional: [{ value: this.currentElement.NoPredialNacional != null ? this.currentElement.NoPredialNacional : null, disabled: this.disableValidation.NoPredialNacional }],
        NumeroId: [{ value: this.currentElement.NumeroId != null ? this.currentElement.NumeroId : null, disabled: this.disableValidation.NumeroId }],
        IdMunicipio: [{ value: this.currentElement.IdMunicipio != null ? this.currentElement.IdMunicipio : null, disabled: this.disableValidation.IdMunicipio }],
        RadicaciónOrdenPagoPySPredial: [{ value: this.currentElement.RadicaciónOrdenPagoPySPredial != null ? this.currentElement.RadicaciónOrdenPagoPySPredial : null, disabled: this.disableValidation.RadicacionOrdenPagoPySPredial }],
        FechaEstimadaDePyS: [{ value: this.currentElement.FechaEstimadaDePyS != null ? new Date(this.currentElement.FechaEstimadaDePyS) : null, disabled: this.disableValidation.FechaEstimadaDePyS }],
        TipoPyS: [{ value: this.currentElement.TipoPyS != null ? this.currentElement.TipoPyS : null, disabled: this.disableValidation.TipoPyS }],
        MunicipioPyS: [{ value: this.currentElement.MunicipioPyS != null ? this.currentElement.MunicipioPyS : null, disabled: this.disableValidation.MunicipioPyS }],
        EstadoPyS: [{ value: this.currentElement.EstadoPyS != null ? this.currentElement.EstadoPyS : null, disabled: this.disableValidation.EstadoPyS }],
        EstadoOrdenes: [{ value: this.currentElement.EstadoOrdenes != null ? this.currentElement.EstadoOrdenes : null, disabled: this.disableValidation.EstadoOrdenes }],

        TipoProyectoM: [{ value: this.currentElement.TipoProyectoM != null ? this.currentElement.TipoProyectoM : null, disabled: this.disableValidation.TipoProyectoM }],
        ValorFacturaPazySalvoPredial: [{ value: this.currentElement.ValorFacturaPazySalvoPredial != null ? this.currentElement.ValorFacturaPazySalvoPredial : null, disabled: this.disableValidation.ValorFacturaPazySalvoPredial }],
        ValorEstampilla: [{ value: this.currentElement.ValorEstampilla != null ? this.currentElement.ValorEstampilla : null, disabled: this.disableValidation.ValorEstampilla }],
        ValorEstampillaDepartamental: [{ value: this.currentElement.ValorEstampillaDepartamental != null ? this.currentElement.ValorEstampillaDepartamental : null, disabled: this.disableValidation.ValorEstampillaDepartamental }],


        CampanasEspeciales: [{ value: this.currentElement.CampanasEspeciales != null ? this.currentElement.CampanasEspeciales : null, disabled: this.disableValidation.CampanasEspeciales }],
        CausalRenovacion: [{ value: this.currentElement.CausalRenovacion != null ? this.currentElement.CausalRenovacion : null, disabled: this.disableValidation.CausalRenovacion }],
        EstadoPoderAnalista: [{ value: this.currentElement.EstadoPoderAnalista != null ? this.currentElement.EstadoPoderAnalista : null, disabled: this.disableValidation.EstadoPoderAnalista }],
        Asignacion: [{ value: this.currentElement.Asignacion != null ? this.currentElement.Asignacion : null, disabled: this.disableValidation.Asignacion }],
        Broker: [{ value: this.currentElement.Broker != null ? this.currentElement.Broker : null, disabled: this.disableValidation.Broker }],

        FechaAcuerdoProximoPago: [{ value: this.currentElement.FechaAcuerdoProximoPago != null ? new Date(this.currentElement.FechaAcuerdoProximoPago) : null, disabled: this.disableValidation.FechaAcuerdoProximoPago }],
        LlamadaNo1: [{ value: this.currentElement.LlamadaNo1 != null ? this.currentElement.LlamadaNo1 : null, disabled: this.disableValidation.LlamadaNo1 }],
        MontoPactado: [{ value: this.currentElement.MontoPactado != null ? this.currentElement.MontoPactado : null, disabled: this.disableValidation.MontoPactado }],
        LlamadaNo2: [{ value: this.currentElement.LlamadaNo2 != null ? this.currentElement.LlamadaNo2 : null, disabled: this.disableValidation.LlamadaNo2 }],

        EstadoEscriturado: [{ value: this.currentElement.EstadoEscriturado != null ? this.currentElement.EstadoEscriturado : null, disabled: this.disableValidation.EstadoEscriturado }],

        ID: [this.currentElement.ID],

        Carta1: [{ value: this.currentElement.Carta1 != null ? new Date(this.currentElement.Carta1) : null, disabled: this.disableValidation.Carta1 }],
        Carta2: [{ value: this.currentElement.Carta2 != null ? new Date(this.currentElement.Carta2) : null, disabled: this.disableValidation.Carta2 }],
        Carta3: [{ value: this.currentElement.Carta3 != null ? new Date(this.currentElement.Carta3) : null, disabled: this.disableValidation.Carta3 }],

        EstadoAuxiliar: [{ value: this.ORDENES != this.reportType ? this.currentElement.EstadoAuxiliar : this.currentElement.EstadoAuxiliar, disabled: this.disableValidation.EstadoAuxiliar }],
        ObservacionAuxiliar: [{ value: this.ORDENES != this.reportType ? this.currentElement.ObservacionAuxiliar : this.currentElement.ObservacionAuxiliar, disabled: this.disableValidation.ObservacionAuxiliar }, [Validators.maxLength(8000)]],

      }
    );

    Object.keys(this.form.controls).forEach(key => {
      console.log('key', key);
      this.beforeList[key] = this.form.controls[key].value;
    });


    console.log('this.beforeList', this.form.controls);

  }


  // getHeaderOptionsTable(dataGroup: string, opt: any) {
  //   // this.displayLoading = true;
  //   this.legalizacionService.getHeaderOptionsTable(this.obrasSelect, dataGroup)
  //     .subscribe(
  //       (data: any) => {
  //         console.log(data);

  //         data = data.map((sweetItem: String) => {
  //           if (sweetItem == null) {
  //             sweetItem = "Vacio";
  //           }
  //           return sweetItem;
  //         })

  //         if (opt == 0) {
  //           this.estadoCoordinadorList = data;
  //         } else if (opt == 1) {
  //           this.estadoAnalistaList = data;
  //         } else if (opt == 2) {
  //           this.asignacionAnalistaList = data;
  //         }


  //         // this.displayLoading = false;
  //       }, (err: any) => {
  //         console.log(err);
  //         // this.displayLoading = false;
  //       }
  //     )
  // }

  closeModal() {
    this.dialogRef.close();
  }

  saveData() {

    console.log(this.form.controls);

    let insertDate: String = '';
    if (this.reportType == 1) {
      let fechaFormatStr = 'null';
      if (this.form.controls['FechaSeguimientoCoordinador'].value != null) {
        let fechaFormat: Date = new Date(this.form.controls['FechaSeguimientoCoordinador'].value);
        fechaFormatStr = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
      }

      let fechaFormatStr2 = 'null';
      if (this.form.controls['FechaSeguimientoAnalista'].value != null) {
        let fechaFormat: Date = new Date(this.form.controls['FechaSeguimientoAnalista'].value);
        fechaFormatStr2 = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
      }

      let fechaFormatStr3 = 'null';
      if (this.form.controls['FechaAsignacion'].value != null) {
        let fechaFormat: Date = new Date(this.form.controls['FechaAsignacion'].value);
        fechaFormatStr3 = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
      }

      let fechaFormatStr4 = 'null';
      if (this.form.controls['FechaAsignacionVarado'].value != null) {
        let fechaFormat: Date = new Date(this.form.controls['FechaAsignacionVarado'].value);
        fechaFormatStr4 = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
      }

      let fechaFormatStr5 = 'null';
      if (this.form.controls['FechaDesvarado'].value != null) {
        let fechaFormat: Date = new Date(this.form.controls['FechaDesvarado'].value);
        fechaFormatStr5 = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
      }


      insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[FechaSeguimientoCoordinador],[EstadoCoordinador],[ObservacionCoordinador],[FechaSeguimientoAnalista],[EstadoAnalista],
        [ObservacionAnalista],[FechaAsignacion],[AsignacionAnalista],[AnalistaVarado],[FechaAsignacionVarado],[FechaDesvarado] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${fechaFormatStr}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${fechaFormatStr2}'',
        ''${this.form.controls['EstadoAnalista'].value}'',
        ''${this.form.controls['ObservacionAnalista'].value}'',
        ''${fechaFormatStr3}'',
        ''${this.form.controls['AsignacionAnalista'].value}'',
        ''${this.form.controls['AnalistaVarado'].value}'',
        ''${fechaFormatStr4}'',
        ''${fechaFormatStr5}'')`;
    } else if (this.reportType == 2) {
      insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[EstadoCoordinador],[ObservacionCoordinador],[EstadoAnalista],[ObservacionAnalista] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${this.form.controls['EstadoAnalista'].value}'',
        ''${this.form.controls['ObservacionAnalista'].value}'')`;
    } else if (this.reportType == 3) {
      insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[EstadoCoordinador],[ObservacionCoordinador],[Comentarios],[EstadoAnalista],[ObservacionAnalista] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${this.form.controls['Comentarios'].value}'',
        ''${this.form.controls['EstadoAnalista'].value}'',
        ''${this.form.controls['ObservacionAnalista'].value}'')`;
    } else if (this.reportType == 4) {
      insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[EstadoCoordinador],[ObservacionCoordinador],[EstadoAnalista],[ObservacionAnalista] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${this.form.controls['EstadoAnalista'].value}'',
        ''${this.form.controls['ObservacionAnalista'].value}'')`;
    } else if (this.reportType == 5) {
      console.log(`this.form.controls['FechadeEntrega'].value`, this.form.controls['FechadeEntrega'].value);

      let fechaFormatStr = 'null';
      if (this.form.controls['FechadeEntrega'].value != null) {
        let fechaFormat: Date = new Date(this.form.controls['FechadeEntrega'].value);
        fechaFormatStr = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
      }
      insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[FechadeEntrega],[HoradeEntrega],[EstadoCoordinador],[ObservacionCoordinador],[EstadoAnalista],
        [ObservacionAnalista],[Arquitecta],[CreacionCaso],[Apoderado] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${fechaFormatStr}'',
        ''${this.form.controls['HoradeEntrega'].value}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${this.form.controls['EstadoAnalista'].value}'',
        ''${this.form.controls['ObservacionAnalista'].value}'',
        ''${this.form.controls['Arquitecta'].value}'',
        ''${this.form.controls['CreacionCaso'].value}'',
        ''${this.form.controls['Apoderado'].value}'')`;
    } else if (this.reportType == 6) {
      insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[EstadoCoordinador],[ObservacionCoordinador],[Comentarios],[EstadoAnalista],[ObservacionAnalista] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${this.form.controls['Comentarios'].value}'',
        ''${this.form.controls['EstadoAnalista'].value}'',
        ''${this.form.controls['ObservacionAnalista'].value}'')`;
    } else if (this.reportType == 7) {
      let fechaFormatStr = 'null';
      if (this.form.controls['FechaAcuerdoProximoPago'].value != null) {
        let fechaFormat: Date = new Date(this.form.controls['FechaAcuerdoProximoPago'].value);
        fechaFormatStr = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
      }

      let fechaFormatStrCarta1 = 'null';
      if (this.form.controls['Carta1'].value != null) {
        let fechaFormatCarta1: Date = new Date(this.form.controls['Carta1'].value);
        fechaFormatStrCarta1 = fechaFormatCarta1.getFullYear() + '-' + (fechaFormatCarta1.getMonth() < 10 ? '0' + (fechaFormatCarta1.getMonth() + 1) : (fechaFormatCarta1.getMonth() + 1)) + '-' + (fechaFormatCarta1.getDate() < 10 ? '0' + fechaFormatCarta1.getDate() : fechaFormatCarta1.getDate());
      }

      let fechaFormatStrCarta2 = 'null';
      if (this.form.controls['Carta2'].value != null) {
        let fechaFormatCarta2: Date = new Date(this.form.controls['Carta2'].value);
        fechaFormatStrCarta2 = fechaFormatCarta2.getFullYear() + '-' + (fechaFormatCarta2.getMonth() < 10 ? '0' + (fechaFormatCarta2.getMonth() + 1) : (fechaFormatCarta2.getMonth() + 1)) + '-' + (fechaFormatCarta2.getDate() < 10 ? '0' + fechaFormatCarta2.getDate() : fechaFormatCarta2.getDate());
      }

      let fechaFormatStrCarta3 = 'null';
      if (this.form.controls['Carta3'].value != null) {
        let fechaFormatCarta3: Date = new Date(this.form.controls['Carta3'].value);
        fechaFormatStrCarta3 = fechaFormatCarta3.getFullYear() + '-' + (fechaFormatCarta3.getMonth() < 10 ? '0' + (fechaFormatCarta3.getMonth() + 1) : (fechaFormatCarta3.getMonth() + 1)) + '-' + (fechaFormatCarta3.getDate() < 10 ? '0' + fechaFormatCarta3.getDate() : fechaFormatCarta3.getDate());
      }

      insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[EstadoCoordinador],[ObservacionCoordinador],[EstadoAnalista],[ObservacionAnalista],[FechaAcuerdoProximoPago],[MontoPactado],[LlamadaNo1],[LlamadaNo2],[Carta1],[Carta2],[Carta3],[EstadoEscriturado] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${this.form.controls['EstadoAnalista'].value}'',
        ''${this.form.controls['ObservacionAnalista'].value}'',
        ''${fechaFormatStr}'',
        ''${this.form.controls['MontoPactado'].value}'',
        ''${this.form.controls['LlamadaNo1'].value}'',
        ''${this.form.controls['LlamadaNo2'].value}'',
        ''${fechaFormatStrCarta1}'',
        ''${fechaFormatStrCarta2}'',
        ''${fechaFormatStrCarta3}'',
        ''${this.form.controls['EstadoEscriturado'].value}'')`;
    } else if (this.reportType == 8) {
      insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[EstadoCoordinador],[ObservacionCoordinador],[EstadoAnalista],[ObservacionAnalista],[TipificacionCorreccionesCtl],[NBR],[AnalistaTrazabilidad],[DetalleObservacion] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${this.form.controls['EstadoAnalista'].value}'',
        ''${this.form.controls['ObservacionAnalista'].value}'',
        ''${this.form.controls['TipificacionCorreccionesCtl'].value}'',
        ''${this.form.controls['NBR'].value}'',
        ''${this.form.controls['AnalistaTrazabilidad'].value}'',
        ''${this.form.controls['DetalleObservacion'].value}'')`;
    } else if (this.reportType == 9) {

      let fechaFormatStr = 'null';
      if (this.form.controls['FechaEstimadaDePyS'].value != null) {
        let fechaFormat: Date = new Date(this.form.controls['FechaEstimadaDePyS'].value);
        fechaFormatStr = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
      }

      insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[Frpl],[QuienFirmaEsfp],[EstadoEsfpFrpl],[EstadoCoordinador],[ObservacionCoordinador],[EstadoAuxiliar],[ObservacionAuxiliar],[EstadoAbogado],
        [ObservacionAbogado],[CualFueElCambio],[NoPredialNacional],[NumeroId],[IdMunicipio],[RadicaciónOrdenPagoPySPredial],[FechaEstimadaDePyS],
        [TipoPyS],[MunicipioPyS],[EstadoPyS],[EstadoOrdenes],[TipoProyectoM],[ValorFacturaPazySalvoPredial],[ValorEstampilla],[ValorEstampillaDepartamental],[PresentoCambio] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${this.form.controls['Frpl'].value}'',
        ''${this.form.controls['QuienFirmaEsfp'].value}'',
        ''${this.form.controls['EstadoEsfpFrpl'].value}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${this.form.controls['EstadoAuxiliar'].value}'',
        ''${this.form.controls['ObservacionAuxiliar'].value}'',
        ''${this.form.controls['EstadoAbogado'].value}'',
        ''${this.form.controls['ObservacionAbogado'].value}'',
        ''${this.form.controls['CualFueElCambio'].value}'',
        ''${this.form.controls['NoPredialNacional'].value}'',
        ''${this.form.controls['NumeroId'].value}'',
        ''${this.form.controls['IdMunicipio'].value}'',
        ''${this.form.controls['RadicaciónOrdenPagoPySPredial'].value}'',
        ''${fechaFormatStr}'',
        ''${this.form.controls['TipoPyS'].value}'',
        ''${this.form.controls['MunicipioPyS'].value}'',
        ''${this.form.controls['EstadoPyS'].value}'',
        ''${this.form.controls['EstadoOrdenes'].value}'',
        ''${this.form.controls['TipoProyectoM'].value}'',
        ''${this.form.controls['ValorFacturaPazySalvoPredial'].value}'',
        ''${this.form.controls['ValorEstampilla'].value}'',
        ''${this.form.controls['ValorEstampillaDepartamental'].value}'',
        ''${this.form.controls['PresentoCambio'].value}'')`;
    } else if (this.reportType == 10) {

      let fechaFormatStr = 'null';
      if (this.form.controls['FechaSeguimientoCoordinador'].value != null) {
        let fechaFormat: Date = new Date(this.form.controls['FechaSeguimientoCoordinador'].value);
        fechaFormatStr = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
      }

      let fechaFormatStr2 = 'null';
      if (this.form.controls['FechaSeguimientoAnalista'].value != null) {
        let fechaFormat: Date = new Date(this.form.controls['FechaSeguimientoAnalista'].value);
        fechaFormatStr2 = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
      }

      let fechaFormatStr3 = 'null';
      if (this.form.controls['FechaAsignacion'].value != null) {
        let fechaFormat: Date = new Date(this.form.controls['FechaAsignacion'].value);
        fechaFormatStr3 = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
      }


      insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[FechaSeguimientoCoordinador],[EstadoCoordinador],[ObservacionCoordinador],[CampanasEspeciales],[CausalRenovacion],[FechaSeguimientoAnalista],[EstadoAnalista],[ObservacionAnalista],[EstadoPoderAnalista],[Asignacion],[Broker],[FechaAsignacion] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${fechaFormatStr}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${this.form.controls['CampanasEspeciales'].value}'',
        ''${this.form.controls['CausalRenovacion'].value}'',
        ''${fechaFormatStr2}'',
        ''${this.form.controls['EstadoAnalista'].value}'',
        ''${this.form.controls['ObservacionAnalista'].value}'',
        ''${this.form.controls['EstadoPoderAnalista'].value}'',
        ''${this.form.controls['Asignacion'].value}'',
        ''${this.form.controls['Broker'].value}'',
        ''${fechaFormatStr3}'')`;
    } else if (this.reportType == 11) {
      insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[EstadoCoordinador],[ObservacionCoordinador],[EstadoAnalista],[ObservacionAnalista] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${this.form.controls['EstadoAnalista'].value}'',
        ''${this.form.controls['ObservacionAnalista'].value}'')`;
    }

    insertDate = String(insertDate).toString();

    insertDate = insertDate.replace("Invalid Date", "null");
    insertDate = insertDate.replace("Vacio", "null");
    insertDate = insertDate.replace("NULL", "null");
    insertDate = insertDate.replace("''null''", "NULL");

    console.log('insertDate', insertDate);

    let auditList: any = [];
    console.log('this.form.controls', this.form.controls);
    console.log('this.beforeForm.controls', this.beforeList);

    Object.keys(this.form.controls).forEach(key => {

      let before = this.beforeList[key];
      let after = this.form.controls[key].value;
      if (before != after) {
        auditList.push({ name: key, before: before, after: after, UNI_ID: this.form.controls['UNI_ID'].value });
      }
    });

    console.log('auditList', auditList);


    this.legalizacionService.updateData(insertDate, this.reportType, auditList)
      .subscribe(
        (data: any) => {
          console.log(data);
        }, err => {
          console.log(err);
        }
      );


    this.dialogRef.close();

  }

  multipleUpdateLegalizacion(field: any, type?: any) {
    let newValue = this.form.controls[field].value;
    console.log('field', field);
    console.log('type', type);

    if (type == 1) {
      let fechaFormatStr = 'null';
      if (newValue != null) {
        let fechaFormat: Date = new Date(newValue);
        fechaFormatStr = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
      }
      newValue = fechaFormatStr;
    } else if (type == 2) {
      let horaFormatStr = 'null';
      let horaFormat: Date = new Date(newValue);
      horaFormatStr = (horaFormat.getHours() < 10 ? '0' + (horaFormat.getHours() + 1) : (horaFormat.getHours())) + ':' + (horaFormat.getMinutes() < 10 ? '0' + (horaFormat.getMinutes() + 1) : (horaFormat.getMinutes())) + ':' + (horaFormat.getSeconds() < 10 ? '0' + horaFormat.getSeconds() : horaFormat.getSeconds());

      newValue = horaFormatStr;
    }

    console.log('newValue', newValue);


    this.displayLoading = true;
    this.legalizacionService.multipleUpdateLegalizacion(field, newValue, this.obras, this.sortStr, this.filterStr, this.reportType)
      .subscribe(
        (data: any) => {

          if (data.code == 0) {
            this.displayLoading = false;
            this.confirmationService.confirm({
              header: 'Mensaje',
              message: 'Se ha realizado la modificacion masiva con exito',
              dismissableMask: true,
              rejectVisible: false,
              acceptLabel: 'OK',
              accept: () => {
                this.dialogRef.close();
                this.confirmationService.close();
              }
            })
          } else {
            console.error('Error al persistir datos masivos: ', data.message);
            this.displayLoading = false;
            this.confirmationService.confirm({
              header: 'Mensaje',
              message: 'Se ha presentado un error al intentar realizar la modificacion masiva',
              dismissableMask: true,
              rejectVisible: false,
              acceptLabel: 'OK',
              accept: () => {
                this.dialogRef.close();
                this.confirmationService.close();
              }
            })
          }
        }, err => {
          this.displayLoading = false;
          this.confirmationService.confirm({
            header: 'Mensaje',
            message: 'Se ha presentado un error al intentar realizar la modificacion masiva',
            dismissableMask: true,
            rejectVisible: false,
            acceptLabel: 'OK',
            accept: () => {
              this.dialogRef.close();
              this.confirmationService.close();
            }
          })
        }
      )
  }

  confirm(id: any, type?: any) {

    console.log('##confirm##');

    this.confirmationService.confirm({
      message: 'Estas seguro que deseas aplicar este cambio a todos los registros filtrados actualmente?',
      accept: () => {
        this.multipleUpdateLegalizacion(id, type);
      },
      reject: () => {
        this.dialogRef.close();
        this.confirmationService.close();
      }
    });
  }

  loadingAction(evt) {
    console.log('evt', evt);
    this.displayLoading = true;
  }


  clear(id: any) {
    if (id == 'EstadoCoordinador') {
      this.searchTextEstadoCoordinador = "";
    } else if (id == 'EstadoAnalista') {
      this.searchTextEstadoAnalista = "";
    } else if (id == 'AsignacionAnalista') {
      this.searchTextAsignacionAnalista = "";
    } else if (id == 'HoradeEntrega') {
      this.searchTextHoradeEntrega = "";
    }
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
    }

    return;
  }

}
