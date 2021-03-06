(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _routes_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes.enum */ "./src/app/routes.enum.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _canloaddashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canloaddashboard.service */ "./src/app/canloaddashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: _routes_enum__WEBPACK_IMPORTED_MODULE_3__["Path"].LOGIN, pathMatch: 'full' },
    { path: _routes_enum__WEBPACK_IMPORTED_MODULE_3__["Path"].LOGIN, component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: _routes_enum__WEBPACK_IMPORTED_MODULE_3__["Path"].DASHBOARD, component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_canloaddashboard_service__WEBPACK_IMPORTED_MODULE_5__["CanloaddashboardService"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dashboard';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _dashboard_interface_dashboard_interface_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-interface/dashboard-interface.module */ "./src/app/dashboard-interface/dashboard-interface.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/popup/popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__["PopupComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _dashboard_interface_dashboard_interface_module__WEBPACK_IMPORTED_MODULE_7__["DashboardInterfaceModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/canloaddashboard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/canloaddashboard.service.ts ***!
  \*********************************************/
/*! exports provided: CanloaddashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanloaddashboardService", function() { return CanloaddashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _permission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permission.service */ "./src/app/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanloaddashboardService = /** @class */ (function () {
    function CanloaddashboardService(_permissions, _router) {
        this._permissions = _permissions;
        this._router = _router;
    }
    CanloaddashboardService.prototype.canActivate = function (route, state) {
        // let test = ;
        if (this._permissions.canLoadDashboard()) {
            return true;
        }
        this._router.navigate(['/login']);
    };
    CanloaddashboardService.prototype.canLoad = function (route) {
        if (this._permissions.canLoadDashboard()) {
            return true;
        }
        this._router.navigate(['/login']);
        return false;
    };
    CanloaddashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_permission_service__WEBPACK_IMPORTED_MODULE_2__["PermissionService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CanloaddashboardService);
    return CanloaddashboardService;
}());



/***/ }),

/***/ "./src/app/dashboard-interface/dashboard-interface-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard-interface/dashboard-interface-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: DashboardInterfaceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardInterfaceRoutingModule", function() { return DashboardInterfaceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes.enum */ "./src/app/routes.enum.ts");
/* harmony import */ var _interface_interface_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface/interface.component */ "./src/app/dashboard-interface/interface/interface.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _canloaddashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../canloaddashboard.service */ "./src/app/canloaddashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: _routes_enum__WEBPACK_IMPORTED_MODULE_2__["Path"].DASHBOARD, canActivate: [_canloaddashboard_service__WEBPACK_IMPORTED_MODULE_6__["CanloaddashboardService"]], canLoad: [_canloaddashboard_service__WEBPACK_IMPORTED_MODULE_6__["CanloaddashboardService"]], component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], children: [
            { path: _routes_enum__WEBPACK_IMPORTED_MODULE_2__["Path"].INTERFACE, component: _interface_interface_component__WEBPACK_IMPORTED_MODULE_3__["InterfaceComponent"] }
        ] }
];
var DashboardInterfaceRoutingModule = /** @class */ (function () {
    function DashboardInterfaceRoutingModule() {
    }
    DashboardInterfaceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardInterfaceRoutingModule);
    return DashboardInterfaceRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard-interface/dashboard-interface.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-interface/dashboard-interface.module.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardInterfaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardInterfaceModule", function() { return DashboardInterfaceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_interface_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-interface-routing.module */ "./src/app/dashboard-interface/dashboard-interface-routing.module.ts");
/* harmony import */ var _interface_interface_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interface/interface.component */ "./src/app/dashboard-interface/interface/interface.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/dashboard-interface/search/search.component.ts");
/* harmony import */ var _pagination_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagination.pipe */ "./src/app/dashboard-interface/pagination.pipe.ts");
/* harmony import */ var _pagination_options_pagination_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagination-options/pagination-options.component */ "./src/app/dashboard-interface/pagination-options/pagination-options.component.ts");
/* harmony import */ var _validation_validation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validation/validation.component */ "./src/app/dashboard-interface/validation/validation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DashboardInterfaceModule = /** @class */ (function () {
    function DashboardInterfaceModule() {
    }
    DashboardInterfaceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_interface_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardInterfaceRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_interface_interface_component__WEBPACK_IMPORTED_MODULE_4__["InterfaceComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _pagination_pipe__WEBPACK_IMPORTED_MODULE_6__["PaginationPipe"], _pagination_options_pagination_options_component__WEBPACK_IMPORTED_MODULE_7__["PaginationOptionsComponent"], _validation_validation_component__WEBPACK_IMPORTED_MODULE_8__["ValidationComponent"]]
        })
    ], DashboardInterfaceModule);
    return DashboardInterfaceModule;
}());



/***/ }),

