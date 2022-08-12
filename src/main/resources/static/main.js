(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/masprilla/DocumentosMiguel/Proyectos/migracion-reportstools/reportstools-frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "4GnH":
/*!**********************************************!*\
  !*** ./src/app/pipes/filter-project.pipe.ts ***!
  \**********************************************/
/*! exports provided: FilterProjectPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterProjectPipe", function() { return FilterProjectPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterProjectPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.PRY_Nombre.toLowerCase().includes(searchText);
        });
    }
}
FilterProjectPipe.ɵfac = function FilterProjectPipe_Factory(t) { return new (t || FilterProjectPipe)(); };
FilterProjectPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter_project", type: FilterProjectPipe, pure: true });


/***/ }),

/***/ "7KSe":
/*!**************************************************!*\
  !*** ./src/app/services/legalizacion.service.ts ***!
  \**************************************************/
/*! exports provided: LegalizacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalizacionService", function() { return LegalizacionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _interfaces_app_http_response_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/app-http-response.interface */ "RySs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class LegalizacionService {
    constructor(http) {
        this.http = http;
    }
    getDataTable(obrasSelected, page, size, sortFilter, dataFilter, reportType) {
        console.log('dataFilter ', dataFilter);
        if (reportType == 10) {
            if (String(dataFilter).includes('a.Proyecto')) {
                dataFilter = String(dataFilter).replace('a.Proyecto', 'Proyecto');
            }
            if (String(dataFilter).includes('a.[Proyecto]')) {
                dataFilter = String(dataFilter).replace('a.[Proyecto]', 'Proyecto');
            }
            if (String(sortFilter).includes('Proyecto')) {
                sortFilter = String(sortFilter).replace('Proyecto', 'a.[Proyecto]');
            }
            if (String(dataFilter).includes('Proyecto')) {
                dataFilter = String(dataFilter).replace('Proyecto', 'a.[Proyecto]');
            }
        }
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
        if (reportType == 10) {
            if (String(dataGroup).includes('a.Proyecto')) {
                dataGroup = String(dataGroup).replace('a.Proyecto', 'Proyecto');
            }
            if (String(dataFilter).includes('a.Proyecto')) {
                dataFilter = String(dataFilter).replace('a.Proyecto', 'Proyecto');
            }
            if (String(dataGroup).includes('a.[Proyecto]')) {
                dataGroup = String(dataGroup).replace('a.[Proyecto]', 'Proyecto');
            }
            if (String(dataFilter).includes('a.[Proyecto]')) {
                dataFilter = String(dataFilter).replace('a.[Proyecto]', 'Proyecto');
            }
            if (String(dataGroup).includes('Proyecto')) {
                dataGroup = String(dataGroup).replace('Proyecto', 'a.[Proyecto]');
            }
            if (String(dataFilter).includes('Proyecto')) {
                dataFilter = String(dataFilter).replace('Proyecto', 'a.[Proyecto]');
            }
        }
        var url = `https://macros-web.azurewebsites.net/api/legalizacion/filter`;
        return this.http
            .post(url, { proyecto: obrasSelected, dataGroup: dataGroup, dataFilter: dataFilter, reportType: reportType })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleHttpError(error)));
    }
    getHeaderOptionFilterList(obrasSelected, dataGroup, dataFilter, filterLike, reportType) {
        if (reportType == 10) {
            if (String(dataGroup).includes('a.Proyecto')) {
                dataGroup = String(dataGroup).replace('a.Proyecto', 'Proyecto');
            }
            if (String(dataFilter).includes('a.Proyecto')) {
                dataFilter = String(dataFilter).replace('a.Proyecto', 'Proyecto');
            }
            if (String(dataGroup).includes('a.[Proyecto]')) {
                dataGroup = String(dataGroup).replace('a.[Proyecto]', 'Proyecto');
            }
            if (String(dataFilter).includes('a.[Proyecto]')) {
                dataFilter = String(dataFilter).replace('a.[Proyecto]', 'Proyecto');
            }
            if (String(dataGroup).includes('Proyecto')) {
                dataGroup = String(dataGroup).replace('Proyecto', 'a.[Proyecto]');
            }
            if (String(dataFilter).includes('Proyecto')) {
                dataFilter = String(dataFilter).replace('Proyecto', 'a.[Proyecto]');
            }
            if (String(filterLike).includes('Proyecto')) {
                filterLike = String(filterLike).replace('Proyecto', 'a.[Proyecto]');
            }
        }
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
    getAudit(startTime, endTime, herramienta, usuario) {
        var url = `https://macros-web.azurewebsites.net/api/audit`;
        return this.http
            .post(url, { startTime: startTime, endTime: endTime, herramienta: herramienta, usuario: usuario })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => this.handleHttpError(error)));
    }
    handleHttpError(error) {
        console.log("ERROR => ", error);
        let dataError = new _interfaces_app_http_response_interface__WEBPACK_IMPORTED_MODULE_2__["TrackHttpError"]();
        dataError.friendlyMessage = "Un error a ocurrido obteniendo los datos.";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(dataError);
    }
}
LegalizacionService.ɵfac = function LegalizacionService_Factory(t) { return new (t || LegalizacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
LegalizacionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LegalizacionService, factory: LegalizacionService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "AdZC":
/*!*******************************************!*\
  !*** ./src/app/pipes/header-name.pipe.ts ***!
  \*******************************************/
/*! exports provided: HeaderNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNamePipe", function() { return HeaderNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderNamePipe {
    transform(searchText) {
        if (searchText.includes('.') && !searchText.includes('=')) {
            let tempv = searchText.split('.');
            tempv.length > 1 ? searchText = tempv[1] : searchText = tempv[0];
        }
        if (searchText.includes(' AS ')) {
            let searchTextArr = searchText.split('AS');
            if (searchTextArr.length > 1) {
                return searchTextArr[1];
            }
            return searchText;
        }
        else if (searchText.includes(' As ')) {
            let searchTextArr = searchText.split('As');
            if (searchTextArr.length > 1) {
                return searchTextArr[1];
            }
            return searchText;
        }
        else if (searchText.includes(' aS ')) {
            let searchTextArr = searchText.split('aS');
            if (searchTextArr.length > 1) {
                return searchTextArr[1];
            }
            return searchText;
        }
        else if (searchText.includes(' as ')) {
            let searchTextArr = searchText.split('as');
            if (searchTextArr.length > 1) {
                return searchTextArr[1];
            }
            return searchText;
        }
        else if (searchText.includes('=')) {
            let searchTextArr = searchText.split('=');
            if (searchTextArr.length > 1) {
                return searchTextArr[0];
            }
            return searchText;
        }
        return searchText;
    }
}
HeaderNamePipe.ɵfac = function HeaderNamePipe_Factory(t) { return new (t || HeaderNamePipe)(); };
HeaderNamePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "header", type: HeaderNamePipe, pure: true });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BhhM":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.toLowerCase().includes(searchText);
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });


/***/ }),

/***/ "GYa1":
/*!*************************************************************!*\
  !*** ./src/app/shared/filter-date/filter-date.component.ts ***!
  \*************************************************************/
/*! exports provided: FilterDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDateComponent", function() { return FilterDateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_utils_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.services */ "HZWf");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
















const _c0 = ["matSelect"];
function FilterDateComponent_mat_form_field_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Escoje una fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-datepicker-toggle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-datepicker", null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);
} }
function FilterDateComponent_mat_form_field_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hasta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-datepicker-toggle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-datepicker", null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r4);
} }
class FilterDateComponent {
    constructor(formBuilder, _utilsService) {
        this.formBuilder = formBuilder;
        this._utilsService = _utilsService;
        this.filtersOptions = [];
        this.searchCondition = {};
        this.camposFecha = [];
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchText = "";
        this.checkedAll = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.isShowSelect = false;
        this.searchType = 1;
        this.customHeaders = '';
        this.form = this.formBuilder.group({
            dateSearchField: [],
            dateSearchField2: [],
        });
    }
    ngOnInit() {
        this.customHeaders = this._utilsService.getAliasFromColumnCalculate(this.headers);
        this.eventsSubscription = this.eventsClear.subscribe(() => this.remoteClearFilter(this.headers));
    }
    applyFilter(id) {
        let idTemp = this.removeWhiteSpaces(id);
        idTemp = this._utilsService.getAliasFromColumnCalculate(idTemp);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#' + idTemp + '-date').hide();
        // if (/\s/g.test(id)) {
        //   console.log('titulo con espacio');
        //   id = `[${id}]`;
        // }
        console.log(this.form.controls['dateSearchField'].value);
        console.log(this.searchType);
        let fechaFormat = new Date(this.form.controls['dateSearchField'].value);
        let fechaFormatStr = fechaFormat.getFullYear() + '-' + ((fechaFormat.getMonth() + 1) < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
        let fechaFormatStr2 = null;
        if (this.searchType == 5) {
            let fechaFormat2 = new Date(this.form.controls['dateSearchField2'].value);
            fechaFormatStr2 = fechaFormat2.getFullYear() + '-' + ((fechaFormat2.getMonth() + 1) < 10 ? '0' + (fechaFormat2.getMonth() + 1) : (fechaFormat2.getMonth() + 1)) + '-' + (fechaFormat2.getDate() < 10 ? '0' + fechaFormat2.getDate() : fechaFormat2.getDate());
        }
        console.log('#####id', id);
        let columnCalculate = this._utilsService.getOriginalNameFromColumnCalculate(id);
        console.log('#####columnCalculate', columnCalculate);
        console.log('### revisar espacios');
        if (/\s/g.test(columnCalculate)) {
            console.log('titulo con espacio');
            columnCalculate = `[${columnCalculate}]`;
        }
        console.log('searchCondition', this.searchCondition);
        if (this.searchType == 1) {
            console.log(` AND CAST(${columnCalculate} AS DATE) = CAST(''${fechaFormatStr}'' AS DATE) `);
            this.newItemEvent.emit({ field: id, query: ` AND CAST(${columnCalculate} AS DATE) = CAST(''${fechaFormatStr}'' AS DATE) ` });
        }
        else if (this.searchType == 2) {
            console.log(` AND CAST(${columnCalculate} AS DATE) <> CAST(''${fechaFormatStr}'' AS DATE) `);
            this.newItemEvent.emit({ field: id, query: ` AND CAST(${columnCalculate} AS DATE) <> CAST(''${fechaFormatStr}'' AS DATE) ` });
        }
        else if (this.searchType == 3) {
            console.log(` AND CAST(${columnCalculate} AS DATE) <= CAST(''${fechaFormatStr}'' AS DATE) `);
            this.newItemEvent.emit({ field: id, query: ` AND CAST(${columnCalculate} AS DATE) <= CAST(''${fechaFormatStr}'' AS DATE) ` });
        }
        else if (this.searchType == 4) {
            console.log(` AND CAST(${columnCalculate} AS DATE) >= CAST(''${fechaFormatStr}'' AS DATE) `);
            this.newItemEvent.emit({ field: id, query: ` AND CAST(${columnCalculate} AS DATE) >= CAST(''${fechaFormatStr}'' AS DATE) ` });
        }
        else if (this.searchType == 5 && fechaFormatStr2 != null) {
            console.log(` AND  (CAST(${columnCalculate} AS DATE) BETWEEN CAST(''${fechaFormatStr}'' AS DATE) AND CAST(''${fechaFormatStr2}'' AS DATE)) `);
            this.newItemEvent.emit({ field: id, query: ` AND  (CAST(${columnCalculate} AS DATE) BETWEEN CAST(''${fechaFormatStr}'' AS DATE) AND CAST(''${fechaFormatStr2}'' AS DATE)) ` });
        }
        else if (this.searchType == 6) {
            console.log(` AND ${columnCalculate} IS NULL `);
            this.newItemEvent.emit({ field: id, query: ` AND (${columnCalculate} IS NULL OR ${columnCalculate} = '''') ` });
        }
        else if (this.searchType == 7) {
            console.log(` AND ${columnCalculate} IS NOT NULL `);
            this.newItemEvent.emit({ field: id, query: ` AND ${columnCalculate} IS NOT NULL ` });
        }
        else {
            this.newItemEvent.emit();
        }
        // this.newItemEvent.emit(this.searchCondition);
    }
    clearFilter(id) {
        let idTemp = this.removeWhiteSpaces(id);
        idTemp = this._utilsService.getAliasFromColumnCalculate(idTemp);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#' + idTemp + '-date').hide();
        this.form.controls['dateSearchField'].setValue(null);
        this.form.controls['dateSearchField2'].setValue(null);
        this.removeItemEvent.emit(id);
    }
    remoteClearFilter(id) {
        id = this._utilsService.getAliasFromColumnCalculate(id);
        id = this.removeWhiteSpaces(id);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#' + id + '-date').hide();
        this.form.controls['dateSearchField'].setValue(null);
        this.form.controls['dateSearchField2'].setValue(null);
    }
    clear() {
        this.searchText = "";
    }
    close(id) {
        id = this._utilsService.getAliasFromColumnCalculate(id);
        id = this.removeWhiteSpaces(id);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#' + id + '-date').hide();
    }
    ngOnDestroy() {
        this.eventsSubscription.unsubscribe();
    }
    removeWhiteSpaces(txt) {
        return txt.replace(/ /g, '');
    }
}
FilterDateComponent.ɵfac = function FilterDateComponent_Factory(t) { return new (t || FilterDateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_utils_services__WEBPACK_IMPORTED_MODULE_3__["UtilsService"])); };
FilterDateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterDateComponent, selectors: [["app-filter-date"]], viewQuery: function FilterDateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matSelect = _t.first);
    } }, inputs: { headers: "headers", filtersOptions: "filtersOptions", searchCondition: "searchCondition", camposFecha: "camposFecha", eventsClear: "eventsClear" }, outputs: { newItemEvent: "newItemEvent", removeItemEvent: "removeItemEvent" }, decls: 38, vars: 10, consts: [[1, "date-panel-filter", 3, "id"], [1, "panel-close-modal", 3, "click"], ["mat-menu-item", "", "mat-filter-item", "", 1, "menu-title", 3, "disableRipple"], ["mat-menu-item", "", "mat-filter-item", "", 3, "formGroup", "disableRipple", "ngSubmit"], ["placeholder", "Conditions", 3, "panelClass", "value", "valueChange"], ["matSelect", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["appearance", "fill", 4, "ngIf"], ["mat-menu-item", "", "mat-filter-item", "", 3, "disableRipple"], ["type", "button", "mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["appearance", "fill"], ["matInput", "", "formControlName", "dateSearchField", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "dateSearchField2", 3, "matDatepicker"], ["picker2", ""]], template: function FilterDateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterDateComponent_Template_div_click_1_listener() { return ctx.close(ctx.headers); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FilterDateComponent_Template_form_ngSubmit_6_listener() { return ctx.applyFilter(ctx.headers); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FilterDateComponent_Template_mat_select_valueChange_8_listener($event) { return ctx.searchType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "No es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Es Antes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Es Despues");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Entre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Es Vacio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "No Es Vacio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FilterDateComponent_mat_form_field_31_Template, 7, 2, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, FilterDateComponent_mat_form_field_32_Template, 7, 2, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterDateComponent_Template_button_click_34_listener() { return ctx.clearFilter(ctx.headers); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Limpiar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterDateComponent_Template_button_click_36_listener() { return ctx.applyFilter(ctx.headers); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Aplicar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.headers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableRipple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.customHeaders, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form)("disableRipple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelClass", "mat-elevation-z10")("value", ctx.searchType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchType != 6 && ctx.searchType != 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchType == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableRipple", true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"]], styles: [".date-panel-filter[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 4px -1px #0003, 0 4px 5px 0 #00000024, 0 1px 10px 0 #0000001f;\n  width: 20em;\n}\n.date-panel-filter[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.date-panel-filter[_ngcontent-%COMP%]   .panel-close-modal[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpbHRlci1kYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0VBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7QUFDSjtBQUVFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FBQUoiLCJmaWxlIjoiZmlsdGVyLWRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZS1wYW5lbC1maWx0ZXIge1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCAjMDAwMywgMCA0cHggNXB4IDAgIzAwMDAwMDI0LCAwIDFweCAxMHB4IDAgIzAwMDAwMDFmO1xuICB3aWR0aDogMjBlbTtcblxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucGFuZWwtY2xvc2UtbW9kYWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "HZWf":
/*!********************************************!*\
  !*** ./src/app/services/utils.services.ts ***!
  \********************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var src_assets_json_campos_moneda_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/json/campos_moneda.json */ "oji5");
var src_assets_json_campos_moneda_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/json/campos_moneda.json */ "oji5", 1);
/* harmony import */ var src_assets_json_campos_fechas_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/json/campos_fechas.json */ "x4GW");
var src_assets_json_campos_fechas_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/json/campos_fechas.json */ "x4GW", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class UtilsService {
    constructor() {
        this.GENERAL = 1;
        this.MONEDA = 2;
        this.FECHA = 3;
        this.PORCENTAJE = 4;
        this.camposFecha = [];
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
        this.campoMoneda = [];
        this.campoPorcentaje = ['Cumplimiento_Meta', 'prob_desist'];
        this.campoMoneda = src_assets_json_campos_moneda_json__WEBPACK_IMPORTED_MODULE_0___namespace;
        this.campoMoneda = this.campoMoneda.default;
        console.log('this.campoMoneda', this.campoMoneda);
        this.camposFecha = src_assets_json_campos_fechas_json__WEBPACK_IMPORTED_MODULE_1___namespace;
        this.camposFecha = this.camposFecha.default;
    }
    getAliasFromColumnCalculate(txt) {
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
    getOriginalNameFromColumnCalculate(txt) {
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
                    }
                    else {
                        tempText = tempText + String(splitTemp[index]).trim() + ' = ';
                    }
                }
                txt = tempText;
            }
        }
        console.log('txt', txt);
        return txt;
    }
    processComputedColumn(txt) {
        if (/ /g.test(txt)) {
            if (String(txt).includes('=')) {
                if (String(txt).includes('when') || String(txt).includes('WHEN') || String(txt).includes('When')) {
                    txt = txt.replaceAll("'", "''");
                    txt = `(${txt})`;
                }
                else {
                    txt = `(${txt})`;
                }
            }
            else {
                txt = `[${txt}]`;
            }
        }
        txt = txt.replaceAll(';', ',');
        console.log('processComputedColumn ', txt);
        return txt;
    }
    getHeaderType(header) {
        header = this.getAliasFromColumnCalculate(header);
        if (this.campoMoneda.includes(header)) {
            return this.MONEDA;
        }
        if (this.camposFecha.includes(header)) {
            // console.log('header ',header);
            return this.FECHA;
        }
        if (this.campoPorcentaje.includes(header)) {
            // console.log('header ',header);
            return this.PORCENTAJE;
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
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(); };
UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UtilsService, factory: UtilsService.ɵfac });


