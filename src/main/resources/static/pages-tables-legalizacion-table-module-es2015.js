(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tables-legalizacion-table-module"],{

/***/ "0bJX":
/*!***********************************************************!*\
  !*** ./src/app/pages/tables/legalizacion/table.module.ts ***!
  \***********************************************************/
/*! exports provided: TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.component */ "AF2D");
/* harmony import */ var _table_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-routing.module */ "pGCM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _customerservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customerservice */ "NjGU");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var src_app_services_table_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/table.service */ "TQws");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var src_app_services_excel_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/excel.services */ "UXtv");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "iTUp");
/* harmony import */ var src_app_services_utils_services__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/services/utils.services */ "HZWf");
/* harmony import */ var src_app_services_interceptor_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/services/interceptor.service */ "KRBT");
/* harmony import */ var src_app_services_legalizacion_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/services/legalizacion.service */ "7KSe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ "fXoL");


























class TableModule {
}
TableModule.ɵfac = function TableModule_Factory(t) { return new (t || TableModule)(); };
TableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: TableModule });
TableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ providers: [
        _customerservice__WEBPACK_IMPORTED_MODULE_5__["CustomerService"],
        src_app_services_excel_services__WEBPACK_IMPORTED_MODULE_12__["ExcelExportService"],
        src_app_services_table_service__WEBPACK_IMPORTED_MODULE_7__["TableService"],
        src_app_services_legalizacion_service__WEBPACK_IMPORTED_MODULE_24__["LegalizacionService"],
        src_app_services_utils_services__WEBPACK_IMPORTED_MODULE_22__["UtilsService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: src_app_services_interceptor_service__WEBPACK_IMPORTED_MODULE_23__["TokenInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _table_routing_module__WEBPACK_IMPORTED_MODULE_2__["TableRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_21__["PipeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](TableModule, { declarations: [_table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _table_routing_module__WEBPACK_IMPORTED_MODULE_2__["TableRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_21__["PipeModule"]] }); })();


/***/ }),

/***/ "AF2D":
/*!**************************************************************!*\
  !*** ./src/app/pages/tables/legalizacion/table.component.ts ***!
  \**************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_modals_modify_datatable_modify_datatable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/modify-datatable/modify-datatable.component */ "lyp0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var src_assets_json_campos_fechas_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/assets/json/campos_fechas.json */ "x4GW");
var src_assets_json_campos_fechas_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/json/campos_fechas.json */ "x4GW", 1);
/* harmony import */ var src_assets_json_campos_moneda_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/assets/json/campos_moneda.json */ "oji5");
var src_assets_json_campos_moneda_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/json/campos_moneda.json */ "oji5", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_excel_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/excel.services */ "UXtv");
/* harmony import */ var src_app_services_table_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/table.service */ "TQws");
/* harmony import */ var src_app_services_utils_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/utils.services */ "HZWf");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/layout/layout/layout.component */ "rqBn");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/spinner/spinner.component */ "f3yp");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _shared_filter_filter_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/filter/filter.component */ "pTvf");
/* harmony import */ var _shared_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/filter-date/filter-date.component */ "GYa1");
/* harmony import */ var _shared_filter_currency_filter_currency_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/filter-currency/filter-currency.component */ "uAhc");
/* harmony import */ var _pipes_header_name_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../pipes/header-name.pipe */ "AdZC");
































