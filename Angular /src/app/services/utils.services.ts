import { Injectable } from '@angular/core';
import * as campos_moneda from 'src/assets/json/campos_moneda.json';
import * as campos_fechas from 'src/assets/json/campos_fechas.json';

@Injectable()
export class UtilsService {

  GENERAL = 1;
  MONEDA = 2;
  FECHA = 3;
  PORCENTAJE = 4;

  camposFecha: any = [];
  // camposFecha: any = ["FechaSeguimientoCoordinador", "FechaSeguimientoAnalista", "FechaAsignacion", "FechaAsignacionVarado", "FechaDesvarado", "Fecha Cuota Inicial", "Fecha Progr FRE", "FechaConcre_FRE",
  //   "FechaPactada_ESFP", "FechaVenta", "FechaFactura", "FechaProgObra", "FechaProg_FREN", "FechaConcre_FREN", "CTO", "PYSP", "FVPS", "PZNO", "FirmaComprador_ESFP", "ESRN", "FGestionSubsidio",
  //   "F_GestionCredito", "VencimientoCredito_CRPA", "CreditoRatificado_CRAP", "VencimientoCredito", "SOLICITUD_AVALUO_SEAD", "SCC", "RECIBO DE CARTA COMPROMISO", "FirmaPCV_PRFI", "PYSCC_PZCC",
  //   "EnvioOrdenEscr_ESEO", "Entrega_FEPE", "CRSA", "CRAV", "ProyEntrega", "ProyEscritura", "SCR2", "SBAC", "RECEPCION_AVALUO_READ", "PETA", "PTIT", "RPH", "IDES AS BOLSA_DESISTIMIENTO_IDES",
  //   "FVPYS", "FechadeEntrega", "DESEMBOLSO_CREDITO_CRDS", "Fecha Notificacion Desembolso_CRDC", "FechaRadicacionCredito", "Envio_garantia_Banco", "FTramiteTrazabilidad", "PROGRAMACION_ENTREGA",
  //   "ENTREGA_INMUEBLE_FEPE", "FECHA_ENTREGA_OBRA_FEO", "ENVIO_EP_CIERRE_COPIA_ESNC", "FECHA_SALIDA_REGISTRO_FSR", "FECHA_INGRESO_REGISTRO_ESLC", "FIRMA_REP_LEGAL_BANCO_REFB", "ESCRITURA_LIBERACION_HIPOTECA_ESLL",
  //   "APROBACION_INICIAL_CREDITO_CRPA", "SubsidioAprobado_SBAP", "SubsidioAprobado2_SBA2", "SubsidioAprobadoSemilleroPropietarios_SASP", "SubsidioAprobadoConcurrente_SBAC", "SubsidioProrrogaConcurrente_SBC2",
  //   "SubsidioProrrogaSemillero2_SPS2", "NotifiDesemSubsidio_SBDC", "SDE2", "NotificacionDesemSubsidio3_SDE3", "DesembolsoSubsidio_SUDE", "RadicacionCobroSubsidio_SURC", "RadicacionCobroSubsidio2_SUR2", "RadicacionCobroSubsidio3_SUR3",
  //   "ENTREGA CERTIFICADOS HABITABILIDAD_ENCH", "FechaEstimadaDePyS", "FSAC", "FRAC", "FechaAcuerdoProximoPago", "Fecha Cuota Inicial1", "Negocios de riesgos IDES", "Radicacion Ahorro Programado APRP", "Radicación Cobro Cesantias RACE",
  //   "VencimientoGestionPoder", "SemDiasNotificacion", "SemDiasRadicacion", "Fecha de Aprobación de Crédito CRPA", '"Fecha de Aprobación de Crédito CRPA"', "Fecha De radicacion de Crédito CRRA", '"Fecha De radicacion de Crédito CRRA"', "FechaSeguimientoBanco", "FechaUltimaNotificación",
  //   "Novedad Radicada_NCRA", '"Novedad Radicada_NCRA"', "Novedad Aprobada_NCAP", '"Novedad Aprobada_NCAP"', "Novedad Rechazada_NCNG", '"Novedad Rechazada_NCNG"', "BOLSA_DESISTIMIENTO_IDES", "Credito en Reconsideración CRRC", "FechaMarcacionCRPA", "Novedad Requerida","ENVI"
  // ];