/***/ }),

/***/ "KRBT":
/*!*************************************************!*\
  !*** ./src/app/services/interceptor.service.ts ***!
  \*************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
class TokenInterceptor {
    constructor() {
    }
    intercept(request, next) {
        let token = localStorage.getItem('token');
        console.log('####token', token);
        if (token != null && token != '' && token != undefined) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${token}`
                }
            });
        }
        return next.handle(request);
    }
}


/***/ }),

/***/ "MKys":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/layout/layout.component */ "rqBn");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spinner/spinner.component */ "f3yp");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filter/filter.component */ "pTvf");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./filter-date/filter-date.component */ "GYa1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var _filter_currency_filter_currency_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./filter-currency/filter-currency.component */ "uAhc");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var _services_utils_services__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/utils.services */ "HZWf");
/* harmony import */ var ng_material_multilevel_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-material-multilevel-menu */ "CsTR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ "fXoL");


























class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MAT_DATE_FORMATS"], useValue: {
                parse: {
                    dateInput: 'DD-MM-YYYY',
                },
                display: {
                    dateInput: 'DD-MM-YYYY',
                    monthYearLabel: 'MMM YYYY',
                    dateA11yLabel: 'LL',
                    monthYearA11yLabel: 'MMMM YYYY',
                },
            }
        },
        _services_utils_services__WEBPACK_IMPORTED_MODULE_23__["UtilsService"],
        ng_material_multilevel_menu__WEBPACK_IMPORTED_MODULE_24__["MultilevelMenuService"]
    ], imports: [[
            _angular_material_list__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipeModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
            _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_20__["MatMomentDateModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["DialogModule"],
            ng_material_multilevel_menu__WEBPACK_IMPORTED_MODULE_24__["NgMaterialMultilevelMenuModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__["SpinnerComponent"],
        _filter_filter_component__WEBPACK_IMPORTED_MODULE_12__["FilterComponent"],
        _filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_17__["FilterDateComponent"],
        _filter_currency_filter_currency_component__WEBPACK_IMPORTED_MODULE_21__["FilterCurrencyComponent"]], imports: [_angular_material_list__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipeModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_20__["MatMomentDateModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["DialogModule"],
        ng_material_multilevel_menu__WEBPACK_IMPORTED_MODULE_24__["NgMaterialMultilevelMenuModule"]], exports: [_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__["SpinnerComponent"],
        _filter_filter_component__WEBPACK_IMPORTED_MODULE_12__["FilterComponent"],
        _filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_17__["FilterDateComponent"],
        _filter_currency_filter_currency_component__WEBPACK_IMPORTED_MODULE_21__["FilterCurrencyComponent"]] }); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "RySs":
/*!***********************************************************!*\
  !*** ./src/app/interfaces/app-http-response.interface.ts ***!
  \***********************************************************/
/*! exports provided: TrackHttpError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackHttpError", function() { return TrackHttpError; });
class TrackHttpError {
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/spinner/spinner.component */ "f3yp");




const _c0 = function () { return { width: "50vw" }; };
const _c1 = function () { return { "960px": "75vw", "640px": "100vw" }; };
class AppComponent {
    constructor() {
        this.title = 'MacrosWeb';
        this.AppComponent = AppComponent;
        AppComponent.displayLoading = false;
    }
    ;
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 10, consts: [["id", "spinner-panel", 3, "visible", "closeIcon", "showHeader", "dismissableMask", "modal", "breakpoints", "visibleChange"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function AppComponent_Template_p_dialog_visibleChange_1_listener($event) { return ctx.AppComponent.displayLoading = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.AppComponent.displayLoading)("closeIcon", false)("showHeader", false)("dismissableMask", false)("modal", true)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], primeng_dialog__WEBPACK_IMPORTED_MODULE_2__["Dialog"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "YYwF":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _modals_modals_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/modals.module */ "k5DH");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/interceptor.service */ "KRBT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _modals_modals_module__WEBPACK_IMPORTED_MODULE_4__["ModalsModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _modals_modals_module__WEBPACK_IMPORTED_MODULE_4__["ModalsModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"]] }); })();


/***/ }),

/***/ "f3yp":
/*!*****************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function SpinnerComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
} }
class SpinnerComponent {
    constructor() {
        this.message = 'Cargando datos';
    }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { message: "message" }, decls: 16, vars: 1, consts: [[1, "spinner-wrapper"], [1, "container"], [1, "row"], [1, "col-12"], ["id", "loader"], [1, "dot"], [1, "loading"], ["class", "spinner-message", 4, "ngIf"], [1, "spinner-message"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SpinnerComponent_p_15_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && ctx.message !== "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["#loader[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n\n#loader[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 87.5px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]::before {\n  border-radius: 100%;\n  content: \"\";\n  height: 87.5px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: scale(0);\n  width: 87.5px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1) {\n  transform: rotate(45deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1)::before {\n  animation: 0.8s linear 0.1s normal none infinite running load;\n  background: #55A630 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2) {\n  transform: rotate(90deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2)::before {\n  animation: 0.8s linear 0.2s normal none infinite running load;\n  background: #80B918 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3) {\n  transform: rotate(135deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3)::before {\n  animation: 0.8s linear 0.3s normal none infinite running load;\n  background: #AACC00 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4) {\n  transform: rotate(180deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4)::before {\n  animation: 0.8s linear 0.4s normal none infinite running load;\n  background: #BFD200 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5) {\n  transform: rotate(225deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5)::before {\n  animation: 0.8s linear 0.5s normal none infinite running load;\n  background: #D4D700 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6) {\n  transform: rotate(270deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6)::before {\n  animation: 0.8s linear 0.6s normal none infinite running load;\n  background: #DDDF00 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7) {\n  transform: rotate(315deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7)::before {\n  animation: 0.8s linear 0.7s normal none infinite running load;\n  background: #EEEF20 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8) {\n  transform: rotate(360deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8)::before {\n  animation: 0.8s linear 0.8s normal none infinite running load;\n  background: #FFFF3F none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  bottom: -40px;\n  height: 20px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  width: 180px;\n}\n\n@keyframes load {\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n\n@keyframes load {\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n\n.spinner-message[_ngcontent-%COMP%] {\n  padding-top: 120px;\n  text-align: center;\n  color: black;\n}\n\n.spinner-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 998;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVFO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUk7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDTjs7QUFFSTtFQUNFLHdCQUFBO0FBQ047O0FBRU07RUFDRSw2REFBQTtFQUNBLDBDQUFBO0FBQ1I7O0FBRUk7RUFDRSx3QkFBQTtBQUNOOztBQUVNO0VBQ0UsNkRBQUE7RUFDQSwwQ0FBQTtBQUNSOztBQUVJO0VBQ0UseUJBQUE7QUFDTjs7QUFFTTtFQUNFLDZEQUFBO0VBQ0EsMENBQUE7QUFDUjs7QUFFSTtFQUNFLHlCQUFBO0FBQ047O0FBRU07RUFDRSw2REFBQTtFQUNBLDBDQUFBO0FBQ1I7O0FBRUk7RUFDRSx5QkFBQTtBQUNOOztBQUVNO0VBQ0UsNkRBQUE7RUFDQSwwQ0FBQTtBQUNSOztBQUVJO0VBQ0UseUJBQUE7QUFDTjs7QUFFTTtFQUNFLDZEQUFBO0VBQ0EsMENBQUE7QUFDUjs7QUFFSTtFQUNFLHlCQUFBO0FBQ047O0FBRU07RUFDRSw2REFBQTtFQUNBLDBDQUFBO0FBQ1I7O0FBRUk7RUFDRSx5QkFBQTtBQUNOOztBQUVNO0VBQ0UsNkRBQUE7RUFDQSwwQ0FBQTtBQUNSOztBQUVFO0VBQ0UsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0FBREYiLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2FkZXIge1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTc1cHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTc1cHg7XG59XG5cbiNsb2FkZXIge1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTc1cHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTc1cHg7XG59XG5cbiAgI2xvYWRlciAuZG90IHtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDg3LjVweDtcbiAgfVxuXG4gICAgI2xvYWRlciAuZG90OjpiZWZvcmUge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBoZWlnaHQ6IDg3LjVweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICB3aWR0aDogODcuNXB4O1xuICAgIH1cblxuICAgICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMSkge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cblxuICAgICAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bisxKTo6YmVmb3JlIHtcbiAgICAgICAgYW5pbWF0aW9uOiAwLjhzIGxpbmVhciAwLjFzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgbG9hZDtcbiAgICAgICAgYmFja2dyb3VuZDogIzU1QTYzMCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgICAgfVxuXG4gICAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bisyKSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgfVxuXG4gICAgICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzIpOjpiZWZvcmUge1xuICAgICAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuMnMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjODBCOTE4IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgICB9XG5cbiAgICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzMpIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgfVxuXG4gICAgICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzMpOjpiZWZvcmUge1xuICAgICAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuM3Mgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQUFDQzAwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgICB9XG5cbiAgICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzQpIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzQpOjpiZWZvcmUge1xuICAgICAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNHMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQkZEMjAwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgICB9XG5cbiAgICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzUpIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgfVxuXG4gICAgICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzUpOjpiZWZvcmUge1xuICAgICAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNXMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRDRENzAwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgICB9XG5cbiAgICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzYpIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgfVxuXG4gICAgICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzYpOjpiZWZvcmUge1xuICAgICAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNnMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRERERjAwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgICB9XG5cbiAgICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzcpIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XG4gICAgfVxuXG4gICAgICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzcpOjpiZWZvcmUge1xuICAgICAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuN3Mgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRUVFRjIwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgICB9XG5cbiAgICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzgpIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuXG4gICAgICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzgpOjpiZWZvcmUge1xuICAgICAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuOHMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRjNGIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgICB9XG5cbiAgI2xvYWRlciAubG9hZGluZyB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJvdHRvbTogLTQwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxuXG5Aa2V5ZnJhbWVzIGxvYWQge1xuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBsb2FkIHtcbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbi5zcGlubmVyLW1lc3NhZ2Uge1xuICBwYWRkaW5nLXRvcDogMTIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc3Bpbm5lci13cmFwcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHotaW5kZXg6IDk5ODtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _filter_project_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-project.pipe */ "4GnH");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.pipe */ "BhhM");
/* harmony import */ var _header_name_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-name.pipe */ "AdZC");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safe.pipe */ "YYwF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class PipeModule {
}
PipeModule.ɵfac = function PipeModule_Factory(t) { return new (t || PipeModule)(); };
PipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PipeModule });
PipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PipeModule, { declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"],
        _header_name_pipe__WEBPACK_IMPORTED_MODULE_2__["HeaderNamePipe"],
        _safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"],
        _filter_project_pipe__WEBPACK_IMPORTED_MODULE_0__["FilterProjectPipe"]], exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"],
        _header_name_pipe__WEBPACK_IMPORTED_MODULE_2__["HeaderNamePipe"],
        _safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"],
        _filter_project_pipe__WEBPACK_IMPORTED_MODULE_0__["FilterProjectPipe"]] }); })();


/***/ }),

/***/ "k5DH":
/*!*****************************************!*\
  !*** ./src/app/modals/modals.module.ts ***!
  \*****************************************/
/*! exports provided: ModalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsModule", function() { return ModalsModule; });
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _modify_datatable_modify_datatable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modify-datatable/modify-datatable.component */ "lyp0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _services_legalizacion_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/legalizacion.service */ "7KSe");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../services/interceptor.service */ "KRBT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ "fXoL");




























