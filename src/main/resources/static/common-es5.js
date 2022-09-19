(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "NjGU":
    /*!**************************************************************!*\
      !*** ./src/app/pages/tables/legalizacion/customerservice.ts ***!
      \**************************************************************/

    /*! exports provided: CustomerService */

    /***/
    function NjGU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
        return CustomerService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CustomerService = /*#__PURE__*/function () {
        function CustomerService(http) {
          _classCallCheck(this, CustomerService);

          this.http = http;
        }

        _createClass(CustomerService, [{
          key: "getCustomersLarge",
          value: function getCustomersLarge() {
            return this.http.get('assets/customers-large.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return CustomerService;
      }();

      CustomerService.ɵfac = function CustomerService_Factory(t) {
        return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CustomerService,
        factory: CustomerService.ɵfac
      });
      /***/
    },

    /***/
    "UXtv":
    /*!********************************************!*\
      !*** ./src/app/services/excel.services.ts ***!
      \********************************************/

    /*! exports provided: ExcelExportService */

    /***/
    function UXtv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExcelExportService", function () {
        return ExcelExportService;
      });
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! xlsx */
      "JcrP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _utils_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utils.services */
      "HZWf");
      /* harmony import */


      var _table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./table.service */
      "TQws");

      var EXCEL_EXTENSION = '.xlsx';
      var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'; // import * as campos_fechas from 'src/assets/json/campos_fechas.json';

      var ExcelExportService = /*#__PURE__*/function () {
        function ExcelExportService(_utilsService, _tableService) {
          _classCallCheck(this, ExcelExportService);

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

        _createClass(ExcelExportService, [{
          key: "exportAsExcelFile",
          value: function exportAsExcelFile(json, excelFileName, reportType) {
            var _this = this;

            console.log('contendio a exportar reportType', reportType);
            json = json.map(function (element) {
              var keys = Object.keys(element); // console.log(keys);

              if (keys.length > 0) {
                keys.forEach(function (key) {
                  // console.log(key);
                  // element[key] = evt[key];
                  if (_this.isColumnDate(key) && element[key] != null) {
                    var fechaFormat = new Date(element[key]);
                    element[key] = (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate()) + '-' + (fechaFormat.getMonth() < 9 ? '0' + (fechaFormat.getMonth() + 1) : fechaFormat.getMonth() + 1) + '-' + fechaFormat.getFullYear();
                  }
                });
              }

              return element;
            });

            this._tableService.getHeaders(reportType.toString()).subscribe(function (data) {
              data = data.data;
              var headers = [];

              for (var index = 0; index < data.length; index++) {
                var element = data[index];

                if (element != 'UNI_ID' && element != 'VTA_ID' && element != 'PRY_ID') {
                  headers.push(element);
                }
              }

              console.log('####headerssss ', headers);
              var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].json_to_sheet(json, {
                header: headers
              });
              var workbook = {
                Sheets: {
                  'Sheet1': worksheet
                },
                SheetNames: ['Sheet1']
              };
              var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_1__["write"](workbook, {
                bookType: 'xlsx',
                type: 'array'
              });

              _this.saveAsExcelFile(excelBuffer, excelFileName);
            }, function (err) {
              console.log('####headerssss ', err);
            });
          }
        }, {
          key: "saveAsExcelFile",
          value: function saveAsExcelFile(buffer, fileName) {
            var data = new Blob([buffer], {
              type: EXCEL_TYPE
            });
            file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
          }
        }, {
          key: "isColumnDate",
          value: function isColumnDate(name) {
            for (var index = 0; index < this._utilsService.camposFecha.length; index++) {
              var element = this._utilsService.camposFecha[index];

              if (element == name) {
                return true;
              }
            }

            return false;
          }
        }]);

        return ExcelExportService;
      }();

      ExcelExportService.ɵfac = function ExcelExportService_Factory(t) {
        return new (t || ExcelExportService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_utils_services__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"]));
      };

      ExcelExportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ExcelExportService,
        factory: ExcelExportService.ɵfac
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map