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
/* harmony import */ var _dashboard_interface_ip_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-interface/ip-validator.directive */ "./src/app/dashboard-interface/ip-validator.directive.ts");
/* harmony import */ var _dashboard_interface_localstorage_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-interface/localstorage.directive */ "./src/app/dashboard-interface/localstorage.directive.ts");
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
                _dashboard_interface_ip_validator_directive__WEBPACK_IMPORTED_MODULE_9__["IpValidatorDirective"],
                _dashboard_interface_localstorage_directive__WEBPACK_IMPORTED_MODULE_10__["LocalstorageDirective"],
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
            declarations: [_interface_interface_component__WEBPACK_IMPORTED_MODULE_4__["InterfaceComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _pagination_pipe__WEBPACK_IMPORTED_MODULE_6__["PaginationPipe"], _pagination_options_pagination_options_component__WEBPACK_IMPORTED_MODULE_7__["PaginationOptionsComponent"]]
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

module.exports = ".btn-rule{\r\n    border: blue 2px solid;\r\n    color: blue;\r\n    box-shadow: 1px 1px 2px 0px lightblue;\r\n    background: #FFF;\r\n    width: 10%;\r\n    padding: 1rem 1rem;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n}\r\n\r\n\r\n.header{\r\n    display:flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n.body{\r\n    width:100%;\r\n}\r\n\r\n\r\n.div-box{\r\n    box-shadow: 2px 5px 2px 2px #DCDCDC;\r\n    margin: 0.2rem 5rem;\r\n    padding:0.25rem 0.1rem;\r\n}\r\n\r\n\r\n.header-color{\r\n    background: lightgreen;\r\n    color: #000;\r\n}\r\n\r\n\r\n.content{\r\n    padding: 0.5rem 0.5rem;\r\n    box-shadow:1px 1px 1px 2px #DCDCDC;\r\n    margin: 1.5rem 5rem;\r\n}\r\n\r\n\r\n.align-center{\r\n    text-align: center;\r\n}\r\n\r\n\r\n.width__15{\r\n    width:15%;\r\n}\r\n\r\n\r\n.width__5{\r\n    width:5%;\r\n}\r\n\r\n\r\n.delete{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\nselect , input{\r\n    border: #DCDCDC 1px solid;\r\n    padding: 0.25rem 0.25rem;\r\n}"

/***/ }),