class ModalsModule {
}
ModalsModule.ɵfac = function ModalsModule_Factory(t) { return new (t || ModalsModule)(); };
ModalsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: ModalsModule });
ModalsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ providers: [
        _services_legalizacion_service__WEBPACK_IMPORTED_MODULE_14__["LegalizacionService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_17__["ConfirmationService"],
        {
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MAT_DATE_FORMATS"], useValue: {
                display: {
                    dateInput: 'DD-MM-YYYY',
                    monthYearLabel: 'MMM YYYY',
                    dateA11yLabel: 'LL',
                    monthYearA11yLabel: 'MMMM YYYY',
                },
            }
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_26__["TokenInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_16__["ConfirmDialogModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
            _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_19__["MatMomentDateModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_20__["DialogModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_23__["PipeModule"],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_24__["CalendarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](ModalsModule, { declarations: [_modify_datatable_modify_datatable_component__WEBPACK_IMPORTED_MODULE_10__["ModifyDatatableComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_16__["ConfirmDialogModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_19__["MatMomentDateModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_20__["DialogModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_23__["PipeModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_24__["CalendarModule"]], exports: [_modify_datatable_modify_datatable_component__WEBPACK_IMPORTED_MODULE_10__["ModifyDatatableComponent"]] }); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthService {
    constructor() { }
    isAuthenticated() {
        let token = localStorage.getItem('token');
        if (token != null && token != undefined && token != 'undefined') {
            var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token);
            console.log(decoded.role);
            localStorage.setItem('role', decoded.role);
            return true;
        }
        return false;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ "lyp0":
/*!***********************************************************************!*\
  !*** ./src/app/modals/modify-datatable/modify-datatable.component.ts ***!
  \***********************************************************************/
/*! exports provided: ModifyDatatableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyDatatableComponent", function() { return ModifyDatatableComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_legalizacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/legalizacion.service */ "7KSe");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/spinner/spinner.component */ "f3yp");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../pipes/filter.pipe */ "BhhM");





















function ModifyDatatableComponent_div_6_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_6_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r57.confirm("FechadeEntrega", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "FechadeEntrega (dd-mm-yyyy)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-datepicker-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-datepicker", null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ModifyDatatableComponent_div_6_div_8_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.disableValidation.FechadeEntrega);
} }
function ModifyDatatableComponent_div_7_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r61, " ");
} }
function ModifyDatatableComponent_div_7_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_7_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r62.confirm("HoradeEntrega"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
const _c0 = function () { return { standalone: true }; };
function ModifyDatatableComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "HoradeEntrega");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_7_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r64.searchTextHoradeEntrega = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_7_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r66.clear("HoradeEntrega"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_7_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_7_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.searchTextHoradeEntrega)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r1.horaEntregaList, ctx_r1.searchTextHoradeEntrega));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.disableValidation.HoradeEntrega);
} }
function ModifyDatatableComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Disponibilidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModifyDatatableComponent_div_9_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r69, " ");
} }
function ModifyDatatableComponent_div_9_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_9_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r70.confirm("Frpl"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Frpl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_9_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r72.searchTextFrp = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_9_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r73); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r74.clear("Frpl"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_9_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_9_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.searchTextFrp)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r3.frplList, ctx_r3.searchTextFrp));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.disableValidation.Frpl);
} }
function ModifyDatatableComponent_div_10_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r77, " ");
} }
function ModifyDatatableComponent_div_10_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_10_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r78.confirm("QuienFirmaEsfp"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "QuienFirmaEsfp");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_10_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r80.searchTextQuienFirmaEsfp = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_10_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r81); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r82.clear("QuienFirmaEsfp"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_10_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_10_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r4.searchTextQuienFirmaEsfp)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r4.quienFirmaEsfpList, ctx_r4.searchTextQuienFirmaEsfp));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.disableValidation.QuienFirmaEsfp);
} }
function ModifyDatatableComponent_div_11_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r85, " ");
} }
function ModifyDatatableComponent_div_11_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_11_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r86.confirm("EstadoEsfpFrpl"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "EstadoEsfpFrpl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_11_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r88.searchTextEstadoEsfpFrpl = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_11_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r89); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r90.clear("EstadoEsfpFrpl"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_11_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_11_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r5.searchTextEstadoEsfpFrpl)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r5.estadoEsfpFrplList, ctx_r5.searchTextEstadoEsfpFrpl));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.disableValidation.EstadoEsfpFrpl);
} }
function ModifyDatatableComponent_div_12_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r93, " ");
} }
function ModifyDatatableComponent_div_12_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_12_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r94.confirm("EstadoCoordinador"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "EstadoCoordinador");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_12_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r96.searchTextEstadoCoordinador = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_12_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r97); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r98.clear("EstadoCoordinador"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_12_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_12_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r6.searchTextEstadoCoordinador)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r6.estadoCoordinadorList, ctx_r6.searchTextEstadoCoordinador));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.disableValidation.EstadoCoordinador);
} }
function ModifyDatatableComponent_div_13_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_13_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r101.confirm("ObservacionCoordinador"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "ObservacionCoordinador");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ModifyDatatableComponent_div_13_div_8_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", (_r99.value == null ? null : _r99.value.length) || 0, "/8000");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r7.disableValidation.ObservacionCoordinador);
} }
function ModifyDatatableComponent_div_14_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r105, " ");
} }
function ModifyDatatableComponent_div_14_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_14_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r107); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r106.confirm("CampanasEspeciales"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "CampanasEspeciales");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_14_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r108.searchTextCampanasEspeciales = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_14_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r109); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r110.clear("CampanasEspeciales"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_14_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_14_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r8.searchTextCampanasEspeciales)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r8.campanasEspecialesList, ctx_r8.searchTextCampanasEspeciales));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r8.disableValidation.CampanasEspeciales);
} }
function ModifyDatatableComponent_div_15_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r113, " ");
} }
function ModifyDatatableComponent_div_15_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_15_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r115); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r114.confirm("CausalRenovacion"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "CausalRenovacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_15_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r116.searchTextCausalRenovacion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_15_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r117); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r118.clear("CausalRenovacion"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_15_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_15_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r9.searchTextCausalRenovacion)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r9.causalRenovacionList, ctx_r9.searchTextCausalRenovacion));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r9.disableValidation.CausalRenovacion);
} }
function ModifyDatatableComponent_div_16_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_16_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r121); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r120.confirm("Comentarios"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Comentarios");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_16_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r10.disableValidation.Comentarios);
} }
function ModifyDatatableComponent_div_17_mat_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "EstadoAnalista");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModifyDatatableComponent_div_17_mat_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "EstadoAuxiliar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModifyDatatableComponent_div_17_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r126 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r126, " ");
} }
function ModifyDatatableComponent_div_17_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_17_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r128); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r127.confirm("EstadoAnalista"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ModifyDatatableComponent_div_17_mat_label_2_Template, 2, 0, "mat-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ModifyDatatableComponent_div_17_mat_label_3_Template, 2, 0, "mat-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_17_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r130); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r129.searchTextEstadoAnalista = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_17_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r130); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r131.clear("EstadoAnalista"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_17_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_17_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.ORDENES != ctx_r11.reportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.ORDENES == ctx_r11.reportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r11.searchTextEstadoAnalista)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 6, ctx_r11.estadoAnalistaList, ctx_r11.searchTextEstadoAnalista));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r11.disableValidation.EstadoAnalista);
} }
function ModifyDatatableComponent_div_18_mat_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "ObservacionAnalista");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModifyDatatableComponent_div_18_mat_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "ObservacionAuxiliar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModifyDatatableComponent_div_18_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_18_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r137); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r136.confirm("ObservacionAnalista"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ModifyDatatableComponent_div_18_mat_label_2_Template, 2, 0, "mat-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ModifyDatatableComponent_div_18_mat_label_3_Template, 2, 0, "mat-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ModifyDatatableComponent_div_18_div_8_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.ORDENES != ctx_r12.reportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.ORDENES == ctx_r12.reportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", (_r134.value == null ? null : _r134.value.length) || 0, "/8000");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r12.disableValidation.ObservacionAnalista);
} }
function ModifyDatatableComponent_div_19_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r140 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r140, " ");
} }
function ModifyDatatableComponent_div_19_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_19_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r142); const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r141.confirm("AsignacionAnalista"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "AsignacionAnalista");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_19_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r144); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r143.searchTextAsignacionAnalista = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_19_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r144); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r145.clear("AsignacionAnalista"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_19_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_19_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r13.searchTextAsignacionAnalista)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r13.asignacionAnalistaList, ctx_r13.searchTextAsignacionAnalista));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r13.disableValidation.AsignacionAnalista);
} }
function ModifyDatatableComponent_div_20_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_20_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r148); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r147.confirm("AnalistaVarado"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "AnalistaVarado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_20_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r14.disableValidation.AnalistaVarado);
} }
function ModifyDatatableComponent_div_21_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_21_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r152); const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r151.confirm("FechaSeguimientoCoordinador", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "FechaSeguimientoCoordinador (dd-mm-yyyy)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-datepicker-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-datepicker", null, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ModifyDatatableComponent_div_21_div_8_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r149);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r149);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r15.disableValidation.FechaSeguimientoCoordinador);
} }
function ModifyDatatableComponent_div_22_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_22_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r156); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r155.confirm("FechaSeguimientoAnalista", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "FechaSeguimientoAnalista (dd-mm-yyyy)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-datepicker-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-datepicker", null, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ModifyDatatableComponent_div_22_div_8_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r16.disableValidation.FechaSeguimientoAnalista);
} }
function ModifyDatatableComponent_div_23_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_23_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r160); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r159.confirm("FechaAsignacionVarado", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "FechaAsignacionVarado (dd-mm-yyyy)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-datepicker-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-datepicker", null, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ModifyDatatableComponent_div_23_div_8_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r17.disableValidation.FechaAsignacionVarado);
} }
function ModifyDatatableComponent_div_24_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_24_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r164); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r163.confirm("FechaDesvarado", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "FechaDesvarado (dd-mm-yyyy)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-datepicker-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-datepicker", null, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ModifyDatatableComponent_div_24_div_8_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r161);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r161);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r18.disableValidation.FechaDesvarado);
} }
function ModifyDatatableComponent_div_25_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r167 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r167);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r167, " ");
} }
function ModifyDatatableComponent_div_25_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_25_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r169); const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r168.confirm("EstadoPoderAnalista"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "EstadoPoderAnalista");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_25_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r171); const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r170.searchTextEstadoPoderAnalista = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_25_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r171); const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r172.clear("EstadoPoderAnalista"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_25_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_25_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r19.searchTextEstadoPoderAnalista)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r19.estadoPoderAnalistaList, ctx_r19.searchTextEstadoPoderAnalista));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r19.disableValidation.EstadoPoderAnalista);
} }
function ModifyDatatableComponent_div_26_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r175 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r175);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r175, " ");
} }
function ModifyDatatableComponent_div_26_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_26_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r177); const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r176.confirm("Asignacion"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Asignacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_26_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r179); const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r178.searchTextAsignacion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_26_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r179); const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r180.clear("Asignacion"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_26_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_26_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r20.searchTextAsignacion)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r20.asignacionList, ctx_r20.searchTextAsignacion));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r20.disableValidation.Asignacion);
} }
function ModifyDatatableComponent_div_27_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r183 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r183);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r183, " ");
} }
function ModifyDatatableComponent_div_27_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_27_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r185); const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r184.confirm("Broker"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Broker");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_27_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r187); const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r186.searchTextBroker = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_27_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r187); const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r188.clear("Broker"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_27_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_27_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r21.searchTextBroker)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r21.brokerList, ctx_r21.searchTextBroker));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r21.disableValidation.Broker);
} }
function ModifyDatatableComponent_div_28_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_28_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r192); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r191.confirm("FechaAsignacion", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "FechaAsignacion (dd-mm-yyyy)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-datepicker-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-datepicker", null, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ModifyDatatableComponent_div_28_div_8_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r22.disableValidation.FechaAsignacion);
} }
function ModifyDatatableComponent_div_29_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_29_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r195); const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r194.confirm("Arquitecta"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Arquitecta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_29_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r23.disableValidation.Arquitecta);
} }
function ModifyDatatableComponent_div_30_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r198 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r198);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r198, " ");
} }
function ModifyDatatableComponent_div_30_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_30_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r200); const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r199.confirm("CreacionCaso"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r202 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "CreacionCaso");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_30_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r202); const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r201.searchTextcreacionCaso = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_30_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r202); const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r203.clear("CreacionCaso"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_30_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_30_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r24.searchTextcreacionCaso)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r24.creacionCasoList, ctx_r24.searchTextcreacionCaso));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r24.disableValidation.CreacionCaso);
} }
function ModifyDatatableComponent_div_31_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_31_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r206); const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r205.confirm("Apoderado"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Apoderado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_31_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r25.disableValidation.Apoderado);
} }
function ModifyDatatableComponent_div_32_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_32_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r210); const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r209.confirm("FechaAcuerdoProximoPago", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "FechaAcuerdoProximoPago (dd-mm-yyyy)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-datepicker-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-datepicker", null, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ModifyDatatableComponent_div_32_div_8_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r207);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r207);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r26.disableValidation.FechaAcuerdoProximoPago);
} }
function ModifyDatatableComponent_div_33_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_33_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r213); const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r212.confirm("MontoPactado"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "MontoPactado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "$\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, ".00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_33_div_9_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r27.disableValidation.MontoPactado);
} }
function ModifyDatatableComponent_div_34_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_34_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r216); const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r215.confirm("LlamadaNo1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "LlamadaNo1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_34_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r28.disableValidation.LlamadaNo1);
} }
function ModifyDatatableComponent_div_35_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_35_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r219); const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r218.confirm("LlamadaNo2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "LlamadaNo2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_35_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r29.disableValidation.LlamadaNo2);
} }
function ModifyDatatableComponent_div_36_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_36_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r222); const ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r221.confirm("LlamadaNo3"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "LlamadaNo3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_36_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r30.disableValidation.LlamadaNo3);
} }
function ModifyDatatableComponent_div_37_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_37_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r225); const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r224.confirm("LlamadaNo4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "LlamadaNo4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_37_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r31.disableValidation.LlamadaNo4);
} }
function ModifyDatatableComponent_div_38_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_38_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r228); const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r227.confirm("LlamadaNo5"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "LlamadaNo5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_38_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r32.disableValidation.LlamadaNo5);
} }
function ModifyDatatableComponent_div_39_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r231 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r231);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r231, " ");
} }
function ModifyDatatableComponent_div_39_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r233 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_39_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r233); const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r232.confirm("EstadoEscriturado"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "EstadoEscriturado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_39_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r235); const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r234.searchTextEstadoEscriturado = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_39_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r235); const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r236.clear("EstadoEscriturado"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_39_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_39_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r33.searchTextEstadoEscriturado)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r33.estadoEscrituradoList, ctx_r33.searchTextEstadoEscriturado));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r33.disableValidation.EstadoEscriturado);
} }
function ModifyDatatableComponent_div_40_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r239 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r239);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r239, " ");
} }
function ModifyDatatableComponent_div_40_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r241 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_40_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r241); const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r240.confirm("TipificacionCorreccionesCtl"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r243 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "TipificacionCorreccionesCtl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_40_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r243); const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r242.searchTextTipificacionCorreccionesCtl = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_40_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r243); const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r244.clear("TipificacionCorreccionesCtl"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_40_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_40_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r34.searchTextTipificacionCorreccionesCtl)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r34.tipificacionCorreccionesCtlList, ctx_r34.searchTextTipificacionCorreccionesCtl));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r34.disableValidation.TipificacionCorreccionesCtl);
} }
function ModifyDatatableComponent_div_41_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_41_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r247); const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r246.confirm("NBR"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "NBR");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_41_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r35.disableValidation.NBR);
} }
function ModifyDatatableComponent_div_42_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_42_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r250); const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r249.confirm("AnalistaTrazabilidad"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "AnalistaTrazabilidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_42_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r36.disableValidation.AnalistaTrazabilidad);
} }
function ModifyDatatableComponent_div_43_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_43_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r253); const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r252.confirm("DetalleObservacion"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "DetalleObservacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_43_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r37.disableValidation.DetalleObservacion);
} }
function ModifyDatatableComponent_div_44_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r256 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r256);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r256, " ");
} }
function ModifyDatatableComponent_div_44_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r258 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_44_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r258); const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r257.confirm("EstadoAbogado"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r260 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "EstadoAbogado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_44_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r260); const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r259.searchTextEstadoAbogado = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_44_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r260); const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r261.clear("EstadoAbogado"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_44_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_44_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r38.searchTextEstadoAbogado)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r38.estadoAbogadoList, ctx_r38.searchTextEstadoAbogado));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r38.disableValidation.EstadoAbogado);
} }
function ModifyDatatableComponent_div_45_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_45_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r264); const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r263.confirm("ObservacionAbogado"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "ObservacionAbogado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_45_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r39.disableValidation.ObservacionAbogado);
} }
function ModifyDatatableComponent_div_46_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r267 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r267);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r267, " ");
} }
function ModifyDatatableComponent_div_46_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_46_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r269); const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r268.confirm("PresentoCambio"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r271 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "PresentoCambio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_46_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r271); const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r270.searchTextPresentoCambio = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_46_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r271); const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r272.clear("PresentoCambio"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_46_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_46_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r40.searchTextPresentoCambio)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r40.presentoCambioList, ctx_r40.searchTextPresentoCambio));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r40.disableValidation.PresentoCambio);
} }
function ModifyDatatableComponent_div_47_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r275 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_47_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r275); const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r274.confirm("CualFueElCambio"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "CualFueElCambio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_47_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r41.disableValidation.CualFueElCambio);
} }
function ModifyDatatableComponent_div_48_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r278 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_48_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r278); const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r277.confirm("NoPredialNacional"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "NoPredialNacional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_48_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r42.disableValidation.NoPredialNacional);
} }
function ModifyDatatableComponent_div_49_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_49_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r281); const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r280.confirm("NumeroId"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "NumeroId");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_49_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r43.disableValidation.NumeroId);
} }
function ModifyDatatableComponent_div_50_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r284 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_50_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r284); const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r283.confirm("IdMunicipio"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "IdMunicipio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_50_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r44.disableValidation.IdMunicipio);
} }
function ModifyDatatableComponent_div_51_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r287 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_51_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r287); const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r286.confirm("Radicaci\u00F3nOrdenPagoPySPredial"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Radicaci\u00F3nOrdenPagoPySPredial");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_51_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r45.disableValidation.RadicacionOrdenPagoPySPredial);
} }
function ModifyDatatableComponent_div_52_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r291 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_52_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r291); const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r290.confirm("FechaEstimadaDePyS", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "FechaEstimadaDePyS (dd-mm-yyyy)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-datepicker-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-datepicker", null, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ModifyDatatableComponent_div_52_div_8_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r288);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r288);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r46.disableValidation.FechaEstimadaDePyS);
} }
function ModifyDatatableComponent_div_53_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r294 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_53_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r294); const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r293.confirm("TipoPyS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "TipoPyS");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_53_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r47.disableValidation.TipoPyS);
} }
function ModifyDatatableComponent_div_54_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r297 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_54_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r297); const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r296.confirm("MunicipioPyS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "MunicipioPyS");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_54_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r48.disableValidation.MunicipioPyS);
} }
function ModifyDatatableComponent_div_55_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r300 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r300);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r300, " ");
} }
function ModifyDatatableComponent_div_55_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r302 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_55_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r302); const ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r301.confirm("EstadoPyS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r304 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "EstadoPyS");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_55_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r304); const ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r303.searchTextestadoPyS = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_55_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r304); const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r305.clear("EstadoPyS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_55_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_55_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r49.searchTextestadoPyS)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r49.estadoPySList, ctx_r49.searchTextestadoPyS));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r49.disableValidation.EstadoPyS);
} }
function ModifyDatatableComponent_div_56_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r308 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_56_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r308); const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r307.confirm("EstadoOrdenes"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "EstadoOrdenes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModifyDatatableComponent_div_56_div_5_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r50.disableValidation.EstadoOrdenes);
} }
function ModifyDatatableComponent_div_57_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r311 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r311);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r311, " ");
} }
function ModifyDatatableComponent_div_57_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r313 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_57_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r313); const ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r312.confirm("TipoProyectoM"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r315 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "TipoProyectoM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModifyDatatableComponent_div_57_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r315); const ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r314.searchTextTipoProyectoM = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_57_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r315); const ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r316.clear("TipoProyectoM"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_57_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_57_div_11_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r51.searchTextTipoProyectoM)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, ctx_r51.tipoProyectoMList, ctx_r51.searchTextTipoProyectoM));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r51.disableValidation.TipoProyectoM);
} }
function ModifyDatatableComponent_div_58_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r319 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_58_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r319); const ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r318.confirm("ValorFacturaPazySalvoPredial"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "ValorFacturaPazySalvoPredial");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "$\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, ".00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_58_div_9_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r52.disableValidation.ValorFacturaPazySalvoPredial);
} }
function ModifyDatatableComponent_div_59_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r322 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_59_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r322); const ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r321.confirm("ValorEstampilla"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "ValorEstampilla");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "$\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, ".00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_59_div_9_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r53.disableValidation.ValorEstampilla);
} }
function ModifyDatatableComponent_div_60_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r325 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_div_60_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r325); const ctx_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r324.confirm("ValorEstampillaDepartamental"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Masivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipPosition", "before");
} }
function ModifyDatatableComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "ValorEstampillaDepartamental");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "$\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, ".00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_60_div_9_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r54.disableValidation.ValorEstampillaDepartamental);
} }
const _c1 = function () { return { width: "50vw" }; };
const _c2 = function () { return { "960px": "75vw", "640px": "100vw" }; };
class ModifyDatatableComponent {
    constructor(legalizacionService, dialogRef, formBuilder, confirmationService, data) {
        this.legalizacionService = legalizacionService;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.confirmationService = confirmationService;
        this.data = data;
        this.obrasSelect = "''2-4'',''2-8'',''104-164'',''104-165'',''104-166'',''104-167'',''104-168'',''104-169'',''107-100'',''107-101'',''107-102'',''107-103'',''107-104'',''107-106'',''107-107'',''107-108'',''107-109'',''107-110'',''107-111'',''107-116'',''107-117'',''107-118'',''107-119'',''107-121'',''107-122'',''107-123'',''107-124'',''107-125'',''107-126'',''107-127'',''107-128'',''107-129'',''107-130'',''107-133'',''107-134'',''107-135'',''107-136'',''107-137'',''107-138'',''107-139'',''107-140'',''107-141'',''107-142'',''107-143'',''107-144'',''107-145'',''108-105'',''108-106'',''111-146'',''111-147'',''112-1107'',''112-1108'',''112-1109'',''112-1110'',''112-1111'',''112-1112'',''112-1113'',''112-113'',''112-114'',''122-12'',''122-13'',''123-101'',''123-102'',''124-101'',''124-102'',''128-10'',''129-100'',''129-101'',''130-4'',''130-5'',''131-100'',''131-101'',''132-100'',''132-101'',''133-107'',''133-109'',''133-111'',''133-115'',''133-116'',''138-1'',''138-2'',''139-1'',''139-10'',''139-11'',''139-2'',''139-3'',''139-8'',''140-100'',''146-100'',''147-100'',''147-101'',''149-100'',''149-101'',''149-102'',''152-1'',''152-10'',''152-11'',''152-2'',''152-3'',''152-4'',''152-7'',''152-8'',''152-9'',''153-1'',''153-10'',''153-11'',''153-12'',''153-2'',''153-3'',''153-4'',''153-5'',''153-6'',''153-7'',''153-8'',''153-9'',''154-1'',''154-2'',''155-1'',''155-2'',''156-1'',''156-2'',''156-3'',''157-1'',''157-2'',''158-3'',''158-4'',''159-1'',''160-1'',''160-138'',''160-139'',''160-140'',''160-141'',''160-142'',''160-143'',''160-144'',''160-145'',''160-146'',''160-147'',''161-100'',''161-101'',''162-100'',''162-101'',''162-102'',''162-104'',''162-105'',''162-106'',''162-107'',''163-100'',''2-102'',''2-113'',''2-117'',''2-15'',''2-16'',''2-18'',''2-22'',''2-23'',''2-24'',''2-26'',''2-266'',''2-290'',''2-294'',''2-30'',''2-301'',''2-31'',''2-32'',''2-328'',''2-333'',''2-337'',''2-338'',''2-346'',''2-35'',''2-369'',''2-371'',''2-373'',''2-376'',''2-38'',''2-380'',''2-383'',''2-384'',''2-399'',''2-400'',''2-406'',''2-417'',''2-422'',''2-423'',''2-424'',''2-425'',''2-426'',''2-427'',''2-428'',''2-429'',''2-430'',''2-431'',''2-435'',''2-447'',''2-449'',''2-452'',''2-455'',''2-457'',''2-458'',''2-462'',''2-464'',''2-465'',''2-466'',''2-467'',''2-468'',''2-469'',''2-470'',''2-471'',''2-472'',''2-473'',''2-476'',''2-477'',''2-497'',''2-498'',''2-509'',''2-510'',''2-513'',''2-518'',''2-519'',''2-520'',''2-526'',''2-527'',''2-537'',''2-538'',''2-541'',''2-550'',''2-563'',''2-564'',''2-565'',''2-578'',''2-580'',''2-586'',''2-644'',''2-645'',''2-646'',''2-652'',''2-658'',''2-661'',''2-663'',''2-665'',''2-667'',''2-668'',''2-669'',''2-670'',''2-671'',''2-672'',''2-681'',''2-693'',''2-694'',''2-695'',''2-696'',''2-715'',''2-73'',''2-739'',''2-740'',''2-741'',''2-742'',''2-753'',''2-776'',''2-78'',''2-79'',''2-793'',''2-799'',''2-800'',''2-813'',''2-814'',''2-839'',''2-840'',''2-875'',''27-342'',''55-1'',''74-1'',''74-2'',''74-3'',''77-509'',''77-510'',''77-513'',''77-514'',''77-516'',''77-518'',''80-447'',''87-101'',''87-102'',''87-103'',''93-101'',''93-102'',''93-103'',''93-104'',''93-105'',''93-108'',''96-10'',''96-11'',''96-2'',''96-21'',''96-22'',''96-25'',''96-26'',''96-3'',''96-33'',''96-34'',''96-35'',''96-36'',''96-37'',''96-4'',''96-5'',''96-6'',''96-7'',''96-8'',''96-9''";
        this.estadoCoordinadorList = [];
        this.estadoAnalistaList = [];
        this.asignacionAnalistaList = [];
        this.horaEntregaList = [];
        this.tipificacionCorreccionesCtlList = [];
        this.creacionCasoList = [];
        this.frplList = [];
        this.quienFirmaEsfpList = [];
        this.estadoEsfpFrplList = [];
        this.estadoAbogadoList = [];
        this.presentoCambioList = [];
        this.estadoPySList = [];
        this.estadoEscrituradoList = [];
        this.tipoProyectoMList = [];
        this.campanasEspecialesList = [];
        this.causalRenovacionList = [];
        this.estadoPoderAnalistaList = [];
        this.asignacionList = [];
        this.brokerList = [];
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
        this.beforeList = [];
        this.currentElement = {};
        this.displayLoading = false;
        this.disableValidation = {
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
            LlamadaNo3: true,
            LlamadaNo4: true,
            LlamadaNo5: true,
            EstadoEscriturado: true,
        };
        console.log('##### data', data.element);
        this.currentElement = data.element;
        this.reportType = data.reportType;
        this.sortStr = data.sortFilter;
        this.filterStr = data.filter;
        this.obras = data.obras;
        let toolName = this.getToolName(this.reportType);
        src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
        this.legalizacionService.getOptionListModal(toolName, 'EstadoCoordinador')
            .subscribe((response) => {
            console.log(response);
            this.estadoCoordinadorList = response;
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
            this.estadoCoordinadorList.unshift('Vacio');
        });
        src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
        this.legalizacionService.getOptionListModal(toolName, 'EstadoAnalista')
            .subscribe((response) => {
            console.log(response);
            this.estadoAnalistaList = response;
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
            this.estadoAnalistaList.unshift('Vacio');
        });
        src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
        this.legalizacionService.getOptionListModal(toolName, 'AsignacionAnalista')
            .subscribe((response) => {
            console.log(response);
            this.asignacionAnalistaList = response;
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
            this.asignacionAnalistaList.unshift('Vacio');
        });
        if (this.reportType == 5) {
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
            this.legalizacionService.getOptionListModal(toolName, 'HoradeEntrega')
                .subscribe((response) => {
                console.log(response);
                this.horaEntregaList = response;
                src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
                this.horaEntregaList.unshift('Vacio');
            });
        }
        if (this.reportType == 5) {
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
            this.legalizacionService.getOptionListModal(toolName, 'CreacionCaso')
                .subscribe((response) => {
                console.log(response);
                this.creacionCasoList = response;
                src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
                this.creacionCasoList.unshift('Vacio');
            });
        }
        if (this.reportType == 7) {
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
            this.legalizacionService.getOptionListModal(toolName, 'EstadoEscriturado')
                .subscribe((response) => {
                console.log(response);
                this.estadoEscrituradoList = response;
                src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
                this.estadoEscrituradoList.unshift('Vacio');
            });
        }
        if (this.reportType == 8) {
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
            this.legalizacionService.getOptionListModal(toolName, 'TipificacionCorreccionesCtl')
                .subscribe((response) => {
                console.log(response);
                this.tipificacionCorreccionesCtlList = response;
                src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
                this.tipificacionCorreccionesCtlList.unshift('Vacio');
            });
        }
        if (this.reportType == 9) {
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
            this.legalizacionService.getOptionListModal(toolName, 'Frpl')
                .subscribe((response) => {
                console.log(response);
                this.frplList = response;
                src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
                this.frplList.unshift('Vacio');
            });
        }
        if (this.reportType == 9) {
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
            this.legalizacionService.getOptionListModal(toolName, 'QuienFirmaEsfp')
                .subscribe((response) => {
                console.log(response);
                this.quienFirmaEsfpList = response;
                src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
                this.quienFirmaEsfpList.unshift('Vacio');
            });
        }
        if (this.reportType == 9) {
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
            this.legalizacionService.getOptionListModal(toolName, 'EstadoEsfpFrpl')
                .subscribe((response) => {
                console.log(response);
                this.estadoEsfpFrplList = response;
                src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
                this.estadoEsfpFrplList.unshift('Vacio');
            });
        }
        if (this.reportType == 9) {
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
            this.legalizacionService.getOptionListModal(toolName, 'EstadoAbogado')
                .subscribe((response) => {
                console.log(response);
                this.estadoAbogadoList = response;
                src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
                this.estadoAbogadoList.unshift('Vacio');
            });
        }
        if (this.reportType == 9) {
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
            this.legalizacionService.getOptionListModal(toolName, 'PresentoCambio')
                .subscribe((response) => {
                console.log(response);
                this.presentoCambioList = response;
                src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
                this.presentoCambioList.unshift('Vacio');
            });
        }
        if (this.reportType == 9) {
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
            this.legalizacionService.getOptionListModal(toolName, 'EstadoPyS')
                .subscribe((response) => {
                console.log(response);
                this.estadoPySList = response;
                src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
                this.estadoPySList.unshift('Vacio');
            });
        }
        if (this.reportType == 9) {
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
            this.legalizacionService.getOptionListModal(toolName, 'TipoProyectoM')
                .subscribe((response) => {
                console.log(response);
                this.tipoProyectoMList = response;
                src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
                this.tipoProyectoMList.unshift('Vacio');
            });
        }
        if (this.reportType == 10) {
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
            this.legalizacionService.getOptionListModal(toolName, 'CampanasEspeciales')
                .subscribe((response) => {
                console.log(response);
                this.campanasEspecialesList = response;
                src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
                this.campanasEspecialesList.unshift('Vacio');
            });
        }
        if (this.reportType == 10) {
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
            this.legalizacionService.getOptionListModal(toolName, 'CausalRenovacion')
                .subscribe((response) => {
                console.log(response);
                this.causalRenovacionList = response;
                src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
                this.causalRenovacionList.unshift('Vacio');
            });
        }
        if (this.reportType == 10) {
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
            this.legalizacionService.getOptionListModal(toolName, 'EstadoPoderAnalista')
                .subscribe((response) => {
                console.log(response);
                this.estadoPoderAnalistaList = response;
                src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
                this.estadoPoderAnalistaList.unshift('Vacio');
            });
        }
        if (this.reportType == 10) {
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
            this.legalizacionService.getOptionListModal(toolName, 'Asignacion')
                .subscribe((response) => {
                console.log(response);
                this.asignacionList = response;
                src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
                this.asignacionList.unshift('Vacio');
            });
        }
        if (this.reportType == 10) {
            src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = true;
            this.legalizacionService.getOptionListModal(toolName, 'Broker')
                .subscribe((response) => {
                console.log(response);
                this.brokerList = response;
                src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].displayLoading = false;
                this.brokerList.unshift('Vacio');
            });
        }
    }
    ngOnInit() {
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
                LlamadaNo3: false,
                LlamadaNo4: false,
                LlamadaNo5: false,
                EstadoEscriturado: false,
            };
        }
        else {
            if ((role == 'Administrador' || role == 'Analista') && this.reportType == 1) {
                this.disableValidation.EstadoAnalista = false;
                this.disableValidation.ObservacionAnalista = false;
                this.disableValidation.FechaSeguimientoAnalista = false;
                this.disableValidation.FechaAsignacion = false;
                this.disableValidation.AsignacionAnalista = false;
                this.disableValidation.AnalistaVarado = false;
                this.disableValidation.FechaAsignacionVarado = false;
                this.disableValidation.FechaDesvarado = false;
            }
            else if ((role == 'Administrador' || role == 'Coordinador') && this.reportType == 1) {
                this.disableValidation.EstadoCoordinador = false;
                this.disableValidation.ObservacionCoordinador = false;
                this.disableValidation.FechaSeguimientoCoordinador = false;
            }
            if ((role == 'Administrador' || role == 'Analista') && this.reportType == 2) {
                this.disableValidation.EstadoAnalista = false;
                this.disableValidation.ObservacionAnalista = false;
            }
            else if ((role == 'Administrador' || role == 'Coordinador') && this.reportType == 2) {
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
            }
            else if ((role == 'Administrador' || role == 'Coordinador') && this.reportType == 4) {
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
            }
            else if ((role == 'Administrador' || role == 'Coordinador') && this.reportType == 5) {
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
                this.disableValidation.LlamadaNo3 = false;
                this.disableValidation.LlamadaNo4 = false;
                this.disableValidation.LlamadaNo5 = false;
                this.disableValidation.EstadoEscriturado = false;
            }
            else if ((role == 'Administrador' || role == 'Coordinador') && this.reportType == this.RECAUDO) {
                this.disableValidation.EstadoAnalista = false;
                this.disableValidation.EstadoCoordinador = false;
                this.disableValidation.ObservacionCoordinador = false;
                this.disableValidation.FechaAcuerdoProximoPago = false;
                this.disableValidation.MontoPactado = false;
                this.disableValidation.LlamadaNo5 = false;
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
                this.disableValidation.EstadoAnalista = false;
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
            }
            else if ((role == 'Administrador' || role == 'Coordinador') && this.reportType == 9) {
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
            }
            else if ((role == 'Administrador' || role == 'Coordinador') && this.reportType == 10) {
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
            }
            else if ((role == 'Administrador' || role == 'Coordinador') && this.reportType == 11) {
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
        this.form = this.formBuilder.group({
            UNI_ID: [this.currentElement.UNI_ID],
            EstadoCoordinador: [{ value: this.currentElement.EstadoCoordinador, disabled: this.disableValidation.EstadoCoordinador }],
            ObservacionCoordinador: [{ value: this.currentElement.ObservacionCoordinador, disabled: this.disableValidation.ObservacionCoordinador }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(8000)]],
            EstadoAnalista: [{ value: this.ORDENES != this.reportType ? this.currentElement.EstadoAnalista : this.currentElement.EstadoAuxiliar, disabled: this.disableValidation.EstadoAnalista }],
            ObservacionAnalista: [{ value: this.ORDENES != this.reportType ? this.currentElement.ObservacionAnalista : this.currentElement.ObservacionAuxiliar, disabled: this.disableValidation.ObservacionAnalista }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(8000)]],
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
            DetalleObservacion: [{ value: this.currentElement.DetalleObservacion != null ? this.currentElement.DetalleObservacion : null, disabled: this.disableValidation.DetalleObservacion }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(8000)]],
            Frpl: [{ value: this.currentElement.Frpl != null ? this.currentElement.Frpl : null, disabled: this.disableValidation.Frpl }],
            QuienFirmaEsfp: [{ value: this.currentElement.QuienFirmaEsfp != null ? this.currentElement.QuienFirmaEsfp : null, disabled: this.disableValidation.QuienFirmaEsfp }],
            EstadoEsfpFrpl: [{ value: this.currentElement.EstadoEsfpFrpl != null ? this.currentElement.EstadoEsfpFrpl : null, disabled: this.disableValidation.EstadoEsfpFrpl }],
            EstadoAbogado: [{ value: this.currentElement.EstadoAbogado != null ? this.currentElement.EstadoAbogado : null, disabled: this.disableValidation.EstadoAbogado }],
            ObservacionAbogado: [{ value: this.currentElement.ObservacionAbogado != null ? this.currentElement.ObservacionAbogado : null, disabled: this.disableValidation.ObservacionAbogado }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(8000)]],
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
            LlamadaNo3: [{ value: this.currentElement.LlamadaNo3 != null ? this.currentElement.LlamadaNo3 : null, disabled: this.disableValidation.LlamadaNo3 }],
            LlamadaNo4: [{ value: this.currentElement.LlamadaNo4 != null ? this.currentElement.LlamadaNo4 : null, disabled: this.disableValidation.LlamadaNo4 }],
            LlamadaNo5: [{ value: this.currentElement.LlamadaNo5 != null ? this.currentElement.LlamadaNo5 : null, disabled: this.disableValidation.LlamadaNo5 }],
            EstadoEscriturado: [{ value: this.currentElement.EstadoEscriturado != null ? this.currentElement.EstadoEscriturado : null, disabled: this.disableValidation.EstadoEscriturado }],
            ID: [this.currentElement.ID],
        });
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
        let insertDate = '';
        if (this.reportType == 1) {
            let fechaFormatStr = 'null';
            if (this.form.controls['FechaSeguimientoCoordinador'].value != null) {
                let fechaFormat = new Date(this.form.controls['FechaSeguimientoCoordinador'].value);
                fechaFormatStr = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
            }
            let fechaFormatStr2 = 'null';
            if (this.form.controls['FechaSeguimientoAnalista'].value != null) {
                let fechaFormat = new Date(this.form.controls['FechaSeguimientoAnalista'].value);
                fechaFormatStr2 = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
            }
            let fechaFormatStr3 = 'null';
            if (this.form.controls['FechaAsignacion'].value != null) {
                let fechaFormat = new Date(this.form.controls['FechaAsignacion'].value);
                fechaFormatStr3 = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
            }
            let fechaFormatStr4 = 'null';
            if (this.form.controls['FechaAsignacionVarado'].value != null) {
                let fechaFormat = new Date(this.form.controls['FechaAsignacionVarado'].value);
                fechaFormatStr4 = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
            }
            let fechaFormatStr5 = 'null';
            if (this.form.controls['FechaDesvarado'].value != null) {
                let fechaFormat = new Date(this.form.controls['FechaDesvarado'].value);
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
        }
        else if (this.reportType == 2) {
            insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[EstadoCoordinador],[ObservacionCoordinador],[EstadoAnalista],[ObservacionAnalista] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${this.form.controls['EstadoAnalista'].value}'',
        ''${this.form.controls['ObservacionAnalista'].value}'')`;
        }
        else if (this.reportType == 3) {
            insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[EstadoCoordinador],[ObservacionCoordinador],[Comentarios],[EstadoAnalista],[ObservacionAnalista] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${this.form.controls['Comentarios'].value}'',
        ''${this.form.controls['EstadoAnalista'].value}'',
        ''${this.form.controls['ObservacionAnalista'].value}'')`;
        }
        else if (this.reportType == 4) {
            insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[EstadoCoordinador],[ObservacionCoordinador],[EstadoAnalista],[ObservacionAnalista] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${this.form.controls['EstadoAnalista'].value}'',
        ''${this.form.controls['ObservacionAnalista'].value}'')`;
        }
        else if (this.reportType == 5) {
            console.log(`this.form.controls['FechadeEntrega'].value`, this.form.controls['FechadeEntrega'].value);
            let fechaFormatStr = 'null';
            if (this.form.controls['FechadeEntrega'].value != null) {
                let fechaFormat = new Date(this.form.controls['FechadeEntrega'].value);
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
        }
        else if (this.reportType == 6) {
            insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[EstadoCoordinador],[ObservacionCoordinador],[Comentarios],[EstadoAnalista],[ObservacionAnalista] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${this.form.controls['Comentarios'].value}'',
        ''${this.form.controls['EstadoAnalista'].value}'',
        ''${this.form.controls['ObservacionAnalista'].value}'')`;
        }
        else if (this.reportType == 7) {
            let fechaFormatStr = 'null';
            if (this.form.controls['FechaAcuerdoProximoPago'].value != null) {
                let fechaFormat = new Date(this.form.controls['FechaAcuerdoProximoPago'].value);
                fechaFormatStr = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
            }
            insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[EstadoCoordinador],[ObservacionCoordinador],[EstadoAnalista],[ObservacionAnalista],[FechaAcuerdoProximoPago],[MontoPactado],[LlamadaNo1],[LlamadaNo2],[LlamadaNo3],[LlamadaNo4],[LlamadaNo5],[EstadoEscriturado] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${this.form.controls['EstadoAnalista'].value}'',
        ''${this.form.controls['ObservacionAnalista'].value}'',
        ''${fechaFormatStr}'',
        ''${this.form.controls['MontoPactado'].value}'',
        ''${this.form.controls['LlamadaNo1'].value}'',
        ''${this.form.controls['LlamadaNo2'].value}'',
        ''${this.form.controls['LlamadaNo3'].value}'',
        ''${this.form.controls['LlamadaNo4'].value}'',
        ''${this.form.controls['LlamadaNo5'].value}'',
        ''${this.form.controls['EstadoEscriturado'].value}'')`;
        }
        else if (this.reportType == 8) {
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
        }
        else if (this.reportType == 9) {
            let fechaFormatStr = 'null';
            if (this.form.controls['FechaEstimadaDePyS'].value != null) {
                let fechaFormat = new Date(this.form.controls['FechaEstimadaDePyS'].value);
                fechaFormatStr = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
            }
            insertDate = `INSERT INTO #tblTEMP  
      ([UNI_ID],[Frpl],[QuienFirmaEsfp],[EstadoEsfpFrpl],[EstadoCoordinador],[ObservacionCoordinador],[EstadoAnalista],[ObservacionAnalista],[EstadoAbogado],
        [ObservacionAbogado],[CualFueElCambio],[NoPredialNacional],[NumeroId],[IdMunicipio],[RadicaciónOrdenPagoPySPredial],[FechaEstimadaDePyS],
        [TipoPyS],[MunicipioPyS],[EstadoPyS],[EstadoOrdenes],[TipoProyectoM],[ValorFacturaPazySalvoPredial],[ValorEstampilla],[ValorEstampillaDepartamental],[PresentoCambio] ) 
        VALUES (''${this.form.controls['UNI_ID'].value}'',
        ''${this.form.controls['Frpl'].value}'',
        ''${this.form.controls['QuienFirmaEsfp'].value}'',
        ''${this.form.controls['EstadoEsfpFrpl'].value}'',
        ''${this.form.controls['EstadoCoordinador'].value}'',
        ''${this.form.controls['ObservacionCoordinador'].value}'',
        ''${this.form.controls['EstadoAnalista'].value}'',
        ''${this.form.controls['ObservacionAnalista'].value}'',
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
        }
        else if (this.reportType == 10) {
            let fechaFormatStr = 'null';
            if (this.form.controls['FechaSeguimientoCoordinador'].value != null) {
                let fechaFormat = new Date(this.form.controls['FechaSeguimientoCoordinador'].value);
                fechaFormatStr = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
            }
            let fechaFormatStr2 = 'null';
            if (this.form.controls['FechaSeguimientoAnalista'].value != null) {
                let fechaFormat = new Date(this.form.controls['FechaSeguimientoAnalista'].value);
                fechaFormatStr2 = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
            }
            let fechaFormatStr3 = 'null';
            if (this.form.controls['FechaAsignacion'].value != null) {
                let fechaFormat = new Date(this.form.controls['FechaAsignacion'].value);
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
        }
        else if (this.reportType == 11) {
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
        let auditList = [];
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
            .subscribe((data) => {
            console.log(data);
        }, err => {
            console.log(err);
        });
        this.dialogRef.close();
    }
    multipleUpdateLegalizacion(field, type) {
        let newValue = this.form.controls[field].value;
        console.log('field', field);
        console.log('type', type);
        if (type == 1) {
            let fechaFormatStr = 'null';
            if (newValue != null) {
                let fechaFormat = new Date(newValue);
                fechaFormatStr = fechaFormat.getFullYear() + '-' + (fechaFormat.getMonth() < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());
            }
            newValue = fechaFormatStr;
        }
        else if (type == 2) {
            let horaFormatStr = 'null';
            let horaFormat = new Date(newValue);
            horaFormatStr = (horaFormat.getHours() < 10 ? '0' + (horaFormat.getHours() + 1) : (horaFormat.getHours())) + ':' + (horaFormat.getMinutes() < 10 ? '0' + (horaFormat.getMinutes() + 1) : (horaFormat.getMinutes())) + ':' + (horaFormat.getSeconds() < 10 ? '0' + horaFormat.getSeconds() : horaFormat.getSeconds());
            newValue = horaFormatStr;
        }
        console.log('newValue', newValue);
        this.displayLoading = true;
        this.legalizacionService.multipleUpdateLegalizacion(field, newValue, this.obras, this.sortStr, this.filterStr, this.reportType)
            .subscribe((data) => {
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
                });
            }
            else {
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
                });
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
            });
        });
    }
    confirm(id, type) {
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
    clear(id) {
        if (id == 'EstadoCoordinador') {
            this.searchTextEstadoCoordinador = "";
        }
        else if (id == 'EstadoAnalista') {
            this.searchTextEstadoAnalista = "";
        }
        else if (id == 'AsignacionAnalista') {
            this.searchTextAsignacionAnalista = "";
        }
        else if (id == 'HoradeEntrega') {
            this.searchTextHoradeEntrega = "";
        }
    }
    getToolName(name) {
        if (name == this.LEGALIZACION) {
            return 'Legalizacion';
        }
        else if (name == this.PROMESA) {
            return 'Promesas';
        }
        if (name == this.SUBSIDIO) {
            return 'Subsidio';
        }
        if (name == this.SEGUIMIENTO_SUBSIDIO) {
            return 'SegSubsidio';
        }
        if (name == this.ENTREGA) {
            return 'Entregas';
        }
        else if (name == this.DESEMBOLSO) {
            return 'Desembolso';
        }
        if (name == this.RECAUDO) {
            return 'Recaudo';
        }
        else if (name == this.TRAZABILIDAD) {
            return 'Trazabilidad';
        }
        else if (name == this.ORDENES) {
            return 'Ordenes';
        }
        else if (name == this.RENOVACION) {
            return 'Renovacion';
        }
        else if (name == this.ESCRITURACION) {
            return 'Escrituracion';
        }
        return;
    }
}
ModifyDatatableComponent.ɵfac = function ModifyDatatableComponent_Factory(t) { return new (t || ModifyDatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_legalizacion_service__WEBPACK_IMPORTED_MODULE_4__["LegalizacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ModifyDatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ModifyDatatableComponent, selectors: [["app-modify-datatable"]], decls: 69, vars: 70, consts: [[1, "panel-form-modal-content"], [3, "formGroup", "ngSubmit"], ["class", "form-panel-input", 4, "ngIf"], ["class", "form-panel-input ", 4, "ngIf"], ["type", "button", "mat-raised-button", "", "type", "submit"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], ["header", "Confirmacion", "icon", "pi pi-exclamation-triangle"], ["id", "spinner-panel", 3, "visible", "closeIcon", "showHeader", "dismissableMask", "modal", "breakpoints", "visibleChange"], [1, "form-panel-input"], ["appearance", "fill", 1, "inputForm"], ["matInput", "", "formControlName", "FechadeEntrega", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["pickerFechadeEntrega", ""], [4, "ngIf"], ["type", "button", "mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon", "matTooltip", "Aplicar cambio de forma masiva", 3, "matTooltipPosition", "click"], ["formControlName", "HoradeEntrega"], [1, "search-filter-panel"], ["matInput", "", "placeholder", "Buscar", 1, "SearchBox", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["aria-hidden", "false", "aria-label", "Example home icon", 1, "close-icon", 3, "click"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "readonly", ""], ["formControlName", "Frpl"], ["formControlName", "QuienFirmaEsfp"], ["formControlName", "EstadoEsfpFrpl"], ["formControlName", "EstadoCoordinador"], ["appearance", "fill", "hintLabel", "Max 8000 caracteres", 1, "inputForm"], ["matInput", "", "formControlName", "ObservacionCoordinador", "maxlength", "8000"], ["ObservacionCoordinador", ""], ["align", "end"], ["formControlName", "CampanasEspeciales"], ["formControlName", "CausalRenovacion"], ["matInput", "", "formControlName", "Comentarios"], ["formControlName", "EstadoAnalista"], ["matInput", "", "formControlName", "ObservacionAnalista", "maxlength", "8000"], ["ObservacionAnalista", ""], ["formControlName", "AsignacionAnalista"], ["matInput", "", "formControlName", "AnalistaVarado"], ["matInput", "", "formControlName", "FechaSeguimientoCoordinador", 3, "matDatepicker"], ["pickerFechaSeguimientoCoordinador", ""], ["matInput", "", "formControlName", "FechaSeguimientoAnalista", 3, "matDatepicker"], ["pickerFechaSeguimientoAnalista", ""], ["matInput", "", "formControlName", "FechaAsignacionVarado", 3, "matDatepicker"], ["pickerFechaAsignacionVarado", ""], ["matInput", "", "formControlName", "FechaDesvarado", 3, "matDatepicker"], ["pickerFechaDesvarado", ""], ["formControlName", "EstadoPoderAnalista"], ["formControlName", "Asignacion"], ["formControlName", "Broker"], ["matInput", "", "formControlName", "FechaAsignacion", 3, "matDatepicker"], ["pickerFechaAsignacion", ""], ["matInput", "", "formControlName", "Arquitecta"], ["formControlName", "CreacionCaso"], ["matInput", "", "formControlName", "Apoderado"], ["matInput", "", "formControlName", "FechaAcuerdoProximoPago", 3, "matDatepicker"], ["pickerFechaAcuerdoProximoPago", ""], ["matInput", "", "type", "number", "placeholder", "0", "formControlName", "MontoPactado", 1, "example-right-align"], ["matPrefix", ""], ["matSuffix", ""], ["matInput", "", "formControlName", "LlamadaNo1"], ["matInput", "", "formControlName", "LlamadaNo2"], ["matInput", "", "formControlName", "LlamadaNo3"], ["matInput", "", "formControlName", "LlamadaNo4"], ["matInput", "", "formControlName", "LlamadaNo5"], ["formControlName", "EstadoEscriturado"], ["formControlName", "TipificacionCorreccionesCtl"], ["matInput", "", "formControlName", "NBR"], ["matInput", "", "formControlName", "AnalistaTrazabilidad"], ["matInput", "", "formControlName", "DetalleObservacion"], ["formControlName", "EstadoAbogado"], ["matInput", "", "formControlName", "ObservacionAbogado"], ["formControlName", "PresentoCambio"], ["matInput", "", "formControlName", "CualFueElCambio"], ["matInput", "", "formControlName", "NoPredialNacional"], ["matInput", "", "formControlName", "NumeroId"], ["matInput", "", "formControlName", "IdMunicipio"], ["matInput", "", "formControlName", "Radicaci\u00F3nOrdenPagoPySPredial"], ["matInput", "", "formControlName", "FechaEstimadaDePyS", 3, "matDatepicker"], ["pickerFechaEstimadaDePyS", ""], ["matInput", "", "formControlName", "TipoPyS"], ["matInput", "", "formControlName", "MunicipioPyS"], ["formControlName", "EstadoPyS"], ["matInput", "", "formControlName", "EstadoOrdenes"], ["formControlName", "TipoProyectoM"], ["matInput", "", "type", "number", "placeholder", "0", "formControlName", "ValorFacturaPazySalvoPredial", 1, "example-right-align"], ["matInput", "", "type", "number", "placeholder", "0", "formControlName", "ValorEstampilla", 1, "example-right-align"], ["matInput", "", "type", "number", "placeholder", "0", "formControlName", "ValorEstampillaDepartamental", 1, "example-right-align"]], template: function ModifyDatatableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ModifyDatatableComponent_Template_form_ngSubmit_5_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ModifyDatatableComponent_div_6_Template, 9, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ModifyDatatableComponent_div_7_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ModifyDatatableComponent_div_8_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModifyDatatableComponent_div_9_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ModifyDatatableComponent_div_10_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModifyDatatableComponent_div_11_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ModifyDatatableComponent_div_12_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ModifyDatatableComponent_div_13_Template, 9, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ModifyDatatableComponent_div_14_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ModifyDatatableComponent_div_15_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ModifyDatatableComponent_div_16_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ModifyDatatableComponent_div_17_Template, 12, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ModifyDatatableComponent_div_18_Template, 9, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ModifyDatatableComponent_div_19_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ModifyDatatableComponent_div_20_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ModifyDatatableComponent_div_21_Template, 9, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ModifyDatatableComponent_div_22_Template, 9, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ModifyDatatableComponent_div_23_Template, 9, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ModifyDatatableComponent_div_24_Template, 9, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ModifyDatatableComponent_div_25_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ModifyDatatableComponent_div_26_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ModifyDatatableComponent_div_27_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, ModifyDatatableComponent_div_28_Template, 9, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ModifyDatatableComponent_div_29_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ModifyDatatableComponent_div_30_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ModifyDatatableComponent_div_31_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ModifyDatatableComponent_div_32_Template, 9, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, ModifyDatatableComponent_div_33_Template, 10, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ModifyDatatableComponent_div_34_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ModifyDatatableComponent_div_35_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ModifyDatatableComponent_div_36_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, ModifyDatatableComponent_div_37_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, ModifyDatatableComponent_div_38_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, ModifyDatatableComponent_div_39_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ModifyDatatableComponent_div_40_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, ModifyDatatableComponent_div_41_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, ModifyDatatableComponent_div_42_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, ModifyDatatableComponent_div_43_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, ModifyDatatableComponent_div_44_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, ModifyDatatableComponent_div_45_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, ModifyDatatableComponent_div_46_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, ModifyDatatableComponent_div_47_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, ModifyDatatableComponent_div_48_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, ModifyDatatableComponent_div_49_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, ModifyDatatableComponent_div_50_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, ModifyDatatableComponent_div_51_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, ModifyDatatableComponent_div_52_Template, 9, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, ModifyDatatableComponent_div_53_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, ModifyDatatableComponent_div_54_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, ModifyDatatableComponent_div_55_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, ModifyDatatableComponent_div_56_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, ModifyDatatableComponent_div_57_Template, 12, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, ModifyDatatableComponent_div_58_Template, 10, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, ModifyDatatableComponent_div_59_Template, 10, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, ModifyDatatableComponent_div_60_Template, 10, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyDatatableComponent_Template_button_click_64_listener() { return ctx.saveData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "p-confirmDialog", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "p-dialog", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function ModifyDatatableComponent_Template_p_dialog_visibleChange_67_listener($event) { return ctx.displayLoading = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("", ctx.currentElement.Proyecto, " - ", ctx.currentElement.Agrupacion, " - ", ctx.currentElement.NIT, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.currentElement.Nombre, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 1 || ctx.reportType == 2 || ctx.reportType == 3 || ctx.reportType == 4 || ctx.reportType == 5 || ctx.reportType == 6 || ctx.reportType == 7 || ctx.reportType == 8 || ctx.reportType == 9 || ctx.reportType == 10 || ctx.reportType == 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 1 || ctx.reportType == 2 || ctx.reportType == 3 || ctx.reportType == 4 || ctx.reportType == 5 || ctx.reportType == 6 || ctx.reportType == 7 || ctx.reportType == 8 || ctx.reportType == 9 || ctx.reportType == 10 || ctx.reportType == 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 3 || ctx.reportType == 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 1 || ctx.reportType == 2 || ctx.reportType == 3 || ctx.reportType == 4 || ctx.reportType == 5 || ctx.reportType == 6 || ctx.reportType == 7 || ctx.reportType == 8 || ctx.reportType == 9 || ctx.reportType == 10 || ctx.reportType == 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 1 || ctx.reportType == 2 || ctx.reportType == 3 || ctx.reportType == 4 || ctx.reportType == 5 || ctx.reportType == 6 || ctx.reportType == 7 || ctx.reportType == 8 || ctx.reportType == 9 || ctx.reportType == 10 || ctx.reportType == 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 1 || ctx.reportType == 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 1 || ctx.reportType == 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 1 || ctx.reportType == 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reportType == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](68, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.displayLoading)("closeIcon", false)("showHeader", false)("dismissableMask", false)("modal", true)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](69, _c2));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialog"], primeng_dialog__WEBPACK_IMPORTED_MODULE_9__["Dialog"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatPrefix"]], pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["FilterPipe"]], styles: [".panel-form-modal-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.form-panel-input[_ngcontent-%COMP%] {\n  margin-bottom: 1.5em;\n}\n\n.form-panel-input[_ngcontent-%COMP%]   .input-time-panel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 34em;\n  vertical-align: top;\n  margin-left: 0;\n}\n\n.form-panel-input[_ngcontent-%COMP%]   .input-time-panel[_ngcontent-%COMP%]   p-calendar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-panel-input[_ngcontent-%COMP%]   .input-time-panel[_ngcontent-%COMP%]   p-calendar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-panel-input[_ngcontent-%COMP%]   .inputForm[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 34em;\n  vertical-align: top;\n}\n\n.form-panel-input[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  margin-left: 1em;\n}\n\n.form-panel-input[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.search-filter-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 10px 16px;\n  position: sticky;\n  top: 0;\n  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);\n  background-color: white;\n  z-index: 2;\n}\n\n.search-filter-panel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0 1em;\n  height: 1.5em;\n}\n\n.search-filter-panel[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n\n.search-filter-panel[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZGlmeS1kYXRhdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFLQTtFQUNFLG9CQUFBO0FBRkY7O0FBSUU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFJSTtFQUNFLFdBQUE7QUFGTjs7QUFJTTtFQUNFLFdBQUE7QUFGUjs7QUFPRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBTEo7O0FBU0U7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVBKOztBQVNJO0VBQ0UsY0FBQTtBQVBOOztBQWNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLDZDQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBWEY7O0FBYUU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQVhKOztBQWVJO0VBQ0UseUJBQUE7QUFiTjs7QUFpQkU7RUFDRSxlQUFBO0FBZkoiLCJmaWxlIjoibW9kaWZ5LWRhdGF0YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbC1mb3JtLW1vZGFsLWNvbnRlbnQge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cblxuLmZvcm0tcGFuZWwtaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcblxuICAuaW5wdXQtdGltZS1wYW5lbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzNGVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG5cbiAgICBwLWNhbGVuZGFyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmlucHV0Rm9ybSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzNGVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cblxuXG4gID5kaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG5cbn1cblxuLnNlYXJjaC1maWx0ZXItcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMjtcblxuICBpbnB1dCB7XG4gICAgbWFyZ2luOiAwIDFlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICB9XG5cbiAgbWF0LWNoZWNrYm94IHtcbiAgICAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgICB9XG4gIH1cblxuICAuY2xvc2UtaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "oji5":
/*!********************************************!*\
  !*** ./src/assets/json/campos_moneda.json ***!
  \********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"Neto\",\"SaldoCI\",\"ValorCredito\",\"ValorPagadoCredito\",\"Valor Subsidio 1\",\"Valor Subsidio 2\",\"Valor Subsidio Concurrente\",\"Valor Pagado Subsidio\",\"MontoPactado\",\"SinVencer\",\"Mora 1-30 dias\",\"Mora 31-45 dias\",\"Mora 46-60 dias\",\"Mora 61-90 dias\",\"Mora 91-120 dias\",\"Mora 120 + dias\",\"Vencido\",\"Proyeccion_Mes\",\"Valor_Gestionar\",\"EjecutadoMes\",\"ValorFacturaPazySalvoPredial\",\"ValorEstampilla\",\"ValorEstampillaDepartamental\"]");

/***/ }),

