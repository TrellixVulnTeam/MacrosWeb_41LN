(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "D8EZ":
    /*!************************************************!*\
      !*** ./src/app/pages/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function D8EZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/app.component */
      "Sy1n");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_legalizacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/legalizacion.service */
      "7KSe");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function LoginComponent_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Por favor ingrese un nombre de usuario");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Por favor ingrese su contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(_legalizacionService, formBuilder, _router) {
          _classCallCheck(this, LoginComponent);

          this._legalizacionService = _legalizacionService;
          this.formBuilder = formBuilder;
          this._router = _router;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
          }
        }, {
          key: "login",
          value: function login() {
            var _this = this;

            var userName = this.form.controls['user'].value;
            var password = this.form.controls['password'].value;
            src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].displayLoading = true;

            this._legalizacionService.login(userName, password).subscribe(function (responde) {
              console.log('responde', responde);

              if (responde.code == '0') {
                localStorage.setItem('token', responde.data);
                var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(responde.data);
                localStorage.setItem('role', decoded.role);

                _this._router.navigate(['/dashboard']);
              } else {
                _this.errorText = "Credenciales incorrectas";
              }

              src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].displayLoading = false;
            }, function (error) {
              console.log('error', error);
              _this.errorText = "Credenciales incorrectas";
              src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].displayLoading = false;
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_legalizacion_service__WEBPACK_IMPORTED_MODULE_4__["LegalizacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 28,
        vars: 5,
        consts: [[1, "main-container"], [1, "container"], ["type", "checkbox", "id", "flip"], [1, "cover"], [1, "front"], ["src", "./assets/img/login.png", "alt", ""], [1, "forms"], [1, "form-content"], [1, "login-form"], [1, "title"], [3, "formGroup", "ngSubmit"], [1, "input-boxes"], [1, "errorText"], ["appearance", "fill", 1, "loginInput"], ["matInput", "", "type", "text", "placeholder", "Usuario", "formControlName", "user", "required", ""], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Contrase\xF1a", "formControlName", "password", "required", ""], [1, "button", "input-box"], ["type", "submit", "mat-raised-button", "", 3, "disabled"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Iniciar Sesion");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-form-field", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Usuario");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, LoginComponent_mat_error_19_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-form-field", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Contrase\xF1a");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, LoginComponent_mat_error_24_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Entrar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.errorText);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("user").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("password").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.form.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
        styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\");\n\n.main-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #008c45;\n  padding: 30px;\n}\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 850px;\n  width: 100%;\n  background: #fff;\n  padding: 40px 30px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  perspective: 2700px;\n}\n.container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 100%;\n  width: 50%;\n  z-index: 98;\n  transition: all 1s ease;\n  transform-origin: left;\n  transform-style: preserve-3d;\n}\n.container[_ngcontent-%COMP%]   #flip[_ngcontent-%COMP%]:checked    ~ .cover[_ngcontent-%COMP%] {\n  transform: rotateY(-180deg);\n}\n.container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.cover[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]::before, .container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: #008c45;\n  opacity: 0;\n  z-index: 12;\n}\n.container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  z-index: 10;\n}\n.container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 130;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.cover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .text-1[_ngcontent-%COMP%], .cover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .text-2[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 600;\n  color: #fff;\n  text-align: center;\n}\n.cover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .text-2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n}\n.container[_ngcontent-%COMP%]   .forms[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background: #fff;\n}\n.container[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%], .form-content[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%] {\n  width: calc(100% / 2 - 25px);\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 24px;\n  font-weight: 500;\n  color: #333;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 3px;\n  width: 25px;\n  background: #008c45;\n}\n.forms[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n  width: 20px;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .input-boxes[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 50px;\n  width: 100%;\n  margin: 10px 0;\n  position: relative;\n}\n.form-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  border: none;\n  padding: 0 30px;\n  font-size: 16px;\n  font-weight: 500;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  background-color: #008c45;\n  color: white;\n}\n.form-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .mat-raised-button.mat-button-disabled[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12) !important;\n  color: black !important;\n}\n.form-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #008c45;\n  font-size: 17px;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #333;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: 40px;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #008c45;\n  border-radius: 6px;\n  padding: 0;\n  cursor: pointer;\n  transition: all 0.4s ease;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  background: #5b13b9;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #5b13b9;\n  cursor: pointer;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .login-text[_ngcontent-%COMP%], .forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .sign-up-text[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n}\n.container[_ngcontent-%COMP%]   #flip[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 730px) {\n  .container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .form-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%], .form-content[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .form-content[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .container[_ngcontent-%COMP%]   #flip[_ngcontent-%COMP%]:checked    ~ .forms[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .container[_ngcontent-%COMP%]   #flip[_ngcontent-%COMP%]:checked    ~ .forms[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.loginInput[_ngcontent-%COMP%] {\n  width: 100%;\n}\n  .mat-input-element {\n  caret-color: red !important;\n}\n.errorText[_ngcontent-%COMP%] {\n  width: 100%;\n  color: red;\n  text-align: center;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDUSx5R0FBQTtBQURSLHFCQUFBO0FBVUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBUEY7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7QUFQRjtBQVVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQVBGO0FBVUE7RUFDRSwyQkFBQTtBQVBGO0FBVUE7O0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUEY7QUFVQTtFQUNFLDBCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQVBGO0FBVUE7O0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0FBUkY7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7QUFkRjtBQWlCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWRGO0FBaUJBOztFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWRGO0FBaUJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBZEY7QUFpQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBZEY7QUFpQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQWRGO0FBaUJBOztFQUVFLDRCQUFBO0FBZEY7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFkRjtBQWlCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQWRGO0FBaUJBO0VBQ0UsV0FBQTtBQWRGO0FBaUJBO0VBQ0UsZ0JBQUE7QUFkRjtBQWlCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZEY7QUFpQkE7O0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBZEY7QUFrQkE7RUFDRSxnREFBQTtFQUNBLHVCQUFBO0FBZkY7QUF1QkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBcEJGO0FBdUJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQXBCRjtBQXVCQTtFQUNFLHFCQUFBO0FBcEJGO0FBdUJBO0VBQ0UsMEJBQUE7QUFwQkY7QUF1QkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFwQkY7QUF1QkE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFwQkY7QUF1QkE7RUFDRSxtQkFBQTtBQXBCRjtBQXVCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBcEJGO0FBdUJBO0VBQ0UsMEJBQUE7QUFwQkY7QUF1QkE7O0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtBQXBCRjtBQXVCQTtFQUNFLGFBQUE7QUFwQkY7QUF1QkE7RUFDRTtJQUNFLGFBQUE7RUFwQkY7O0VBdUJBOztJQUVFLFdBQUE7RUFwQkY7O0VBdUJBO0lBQ0UsYUFBQTtFQXBCRjs7RUF1QkE7SUFDRSxjQUFBO0VBcEJGOztFQXVCQTtJQUNFLGFBQUE7RUFwQkY7QUFDRjtBQXVCQTtFQUNFLFdBQUE7QUFyQkY7QUF3QkE7RUFDRSwyQkFBQTtBQXJCRjtBQXdCQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQXJCRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdvb2dsZSBGb250IExpbmsgKi9cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcblxuLy8gKiB7XG4vLyAgIG1hcmdpbjogMDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuLy8gfVxuXG4ubWFpbi1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDhjNDU7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogODUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA0MHB4IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwZXJzcGVjdGl2ZTogMjcwMHB4O1xufVxuXG4uY29udGFpbmVyIC5jb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDUwJTtcbiAgei1pbmRleDogOTg7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG4uY29udGFpbmVyICNmbGlwOmNoZWNrZWR+LmNvdmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xufVxuXG4uY29udGFpbmVyIC5jb3ZlciAuZnJvbnQsXG4uY29udGFpbmVyIC5jb3ZlciAuYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY292ZXIgLmJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY29udGFpbmVyIC5jb3Zlcjo6YmVmb3JlLFxuLmNvbnRhaW5lciAuY292ZXI6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwOGM0NTtcbiAgLy8gb3BhY2l0eTogMC41O1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxMjtcbn1cblxuLmNvbnRhaW5lciAuY292ZXI6OmFmdGVyIHtcbiAgLy8gb3BhY2l0eTogMC4zO1xuICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgLy8gYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY29udGFpbmVyIC5jb3ZlciBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmNvbnRhaW5lciAuY292ZXIgLnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEzMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb3ZlciAudGV4dCAudGV4dC0xLFxuLmNvdmVyIC50ZXh0IC50ZXh0LTIge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb3ZlciAudGV4dCAudGV4dC0yIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29udGFpbmVyIC5mb3JtcyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jb250YWluZXIgLmZvcm0tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZvcm0tY29udGVudCAubG9naW4tZm9ybSxcbi5mb3JtLWNvbnRlbnQgLnNpZ251cC1mb3JtIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDIgLSAyNXB4KTtcbn1cblxuLmZvcm1zIC5mb3JtLWNvbnRlbnQgLnRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZm9ybXMgLmZvcm0tY29udGVudCAudGl0bGU6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDhjNDU7XG59XG5cbi5mb3JtcyAuc2lnbnVwLWZvcm0gLnRpdGxlOmJlZm9yZSB7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4uZm9ybXMgLmZvcm0tY29udGVudCAuaW5wdXQtYm94ZXMge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uZm9ybXMgLmZvcm0tY29udGVudCAuaW5wdXQtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvcm0tY29udGVudCAuaW5wdXQtYm94IGlucHV0LFxuLmZvcm0tY29udGVudCAuaW5wdXQtYm94IGJ1dHRvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhjNDU7XG4gIGNvbG9yOiB3aGl0ZTtcblxufVxuXG4uZm9ybS1jb250ZW50IC5pbnB1dC1ib3ggIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4vLyAuZm9ybS1jb250ZW50IC5pbnB1dC1ib3ggaW5wdXQ6Zm9jdXMsXG4vLyAuZm9ybS1jb250ZW50IC5pbnB1dC1ib3ggaW5wdXQ6dmFsaWQge1xuLy8gICBib3JkZXItY29sb3I6ICMwMDhjNDU7XG4vLyB9XG5cbi5mb3JtLWNvbnRlbnQgLmlucHV0LWJveCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogIzAwOGM0NTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uZm9ybXMgLmZvcm0tY29udGVudCAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5mb3JtcyAuZm9ybS1jb250ZW50IC50ZXh0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3JtcyAuZm9ybS1jb250ZW50IC50ZXh0IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmZvcm1zIC5mb3JtLWNvbnRlbnQgLmJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uZm9ybXMgLmZvcm0tY29udGVudCAuYnV0dG9uIGlucHV0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDhjNDU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xufVxuXG4uZm9ybXMgLmZvcm0tY29udGVudCAuYnV0dG9uIGlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzViMTNiOTtcbn1cblxuLmZvcm1zIC5mb3JtLWNvbnRlbnQgbGFiZWwge1xuICBjb2xvcjogIzViMTNiOTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybXMgLmZvcm0tY29udGVudCBsYWJlbDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZm9ybXMgLmZvcm0tY29udGVudCAubG9naW4tdGV4dCxcbi5mb3JtcyAuZm9ybS1jb250ZW50IC5zaWduLXVwLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5jb250YWluZXIgI2ZsaXAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzMwcHgpIHtcbiAgLmNvbnRhaW5lciAuY292ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZm9ybS1jb250ZW50IC5sb2dpbi1mb3JtLFxuICAuZm9ybS1jb250ZW50IC5zaWdudXAtZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZm9ybS1jb250ZW50IC5zaWdudXAtZm9ybSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jb250YWluZXIgI2ZsaXA6Y2hlY2tlZH4uZm9ybXMgLnNpZ251cC1mb3JtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jb250YWluZXIgI2ZsaXA6Y2hlY2tlZH4uZm9ybXMgLmxvZ2luLWZvcm0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmxvZ2luSW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNhcmV0LWNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLmVycm9yVGV4dHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "F4UR":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginModule */

    /***/
    function F4UR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
        return LoginModule;
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


      var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component */
      "D8EZ");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login-routing.module */
      "aTZN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var src_app_services_legalizacion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/legalizacion.service */
      "7KSe");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoginModule = /*#__PURE__*/_createClass(function LoginModule() {
        _classCallCheck(this, LoginModule);
      });

      LoginModule.ɵfac = function LoginModule_Factory(t) {
        return new (t || LoginModule)();
      };

      LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: LoginModule
      });
      LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        providers: [src_app_services_legalizacion_service__WEBPACK_IMPORTED_MODULE_8__["LegalizacionService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](LoginModule, {
          declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]]
        });
      })();
      /***/

    },

    /***/
    "aTZN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginRoutingModule */

    /***/
    function aTZN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
        return LoginRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.component */
      "D8EZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
      }];

      var LoginRoutingModule = /*#__PURE__*/_createClass(function LoginRoutingModule() {
        _classCallCheck(this, LoginRoutingModule);
      });

      LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) {
        return new (t || LoginRoutingModule)();
      };

      LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: LoginRoutingModule
      });
      LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map