/***/ "./src/app/dashboard-interface/interface/interface.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard-interface/interface/interface.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-rule{\n    border: #DCDCDC 2px solid;\n    color: #000;\n    box-shadow: 1px 1px 2px 0px #DCDCDC;\n    background: #FFF;\n    padding: 0.1rem 0.2rem;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    font-size: 0.1rem;\n    margin:0.1rem 0.1rem;\n    border-radius: 1rem;\n    outline: none;\n    cursor: pointer;\n}\n\n\n.header{\n    display:flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    font-size:0.5rem;\n    align-items: center;\n}\n\n\n.body{\n    width:100%;\n}\n\n\n.div-box{\n    box-shadow: 2px 5px 2px 2px #DCDCDC;\n    margin: 0.2rem 0.1rem;\n    padding:0.1rem 0.1rem;\n}\n\n\n.header-color{\n    background: lightgreen;\n    color: #000;\n}\n\n\n.content{\n    padding: 0.1rem 0.1rem;\n    box-shadow: 1px 1px 1px 2px #DCDCDC;\n    margin: 0.2rem 0.1rem;\n}\n\n\n.align-center{\n    text-align: center;\n}\n\n\n.width__15{\n    width:10%;\n}\n\n\n.width__5{\n    width:5%;\n}\n\n\n.delete{\n    cursor: pointer;\n}\n\n\nselect , input{\n    border: #DCDCDC 1px solid;\n    padding: 0.1rem 0.15rem;\n    font-size: 0.2rem;\n    border-radius: 0.1rem;\n    outline: none;\n}\n\n\nimg{\n    width: 10px;\n    height: 10px;\n}\n\n\n.error{\n    border:red 1px solid;\n}\n\n\n@media only screen and (min-width:768px){\n    .div-box{\n        box-shadow: 2px 5px 2px 2px #DCDCDC;\n        margin: 0.2rem 5rem;\n        padding:0.25rem 0.1rem;\n    }\n    .header{\n        font-size:1.25rem;\n    }\n    .content{\n        padding: 0.5rem 0.5rem;\n        box-shadow:1px 1px 1px 2px #DCDCDC;\n        margin: 1.5rem 5rem;\n    }\n    select , input{\n        border: #DCDCDC 1px solid;\n        padding: 0.25rem 0.25rem;\n        font-size: inherit;\n        border-radius: 0.5rem;\n    }\n    .btn-rule{\n        background: #FFF;\n        width: 10%;\n        padding: 0.75rem 0.75rem;\n        height: -webkit-fit-content;\n        height: -moz-fit-content;\n        height: fit-content;\n        font-size: inherit;\n        margin:1rem 1rem;\n    }\n    .width__15{\n        width:15%;\n    }\n    img{\n        width:40px;\n        height: 40px;\n    }\n    \n}"

/***/ }),

/***/ "./src/app/dashboard-interface/interface/interface.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard-interface/interface/interface.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style='display: flex;width:100%;flex-direction: column;justify-content: space-between'>\n    <div class='header'>\n        <button class='btn-rule' (click)='addRule()' [disabled]='!tableRules.valid'>Add More Rule</button>\n        <app-search></app-search>\n    </div>\n    <div>\n        <div class='header div-box header-color'>\n            <div class='align-center width__5'>Sr No.</div>\n            <div class='align-center width__15'>Protocol</div>\n            <div class='align-center width__15'>Source Ip</div>\n            <div class='align-center width__15'>Destination Ip</div>\n            <div class='align-center width__15'>Access Type</div>\n            <div class='align-center width__15'>Action</div>\n        </div>\n        <div class='header'>\n            <form [formGroup]='ruleArray' class='body'>\n                <div formArrayName=\"rules\" *ngFor=\"let rule of ruleArray.get('rules').controls; let i = index;\">\n                    <div [formGroupName]=\"i\" class='header content'>\n\n                        <div class='align-center width__5' >{{rulesArray.controls.length - i}}</div>\n                        <div class='align-center width__15'>\n                            <select  formControlName=\"protocol\" [ngClass]='rule.get(\"protocol\").invalid ? \"error\" : \"\"'>\n                                <option value='' disabled selected>None</option>\n                                <option *ngFor='let protocol of protocols' value='{{protocol.value}}'>{{protocol.name}}</option>\n                            </select>\n                        </div>\n                        <div class='align-center width__15'>\n                            <input formControlName=\"sourceIp\" placeholder=\"Source IP\" [ngClass]='rule.get(\"sourceIp\").invalid ? \"error\" : \"\"'>\n\n                        </div>\n                        <div class='align-center width__15'>\n                            <input formControlName=\"destinationIp\" placeholder=\"Destination IP\" [ngClass]='rule.get(\"destinationIp\").invalid ? \"error\" : \"\"'>\n                        </div>\n                        <div class='align-center width__15'>\n                            <select formControlName=\"accessType\" [ngClass]='rule.get(\"accessType\").invalid ? \"error\" : \"\"'>\n                                <option value='' disabled selected>None</option>\n                                <option *ngFor='let access of accessType' value='{{access.value}}'>{{access.name}}</option>\n                            </select>\n                        </div>\n                        <div (click)='delete(i)' class='align-center width__15 delete'><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM2SURBVGhD7VnLahRBFJ21b/H1FyrMdAVDYKArgSxcqUFByF7N1i8Yo24CLhSXIhHx8RE+FjE+iC71B3R8YGa6B+IskvHc9k4YJ7e6u/o5hDlwYOi+de85XdXVVTWVMcYYozj4M2eO+66a87Wz2NHO845Wr/D7A7Hjqpd0je55rrpAsdxsNLBeP3UI4hfA975WWxDfi0OKhalVaks5OF3xCAxodRtP2ZOEWtF12tRThRtC8XkMlR87BKWm04Shy1wmP/ycnNwPA49kERkSNb7X6/u4bLbw3YkTGM9rYuEcSBME1eTy2cCbPX0MT+mLVDBXoibVZhnpQMMJT+eTWKgA0myYyTDDC/hYKlAwl1lOMiDB/FDC0ph4NmtNTR3OZ4pNSqeZ6Dvz72MnJSyPvuvcZHnxQM5tv9gb1xd63btL4j2JFEttpHtGuqpl1Su0/hETGUiCen82eoTu/TtizCApJgDa2JrxdO0qy4wGhtVbKYnEQRN9hJnZNtGHpRkMrzcsMxzBUtxiFdu9t8SK/odkZocJBuUYjjURo2XTq1ePslwzEDgnJQijUeCAmTgxcenpifMs1wyaGaTGUQwTmqUJIkbMDZZrBgKfDTeMS5NgCUlNBHTVE5ZrBqbd12LjmIxjJpUJIrbNLNcMvCMfxcYWDDOT2gQIjWss1wwKkhrbcCSM7JqhhcDd8bLTaYbYOIImE3Q97J6UK4oYWg2WawaCdscHkfbIo75EaWvnCMsNB4bXqpREYvGLRrXCMqOB4GtSEhMHzcQZKttmLE0QPe1cYZnRCDZWrtOWEplIgnLfWGm1br3dRa/cEhKVyliLxWHwdrcpJSyDMPHt16w6wPLsQEcwUtIy6OvaRZaVDEiyPJy0aGKP9JDlJAcdV+J9eScVKIL0Keidre5hOelQ2iG2Vp8zO8TuI/hbgf4LlAtmThoFmZvog4YZeib3P3owQz3Ymjm5l8vmB5rNaDqURKQheuErev4SlykG9J2BoUXbFYBIV7VgovF7unqQ0xePwBDWZuAKuCkKFUix1IaOQEs1IIFOAL3p2jkIbOApP0VvvaAJIpgk8Juu0T2Kib0UH2OMMTJApfIXdHQ+5TJKT4cAAAAASUVORK5CYII=\"></div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div>\n        <div class='header'>\n            <div *ngIf='pageLength >= 1'>Showing 1 to {{pageLength}} of {{totalSize}} entries</div>\n            <app-pagination-options></app-pagination-options>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard-interface/interface/interface.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard-interface/interface/interface.component.ts ***!
  \**********************************************************************/