/***/ "pTvf":
/*!***************************************************!*\
  !*** ./src/app/shared/filter/filter.component.ts ***!
  \***************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_utils_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.services */ "HZWf");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















const _c0 = ["matSelect"];
function FilterComponent_mat_option_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const condition_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](condition_r2);
} }
function FilterComponent_mat_option_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const condition_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, condition_r2, "dd-MM-yyyy"));
} }
function FilterComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterComponent_mat_option_15_span_1_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FilterComponent_mat_option_15_span_2_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const condition_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", condition_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", condition_r2 == "Vacio" || !ctx_r1.camposFecha.includes(ctx_r1.headers));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.camposFecha.includes(ctx_r1.headers) && condition_r2 != "Vacio");
} }
class FilterComponent {
    constructor(_utilsService) {
        this._utilsService = _utilsService;
        this.filtersOptions = [];
        this.searchCondition = {};
        this.camposFecha = [];
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchFilterItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearSearchFilterItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.checkedAll = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.isShowSelect = false;
        this.customHeaders = '';
        this.previusSelected = [];
        this.checkedAll.valueChanges.subscribe((x) => {
            console.log('###x', x);
            console.log('###searchCondition ', this.searchCondition);
            if (x) {
                this.searchCondition[this.headers] = [];
                for (let index = 0; index < this.filtersOptions[this.headers].length; index++) {
                    const element = this.filtersOptions[this.headers][index];
                    this.searchCondition[this.headers][index] = element;
                }
            }
            else {
                this.searchCondition = {};
            }
        });
        this.searchText = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.searchText.valueChanges.subscribe((x) => {
            console.log('x', x);
            if (x.length > 0) {
                let idFormat = this.headers;
                if (/ /g.test(idFormat)) {
                    if (String(idFormat).includes('=')) {
                        idFormat = `(${idFormat})`;
                    }
                    else {
                        idFormat = `[${idFormat}]`;
                    }
                }
                let searchTemp = ` AND (${idFormat} LIKE  ''${x}%'') `;
                console.log(searchTemp);
                // this.searchTemp = searchTemp;
                // this.page = 1;
                // this.getDataTable();
                let request = {
                    id: this.headers,
                    search: searchTemp
                };
                this.searchFilterItemEvent.emit(request);
            }
            else if (x.length < 1 && this.searchText != null) {
                console.log('aquiii', this.searchText);
                this.clearSearchFilterItemEvent.emit(this.headers);
                // this.searchTemp = '';
                // this.page = 1;
                // this.getDataTable();
            }
        });
    }
    ngOnInit() {
        this.customHeaders = this._utilsService.getAliasFromColumnCalculate(this.headers);
        this.eventsSubscription = this.eventsClear.subscribe(() => this.remoteClearFilter(this.headers));
        this.eventsSearchFilterSubscription = this.eventsSearchFilter.subscribe(() => this.updateOptionList());
    }
    ngAfterViewInit() {
        this.matSelect.openedChange.subscribe(isOpen => {
            if (isOpen) {
                console.log('open', isOpen);
            }
            else {
                console.log('close', isOpen);
            }
            this.isShowSelect = isOpen;
        });
        this.updateOptionList();
    }
    applyFilter(id) {
        let idTemp = this.removeWhiteSpaces(id);
        idTemp = this._utilsService.getAliasFromColumnCalculate(idTemp);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#' + idTemp).hide();
        console.log('searchCondition', this.searchCondition);
        this.newItemEvent.emit(this.searchCondition);
    }
    clearFilter(id) {
        let idTemp = this.removeWhiteSpaces(id);
        idTemp = this._utilsService.getAliasFromColumnCalculate(idTemp);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#' + idTemp).hide();
        this.searchCondition = {};
        this.removeItemEvent.emit(id);
    }
    remoteClearFilter(id) {
        id = this.removeWhiteSpaces(id);
        id = this._utilsService.getAliasFromColumnCalculate(id);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#' + id).hide();
        this.searchCondition = {};
    }
    clear() {
        this.searchText.setValue('');
    }
    close(id) {
        id = this.removeWhiteSpaces(id);
        id = this._utilsService.getAliasFromColumnCalculate(id);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#' + id).hide();
    }
    removeWhiteSpaces(txt) {
        return txt.replace(/ /g, '');
    }
    ngOnDestroy() {
        this.eventsSubscription.unsubscribe();
        this.eventsSearchFilterSubscription.unsubscribe();
    }
    select(evt) {
        console.log('evt.value', evt);
        if (evt.value != null) {
            // this.previusSelected = this.previusSelected.filter(value => evt.value.includes(value));
            // console.log('filteredArray',this.previusSelected);
            this.previusSelected = this.previusSelected.concat(evt.value);
            this.previusSelected = this.previusSelected.filter((item, index) => { return (this.previusSelected.indexOf(item) == index); });
            console.log(this.previusSelected);
        }
    }
    updateOptionList() {
        if (this.filtersOptions[this.headers] != null) {
            console.log('##updateOptionList', this.filtersOptions[this.headers]);
            console.log('##this.previusSelected', this.previusSelected);
            this.filtersOptions[this.headers] = this.filtersOptions[this.headers].concat(this.previusSelected);
            this.filtersOptions[this.headers] = this.filtersOptions[this.headers].filter((item, index) => { return (this.filtersOptions[this.headers].indexOf(item) == index); });
            console.log(this.filtersOptions[this.headers]);
            let temp = this.filtersOptions[this.headers];
            this.filtersOptions[this.headers] = temp.sort(function (a, b) {
                return ('' + a).localeCompare(b);
            });
            console.log('##fin updateOptionList', this.filtersOptions[this.headers]);
        }
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_utils_services__WEBPACK_IMPORTED_MODULE_3__["UtilsService"])); };
FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["app-filter"]], viewQuery: function FilterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matSelect = _t.first);
    } }, inputs: { headers: "headers", filtersOptions: "filtersOptions", searchCondition: "searchCondition", camposFecha: "camposFecha", displayLoading: "displayLoading", eventsClear: "eventsClear", eventsSearchFilter: "eventsSearchFilter" }, outputs: { newItemEvent: "newItemEvent", removeItemEvent: "removeItemEvent", searchFilterItemEvent: "searchFilterItemEvent", clearSearchFilterItemEvent: "clearSearchFilterItemEvent" }, decls: 21, vars: 10, consts: [[1, "simple-filter", 3, "id"], [1, "panel-close-modal", 3, "click"], ["mat-menu-item", "", "mat-filter-item", "", 1, "menu-title", 3, "disableRipple"], ["mat-menu-item", "", "mat-filter-item", "", 3, "disableRipple"], ["placeholder", "Conditions", "multiple", "", 3, "panelClass", "value", "valueChange", "selectionChange"], ["matSelect", ""], [1, "search-filter-panel"], [3, "formControl"], ["matInput", "", "placeholder", "Buscar", 1, "SearchBox", 3, "formControl", "keydown"], ["aria-hidden", "false", "aria-label", "Example home icon", 1, "close-icon", 3, "click"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"], [4, "ngIf"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_Template_div_click_1_listener() { return ctx.close(ctx.headers); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FilterComponent_Template_mat_select_valueChange_8_listener($event) { return (ctx.searchCondition[ctx.headers] = $event); })("selectionChange", function FilterComponent_Template_mat_select_selectionChange_8_listener($event) { return ctx.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function FilterComponent_Template_input_keydown_12_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_Template_mat_icon_click_13_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FilterComponent_mat_option_15_Template, 3, 3, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_17_listener() { return ctx.clearFilter(ctx.headers); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Limpiar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_19_listener() { return ctx.applyFilter(ctx.headers); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Aplicar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.headers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableRipple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.customHeaders, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableRipple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelClass", "mat-elevation-z10")("value", ctx.searchCondition[ctx.headers]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.checkedAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filtersOptions[ctx.headers]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableRipple", true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: [".simple-filter[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 4px -1px #0003, 0 4px 5px 0 #00000024, 0 1px 10px 0 #0000001f;\n}\n.simple-filter[_ngcontent-%COMP%]   .panel-close-modal[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.SearchBox[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 1em;\n  border-radius: 0.3em;\n}\n.search-filter-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 10px 16px;\n  position: sticky;\n  top: 0;\n  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);\n  background-color: white;\n  z-index: 2;\n}\n.search-filter-panel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0 1em;\n  height: 0.5em;\n}\n.search-filter-panel[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.search-filter-panel[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtFQUFBO0FBQ0Y7QUFDRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQUNKO0FBR0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsNkNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFBSjtBQUlJO0VBQ0UseUJBQUE7QUFGTjtBQU1FO0VBQ0UsZUFBQTtBQUpKIiwiZmlsZSI6ImZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaW1wbGUtZmlsdGVyIHtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggIzAwMDMsIDAgNHB4IDVweCAwICMwMDAwMDAyNCwgMCAxcHggMTBweCAwICMwMDAwMDAxZjtcblxuICAucGFuZWwtY2xvc2UtbW9kYWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICB9XG59XG5cbi5TZWFyY2hCb3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuXG4uc2VhcmNoLWZpbHRlci1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAyO1xuXG4gIGlucHV0IHtcbiAgICBtYXJnaW46IDAgMWVtO1xuICAgIGhlaWdodDogMC41ZW07XG4gIH1cblxuICBtYXQtY2hlY2tib3gge1xuICAgIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICAgIH1cbiAgfVxuXG4gIC5jbG9zZS1pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "rqBn":
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/layout/layout.component.ts ***!
  \**********************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_material_multilevel_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-material-multilevel-menu */ "CsTR");









const _c0 = ["sidenav"];
function LayoutComponent_ng_material_multilevel_menu_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-material-multilevel-menu", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedItem", function LayoutComponent_ng_material_multilevel_menu_21_Template_ng_material_multilevel_menu_selectedItem_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectedItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("configuration", ctx_r1.config)("items", ctx_r1.appitems);
} }
const _c1 = ["*"];
class LayoutComponent {
    constructor(changeDetectorRef, media, router) {
        this.router = router;
        this.config = {
            paddingAtStart: true,
            fontColor: 'white',
            // selectedListFontColor: '#fee24f',
            selectedListFontColor: 'white',
        };
        this.appitems = [];
        this.role = 'NoAutorizado';
        this.role = localStorage.getItem('role');
        console.log('this.role', this.role);
        this.appitems = [];
        this.appitems = [
            {
                label: 'Herramientas',
                items: [
                    {
                        label: 'Entregas',
                        link: '/tablas/entregas',
                    },
                    {
                        label: 'Escrituracion',
                        link: '/tablas/escrituracion',
                    },
                    {
                        label: 'Legalización',
                        link: '/tablas/legalizacion',
                    },
                    {
                        label: 'Renovación',
                        link: '/tablas/renovaciones',
                    }, {
                        label: 'Seguimiento de subsidio',
                        link: '/tablas/segumientos-subsidio',
                    }, {
                        label: 'Promesas',
                        link: '/tablas/promesas',
                    }, {
                        label: 'Desembolso',
                        link: '/tablas/desembolsos',
                    }, {
                        label: 'Ordenes',
                        link: '/tablas/ordenes',
                    }, {
                        label: 'Subsidio',
                        link: '/tablas/subsidios',
                    }, {
                        label: 'Recaudos',
                        link: '/tablas/recaudos',
                    }, {
                        label: 'Trazabilidad',
                        link: '/tablas/trazabilidad',
                    }
                ]
            },
            {
                label: 'Reportes',
                items: [
                    {
                        label: 'Escrituración y Entregas',
                        link: '/reporte/5',
                    },
                    {
                        label: 'Ordenes',
                        link: '/reporte/4',
                    },
                    {
                        label: 'Promesas',
                        link: '/reporte/7',
                    },
                    {
                        label: 'Recaudo',
                        link: '/reporte/6',
                    },
                    {
                        label: 'Renovación y subsidio',
                        link: '/reporte/1',
                    },
                    {
                        label: 'Trazabilidad',
                        link: '/reporte/2',
                    },
                ]
            }
        ];
        if (this.role == 'Administrador') {
            this.appitems.push({
                label: 'Configuracion',
                items: [
                    {
                        label: 'Seleccion Proyectos',
                        link: '/configuracion-proyectos',
                    },
                    {
                        label: 'Roles de Usuario',
                        link: '/configuracion-roles',
                    },
                    {
                        label: 'Carga Datos',
                        link: '/carga-informacion',
                    },
                    {
                        label: 'Auditoria',
                        link: '/auditoria',
                    }
                ]
            });
        }
        this.mobileQuery = media.matchMedia('(max-width: 1024px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this.mobileQueryListener);
        // this.isShowSidebar = !this.mobileQuery.matches;
    }
    ngafterviewinit() {
        this.sidenav.close();
    }
    toggleAction() {
        if (this.sidenav.opened) {
            this.sidenav.close();
        }
        else {
            this.sidenav.open();
        }
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this.mobileQueryListener);
        this.sidenav.close();
    }
    selectedItem($evt) {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], viewQuery: function LayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, ngContentSelectors: _c1, decls: 24, vars: 4, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon", 3, "click"], [1, "example-spacer"], [1, "btns-panel"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon", 3, "click"], [1, "layout"], ["mode", "side", 1, "layout-sidebar", 3, "opened", "mode", "fixedInViewport", "openedChange"], ["sidenav", ""], [1, "avatar-panel"], ["src", "./assets/img/login.png", "tabindex", "0", 1, "avatar"], ["color", "white"], [3, "configuration", "items", "selectedItem", 4, "ngIf"], [1, "layout-content"], [3, "configuration", "items", "selectedItem"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_button_click_1_listener() { return ctx.toggleAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MacrosWeb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_button_click_8_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Salir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-sidenav-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-sidenav", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function LayoutComponent_Template_mat_sidenav_openedChange_13_listener($event) { return ctx.isShowSidebar = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Bienvenido!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LayoutComponent_ng_material_multilevel_menu_21_Template, 1, 2, "ng-material-multilevel-menu", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-sidenav-content", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.isShowSidebar)("mode", ctx.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role != "NoAutorizado");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], ng_material_multilevel_menu__WEBPACK_IMPORTED_MODULE_8__["NgMaterialMultilevelMenuComponent"]], styles: [".layout[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.layout-sidebar[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n  background: #048c44;\n  color: #fff;\n  width: 20em;\n}\n\n.layout-sidebar[_ngcontent-%COMP%]   .avatar-panel[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.layout-sidebar[_ngcontent-%COMP%]   .avatar-panel[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  box-shadow: 0 5px 5px -3px #0003, 0 8px 10px 1px #00000024, 0 3px 14px 2px #0000001f;\n}\n\n.layout-sidebar[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n@media (max-width: 576px) {\n  .layout-sidebar[_ngcontent-%COMP%] {\n    width: 218px;\n  }\n}\n\n.layout-content[_ngcontent-%COMP%] {\n  background-color: #F6F7FF;\n  height: calc(100vh - 64px);\n}\n\n@media (max-width: 576px) {\n  .layout-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background: #048c44;\n  color: #fff;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .btns-panel[_ngcontent-%COMP%] {\n  padding: 0 2em;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.NavLink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white !important;\n}\n\n@media (max-width: 1024px) {\n  mat-sidenav[_ngcontent-%COMP%] {\n    height: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7QUFERjs7QUFJQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQURGOztBQUdFO0VBQ0Usa0JBQUE7QUFESjs7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9GQUFBO0FBRE47O0FBTUk7RUFDRSxXQUFBO0FBSk47O0FBUUU7RUF4QkY7SUF5QkksWUFBQTtFQUxGO0FBQ0Y7O0FBUUE7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FBTEY7O0FBT0U7RUFKRjtJQUtJLFdBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBSkY7O0FBS0U7RUFDRSxjQUFBO0FBSEo7O0FBT0E7RUFDRSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0FBSkY7O0FBUUE7RUFDRTtJQUNFLHVCQUFBO0VBTEY7QUFDRiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5sYXlvdXQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxheW91dC1zaWRlYmFyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gIGJhY2tncm91bmQ6ICMwNDhjNDQ7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMjBlbTtcblxuICAuYXZhdGFyLXBhbmVsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuYXZhdGFyIHtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggIzAwMDMsIDAgOHB4IDEwcHggMXB4ICMwMDAwMDAyNCwgMCAzcHggMTRweCAycHggIzAwMDAwMDFmO1xuICAgIH1cbiAgfVxuXG4gIG1hdC1saXN0IHtcbiAgICBtYXQtbGlzdC1pdGVtIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwpIHtcbiAgICB3aWR0aDogMjE4cHg7XG4gIH1cbn1cblxuLmxheW91dC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICMwNDhjNDQ7XG4gIGNvbG9yOiAjZmZmO1xuICAuYnRucy1wYW5lbHtcbiAgICBwYWRkaW5nOiAwIDJlbTtcbiAgfVxufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLk5hdkxpbmt7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICBtYXQtc2lkZW5hdntcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "uAhc":
/*!*********************************************************************!*\
  !*** ./src/app/shared/filter-currency/filter-currency.component.ts ***!
  \*********************************************************************/
/*! exports provided: FilterCurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCurrencyComponent", function() { return FilterCurrencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_utils_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.services */ "HZWf");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");















