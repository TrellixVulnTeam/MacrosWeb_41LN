(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reports-reports-module"],{

/***/ "CZYL":
/*!*********************************************************!*\
  !*** ./src/app/pages/reports/reports-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.component */ "qzPY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_1__["ReportsComponent"]
    }
];
class ReportsRoutingModule {
}
ReportsRoutingModule.ɵfac = function ReportsRoutingModule_Factory(t) { return new (t || ReportsRoutingModule)(); };
ReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ReportsRoutingModule });
ReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "hEQw":
/*!*************************************************!*\
  !*** ./src/app/pages/reports/reports.module.ts ***!
  \*************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.component */ "qzPY");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-routing.module */ "CZYL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "iTUp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class ReportsModule {
}
ReportsModule.ɵfac = function ReportsModule_Factory(t) { return new (t || ReportsModule)(); };
ReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ReportsModule });
ReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ReportsModule, { declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_1__["ReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipeModule"]] }); })();


/***/ }),

/***/ "qzPY":
/*!****************************************************!*\
  !*** ./src/app/pages/reports/reports.component.ts ***!
  \****************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/layout/layout/layout.component */ "rqBn");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/safe.pipe */ "YYwF");






function ReportsComponent_iframe_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safe");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.resource), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
class ReportsComponent {
    constructor(router, activeRoute) {
        this.activeRoute = activeRoute;
        let currentPage = router.routerState.snapshot.url;
        let currentPageSplit = currentPage.split('/');
        if (currentPageSplit.length > 0) {
            currentPage = currentPageSplit[currentPageSplit.length - 1];
        }
        console.log('currentPage', currentPage);
    }
    ngOnInit() {
        const routeParams = this.activeRoute.snapshot.params;
        this.loadInfo(routeParams.id);
        this.activeRoute.params.subscribe(routeParams => {
            this.loadInfo(routeParams.id);
        });
    }
    loadInfo(currentPage) {
        if (currentPage == '1') {
            this.resource = 'https://app.powerbi.com/view?r=eyJrIjoiZDNhNzM1ZDMtNGNjOS00YTJjLTk4ZTEtMDEzMThiNDQwNjE3IiwidCI6ImQ1N2YyYTFiLWM3MTEtNDcxMC1hZDJkLTcyN2RmZWU2YWY0MCIsImMiOjR9&pageName=ReportSection913fb6902759bae7187c';
        }
        else if (currentPage == '2') {
            this.resource = 'https://app.powerbi.com/view?r=eyJrIjoiZGU4YmNmNmUtMmE3Zi00MGRkLWFkZTUtYzU2MzkzNGE3ZDMwIiwidCI6ImQ1N2YyYTFiLWM3MTEtNDcxMC1hZDJkLTcyN2RmZWU2YWY0MCIsImMiOjR9&pageName=ReportSection';
        }
        else if (currentPage == '3') {
            this.resource = null;
        }
        else if (currentPage == '4') {
            this.resource = 'https://app.powerbi.com/view?r=eyJrIjoiY2ZhNWM5ZDctNDUyZS00NTk3LThlYjgtMDcwNDQ3ZjYzZjVlIiwidCI6ImQ1N2YyYTFiLWM3MTEtNDcxMC1hZDJkLTcyN2RmZWU2YWY0MCIsImMiOjR9&pageName=ReportSection';
        }
        else if (currentPage == '5') {
            this.resource = 'https://app.powerbi.com/view?r=eyJrIjoiODQ3MWMwZTMtNmZhNC00Zjk4LWE1YTUtZGUwMGM0OWQ0NmQ4IiwidCI6ImQ1N2YyYTFiLWM3MTEtNDcxMC1hZDJkLTcyN2RmZWU2YWY0MCIsImMiOjR9&pageName=ReportSection63c7489d5eb22f54645b';
        }
        else if (currentPage == '6') {
            this.resource = 'https://app.powerbi.com/view?r=eyJrIjoiMTI5M2JjYmItOTdmNC00NWY2LTliMmItM2QzNDBhNzRmOTk3IiwidCI6ImQ1N2YyYTFiLWM3MTEtNDcxMC1hZDJkLTcyN2RmZWU2YWY0MCIsImMiOjR9&pageName=ReportSection';
        }
        else if (currentPage == '7') {
            this.resource = 'https://app.powerbi.com/view?r=eyJrIjoiMDI4YzM4NDAtZjY3NS00MjhlLWJkODQtYmFkOGY2M2YxNjM1IiwidCI6ImQ1N2YyYTFiLWM3MTEtNDcxMC1hZDJkLTcyN2RmZWU2YWY0MCIsImMiOjR9&pageName=ReportSection819e41e46020e69d00b7';
        }
    }
}
ReportsComponent.ɵfac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportsComponent, selectors: [["app-reports"]], decls: 4, vars: 1, consts: [[1, "content-panel"], [3, "src", 4, "ngIf"], [3, "src"]], template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReportsComponent_iframe_3_Template, 2, 3, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resource);
    } }, directives: [_shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__["SafePipe"]], styles: [".content-panel[_ngcontent-%COMP%] {\n  padding: 2em;\n  height: 100%;\n}\n.content-panel[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.content-panel[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlcG9ydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNOIiwiZmlsZSI6InJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYW5lbCB7XG4gIHBhZGRpbmc6IDJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG1hdC1jYXJkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBpZnJhbWUge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=pages-reports-reports-module.js.map