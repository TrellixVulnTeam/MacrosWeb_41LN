(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_legalizacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/legalizacion.service */ "7KSe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function LoginComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Por favor ingrese un nombre de usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Por favor ingrese su contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(_legalizacionService, formBuilder, _router) {
        this._legalizacionService = _legalizacionService;
        this.formBuilder = formBuilder;
        this._router = _router;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    }
    login() {
        let userName = this.form.controls['user'].value;
        let password = this.form.controls['password'].value;
        src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].displayLoading = true;
        this._legalizacionService.login(userName, password)
            .subscribe((responde) => {
            console.log('responde', responde);
            if (responde.code == '0') {
                localStorage.setItem('token', responde.data);
                var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(responde.data);
                localStorage.setItem('role', decoded.role);
                this._router.navigate(['/dashboard']);
            }
            else {
                this.errorText = "Credenciales incorrectas";
            }
            src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].displayLoading = false;
        }, error => {
            console.log('error', error);
            this.errorText = "Credenciales incorrectas";
            src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].displayLoading = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_legalizacion_service__WEBPACK_IMPORTED_MODULE_4__["LegalizacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 28, vars: 5, consts: [[1, "main-container"], [1, "container"], ["type", "checkbox", "id", "flip"], [1, "cover"], [1, "front"], ["src", "./assets/img/login.png", "alt", ""], [1, "forms"], [1, "form-content"], [1, "login-form"], [1, "title"], [3, "formGroup", "ngSubmit"], [1, "input-boxes"], [1, "errorText"], ["appearance", "fill", 1, "loginInput"], ["matInput", "", "type", "text", "placeholder", "Usuario", "formControlName", "user", "required", ""], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Contrase\u00F1a", "formControlName", "password", "required", ""], [1, "button", "input-box"], ["type", "submit", "mat-raised-button", "", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() { return ctx.login(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Contrase\u00F1a");
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
    } if (rf & 2) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\");\n\n.main-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #008c45;\n  padding: 30px;\n}\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 850px;\n  width: 100%;\n  background: #fff;\n  padding: 40px 30px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  perspective: 2700px;\n}\n.container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 100%;\n  width: 50%;\n  z-index: 98;\n  transition: all 1s ease;\n  transform-origin: left;\n  transform-style: preserve-3d;\n}\n.container[_ngcontent-%COMP%]   #flip[_ngcontent-%COMP%]:checked    ~ .cover[_ngcontent-%COMP%] {\n  transform: rotateY(-180deg);\n}\n.container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.cover[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]::before, .container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: #008c45;\n  opacity: 0;\n  z-index: 12;\n}\n.container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  z-index: 10;\n}\n.container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 130;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.cover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .text-1[_ngcontent-%COMP%], .cover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .text-2[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 600;\n  color: #fff;\n  text-align: center;\n}\n.cover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .text-2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n}\n.container[_ngcontent-%COMP%]   .forms[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background: #fff;\n}\n.container[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%], .form-content[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%] {\n  width: calc(100% / 2 - 25px);\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 24px;\n  font-weight: 500;\n  color: #333;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 3px;\n  width: 25px;\n  background: #008c45;\n}\n.forms[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n  width: 20px;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .input-boxes[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 50px;\n  width: 100%;\n  margin: 10px 0;\n  position: relative;\n}\n.form-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  border: none;\n  padding: 0 30px;\n  font-size: 16px;\n  font-weight: 500;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  background-color: #008c45;\n  color: white;\n}\n.form-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .mat-raised-button.mat-button-disabled[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12) !important;\n  color: black !important;\n}\n.form-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #008c45;\n  font-size: 17px;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #333;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: 40px;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #008c45;\n  border-radius: 6px;\n  padding: 0;\n  cursor: pointer;\n  transition: all 0.4s ease;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  background: #5b13b9;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #5b13b9;\n  cursor: pointer;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .login-text[_ngcontent-%COMP%], .forms[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .sign-up-text[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n}\n.container[_ngcontent-%COMP%]   #flip[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 730px) {\n  .container[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .form-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%], .form-content[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .form-content[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .container[_ngcontent-%COMP%]   #flip[_ngcontent-%COMP%]:checked    ~ .forms[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .container[_ngcontent-%COMP%]   #flip[_ngcontent-%COMP%]:checked    ~ .forms[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.loginInput[_ngcontent-%COMP%] {\n  width: 100%;\n}\n  .mat-input-element {\n  caret-color: red !important;\n}\n.errorText[_ngcontent-%COMP%] {\n  width: 100%;\n  color: red;\n  text-align: center;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDUSx5R0FBQTtBQURSLHFCQUFBO0FBVUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBUEY7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7QUFQRjtBQVVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQVBGO0FBVUE7RUFDRSwyQkFBQTtBQVBGO0FBVUE7O0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUEY7QUFVQTtFQUNFLDBCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQVBGO0FBVUE7O0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0FBUkY7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBZEY7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFkRjtBQWlCQTs7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFkRjtBQWlCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQWRGO0FBaUJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWRGO0FBaUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFkRjtBQWlCQTs7RUFFRSw0QkFBQTtBQWRGO0FBaUJBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBZEY7QUFpQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFkRjtBQWlCQTtFQUNFLFdBQUE7QUFkRjtBQWlCQTtFQUNFLGdCQUFBO0FBZEY7QUFpQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWRGO0FBaUJBOztFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQWRGO0FBa0JBO0VBQ0UsZ0RBQUE7RUFDQSx1QkFBQTtBQWZGO0FBdUJBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXBCRjtBQXVCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFwQkY7QUF1QkE7RUFDRSxxQkFBQTtBQXBCRjtBQXVCQTtFQUNFLDBCQUFBO0FBcEJGO0FBdUJBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBcEJGO0FBdUJBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBcEJGO0FBdUJBO0VBQ0UsbUJBQUE7QUFwQkY7QUF1QkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQXBCRjtBQXVCQTtFQUNFLDBCQUFBO0FBcEJGO0FBdUJBOztFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFwQkY7QUF1QkE7RUFDRSxhQUFBO0FBcEJGO0FBdUJBO0VBQ0U7SUFDRSxhQUFBO0VBcEJGOztFQXVCQTs7SUFFRSxXQUFBO0VBcEJGOztFQXVCQTtJQUNFLGFBQUE7RUFwQkY7O0VBdUJBO0lBQ0UsY0FBQTtFQXBCRjs7RUF1QkE7SUFDRSxhQUFBO0VBcEJGO0FBQ0Y7QUF1QkE7RUFDRSxXQUFBO0FBckJGO0FBd0JBO0VBQ0UsMkJBQUE7QUFyQkY7QUF3QkE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFyQkYiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHb29nbGUgRm9udCBMaW5rICovXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8vICoge1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbi8vIH1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMDA4YzQ1O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDg1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNDBweCAzMHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcGVyc3BlY3RpdmU6IDI3MDBweDtcbn1cblxuLmNvbnRhaW5lciAuY292ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1MCU7XG4gIHotaW5kZXg6IDk4O1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmNvbnRhaW5lciAjZmxpcDpjaGVja2Vkfi5jb3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcbn1cblxuLmNvbnRhaW5lciAuY292ZXIgLmZyb250LFxuLmNvbnRhaW5lciAuY292ZXIgLmJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvdmVyIC5iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lciAuY292ZXI6OmJlZm9yZSxcbi5jb250YWluZXIgLmNvdmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDhjNDU7XG4gIC8vIG9wYWNpdHk6IDAuNTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTI7XG59XG5cbi5jb250YWluZXIgLmNvdmVyOjphZnRlciB7XG4gIC8vIG9wYWNpdHk6IDAuMztcbiAgLy8gdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIC8vIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lciAuY292ZXIgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jb250YWluZXIgLmNvdmVyIC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMzA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY292ZXIgLnRleHQgLnRleHQtMSxcbi5jb3ZlciAudGV4dCAudGV4dC0yIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY292ZXIgLnRleHQgLnRleHQtMiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNvbnRhaW5lciAuZm9ybXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY29udGFpbmVyIC5mb3JtLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5mb3JtLWNvbnRlbnQgLmxvZ2luLWZvcm0sXG4uZm9ybS1jb250ZW50IC5zaWdudXAtZm9ybSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyAyIC0gMjVweCk7XG59XG5cbi5mb3JtcyAuZm9ybS1jb250ZW50IC50aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmZvcm1zIC5mb3JtLWNvbnRlbnQgLnRpdGxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDA4YzQ1O1xufVxuXG4uZm9ybXMgLnNpZ251cC1mb3JtIC50aXRsZTpiZWZvcmUge1xuICB3aWR0aDogMjBweDtcbn1cblxuLmZvcm1zIC5mb3JtLWNvbnRlbnQgLmlucHV0LWJveGVzIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmZvcm1zIC5mb3JtLWNvbnRlbnQgLmlucHV0LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtLWNvbnRlbnQgLmlucHV0LWJveCBpbnB1dCxcbi5mb3JtLWNvbnRlbnQgLmlucHV0LWJveCBidXR0b24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YzQ1O1xuICBjb2xvcjogd2hpdGU7XG5cbn1cblxuLmZvcm0tY29udGVudCAuaW5wdXQtYm94ICAubWF0LXJhaXNlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLy8gLmZvcm0tY29udGVudCAuaW5wdXQtYm94IGlucHV0OmZvY3VzLFxuLy8gLmZvcm0tY29udGVudCAuaW5wdXQtYm94IGlucHV0OnZhbGlkIHtcbi8vICAgYm9yZGVyLWNvbG9yOiAjMDA4YzQ1O1xuLy8gfVxuXG4uZm9ybS1jb250ZW50IC5pbnB1dC1ib3ggaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICMwMDhjNDU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmZvcm1zIC5mb3JtLWNvbnRlbnQgLnRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZm9ybXMgLmZvcm0tY29udGVudCAudGV4dCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9ybXMgLmZvcm0tY29udGVudCAudGV4dCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5mb3JtcyAuZm9ybS1jb250ZW50IC5idXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmZvcm1zIC5mb3JtLWNvbnRlbnQgLmJ1dHRvbiBpbnB1dCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDA4YzQ1O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbn1cblxuLmZvcm1zIC5mb3JtLWNvbnRlbnQgLmJ1dHRvbiBpbnB1dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1YjEzYjk7XG59XG5cbi5mb3JtcyAuZm9ybS1jb250ZW50IGxhYmVsIHtcbiAgY29sb3I6ICM1YjEzYjk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm1zIC5mb3JtLWNvbnRlbnQgbGFiZWw6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmZvcm1zIC5mb3JtLWNvbnRlbnQgLmxvZ2luLXRleHQsXG4uZm9ybXMgLmZvcm0tY29udGVudCAuc2lnbi11cC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uY29udGFpbmVyICNmbGlwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDczMHB4KSB7XG4gIC5jb250YWluZXIgLmNvdmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZvcm0tY29udGVudCAubG9naW4tZm9ybSxcbiAgLmZvcm0tY29udGVudCAuc2lnbnVwLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmZvcm0tY29udGVudCAuc2lnbnVwLWZvcm0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY29udGFpbmVyICNmbGlwOmNoZWNrZWR+LmZvcm1zIC5zaWdudXAtZm9ybSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuY29udGFpbmVyICNmbGlwOmNoZWNrZWR+LmZvcm1zIC5sb2dpbi1mb3JtIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5sb2dpbklucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvclRleHR7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "D8EZ");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var src_app_services_legalizacion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/legalizacion.service */ "7KSe");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
        src_app_services_legalizacion_service__WEBPACK_IMPORTED_MODULE_8__["LegalizacionService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]] }); })();


/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "D8EZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }
];
class LoginRoutingModule {
}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); };
LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map