const _c0 = ["matSelect"];
function FilterCurrencyComponent_mat_form_field_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Valor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "$\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ".00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FilterCurrencyComponent_mat_form_field_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hasta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "$\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ".00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FilterCurrencyComponent {
    constructor(formBuilder, _utilsService) {
        this.formBuilder = formBuilder;
        this._utilsService = _utilsService;
        this.filtersOptions = [];
        this.searchCondition = {};
        this.camposFecha = [];
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchText = "";
        this.checkedAll = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.isShowSelect = false;
        this.searchType = 1;
        this.customHeaders = '';
        this.form = this.formBuilder.group({
            valueSearchField: [],
            valueSearchField2: []
        });
    }
    ngOnInit() {
        this.customHeaders = this._utilsService.getAliasFromColumnCalculate(this.headers);
        this.eventsSubscription = this.eventsClear.subscribe(() => this.remoteClearFilter(this.headers));
    }
    applyFilter(id) {
        let idTemp = this.removeWhiteSpaces(id);
        idTemp = this._utilsService.getAliasFromColumnCalculate(idTemp);
        idTemp = String(idTemp).replace('+', '-');
        jquery__WEBPACK_IMPORTED_MODULE_2__('#' + idTemp + '-date').hide();
        console.log(this.form.controls['valueSearchField'].value);
        console.log(this.searchType);
        console.log('#####id', id);
        let columnCalculate = this._utilsService.getOriginalNameFromColumnCalculate(id);
        columnCalculate = columnCalculate.replaceAll(';', ',');
        console.log('#####columnCalculate', columnCalculate);
        console.log('### revisar espacios');
        if (/\s/g.test(columnCalculate)) {
            console.log('titulo con espacio');
            columnCalculate = `[${columnCalculate}]`;
        }
        console.log('searchCondition', this.searchCondition);
        if (this.searchType == 1) {
            console.log(` AND ${columnCalculate} = ''${this.form.controls['valueSearchField'].value}''  `);
            this.newItemEvent.emit({ field: id, query: ` AND ${columnCalculate} = ''${this.form.controls['valueSearchField'].value}''  ` });
        }
        else if (this.searchType == 2) {
            console.log(` AND ${columnCalculate} <> ''${this.form.controls['valueSearchField'].value}''  `);
            this.newItemEvent.emit({ field: id, query: ` AND ${columnCalculate} <> ''${this.form.controls['valueSearchField'].value}''  ` });
        }
        else if (this.searchType == 3) {
            console.log(` AND ${columnCalculate} <= ''${this.form.controls['valueSearchField'].value}''  `);
            this.newItemEvent.emit({ field: id, query: ` AND ${columnCalculate} < ''${this.form.controls['valueSearchField'].value}''  ` });
        }
        else if (this.searchType == 4) {
            console.log(` AND ${columnCalculate} >= ''${this.form.controls['valueSearchField'].value}''  `);
            this.newItemEvent.emit({ field: id, query: ` AND ${columnCalculate} > ''${this.form.controls['valueSearchField'].value}''  ` });
        }
        else if (this.searchType == 5 && this.form.controls['valueSearchField2'].value != null) {
            console.log(` AND  (${columnCalculate} BETWEEN ''${this.form.controls['valueSearchField'].value}''  AND ''${this.form.controls['valueSearchField2'].value}'' ) `);
            this.newItemEvent.emit({ field: id, query: ` AND  (${columnCalculate} BETWEEN ''${this.form.controls['valueSearchField'].value}''  AND ''${this.form.controls['valueSearchField2'].value}'' ) ` });
        }
        else if (this.searchType == 6) {
            console.log(` AND ${columnCalculate} IS NULL `);
            this.newItemEvent.emit({ field: id, query: ` AND (${columnCalculate} IS NULL OR ${columnCalculate} = '''') ` });
        }
        else if (this.searchType == 7) {
            console.log(` AND ${columnCalculate} IS NOT NULL `);
            this.newItemEvent.emit({ field: id, query: ` AND ${columnCalculate} IS NOT NULL ` });
        }
        else {
            this.newItemEvent.emit();
        }
        // this.newItemEvent.emit(this.searchCondition);
    }
    clearFilter(id) {
        let idTemp = this.removeWhiteSpaces(id);
        idTemp = this._utilsService.getAliasFromColumnCalculate(idTemp);
        idTemp = String(idTemp).replace('+', '-');
        jquery__WEBPACK_IMPORTED_MODULE_2__('#' + idTemp + '-date').hide();
        this.form.controls['valueSearchField'].setValue(null);
        this.form.controls['valueSearchField2'].setValue(null);
        this.removeItemEvent.emit(id);
    }
    remoteClearFilter(id) {
        id = this._utilsService.getAliasFromColumnCalculate(id);
        id = this.removeWhiteSpaces(id);
        id = String(id).replace('+', '-');
        jquery__WEBPACK_IMPORTED_MODULE_2__('#' + id + '-date').hide();
        this.form.controls['valueSearchField'].setValue(null);
        this.form.controls['valueSearchField2'].setValue(null);
    }
    clear() {
        this.searchText = "";
    }
    close(id) {
        id = this._utilsService.getAliasFromColumnCalculate(id);
        id = this.removeWhiteSpaces(id);
        id = String(id).replace('+', '-');
        jquery__WEBPACK_IMPORTED_MODULE_2__('#' + id + '-date').hide();
    }
    ngOnDestroy() {
        this.eventsSubscription.unsubscribe();
    }
    removeWhiteSpaces(txt) {
        return txt.replace(/ /g, '');
    }
}
FilterCurrencyComponent.ɵfac = function FilterCurrencyComponent_Factory(t) { return new (t || FilterCurrencyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_utils_services__WEBPACK_IMPORTED_MODULE_3__["UtilsService"])); };
FilterCurrencyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterCurrencyComponent, selectors: [["app-filter-currency"]], viewQuery: function FilterCurrencyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matSelect = _t.first);
    } }, inputs: { headers: "headers", filtersOptions: "filtersOptions", searchCondition: "searchCondition", camposFecha: "camposFecha", eventsClear: "eventsClear" }, outputs: { newItemEvent: "newItemEvent", removeItemEvent: "removeItemEvent" }, decls: 38, vars: 10, consts: [[1, "date-panel-filter", 3, "id"], [1, "panel-close-modal", 3, "click"], ["mat-menu-item", "", "mat-filter-item", "", 1, "menu-title", 3, "disableRipple"], ["mat-menu-item", "", "mat-filter-item", "", 3, "formGroup", "disableRipple", "ngSubmit"], ["placeholder", "Conditions", 3, "panelClass", "value", "valueChange"], ["matSelect", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["appearance", "fill", "floatLabel", "always", 4, "ngIf"], ["mat-menu-item", "", "mat-filter-item", "", 3, "disableRipple"], ["type", "button", "mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["appearance", "fill", "floatLabel", "always"], ["matInput", "", "type", "number", "placeholder", "0", "formControlName", "valueSearchField", 1, "example-right-align"], ["matPrefix", ""], ["matSuffix", ""], ["matInput", "", "type", "number", "placeholder", "0", "formControlName", "valueSearchField2", 1, "example-right-align"]], template: function FilterCurrencyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterCurrencyComponent_Template_div_click_1_listener() { return ctx.close(ctx.headers); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FilterCurrencyComponent_Template_form_ngSubmit_6_listener() { return ctx.applyFilter(ctx.headers); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FilterCurrencyComponent_Template_mat_select_valueChange_8_listener($event) { return ctx.searchType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "No es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Es Menor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Es Mayor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Entre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Es Vacio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "No Es Vacio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FilterCurrencyComponent_mat_form_field_31_Template, 8, 0, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, FilterCurrencyComponent_mat_form_field_32_Template, 8, 0, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterCurrencyComponent_Template_button_click_34_listener() { return ctx.clearFilter(ctx.headers); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Limpiar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterCurrencyComponent_Template_button_click_36_listener() { return ctx.applyFilter(ctx.headers); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Aplicar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.headers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableRipple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.customHeaders, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form)("disableRipple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelClass", "mat-elevation-z10")("value", ctx.searchType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchType != 6 && ctx.searchType != 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchType == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableRipple", true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"]], styles: [".date-panel-filter[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 4px -1px #0003, 0 4px 5px 0 #00000024, 0 1px 10px 0 #0000001f;\n  width: 20em;\n}\n.date-panel-filter[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.date-panel-filter[_ngcontent-%COMP%]   .panel-close-modal[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpbHRlci1jdXJyZW5jeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtFQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0FBQ0o7QUFFRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQUFKIiwiZmlsZSI6ImZpbHRlci1jdXJyZW5jeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlLXBhbmVsLWZpbHRlciB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4ICMwMDAzLCAwIDRweCA1cHggMCAjMDAwMDAwMjQsIDAgMXB4IDEwcHggMCAjMDAwMDAwMWY7XG4gIHdpZHRoOiAyMGVtO1xuXG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wYW5lbC1jbG9zZS1tb2RhbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-login-login-module */ "pages-login-login-module").then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "F4UR")).then(m => m.LoginModule),
    }, {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-dashboard-dashboard-module */ "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./pages/dashboard/dashboard.module */ "/2RN")).then(m => m.DashboardModule),
        // canLoad: [IsLoggedGuard],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    }, {
        path: 'configuracion-proyectos',
        loadChildren: () => Promise.all(/*! import() | pages-project-settings-project-settings-module */[__webpack_require__.e("default~pages-data-load-data-load-module~pages-project-settings-project-settings-module"), __webpack_require__.e("pages-project-settings-project-settings-module")]).then(__webpack_require__.bind(null, /*! ./pages/project-settings/project-settings.module */ "vPOg")).then(m => m.ProjectSettingsModule),
        // canLoad: [IsLoggedGuard],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    },
    {
        path: 'tablas',
        children: [
            {
                path: 'legalizacion',
                loadChildren: () => Promise.all(/*! import() | pages-tables-legalizacion-legalizacion-module */[__webpack_require__.e("default~pages-audit-audit-module~pages-tables-legalizacion-legalizacion-module~pages-tables-legaliza~0d0d8a54"), __webpack_require__.e("default~pages-data-load-data-load-module~pages-tables-legalizacion-legalizacion-module~pages-tables-~eedcb9a9"), __webpack_require__.e("default~pages-tables-legalizacion-legalizacion-module~pages-tables-legalizacion-table-module"), __webpack_require__.e("pages-tables-legalizacion-legalizacion-module")]).then(__webpack_require__.bind(null, /*! ./pages/tables/legalizacion/legalizacion.module */ "HbWl")).then(m => m.LegalizacionModule),
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
            },
            {
                path: 'promesas',
                loadChildren: () => Promise.all(/*! import() | pages-tables-legalizacion-legalizacion-module */[__webpack_require__.e("default~pages-audit-audit-module~pages-tables-legalizacion-legalizacion-module~pages-tables-legaliza~0d0d8a54"), __webpack_require__.e("default~pages-data-load-data-load-module~pages-tables-legalizacion-legalizacion-module~pages-tables-~eedcb9a9"), __webpack_require__.e("default~pages-tables-legalizacion-legalizacion-module~pages-tables-legalizacion-table-module"), __webpack_require__.e("pages-tables-legalizacion-legalizacion-module")]).then(__webpack_require__.bind(null, /*! ./pages/tables/legalizacion/legalizacion.module */ "HbWl")).then(m => m.LegalizacionModule),
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
            },
            {
                path: 'subsidios',
                loadChildren: () => Promise.all(/*! import() | pages-tables-legalizacion-legalizacion-module */[__webpack_require__.e("default~pages-audit-audit-module~pages-tables-legalizacion-legalizacion-module~pages-tables-legaliza~0d0d8a54"), __webpack_require__.e("default~pages-data-load-data-load-module~pages-tables-legalizacion-legalizacion-module~pages-tables-~eedcb9a9"), __webpack_require__.e("default~pages-tables-legalizacion-legalizacion-module~pages-tables-legalizacion-table-module"), __webpack_require__.e("pages-tables-legalizacion-legalizacion-module")]).then(__webpack_require__.bind(null, /*! ./pages/tables/legalizacion/legalizacion.module */ "HbWl")).then(m => m.LegalizacionModule),
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
            },
            {
                path: 'segumientos-subsidio',
                loadChildren: () => Promise.all(/*! import() | pages-tables-legalizacion-legalizacion-module */[__webpack_require__.e("default~pages-audit-audit-module~pages-tables-legalizacion-legalizacion-module~pages-tables-legaliza~0d0d8a54"), __webpack_require__.e("default~pages-data-load-data-load-module~pages-tables-legalizacion-legalizacion-module~pages-tables-~eedcb9a9"), __webpack_require__.e("default~pages-tables-legalizacion-legalizacion-module~pages-tables-legalizacion-table-module"), __webpack_require__.e("pages-tables-legalizacion-legalizacion-module")]).then(__webpack_require__.bind(null, /*! ./pages/tables/legalizacion/legalizacion.module */ "HbWl")).then(m => m.LegalizacionModule),
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
            },
            {
                path: 'entregas',
                loadChildren: () => Promise.all(/*! import() | pages-tables-legalizacion-legalizacion-module */[__webpack_require__.e("default~pages-audit-audit-module~pages-tables-legalizacion-legalizacion-module~pages-tables-legaliza~0d0d8a54"), __webpack_require__.e("default~pages-data-load-data-load-module~pages-tables-legalizacion-legalizacion-module~pages-tables-~eedcb9a9"), __webpack_require__.e("default~pages-tables-legalizacion-legalizacion-module~pages-tables-legalizacion-table-module"), __webpack_require__.e("pages-tables-legalizacion-legalizacion-module")]).then(__webpack_require__.bind(null, /*! ./pages/tables/legalizacion/legalizacion.module */ "HbWl")).then(m => m.LegalizacionModule),
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
            },
            {
                path: 'desembolsos',
                loadChildren: () => Promise.all(/*! import() | pages-tables-legalizacion-legalizacion-module */[__webpack_require__.e("default~pages-audit-audit-module~pages-tables-legalizacion-legalizacion-module~pages-tables-legaliza~0d0d8a54"), __webpack_require__.e("default~pages-data-load-data-load-module~pages-tables-legalizacion-legalizacion-module~pages-tables-~eedcb9a9"), __webpack_require__.e("default~pages-tables-legalizacion-legalizacion-module~pages-tables-legalizacion-table-module"), __webpack_require__.e("pages-tables-legalizacion-legalizacion-module")]).then(__webpack_require__.bind(null, /*! ./pages/tables/legalizacion/legalizacion.module */ "HbWl")).then(m => m.LegalizacionModule),
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
            }, {
                path: 'recaudos',
                loadChildren: () => Promise.all(/*! import() | pages-tables-legalizacion-legalizacion-module */[__webpack_require__.e("default~pages-audit-audit-module~pages-tables-legalizacion-legalizacion-module~pages-tables-legaliza~0d0d8a54"), __webpack_require__.e("default~pages-data-load-data-load-module~pages-tables-legalizacion-legalizacion-module~pages-tables-~eedcb9a9"), __webpack_require__.e("default~pages-tables-legalizacion-legalizacion-module~pages-tables-legalizacion-table-module"), __webpack_require__.e("pages-tables-legalizacion-legalizacion-module")]).then(__webpack_require__.bind(null, /*! ./pages/tables/legalizacion/legalizacion.module */ "HbWl")).then(m => m.LegalizacionModule),
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
            }, {
                path: 'trazabilidad',
                loadChildren: () => Promise.all(/*! import() | pages-tables-legalizacion-legalizacion-module */[__webpack_require__.e("default~pages-audit-audit-module~pages-tables-legalizacion-legalizacion-module~pages-tables-legaliza~0d0d8a54"), __webpack_require__.e("default~pages-data-load-data-load-module~pages-tables-legalizacion-legalizacion-module~pages-tables-~eedcb9a9"), __webpack_require__.e("default~pages-tables-legalizacion-legalizacion-module~pages-tables-legalizacion-table-module"), __webpack_require__.e("pages-tables-legalizacion-legalizacion-module")]).then(__webpack_require__.bind(null, /*! ./pages/tables/legalizacion/legalizacion.module */ "HbWl")).then(m => m.LegalizacionModule),
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
            }, {
                path: 'ordenes',
                loadChildren: () => Promise.all(/*! import() | pages-tables-legalizacion-legalizacion-module */[__webpack_require__.e("default~pages-audit-audit-module~pages-tables-legalizacion-legalizacion-module~pages-tables-legaliza~0d0d8a54"), __webpack_require__.e("default~pages-data-load-data-load-module~pages-tables-legalizacion-legalizacion-module~pages-tables-~eedcb9a9"), __webpack_require__.e("default~pages-tables-legalizacion-legalizacion-module~pages-tables-legalizacion-table-module"), __webpack_require__.e("pages-tables-legalizacion-legalizacion-module")]).then(__webpack_require__.bind(null, /*! ./pages/tables/legalizacion/legalizacion.module */ "HbWl")).then(m => m.LegalizacionModule),
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
            }, {
                path: 'renovaciones',
                loadChildren: () => Promise.all(/*! import() | pages-tables-legalizacion-table-module */[__webpack_require__.e("default~pages-audit-audit-module~pages-tables-legalizacion-legalizacion-module~pages-tables-legaliza~0d0d8a54"), __webpack_require__.e("default~pages-data-load-data-load-module~pages-tables-legalizacion-legalizacion-module~pages-tables-~eedcb9a9"), __webpack_require__.e("default~pages-tables-legalizacion-legalizacion-module~pages-tables-legalizacion-table-module"), __webpack_require__.e("pages-tables-legalizacion-table-module")]).then(__webpack_require__.bind(null, /*! ./pages/tables/legalizacion/table.module */ "0bJX")).then(m => m.TableModule),
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
            }, {
                path: 'escrituracion',
                loadChildren: () => Promise.all(/*! import() | pages-tables-legalizacion-legalizacion-module */[__webpack_require__.e("default~pages-audit-audit-module~pages-tables-legalizacion-legalizacion-module~pages-tables-legaliza~0d0d8a54"), __webpack_require__.e("default~pages-data-load-data-load-module~pages-tables-legalizacion-legalizacion-module~pages-tables-~eedcb9a9"), __webpack_require__.e("default~pages-tables-legalizacion-legalizacion-module~pages-tables-legalizacion-table-module"), __webpack_require__.e("pages-tables-legalizacion-legalizacion-module")]).then(__webpack_require__.bind(null, /*! ./pages/tables/legalizacion/legalizacion.module */ "HbWl")).then(m => m.LegalizacionModule),
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
            }
        ]
    },
    {
        path: 'reporte/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-reports-reports-module */ "pages-reports-reports-module").then(__webpack_require__.bind(null, /*! ./pages/reports/reports.module */ "hEQw")).then(m => m.ReportsModule),
        // canLoad: [IsLoggedGuard],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    },
    {
        path: 'configuracion-roles',
        loadChildren: () => Promise.all(/*! import() | pages-user-roles-user-roles-module */[__webpack_require__.e("default~pages-audit-audit-module~pages-tables-legalizacion-legalizacion-module~pages-tables-legaliza~0d0d8a54"), __webpack_require__.e("pages-user-roles-user-roles-module")]).then(__webpack_require__.bind(null, /*! ./pages/user-roles/user-roles.module */ "/9PK")).then(m => m.UserRolesModule),
        // canLoad: [IsLoggedGuard],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    },
    {
        path: 'carga-informacion',
        loadChildren: () => Promise.all(/*! import() | pages-data-load-data-load-module */[__webpack_require__.e("default~pages-data-load-data-load-module~pages-tables-legalizacion-legalizacion-module~pages-tables-~eedcb9a9"), __webpack_require__.e("default~pages-data-load-data-load-module~pages-project-settings-project-settings-module"), __webpack_require__.e("pages-data-load-data-load-module")]).then(__webpack_require__.bind(null, /*! ./pages/data-load/data-load.module */ "/uwV")).then(m => m.DataLoadModule),
        // canLoad: [IsLoggedGuard],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    },
    {
        path: 'auditoria',
        loadChildren: () => Promise.all(/*! import() | pages-audit-audit-module */[__webpack_require__.e("default~pages-audit-audit-module~pages-tables-legalizacion-legalizacion-module~pages-tables-legaliza~0d0d8a54"), __webpack_require__.e("pages-audit-audit-module")]).then(__webpack_require__.bind(null, /*! ./pages/audit/audit.module */ "fzp+")).then(m => m.AuditModule),
        // canLoad: [IsLoggedGuard],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "x4GW":
/*!********************************************!*\
  !*** ./src/assets/json/campos_fechas.json ***!
  \********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"FechaSeguimientoCoordinador\",\"FechaSeguimientoAnalista\",\"FechaAsignacion\",\"FechaAsignacionVarado\",\"FechaDesvarado\",\"Fecha Cuota Inicial\",\"Fecha Progr FRE\",\"FechaConcre_FRE\",\"FechaPactada_ESFP\",\"FechaVenta\",\"FechaFactura\",\"FechaProgObra\",\"FechaProg_FREN\",\"FechaConcre_FREN\",\"CTO\",\"PYSP\",\"FVPS\",\"PZNO\",\"FirmaComprador_ESFP\",\"ESRN\",\"FGestionSubsidio\",\"F_GestionCredito\",\"VencimientoCredito_CRPA\",\"CreditoRatificado_CRAP\",\"VencimientoCredito\",\"SOLICITUD_AVALUO_SEAD\",\"SCC\",\"RECIBO DE CARTA COMPROMISO\",\"FirmaPCV_PRFI\",\"PYSCC_PZCC\",\"EnvioOrdenEscr_ESEO\",\"Entrega_FEPE\",\"CRSA\",\"CRAV\",\"ProyEntrega\",\"ProyEscritura\",\"SCR2\",\"SBAC\",\"RECEPCION_AVALUO_READ\",\"PETA\",\"PTIT\",\"RPH\",\"IDES AS BOLSA_DESISTIMIENTO_IDES\",\"FVPYS\",\"FechadeEntrega\",\"DESEMBOLSO_CREDITO_CRDS\",\"Fecha Notificacion Desembolso_CRDC\",\"FechaRadicacionCredito\",\"Envio_garantia_Banco\",\"FTramiteTrazabilidad\",\"PROGRAMACION_ENTREGA\",\"ENTREGA_INMUEBLE_FEPE\",\"FECHA_ENTREGA_OBRA_FEO\",\"ENVIO_EP_CIERRE_COPIA_ESNC\",\"FECHA_SALIDA_REGISTRO_FSR\",\"FECHA_INGRESO_REGISTRO_ESLC\",\"FIRMA_REP_LEGAL_BANCO_REFB\",\"ESCRITURA_LIBERACION_HIPOTECA_ESLL\",\"APROBACION_INICIAL_CREDITO_CRPA\",\"SubsidioAprobado_SBAP\",\"SubsidioAprobado2_SBA2\",\"SubsidioAprobadoSemilleroPropietarios_SASP\",\"SubsidioAprobadoConcurrente_SBAC\",\"SubsidioProrrogaConcurrente_SBC2\",\"SubsidioProrrogaSemillero2_SPS2\",\"NotifiDesemSubsidio_SBDC\",\"SDE2\",\"NotificacionDesemSubsidio3_SDE3\",\"DesembolsoSubsidio_SUDE\",\"RadicacionCobroSubsidio_SURC\",\"RadicacionCobroSubsidio2_SUR2\",\"RadicacionCobroSubsidio3_SUR3\",\"ENTREGA CERTIFICADOS HABITABILIDAD_ENCH\",\"FechaEstimadaDePyS\",\"FSAC\",\"FRAC\",\"FechaAcuerdoProximoPago\",\"Fecha Cuota Inicial1\",\"Negocios de riesgos IDES\",\"Radicacion Ahorro Programado APRP\",\"Radicación Cobro Cesantias RACE\",\"Fecha De radicacion de Crédito CRRA\",\"ENVI\",\"ELC2\",\"RCTC\",\"CTC\"]");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map