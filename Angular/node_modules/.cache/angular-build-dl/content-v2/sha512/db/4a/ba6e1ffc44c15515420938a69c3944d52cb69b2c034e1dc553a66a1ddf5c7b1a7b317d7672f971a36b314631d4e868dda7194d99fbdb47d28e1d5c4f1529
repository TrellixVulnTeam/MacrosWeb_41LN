(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "JcrP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.services */ "HZWf");
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table.service */ "TQws");





const EXCEL_EXTENSION = '.xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
// import * as campos_fechas from 'src/assets/json/campos_fechas.json';
class ExcelExportService {
    constructor(_utilsService, _tableService) {
        this._utilsService = _utilsService;
        this._tableService = _tableService;
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
        this._tableService.getHeaders(reportType.toString())
            .subscribe((data) => {
            data = data.data;
            let headers = [];
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                if (element != 'UNI_ID' && element != 'VTA_ID' && element != 'PRY_ID') {
                    headers.push(element);
                }
            }
            console.log('####headerssss ', headers);
            const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].json_to_sheet(json, { header: headers });
            const workbook = { Sheets: { 'Sheet1': worksheet }, SheetNames: ['Sheet1'] };
            const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_1__["write"](workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, excelFileName);
        }, err => {
            console.log('####headerssss ', err);
        });
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
ExcelExportService.ɵfac = function ExcelExportService_Factory(t) { return new (t || ExcelExportService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_utils_services__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"])); };
ExcelExportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ExcelExportService, factory: ExcelExportService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map