function TableComponent_ng_container_16_th_1_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TableComponent_ng_container_16_th_1_mat_icon_5_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16); const headers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r14.announceSortChange(headers_r3, "ASC"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "import_export");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function TableComponent_ng_container_16_th_1_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TableComponent_ng_container_16_th_1_mat_icon_6_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19); const headers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r17.announceSortChange(headers_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "south");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function TableComponent_ng_container_16_th_1_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TableComponent_ng_container_16_th_1_mat_icon_7_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22); const headers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r20.announceSortChange(headers_r3, "DESC"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "north");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { filterActive: a0 }; };
function TableComponent_ng_container_16_th_1_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TableComponent_ng_container_16_th_1_mat_icon_8_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25); const headers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r23.getHeaderOptionsTable(headers_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "filter_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const headers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c0, ctx_r9.searchCondition[headers_r3] != null));
} }
function TableComponent_ng_container_16_th_1_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TableComponent_ng_container_16_th_1_mat_icon_9_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r29); const headers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r27.openDateFilter(headers_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "filter_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const headers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c0, ctx_r10.searchConditionDateFilter[headers_r3] != null));
} }
function TableComponent_ng_container_16_th_1_app_filter_10_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-filter", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("newItemEvent", function TableComponent_ng_container_16_th_1_app_filter_10_Template_app_filter_newItemEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r31.applyFilter($event); })("removeItemEvent", function TableComponent_ng_container_16_th_1_app_filter_10_Template_app_filter_removeItemEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r33.clearColumn($event); })("searchFilterItemEvent", function TableComponent_ng_container_16_th_1_app_filter_10_Template_app_filter_searchFilterItemEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r34.getHeaderOptionFilterList($event); })("clearSearchFilterItemEvent", function TableComponent_ng_container_16_th_1_app_filter_10_Template_app_filter_clearSearchFilterItemEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r35.getHeaderOptionsTable($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const headers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx_r11.safeColumn(headers_r3))("headers", headers_r3)("filtersOptions", ctx_r11.filtersOptions)("camposFecha", ctx_r11.camposFecha)("displayLoading", ctx_r11.displayLoadingFilter)("eventsClear", ctx_r11.eventsSubjectDateFilter.asObservable())("eventsSearchFilter", ctx_r11.eventsSubjectSearchedSimpleFilter.asObservable());
} }
function TableComponent_ng_container_16_th_1_app_filter_date_11_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-filter-date", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("newItemEvent", function TableComponent_ng_container_16_th_1_app_filter_date_11_Template_app_filter_date_newItemEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r37.applyFilterDate($event); })("removeItemEvent", function TableComponent_ng_container_16_th_1_app_filter_date_11_Template_app_filter_date_removeItemEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r39.deleteFilterDate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const headers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx_r12.safeColumn(headers_r3) + "-date")("headers", headers_r3)("filtersOptions", ctx_r12.filtersOptions)("camposFecha", ctx_r12.camposFecha)("eventsClear", ctx_r12.eventsSubjectDateFilter.asObservable());
} }
function TableComponent_ng_container_16_th_1_app_filter_currency_12_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-filter-currency", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("newItemEvent", function TableComponent_ng_container_16_th_1_app_filter_currency_12_Template_app_filter_currency_newItemEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r41.applyFilterDate($event); })("removeItemEvent", function TableComponent_ng_container_16_th_1_app_filter_currency_12_Template_app_filter_currency_removeItemEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r43.deleteFilterDate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const headers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx_r13.safeColumn(headers_r3) + "-date")("headers", headers_r3)("filtersOptions", ctx_r13.filtersOptions)("camposFecha", ctx_r13.camposFecha)("eventsClear", ctx_r13.eventsSubjectDateFilter.asObservable());
} }
function TableComponent_ng_container_16_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, TableComponent_ng_container_16_th_1_mat_icon_5_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, TableComponent_ng_container_16_th_1_mat_icon_6_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, TableComponent_ng_container_16_th_1_mat_icon_7_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, TableComponent_ng_container_16_th_1_mat_icon_8_Template, 2, 3, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, TableComponent_ng_container_16_th_1_mat_icon_9_Template, 2, 3, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, TableComponent_ng_container_16_th_1_app_filter_10_Template, 1, 7, "app-filter", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, TableComponent_ng_container_16_th_1_app_filter_date_11_Template, 1, 5, "app-filter-date", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, TableComponent_ng_container_16_th_1_app_filter_currency_12_Template, 1, 5, "app-filter-currency", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const headers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", headers_r3 == "a.UNI_ID" || headers_r3 == "UNI_ID" || headers_r3 == "VTA_ID" || headers_r3 == "PRY_ID" || headers_r3 == "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 10, headers_r3, ctx_r4.searchText));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.sortFilter.name == null && ctx_r4.sortFilter.direction == null || ctx_r4.sortFilter.name != headers_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.sortFilter.name == headers_r3 && ctx_r4.sortFilter.direction == "DESC");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.sortFilter.name == headers_r3 && ctx_r4.sortFilter.direction == "ASC");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.getHeaderType(headers_r3) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.getHeaderType(headers_r3) == 2 || ctx_r4.getHeaderType(headers_r3) == 3 || ctx_r4.getHeaderType(headers_r3) == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.getHeaderType(headers_r3) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.getHeaderType(headers_r3) == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.getHeaderType(headers_r3) == 2 || ctx_r4.getHeaderType(headers_r3) == 4);
} }
function TableComponent_ng_container_16_td_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const headers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](element_r46[ctx_r47.getAliasFromColumnCalculate(headers_r3)]);
} }
function TableComponent_ng_container_16_td_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const headers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, element_r46[ctx_r48.getAliasFromColumnCalculate(headers_r3)]));
} }
function TableComponent_ng_container_16_td_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const headers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, element_r46[ctx_r49.getAliasFromColumnCalculate(headers_r3)], "dd-MM-yyyy"));
} }
function TableComponent_ng_container_16_td_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const headers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, element_r46[ctx_r50.getAliasFromColumnCalculate(headers_r3)], "1.2-2"), " %");
} }
const _c1 = function (a0, a1, a2, a3) { return { negativeColorRules: a0, ok1ColorRules: a1, ok2ColorRules: a2, expirationColorRules: a3 }; };
function TableComponent_ng_container_16_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, TableComponent_ng_container_16_td_2_span_1_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, TableComponent_ng_container_16_td_2_span_2_Template, 3, 3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, TableComponent_ng_container_16_td_2_span_3_Template, 3, 4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, TableComponent_ng_container_16_td_2_span_4_Template, 3, 4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r46 = ctx.$implicit;
    const headers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", headers_r3 == "a.UNI_ID" || headers_r3 == "UNI_ID" || headers_r3 == "VTA_ID" || headers_r3 == "PRY_ID" || headers_r3 == "ID")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction4"](6, _c1, (headers_r3 == "GesCred" || headers_r3 == "GesSub" || headers_r3 == "GesCart") && ctx_r5.getStatusRules(headers_r3, element_r46[headers_r3]) == 0, (headers_r3 == "GesCred" || headers_r3 == "GesSub" || headers_r3 == "GesCart") && ctx_r5.getStatusRules(headers_r3, element_r46[headers_r3]) == 1, (headers_r3 == "GesCred" || headers_r3 == "GesSub" || headers_r3 == "GesCart") && ctx_r5.getStatusRules(headers_r3, element_r46[headers_r3]) == 2, (headers_r3 == "GesCred" || headers_r3 == "GesSub" || headers_r3 == "GesCart") && ctx_r5.getStatusRules(headers_r3, element_r46[headers_r3]) == 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.getHeaderType(headers_r3) != 2 && ctx_r5.getHeaderType(headers_r3) != 3 && ctx_r5.getHeaderType(headers_r3) != 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.getHeaderType(headers_r3) == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.getHeaderType(headers_r3) == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.getHeaderType(headers_r3) == 4);
} }
function TableComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, TableComponent_ng_container_16_th_1_Template, 13, 13, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, TableComponent_ng_container_16_td_2_Template, 5, 11, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const headers_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matColumnDef", headers_r3);
} }
function TableComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 32);
} }
const _c2 = function (a0) { return { rowSelect: a0 }; };
function TableComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TableComponent_tr_18_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r64); const i_r61 = ctx.index; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r63.selectRow(i_r61); })("dblclick", function TableComponent_tr_18_Template_tr_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r64); const element_r62 = ctx.$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r65.editElement(element_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r61 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c2, ctx_r2.rowSelected == i_r61));
} }
const _c3 = function () { return [10, 20, 30]; };
const _c4 = function () { return { width: "50vw" }; };
const _c5 = function () { return { "960px": "75vw", "640px": "100vw" }; };
/**
 * @title Table with pagination
 */