/***/ "./src/app/dashboard-interface/interface/interface.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard-interface/interface/interface.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style='display: flex;width:100%;flex-direction: column;justify-content: space-between'>\r\n    <div class='header'>\r\n        <button class='btn-rule' (click)='addRule()' [disabled]='!tableRules.valid'>Add More Rule</button>\r\n        <app-search></app-search>\r\n    </div>\r\n    <div>\r\n        <div class='header div-box header-color'>\r\n            <div class='align-center width__5'>Sr No.</div>\r\n            <div class='align-center width__15'>Protocol</div>\r\n            <div class='align-center width__15'>Source Ip</div>\r\n            <div class='align-center width__15'>Destination Ip</div>\r\n            <div class='align-center width__15'>Access Type</div>\r\n            <div class='align-center width__5'>Action</div>\r\n        </div>\r\n        <div class='header' style='max-height: 80%;overflow-y: auto;'>\r\n            <form [formGroup]='tableRules' class='body'>\r\n                <div formArrayName=\"rules\" *ngFor=\"let rule of rulesArray.controls; let i = index;\">\r\n                    <div [formGroupName]=\"i\" class='header content'>\r\n\r\n                        <div class='align-center width__5' >{{rulesArray.controls.length - i}}</div>\r\n                        <div class='align-center width__15'>\r\n                            <select formControlName=\"protocol\">\r\n                                <option value='' disabled selected>None</option>\r\n                                <option *ngFor='let protocol of protocols' value='{{protocol.value}}'>{{protocol.name}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class='align-center width__15'>\r\n                            <input formControlName=\"sourceIp\" placeholder=\"Enter Source IP\">\r\n\r\n                        </div>\r\n                        <div class='align-center width__15'>\r\n                            <input formControlName=\"destinationIp\" placeholder=\"Enter Destination IP\">\r\n                        </div>\r\n                        <div class='align-center width__15'>\r\n                            <select formControlName=\"accessType\">\r\n                                <option value='' disabled selected>None</option>\r\n                                <option *ngFor='let access of accessType' value='{{access.value}}'>{{access.name}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div (click)='delete(i)' class='align-center width__5 delete'>Action</div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <div style='display:flex;flex-direction: row;justify-content: space-between'>\r\n            <div *ngIf='pageLength >= 1'>Showing 1 to {{pageLength}} of {{totalSize}} entries</div>\r\n            <app-pagination-options></app-pagination-options>\r\n        </div>\r\n    </div>\r\n</div>"

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
        this.tableRules = this._fb.group({
            rules: this._fb.array([])
        });
        this.ruleArray = this._fb.group({
            rules: this._fb.array([])
        });
        this._paginationService.setTableData(this.tableRules);
        this.accessType = [
            { name: 'deny', value: 'deny' },
            { name: 'permit', value: 'permit' }
        ];
        this.protocols = [
            { name: 'tcp', value: 'tcp' },
            { name: 'ip', value: 'ip' },
            { name: 'udp', value: 'udp' }
        ];
        this.formValueChangeListener();
        this._paginationService.tableDataSubject.subscribe(function (data) {
            _this.createPaginatedForm(data);
        });
        this._searchService.searchSubject.subscribe(function (value) {
            _this.createPaginatedForm(_this._paginationService.searchTableData(value));
        });
    };
    InterfaceComponent.prototype.addRule = function () {
        this.rules = this.tableRules.get('rules');
        this.rules.push(this.createRow());
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

/***/ "./src/app/dashboard-interface/ip-validator.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard-interface/ip-validator.directive.ts ***!
  \***************************************************************/
/*! exports provided: IpValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpValidatorDirective", function() { return IpValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var IpValidatorDirective = /** @class */ (function () {
    function IpValidatorDirective(ipValidator) {
        this.ipValidator = ipValidator;
    }
    IpValidatorDirective_1 = IpValidatorDirective;
    IpValidatorDirective.prototype.validate = function (control) {
        var ipRegexp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        var isValid = ipRegexp.test(control.value);
        if (isValid) {
            return null;
        }
        else {
            return {
                ipValidator: false
            };
        }
    };
    var IpValidatorDirective_1;
    IpValidatorDirective = IpValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ipValidator][formControlName],[ipValidator][formControl]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
                        IpValidatorDirective_1;
                    }),
                    multi: true
                }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('ipValidator')),
        __metadata("design:paramtypes", [String])
    ], IpValidatorDirective);
    return IpValidatorDirective;
}());



/***/ }),

/***/ "./src/app/dashboard-interface/localstorage.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard-interface/localstorage.directive.ts ***!
  \***************************************************************/
/*! exports provided: LocalstorageDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageDirective", function() { return LocalstorageDirective; });
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

var LocalstorageDirective = /** @class */ (function () {
    function LocalstorageDirective() {
    }
    LocalstorageDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appLocalstorage]'
        }),
        __metadata("design:paramtypes", [])
    ], LocalstorageDirective);
    return LocalstorageDirective;
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

