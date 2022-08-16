(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-project-settings-project-settings-module"], {
    /***/
    "bw9U":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/project-settings/project-settings.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ProjectSettingsComponent */

    /***/
    function bw9U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectSettingsComponent", function () {
        return ProjectSettingsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/app.component */
      "Sy1n");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_legalizacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/legalizacion.service */
      "7KSe");
      /* harmony import */


      var _shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/layout/layout/layout.component */
      "rqBn");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProjectSettingsComponent_mat_list_option_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectSettingsComponent_mat_list_option_15_Template_mat_list_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var project_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.onNgModelChange(project_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", project_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", project_r3.PRY_Nombre, " ");
        }
      }

      var ProjectSettingsComponent = /*#__PURE__*/function () {
        function ProjectSettingsComponent(_legalizacionService) {
          _classCallCheck(this, ProjectSettingsComponent);

          this._legalizacionService = _legalizacionService;
          this.projectList = [];
          this.originalProjectList = [];
          this.total = 0;
          this.totalActive = 0;
          this.projectActive = [];
        }

        _createClass(ProjectSettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].displayLoading = true;

            this._legalizacionService.getProjectSettings().subscribe(function (response) {
              console.log(response);
              _this.projectList = response.data;
              _this.originalProjectList = response.data;
              _this.total = _this.projectList.length;

              for (var index = 0; index < _this.projectList.length; index++) {
                var element = _this.projectList[index];

                if (element.STATUS) {
                  _this.projectActive.push(element);
                }
              }

              _this.totalActive = _this.projectActive.length;
              _this.selectedOptions = _this.projectActive;
              src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].displayLoading = false;
            }, function (err) {
              console.log(err);
              src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].displayLoading = false;
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter(evt) {
            this.projectActive = [];
            console.log('evt', evt);
            this.projectList = this.originalProjectList.filter(function (item) {
              return String(item.PRY_Nombre).toLowerCase().includes(String(evt).toLowerCase());
            });

            for (var index = 0; index < this.projectList.length; index++) {
              var element = this.projectList[index];

              if (element.STATUS) {
                this.projectActive.push(element);
              }
            }

            console.log('this.projectActive', this.projectActive);
            this.selectedOptions = this.projectActive;
          }
        }, {
          key: "onNgModelChange",
          value: function onNgModelChange(evt) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // console.log('onNgModelChange', evt);
                      src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].displayLoading = true;
                      evt.STATUS = !evt.STATUS;
                      console.log('onNgModelChange2', evt);
                      _context.next = 5;
                      return this._legalizacionService.updateProject(evt.PRY_ID, evt.PRY_Nombre, evt.STATUS ? 1 : 2).toPromise();

                    case 5:
                      src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].displayLoading = false; // console.log(this.projectActive.length + ' - ' + evt.length);
                      // if (this.projectActive.length < evt.length) {
                      //   let difference = evt.filter(x => !this.projectActive.includes(x));
                      //   difference = difference[0];
                      //   console.log(difference);
                      //   this.projectActive.push(difference);
                      //   await this._legalizacionService.updateProject(difference.PRY_ID, difference.PRY_Nombre, 1).toPromise();
                      // } else if (this.projectActive.length > evt.length) {
                      //   let difference: any = this.projectActive.filter(x => !evt.includes(x));
                      //   console.log(difference);
                      //   this.projectActive = this.projectActive.filter(item => !difference.includes(item))
                      //   difference = difference[0];
                      //   await this._legalizacionService.updateProject(difference.PRY_ID, difference.PRY_Nombre, 2).toPromise();
                      // }
                      // console.log(this.projectActive);
                      // AppComponent.displayLoading = false;

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ProjectSettingsComponent;
      }();

      ProjectSettingsComponent.ɵfac = function ProjectSettingsComponent_Factory(t) {
        return new (t || ProjectSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_legalizacion_service__WEBPACK_IMPORTED_MODULE_3__["LegalizacionService"]));
      };

      ProjectSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ProjectSettingsComponent,
        selectors: [["app-project-settings"]],
        decls: 16,
        vars: 5,
        consts: [[1, "content-panel"], ["appearance", "standard", 1, "input-filter"], ["matInput", "", "placeholder", "Escribe una palabra", 3, "ngModel", "ngModelChange"], ["input", ""], [3, "ngModel", "ngModelChange"], ["shoes", ""], ["checkboxPosition", "before", 3, "value", "click", 4, "ngFor", "ngForOf"], ["checkboxPosition", "before", 3, "value", "click"]],
        template: function ProjectSettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Filtro");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProjectSettingsComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.searchText = $event;
            })("ngModelChange", function ProjectSettingsComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.onFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Proyectos");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-selection-list", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProjectSettingsComponent_Template_mat_selection_list_ngModelChange_13_listener($event) {
              return ctx.selectedOptions = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ProjectSettingsComponent_mat_list_option_15_Template, 2, 2, "mat-list-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchText);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Total: ", ctx.total, " Activos: ", ctx.totalActive, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.projectList);
          }
        },
        directives: [_shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListOption"]],
        styles: [".content-panel[_ngcontent-%COMP%] {\n  padding: 2em;\n  height: 100%;\n}\n.content-panel[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  height: auto;\n  margin-bottom: 6em;\n}\n.content-panel[_ngcontent-%COMP%]   .save-content[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 99;\n  bottom: 2em;\n  right: 2em;\n}\n.content-panel[_ngcontent-%COMP%]   .save-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #fee350;\n}\n.content-panel[_ngcontent-%COMP%]   .save-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #048c44;\n}\n.content-panel[_ngcontent-%COMP%]   .input-filter[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3Qtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUFKO0FBRUk7RUFDRSx5QkFBQTtBQUFOO0FBRU07RUFDRSxjQUFBO0FBQVI7QUFLRTtFQUNFLFdBQUE7QUFISiIsImZpbGUiOiJwcm9qZWN0LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtcGFuZWwge1xuICBwYWRkaW5nOiAyZW07XG4gIGhlaWdodDogMTAwJTtcblxuICBtYXQtY2FyZCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDZlbTtcbiAgfVxuXG4gIC5zYXZlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBib3R0b206IDJlbTtcbiAgICByaWdodDogMmVtO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWUzNTA7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6ICMwNDhjNDQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmlucHV0LWZpbHRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "eRaW":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/project-settings/project-settings-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ProjectSettingsRoutingModule */

    /***/
    function eRaW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectSettingsRoutingModule", function () {
        return ProjectSettingsRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _project_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./project-settings.component */
      "bw9U");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _project_settings_component__WEBPACK_IMPORTED_MODULE_1__["ProjectSettingsComponent"]
      }];

      var ProjectSettingsRoutingModule = /*#__PURE__*/_createClass(function ProjectSettingsRoutingModule() {
        _classCallCheck(this, ProjectSettingsRoutingModule);
      });

      ProjectSettingsRoutingModule.ɵfac = function ProjectSettingsRoutingModule_Factory(t) {
        return new (t || ProjectSettingsRoutingModule)();
      };

      ProjectSettingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: ProjectSettingsRoutingModule
      });
      ProjectSettingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProjectSettingsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "vPOg":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/project-settings/project-settings.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ProjectSettingsModule */

    /***/
    function vPOg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectSettingsModule", function () {
        return ProjectSettingsModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _project_settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./project-settings-routing.module */
      "eRaW");
      /* harmony import */


      var _project_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./project-settings.component */
      "bw9U");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_legalizacion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/legalizacion.service */
      "7KSe");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProjectSettingsModule = /*#__PURE__*/_createClass(function ProjectSettingsModule() {
        _classCallCheck(this, ProjectSettingsModule);
      });

      ProjectSettingsModule.ɵfac = function ProjectSettingsModule_Factory(t) {
        return new (t || ProjectSettingsModule)();
      };

      ProjectSettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: ProjectSettingsModule
      });
      ProjectSettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        providers: [src_app_services_legalizacion_service__WEBPACK_IMPORTED_MODULE_7__["LegalizacionService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _project_settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectSettingsRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ProjectSettingsModule, {
          declarations: [_project_settings_component__WEBPACK_IMPORTED_MODULE_3__["ProjectSettingsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _project_settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectSettingsRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-project-settings-project-settings-module-es5.js.map