class TableComponent {
    constructor(_excelExportService, legalizacionService, _utilsService, dialog, router) {
        this._excelExportService = _excelExportService;
        this.legalizacionService = legalizacionService;
        this._utilsService = _utilsService;
        this.dialog = dialog;
        this.router = router;
        this.obrasSelect = "''2-4'',''2-8'',''104-164'',''104-165'',''104-166'',''104-167'',''104-168'',''104-169'',''107-100'',''107-101'',''107-102'',''107-103'',''107-104'',''107-106'',''107-107'',''107-108'',''107-109'',''107-110'',''107-111'',''107-116'',''107-117'',''107-118'',''107-119'',''107-121'',''107-122'',''107-123'',''107-124'',''107-125'',''107-126'',''107-127'',''107-128'',''107-129'',''107-130'',''107-133'',''107-134'',''107-135'',''107-136'',''107-137'',''107-138'',''107-139'',''107-140'',''107-141'',''107-142'',''107-143'',''107-144'',''107-145'',''108-105'',''108-106'',''111-146'',''111-147'',''112-1107'',''112-1108'',''112-1109'',''112-1110'',''112-1111'',''112-1112'',''112-1113'',''112-113'',''112-114'',''122-12'',''122-13'',''123-101'',''123-102'',''124-101'',''124-102'',''128-10'',''129-100'',''129-101'',''130-4'',''130-5'',''131-100'',''131-101'',''132-100'',''132-101'',''133-107'',''133-109'',''133-111'',''133-115'',''133-116'',''138-1'',''138-2'',''139-1'',''139-10'',''139-11'',''139-2'',''139-3'',''139-8'',''140-100'',''146-100'',''147-100'',''147-101'',''149-100'',''149-101'',''149-102'',''152-1'',''152-10'',''152-11'',''152-2'',''152-3'',''152-4'',''152-7'',''152-8'',''152-9'',''153-1'',''153-10'',''153-11'',''153-12'',''153-2'',''153-3'',''153-4'',''153-5'',''153-6'',''153-7'',''153-8'',''153-9'',''154-1'',''154-2'',''155-1'',''155-2'',''156-1'',''156-2'',''156-3'',''157-1'',''157-2'',''158-3'',''158-4'',''159-1'',''160-1'',''160-138'',''160-139'',''160-140'',''160-141'',''160-142'',''160-143'',''160-144'',''160-145'',''160-146'',''160-147'',''161-100'',''161-101'',''162-100'',''162-101'',''162-102'',''162-104'',''162-105'',''162-106'',''162-107'',''163-100'',''2-102'',''2-113'',''2-117'',''2-15'',''2-16'',''2-18'',''2-22'',''2-23'',''2-24'',''2-26'',''2-266'',''2-290'',''2-294'',''2-30'',''2-301'',''2-31'',''2-32'',''2-328'',''2-333'',''2-337'',''2-338'',''2-346'',''2-35'',''2-369'',''2-371'',''2-373'',''2-376'',''2-38'',''2-380'',''2-383'',''2-384'',''2-399'',''2-400'',''2-406'',''2-417'',''2-422'',''2-423'',''2-424'',''2-425'',''2-426'',''2-427'',''2-428'',''2-429'',''2-430'',''2-431'',''2-435'',''2-447'',''2-449'',''2-452'',''2-455'',''2-457'',''2-458'',''2-462'',''2-464'',''2-465'',''2-466'',''2-467'',''2-468'',''2-469'',''2-470'',''2-471'',''2-472'',''2-473'',''2-476'',''2-477'',''2-497'',''2-498'',''2-509'',''2-510'',''2-513'',''2-518'',''2-519'',''2-520'',''2-526'',''2-527'',''2-537'',''2-538'',''2-541'',''2-550'',''2-563'',''2-564'',''2-565'',''2-578'',''2-580'',''2-586'',''2-644'',''2-645'',''2-646'',''2-652'',''2-658'',''2-661'',''2-663'',''2-665'',''2-667'',''2-668'',''2-669'',''2-670'',''2-671'',''2-672'',''2-681'',''2-693'',''2-694'',''2-695'',''2-696'',''2-715'',''2-73'',''2-739'',''2-740'',''2-741'',''2-742'',''2-753'',''2-776'',''2-78'',''2-79'',''2-793'',''2-799'',''2-800'',''2-813'',''2-814'',''2-839'',''2-840'',''2-875'',''27-342'',''55-1'',''74-1'',''74-2'',''74-3'',''77-509'',''77-510'',''77-513'',''77-514'',''77-516'',''77-518'',''80-447'',''87-101'',''87-102'',''87-103'',''93-101'',''93-102'',''93-103'',''93-104'',''93-105'',''93-108'',''96-10'',''96-11'',''96-2'',''96-21'',''96-22'',''96-25'',''96-26'',''96-3'',''96-33'',''96-34'',''96-35'',''96-36'',''96-37'',''96-4'',''96-5'',''96-6'',''96-7'',''96-8'',''96-9''";
        this.displayedColumns = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.dataTable = [];
        this.page = 1;
        this.sizePage = 10;
        this.lengthTable = 0;
        this.sortFilter = {
            name: null,
            direction: null
        };
        this.displayLoading = false;
        this.filtersOptions = [];
        this.searchCondition = {};
        this.searchConditionDateFilter = {};
        this.searchValue = {};
        this.searchTemp = null;
        this.filterDateList = [];
        this.negativeColorRules = ["NEGADO", "VENCIDO", "SIN APROBAR", "VENCIDO.APROBACION", "VENCIDO_SBA2", "VENCIDO_SBAP", "SIN RADICAR", "PDTE. CI,AH,CS", "PDTE. CI,AH", "PDTE. CI,CS", "PDTE. AH,CS", "PDTE. CI", "PDTE. AH", "PDTE. CS"];
        this.ok1ColorRules = ["N/A", "PAZYSALVO", "RATIFICADO", "N/A", "APROBADO_SBA2", "APROBADO_SBAP", "OK"];
        this.ok2ColorRules = ["EN LEGALIZACION", "APROBADO", "RADICADO"];
        this.expirationColorRules = ["PROX.VENC", "PROX.VENC_SBA2", "PROX.VENC_SBAP"];
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
        this.camposFecha = [];
        // campoMoneda: any = ['Neto', 'SaldoCI', 'ValorCredito', 'ValorPagadoCredito', 'Valor Subsidio 1', 'Valor Subsidio 2', 'Valor Subsidio Concurrente', 'Valor Pagado Subsidio', 'MontoPactado', 'SinVencer', 'Mora 1-30 dias', 'Mora 31-45 dias', 'Mora 46-60 dias', 'Mora 61-90 dias', 'Mora 91-120 dias', 'Mora 120 + dias', 'Vencido', 'Proyeccion_Mes', 'Valor_Gestionar', 'EjecutadoMes'];
        this.campoMoneda = [];
        this.eventsSubjectDateFilter = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.eventsSubjectSearchedSimpleFilter = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
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
        this.camposFecha = src_assets_json_campos_fechas_json__WEBPACK_IMPORTED_MODULE_8___namespace;
        this.camposFecha = this.camposFecha.default;
        console.log('this.camposFecha', this.camposFecha);
        this.campoMoneda = src_assets_json_campos_moneda_json__WEBPACK_IMPORTED_MODULE_9___namespace;
        this.campoMoneda = this.campoMoneda.default;
        console.log('this.campoMoneda', this.campoMoneda);
        this.currentPage = router.routerState.snapshot.url;
        console.log('this.currentPage', this.currentPage);
        let pathPart = this.currentPage.split('/');
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
        this.quickSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.quickSearch.valueChanges.subscribe((x) => {
            console.log('x', x);
            if (x.length > 3) {
                let searchTemp = ` AND ( Nombre LIKE ''%${x}%'' OR Agrupacion LIKE ''%${x}%'' OR NIT LIKE ''%${x}%'' OR [NIT Seg] LIKE ''%${x}%'' )`;
                console.log(searchTemp);
                this.searchTemp = searchTemp;
                this.page = 1;
                this.getDataTable();
            }
            else if (x.length < 1 && this.searchTemp != null) {
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
    getDataTable(showHeader) {
        let sortFilterTemp = this.sortFilter.name != null && this.sortFilter.direction != null ? `${/\s/g.test(this.sortFilter.name) ? `[${this.sortFilter.name}]` : this.sortFilter.name} ${String(this.sortFilter.direction).toUpperCase()}` : '';
        console.log('sortFilterTemp', sortFilterTemp);
        let filterTemp = this.getFilterParameters();
        if (filterTemp != null) {
            filterTemp = filterTemp.replaceAll(';', ',');
        }
        this.displayLoading = true;
        this.legalizacionService.getDataTable(this.obrasSelect, this.page, this.sizePage, sortFilterTemp, filterTemp, this.reportType)
            .subscribe((data) => {
            console.log(data);
            if (showHeader) {
                let headers = data.headers;
                headers = headers.map((sweetItem) => {
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
                    }
                    if (sweetItem.includes('=')) {
                        let tempv = sweetItem.split('=');
                        if (tempv[0].charAt(0) == '[') {
                            tempv[0] = tempv[0].substring(1);
                        }
                        if (tempv[0].charAt(tempv[0].length - 1) == ']') {
                            tempv[0] = tempv[0].substring(0, tempv[0].length - 1);
                        }
                        sweetItem = tempv[0] + '=' + tempv[1];
                    }
                    else {
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
                });
                console.log('#####headers', headers);
                console.log('#####headers', JSON.stringify(headers));
                this.displayedColumns = headers;
            }
            this.dataTable = data.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data.data);
            this.lengthTable = data.count;
            // this.dataSource.paginator = this.paginator;
            this.displayLoading = false;
        }, (err) => {
            console.log(err);
            this.displayLoading = false;
        });
    }
    announceSortChange(name, direction) {
        if (direction) {
            console.log(`Sorted ${direction}ending`);
            this.sortFilter = {
                name: name,
                direction: String(direction).toUpperCase()
            };
            console.log('sortFilter', this.sortFilter);
            let sortFilterTemp = `${/\s/g.test(name) ? `[${name}]` : name} ${String(direction).toUpperCase()}`;
            console.log('sortFilterTemp', sortFilterTemp);
            let filterTemp = this.getFilterParameters();
            if (filterTemp != null) {
                filterTemp = filterTemp.replaceAll(';', ',');
            }
            this.displayLoading = true;
            this.legalizacionService.getDataTable(this.obrasSelect, this.page, this.sizePage, sortFilterTemp, filterTemp, this.reportType)
                .subscribe((resultado) => {
                console.log(resultado);
                // this.resultado = resultado;
                this.dataTable = resultado.data;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](resultado.data);
                this.lengthTable = resultado.count;
                this.displayLoading = false;
            }, err => {
                this.displayLoading = false;
            });
        }
        else {
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
    changePage(evt) {
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
            .subscribe((resultado) => {
            console.log(resultado);
            // this.resultado = resultado;
            this.dataTable = resultado.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](resultado.data);
            this.lengthTable = resultado.count;
            this.sizePage = evt.pageSize;
            this.page = evt.pageIndex + 1;
            this.displayLoading = false;
        }, err => {
            this.displayLoading = false;
        });
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
            .subscribe((data) => {
            console.log('data export ', data);
            this._excelExportService.exportAsExcelFile(data.data, 'backup', this.reportType);
            this.displayLoading = false;
        }, (err) => {
            console.log(err);
            this.displayLoading = false;
        });
    }
    cleanFilter() {
        this.filterDateList = [];
        this.searchCondition = {};
        this.searchConditionDateFilter = {};
        this.sortFilter = {
            name: null,
            direction: null
        };
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
            .subscribe((resultado) => {
            console.log(resultado);
            this.dataTable = resultado.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](resultado.data);
            // this.dataSource.paginator = this.paginator;
            this.lengthTable = resultado.count;
            this.paginator.length = resultado.count;
            this.paginator.pageIndex = 0;
            console.log('####this.lengthTable', this.lengthTable);
            this.displayLoading = false;
        }, err => {
            this.displayLoading = false;
        });
    }
    getHeaderOptionsTable(dataGroup) {
        console.log('####dataGroup ', dataGroup);
        let idTemp = this.removeWhiteSpaces(dataGroup);
        if (idTemp.includes('.') && !idTemp.includes('=')) {
            let tempv = idTemp.split('.');
            tempv.length > 1 ? idTemp = tempv[1] : idTemp = tempv[0];
        }
        // setTimeout(() => {
        //   console.log('car eventooooooo');
        jquery__WEBPACK_IMPORTED_MODULE_3__('#' + idTemp).show();
        // }, 250);
        let filterTemp = this.getFilterParameters(dataGroup);
        console.log('#### filterTemp ####', filterTemp);
        // this.displayLoading = true;
        src_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].displayLoading = true;
        let idFormat = dataGroup;
        idFormat = this._utilsService.getOriginalNameFromColumnCalculate(idFormat);
        console.log('####idFormat ', idFormat);
        if (filterTemp != null) {
            filterTemp = filterTemp.replaceAll(';', ',');
        }
        idFormat = this._utilsService.processComputedColumn(idFormat);
        console.log('calculada idFormat', idFormat);
        this.legalizacionService.getHeaderOptionsTable(this.obrasSelect, idFormat, filterTemp, this.reportType)
            .subscribe((data) => {
            console.log(data);
            data = data.map((sweetItem) => {
                if (sweetItem == null || (sweetItem != null && sweetItem.toString().trim() == '')) {
                    sweetItem = "Vacio";
                }
                return sweetItem;
            });
            this.filtersOptions[String(dataGroup)] = data;
            console.log(this.filtersOptions);
            this.eventsSubjectSearchedSimpleFilter.next();
            // this.displayLoading = false;
            src_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].displayLoading = false;
        }, (err) => {
            console.log(err);
            // this.displayLoading = false;
            src_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].displayLoading = false;
        });
    }
    getHeaderOptionFilterList(evt) {
        let dataGroup = evt.id;
        let search = evt.search;
        console.log('---dato ', dataGroup);
        let filterTemp = this.getFilterParameters(dataGroup);
        console.log('#### filterTemp ####', filterTemp);
        src_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].displayLoading = true;
        let idFormat = dataGroup;
        if (/ /g.test(idFormat)) {
            if (String(idFormat).includes('=')) {
                if (String(idFormat).includes('when') || String(idFormat).includes('WHEN') || String(idFormat).includes('When')) {
                    idFormat = idFormat.replaceAll("'", "''");
                    idFormat = `(${idFormat})`;
                }
                else {
                    idFormat = `(${idFormat})`;
                }
            }
            else {
                idFormat = `[${idFormat}]`;
            }
        }
        this.legalizacionService.getHeaderOptionFilterList(this.obrasSelect, idFormat, filterTemp, search, this.reportType)
            .subscribe((data) => {
            console.log(data);
            data = data.map((sweetItem) => {
                if (sweetItem == null || (sweetItem != null && sweetItem.toString().trim() == '')) {
                    sweetItem = "Vacio";
                }
                return sweetItem;
            });
            this.filtersOptions[String(dataGroup)] = data;
            console.log(this.filtersOptions);
            this.eventsSubjectSearchedSimpleFilter.next();
            src_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].displayLoading = false;
        }, (err) => {
            console.log(err);
            src_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].displayLoading = false;
        });
    }
    openDateFilter(dataGroup) {
        console.log('borrrar comentario ', this.searchConditionDateFilter);
        dataGroup = this.safeColumn(dataGroup);
        console.log('openDateFilter', dataGroup + '-date');
        jquery__WEBPACK_IMPORTED_MODULE_3__('#' + dataGroup + '-date').show();
    }
    applyFilter(evt) {
        // console.log('##### evento padre',id);
        var keys = Object.keys(evt);
        if (keys.length > 0) {
            console.log('sub_keys', keys);
            keys.forEach((element) => {
                console.log(element);
                this.searchCondition[element] = evt[element];
            });
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
            .subscribe((resultado) => {
            console.log(resultado);
            // this.resultado = resultado;
            this.dataTable = resultado.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](resultado.data);
            this.dataSource.paginator = this.paginator;
            this.lengthTable = resultado.count;
            this.displayLoading = false;
        }, err => {
            this.displayLoading = false;
        });
    }
    clearColumn(evt) {
        delete this.searchCondition[evt];
        console.log(this.searchCondition);
        let filterTemp = this.getFilterParameters();
        console.log('limpiar filtro ', filterTemp);
        this.getDataTable();
    }
    applyFilterDate(evt) {
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
    deleteFilterDate(evt) {
        console.log(evt);
        let listTemp = [];
        for (let index = 0; index < this.filterDateList.length; index++) {
            const element = this.filterDateList[index];
            if (element.field != evt) {
                listTemp.push(element);
            }
            else {
                delete this.searchConditionDateFilter[evt];
            }
        }
        this.filterDateList = listTemp;
        this.getDataTable();
    }
    getFilterParameters(header) {
        console.log('armar filtros con esto', this.searchCondition);
        let filterTemp = "";
        var keys = Object.keys(this.searchCondition);
        if (keys.length > 0) {
            console.log('keys', keys);
            keys.forEach((element) => {
                console.log(element);
                console.log('filtro con header ' + header + ' keys ' + element);
                if (header != null && element == header) {
                }
                else {
                    let listTemp = this.searchCondition[element].map((sweetItem) => {
                        return `''${sweetItem}''`;
                    });
                    element = this._utilsService.getOriginalNameFromColumnCalculate(element);
                    if (listTemp.length <= 1 && listTemp.includes("''Vacio''")) {
                        filterTemp = filterTemp + ` AND (${element} IS NULL OR ${element} = '''') `;
                    }
                    else if (listTemp.length > 1 && listTemp.includes("''Vacio''")) {
                        let itemTemp = listTemp.toString();
                        itemTemp = itemTemp.replace(",''Vacio''", '');
                        itemTemp = itemTemp.replace("''Vacio'',", '');
                        itemTemp = itemTemp.replace("''Vacio''", '');
                        if (/ /g.test(element)) {
                            if (String(element).includes('=')) {
                                if (String(element).includes('when') || String(element).includes('WHEN') || String(element).includes('When')) {
                                    element = element.replaceAll("'", "''");
                                    element = `(${element})`;
                                }
                                else {
                                    element = `(${element})`;
                                }
                            }
                            else {
                                element = `[${element}]`;
                            }
                        }
                        filterTemp = filterTemp + ` AND (${element} IN (${itemTemp}) OR ${element} IS NULL)`;
                    }
                    else {
                        if (/ /g.test(element)) {
                            if (String(element).includes('=')) {
                                if (String(element).includes('when') || String(element).includes('WHEN') || String(element).includes('When')) {
                                    element = element.replaceAll("'", "''");
                                    element = `(${element})`;
                                }
                                else {
                                    element = `(${element})`;
                                }
                            }
                            else {
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
        const dialogRef = this.dialog.open(src_app_modals_modify_datatable_modify_datatable_component__WEBPACK_IMPORTED_MODULE_4__["ModifyDatatableComponent"], {
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
    getReportType(name) {
        if (name == 'legalizacion') {
            return this.LEGALIZACION;
        }
        else if (name == 'promesas') {
            return this.PROMESA;
        }
        if (name == 'subsidios') {
            return this.SUBSIDIO;
        }
        if (name == 'segumientos-subsidio') {
            return this.SEGUIMIENTO_SUBSIDIO;
        }
        if (name == 'entregas') {
            return this.ENTREGA;
        }
        else if (name == 'desembolsos') {
            return this.DESEMBOLSO;
        }
        if (name == 'recaudos') {
            return this.RECAUDO;
        }
        else if (name == 'trazabilidad') {
            return this.TRAZABILIDAD;
        }
        else if (name == 'ordenes') {
            return this.ORDENES;
        }
        else if (name == 'renovaciones') {
            return this.RENOVACION;
        }
        else if (name == 'escrituracion') {
            return this.ESCRITURACION;
        }
        return;
    }
    getReportName(name) {
        if (name == 'legalizacion') {
            return 'Legalizacion';
        }
        else if (name == 'promesas') {
            return 'Promesas';
        }
        if (name == 'subsidios') {
            return 'Subsidios';
        }
        if (name == 'segumientos-subsidio') {
            return 'Segumientos Subsidio';
        }
        if (name == 'entregas') {
            return 'Entregas';
        }
        else if (name == 'desembolsos') {
            return 'Desembolsos';
        }
        if (name == 'recaudos') {
            return 'Recaudos';
        }
        else if (name == 'trazabilidad') {
            return 'Trazabilidad';
        }
        else if (name == 'ordenes') {
            return 'Ordenes';
        }
        else if (name == 'renovaciones') {
            return 'Renovaciones';
        }
        else if (name == 'escrituracion') {
            return 'Escrituraciones';
        }
        return;
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_excel_services__WEBPACK_IMPORTED_MODULE_11__["ExcelExportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_table_service__WEBPACK_IMPORTED_MODULE_12__["TableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_utils_services__WEBPACK_IMPORTED_MODULE_13__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"])); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-legalizacion"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 26, vars: 20, consts: [[1, "content-panel", 3, "click"], [1, "title-content"], [1, "example-spacer"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "formControl"], [1, "content-btns"], ["mat-raised-button", "", 1, "btn-clean", 3, "click"], [1, "content-table", "example-container"], ["mat-table", "", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "ngClass", "click", "dblclick", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "length", "pageSizeOptions", "page"], ["id", "spinner-panel", 3, "visible", "closeIcon", "showHeader", "dismissableMask", "modal", "breakpoints", "visibleChange"], [1, "download-content", 3, "click"], ["mat-fab", "", "color", "primary", "aria-label", "Example icon button with a delete icon"], [3, "matColumnDef"], ["mat-header-cell", "", 3, "hidden", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "hidden", "ngClass", 4, "matCellDef"], ["mat-header-cell", "", 3, "hidden"], [1, "th-header"], [3, "click", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], ["class", "header-filter", 3, "id", "headers", "filtersOptions", "camposFecha", "displayLoading", "eventsClear", "eventsSearchFilter", "newItemEvent", "removeItemEvent", "searchFilterItemEvent", "clearSearchFilterItemEvent", 4, "ngIf"], ["class", "header-filter date-filter-modal", 3, "id", "headers", "filtersOptions", "camposFecha", "eventsClear", "newItemEvent", "removeItemEvent", 4, "ngIf"], [3, "click"], [3, "ngClass", "click"], [1, "header-filter", 3, "id", "headers", "filtersOptions", "camposFecha", "displayLoading", "eventsClear", "eventsSearchFilter", "newItemEvent", "removeItemEvent", "searchFilterItemEvent", "clearSearchFilterItemEvent"], [1, "header-filter", "date-filter-modal", 3, "id", "headers", "filtersOptions", "camposFecha", "eventsClear", "newItemEvent", "removeItemEvent"], ["mat-cell", "", 3, "hidden", "ngClass"], ["class", "td-content", 4, "ngIf"], [1, "td-content"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click", "dblclick"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TableComponent_Template_section_click_1_listener() { return ctx.actionPanel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Busqueda por NIT, Nombre, Agrupaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TableComponent_Template_button_click_12_listener() { return ctx.cleanFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Limpiar");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, TableComponent_ng_container_16_Template, 3, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, TableComponent_tr_17_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, TableComponent_tr_18_Template, 1, 3, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("page", function TableComponent_Template_mat_paginator_page_19_listener($event) { return ctx.changePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "p-dialog", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("visibleChange", function TableComponent_Template_p_dialog_visibleChange_20_listener($event) { return ctx.displayLoading = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TableComponent_Template_div_click_22_listener() { return ctx.exportToExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.tableName);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.quickSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("length", ctx.lengthTable)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](17, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](18, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", ctx.displayLoading)("closeIcon", false)("showHeader", false)("dismissableMask", false)("modal", true)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](19, _c5));
    } }, directives: [_shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_16__["LayoutComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["Dialog"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_23__["SpinnerComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgClass"], _shared_filter_filter_component__WEBPACK_IMPORTED_MODULE_25__["FilterComponent"], _shared_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_26__["FilterDateComponent"], _shared_filter_currency_filter_currency_component__WEBPACK_IMPORTED_MODULE_27__["FilterCurrencyComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_pipes_header_name_pipe__WEBPACK_IMPORTED_MODULE_28__["HeaderNamePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["DecimalPipe"]], styles: [".content-panel[_ngcontent-%COMP%] {\n  padding: 2em;\n  height: 100%;\n}\n.content-panel[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  height: auto;\n}\n.content-panel[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%] {\n  display: flex;\n}\n.content-panel[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  min-width: 20em;\n}\n.content-panel[_ngcontent-%COMP%]   .content-table[_ngcontent-%COMP%] {\n  overflow-x: scroll;\n  min-height: 22em;\n  height: auto;\n}\n.content-panel[_ngcontent-%COMP%]   .content-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:hover, .content-panel[_ngcontent-%COMP%]   .content-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:active {\n  background-color: whitesmoke;\n}\n.content-panel[_ngcontent-%COMP%]   .content-btns[_ngcontent-%COMP%] {\n  padding-bottom: 1em;\n}\n.content-panel[_ngcontent-%COMP%]   .content-btns[_ngcontent-%COMP%]   .btn-clean[_ngcontent-%COMP%] {\n  background-color: #fee350;\n  color: #048c44;\n}\n.content-panel[_ngcontent-%COMP%]   .download-content[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: fixed;\n  bottom: 3em;\n  right: 2em;\n}\n.content-panel[_ngcontent-%COMP%]   .download-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #fee350;\n}\n.content-panel[_ngcontent-%COMP%]   .download-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #048c44;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntable[_ngcontent-%COMP%]   .th-header[_ngcontent-%COMP%] {\n  display: flex;\n}\ntable[_ngcontent-%COMP%]   .th-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ntable[_ngcontent-%COMP%]   .td-content[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 2em;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: middle;\n  min-width: 10em;\n  max-width: 40em;\n}\ntable[_ngcontent-%COMP%]   .header-filter[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: -10em;\n  top: 4.9em;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: relative !important;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0 2em;\n  border: 1px solid #e0e0e0;\n}\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.rowSelect[_ngcontent-%COMP%] {\n  background-color: lightgray !important;\n}\n.negativeColorRules[_ngcontent-%COMP%] {\n  background-color: #c62828;\n}\n.ok1ColorRules[_ngcontent-%COMP%] {\n  background-color: #43a047;\n}\n.ok2ColorRules[_ngcontent-%COMP%] {\n  background-color: #fdd835;\n}\n.expirationColorRules[_ngcontent-%COMP%] {\n  background-color: #ffa000;\n}\n.filterActive[_ngcontent-%COMP%] {\n  background-color: #048c44;\n  border-radius: 50%;\n}\n  .content-panel table thead {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);\n}\n.example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n@media (max-width: 506px) {\n  .title-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .title-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    min-width: auto !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xlZ2FsaXphY2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7QUFDSjtBQUdFO0VBQ0UsYUFBQTtBQURKO0FBR0k7RUFDRSxlQUFBO0FBRE47QUFLRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSEo7QUFPSTs7RUFFRSw0QkFBQTtBQUxOO0FBU0U7RUFDRSxtQkFBQTtBQVBKO0FBU0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFQTjtBQVdFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFUSjtBQVdJO0VBQ0UseUJBQUE7QUFUTjtBQVdNO0VBQ0UsY0FBQTtBQVRSO0FBZUE7RUFDRSxXQUFBO0FBWkY7QUFjRTtFQUNFLGFBQUE7QUFaSjtBQWNJO0VBQ0UsZUFBQTtBQVpOO0FBZ0JFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWRKO0FBaUJFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFmSjtBQWtCRTtFQUNFLDZCQUFBO0FBaEJKO0FBbUJFOztFQUVFLGNBQUE7RUFDQSx5QkFBQTtBQWpCSjtBQXNCQTtFQUNFLGNBQUE7QUFuQkY7QUFzQkE7RUFDRSxzQ0FBQTtBQW5CRjtBQXVCQTtFQUNFLHlCQUFBO0FBcEJGO0FBdUJBO0VBQ0UseUJBQUE7QUFwQkY7QUF1QkE7RUFDRSx5QkFBQTtBQXBCRjtBQXVCQTtFQUNFLHlCQUFBO0FBcEJGO0FBdUJBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQXBCRjtBQXVCQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsNkNBQUE7QUFwQkY7QUE0QkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQXpCRjtBQTRCQTtFQUNFO0lBQ0Usc0JBQUE7RUF6QkY7RUEwQkU7SUFDRSwwQkFBQTtFQXhCSjtBQUNGIiwiZmlsZSI6ImxlZ2FsaXphY2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXBhbmVsIHtcbiAgcGFkZGluZzogMmVtO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbWF0LWNhcmQge1xuICAgIGhlaWdodDogYXV0bztcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAudGl0bGUtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIG1pbi13aWR0aDogMjBlbTtcbiAgICB9XG4gIH1cblxuICAuY29udGVudC10YWJsZSB7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG1pbi1oZWlnaHQ6IDIyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIC8vIG1heC1oZWlnaHQ6IDQwZW07XG4gICAgLy8gaGVpZ2h0OiA1MHZoO1xuXG4gICAgdHIubWF0LXJvdzpob3ZlcixcbiAgICB0ci5tYXQtcm93OmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50LWJ0bnMge1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG5cbiAgICAuYnRuLWNsZWFuIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWUzNTA7XG4gICAgICBjb2xvcjogIzA0OGM0NDtcbiAgICB9XG4gIH1cblxuICAuZG93bmxvYWQtY29udGVudCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDNlbTtcbiAgICByaWdodDogMmVtO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWUzNTA7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6ICMwNDhjNDQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLnRoLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIG1hdC1pY29uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAudGQtY29udGVudCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWluLXdpZHRoOiAxMGVtO1xuICAgIG1heC13aWR0aDogNDBlbTtcbiAgfVxuXG4gIC5oZWFkZXItZmlsdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTEwZW07XG4gICAgdG9wOiA0LjllbTtcbiAgfVxuXG4gIHRoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIHRoLFxuICB0ZCB7XG4gICAgcGFkZGluZzogMCAyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgfVxuXG59XG5cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ucm93U2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5ICFpbXBvcnRhbnQ7XG59XG5cblxuLm5lZ2F0aXZlQ29sb3JSdWxlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNjI4Mjg7XG59XG5cbi5vazFDb2xvclJ1bGVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzYTA0Nztcbn1cblxuLm9rMkNvbG9yUnVsZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRkODM1O1xufVxuXG4uZXhwaXJhdGlvbkNvbG9yUnVsZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhMDAwO1xufVxuXG4uZmlsdGVyQWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0OGM0NDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG46Om5nLWRlZXAgLmNvbnRlbnQtcGFuZWwgdGFibGUgdGhlYWQge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLy8gOjpuZy1kZWVwIHRhYmxlIHRib2R5IHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4vLyB9XG5cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDZweCkge1xuICAudGl0bGUtY29udGVudHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgbWluLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59Il19 */"] });


/***/ }),

/***/ "TQws":
/*!*******************************************!*\
  !*** ./src/app/services/table.service.ts ***!
  \*******************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _interfaces_app_http_response_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/app-http-response.interface */ "RySs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class TableService {
    constructor(http) {
        this.http = http;
    }
    getDataTable(obrasSelected, page, size, sortFilter, dataFilter, reportType) {
        var url = `https://macros-web.azurewebsites.net/api/legalizacion`;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        let sortFilterTemp = null;
        if (sortFilter != null && sortFilter != '' && sortFilter != 'null') {
            sortFilterTemp = sortFilter;
        }
        let dataFilterTemp = null;
        if (dataFilter != null && dataFilter != '' && dataFilter != 'null') {
            dataFilterTemp = dataFilter;
        }
        return this.http
            .post(url, { proyecto: obrasSelected, page: page, size: size, sortFilter: sortFilterTemp, dataFilter: dataFilterTemp, reportType: reportType })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            data.data = JSON.parse(data.data);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleHttpError(error)));
    }
    getHeaderOptionsTable(obrasSelected, dataGroup, dataFilter, reportType) {
        var url = `https://macros-web.azurewebsites.net/api/legalizacion/filter`;
        return this.http
            .post(url, { proyecto: obrasSelected, dataGroup: dataGroup, dataFilter: dataFilter, reportType: reportType })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleHttpError(error)));
    }
    getHeaderOptionFilterList(obrasSelected, dataGroup, dataFilter, filterLike, reportType) {
        var url = `https://macros-web.azurewebsites.net/api/legalizacion/filter/like`;
        return this.http
            .post(url, { proyecto: obrasSelected, dataGroup: dataGroup, dataFilter: dataFilter, filterLike: filterLike, reportType: reportType })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleHttpError(error)));
    }
    updateData(data, reportType, auditList) {
        var url = `https://macros-web.azurewebsites.net/api/legalizacion/save`;
        return this.http
            .post(url, { data: data, reportType: reportType, auditList: auditList })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleHttpError(error)));
    }
    multipleUpdateLegalizacion(field, newValue, obras, sortFilter, dataFilter, reportType) {
        var url = `https://macros-web.azurewebsites.net/api/legalizacion/multisave`;
        let request = {
            field: field,
            newValue: newValue,
            obras: obras,
            sortFilter: sortFilter,
            dataFilter: dataFilter,
            reportType: reportType
        };
        console.log(request);
        return this.http
            .post(url, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleHttpError(error)));
    }
    getOptionListModal(herramienta, campo) {
        var url = `https://macros-web.azurewebsites.net/api/get-option-list-modal`;
        let request = {
            herramienta: herramienta,
            campo: campo
        };
        console.log(request);
        return this.http
            .post(url, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleHttpError(error)));
    }
    getProjectSettings() {
        var url = `https://macros-web.azurewebsites.net/api/project-settings`;
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            // data.data = JSON.parse(data.data);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleHttpError(error)));
    }
    updateProject(PRY_Id, PRY_Nombre, opt) {
        let request = {
            PRY_Id: PRY_Id,
            PRY_Nombre: PRY_Nombre,
            opt: opt
        };
        console.log(request);
        var url = `https://macros-web.azurewebsites.net/api/update-project`;
        return this.http
            .post(url, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            // data.data = JSON.parse(data.data);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleHttpError(error)));
    }
    login(user, password) {
        let request = {
            user: user,
            password: password
        };
        console.log(request);
        var url = `https://macros-web.azurewebsites.net/api/login`;
        return this.http
            .post(url, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleHttpError(error)));
    }
    getUsers() {
        var url = `https://macros-web.azurewebsites.net/api/users`;
        return this.http
            .post(url, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            // data.data = JSON.parse(data.data);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleHttpError(error)));
    }
    getRoles() {
        var url = `https://macros-web.azurewebsites.net/api/roles`;
        return this.http
            .post(url, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            // data.data = JSON.parse(data.data);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleHttpError(error)));
    }
    addOrUpdateRole(userId, roleId, opt) {
        let request = {
            userId: userId,
            roleId: roleId,
            opt: opt
        };
        console.log(request);
        var url = `https://macros-web.azurewebsites.net/api/update-role`;
        return this.http
            .post(url, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            // data.data = JSON.parse(data.data);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleHttpError(error)));
    }
    loadData(data, reportType) {
        var url = `https://macros-web.azurewebsites.net/api/load-data`;
        let request = {
            reportType: reportType,
            data: data
        };
        console.log(request);
        return this.http
            .post(url, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleHttpError(error)));
    }
    getAudit(startTime, endTime) {
        var url = `https://macros-web.azurewebsites.net/api/audit`;
        return this.http
            .post(url, { startTime: startTime, endTime: endTime })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleHttpError(error)));
    }
    handleHttpError(error) {
        console.log("ERROR => ", error);
        let dataError = new _interfaces_app_http_response_interface__WEBPACK_IMPORTED_MODULE_2__["TrackHttpError"]();
        dataError.friendlyMessage = "Un error a ocurrido obteniendo los datos.";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(dataError);
    }
}
TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TableService, factory: TableService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "pGCM":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tables/legalizacion/table-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: TableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRoutingModule", function() { return TableRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.component */ "AF2D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"]
    }
];
class TableRoutingModule {
}
TableRoutingModule.ɵfac = function TableRoutingModule_Factory(t) { return new (t || TableRoutingModule)(); };
TableRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TableRoutingModule });
TableRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TableRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-tables-legalizacion-table-module-es2015.js.map