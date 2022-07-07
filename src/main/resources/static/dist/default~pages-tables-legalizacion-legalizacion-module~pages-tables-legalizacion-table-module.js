(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-tables-legalizacion-legalizacion-module~pages-tables-legalizacion-table-module"],{

/***/ "NjGU":
/*!**************************************************************!*\
  !*** ./src/app/pages/tables/legalizacion/customerservice.ts ***!
  \**************************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CustomerService {
    constructor(http) {
        this.http = http;
    }
    getCustomersLarge() {
        return this.http.get('assets/customers-large.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac });


/***/ }),

/***/ "UXtv":
/*!********************************************!*\
  !*** ./src/app/services/excel.services.ts ***!
  \********************************************/
/*! exports provided: ExcelExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelExportService", function() { return ExcelExportService; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.services */ "HZWf");




const EXCEL_EXTENSION = '.xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
// import * as campos_fechas from 'src/assets/json/campos_fechas.json';
class ExcelExportService {
    constructor(_utilsService) {
        this._utilsService = _utilsService;
        this.LEGALIZACION = 1;
        this.PROMESA = 2;
        this.SUBSIDIO = 3;
        this.SEGUIMIENTO_SUBSIDIO = 4;
        this.ENTREGA = 5;
        this.DESEMBOLSO = 6;
        this.RECAUDO = 7;
        this.TRAZABILIDAD = 8;
        this.ORDENES = 9;
        this.RENOVACION = 10;
        this.ESCRITURACION = 11;
    }
    exportAsExcelFile(json, excelFileName, reportType) {
        console.log('contendio a exportar reportType', reportType);
        json = json.map((element) => {
            var keys = Object.keys(element);
            // console.log(keys);
            if (keys.length > 0) {
                keys.forEach((key) => {
                    // console.log(key);
                    // element[key] = evt[key];
                    if (this.isColumnDate(key) && element[key] != null) {
                        let fechaFormat = new Date(element[key]);
                        element[key] = (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate()) + '-' + (fechaFormat.getMonth() < 9 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + fechaFormat.getFullYear();
                    }
                });
            }
            return element;
        });
        let order = ["FechaSeguimientoCoordinador", "EstadoCoordinador", "ObservacionCoordinador", "FechaSeguimientoAnalista", "EstadoAnalista", "ObservacionAnalista", "FechaAsignacion", "AsignacionAnalista", "AnalistaVarado", "FechaAsignacionVarado", "FechaDesvarado", "ProyEntrega", "ProyEscritura", "GesCred", "GesSub", "GesCart", "EntidadCredito", "EntidadSubsidio", "EntidadSubsidio2", "EntidadAhorro", "EntidadCesantias", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "Tipo", "Estado", "NIT", "Nombre", "EstadoCivil", "CiudadComprador", "NIT Seg", "Nombre Seg", "EstadoCivilSeg", "CiudadCompradorSeg", "Neto", "TipoDeVenta", "clientes del exterior", "ANALISTA", "Aux Orden Escrituracion", "AnalistaPromesas", "AnalistaRecaudo", "AnalistaSubsidios", "EntidadSubsidio1", "Subsidio", "GestionSubsidio", "FGestionSubsidio", "SCR2", "SBAC", "GestionCartera", "Fecha Cuota Inicial", "EntidadCesantias1", "GestionCesantias", "EntidadAhorro1", "GestionAhorro", "EntidadCredito1", "GestionCredito", "F_GestionCredito", "DiasGestionCred", "VencimientoCredito_CRPA", "CreditoRatificado_CRAP", "VencimientoCredito", "EstadoCred", "CRSA", "CRAV", "SOLICITUD_AVALUO_SEAD", "RECEPCION_AVALUO_READ", "PETA", "PTIT", "EntidadCredConstructor", "SCC", "RECIBO DE CARTA COMPROMISO", "FirmaPCV_PRFI", "PYSCC_PZCC", "EnvioOrdenEscr_ESEO", "Fecha Progr FRE", "FechaConcre_FRE", "FechaPactada_ESFP", "SaldoCI", "ConceptoCI", "RPH", "CTO", "PYSP", "FVPS", "PZNO", "FirmaComprador_ESFP", "ESRN", "FechaVenta", "FechaFactura", "NumFactura", "NumEscritura", "NombreNotaria", "NotariaAsignada", "NombreNotariaRPH", "NotariaRepartoFNA", "FechaProgObra", "FechaProg_FREN", "FechaConcre_FREN", "Entrega_FEPE", "IDES AS BOLSA_DESISTIMIENTO_IDES", "Dias_para_Concretar_Escritura", "Dias_para_Escriturar", "MatriculaINM"];
        if (reportType == this.PROMESA) {
            order = ["EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "ProyEntrega", "ProyEscritura", "GesCred", "GesSub", "GesCart", "EntidadCredito", "EntidadSubsidio", "EntidadSubsidio2", "EntidadAhorro", "EntidadCesantias", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "Tipo", "Estado", "NIT", "Nombre", "EstadoCivil", "CiudadComprador", "NIT Seg", "Nombre Seg", "EstadoCivilSeg", "CiudadCompradorSeg", "Neto", "TipoDeVenta", "clientes del exterior", "ANALISTA", "Aux Orden Escrituracion", "AnalistaPromesas", "AnalistaRecaudo", "AnalistaSubsidios", "EntidadSubsidio1", "Subsidio", "GestionSubsidio", "FGestionSubsidio", "GestionCartera", "Fecha Cuota Inicial", "EntidadCesantias1", "GestionCesantias", "EntidadAhorro1", "GestionAhorro", "EntidadCredito1", "GestionCredito", "F_GestionCredito", "DiasGestionCred", "VencimientoCredito_CRPA", "CreditoRatificado_CRAP", "VencimientoCredito", "EstadoCred", "FirmaPCV_PRFI", "PYSCC_PZCC", "EnvioOrdenEscr_ESEO", "Fecha Progr FRE", "FechaConcre_FRE", "FechaPactada_ESFP", "SaldoCI", "ConceptoCI", "RPH", "CTO", "PYSP", "FVPS", "PZNO", "FirmaComprador_ESFP", "ESRN", "FechaVenta", "FechaFactura", "NumFactura", "NumEscritura", "NombreNotaria", "NotariaAsignada", "NombreNotariaRPH", "NotariaRepartoFNA", "FechaProgObra", "FechaProg_FREN", "FechaConcre_FREN", "Entrega_FEPE", "BOLSA_DESISTIMIENTO_IDES", "Dias_para_Concretar_Escritura", "Dias_para_Escriturar", "MatriculaINM"];
        }
        else if (reportType == this.SUBSIDIO) {
            order = ["EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "Comentarios", "DesemSub", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "Estado", "NIT", "Nombre", "NIT Seg", "Nombre Seg", "Neto", "TipoDeVenta", "clientes del exterior", "ANALISTA", "EntidadCredito", "FechaRadicacionCredito", "Fecha Notificacion Desembolso_CRDC", "SemDiasNotificacion", "SemDiasRadicacion", "Entidad Subsidio 1", "Valor Subsidio 1", "Entidad Subsidio 2", "Valor Subsidio 2", "Valor Subsidio Concurrente", "Valor Pagado Subsidio", "GesSub", "SubsidioAprobado_SBAP", "SubsidioAprobado2_SBA2", "SubsidioAprobadoSemilleroPropietarios_SASP", "SubsidioAprobadoConcurrente_SBAC", "SubsidioProrrogaConcurrente_SBC2", "SubsidioProrrogaSemillero2_SPS2", "NotifiDesemSubsidio_SBDC", "SDE2", "NotificacionDesemSubsidio3_SDE3", "DesembolsoSubsidio_SUDE", "RadicacionCobroSubsidio_SURC", "RadicacionCobroSubsidio2_SUR2", "RadicacionCobroSubsidio3_SUR3", "FirmaComprador_ESFP", "NombreNotaria", "NumEscritura", "FechaProg_FREN", "FechaConcre_FREN", "Entrega_FEPE", "ENTREGA CERTIFICADOS HABITABILIDAD_ENCH", "TramiteTrazabilidad", "FTramiteTrazabilidad", "DesembolsoCredito", "EstadoRequi", "MatriculaINM"];
        }
        else if (reportType == this.SEGUIMIENTO_SUBSIDIO) {
            order = ["EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "ProyEntrega", "ProyEscritura", "GesCred", "GesSub", "GesCart", "EntidadCredito", "EntidadSubsidio", "EntidadSubsidio2", "EntidadAhorro", "EntidadCesantias", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "Tipo", "Estado", "NIT", "Nombre", "EstadoCivil", "CiudadComprador", "NIT Seg", "Nombre Seg", "EstadoCivilSeg", "CiudadCompradorSeg", "Neto", "TipoDeVenta", "clientes del exterior", "ANALISTA", "Aux Orden Escrituracion", "AnalistaPromesas", "AnalistaRecaudo", "AnalistaSubsidios", "EntidadSubsidio1", "Subsidio", "GestionSubsidio", "FGestionSubsidio", "GestionCartera", "Fecha Cuota Inicial", "EntidadCesantias1", "GestionCesantias", "EntidadAhorro1", "GestionAhorro", "EntidadCredito1", "GestionCredito", "F_GestionCredito", "DiasGestionCred", "VencimientoCredito_CRPA", "CreditoRatificado_CRAP", "VencimientoCredito", "EstadoCred", "FirmaPCV_PRFI", "PYSCC_PZCC", "EnvioOrdenEscr_ESEO", "Fecha Progr FRE", "FechaConcre_FRE", "FechaPactada_ESFP", "SaldoCI", "ConceptoCI", "RPH", "CTO", "PYSP", "FVPS", "PZNO", "FirmaComprador_ESFP", "ESRN", "FechaVenta", "FechaFactura", "NumFactura", "NumEscritura", "NombreNotaria", "NotariaAsignada", "NombreNotariaRPH", "NotariaRepartoFNA", "FechaProgObra", "FechaProg_FREN", "FechaConcre_FREN", "Entrega_FEPE", "BOLSA_DESISTIMIENTO_IDES", "Dias_para_Concretar_Escritura", "Dias_para_Escriturar", "MatriculaINM"];
        }
        else if (reportType == this.ENTREGA) {
            order = ["FechadeEntrega", "HoradeEntrega", "CreacionCaso", "Apoderado", "EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "Arquitecta", "ProyEntrega", "ProyEscritura", "GesCred", "GesSub", "GesCart", "EntidadCredito", "EntidadSubsidio", "EntidadSubsidio2", "EntidadAhorro", "EntidadCesantias", "Proyecto", "Agrupacion", "DireccionInmueble", "TorreManzana", "Unidad", "Tipo", "Estado", "NIT", "Nombre", "EstadoCivil", "CiudadComprador", "NIT Seg", "Nombre Seg", "EstadoCivilSeg", "CiudadCompradorSeg", "Neto", "TipoDeVenta", "clientes del exterior", "ANALISTA", "Aux Orden Escrituracion", "AnalistaPromesas", "AnalistaRecaudo", "AnalistaSubsidios", "EntidadSubsidio1", "Subsidio", "GestionSubsidio", "FGestionSubsidio", "GestionCartera", "Fecha Cuota Inicial", "EntidadCesantias1", "GestionCesantias", "EntidadAhorro1", "GestionAhorro", "EntidadCredito1", "GestionCredito", "F_GestionCredito", "DiasGestionCred", "VencimientoCredito_CRPA", "CreditoRatificado_CRAP", "VencimientoCredito", "EstadoCred", "FirmaPCV_PRFI", "PYSCC_PZCC", "EnvioOrdenEscr_ESEO", "Fecha Progr FRE", "FechaConcre_FRE", "FechaPactada_ESFP", "SaldoCI", "ConceptoCI", "RPH", "CTO", "PYSP", "FVPS", "PZNO", "FirmaComprador_ESFP", "ESRN", "FechaVenta", "FechaFactura", "NumFactura", "NumEscritura", "NombreNotaria", "NotariaAsignada", "NombreNotariaRPH", "NotariaRepartoFNA", "FechaProgObra", "FechaProg_FREN", "FechaConcre_FREN", "Entrega_FEPE", "BOLSA_DESISTIMIENTO_IDES", "Dias_para_Concretar_Escritura", "Dias_para_Escriturar", "MatriculaINM"];
        }
        else if (reportType == this.DESEMBOLSO) {
            order = ["EstadoCoordinador", "ObservacionCoordinador", "Comentarios", "EstadoAnalista", "ObservacionAnalista", "DesmCred", "SemTDesemb", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "Estado", "NIT", "Nombre", "NIT Seg", "Nombre Seg", "Neto", "ANALISTA", "EntidadCredito", "ValorCredito", "CreditoRatificado_CRAP", "APROBACION_INICIAL_CREDITO_CRPA", "VencimientoCredito", "EstadoCredito", "EntidadSubsidio", "EntidadSubsidio2", "NombreNotaria", "FirmaComprador_ESFP", "NumEscritura", "ESCRITURA_LIBERACION_HIPOTECA_ESLL", "FIRMA_REP_LEGAL_BANCO_REFB", "FECHA_INGRESO_REGISTRO_ESLC=BOLETA_ESLC", "FECHA_SALIDA_REGISTRO_FSR=ESCRITURA_REGISTRADA_FSR", "ENVIO_EP_CIERRE_COPIA_ESNC=ESCRITURA_CERRADA_ESNC", "FECHA_ENTREGA_OBRA_FEO", "ENTREGA_INMUEBLE_FEPE", "BOLSA_DESISTIMIENTO_IDES=IDES", "PROGRAMACION_ENTREGA", "SOLICITUD_AVALUO_SEAD", "RECEPCION_AVALUO_READ", "TramiteTrazabilidad", "FTramiteTrazabilidad", "Envio_garantia_Banco", "FechaRadicacionCredito", "Fecha Notificacion Desembolso_CRDC", "DESEMBOLSO_CREDITO_CRDS", "ValorPagadoCredito", "ReqDesembolso", "CondicionEntrega", "LEGAL BANCO-REFB' then 'CUMPLIDO'   else 'PENDIENTE' END", "PROGRAMAR'  END", "MatriculaINM", "NumFactura"];
        }
        else if (reportType == this.TRAZABILIDAD) {
            order = ["EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "TipificacionCorreccionesCtl", "NBR", "AnalistaTrazabilidad", "DetalleObservacion", "Trazabilida", "VencNotaria", "VencHipoteca", "EstadoRatificacionCredito", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "Estado", "NIT", "Nombre", "NIT Seg", "Nombre Seg", "Neto", "TipoDeVenta", "clientes del exterior", "ANALISTA", "EntidadSubsidio", "EntidadCredito", "ValorCredito", "EstadoCredito", "VencimientoCredito", "CreditoRatificado_CRAP", "RECIBO DE CARTA COMPROMISO", "FirmaComprador_ESFP", "ESRN", "TramiteTrazabilidad", "FTramiteTrazabilidad", "DiasTramite", "EscrAclaratoria", "DiasTotal", "Notaria", "Escritura", "NumFactura", "AreaCons_", "AreaPriv_", "MatriculaINM"];
        }
        else if (reportType == this.ORDENES) {
            order = ["Frpl", "QuienFirmaEsfp", "EstadoEsfpFrpl", "EstadoCoordinador", "ObservacionCoordinador", "EstadoAuxiliar", "ObservacionAuxiliar", "EstadoAbogado", "ObservacionAbogado", "PresentoCambio", "CualFueElCambio", "NoPredialNacional", "NumeroId", "IdMunicipio", "RadicaciónOrdenPagoPySPredial", "FechaEstimadaDePyS", "TipoPyS", "MunicipioPyS", "EstadoPyS", "EstadoOrdenes", "ProyEntrega", "ProyEscritura", "GesCred", "GesSub", "GesCart", "SemESEO", "EntidadCredito", "EntidadSubsidio", "EntidadSubsidio2", "EntidadAhorro", "EntidadCesantias", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "Tipo", "Estado", "NIT", "Nombre", "EstadoCivil", "CiudadComprador", "NIT Seg", "Nombre Seg", "EstadoCivilSeg", "CiudadCompradorSeg", "Neto", "TipoDeVenta", "clientes del exterior", "Analista", "Aux Orden Escrituracion", "CreditoRatificado_CRAP", "VencimientoCredito", "EstadoCred", "FirmaPCV_PRFI", "PYSCC_PZCC", "EnvioOrdenEscr_ESEO", "DiasESEO", "Fecha Progr FRE", "FechaConcre_FRE", "SaldoCI", "ConceptoCI", "RPH", "CTO", "PYSP", "FVPS", "PZNO", "DiasPZNO", "FechaPactada_ESFP", "FSAC", "FRAC", "FirmaComprador_ESFP", "ESRN", "DiasESRN", "FechaFactura", "NumFactura", "NumEscritura", "NombreNotaria", "NotariaAsignada", "NombreNotariaRPH", "NotariaRepartoFNA", "FechaProgObra", "FechaProg_FREN", "FechaConcre_FREN", "FechaVenta", "Entrega_FEPE", "BOLSA_DESISTIMIENTO_IDES", "MatriculaINM", "TipoProyectoM"];
        }
        else if (reportType == this.RENOVACION) {
            order = ["FechaSeguimientoCoordinador", "EstadoCoordinador", "ObservacionCoordinador", "CampanasEspeciales", "CausalRenovacion", "FechaSeguimientoAnalista", "EstadoAnalista", "ObservacionAnalista", "EstadoPoderAnalista", "Asignacion", "Broker", "FechaAsignacion", "ProyEntrega", "ProyEscritura", "GesCred", "GesSub", "GesCart", "EntidadCredito", "EntidadSubsidio", "EntidadSubsidio2", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "NIT", "Nombre", "EstadoCivil", "NIT Seg", "Nombre Seg", "EstadoCivilSeg", "Neto", "TipoDeVenta", "clientes del exterior", "ANALISTA", "AnalistaPromesas", "AnalistaSubsidios", "Subsidio", "GestionSubsidio", "FGestionSubsidio", "EntidadCredito1", "GestionCredito", "F_GestionCredito", "DiasGestionCred", "VencimientoCredito_CRPA", "CreditoRatificado_CRAP", "VencimientoCredito", "EstadoCred", "FechaGestionPoder", "DiasGestionPoder", "VencimientoGestionPoder", "FirmaPCV_PRFI", "Fecha Progr FRE", "FechaConcre_FRE", "FechaPactada_ESFP", "RPH", "CTO", "FirmaComprador_ESFP", "ESRN", "FechaVenta", "NombreNotariaRPH", "FechaProgObra", "FechaProg_FREN", "FechaConcre_FREN", "Entrega_FEPE", "BOLSA_DESISTIMIENTO_IDES", "CausalNegado", "VecesReconsideracion", "EntidadCreditoNegado", "Credito en Reconsideración CRRC", "Seguridad Social", "Alertas Datacredito", "Datacredito Acierta", "Datacredito Decisor", "Fecha De radicacion de Crédito CRRA", "Fecha de Aprobación de Crédito CRPA", "Novedad Radicada_NCRA", "Novedad Aprobada_NCAP", "Novedad Rechazada_NCNG"];
        }
        else if (reportType == this.ESCRITURACION) {
            order = ["EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "ProyEntrega", "ProyEscritura", "GesCred", "GesSub", "GesCart", "SemESEO", "EntidadCredito", "EntidadSubsidio", "EntidadSubsidio2", "EntidadAhorro", "EntidadCesantias", "Proyecto", "Agrupacion", "TorreManzana", "Unidad", "Tipo", "Estado", "NIT", "Nombre", "EstadoCivil", "CiudadComprador", "NIT Seg", "Nombre Seg", "EstadoCivilSeg", "CiudadCompradorSeg", "Neto", "TipoDeVenta", "clientes del exterior", "ANALISTA", "Aux Orden Escrituracion", "AnalistaPromesas", "AnalistaRecaudo", "AnalistaSubsidios", "EntidadSubsidio1", "Subsidio", "GestionSubsidio", "FGestionSubsidio", "GestionCartera", "Fecha Cuota Inicial", "EntidadCesantias1", "GestionCesantias", "EntidadAhorro1", "GestionAhorro", "EntidadCredito1", "GestionCredito", "F_GestionCredito", "DiasGestionCred", "VencimientoCredito_CRPA", "CreditoRatificado_CRAP", "VencimientoCredito", "EstadoCred", "FirmaPCV_PRFI", "PYSCC_PZCC", "EnvioOrdenEscr_ESEO", "Fecha Progr FRE", "FechaConcre_FRE", "FechaPactada_ESFP", "SaldoCI", "ConceptoCI", "RPH", "CTO", "PYSP", "FVPS", "PZNO", "FirmaComprador_ESFP", "ESRN", "FechaVenta", "FechaFactura", "NumFactura", "NumEscritura", "NombreNotaria", "NotariaAsignada", "NombreNotariaRPH", "NotariaRepartoFNA", "FechaProgObra", "FechaProg_FREN", "FechaConcre_FREN", "Entrega_FEPE", "BOLSA_DESISTIMIENTO_IDES", "Dias_para_Concretar_Escritura", "Dias_para_Escriturar", "MatriculaINM", "FRPL"];
        }
        else if (reportType == this.RECAUDO) {
            order = ["EstadoCoordinador", "ObservacionCoordinador", "EstadoAnalista", "ObservacionAnalista", "FechaAcuerdoProximoPago", "MontoPactado", "LlamadaNo1", "LlamadaNo2", "LlamadaNo3", "LlamadaNo4", "LlamadaNo5", "EstadoEscriturado", "Telefono", "SectorEconomico", "ActividadEconomica", "Direccion", "Ciudad", "ProyEntrega", "GesCred", "GesSub", "GesCart", "SemRecaudo", "Fecha Cuota Inicial1", "EntidadCredito", "EntidadSubsidio", "EntidadAhorro", "EntidadCesantias", "Proyecto", "Agrupacion", "Estado", "TipoProyecto", "NIT", "Nombre", "NIT Seg", "Nombre Seg", "Neto", "TipoDeVenta", "clientes del exterior", "Analista", "AnalistaPromesas", "AnalistaRecaudo", "AnalistaSubsidios", "EntidadSubsidio1", "Subsidio", "GestionSubsidio", "FGestionSubsidio", "GestionCartera", "Fecha Cuota Inicial", "EntidadCesantias1", "GestionCesantias", "EntidadAhorro1", "GestionAhorro", "EntidadCredito1", "GestionCredito", "F_GestionCredito", "DiasGestionCred", "VencimientoCredito_CRPA", "CreditoRatificado_CRAP", "VencimientoCredito", "EstadoCred", "FirmaPCV_PRFI", "PYSCC_PZCC", "EnvioOrdenEscr_ESEO", "Fecha Progr FRE", "FechaConcre_FRE", "FechaPactada_ESFP", "FirmaComprador_ESFP", "FechaVenta", "FechaProgObra", "NombreAgrupacionGeneral", "MaxMoraEdad", "SinVencer", "Mora 1-30 dias", "Mora 31-45 dias", "Mora 46-60 dias", "Mora 61-90 dias", "Mora 91-120 dias", "Mora 120 + dias", "Vencido", "Proyeccion_Mes", "Valor_Gestionar", "Cumplimiento_Meta", "EjecutadoMes", "Negocios de riesgos IDES", "Radicacion Ahorro Programado APRP", "Radicación Cobro Cesantias RACE"];
        }
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].json_to_sheet(json, { header: order });
        const workbook = { Sheets: { 'Sheet1': worksheet }, SheetNames: ['Sheet1'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_1__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
    isColumnDate(name) {
        for (let index = 0; index < this._utilsService.camposFecha.length; index++) {
            const element = this._utilsService.camposFecha[index];
            if (element == name) {
                return true;
            }
        }
        return false;
    }
}
ExcelExportService.ɵfac = function ExcelExportService_Factory(t) { return new (t || ExcelExportService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_utils_services__WEBPACK_IMPORTED_MODULE_3__["UtilsService"])); };
ExcelExportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ExcelExportService, factory: ExcelExportService.ɵfac });


/***/ }),

/***/ "x4GW":
/*!********************************************!*\
  !*** ./src/assets/json/campos_fechas.json ***!
  \********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"FechaSeguimientoCoordinador\",\"FechaSeguimientoAnalista\",\"FechaAsignacion\",\"FechaAsignacionVarado\",\"FechaDesvarado\",\"Fecha Cuota Inicial\",\"Fecha Progr FRE\",\"FechaConcre_FRE\",\"FechaPactada_ESFP\",\"FechaVenta\",\"FechaFactura\",\"FechaProgObra\",\"FechaProg_FREN\",\"FechaConcre_FREN\",\"CTO\",\"PYSP\",\"FVPS\",\"PZNO\",\"FirmaComprador_ESFP\",\"ESRN\",\"FGestionSubsidio\",\"F_GestionCredito\",\"VencimientoCredito_CRPA\",\"CreditoRatificado_CRAP\",\"VencimientoCredito\",\"SOLICITUD_AVALUO_SEAD\",\"SCC\",\"RECIBO DE CARTA COMPROMISO\",\"FirmaPCV_PRFI\",\"PYSCC_PZCC\",\"EnvioOrdenEscr_ESEO\",\"Entrega_FEPE\",\"CRSA\",\"CRAV\",\"ProyEntrega\",\"ProyEscritura\",\"SCR2\",\"SBAC\",\"RECEPCION_AVALUO_READ\",\"PETA\",\"PTIT\",\"RPH\",\"IDES AS BOLSA_DESISTIMIENTO_IDES\",\"FVPYS\",\"FechadeEntrega\",\"DESEMBOLSO_CREDITO_CRDS\",\"Fecha Notificacion Desembolso_CRDC\",\"FechaRadicacionCredito\",\"Envio_garantia_Banco\",\"FTramiteTrazabilidad\",\"PROGRAMACION_ENTREGA\",\"ENTREGA_INMUEBLE_FEPE\",\"FECHA_ENTREGA_OBRA_FEO\",\"ENVIO_EP_CIERRE_COPIA_ESNC\",\"FECHA_SALIDA_REGISTRO_FSR\",\"FECHA_INGRESO_REGISTRO_ESLC\",\"FIRMA_REP_LEGAL_BANCO_REFB\",\"ESCRITURA_LIBERACION_HIPOTECA_ESLL\",\"APROBACION_INICIAL_CREDITO_CRPA\",\"SubsidioAprobado_SBAP\",\"SubsidioAprobado2_SBA2\",\"SubsidioAprobadoSemilleroPropietarios_SASP\",\"SubsidioAprobadoConcurrente_SBAC\",\"SubsidioProrrogaConcurrente_SBC2\",\"SubsidioProrrogaSemillero2_SPS2\",\"NotifiDesemSubsidio_SBDC\",\"SDE2\",\"NotificacionDesemSubsidio3_SDE3\",\"DesembolsoSubsidio_SUDE\",\"RadicacionCobroSubsidio_SURC\",\"RadicacionCobroSubsidio2_SUR2\",\"RadicacionCobroSubsidio3_SUR3\",\"ENTREGA CERTIFICADOS HABITABILIDAD_ENCH\",\"FechaEstimadaDePyS\",\"FSAC\",\"FRAC\",\"FechaAcuerdoProximoPago\",\"Fecha Cuota Inicial1\",\"Negocios de riesgos IDES\",\"Radicacion Ahorro Programado APRP\",\"Radicación Cobro Cesantias RACE\",\"Fecha De radicacion de Crédito CRRA\",\"ENVI\"]");

/***/ })

}]);
//# sourceMappingURL=default~pages-tables-legalizacion-legalizacion-module~pages-tables-legalizacion-table-module.js.map