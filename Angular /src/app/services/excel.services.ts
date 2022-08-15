import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { UtilsService } from './utils.services';
const EXCEL_EXTENSION = '.xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
// import * as campos_fechas from 'src/assets/json/campos_fechas.json';


@Injectable()
export class ExcelExportService {

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
    private _utilsService: UtilsService
  ) { }
  public exportAsExcelFile(json: any[], excelFileName: string, reportType: number): void {

    console.log('contendio a exportar reportType', reportType);
    json = json.map((element: any) => {
      var keys: any = Object.keys(element);
      // console.log(keys);
      if (keys.length > 0) {
        keys.forEach((key: any) => {
          // console.log(key);
          // element[key] = evt[key];
          if (this.isColumnDate(key) && element[key] != null) {
            let fechaFormat: Date = new Date(element[key]);
            element[key] = (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate()) + '-' + (fechaFormat.getMonth() < 9 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + fechaFormat.getFullYear();
          }
        })
      }

      return element;
    })


    let order: any[] = ["FechaSeguimientoCoordinador", "EstadoCoordinador", "ObservacionCoordinador", "FechaSeguimientoAnalista", "EstadoAnalista", "ObservacionAnalista", "FechaAsignacion", "AsignacionAnalista", "AnalistaVarado", "FechaAsignacionVarado", "FechaDesvarado", "ProyEntrega", "ProyEscritura", "GesCred", "GesSub", "GesCart", "EntidadCredito", "EntidadSubsidio", "EntidadSubsidio2", "EntidadAhorro", "EntidadCesantias", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "Tipo", "Estado", "NIT", "Nombre", "EstadoCivil", "CiudadComprador", "NIT Seg", "Nombre Seg", "EstadoCivilSeg", "CiudadCompradorSeg", "Neto", "TipoDeVenta", "clientes del exterior", "ANALISTA", "Aux Orden Escrituracion", "AnalistaPromesas", "AnalistaRecaudo", "AnalistaSubsidios", "EntidadSubsidio1", "Subsidio", "GestionSubsidio", "FGestionSubsidio", "SCR2", "SBAC", "GestionCartera", "Fecha Cuota Inicial", "EntidadCesantias1", "GestionCesantias", "EntidadAhorro1", "GestionAhorro", "EntidadCredito1", "GestionCredito", "F_GestionCredito", "DiasGestionCred", "VencimientoCredito_CRPA", "CreditoRatificado_CRAP", "VencimientoCredito", "EstadoCred", "CRSA", "CRAV", "SOLICITUD_AVALUO_SEAD", "RECEPCION_AVALUO_READ", "PETA", "PTIT", "EntidadCredConstructor", "SCC", "RECIBO DE CARTA COMPROMISO", "FirmaPCV_PRFI", "PYSCC_PZCC", "EnvioOrdenEscr_ESEO", "Fecha Progr FRE", "FechaConcre_FRE", "FechaPactada_ESFP", "SaldoCI", "ConceptoCI", "RPH", "CTO", "PYSP", "FVPS", "PZNO", "FirmaComprador_ESFP", "ESRN", "FechaVenta", "FechaFactura", "NumFactura", "NumEscritura", "NombreNotaria", "NotariaAsignada", "NombreNotariaRPH", "NotariaRepartoFNA", "FechaProgObra", "FechaProg_FREN", "FechaConcre_FREN", "Entrega_FEPE", "IDES AS BOLSA_DESISTIMIENTO_IDES", "Dias_para_Concretar_Escritura", "Dias_para_Escriturar", "MatriculaINM"];
    if (reportType == this.PROMESA) {
      order = ["EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "ProyEntrega", "ProyEscritura", "GesCred", "GesSub", "GesCart", "EntidadCredito", "EntidadSubsidio", "EntidadSubsidio2", "EntidadAhorro", "EntidadCesantias", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "Tipo", "Estado", "NIT", "Nombre", "EstadoCivil", "CiudadComprador", "NIT Seg", "Nombre Seg", "EstadoCivilSeg", "CiudadCompradorSeg", "Neto", "TipoDeVenta", "clientes del exterior", "ANALISTA", "Aux Orden Escrituracion", "AnalistaPromesas", "AnalistaRecaudo", "AnalistaSubsidios", "EntidadSubsidio1", "Subsidio", "GestionSubsidio", "FGestionSubsidio", "GestionCartera", "Fecha Cuota Inicial", "EntidadCesantias1", "GestionCesantias", "EntidadAhorro1", "GestionAhorro", "EntidadCredito1", "GestionCredito", "F_GestionCredito", "DiasGestionCred", "VencimientoCredito_CRPA", "CreditoRatificado_CRAP", "VencimientoCredito", "EstadoCred", "FirmaPCV_PRFI", "PYSCC_PZCC", "EnvioOrdenEscr_ESEO", "Fecha Progr FRE", "FechaConcre_FRE", "FechaPactada_ESFP", "SaldoCI", "ConceptoCI", "RPH", "CTO", "PYSP", "FVPS", "PZNO", "FirmaComprador_ESFP", "ESRN", "FechaVenta", "FechaFactura", "NumFactura", "NumEscritura", "NombreNotaria", "NotariaAsignada", "NombreNotariaRPH", "NotariaRepartoFNA", "FechaProgObra", "FechaProg_FREN", "FechaConcre_FREN", "Entrega_FEPE", "BOLSA_DESISTIMIENTO_IDES", "Dias_para_Concretar_Escritura", "Dias_para_Escriturar", "MatriculaINM"];
    } else if (reportType == this.SUBSIDIO) {
      order = ["EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "Comentarios", "DesemSub", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "Estado", "NIT", "Nombre", "NIT Seg", "Nombre Seg", "Neto", "TipoDeVenta", "clientes del exterior", "ANALISTA", "EntidadCredito", "FechaRadicacionCredito", "Fecha Notificacion Desembolso_CRDC", "SemDiasNotificacion", "SemDiasRadicacion", "Entidad Subsidio 1", "Valor Subsidio 1", "Entidad Subsidio 2", "Valor Subsidio 2", "Valor Subsidio Concurrente", "Valor Pagado Subsidio", "GesSub", "SubsidioAprobado_SBAP", "SubsidioAprobado2_SBA2", "SubsidioAprobadoSemilleroPropietarios_SASP", "SubsidioAprobadoConcurrente_SBAC", "SubsidioProrrogaConcurrente_SBC2", "SubsidioProrrogaSemillero2_SPS2", "NotifiDesemSubsidio_SBDC", "SDE2", "NotificacionDesemSubsidio3_SDE3", "DesembolsoSubsidio_SUDE", "RadicacionCobroSubsidio_SURC", "RadicacionCobroSubsidio2_SUR2", "RadicacionCobroSubsidio3_SUR3", "FirmaComprador_ESFP", "NombreNotaria", "NumEscritura", "FechaProg_FREN", "FechaConcre_FREN", "Entrega_FEPE", "ENTREGA CERTIFICADOS HABITABILIDAD_ENCH", "TramiteTrazabilidad", "FTramiteTrazabilidad", "DesembolsoCredito", "EstadoRequi", "MatriculaINM"];
    } else if (reportType == this.SEGUIMIENTO_SUBSIDIO) {
      order = ["EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "ProyEntrega", "ProyEscritura", "GesCred", "GesSub", "GesCart", "EntidadCredito", "EntidadSubsidio", "EntidadSubsidio2", "EntidadAhorro", "EntidadCesantias", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "Tipo", "Estado", "NIT", "Nombre", "EstadoCivil", "CiudadComprador", "NIT Seg", "Nombre Seg", "EstadoCivilSeg", "CiudadCompradorSeg", "Neto", "TipoDeVenta", "clientes del exterior", "ANALISTA", "Aux Orden Escrituracion", "AnalistaPromesas", "AnalistaRecaudo", "AnalistaSubsidios", "EntidadSubsidio1", "Subsidio", "GestionSubsidio", "FGestionSubsidio", "GestionCartera", "Fecha Cuota Inicial", "EntidadCesantias1", "GestionCesantias", "EntidadAhorro1", "GestionAhorro", "EntidadCredito1", "GestionCredito", "F_GestionCredito", "DiasGestionCred", "VencimientoCredito_CRPA", "CreditoRatificado_CRAP", "VencimientoCredito", "EstadoCred", "FirmaPCV_PRFI", "PYSCC_PZCC", "EnvioOrdenEscr_ESEO", "Fecha Progr FRE", "FechaConcre_FRE", "FechaPactada_ESFP", "SaldoCI", "ConceptoCI", "RPH", "CTO", "PYSP", "FVPS", "PZNO", "FirmaComprador_ESFP", "ESRN", "FechaVenta", "FechaFactura", "NumFactura", "NumEscritura", "NombreNotaria", "NotariaAsignada", "NombreNotariaRPH", "NotariaRepartoFNA", "FechaProgObra", "FechaProg_FREN", "FechaConcre_FREN", "Entrega_FEPE", "BOLSA_DESISTIMIENTO_IDES", "Dias_para_Concretar_Escritura", "Dias_para_Escriturar", "MatriculaINM"];
    } else if (reportType == this.ENTREGA) {
      order = ["FechadeEntrega", "HoradeEntrega", "CreacionCaso", "Apoderado", "EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "Arquitecta", "ProyEntrega", "ProyEscritura", "GesCred", "GesSub", "GesCart", "EntidadCredito", "EntidadSubsidio", "EntidadSubsidio2", "EntidadAhorro", "EntidadCesantias", "Proyecto", "Agrupacion", "DireccionInmueble", "TorreManzana", "Unidad", "Tipo", "Estado", "NIT", "Nombre", "EstadoCivil", "CiudadComprador", "NIT Seg", "Nombre Seg", "EstadoCivilSeg", "CiudadCompradorSeg", "Neto", "TipoDeVenta", "clientes del exterior", "ANALISTA", "Aux Orden Escrituracion", "AnalistaPromesas", "AnalistaRecaudo", "AnalistaSubsidios", "EntidadSubsidio1", "Subsidio", "GestionSubsidio", "FGestionSubsidio", "GestionCartera", "Fecha Cuota Inicial", "EntidadCesantias1", "GestionCesantias", "EntidadAhorro1", "GestionAhorro", "EntidadCredito1", "GestionCredito", "F_GestionCredito", "DiasGestionCred", "VencimientoCredito_CRPA", "CreditoRatificado_CRAP", "VencimientoCredito", "EstadoCred", "FirmaPCV_PRFI", "PYSCC_PZCC", "EnvioOrdenEscr_ESEO", "Fecha Progr FRE", "FechaConcre_FRE", "FechaPactada_ESFP", "SaldoCI", "ConceptoCI", "RPH", "CTO", "PYSP", "FVPS", "PZNO", "FirmaComprador_ESFP", "ESRN", "FechaVenta", "FechaFactura", "NumFactura", "NumEscritura", "NombreNotaria", "NotariaAsignada", "NombreNotariaRPH", "NotariaRepartoFNA", "FechaProgObra", "FechaProg_FREN", "FechaConcre_FREN", "Entrega_FEPE", "BOLSA_DESISTIMIENTO_IDES", "Dias_para_Concretar_Escritura", "Dias_para_Escriturar", "MatriculaINM"];
    } else if (reportType == this.DESEMBOLSO) {
      order = ["EstadoCoordinador", "ObservacionCoordinador", "Comentarios", "EstadoAnalista", "ObservacionAnalista", "DesmCred", "SemTDesemb", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "Estado", "NIT", "Nombre", "NIT Seg", "Nombre Seg", "Neto", "ANALISTA", "EntidadCredito", "ValorCredito", "CreditoRatificado_CRAP", "APROBACION_INICIAL_CREDITO_CRPA", "VencimientoCredito", "EstadoCredito", "EntidadSubsidio", "EntidadSubsidio2", "NombreNotaria", "FirmaComprador_ESFP", "NumEscritura", "ESCRITURA_LIBERACION_HIPOTECA_ESLL", "FIRMA_REP_LEGAL_BANCO_REFB", "FECHA_INGRESO_REGISTRO_ESLC=BOLETA_ESLC", "FECHA_SALIDA_REGISTRO_FSR=ESCRITURA_REGISTRADA_FSR", "ENVIO_EP_CIERRE_COPIA_ESNC=ESCRITURA_CERRADA_ESNC", "FECHA_ENTREGA_OBRA_FEO", "ENTREGA_INMUEBLE_FEPE", "BOLSA_DESISTIMIENTO_IDES=IDES", "PROGRAMACION_ENTREGA", "SOLICITUD_AVALUO_SEAD", "RECEPCION_AVALUO_READ", "TramiteTrazabilidad", "FTramiteTrazabilidad", "Envio_garantia_Banco", "FechaRadicacionCredito", "Fecha Notificacion Desembolso_CRDC", "DESEMBOLSO_CREDITO_CRDS", "ValorPagadoCredito", "ReqDesembolso", "CondicionEntrega", "LEGAL BANCO-REFB' then 'CUMPLIDO'   else 'PENDIENTE' END", "PROGRAMAR'  END", "MatriculaINM", "NumFactura"];
    } else if (reportType == this.TRAZABILIDAD) {
      order = ["EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "TipificacionCorreccionesCtl", "NBR", "AnalistaTrazabilidad", "DetalleObservacion", "Trazabilida", "VencNotaria", "VencHipoteca", "EstadoRatificacionCredito", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "Estado", "NIT", "Nombre", "NIT Seg", "Nombre Seg", "Neto", "TipoDeVenta", "clientes del exterior", "ANALISTA", "EntidadSubsidio", "EntidadCredito", "ValorCredito", "EstadoCredito", "VencimientoCredito", "CreditoRatificado_CRAP", "RECIBO DE CARTA COMPROMISO", "FirmaComprador_ESFP", "ESRN", "TramiteTrazabilidad", "FTramiteTrazabilidad", "DiasTramite", "EscrAclaratoria", "DiasTotal", "Notaria", "Escritura", "NumFactura", "AreaCons_", "AreaPriv_", "MatriculaINM"];
    } else if (reportType == this.ORDENES) {
      order = ["Frpl", "QuienFirmaEsfp", "EstadoEsfpFrpl", "EstadoCoordinador", "ObservacionCoordinador", "EstadoAuxiliar", "ObservacionAuxiliar", "EstadoAbogado", "ObservacionAbogado", "PresentoCambio", "CualFueElCambio", "NoPredialNacional", "NumeroId", "IdMunicipio", "RadicaciónOrdenPagoPySPredial", "FechaEstimadaDePyS", "TipoPyS", "MunicipioPyS", "EstadoPyS", "EstadoOrdenes", "ProyEntrega", "ProyEscritura", "GesCred", "GesSub", "GesCart", "SemESEO", "EntidadCredito", "EntidadSubsidio", "EntidadSubsidio2", "EntidadAhorro", "EntidadCesantias", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "Tipo", "Estado", "NIT", "Nombre", "EstadoCivil", "CiudadComprador", "NIT Seg", "Nombre Seg", "EstadoCivilSeg", "CiudadCompradorSeg", "Neto", "TipoDeVenta", "clientes del exterior", "Analista", "Aux Orden Escrituracion", "CreditoRatificado_CRAP", "VencimientoCredito", "EstadoCred", "FirmaPCV_PRFI", "PYSCC_PZCC", "EnvioOrdenEscr_ESEO", "DiasESEO", "Fecha Progr FRE", "FechaConcre_FRE", "SaldoCI", "ConceptoCI", "RPH", "CTO", "PYSP", "FVPS", "PZNO", "DiasPZNO", "FechaPactada_ESFP", "FSAC", "FRAC", "FirmaComprador_ESFP", "ESRN", "DiasESRN", "FechaFactura", "NumFactura", "NumEscritura", "NombreNotaria", "NotariaAsignada", "NombreNotariaRPH", "NotariaRepartoFNA", "FechaProgObra", "FechaProg_FREN", "FechaConcre_FREN", "FechaVenta", "Entrega_FEPE", "BOLSA_DESISTIMIENTO_IDES", "MatriculaINM","TipoProyectoM"];
    } else if (reportType == this.RENOVACION) {
      order = ["FechaSeguimientoCoordinador", "EstadoCoordinador", "ObservacionCoordinador", "CampanasEspeciales", "CausalRenovacion", "FechaSeguimientoAnalista", "EstadoAnalista", "ObservacionAnalista", "EstadoPoderAnalista", "Asignacion", "Broker", "FechaAsignacion", "ProyEntrega", "ProyEscritura", "GesCred", "GesSub", "GesCart", "EntidadCredito", "EntidadSubsidio", "EntidadSubsidio2", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "NIT", "Nombre", "EstadoCivil", "NIT Seg", "Nombre Seg", "EstadoCivilSeg", "Neto", "TipoDeVenta", "clientes del exterior", "ANALISTA", "AnalistaPromesas", "AnalistaSubsidios", "Subsidio", "GestionSubsidio", "FGestionSubsidio", "EntidadCredito1", "GestionCredito", "F_GestionCredito", "DiasGestionCred", "VencimientoCredito_CRPA", "CreditoRatificado_CRAP", "VencimientoCredito", "EstadoCred", "FechaGestionPoder", "DiasGestionPoder", "VencimientoGestionPoder", "FirmaPCV_PRFI", "Fecha Progr FRE", "FechaConcre_FRE", "FechaPactada_ESFP", "RPH", "CTO", "FirmaComprador_ESFP", "ESRN", "FechaVenta", "NombreNotariaRPH", "FechaProgObra", "FechaProg_FREN", "FechaConcre_FREN", "Entrega_FEPE", "BOLSA_DESISTIMIENTO_IDES", "CausalNegado", "VecesReconsideracion", "EntidadCreditoNegado", "Credito en Reconsideración CRRC", "Seguridad Social", "Alertas Datacredito", "Datacredito Acierta", "Datacredito Decisor", "Fecha De radicacion de Crédito CRRA", "Fecha de Aprobación de Crédito CRPA", "Novedad Radicada_NCRA", "Novedad Aprobada_NCAP", "Novedad Rechazada_NCNG"];
    } else if (reportType == this.ESCRITURACION) {
      order = ["EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "ProyEntrega", "ProyEscritura", "GesCred", "GesSub", "GesCart", "SemESEO", "EntidadCredito", "EntidadSubsidio", "EntidadSubsidio2", "EntidadAhorro", "EntidadCesantias", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "Tipo", "Estado", "NIT", "Nombre", "EstadoCivil", "CiudadComprador", "NIT Seg", "Nombre Seg", "EstadoCivilSeg", "CiudadCompradorSeg", "Neto", "TipoDeVenta", "clientes del exterior", "ANALISTA", "Aux Orden Escrituracion", "AnalistaPromesas", "AnalistaRecaudo", "AnalistaSubsidios", "EntidadSubsidio1", "Subsidio", "GestionSubsidio", "FGestionSubsidio", "GestionCartera", "Fecha Cuota Inicial", "EntidadCesantias1", "GestionCesantias", "EntidadAhorro1", "GestionAhorro", "EntidadCredito1", "GestionCredito", "F_GestionCredito", "DiasGestionCred", "VencimientoCredito_CRPA", "CreditoRatificado_CRAP", "VencimientoCredito", "EstadoCred", "FirmaPCV_PRFI", "PYSCC_PZCC", "EnvioOrdenEscr_ESEO", "Fecha Progr FRE", "FechaConcre_FRE", "FechaPactada_ESFP", "SaldoCI", "ConceptoCI", "RPH", "CTO", "PYSP", "FVPS", "PZNO", "FirmaComprador_ESFP", "ESRN", "FechaVenta", "FechaFactura", "NumFactura", "NumEscritura", "NombreNotaria", "NotariaAsignada", "NombreNotariaRPH", "NotariaRepartoFNA", "FechaProgObra", "FechaProg_FREN", "FechaConcre_FREN", "Entrega_FEPE", "BOLSA_DESISTIMIENTO_IDES", "Dias_para_Concretar_Escritura", "Dias_para_Escriturar", "MatriculaINM", "FRPL"];
    } else if (reportType == this.RECAUDO) {
      order = ["EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "FechaAcuerdoProximoPago", "MontoPactado", "LlamadaNo1", "LlamadaNo2", "LlamadaNo3", "LlamadaNo4", "LlamadaNo5", "EstadoEscriturado", "Telefono", "SectorEconomico", "ActividadEconomica", "Direccion", "Ciudad", "ProyEntrega", "GesCred", "GesSub", "GesCart", "SemRecaudo", "Fecha Cuota Inicial1", "EntidadCredito", "EntidadSubsidio", "EntidadAhorro", "EntidadCesantias", "Proyecto", "Agrupacion", "Estado", "TipoProyecto", "NIT", "Nombre", "NIT Seg", "Nombre Seg", "Neto", "TipoDeVenta", "clientes del exterior", "Analista", "AnalistaPromesas", "AnalistaRecaudo", "AnalistaSubsidios", "EntidadSubsidio1", "Subsidio", "GestionSubsidio", "FGestionSubsidio", "GestionCartera", "Fecha Cuota Inicial", "EntidadCesantias1", "GestionCesantias", "EntidadAhorro1", "GestionAhorro", "EntidadCredito1", "GestionCredito", "F_GestionCredito", "DiasGestionCred", "VencimientoCredito_CRPA", "CreditoRatificado_CRAP", "VencimientoCredito", "EstadoCred", "FirmaPCV_PRFI", "PYSCC_PZCC", "EnvioOrdenEscr_ESEO", "Fecha Progr FRE", "FechaConcre_FRE", "FechaPactada_ESFP", "FirmaComprador_ESFP", "FechaVenta", "FechaProgObra", "NombreAgrupacionGeneral", "MaxMoraEdad", "SinVencer", "Mora 1-30 dias", "Mora 31-45 dias", "Mora 46-60 dias", "Mora 61-90 dias", "Mora 91-120 dias", "Mora 120 + dias", "Vencido", "Proyeccion_Mes", "Valor_Gestionar", "Cumplimiento_Meta", "EjecutadoMes", "Negocios de riesgos IDES", "Radicacion Ahorro Programado APRP", "Radicación Cobro Cesantias RACE"];
    }


    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json, { header: order });
    const workbook: XLSX.WorkBook = { Sheets: { 'Sheet1': worksheet }, SheetNames: ['Sheet1'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  private isColumnDate(name: string) {
    for (let index = 0; index < this._utilsService.camposFecha.length; index++) {
      const element = this._utilsService.camposFecha[index];
      if (element == name) {
        return true;
      }
    }
    return false;
  }
}