module.exports = ".btn-row{\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.page{\r\n    padding:0.5rem 1rem;\r\n    border:1px #dcdcdc solid;\r\n}"

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
        this.dataSizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.tableDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
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
            if ((value.sourceIp.indexOf(searchPhrase) > -1) || (value.destinationIp.indexOf(searchPhrase) > -1) || (value.protocol.indexOf(searchPhrase) > -1) || (value.accessType.indexOf(searchPhrase) > -1)) {
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

module.exports = ".search{\r\n    border: #000 1px solid;\r\n    padding: 0.5rem 0rem;\r\n    margin: 1rem 1rem;\r\n    z-index: 5;\r\n}"

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

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    color:#FFF;\r\n    background: rgb(51, 63, 80);\r\n    padding: 1rem 1rem;\r\n    margin: 0;\r\n    text-align: center;\r\n    width: 100%;;\r\n}\r\n\r\n.flex-display{\r\n    display:flex;\r\n}\r\n\r\n.flex-row{\r\n    flex-direction: row;\r\n}\r\n\r\n.flex-col{\r\n    flex-direction: column;\r\n}\r\n\r\n.flex-justify-even{\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.btn-logout{\r\n    background: #FFF;\r\n    border: #DCDCDC 1px solid;\r\n    padding:0.5rem 0.5rem;\r\n    z-index: 5;\r\n    width:10%;\r\n    box-shadow: 5px 2px 2px 1px #DCDCDC;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display:flex;flex-direction: row;height: 100%;\">\n        <div>\n                <app-navigation></app-navigation>\n        </div>\n        <div style='width: 100%;' class='flex-display flex-col'>\n                <div class='flex-display flex-row flex-justify-even'>\n                        <h1>Admin Panel</h1>\n                        <div style='background: #FFF; align-items: center;' class='flex-direction flex-row'><img (click)='showLogout()' src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMqSURBVGhD7dlLqE1RHMfxIwzIIwqRyGMgjzKXPMqIgYgpCgNRBmKgK68JioiYkJJCUUgUQ48BMmGgxMCjkNeNvB/fn3t2Lav/ftx9/87Zg/2rT927z1p77397r7XXPqdRp06dUumF5biDb/jdZu9xGpNQOCriKKwdtttHzEWh6EpYO6mKVxiE3NyFtYMqWYXM6LaqwpjIcxiZGQyrY1mdeNv0vbnNw0lkxruQ8UhyHlabMlpaiK5CmG2w2pXR0kKuIcwiWO3KcC3kJbZA48D6fA/CTITV7icO4niwLY9bISpiCpSxuILwc91W8xBGM+JV/EDS7iFmQumNYwj3k8atkHge10muwC0sRV+kZTQOYTf6aUOQIdDT2zpmyK2QJxgA7xyBdbyY6xg5AM/Mxi9Yx4q5FqJBOgMe0S32CNZxLK6FyAVkRWNFk8Hwv/+lp7tTs3shC2BlIHTrfUDS9gEWw4oKfoxw31lcC3kKzVZxtMS+B6uPbICVrbDaW3pcyBdoma/5fiGs7IfVN6HnyFTEGYXNOAvNilbfROlCNLfrAdgHWdEtotdSax+hvcjLUGyE1b90ITq5IhkHq39MT/gimQ+r/38vZBis/rFzKBL3QvRSdALrMQtZ78z3Ye0jtA5p0VXVdLwTWvJY/Xs82BN6Al+ElbxnggZyf8SZjDew+sTcChEVMwZWNMXqyR/3URE6YSvbEbdP41qIaBWbFp3wPlyGxsRaWFdC0a1a9GqIeyFFB21etIwpsnxPuBaimUwPMa9oIrGOY3EtZCU8ozfEm7COFXMrRF8sxOss/T+968/caExM6Przn2j1oGWQdcyQWyHxN33he/sNLIP2FUcnugOv8RmbEC57dKtqMRofL+Z6a2m9pKuwBtY3KVrNxnmBuN1tTIOK0JcR8ecW10Ika5Uav3SNhNVOvuJZtC2LeyFZniNM2rqpjJYWIiOQpANWmzJaXojGyZKm681tHnIL0RLC6lg1Wonn5h2szlWyC7k5BatzlcxBbvQT8CdYO6iCSygc/QSsX0+tHbWTitCE1K1oPbQaWo6caSPNUPrmvvDv63Xq1InTaPwBbKgb2QK2PRAAAAAASUVORK5CYII=\" /></div>\n                </div>\n                <div style='align-items: flex-end' class='flex-display flex-col'><button class='btn-logout' *ngIf='logoutEnabled' (click)='logout()'>Logout</button></div>\n                <router-outlet></router-outlet>\n        </div>\n</div>\n\n"

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
    function DashboardComponent(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
        this.logoutEnabled = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log('Dashboard');
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
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
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
        var expireTime = time + 1000 * 36000;
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

module.exports = ".login-window{\r\n    position: absolute;\r\n    width:50%;\r\n    height:50%;\r\n    z-index: 2;\r\n    background: #FFF;\r\n}\r\n\r\n.window-center{\r\n    margin:auto;\r\n    left:0;\r\n    right:0;\r\n    top:0;\r\n    bottom: 0;\r\n}\r\n\r\n.login-detail{\r\n    display:flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    align-content: space-around;\r\n    width:100%;\r\n    height:100%;\r\n    justify-content: center;\r\n}\r\n\r\n.background{\r\n    background: rgb(47, 85, 151);\r\n    position: absolute;\r\n    width:100%;\r\n    height:100%;\r\n    z-index: 1;\r\n}\r\n\r\n.login-align{\r\n    margin:1rem 1rem;\r\n}\r\n\r\n.login-input{\r\n    padding:1rem 1rem;\r\n    border: #DCDCDC 2px solid;\r\n    width:80%;\r\n}\r\n\r\n.login-btn{\r\n    background: orange;\r\n    padding:1rem 2rem;\r\n    border:none;\r\n}\r\n\r\n.border-round{\r\n    border-radius: 0.5rem;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='login-window window-center border-round'>\n  <div class='login-detail'>\n    <form [formGroup]='loginForm' (ngSubmit)='login(loginForm.value)'>\n        <h1>Nubewell Networks</h1>\n        <div class='login-align '>\n          <input class='login-input border-round' placeholder='Username' formControlName='username'/>\n        </div>\n        <div class='login-align'>\n          <input class='login-input border-round' placeholder='Password' formControlName='password'/>\n        </div>\n        <div class=\"login-align\">\n          <button class='login-btn border-round' >Login</button>\n        </div>\n    </form>\n\n  </div>\n</div>\n\n<div class='background'></div>"

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
    function LoginComponent(_fb, _loginService, _router, _permission) {
        this._fb = _fb;
        this._loginService = _loginService;
        this._router = _router;
        this._permission = _permission;
        this.loginForm = this._fb.group({
            username: [''],
            password: ['']
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this._permission.canLoadDashboard()) {
            this._router.navigate(['/dashboard/interface']);
        }
    };
    LoginComponent.prototype.login = function (login) {
        if (this._loginService.login(login)) {
            this._loginService.setCookie();
            this._router.navigate(['/dashboard/interface']);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"]])
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

module.exports = ".nav{\r\n    display:flex;\r\n    flex-direction: column;\r\n    z-index: 5;\r\n    background: rgb(47, 85, 151);\r\n    height: 100%;\r\n}\r\n\r\n\r\n.nav-backdrop{\r\n    opacity: 0.2;\r\n    background: #DCDCDC;\r\n    width:100%;\r\n    height:100%;\r\n    z-index: 3;\r\n}\r\n\r\n\r\n.nav-position{\r\n}\r\n\r\n\r\n.route{\r\n    margin:0.5rem 1rem;\r\n    padding:1rem 1rem;\r\n    color: #FFF;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n\r\n.routes{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-content: space-around;\r\n}\r\n\r\n\r\n.selected{\r\n    background:rgb(143, 170, 220);\r\n}"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='nav-open'></div>\n<div class='nav nav-position'>\n  <div *ngFor='let navigationOption of navigationOptions' class='routes'>\n    <div class='route' [ngClass]='navigationOption.isSelected ? \"selected\" : \"\"' routerLink='{{navigationOption.path}}'>{{navigationOption.name}}</div>\n  </div>\n</div>"

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
            { name: 'Dashboard', path: _routes_enum__WEBPACK_IMPORTED_MODULE_1__["Path"].DASHBOARD, isSelected: false },
            { name: 'Interface', path: _routes_enum__WEBPACK_IMPORTED_MODULE_1__["Path"].INTERFACE, isSelected: true },
            { name: 'Settings', path: _routes_enum__WEBPACK_IMPORTED_MODULE_1__["Path"].SETTINGs, isSelected: false },
            { name: 'Users', path: _routes_enum__WEBPACK_IMPORTED_MODULE_1__["Path"].USERS, isSelected: false },
            { name: 'File Upload', path: _routes_enum__WEBPACK_IMPORTED_MODULE_1__["Path"].FILE_UPLOAD, isSelected: false },
            { name: 'Alias', path: _routes_enum__WEBPACK_IMPORTED_MODULE_1__["Path"].ALIAS, isSelected: false },
            { name: 'Custom Protocols', path: _routes_enum__WEBPACK_IMPORTED_MODULE_1__["Path"].CUSTOM_PROTOCOLS, isSelected: false }
        ];
    }
    NavigationComponent.prototype.ngOnInit = function () {
        // this._router.events.subscribe( na)
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
    Path["SETTINGs"] = "dashboard/settings";
    Path["USERS"] = "dashboard/users";
    Path["FILE_UPLOAD"] = "dashboard/file-upload";
    Path["ALIAS"] = "dashboard/alias";
    Path["CUSTOM_PROTOCOLS"] = "dashboard/custom-protocols";
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