  // campoMoneda: String[] = ['Neto', 'SaldoCI', 'ValorCredito', 'ValorPagadoCredito', 'Valor Subsidio 1', 'Valor Subsidio 2', 'Valor Subsidio Concurrente', 'Valor Pagado Subsidio', 'MontoPactado', 'SinVencer', 'Mora 1-30 dias', 'Mora 31-45 dias', 'Mora 46-60 dias', 'Mora 61-90 dias', 'Mora 91-120 dias', 'Mora 120 + dias', 'Vencido', 'Proyeccion_Mes', 'Valor_Gestionar', 'EjecutadoMes'];
  campoMoneda: any = [];

  campoPorcentaje: String[] = ['Cumplimiento_Meta','prob_desist'];

  constructor() {
    this.campoMoneda = campos_moneda;
    this.campoMoneda = this.campoMoneda.default;

    console.log('this.campoMoneda', this.campoMoneda);

    this.camposFecha = campos_fechas;
    this.camposFecha = this.camposFecha.default;
    
  }

  getAliasFromColumnCalculate(txt: string) {

    if (txt.includes('.') && !txt.includes('=')) {
      let tempv = txt.split('.');
      tempv.length > 1 ? txt = tempv[1] : txt = tempv[0];
    }

    if (String(txt).includes('=')) {
      let splitTemp = String(txt).split('=');
      if (splitTemp.length > 1) {
        txt = splitTemp[0];
        txt = String(txt).trim();
      }
    }

    return txt;
  }

  getOriginalNameFromColumnCalculate(txt: string) {
    console.log('###getOriginalNameFromColumnCalculate ' + txt);

    // txt = txt.replace('[', '').replace(']', '');
    if (String(txt).includes('=')) {
      let splitTemp = String(txt).split('=');
      console.log('splitTemp ', splitTemp);

      if (splitTemp.length > 1) {
        let tempText = '';
        for (let index = 1; index <= (splitTemp.length - 1); index++) {
          if (index >= (splitTemp.length - 1)) {
            tempText = tempText + String(splitTemp[index]).trim() + ' ';
          } else {
            tempText = tempText + String(splitTemp[index]).trim() + ' = ';
          }
        }
        txt = tempText;
      }
    }
    console.log('txt', txt);

    return txt;
  }

  processComputedColumn(txt: any) {
    if (/ /g.test(txt)) {
      if (String(txt).includes('=')) {
        if (String(txt).includes('when') || String(txt).includes('WHEN') || String(txt).includes('When')) {
          txt = txt.replaceAll("'", "''");
          txt = `(${txt})`;
        } else {
          txt = `(${txt})`;
        }
      } else {
        txt = `[${txt}]`;
      }
    }

    txt = txt.replaceAll(';', ',');
    console.log('processComputedColumn ',txt);
    
    return txt;
  }

  getHeaderType(header) {
    header = this.getAliasFromColumnCalculate(header);

    if (this.campoMoneda.includes(header)) {
      return this.MONEDA
    }

    if (this.camposFecha.includes(header)) {
      // console.log('header ',header);
      return this.FECHA
    }

    if (this.campoPorcentaje.includes(header)) {
      // console.log('header ',header);
      return this.PORCENTAJE
    }

    return this.GENERAL;
  }

  fixNameJsonWithSpace(header) {

    header = this.getAliasFromColumnCalculate(header);

    if (/\s/g.test(header)) {
      return '"' + header + '"';
    }
    return header;
  }

}