/*! exports provided: InterfaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterfaceComponent", function() { return InterfaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pagination.service */ "./src/app/dashboard-interface/pagination.service.ts");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/dashboard-interface/localstorage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search.service */ "./src/app/dashboard-interface/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InterfaceComponent = /** @class */ (function () {
    function InterfaceComponent(_fb, _paginationService, _cdr, _localstorageService, _searchService) {
        this._fb = _fb;
        this._paginationService = _paginationService;
        this._cdr = _cdr;
        this._localstorageService = _localstorageService;
        this._searchService = _searchService;
        this.tableData = [];
        this.formData = [];
        this.accessType = [];
        this.protocols = [];
        this.pageSize = 10;
    }
    InterfaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accessType = [
            { name: 'deny', value: 'deny' },
            { name: 'permit', value: 'permit' }
        ];
        this.protocols = [
            { name: 'tcp', value: 'tcp' },
            { name: 'ip', value: 'ip' },
            { name: 'udp', value: 'udp' }
        ];
        this._paginationService.tableDataSubject.subscribe(function (data) {
            _this.createPaginatedForm(data);
        });
        this._searchService.searchSubject.subscribe(function (value) {
            var rule = _this._paginationService.searchTableData(value);
            _this.createPaginatedForm(rule);
        });
        this.initForm();
    };
    InterfaceComponent.prototype.addRule = function () {
        this.rules = this.tableRules.get('rules');
        this.rules.insert(0, this.createRow());
        this._paginationService.setTableData(this.tableRules);
    };
    InterfaceComponent.prototype.createRow = function () {
        var ipPattern = "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/([1-9]|1[0-9]|2[0-9]|3[0-2]|(((128|192|224|240|248|252|254)\.0\.0\.0)|(255\.(0|128|192|224|240|248|252|254)\.0\.0)|(255\.255\.(0|128|192|224|240|248|252|254)\.0)|(255\.255\.255\.(0|128|192|224|240|248|252|254))))";
        return this._fb.group({
            protocol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sourceIp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(ipPattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            destinationIp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(ipPattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            accessType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    InterfaceComponent.prototype.delete = function (index) {
        var rules = this.tableRules.get('rules');
        rules.removeAt(index);
        this._paginationService.setTableData(this.tableRules);
    };
    InterfaceComponent.prototype.formValueChangeListener = function () {
        var _this = this;
        this.tableRules.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function (data) {
            _this.formData = data;
            _this._localstorageService.setItem('table-rules', JSON.stringify(data));
            _this.totalSize = _this.formData['rules'].length;
        });
    };
    Object.defineProperty(InterfaceComponent.prototype, "rulesArray", {
        get: function () {
            return this.ruleArray.get('rules');
        },
        enumerable: true,
        configurable: true
    });
    InterfaceComponent.prototype.createPaginatedForm = function (formValue) {
        this.pageLength = formValue.length;
        var ruleArray = this.ruleArray.get('rules');
        ruleArray.controls.splice(0, ruleArray.length);
        this.ruleArray.reset();
        var ipPattern = "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/([1-9]|1[0-9]|2[0-9]|3[0-2]|(((128|192|224|240|248|252|254)\.0\.0\.0)|(255\.(0|128|192|224|240|248|252|254)\.0\.0)|(255\.255\.(0|128|192|224|240|248|252|254)\.0)|(255\.255\.255\.(0|128|192|224|240|248|252|254))))";
        for (var i = 0; i < formValue.length; i++) {
            var formGroup = this._fb.group({
                protocol: [formValue[i].protocol, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                sourceIp: [formValue[i].sourceIp, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(ipPattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                destinationIp: [formValue[i].destinationIp, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(ipPattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                accessType: [formValue[i].accessType, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            ruleArray.push(formGroup);
        }
    };
    InterfaceComponent.prototype.initForm = function () {
        this.tableRules = this._fb.group({
            rules: this._fb.array([])
        });
        this.ruleArray = this._fb.group({
            rules: this._fb.array([])
        });
        this.formValueChangeListener();
        var tableRules = JSON.parse(localStorage.getItem('table-rules'));
        if (tableRules != null) {
            if (tableRules['rules'].length > 0) {
                var ruleArray = this.tableRules.get('rules');
                for (var i = 0; i < tableRules['rules'].length; i++) {
                    ruleArray.push(this.addRow(tableRules['rules'][i]));
                }
                this.pageLength = tableRules['rules'].length;
                this._paginationService.setTableData(this.tableRules);
            }
            if (tableRules['rules'].length == 0) {
                this.addEmptyRow();
            }
        }
    };
    InterfaceComponent.prototype.addRow = function (formValue) {
        var ipPattern = "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/([1-9]|1[0-9]|2[0-9]|3[0-2]|(((128|192|224|240|248|252|254)\.0\.0\.0)|(255\.(0|128|192|224|240|248|252|254)\.0\.0)|(255\.255\.(0|128|192|224|240|248|252|254)\.0)|(255\.255\.255\.(0|128|192|224|240|248|252|254))))";
        return this._fb.group({
            protocol: [formValue.protocol, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sourceIp: [formValue.sourceIp, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(ipPattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            destinationIp: [formValue.destinationIp, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(ipPattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            accessType: [formValue.accessType, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    InterfaceComponent.prototype.addEmptyRow = function () {
        var formValue = { protocol: '', sourceIp: '', destinationIp: '', accessType: '' };
        var rules = this.tableRules.get('rules');
        rules.insert(0, this.addRow(formValue));
        this._paginationService.setTableData(this.tableRules);
    };
    InterfaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interface',
            template: __webpack_require__(/*! ./interface.component.html */ "./src/app/dashboard-interface/interface/interface.component.html"),
            styles: [__webpack_require__(/*! ./interface.component.css */ "./src/app/dashboard-interface/interface/interface.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"],
            _search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]])
    ], InterfaceComponent);
    return InterfaceComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-interface/localstorage.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-interface/localstorage.service.ts ***!
  \*************************************************************/
/*! exports provided: LocalstorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageService", function() { return LocalstorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalstorageService = /** @class */ (function () {
    function LocalstorageService() {
    }
    LocalstorageService.prototype.setItem = function (itemKey, value) {
        localStorage.setItem(itemKey, value);
    };
    LocalstorageService.prototype.getItem = function (itemKey) {
        localStorage.getItem(itemKey);
    };
    LocalstorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LocalstorageService);
    return LocalstorageService;
}());



/***/ }),

/***/ "./src/app/dashboard-interface/pagination-options/pagination-options.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard-interface/pagination-options/pagination-options.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-row{\n    display: flex;\n    flex-direction: row;\n}\n\n.page{\n    padding:0.1rem 0.1rem;\n    border:1px #dcdcdc solid;\n    font-size: 0.5rem;\n    cursor: pointer;\n}\n\n@media only screen and (min-width:768px){    \n    .page{\n        padding:0.5rem 1rem;\n        font-size: inherit;\n    }\n}"

/***/ }),

/***/ "./src/app/dashboard-interface/pagination-options/pagination-options.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard-interface/pagination-options/pagination-options.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='btn-row'>\n  <div *ngFor='let page of pageObject'  class='page' (click)='pageClicked(page.value)'>{{page.name}}</div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard-interface/pagination-options/pagination-options.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard-interface/pagination-options/pagination-options.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PaginationOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationOptionsComponent", function() { return PaginationOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pagination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pagination.service */ "./src/app/dashboard-interface/pagination.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaginationOptionsComponent = /** @class */ (function () {
    function PaginationOptionsComponent(_paginationService) {
        this._paginationService = _paginationService;
        this.pageObject = [];
        this.pageNumberSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    PaginationOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._paginationService.dataSizeSubject.subscribe(function (size) {
            if (size <= 10) {
                _this.pageSize = 1;
                _this._paginationService.pageChanged(_this.pageSize);
            }
            else {
                _this.pageSize = Math.floor(size / 10);
                if (size % 10 < 10) {
                    _this.pageSize += 1;
                }
            }
            _this.createPageObject();
        });
    };
    PaginationOptionsComponent.prototype.createPageObject = function () {
        this.pageObject = [];
        for (var i = 1; i <= this.pageSize; i++) {
            this.pageObject.push({ name: i, value: i, selected: false });
        }
        this.pageObject.unshift({ name: 'Prev', value: 'Prev', selected: false });
        this.pageObject.unshift({ name: 'First', value: 'First', selected: false });
        this.pageObject.push({ name: 'Next', value: 'Last', selected: false });
        this.pageObject.push({ name: 'Last', value: 'Last', selected: false });
    };
    PaginationOptionsComponent.prototype.pageClicked = function (pageNo) {
        switch (pageNo) {
            case 'Prev':
                if (this.pageNumber == 1) {
                    return;
                }
                this.pageNumber = this.pageNumber - 1;
                break;
            case 'Next':
                this.pageNumber++;
                break;
            case 'First':
                this.pageNumber = 1;
                break;
            case 'Last':
                this.pageNumber = this.pageSize;
                break;
            default:
                this.pageNumber = pageNo;
                break;
        }
        this._paginationService.pageChanged(this.pageNumber);
    };
    PaginationOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination-options',
            template: __webpack_require__(/*! ./pagination-options.component.html */ "./src/app/dashboard-interface/pagination-options/pagination-options.component.html"),
            styles: [__webpack_require__(/*! ./pagination-options.component.css */ "./src/app/dashboard-interface/pagination-options/pagination-options.component.css")]
        }),
        __metadata("design:paramtypes", [_pagination_service__WEBPACK_IMPORTED_MODULE_1__["PaginationService"]])
    ], PaginationOptionsComponent);
    return PaginationOptionsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-interface/pagination.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard-interface/pagination.pipe.ts ***!
  \********************************************************/
/*! exports provided: PaginationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPipe", function() { return PaginationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaginationPipe = /** @class */ (function () {
    function PaginationPipe() {
    }
    PaginationPipe.prototype.transform = function (FormControlArray, pageSize, pageNumber) {
        var startIndex = (parseInt(pageNumber) - 1) * parseInt(pageSize);
        var endIndex = startIndex + parseInt(pageSize);
        if (FormControlArray.length == 0) {
            return FormControlArray;
        }
        console.log(FormControlArray.getRawValue());
        return FormControlArray.getRawValue().filter(function (x, index) {
            return (x.value['index'] >= startIndex && x.value['index'] <= endIndex);
        });
        //  return FormControlArray;
    };
    PaginationPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'pagination',
            pure: false
        })
    ], PaginationPipe);
    return PaginationPipe;
}());



/***/ }),

/***/ "./src/app/dashboard-interface/pagination.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/dashboard-interface/pagination.service.ts ***!
  \***********************************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaginationService = /** @class */ (function () {
    function PaginationService(_fb) {
        this._fb = _fb;
        this.formValue = [];
        this.dataSizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.tableDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pageNumber = 1;
    }
    PaginationService.prototype.setTableData = function (tableData) {
        this.tableData = tableData;
        this.getTableData(this.pageNumber, 10);
        this.dataSize = this.tableData.value.rules.length;
        this.dataSizeSubject.next(this.dataSize);
    };
    PaginationService.prototype.getTableData = function (pagenumber, pageSize) {
        var startIndex = (pagenumber - 1) * pageSize;
        var endIndex = startIndex + pageSize;
        var formArray = this.tableData.get('rules');
        var formArrayLength = formArray.length;
        if (endIndex >= formArrayLength) {
            endIndex = formArrayLength;
        }
        this.formValue = this.tableData.value;
        this.formValue = this.formValue['rules'].slice(startIndex, endIndex);
        console.log(this.tableData);
        this.tableDataSubject.next(this.formValue);
    };
    PaginationService.prototype.getNumberOfPages = function () {
        var dataSize = this.tableData.value;
        return dataSize.rules;
    };
    PaginationService.prototype.pageChanged = function (pageNumber) {
        this.pageNumber = pageNumber;
        this.getTableData(pageNumber, 10);
    };
    PaginationService.prototype.searchTableData = function (searchPhrase) {
        var formValue = this.tableData.value['rules'];
        formValue = formValue.filter(function (value) {
            if ((value.sourceIp.includes(searchPhrase)) || (value.destinationIp.includes(searchPhrase)) || (value.protocol.includes(searchPhrase)) || (value.accessType.includes(searchPhrase))) {
                return value;
            }
        });
        return formValue;
    };
    PaginationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/app/dashboard-interface/search.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard-interface/search.service.ts ***!
  \*******************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = /** @class */ (function () {
    function SearchService() {
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    SearchService.prototype.gridSearch = function (searchPhrase) {
        this.searchSubject.next(searchPhrase);
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/dashboard-interface/search/search.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-interface/search/search.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search{\n    border: #DCDCDC 2px solid;\n    color: #000;\n    box-shadow: 1px 1px 2px 0px #DCDCDC;\n    padding: 0.1rem 0.2rem;\n    margin: 0.1rem 0.1rem;\n    z-index: 5;\n    font-size: 0.1rem;\n    border-radius: 1rem;\n    cursor: pointer;\n    \n}\n\n@media only screen and (min-width:768px){\n    .search{\n        padding: 0.75rem 0.75rem;\n        margin: 1rem 1rem;\n        font-size: inherit;\n    }\n}"

/***/ }),

/***/ "./src/app/dashboard-interface/search/search.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard-interface/search/search.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <input class='search' placeholder='Search Grid' [ngModel]='searchInput' (ngModelChange)='inputValueChanged($event)'/>\n</div>"

/***/ }),

/***/ "./src/app/dashboard-interface/search/search.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard-interface/search/search.component.ts ***!
  \****************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search.service */ "./src/app/dashboard-interface/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(_searchService) {
        this._searchService = _searchService;
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (value) {
            _this.inputValueChanged(value);
        });
    };
    SearchComponent.prototype.inputValueChanged = function (event) {
        this._searchService.gridSearch(event);
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/dashboard-interface/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/dashboard-interface/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-interface/validation/validation.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard-interface/validation/validation.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard-interface/validation/validation.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard-interface/validation/validation.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  validation works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard-interface/validation/validation.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard-interface/validation/validation.component.ts ***!
  \************************************************************************/
/*! exports provided: ValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationComponent", function() { return ValidationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationComponent = /** @class */ (function () {
    function ValidationComponent() {
    }
    ValidationComponent.prototype.ngOnInit = function () {
    };
    ValidationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-validation',
            template: __webpack_require__(/*! ./validation.component.html */ "./src/app/dashboard-interface/validation/validation.component.html"),
            styles: [__webpack_require__(/*! ./validation.component.css */ "./src/app/dashboard-interface/validation/validation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ValidationComponent);
    return ValidationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    color: #FFF;\n    background: rgb(51, 63, 80);\n    padding: 0.1rem 0.1rem;\n    margin: 0;\n    text-align: center;\n    width: 100%;\n    font-size: 0.75rem;\n}\n\n.flex-display{\n    display:flex;\n}\n\n.flex-row{\n    flex-direction: row;\n}\n\n.flex-col{\n    flex-direction: column;\n}\n\n.flex-justify-even{\n    justify-content: space-evenly;\n}\n\n.btn-logout{\n    background: #FFF;\n    border: #DCDCDC 1px solid;\n    padding:0.1rem 0.1rem;\n    z-index: 5;\n    box-shadow: 5px 2px 2px 1px #DCDCDC;\n}\n\nimg{\n    width:0.75rem;\n    height:0.75rem;\n    -ms-grid-row-align: center;\n        align-self: center;\n}\n\n@media only screen and (min-width : 768px){\n    .btn-logout{\n        padding:0.5rem 0.5rem;\n        z-index: 5;\n        width:10%;\n    }\n\n    h1{\n        padding: 1rem 1rem;\n        width: 100%;;\n        font-size: 2rem;\n    }\n    img{\n        width:inherit;\n        height:inherit;\n    }\n\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display:flex;flex-direction: row;height: 100%;\">\n        <div>\n                <app-navigation></app-navigation>\n        </div>\n        <div style='width: 100%;' class='flex-display flex-col'>\n                <div class='flex-display flex-row flex-justify-even'>\n                        <h1>Admin Panel</h1>\n                        <div style='background: #FFF; align-self: center;' class='flex-direction flex-row'><img (click)='showLogout()' src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMqSURBVGhD7dlLqE1RHMfxIwzIIwqRyGMgjzKXPMqIgYgpCgNRBmKgK68JioiYkJJCUUgUQ48BMmGgxMCjkNeNvB/fn3t2Lav/ftx9/87Zg/2rT927z1p77397r7XXPqdRp06dUumF5biDb/jdZu9xGpNQOCriKKwdtttHzEWh6EpYO6mKVxiE3NyFtYMqWYXM6LaqwpjIcxiZGQyrY1mdeNv0vbnNw0lkxruQ8UhyHlabMlpaiK5CmG2w2pXR0kKuIcwiWO3KcC3kJbZA48D6fA/CTITV7icO4niwLY9bISpiCpSxuILwc91W8xBGM+JV/EDS7iFmQumNYwj3k8atkHge10muwC0sRV+kZTQOYTf6aUOQIdDT2zpmyK2QJxgA7xyBdbyY6xg5AM/Mxi9Yx4q5FqJBOgMe0S32CNZxLK6FyAVkRWNFk8Hwv/+lp7tTs3shC2BlIHTrfUDS9gEWw4oKfoxw31lcC3kKzVZxtMS+B6uPbICVrbDaW3pcyBdoma/5fiGs7IfVN6HnyFTEGYXNOAvNilbfROlCNLfrAdgHWdEtotdSax+hvcjLUGyE1b90ITq5IhkHq39MT/gimQ+r/38vZBis/rFzKBL3QvRSdALrMQtZ78z3Ye0jtA5p0VXVdLwTWvJY/Xs82BN6Al+ElbxnggZyf8SZjDew+sTcChEVMwZWNMXqyR/3URE6YSvbEbdP41qIaBWbFp3wPlyGxsRaWFdC0a1a9GqIeyFFB21etIwpsnxPuBaimUwPMa9oIrGOY3EtZCU8ozfEm7COFXMrRF8sxOss/T+968/caExM6Przn2j1oGWQdcyQWyHxN33he/sNLIP2FUcnugOv8RmbEC57dKtqMRofL+Z6a2m9pKuwBtY3KVrNxnmBuN1tTIOK0JcR8ecW10Ika5Uav3SNhNVOvuJZtC2LeyFZniNM2rqpjJYWIiOQpANWmzJaXojGyZKm681tHnIL0RLC6lg1Wonn5h2szlWyC7k5BatzlcxBbvQT8CdYO6iCSygc/QSsX0+tHbWTitCE1K1oPbQaWo6caSPNUPrmvvDv63Xq1InTaPwBbKgb2QK2PRAAAAAASUVORK5CYII=\" /></div>\n                </div>\n                <div style='align-items: flex-end' class='flex-display flex-col'><button class='btn-logout' *ngIf='logoutEnabled' (click)='logout()'>Logout</button></div>\n                <router-outlet></router-outlet>\n        </div>\n</div>\n<app-popup (dialogClosed)='logout()'></app-popup>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _idle_timeout_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../idle-timeout-service.service */ "./src/app/idle-timeout-service.service.ts");
/* harmony import */ var _popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popup.service */ "./src/app/popup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_loginService, _router, _idleTimeoutService, _popupService) {
        this._loginService = _loginService;
        this._router = _router;
        this._idleTimeoutService = _idleTimeoutService;
        this._popupService = _popupService;
        this.logoutEnabled = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Dashboard');
        this._idleTimeoutService.timeOutSubject.subscribe(function () {
            _this._popupService.openPopup();
        });
        this._idleTimeoutService.expireSessionSubject.subscribe(function (flag) {
            _this.logout();
        });
    };
    DashboardComponent.prototype.logout = function () {
        this._loginService.deleteCookie("nubewelldashboard");
        this._router.navigate(['/login']);
    };
    DashboardComponent.prototype.showLogout = function () {
        this.logoutEnabled = !this.logoutEnabled;
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _idle_timeout_service_service__WEBPACK_IMPORTED_MODULE_3__["IdleTimeoutServiceService"], _popup_service__WEBPACK_IMPORTED_MODULE_4__["PopupService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/idle-timeout-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/idle-timeout-service.service.ts ***!
  \*************************************************/
/*! exports provided: IdleTimeoutServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdleTimeoutServiceService", function() { return IdleTimeoutServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IdleTimeoutServiceService = /** @class */ (function () {
    function IdleTimeoutServiceService() {
        this.timeOutSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.expireSessionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.timeOutFlag = true;
    }
    IdleTimeoutServiceService.prototype.setSessionAliveTime = function (time) {
        this.timeoutMiliSecond = time; //converts millisecond to seconds
        console.log('timeout at : ' + new Date(time));
        this.startTimer();
    };
    IdleTimeoutServiceService.prototype.startTimer = function () {
        var _this = this;
        if (this.timoutSubscription != undefined) {
            this.timoutSubscription.unsubscribe();
        }
        var timeObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(new Date(this.timeoutMiliSecond));
        this.timoutSubscription = timeObservable.subscribe(function () {
            if (_this.timeOutFlag) {
                _this.timeOutSubject.next(true);
                _this.timeOutFlag = false;
            }
            else {
                _this.expireSessionSubject.next(true);
            }
        });
    };
    IdleTimeoutServiceService.prototype.resetTimer = function () {
        var expiryTime = (2 * 60 * 1000);
        this.setSessionAliveTime(expiryTime);
    };
    IdleTimeoutServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], IdleTimeoutServiceService);
    return IdleTimeoutServiceService;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService() {
        /**
         * Use of behavioral subject as it stores the previous value
         */
        this.loginSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        var loginDetails = localStorage.getItem('login-details');
        var login = JSON.parse(loginDetails);
        if (login == undefined) {
            localStorage.setItem('login-details', JSON.stringify({ username: 'admin', password: 'admin' }));
        }
    }
    LoginService.prototype.setCookie = function () {
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 1000 * 240; //600 minutes
        now.setTime(expireTime);
        document.cookie = 'nubewelldashboard=' + expireTime + ';expires=' + now.toUTCString() + ';path=/';
        console.log(document.cookie);
    };
    LoginService.prototype.getCookie = function (name) {
        var cookieName = name + "=";
        var cookieDoc = document.cookie.split('-');
        for (var i = 0; i < cookieDoc.length; i++) {
            var cookie = cookieDoc[i];
            console.log(cookie);
            if (cookie.indexOf(cookieName) == 0) {
                console.log(cookie);
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
    };
    LoginService.prototype.deleteCookie = function (name) {
        var now = new Date(0);
        var expireTime = now.getTime();
        now.setTime(expireTime);
        document.cookie = document.cookie + ';expires=' + now.toUTCString() + ';path=/';
    };
    LoginService.prototype.login = function (login) {
        var loginData = localStorage.getItem('login-details');
        var loginDetails = JSON.parse(loginData);
        if (login.username == loginDetails.username && login.password == loginDetails.password) {
            return true;
        }
        return false;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-window{\n    position: absolute;\n    width:50%;\n    height:50%;\n    z-index: 2;\n    background: #FFF;\n}\n\n.window-center{\n    margin:auto;\n    left:0;\n    right:0;\n    top:0;\n    bottom: 0;\n}\n\n.login-detail{\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.background{\n    background: rgb(47, 85, 151);\n    position: absolute;\n    width:100%;\n    height:100%;\n    z-index: 1;\n}\n\n.login-align{\n    margin:1rem 1rem;\n}\n\n.login-input{\n    padding:0.5rem 0.5rem;\n    border: #DCDCDC 2px solid;\n    width:80%;\n}\n\n.login-btn{\n    background: orange;\n    padding:1rem 1rem;\n    border:none;\n}\n\n.border-round{\n    border-radius: 0.5rem;\n}\n\nh1{\n    font-size: 1.75rem;\n    text-align: center;\n}\n\n@media only screen and (min-width:768px){\n    .login-align{\n        margin:1rem 1rem;\n    }\n    \n    \n    .login-input{\n        padding:1rem 1rem;\n        border: #DCDCDC 2px solid;\n        width:80%;\n    }\n    \n    \n    .login-btn{\n        padding:1rem 2rem;\n    }\n\n    h1{\n        font-size: 2rem;\n    }\n    \n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='login-window window-center border-round'>\n    <form [formGroup]='loginForm' (ngSubmit)='login(loginForm.value)' class='login-detail'>\n        <h1>Nubewell Networks</h1>\n        <div class='login-align '>\n          <input class='login-input border-round' placeholder='Username' formControlName='username'/>\n        </div>\n        <div class='login-align'>\n          <input class='login-input border-round' placeholder='Password' formControlName='password' type='password'/>\n        </div>\n        <div class=\"login-align\">\n          <button class='login-btn border-round' >Login</button>\n        </div>\n    </form>\n</div>\n\n<div class='background'></div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../permission.service */ "./src/app/permission.service.ts");
/* harmony import */ var _idle_timeout_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../idle-timeout-service.service */ "./src/app/idle-timeout-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_fb, _loginService, _router, _permission, _idleTimeoutService) {
        this._fb = _fb;
        this._loginService = _loginService;
        this._router = _router;
        this._permission = _permission;
        this._idleTimeoutService = _idleTimeoutService;
        this.loginForm = this._fb.group({
            username: [''],
            password: ['']
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this._permission.canLoadDashboard()) {
            this.setTimeoutPopup();
            this._router.navigate(['/dashboard/interface']);
        }
    };
    LoginComponent.prototype.login = function (login) {
        if (this._loginService.login(login)) {
            this._loginService.setCookie();
            this.setTimeoutPopup();
            this._router.navigate(['/dashboard/interface']);
        }
    };
    LoginComponent.prototype.setTimeoutPopup = function () {
        var timeout = document.cookie.split('=');
        var timeStamp = parseInt(timeout[1]) - (2 * 60 * 1000);
        console.log(timeStamp + " - " + new Date(timeStamp));
        this._idleTimeoutService.setSessionAliveTime(timeStamp);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"],
            _idle_timeout_service_service__WEBPACK_IMPORTED_MODULE_5__["IdleTimeoutServiceService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav{\n    display:flex;\n    flex-direction: column;\n    z-index: 5;\n    background: rgb(47, 85, 151);\n    height: 100%;\n}\n\n\n.nav-backdrop{\n    opacity: 0.2;\n    background: #DCDCDC;\n    width:100%;\n    height:100%;\n    z-index: 3;\n}\n\n\n.route{\n    margin:0.25rem 0.25rem;\n    padding:0.25rem 0.25rem;\n    color: #FFF;\n    font-size: 0.5rem;\n}\n\n\n.routes{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: space-around;\n}\n\n\nh1{\n    font-size: 0.75rem;\n    text-align: center;\n    margin:0;\n    background: #DCDCDC;\n}\n\n\n.selected{\n    background:rgb(143, 170, 220);\n}\n\n\n@media only screen  and (min-width:768px){\n    .route{\n        font-size: 1.25rem;\n        margin:0.5rem 1rem;\n        padding:1rem 1rem;\n    }\n    h1{\n        font-size: 2rem;\n    }\n}"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='nav nav-position'>\n  <h1>Nubewell Networks</h1>\n  <div *ngFor='let navigationOption of navigationOptions' class='routes'>\n    <div class='route' [ngClass]='navigationOption.isSelected ? \"selected\" : \"\"' routerLink='{{navigationOption.path}}'>{{navigationOption.name}}</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routes_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes.enum */ "./src/app/routes.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(_activatedroute, _router) {
        this._activatedroute = _activatedroute;
        this._router = _router;
        this.navigationOptions = [
            { name: 'Dashboard', path: '', isSelected: false },
            { name: 'Interface', path: _routes_enum__WEBPACK_IMPORTED_MODULE_1__["Path"].INTERFACE, isSelected: true },
            { name: 'Settings', path: '', isSelected: false },
            { name: 'Users', path: '', isSelected: false },
            { name: 'File Upload', path: '', isSelected: false },
            { name: 'Alias', path: '', isSelected: false },
            { name: 'Custom Protocols', path: '', isSelected: false }
        ];
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/permission.service.ts":
/*!***************************************!*\
  !*** ./src/app/permission.service.ts ***!
  \***************************************/
/*! exports provided: PermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionService", function() { return PermissionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PermissionService = /** @class */ (function () {
    function PermissionService(_loginService) {
        this._loginService = _loginService;
    }
    PermissionService.prototype.canLoadDashboard = function () {
        var cookie = this._loginService.getCookie("nubewelldashboard");
        if (cookie != undefined && cookie != "") {
            return true;
        }
        return false;
    };
    PermissionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], PermissionService);
    return PermissionService;
}());



/***/ }),

/***/ "./src/app/popup.service.ts":
/*!**********************************!*\
  !*** ./src/app/popup.service.ts ***!
  \**********************************/
/*! exports provided: PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopupService = /** @class */ (function () {
    function PopupService() {
        this.popupSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    PopupService.prototype.openPopup = function () {
        this.popupSubject.next(true);
    };
    PopupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PopupService);
    return PopupService;
}());



/***/ }),

/***/ "./src/app/popup/popup.component.css":
/*!*******************************************!*\
  !*** ./src/app/popup/popup.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog {\n    position: absolute;\n    z-index: 6;\n    padding-top: 10%;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n.dialog-message {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 40%;\n    text-align: center;\n    border-radius: 10px;\n}\n\n.dialog-button {\n    border: 1px solid #DCDCDC;\n    padding: 5px 50px;\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 768px) {\n    .dialog {\n        font-size: 1em;\n    }\n    .dialog-message {\n        font-size: 0.875em;\n        top:0;\n        bottom:0;\n        left:0;\n        right:0;\n        margin:auto;\n        z-index: 10;\n        position: absolute;\n        width:40%;\n        height: 10%;\n    }\n}\n\n.align-center {\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/popup/popup.component.html":
/*!********************************************!*\
  !*** ./src/app/popup/popup.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='dialog' *ngIf='showPopup'>\n  <div class='dialog-message'>\n    <p>Session Expiring</p>\n    <span class='dialog-button' (click)='closeDialog()'>OK</span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/popup/popup.component.ts":
/*!******************************************!*\
  !*** ./src/app/popup/popup.component.ts ***!
  \******************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup.service */ "./src/app/popup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopupComponent = /** @class */ (function () {
    function PopupComponent(_popupService) {
        this._popupService = _popupService;
        this.showPopup = false;
        this.dialogClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._popupService.popupSubject.subscribe(function (value) {
            _this.showPopup = true;
        });
    };
    PopupComponent.prototype.closeDialog = function () {
        this.showPopup = false;
        this.dialogClosed.emit(this.showPopup);
    };
    PopupComponent.prototype.openDialog = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PopupComponent.prototype, "dialogClosed", void 0);
    PopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.css */ "./src/app/popup/popup.component.css")]
        }),
        __metadata("design:paramtypes", [_popup_service__WEBPACK_IMPORTED_MODULE_1__["PopupService"]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/routes.enum.ts":
/*!********************************!*\
  !*** ./src/app/routes.enum.ts ***!
  \********************************/
/*! exports provided: Path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
var Path;
(function (Path) {
    Path["LOGIN"] = "login";
    Path["DASHBOARD"] = "dashboard";
    Path["INTERFACE"] = "interface";
    Path["SETTINGs"] = "settings";
    Path["USERS"] = "users";
    Path["FILE_UPLOAD"] = "file-upload";
    Path["ALIAS"] = "alias";
    Path["CUSTOM_PROTOCOLS"] = "custom-protocols";
})(Path || (Path = {}));


/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/f/Work/git/dashboard/dashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map