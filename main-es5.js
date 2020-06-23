function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _dashboard_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dashboard/data-table/data-table.component */
    "./src/app/dashboard/data-table/data-table.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _dashboard_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_8__["DataTableComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _dashboard_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_8__["DataTableComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/constants/app-data.const.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/constants/app-data.const.ts ***!
    \**************************************************/

  /*! exports provided: APP_DATA, appData */

  /***/
  function srcAppCoreConstantsAppDataConstTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_DATA", function () {
      return APP_DATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appData", function () {
      return appData;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var APP_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('appData');
    var appData = [{
      "healthIndex": 85,
      "endDate": null,
      "minValueDateTime": 1514844000,
      "type": "systemHealth",
      "cowId": 636,
      "animalId": "624",
      "eventId": 34720,
      "deletable": false,
      "lactationNumber": 4,
      "daysInLactation": 92,
      "ageInDays": 2101,
      "startDateTime": 1514844000,
      "reportingDateTime": 1514844938
    }, {
      "healthIndex": 85,
      "endDate": null,
      "minValueDateTime": 1514844000,
      "type": "systemHealth",
      "cowId": 809,
      "animalId": "871",
      "eventId": 34719,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 357,
      "ageInDays": 1075,
      "startDateTime": 1514844000,
      "reportingDateTime": 1514844929
    }, {
      "alertType": "preCalving",
      "duration": 990,
      "originalStartDateTime": null,
      "endDateTime": null,
      "daysInPregnancy": null,
      "type": "distress",
      "cowId": 910,
      "animalId": "961",
      "eventId": 34718,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 770,
      "ageInDays": 770,
      "startDateTime": 1514842797,
      "reportingDateTime": 1514844259
    }, {
      "healthIndex": 77,
      "endDate": null,
      "minValueDateTime": 1514840400,
      "type": "systemHealth",
      "cowId": 910,
      "animalId": "961",
      "eventId": 34716,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 770,
      "ageInDays": 770,
      "startDateTime": 1514836800,
      "reportingDateTime": 1514843103
    }, {
      "alertType": "moderatePreCalving",
      "duration": 720,
      "originalStartDateTime": null,
      "endDateTime": 1514829642,
      "daysInPregnancy": null,
      "type": "distress",
      "cowId": 910,
      "animalId": "961",
      "eventId": 34715,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 770,
      "ageInDays": 770,
      "startDateTime": 1514827932,
      "reportingDateTime": 1514829724
    }, {
      "heatIndexPeak": "92",
      "type": "systemHeat",
      "cowId": 728,
      "animalId": "767",
      "eventId": 34717,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 33,
      "ageInDays": 1468,
      "startDateTime": 1514800800,
      "reportingDateTime": 1514844320
    }, {
      "newGroupId": 46,
      "newGroupName": "Suckling Calves",
      "currentGroupId": 0,
      "currentGroupName": null,
      "type": "changeGroup",
      "cowId": 1228,
      "animalId": "369",
      "eventId": 34702,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 0,
      "ageInDays": 0,
      "startDateTime": 1514791201,
      "reportingDateTime": 1514813089
    }, {
      "destinationGroup": 57,
      "destinationGroupName": "Low",
      "calvingEase": null,
      "daysInPregnancy": 271,
      "oldLactationNumber": 1,
      "newborns": null,
      "type": "calving",
      "cowId": 819,
      "animalId": "881",
      "eventId": 34712,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 0,
      "ageInDays": 1044,
      "startDateTime": 1514791200,
      "reportingDateTime": 1514813117
    }, {
      "destinationGroup": 0,
      "destinationGroupName": null,
      "cowEntryStatus": "Heifer",
      "type": "herdEntry",
      "cowId": 1228,
      "animalId": "369",
      "eventId": 34703,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 0,
      "ageInDays": 0,
      "startDateTime": 1514791200,
      "reportingDateTime": 1514813089
    }, {
      "birthDateCalculated": false,
      "type": "birth",
      "cowId": 1228,
      "animalId": "369",
      "eventId": 34701,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 0,
      "ageInDays": 0,
      "startDateTime": 1514791200,
      "reportingDateTime": 1514813088
    }, {
      "sire": null,
      "breedingNumber": 2,
      "isOutOfBreedingWindow": false,
      "interval": 15,
      "type": "breeding",
      "cowId": 1004,
      "animalId": "149",
      "eventId": 34710,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 548,
      "ageInDays": 548,
      "startDateTime": 1514781900,
      "reportingDateTime": 1514813113
    }, {
      "sire": null,
      "breedingNumber": 3,
      "isOutOfBreedingWindow": false,
      "interval": 3,
      "type": "breeding",
      "cowId": 699,
      "animalId": "725",
      "eventId": 34709,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 120,
      "ageInDays": 1651,
      "startDateTime": 1514781900,
      "reportingDateTime": 1514813109
    }, {
      "sire": null,
      "breedingNumber": 2,
      "isOutOfBreedingWindow": false,
      "interval": 18,
      "type": "breeding",
      "cowId": 845,
      "animalId": "1489",
      "eventId": 34708,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 111,
      "ageInDays": 1741,
      "startDateTime": 1514781900,
      "reportingDateTime": 1514813106
    }, {
      "sire": null,
      "breedingNumber": 12,
      "isOutOfBreedingWindow": false,
      "interval": 26,
      "type": "breeding",
      "cowId": 730,
      "animalId": "769",
      "eventId": 34707,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 365,
      "ageInDays": 1462,
      "startDateTime": 1514781900,
      "reportingDateTime": 1514813103
    }, {
      "sire": null,
      "breedingNumber": 13,
      "isOutOfBreedingWindow": false,
      "interval": 20,
      "type": "breeding",
      "cowId": 738,
      "animalId": "780",
      "eventId": 34706,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 321,
      "ageInDays": 1424,
      "startDateTime": 1514781900,
      "reportingDateTime": 1514813099
    }, {
      "sire": null,
      "breedingNumber": 2,
      "isOutOfBreedingWindow": false,
      "interval": 15,
      "type": "breeding",
      "cowId": 636,
      "animalId": "624",
      "eventId": 34705,
      "deletable": false,
      "lactationNumber": 4,
      "daysInLactation": 91,
      "ageInDays": 2100,
      "startDateTime": 1514781900,
      "reportingDateTime": 1514813097
    }, {
      "heatIndexPeak": "98",
      "type": "systemHeat",
      "cowId": 730,
      "animalId": "769",
      "eventId": 34714,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 365,
      "ageInDays": 1462,
      "startDateTime": 1514779200,
      "reportingDateTime": 1514841344
    }, {
      "heatIndexPeak": "99",
      "type": "systemHeat",
      "cowId": 738,
      "animalId": "780",
      "eventId": 34713,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 321,
      "ageInDays": 1424,
      "startDateTime": 1514775600,
      "reportingDateTime": 1514813125
    }, {
      "heatIndexPeak": "87",
      "type": "systemHeat",
      "cowId": 699,
      "animalId": "725",
      "eventId": 34700,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 120,
      "ageInDays": 1651,
      "startDateTime": 1514772000,
      "reportingDateTime": 1514809528
    }, {
      "heatIndexPeak": "96",
      "type": "systemHeat",
      "cowId": 845,
      "animalId": "1489",
      "eventId": 34699,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 111,
      "ageInDays": 1741,
      "startDateTime": 1514764800,
      "reportingDateTime": 1514844953
    }, {
      "healthIndex": 57,
      "endDate": null,
      "minValueDateTime": 1514808000,
      "type": "systemHealth",
      "cowId": 926,
      "animalId": "977",
      "eventId": 34694,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 8,
      "ageInDays": 725,
      "startDateTime": 1514761200,
      "reportingDateTime": 1514810703
    }, {
      "newGroupId": 57,
      "newGroupName": "Low",
      "currentGroupId": 60,
      "currentGroupName": "Calving Preparation",
      "type": "changeGroup",
      "cowId": 819,
      "animalId": "881",
      "eventId": 34704,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 351,
      "ageInDays": 1044,
      "startDateTime": 1514757600,
      "reportingDateTime": 1514813095
    }, {
      "heatIndexPeak": "87",
      "type": "systemHeat",
      "cowId": 589,
      "animalId": "483",
      "eventId": 34698,
      "deletable": false,
      "lactationNumber": 5,
      "daysInLactation": 395,
      "ageInDays": 2688,
      "startDateTime": 1514746800,
      "reportingDateTime": 1514784320
    }, {
      "alertType": "distress",
      "duration": 1250,
      "originalStartDateTime": null,
      "endDateTime": 1514770647,
      "daysInPregnancy": null,
      "type": "distress",
      "cowId": 977,
      "animalId": "127",
      "eventId": 34674,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 616,
      "ageInDays": 616,
      "startDateTime": 1514743706,
      "reportingDateTime": 1514770923
    }, {
      "heatIndexPeak": "95",
      "type": "systemHeat",
      "cowId": 709,
      "animalId": "738",
      "eventId": 34697,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 51,
      "ageInDays": 1578,
      "startDateTime": 1514736000,
      "reportingDateTime": 1514772324
    }, {
      "heatIndexPeak": "91",
      "type": "systemHeat",
      "cowId": 636,
      "animalId": "624",
      "eventId": 34695,
      "deletable": false,
      "lactationNumber": 4,
      "daysInLactation": 90,
      "ageInDays": 2099,
      "startDateTime": 1514732400,
      "reportingDateTime": 1514768779
    }, {
      "heatIndexPeak": "65",
      "type": "systemHeat",
      "cowId": 1004,
      "animalId": "149",
      "eventId": 34696,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 547,
      "ageInDays": 547,
      "startDateTime": 1514728800,
      "reportingDateTime": 1514768799
    }, {
      "heatIndexPeak": "99",
      "type": "systemHeat",
      "cowId": 1022,
      "animalId": "170",
      "eventId": 34693,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 466,
      "ageInDays": 466,
      "startDateTime": 1514714400,
      "reportingDateTime": 1514822722
    }, {
      "sire": null,
      "breedingNumber": 3,
      "isOutOfBreedingWindow": true,
      "interval": 50,
      "type": "breeding",
      "cowId": 888,
      "animalId": "938",
      "eventId": 34692,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 179,
      "ageInDays": 836,
      "startDateTime": 1514695500,
      "reportingDateTime": 1514749023
    }, {
      "sire": null,
      "breedingNumber": 14,
      "isOutOfBreedingWindow": false,
      "interval": 23,
      "type": "breeding",
      "cowId": 790,
      "animalId": "846",
      "eventId": 34691,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 534,
      "ageInDays": 1190,
      "startDateTime": 1514695500,
      "reportingDateTime": 1514749021
    }, {
      "heatIndexPeak": "98",
      "type": "systemHeat",
      "cowId": 662,
      "animalId": "669",
      "eventId": 34673,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 53,
      "ageInDays": 1848,
      "startDateTime": 1514692800,
      "reportingDateTime": 1514802323
    }, {
      "heatIndexPeak": "99",
      "type": "systemHeat",
      "cowId": 653,
      "animalId": "656",
      "eventId": 34672,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 396,
      "ageInDays": 1894,
      "startDateTime": 1514682000,
      "reportingDateTime": 1514791519
    }, {
      "newGroupId": 62,
      "newGroupName": "Dry",
      "currentGroupId": 58,
      "currentGroupName": "Young",
      "type": "changeGroup",
      "cowId": 854,
      "animalId": "900",
      "eventId": 34684,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 300,
      "ageInDays": 978,
      "startDateTime": 1514671201,
      "reportingDateTime": 1514749014
    }, {
      "newGroupId": 62,
      "newGroupName": "Dry",
      "currentGroupId": 56,
      "currentGroupName": "High",
      "type": "changeGroup",
      "cowId": 670,
      "animalId": "678",
      "eventId": 34682,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 338,
      "ageInDays": 1803,
      "startDateTime": 1514671201,
      "reportingDateTime": 1514749011
    }, {
      "newGroupId": 62,
      "newGroupName": "Dry",
      "currentGroupId": 59,
      "currentGroupName": "1st Lactation",
      "type": "changeGroup",
      "cowId": 801,
      "animalId": "861",
      "eventId": 34680,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 361,
      "ageInDays": 1099,
      "startDateTime": 1514671201,
      "reportingDateTime": 1514749009
    }, {
      "newGroupId": 41,
      "newGroupName": "Weaned Heifers",
      "currentGroupId": 46,
      "currentGroupName": "Suckling Calves",
      "type": "changeGroup",
      "cowId": 1197,
      "animalId": "339",
      "eventId": 34690,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 60,
      "ageInDays": 60,
      "startDateTime": 1514671200,
      "reportingDateTime": 1514749020
    }, {
      "newGroupId": 41,
      "newGroupName": "Weaned Heifers",
      "currentGroupId": 46,
      "currentGroupName": "Suckling Calves",
      "type": "changeGroup",
      "cowId": 1199,
      "animalId": "340",
      "eventId": 34689,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 55,
      "ageInDays": 55,
      "startDateTime": 1514671200,
      "reportingDateTime": 1514749018
    }, {
      "newGroupId": 41,
      "newGroupName": "Weaned Heifers",
      "currentGroupId": 46,
      "currentGroupName": "Suckling Calves",
      "type": "changeGroup",
      "cowId": 1198,
      "animalId": "7418",
      "eventId": 34688,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 56,
      "ageInDays": 56,
      "startDateTime": 1514671200,
      "reportingDateTime": 1514749017
    }, {
      "destinationGroup": 62,
      "destinationGroupName": "Dry",
      "daysInPregnancy": 204,
      "type": "dryOff",
      "cowId": 854,
      "animalId": "900",
      "eventId": 34685,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 300,
      "ageInDays": 978,
      "startDateTime": 1514671200,
      "reportingDateTime": 1514749014
    }, {
      "destinationGroup": 62,
      "destinationGroupName": "Dry",
      "daysInPregnancy": 211,
      "type": "dryOff",
      "cowId": 670,
      "animalId": "678",
      "eventId": 34683,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 338,
      "ageInDays": 1803,
      "startDateTime": 1514671200,
      "reportingDateTime": 1514749011
    }, {
      "destinationGroup": 62,
      "destinationGroupName": "Dry",
      "daysInPregnancy": 207,
      "type": "dryOff",
      "cowId": 801,
      "animalId": "861",
      "eventId": 34681,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 361,
      "ageInDays": 1099,
      "startDateTime": 1514671200,
      "reportingDateTime": 1514749009
    }, {
      "alertType": "distress",
      "duration": 920,
      "originalStartDateTime": null,
      "endDateTime": 1514670301,
      "daysInPregnancy": null,
      "type": "distress",
      "cowId": 755,
      "animalId": "805",
      "eventId": 34666,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 118,
      "ageInDays": 1342,
      "startDateTime": 1514664301,
      "reportingDateTime": 1514670723
    }, {
      "alertType": "distress",
      "duration": 1040,
      "originalStartDateTime": null,
      "endDateTime": 1514662936,
      "daysInPregnancy": null,
      "type": "distress",
      "cowId": 755,
      "animalId": "805",
      "eventId": 34664,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 118,
      "ageInDays": 1342,
      "startDateTime": 1514657401,
      "reportingDateTime": 1514663523
    }, {
      "heatIndexPeak": "95",
      "type": "systemHeat",
      "cowId": 712,
      "animalId": "742",
      "eventId": 34671,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 902,
      "ageInDays": 1559,
      "startDateTime": 1514656800,
      "reportingDateTime": 1514763315
    }, {
      "heatIndexPeak": "91",
      "type": "systemHeat",
      "cowId": 626,
      "animalId": "594",
      "eventId": 34670,
      "deletable": false,
      "lactationNumber": 4,
      "daysInLactation": 225,
      "ageInDays": 2210,
      "startDateTime": 1514653200,
      "reportingDateTime": 1514689524
    }, {
      "heatIndexPeak": "99",
      "type": "systemHeat",
      "cowId": 790,
      "animalId": "846",
      "eventId": 34667,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 533,
      "ageInDays": 1189,
      "startDateTime": 1514646000,
      "reportingDateTime": 1514743529
    }, {
      "alertType": "distress",
      "duration": 1360,
      "originalStartDateTime": null,
      "endDateTime": 1514646376,
      "daysInPregnancy": null,
      "type": "distress",
      "cowId": 755,
      "animalId": "805",
      "eventId": 34663,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 118,
      "ageInDays": 1342,
      "startDateTime": 1514642896,
      "reportingDateTime": 1514646723
    }, {
      "heatIndexPeak": "59",
      "type": "systemHeat",
      "cowId": 958,
      "animalId": "504",
      "eventId": 34669,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 137,
      "ageInDays": 1232,
      "startDateTime": 1514642400,
      "reportingDateTime": 1514682403
    }, {
      "heatIndexPeak": "85",
      "type": "systemHeat",
      "cowId": 799,
      "animalId": "857",
      "eventId": 34668,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 33,
      "ageInDays": 1117,
      "startDateTime": 1514642400,
      "reportingDateTime": 1514752510
    }, {
      "alertType": "distress",
      "duration": 1320,
      "originalStartDateTime": null,
      "endDateTime": 1514730761,
      "daysInPregnancy": null,
      "type": "distress",
      "cowId": 977,
      "animalId": "127",
      "eventId": 34662,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 615,
      "ageInDays": 615,
      "startDateTime": 1514635646,
      "reportingDateTime": 1514731323
    }, {
      "heatIndexPeak": "93",
      "type": "systemHeat",
      "cowId": 652,
      "animalId": "654",
      "eventId": 34665,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 441,
      "ageInDays": 1897,
      "startDateTime": 1514624400,
      "reportingDateTime": 1514733339
    }, {
      "alertType": "distress",
      "duration": 860,
      "originalStartDateTime": null,
      "endDateTime": 1514630876,
      "daysInPregnancy": null,
      "type": "distress",
      "cowId": 977,
      "animalId": "127",
      "eventId": 34661,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 615,
      "ageInDays": 615,
      "startDateTime": 1514622866,
      "reportingDateTime": 1514631124
    }, {
      "alertType": "distress",
      "duration": 1390,
      "originalStartDateTime": null,
      "endDateTime": 1514635141,
      "daysInPregnancy": null,
      "type": "distress",
      "cowId": 755,
      "animalId": "805",
      "eventId": 34660,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 118,
      "ageInDays": 1342,
      "startDateTime": 1514620725,
      "reportingDateTime": 1514635323
    }, {
      "alertType": "distress",
      "duration": 1320,
      "originalStartDateTime": null,
      "endDateTime": 1514615205,
      "daysInPregnancy": null,
      "type": "distress",
      "cowId": 755,
      "animalId": "805",
      "eventId": 34639,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 118,
      "ageInDays": 1342,
      "startDateTime": 1514614005,
      "reportingDateTime": 1514615523
    }, {
      "healthIndex": 54,
      "endDate": 1514829600,
      "minValueDateTime": 1514678400,
      "type": "systemHealth",
      "cowId": 977,
      "animalId": "127",
      "eventId": 34638,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 615,
      "ageInDays": 615,
      "startDateTime": 1514599200,
      "reportingDateTime": 1514830528
    }, {
      "alertType": "distress",
      "duration": 1380,
      "originalStartDateTime": null,
      "endDateTime": 1514611605,
      "daysInPregnancy": null,
      "type": "distress",
      "cowId": 755,
      "animalId": "805",
      "eventId": 34635,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 117,
      "ageInDays": 1341,
      "startDateTime": 1514571495,
      "reportingDateTime": 1514611923
    }, {
      "healthIndex": 74,
      "endDate": 1514743200,
      "minValueDateTime": 1514584800,
      "type": "systemHealth",
      "cowId": 755,
      "animalId": "805",
      "eventId": 34636,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 117,
      "ageInDays": 1341,
      "startDateTime": 1514570400,
      "reportingDateTime": 1514745304
    }, {
      "healthIndex": 65,
      "endDate": 1514646000,
      "minValueDateTime": 1514595600,
      "type": "systemHealth",
      "cowId": 847,
      "animalId": "892",
      "eventId": 34633,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 311,
      "ageInDays": 1010,
      "startDateTime": 1514552400,
      "reportingDateTime": 1514647512
    }, {
      "heatIndexPeak": "94",
      "type": "systemHeat",
      "cowId": 888,
      "animalId": "938",
      "eventId": 34637,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 177,
      "ageInDays": 834,
      "startDateTime": 1514534400,
      "reportingDateTime": 1514625934
    }, {
      "sire": null,
      "breedingNumber": 1,
      "isOutOfBreedingWindow": false,
      "interval": null,
      "type": "breeding",
      "cowId": 592,
      "animalId": "526",
      "eventId": 34659,
      "deletable": false,
      "lactationNumber": 5,
      "daysInLactation": 77,
      "ageInDays": 2535,
      "startDateTime": 1514522700,
      "reportingDateTime": 1514620386
    }, {
      "sire": null,
      "breedingNumber": 2,
      "isOutOfBreedingWindow": false,
      "interval": 21,
      "type": "breeding",
      "cowId": 699,
      "animalId": "725",
      "eventId": 34658,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 117,
      "ageInDays": 1648,
      "startDateTime": 1514522700,
      "reportingDateTime": 1514620384
    }, {
      "sire": null,
      "breedingNumber": 2,
      "isOutOfBreedingWindow": false,
      "interval": 63,
      "type": "breeding",
      "cowId": 635,
      "animalId": "623",
      "eventId": 34657,
      "deletable": false,
      "lactationNumber": 4,
      "daysInLactation": 129,
      "ageInDays": 2105,
      "startDateTime": 1514522700,
      "reportingDateTime": 1514620382
    }, {
      "sire": null,
      "breedingNumber": 3,
      "isOutOfBreedingWindow": false,
      "interval": 18,
      "type": "breeding",
      "cowId": 779,
      "animalId": "829",
      "eventId": 34656,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 116,
      "ageInDays": 1238,
      "startDateTime": 1514522700,
      "reportingDateTime": 1514620380
    }, {
      "heatIndexPeak": "91",
      "type": "systemHeat",
      "cowId": 635,
      "animalId": "623",
      "eventId": 34634,
      "deletable": false,
      "lactationNumber": 4,
      "daysInLactation": 129,
      "ageInDays": 2105,
      "startDateTime": 1514516400,
      "reportingDateTime": 1514554506
    }, {
      "heatIndexPeak": "94",
      "type": "systemHeat",
      "cowId": 779,
      "animalId": "829",
      "eventId": 34632,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 116,
      "ageInDays": 1238,
      "startDateTime": 1514516400,
      "reportingDateTime": 1514553333
    }, {
      "heatIndexPeak": "85",
      "type": "systemHeat",
      "cowId": 725,
      "animalId": "762",
      "eventId": 34631,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 1,
      "ageInDays": 1489,
      "startDateTime": 1514516400,
      "reportingDateTime": 1514749003
    }, {
      "healthIndex": 85,
      "endDate": 1514530800,
      "minValueDateTime": 1514505600,
      "type": "systemHealth",
      "cowId": 914,
      "animalId": "965",
      "eventId": 34629,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 5,
      "ageInDays": 752,
      "startDateTime": 1514505600,
      "reportingDateTime": 1514533504
    }, {
      "heatIndexPeak": "99",
      "type": "systemHeat",
      "cowId": 621,
      "animalId": "587",
      "eventId": 34630,
      "deletable": false,
      "lactationNumber": 4,
      "daysInLactation": 313,
      "ageInDays": 2244,
      "startDateTime": 1514473200,
      "reportingDateTime": 1514509575
    }, {
      "destinationGroup": 57,
      "destinationGroupName": "Low",
      "calvingEase": null,
      "daysInPregnancy": 277,
      "oldLactationNumber": 2,
      "newborns": null,
      "type": "calving",
      "cowId": 725,
      "animalId": "762",
      "eventId": 34677,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 0,
      "ageInDays": 1488,
      "startDateTime": 1514463600,
      "reportingDateTime": 1514749003
    }, {
      "heatIndexPeak": "87",
      "type": "systemHeat",
      "cowId": 699,
      "animalId": "725",
      "eventId": 34628,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 116,
      "ageInDays": 1647,
      "startDateTime": 1514462400,
      "reportingDateTime": 1514499345
    }, {
      "heatIndexPeak": "97",
      "type": "systemHeat",
      "cowId": 592,
      "animalId": "526",
      "eventId": 34627,
      "deletable": false,
      "lactationNumber": 5,
      "daysInLactation": 76,
      "ageInDays": 2534,
      "startDateTime": 1514462400,
      "reportingDateTime": 1514499341
    }, {
      "sire": null,
      "breedingNumber": 2,
      "isOutOfBreedingWindow": false,
      "interval": 22,
      "type": "breeding",
      "cowId": 640,
      "animalId": "635",
      "eventId": 34655,
      "deletable": false,
      "lactationNumber": 4,
      "daysInLactation": 87,
      "ageInDays": 2020,
      "startDateTime": 1514436300,
      "reportingDateTime": 1514620378
    }, {
      "destinationGroup": 59,
      "destinationGroupName": "1st Lactation",
      "calvingEase": null,
      "daysInPregnancy": 294,
      "oldLactationNumber": 0,
      "newborns": null,
      "type": "calving",
      "cowId": 903,
      "animalId": "954",
      "eventId": 34654,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 0,
      "ageInDays": 808,
      "startDateTime": 1514436000,
      "reportingDateTime": 1514620375
    }, {
      "heatIndexPeak": "99",
      "type": "systemHeat",
      "cowId": 669,
      "animalId": "677",
      "eventId": 34626,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 695,
      "ageInDays": 1817,
      "startDateTime": 1514433600,
      "reportingDateTime": 1514542539
    }, {
      "heatIndexPeak": "63",
      "type": "systemHeat",
      "cowId": 943,
      "animalId": "994",
      "eventId": 34625,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 687,
      "ageInDays": 687,
      "startDateTime": 1514426400,
      "reportingDateTime": 1514534720
    }, {
      "heatIndexPeak": "86",
      "type": "systemHeat",
      "cowId": 931,
      "animalId": "982",
      "eventId": 34624,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 0,
      "ageInDays": 709,
      "startDateTime": 1514426400,
      "reportingDateTime": 1514620372
    }, {
      "destinationGroup": 58,
      "destinationGroupName": "Young",
      "calvingEase": null,
      "daysInPregnancy": 275,
      "oldLactationNumber": 0,
      "newborns": null,
      "type": "calving",
      "cowId": 931,
      "animalId": "982",
      "eventId": 34652,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 0,
      "ageInDays": 709,
      "startDateTime": 1514421000,
      "reportingDateTime": 1514620372
    }, {
      "newGroupId": 46,
      "newGroupName": "Suckling Calves",
      "currentGroupId": 0,
      "currentGroupName": null,
      "type": "changeGroup",
      "cowId": 1227,
      "animalId": "368",
      "eventId": 34641,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 0,
      "ageInDays": 0,
      "startDateTime": 1514419201,
      "reportingDateTime": 1514620354
    }, {
      "destinationGroup": 59,
      "destinationGroupName": "1st Lactation",
      "calvingEase": null,
      "daysInPregnancy": 266,
      "oldLactationNumber": 0,
      "newborns": null,
      "type": "calving",
      "cowId": 924,
      "animalId": "975",
      "eventId": 34650,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 0,
      "ageInDays": 724,
      "startDateTime": 1514419200,
      "reportingDateTime": 1514620369
    }, {
      "destinationGroup": 0,
      "destinationGroupName": null,
      "cowEntryStatus": "Heifer",
      "type": "herdEntry",
      "cowId": 1227,
      "animalId": "368",
      "eventId": 34642,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 0,
      "ageInDays": 0,
      "startDateTime": 1514419200,
      "reportingDateTime": 1514620353
    }, {
      "birthDateCalculated": false,
      "type": "birth",
      "cowId": 1227,
      "animalId": "368",
      "eventId": 34640,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 0,
      "ageInDays": 0,
      "startDateTime": 1514419200,
      "reportingDateTime": 1514620353
    }, {
      "healthIndex": 85,
      "endDate": 1514422800,
      "minValueDateTime": 1514415600,
      "type": "systemHealth",
      "cowId": 766,
      "animalId": "817",
      "eventId": 34620,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 165,
      "ageInDays": 1295,
      "startDateTime": 1514415600,
      "reportingDateTime": 1514423733
    }, {
      "newGroupId": 57,
      "newGroupName": "Low",
      "currentGroupId": 60,
      "currentGroupName": "Calving Preparation",
      "type": "changeGroup",
      "cowId": 725,
      "animalId": "762",
      "eventId": 34675,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 358,
      "ageInDays": 1488,
      "startDateTime": 1514412000,
      "reportingDateTime": 1514749000
    }, {
      "newGroupId": 59,
      "newGroupName": "1st Lactation",
      "currentGroupId": 61,
      "currentGroupName": "Prepare Heifers",
      "type": "changeGroup",
      "cowId": 924,
      "animalId": "975",
      "eventId": 34648,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 724,
      "ageInDays": 724,
      "startDateTime": 1514412000,
      "reportingDateTime": 1514620367
    }, {
      "newGroupId": 41,
      "newGroupName": "Weaned Heifers",
      "currentGroupId": 46,
      "currentGroupName": "Suckling Calves",
      "type": "changeGroup",
      "cowId": 1196,
      "animalId": "338",
      "eventId": 34647,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 64,
      "ageInDays": 64,
      "startDateTime": 1514412000,
      "reportingDateTime": 1514620366
    }, {
      "newGroupId": 41,
      "newGroupName": "Weaned Heifers",
      "currentGroupId": 46,
      "currentGroupName": "Suckling Calves",
      "type": "changeGroup",
      "cowId": 1195,
      "animalId": "337",
      "eventId": 34646,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 68,
      "ageInDays": 68,
      "startDateTime": 1514412000,
      "reportingDateTime": 1514620365
    }, {
      "newGroupId": 41,
      "newGroupName": "Weaned Heifers",
      "currentGroupId": 46,
      "currentGroupName": "Suckling Calves",
      "type": "changeGroup",
      "cowId": 1194,
      "animalId": "336",
      "eventId": 34645,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 70,
      "ageInDays": 70,
      "startDateTime": 1514412000,
      "reportingDateTime": 1514620363
    }, {
      "newGroupId": 59,
      "newGroupName": "1st Lactation",
      "currentGroupId": 61,
      "currentGroupName": "Prepare Heifers",
      "type": "changeGroup",
      "cowId": 903,
      "animalId": "954",
      "eventId": 34644,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 808,
      "ageInDays": 808,
      "startDateTime": 1514412000,
      "reportingDateTime": 1514620362
    }, {
      "newGroupId": 58,
      "newGroupName": "Young",
      "currentGroupId": 61,
      "currentGroupName": "Prepare Heifers",
      "type": "changeGroup",
      "cowId": 931,
      "animalId": "982",
      "eventId": 34643,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 709,
      "ageInDays": 709,
      "startDateTime": 1514412000,
      "reportingDateTime": 1514620360
    }, {
      "heatIndexPeak": "99",
      "type": "systemHeat",
      "cowId": 640,
      "animalId": "635",
      "eventId": 34623,
      "deletable": false,
      "lactationNumber": 4,
      "daysInLactation": 86,
      "ageInDays": 2019,
      "startDateTime": 1514408400,
      "reportingDateTime": 1514445336
    }, {
      "alertType": "postCalving",
      "duration": 1360,
      "originalStartDateTime": null,
      "endDateTime": 1514394648,
      "daysInPregnancy": null,
      "type": "distress",
      "cowId": 705,
      "animalId": "732",
      "eventId": 34618,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 1,
      "ageInDays": 1600,
      "startDateTime": 1514391048,
      "reportingDateTime": 1514394723
    }, {
      "heatIndexPeak": "78",
      "type": "systemHeat",
      "cowId": 608,
      "animalId": "560",
      "eventId": 34622,
      "deletable": false,
      "lactationNumber": 4,
      "daysInLactation": 438,
      "ageInDays": 2331,
      "startDateTime": 1514390400,
      "reportingDateTime": 1514427339
    }, {
      "heatIndexPeak": "93",
      "type": "systemHeat",
      "cowId": 618,
      "animalId": "582",
      "eventId": 34621,
      "deletable": false,
      "lactationNumber": 5,
      "daysInLactation": 52,
      "ageInDays": 2262,
      "startDateTime": 1514383200,
      "reportingDateTime": 1514492722
    }, {
      "healthIndex": 85,
      "endDate": 1514383200,
      "minValueDateTime": 1514365200,
      "type": "systemHealth",
      "cowId": 924,
      "animalId": "975",
      "eventId": 34607,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 723,
      "ageInDays": 723,
      "startDateTime": 1514365200,
      "reportingDateTime": 1514384125
    }, {
      "healthIndex": 85,
      "endDate": 1514386800,
      "minValueDateTime": 1514365200,
      "type": "systemHealth",
      "cowId": 870,
      "animalId": "917",
      "eventId": 34606,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 234,
      "ageInDays": 897,
      "startDateTime": 1514365200,
      "reportingDateTime": 1514390104
    }, {
      "heatIndexPeak": "64",
      "type": "systemHeat",
      "cowId": 920,
      "animalId": "971",
      "eventId": 34619,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 16,
      "ageInDays": 728,
      "startDateTime": 1514354400,
      "reportingDateTime": 1514393705
    }, {
      "heatIndexPeak": "56",
      "type": "systemHeat",
      "cowId": 760,
      "animalId": "811",
      "eventId": 34608,
      "deletable": false,
      "lactationNumber": 2,
      "daysInLactation": 96,
      "ageInDays": 1321,
      "startDateTime": 1514336400,
      "reportingDateTime": 1514372715
    }, {
      "healthIndex": 79,
      "endDate": 1514394000,
      "minValueDateTime": 1514365200,
      "type": "systemHealth",
      "cowId": 915,
      "animalId": "966",
      "eventId": 34530,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 12,
      "ageInDays": 747,
      "startDateTime": 1514329200,
      "reportingDateTime": 1514395521
    }, {
      "newGroupId": 61,
      "newGroupName": "Prepare Heifers",
      "currentGroupId": 66,
      "currentGroupName": "Heifers Pregnant",
      "type": "changeGroup",
      "cowId": 947,
      "animalId": "103",
      "eventId": 34617,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 676,
      "ageInDays": 676,
      "startDateTime": 1514325600,
      "reportingDateTime": 1514389085
    }, {
      "newGroupId": 61,
      "newGroupName": "Prepare Heifers",
      "currentGroupId": 66,
      "currentGroupName": "Heifers Pregnant",
      "type": "changeGroup",
      "cowId": 929,
      "animalId": "980",
      "eventId": 34616,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 713,
      "ageInDays": 713,
      "startDateTime": 1514325600,
      "reportingDateTime": 1514389084
    }];
    /***/
  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/dashboard.service */
    "./src/app/core/services/dashboard.service.ts");
    /* harmony import */


    var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/utils.service */
    "./src/app/core/services/utils.service.ts");
    /* harmony import */


    var _enums_directionTypes_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./enums/directionTypes.enum */
    "./src/app/core/enums/directionTypes.enum.ts");
    /* harmony import */


    var _interceptors_http_mock_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./interceptors/http-mock.interceptor */
    "./src/app/core/interceptors/http-mock.interceptor.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _constants_app_data_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./constants/app-data.const */
    "./src/app/core/constants/app-data.const.ts");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      providers: [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"], _services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"], {
        provide: _enums_directionTypes_enum__WEBPACK_IMPORTED_MODULE_3__["DIRECTION_TYPES"],
        useValue: _enums_directionTypes_enum__WEBPACK_IMPORTED_MODULE_3__["directionTypes"]
      }, {
        provide: _constants_app_data_const__WEBPACK_IMPORTED_MODULE_6__["APP_DATA"],
        useValue: _constants_app_data_const__WEBPACK_IMPORTED_MODULE_6__["appData"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_http_mock_interceptor__WEBPACK_IMPORTED_MODULE_4__["HttpMockInterceptor"],
        multi: true
      }]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          providers: [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"], _services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"], {
            provide: _enums_directionTypes_enum__WEBPACK_IMPORTED_MODULE_3__["DIRECTION_TYPES"],
            useValue: _enums_directionTypes_enum__WEBPACK_IMPORTED_MODULE_3__["directionTypes"]
          }, {
            provide: _constants_app_data_const__WEBPACK_IMPORTED_MODULE_6__["APP_DATA"],
            useValue: _constants_app_data_const__WEBPACK_IMPORTED_MODULE_6__["appData"]
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_http_mock_interceptor__WEBPACK_IMPORTED_MODULE_4__["HttpMockInterceptor"],
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/enums/directionTypes.enum.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/enums/directionTypes.enum.ts ***!
    \***************************************************/

  /*! exports provided: DIRECTION_TYPES, directionTypes */

  /***/
  function srcAppCoreEnumsDirectionTypesEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DIRECTION_TYPES", function () {
      return DIRECTION_TYPES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "directionTypes", function () {
      return directionTypes;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var directionTypes;

    (function (directionTypes) {
      directionTypes["asc"] = "asc";
      directionTypes["desc"] = "desc";
      directionTypes["empty"] = "";
    })(directionTypes || (directionTypes = {}));

    var DIRECTION_TYPES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('directionTypes');
    /***/
  },

  /***/
  "./src/app/core/index.ts":
  /*!*******************************!*\
    !*** ./src/app/core/index.ts ***!
    \*******************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core.module */
    "./src/app/core/core.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"];
    });
    /***/

  },

  /***/
  "./src/app/core/interceptors/http-mock.interceptor.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/interceptors/http-mock.interceptor.ts ***!
    \************************************************************/

  /*! exports provided: HttpMockInterceptor */

  /***/
  function srcAppCoreInterceptorsHttpMockInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpMockInterceptor", function () {
      return HttpMockInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _constants_app_data_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants/app-data.const */
    "./src/app/core/constants/app-data.const.ts");
    /* harmony import */


    var _models_cow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/cow */
    "./src/app/core/models/cow.ts");

    var HttpMockInterceptor = /*#__PURE__*/function () {
      function HttpMockInterceptor(appDataConst) {
        _classCallCheck(this, HttpMockInterceptor);

        this.appDataConst = appDataConst;
        var localStorageAppData = JSON.parse(localStorage.getItem('appData'));

        if (localStorageAppData) {
          this.appData = localStorageAppData;
        } else {
          this.appData = this.appDataConst;
          localStorage.setItem('appData', JSON.stringify(this.appDataConst));
        }
      }

      _createClass(HttpMockInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this = this;

          var url = req.url,
              method = req.method,
              headers = req.headers,
              body = req.body;

          var handleRoute = function handleRoute() {
            switch (true) {
              case url.endsWith('/cows') && method === 'GET':
                return getCows();

              case url.endsWith('/cows') && method === 'PUT':
                return updateCow();

              case url.endsWith('/cows') && method === 'POST':
                return addCow();

              case url.match(/\/cows\/\d+$/) && method === 'DELETE':
                return deleteCow();

              default:
                // pass through any requests not handled above
                return next.handle(req);
            }
          };

          var getCows = function getCows() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
              status: 200,
              body: _this.appData
            }));
          };

          var updateCow = function updateCow() {
            var cowIndex = body.cowIndex < 0 ? 0 : body.cowIndex;
            _this.appData[cowIndex][body.cowPropertyKey] = body.value;
            localStorage.setItem('appData', JSON.stringify(_this.appData));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
              status: 200,
              body: _this.appData
            }));
          };

          var deleteCow = function deleteCow() {
            var urlParts = url.split('/');
            var index = +urlParts[urlParts.length - 1];

            _this.appData.splice(index, 1);

            localStorage.setItem('appData', JSON.stringify(_this.appData));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
              status: 200
            }));
          };

          var addCow = function addCow() {
            var cowId = maxPropertyValue('cowId') + 1;
            var animalId = maxPropertyValue('animalId') + 1;
            var eventId = maxPropertyValue('eventId') + 1;

            _this.appData.unshift(_models_cow__WEBPACK_IMPORTED_MODULE_4__["Cow"].createInstance({
              cowId: cowId,
              animalId: animalId,
              eventId: eventId
            }));

            localStorage.setItem('appData', JSON.stringify(_this.appData));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
              status: 200,
              body: _this.appData
            }));
          };

          var maxPropertyValue = function maxPropertyValue(property) {
            return Math.max.apply(Math, _this.appData.map(function (cow) {
              return cow[property] || 0;
            }));
          };

          return handleRoute();
        }
      }]);

      return HttpMockInterceptor;
    }();

    HttpMockInterceptor.ɵfac = function HttpMockInterceptor_Factory(t) {
      return new (t || HttpMockInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_constants_app_data_const__WEBPACK_IMPORTED_MODULE_3__["APP_DATA"]));
    };

    HttpMockInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpMockInterceptor,
      factory: HttpMockInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpMockInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_constants_app_data_const__WEBPACK_IMPORTED_MODULE_3__["APP_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/models/cow.ts":
  /*!************************************!*\
    !*** ./src/app/core/models/cow.ts ***!
    \************************************/

  /*! exports provided: Cow */

  /***/
  function srcAppCoreModelsCowTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cow", function () {
      return Cow;
    });

    var Cow = /*#__PURE__*/function () {
      function Cow() {
        _classCallCheck(this, Cow);
      }

      _createClass(Cow, null, [{
        key: "createInstance",
        value: function createInstance(initializer) {
          var instance = new Cow();
          instance.cowId = initializer.cowId;
          instance.animalId = initializer.animalId;
          instance.eventId = initializer.eventId;
          instance.healthIndex = initializer.healthIndex || null;
          instance.endDate = initializer.endDate || null;
          instance.endDateTime = initializer.endDateTime || null;
          instance.minValueDateTime = initializer.minValueDateTime || null;
          instance.type = initializer.type || null;
          instance.deletable = initializer.deletable;
          instance.lactationNumber = initializer.lactationNumber;
          instance.oldLactationNumber = initializer.oldLactationNumber || null;
          instance.daysInLactation = initializer.daysInLactation;
          instance.ageInDays = initializer.ageInDays;
          instance.originalStartDateTime = initializer.originalStartDateTime || null;
          instance.startDateTime = initializer.startDateTime;
          instance.reportingDateTime = initializer.reportingDateTime;
          instance.alert = initializer.alert || null;
          instance.duration = initializer.duration || null;
          instance.daysInPregnancy = initializer.daysInPregnancy || null;
          instance.heatIndexPeak = initializer.heatIndexPeak || null;
          instance.newGroupId = initializer.newGroupId || null;
          instance.newGroupName = initializer.newGroupName || null;
          instance.currentGroupId = initializer.currentGroupId || null;
          instance.currentGroupName = initializer.currentGroupName || null;
          instance.destinationGroupName = initializer.destinationGroupName || null;
          instance.destinationGroup = initializer.destinationGroup || null;
          instance.calvingEase = initializer.calvingEase || null;
          instance.newborns = initializer.newborns || null;
          instance.cowEntryStatus = initializer.cowEntryStatus || null;
          instance.birthDateCalculated = initializer.birthDateCalculated || null;
          instance.sire = initializer.sire || null;
          instance.breedingNumber = initializer.breedingNumber || null;
          instance.isOutOfBreedingWindow = initializer.isOutOfBreedingWindow || null;
          instance.interval = initializer.interval;
          return instance;
        }
      }]);

      return Cow;
    }();
    /***/

  },

  /***/
  "./src/app/core/services/dashboard.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/services/dashboard.service.ts ***!
    \****************************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppCoreServicesDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService(http) {
        _classCallCheck(this, DashboardService);

        this.http = http;
      }

      _createClass(DashboardService, [{
        key: "getCows",
        value: function getCows() {
          return this.http.get('/cows');
        }
      }, {
        key: "updateCow",
        value: function updateCow(cowIndex, value, cowPropertyKey) {
          return this.http.put('/cows', {
            cowIndex: cowIndex,
            value: value,
            cowPropertyKey: cowPropertyKey
          });
        }
      }, {
        key: "deleteCow",
        value: function deleteCow(index) {
          var url = "/cows/".concat(index);
          return this.http["delete"](url);
        }
      }, {
        key: "addCow",
        value: function addCow(cow) {
          var url = '/cows';
          return this.http.post(url, cow);
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ɵfac = function DashboardService_Factory(t) {
      return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DashboardService,
      factory: DashboardService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/utils.service.ts":
  /*!************************************************!*\
    !*** ./src/app/core/services/utils.service.ts ***!
    \************************************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppCoreServicesUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
      return UtilsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UtilsService = /*#__PURE__*/function () {
      function UtilsService() {
        _classCallCheck(this, UtilsService);
      }

      _createClass(UtilsService, [{
        key: "compare",
        value: function compare(v1, v2) {
          return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
        }
      }]);

      return UtilsService;
    }();

    UtilsService.ɵfac = function UtilsService_Factory(t) {
      return new (t || UtilsService)();
    };

    UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UtilsService,
      factory: UtilsService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_models_cow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../core/models/cow */
    "./src/app/core/models/cow.ts");
    /* harmony import */


    var _core_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/services/dashboard.service */
    "./src/app/core/services/dashboard.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./data-table/data-table.component */
    "./src/app/dashboard/data-table/data-table.component.ts");

    function DashboardComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-data-table", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateCow", function DashboardComponent_div_0_Template_app_data_table_updateCow_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.updateCow($event);
        })("deleteCow", function DashboardComponent_div_0_Template_app_data_table_deleteCow_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.deleteCow($event);
        })("addCow", function DashboardComponent_div_0_Template_app_data_table_addCow_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.addCow($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cows", ctx_r0.cows);
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(dashboardService) {
        _classCallCheck(this, DashboardComponent);

        this.dashboardService = dashboardService;
        this.cows = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.dashboardService.getCows().subscribe(function (data) {
            _this2.cows = data.map(function (initializer) {
              return _core_models_cow__WEBPACK_IMPORTED_MODULE_1__["Cow"].createInstance(initializer);
            });
          });
        }
      }, {
        key: "updateCow",
        value: function updateCow(_ref) {
          var value = _ref.value,
              cowPropertyKey = _ref.cowPropertyKey,
              cowIndex = _ref.cowIndex;
          this.dashboardService.updateCow(cowIndex, value, cowPropertyKey).subscribe();
        }
      }, {
        key: "deleteCow",
        value: function deleteCow(index) {
          this.dashboardService.deleteCow(index).subscribe();
        }
      }, {
        key: "addCow",
        value: function addCow(cow) {
          var _this3 = this;

          this.dashboardService.addCow(cow).subscribe(function (data) {
            _this3.cows = data.map(function (initializer) {
              return _core_models_cow__WEBPACK_IMPORTED_MODULE_1__["Cow"].createInstance(initializer);
            });
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 1,
      vars: 1,
      consts: [["class", "app-dashboard-container", 4, "ngIf"], [1, "app-dashboard-container"], [3, "cows", "updateCow", "deleteCow", "addCow"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cows.length > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_4__["DataTableComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/data-table/data-table.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/dashboard/data-table/data-table.component.ts ***!
    \**************************************************************/

  /*! exports provided: DataTableComponent */

  /***/
  function srcAppDashboardDataTableDataTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableComponent", function () {
      return DataTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_enums_directionTypes_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/core/enums/directionTypes.enum */
    "./src/app/core/enums/directionTypes.enum.ts");
    /* harmony import */


    var src_app_core_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/services/utils.service */
    "./src/app/core/services/utils.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_directives_sortable_header_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/directives/sortable-header.directive */
    "./src/app/shared/directives/sortable-header.directive.ts");
    /* harmony import */


    var _shared_directives_content_editable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/directives/content-editable.directive */
    "./src/app/shared/directives/content-editable.directive.ts");
    /* harmony import */


    var _shared_directives_digit_only_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/directives/digit-only.directive */
    "./src/app/shared/directives/digit-only.directive.ts");
    /* harmony import */


    var _shared_pipes_cow_keys_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/pipes/cow-keys.pipe */
    "./src/app/shared/pipes/cow-keys.pipe.ts");
    /* harmony import */


    var _shared_pipes_object_keys_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/pipes/object-keys.pipe */
    "./src/app/shared/pipes/object-keys.pipe.ts");

    function DataTableComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Are you sure you want to delete the entry?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableComponent_ng_template_0_Template_button_click_4_listener() {
          var deletingModal_r4 = ctx.$implicit;
          return deletingModal_r4.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DataTableComponent_th_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function DataTableComponent_th_11_Template_th_sort_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onSort($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cowPropertyKey_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("sortable", cowPropertyKey_r6.original);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cowPropertyKey_r6.normalized, " ");
      }
    }

    function DataTableComponent_tr_14_ng_container_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contentBlur", function DataTableComponent_tr_14_ng_container_5_td_1_Template_td_contentBlur_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var cowPropertyKey_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var cow_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.onEditValue($event, cowPropertyKey_r12, cow_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cowPropertyKey_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var cow_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cow_r9[cowPropertyKey_r12], " ");
      }
    }

    function DataTableComponent_tr_14_ng_container_5_td_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contentBlur", function DataTableComponent_tr_14_ng_container_5_td_2_Template_td_contentBlur_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var cowPropertyKey_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var cow_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.onEditValue($event, cowPropertyKey_r12, cow_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cowPropertyKey_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var cow_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cow_r9[cowPropertyKey_r12], " ");
      }
    }

    function DataTableComponent_tr_14_ng_container_5_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cowPropertyKey_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var cow_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cow_r9[cowPropertyKey_r12], " ");
      }
    }

    function DataTableComponent_tr_14_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableComponent_tr_14_ng_container_5_td_1_Template, 2, 1, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableComponent_tr_14_ng_container_5_td_2_Template, 2, 1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableComponent_tr_14_ng_container_5_td_3_Template, 2, 1, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var cowPropertyKey_r12 = ctx.$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.isEditableField(cowPropertyKey_r12) && ctx_r11.isDigitField(cowPropertyKey_r12));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.isEditableField(cowPropertyKey_r12) && !ctx_r11.isDigitField(cowPropertyKey_r12));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.isEditableField(cowPropertyKey_r12));
      }
    }

    function DataTableComponent_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableComponent_tr_14_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var cow_r9 = ctx.$implicit;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return ctx_r30.openDeletingModal(_r0, cow_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DataTableComponent_tr_14_ng_container_5_Template, 4, 3, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "objectKeys");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cow_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, cow_r9));
      }
    }

    var DataTableComponent = /*#__PURE__*/function () {
      function DataTableComponent(utilsService, modalService, directionTypesEnum) {
        _classCallCheck(this, DataTableComponent);

        this.utilsService = utilsService;
        this.modalService = modalService;
        this.directionTypesEnum = directionTypesEnum;
        this.updateCow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteCow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addCow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.globalDirection = this.directionTypesEnum.empty;
      }

      _createClass(DataTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.defaultCows = this.cows;
          this.cowProperties = Object.keys(this.cows[0]);
        }
      }, {
        key: "onSort",
        value: function onSort(_ref2) {
          var _this4 = this;

          var column = _ref2.column,
              direction = _ref2.direction;

          if (direction === '' || column === '') {
            this.cows = this.defaultCows;
          } else {
            this.globalDirection = direction;
            this.cows = _toConsumableArray(this.defaultCows).sort(function (cow1, cow2) {
              var result = _this4.utilsService.compare(cow1[column], cow2[column]);

              return direction === _this4.directionTypesEnum.asc ? result : -result;
            });
          }
        }
      }, {
        key: "onEditValue",
        value: function onEditValue(value, cowPropertyKey, currentCow) {
          var _this5 = this;

          var cowIndex = this.defaultCows.findIndex(function (cow) {
            return _this5.findCowByIds(cow, currentCow);
          });
          this.cowsUpdatingDataSync(value, cowPropertyKey, currentCow);
          this.updateCow.next({
            value: value,
            cowPropertyKey: cowPropertyKey,
            cowIndex: cowIndex
          });
        }
      }, {
        key: "trackChanges",
        value: function trackChanges(index) {
          return index;
        }
      }, {
        key: "isEditableField",
        value: function isEditableField(cowProperty) {
          return cowProperty !== 'cowId' && cowProperty !== 'animalId' && cowProperty !== 'eventId';
        }
      }, {
        key: "isDigitField",
        value: function isDigitField(cowProperty) {
          return cowProperty !== 'lactationNumber' && cowProperty !== 'daysInLactation' && cowProperty !== 'ageInDays' && cowProperty !== 'minValueDateTime';
        }
      }, {
        key: "openDeletingModal",
        value: function openDeletingModal(content, currentCow) {
          var _this6 = this;

          this.modalService.open(content, {
            windowClass: 'deleting-modal'
          }).result.then(function () {
            var cowIndex = _this6.cows.findIndex(function (cow) {
              return _this6.findCowByIds(cow, currentCow);
            });

            _this6.cowsDeletingDataSync(currentCow, cowIndex);

            _this6.deleteCow.next(cowIndex);
          });
        }
      }, {
        key: "AddNewCow",
        value: function AddNewCow() {
          this.addCow.next();
        }
      }, {
        key: "cowsDeletingDataSync",
        value: function cowsDeletingDataSync(currentCow, cowIndex) {
          var _this7 = this;

          this.cows.splice(cowIndex, 1);

          if (this.globalDirection !== this.directionTypesEnum.empty) {
            var cowOriginalIndex = this.defaultCows.findIndex(function (cow) {
              return _this7.findCowByIds(cow, currentCow);
            });
            this.defaultCows.splice(cowOriginalIndex, 1);
          }
        }
      }, {
        key: "cowsUpdatingDataSync",
        value: function cowsUpdatingDataSync(value, cowPropertyKey, currentCow) {
          var _this8 = this;

          var cowIndex = this.cows.findIndex(function (cow) {
            return _this8.findCowByIds(cow, currentCow);
          });
          this.cows[cowIndex][cowPropertyKey] = value;
        }
      }, {
        key: "findCowByIds",
        value: function findCowByIds(cow, currentCow) {
          return cow.cowId === currentCow.cowId && cow.eventId === currentCow.eventId && cow.animalId === currentCow.animalId;
        }
      }]);

      return DataTableComponent;
    }();

    DataTableComponent.ɵfac = function DataTableComponent_Factory(t) {
      return new (t || DataTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_enums_directionTypes_enum__WEBPACK_IMPORTED_MODULE_1__["DIRECTION_TYPES"]));
    };

    DataTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DataTableComponent,
      selectors: [["app-data-table"]],
      inputs: {
        cows: "cows"
      },
      outputs: {
        updateCow: "updateCow",
        deleteCow: "deleteCow",
        addCow: "addCow"
      },
      decls: 15,
      vars: 5,
      consts: [["content", ""], [1, "app-data-table-container", "table", "table-striped"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "thead-light", 2, "width", "100%"], ["class", "app-data-table_cell-header", 3, "sortable", "sort", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngFor", "ngForOf"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-footer"], [1, "app-data-table_cell-header", 3, "sortable", "sort"], [1, "action"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["editable", "", "class", "app-data-table_cell", "digitOnly", "", 3, "contentBlur", 4, "ngIf"], ["editable", "", "class", "app-data-table_cell", 3, "contentBlur", 4, "ngIf"], ["class", "app-data-table_cell", 4, "ngIf"], ["editable", "", "digitOnly", "", 1, "app-data-table_cell", 3, "contentBlur"], ["editable", "", 1, "app-data-table_cell", 3, "contentBlur"], [1, "app-data-table_cell"]],
      template: function DataTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableComponent_ng_template_0_Template, 6, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableComponent_Template_button_click_4_listener() {
            return ctx.AddNewCow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add new entry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DataTableComponent_th_11_Template, 2, 2, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "cowKeys");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DataTableComponent_tr_14_Template, 7, 3, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 3, ctx.cowProperties))("ngForTrackBy", ctx.trackChanges);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cows);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_directives_sortable_header_directive__WEBPACK_IMPORTED_MODULE_5__["SortableHeaderDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_directives_content_editable_directive__WEBPACK_IMPORTED_MODULE_6__["ContentEditableDirective"], _shared_directives_digit_only_directive__WEBPACK_IMPORTED_MODULE_7__["DigitOnlyDirective"]],
      pipes: [_shared_pipes_cow_keys_pipe__WEBPACK_IMPORTED_MODULE_8__["CowKeysPipe"], _shared_pipes_object_keys_pipe__WEBPACK_IMPORTED_MODULE_9__["ObjectKeysPipe"]],
      styles: ["@charset \"UTF-8\";\n.app-data-table_cell-header {\n  text-transform: capitalize;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.app-data-table_cell-header.asc:before {\n  font-family: FontAwesome;\n  content: \"\uF0DE\";\n}\n.app-data-table_cell-header.desc:before {\n  font-family: FontAwesome;\n  content: \"\uF0DD\";\n}\n.app-data-table_cell-header.sort:before {\n  font-family: FontAwesome;\n  content: \"\uF0DC\";\n}\n.action {\n  padding-top: 0.65rem;\n}\n.action .close {\n  float: left;\n}\n.deleting-modal .modal-dialog {\n  -webkit-animation-name: modal;\n          animation-name: modal;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n@-webkit-keyframes modal {\n  from {\n    margin-top: -20%;\n  }\n  to {\n    margin-top: 28px;\n  }\n}\n@keyframes modal {\n  from {\n    margin-top: -20%;\n  }\n  to {\n    margin-top: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYXJpYXBldHJlbmtvNjkvYW5ndWxhci10b2RvL2FuZ3VsYXItdHJhaW5pbmcvc3JjL2FwcC9kYXNoYm9hcmQvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FERUo7QUNBSTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtBREVSO0FDQ0k7RUFDSSx3QkFBQTtFQUNBLFlBQUE7QURDUjtBQ0NJO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0FEQ1I7QUNHQTtFQUNJLG9CQUFBO0FEQUo7QUNFSTtFQUNJLFdBQUE7QURBUjtBQ0lBO0VBQ0ksNkJBQUE7VUFBQSxxQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QURESjtBQ0lBO0VBQ0k7SUFDSSxnQkFBQTtFREROO0VDSUk7SUFDRSxnQkFBQTtFREZOO0FBQ0Y7QUNMQTtFQUNJO0lBQ0ksZ0JBQUE7RURETjtFQ0lJO0lBQ0UsZ0JBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5hcHAtZGF0YS10YWJsZV9jZWxsLWhlYWRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXBwLWRhdGEtdGFibGVfY2VsbC1oZWFkZXIuYXNjOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgY29udGVudDogXCLvg55cIjtcbn1cbi5hcHAtZGF0YS10YWJsZV9jZWxsLWhlYWRlci5kZXNjOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgY29udGVudDogXCLvg51cIjtcbn1cbi5hcHAtZGF0YS10YWJsZV9jZWxsLWhlYWRlci5zb3J0OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgY29udGVudDogXCLvg5xcIjtcbn1cblxuLmFjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAwLjY1cmVtO1xufVxuLmFjdGlvbiAuY2xvc2Uge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmRlbGV0aW5nLW1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICBhbmltYXRpb24tbmFtZTogbW9kYWw7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbkBrZXlmcmFtZXMgbW9kYWwge1xuICBmcm9tIHtcbiAgICBtYXJnaW4tdG9wOiAtMjAlO1xuICB9XG4gIHRvIHtcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICB9XG59IiwiLmFwcC1kYXRhLXRhYmxlX2NlbGwtaGVhZGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICYuYXNjOmJlZm9yZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICAgICAgY29udGVudDogXCJcXGYwZGVcIjtcbiAgICB9XG5cbiAgICAmLmRlc2M6YmVmb3JlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgICAgICBjb250ZW50OiBcIlxcZjBkZFwiO1xuICAgIH1cbiAgICAmLnNvcnQ6YmVmb3JlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgICAgICBjb250ZW50OiBcIlxcZjBkY1wiO1xuICAgIH1cbn1cblxuLmFjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDAuNjVyZW07XG5cbiAgICAuY2xvc2Uge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG59XG5cbi5kZWxldGluZy1tb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICBhbmltYXRpb24tbmFtZTogbW9kYWw7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxuQGtleWZyYW1lcyBtb2RhbCB7XG4gICAgZnJvbSB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMCU7XG4gICAgICB9XG4gICAgXG4gICAgICB0byB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgICB9XG59Il19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-data-table',
          templateUrl: './data-table.component.html',
          styleUrls: ['./data-table.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: src_app_core_services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [src_app_core_enums_directionTypes_enum__WEBPACK_IMPORTED_MODULE_1__["DIRECTION_TYPES"]]
          }]
        }];
      }, {
        cows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        updateCow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deleteCow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        addCow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/content-editable.directive.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/directives/content-editable.directive.ts ***!
    \*****************************************************************/

  /*! exports provided: ContentEditableDirective */

  /***/
  function srcAppSharedDirectivesContentEditableDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentEditableDirective", function () {
      return ContentEditableDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContentEditableDirective = /*#__PURE__*/function () {
      function ContentEditableDirective(el, r) {
        _classCallCheck(this, ContentEditableDirective);

        this.el = el;
        this.r = r;
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contentBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ContentEditableDirective, [{
        key: "click",
        value: function click() {
          this.r.setAttribute(this.el.nativeElement, 'contentEditable', 'true');
          this.el.nativeElement.focus();
        }
      }, {
        key: "onKeyPressEnter",
        value: function onKeyPressEnter() {
          this.onBlur();
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          this.r.removeAttribute(this.el.nativeElement, 'contentEditable');
          this.contentBlur.emit(this.el.nativeElement.innerText);
        }
      }, {
        key: "editable",
        set: function set(s) {
          this.el.nativeElement.innerText = s;
        }
      }]);

      return ContentEditableDirective;
    }();

    ContentEditableDirective.ɵfac = function ContentEditableDirective_Factory(t) {
      return new (t || ContentEditableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    ContentEditableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ContentEditableDirective,
      selectors: [["", "editable", ""]],
      hostBindings: function ContentEditableDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentEditableDirective_click_HostBindingHandler() {
            return ctx.click();
          })("keydown.enter", function ContentEditableDirective_keydown_enter_HostBindingHandler() {
            return ctx.onKeyPressEnter();
          })("blur", function ContentEditableDirective_blur_HostBindingHandler() {
            return ctx.onBlur();
          });
        }
      },
      inputs: {
        editable: "editable"
      },
      outputs: {
        edit: "edit",
        contentBlur: "contentBlur"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentEditableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[editable]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        edit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        contentBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        click: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        onKeyPressEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.enter']
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['blur']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/digit-only.directive.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/directives/digit-only.directive.ts ***!
    \***********************************************************/

  /*! exports provided: DigitOnlyDirective */

  /***/
  function srcAppSharedDirectivesDigitOnlyDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DigitOnlyDirective", function () {
      return DigitOnlyDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DigitOnlyDirective = /*#__PURE__*/function () {
      function DigitOnlyDirective(el) {
        _classCallCheck(this, DigitOnlyDirective);

        this.el = el;
        this.hasDecimalPoint = false;
        this.navigationKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'Home', 'End', 'ArrowLeft', 'ArrowRight', 'Clear', 'Copy', 'Paste'];
        this.min = -Infinity;
        this.max = Infinity;
        this.inputElement = el.nativeElement;
      }

      _createClass(DigitOnlyDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.pattern) {
            this.regex = this.pattern ? RegExp(this.pattern) : null;
          }

          if (changes.min) {
            var maybeMin = Number(this.min);
            this.min = isNaN(maybeMin) ? -Infinity : maybeMin;
          }

          if (changes.max) {
            var maybeMax = Number(this.max);
            this.max = isNaN(maybeMax) ? Infinity : maybeMax;
          }
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(e) {
          if (this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
          e.key === 'a' && e.ctrlKey === true || // Allow: Ctrl+A
          e.key === 'c' && e.ctrlKey === true || // Allow: Ctrl+C
          e.key === 'v' && e.ctrlKey === true || // Allow: Ctrl+V
          e.key === 'x' && e.ctrlKey === true || // Allow: Ctrl+X
          e.key === 'a' && e.metaKey === true || // Allow: Cmd+A (Mac)
          e.key === 'c' && e.metaKey === true || // Allow: Cmd+C (Mac)
          e.key === 'v' && e.metaKey === true || // Allow: Cmd+V (Mac)
          e.key === 'x' && e.metaKey === true // Allow: Cmd+X (Mac)
          ) {
              // let it happen, don't do anything
              return;
            } // Ensure that it is a number and stop the keypress


          if (e.key === ' ' || isNaN(Number(e.key))) {
            e.preventDefault();
          } // check the input pattern RegExp


          if (this.regex) {
            var _newValue = this.forecastValue(e.key);

            if (!this.regex.test(_newValue)) {
              e.preventDefault();
            }
          }

          var newValue = Number(this.forecastValue(e.key));

          if (newValue > this.max || newValue < this.min) {
            e.preventDefault();
          }
        }
      }, {
        key: "onPaste",
        value: function onPaste(event) {
          var pastedInput = event.clipboardData.getData('text/plain');
          this.pasteData(pastedInput);
          event.preventDefault();
        }
      }, {
        key: "onDrop",
        value: function onDrop(event) {
          var textData = event.dataTransfer.getData('text');
          this.inputElement.focus();
          this.pasteData(textData);
          event.preventDefault();
        }
      }, {
        key: "pasteData",
        value: function pasteData(pastedContent) {
          var sanitizedContent = this.sanitizeInput(pastedContent);
          var pasted = document.execCommand('insertText', false, sanitizedContent);

          if (!pasted) {
            var _this$inputElement = this.inputElement,
                start = _this$inputElement.selectionStart,
                end = _this$inputElement.selectionEnd;
            this.inputElement.setRangeText(sanitizedContent, start, end, 'end');
          }
        }
      }, {
        key: "sanitizeInput",
        value: function sanitizeInput(input) {
          var result = '';
          var maxLength = this.inputElement.maxLength;

          if (maxLength > 0) {
            // the input element has maxLength limit
            var allowedLength = maxLength - this.inputElement.value.length;
            result = allowedLength > 0 ? result.substring(0, allowedLength) : '';
          }

          return result;
        }
      }, {
        key: "forecastValue",
        value: function forecastValue(key) {
          var selectionStart = this.inputElement.selectionStart;
          var selectionEnd = this.inputElement.selectionEnd;
          var oldValue = this.inputElement.value ? this.inputElement.value : this.inputElement.innerHTML;
          var selection = oldValue.substring(selectionStart, selectionEnd);
          return selection ? oldValue.replace(selection, key) : oldValue.substring(0, selectionStart) + key + oldValue.substring(selectionStart);
        }
      }]);

      return DigitOnlyDirective;
    }();

    DigitOnlyDirective.ɵfac = function DigitOnlyDirective_Factory(t) {
      return new (t || DigitOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    DigitOnlyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DigitOnlyDirective,
      selectors: [["", "digitOnly", ""]],
      hostBindings: function DigitOnlyDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function DigitOnlyDirective_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("paste", function DigitOnlyDirective_paste_HostBindingHandler($event) {
            return ctx.onPaste($event);
          })("drop", function DigitOnlyDirective_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          });
        }
      },
      inputs: {
        min: "min",
        max: "max",
        pattern: "pattern"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DigitOnlyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[digitOnly]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pattern: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown', ['$event']]
        }],
        onPaste: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['paste', ['$event']]
        }],
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['drop', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/sortable-header.directive.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/directives/sortable-header.directive.ts ***!
    \****************************************************************/

  /*! exports provided: SortableHeaderDirective */

  /***/
  function srcAppSharedDirectivesSortableHeaderDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortableHeaderDirective", function () {
      return SortableHeaderDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_enums_directionTypes_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/core/enums/directionTypes.enum */
    "./src/app/core/enums/directionTypes.enum.ts");

    var SortableHeaderDirective = /*#__PURE__*/function () {
      function SortableHeaderDirective(directionTypesEnum) {
        _classCallCheck(this, SortableHeaderDirective);

        this.directionTypesEnum = directionTypesEnum;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rotation = {
          asc: this.directionTypesEnum.desc,
          desc: this.directionTypesEnum.empty,
          '': this.directionTypesEnum.asc
        };
      }

      _createClass(SortableHeaderDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.direction = this.directionTypesEnum.empty;
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.rotate();
        }
      }, {
        key: "rotate",
        value: function rotate() {
          this.direction = this.rotation[this.direction];
          this.sort.emit({
            column: this.sortable,
            direction: this.direction
          });
        }
      }, {
        key: "ascSorting",
        get: function get() {
          return this.direction === this.directionTypesEnum.asc;
        }
      }, {
        key: "descSorting",
        get: function get() {
          return this.direction === this.directionTypesEnum.desc;
        }
      }, {
        key: "emptySorting",
        get: function get() {
          return this.direction === this.directionTypesEnum.empty;
        }
      }]);

      return SortableHeaderDirective;
    }();

    SortableHeaderDirective.ɵfac = function SortableHeaderDirective_Factory(t) {
      return new (t || SortableHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_enums_directionTypes_enum__WEBPACK_IMPORTED_MODULE_1__["DIRECTION_TYPES"]));
    };

    SortableHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SortableHeaderDirective,
      selectors: [["th", "sortable", ""]],
      hostVars: 6,
      hostBindings: function SortableHeaderDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortableHeaderDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.ascSorting)("desc", ctx.descSorting)("sort", ctx.emptySorting);
        }
      },
      inputs: {
        sortable: "sortable",
        direction: "direction"
      },
      outputs: {
        sort: "sort"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortableHeaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'th[sortable]'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [src_app_core_enums_directionTypes_enum__WEBPACK_IMPORTED_MODULE_1__["DIRECTION_TYPES"]]
          }]
        }];
      }, {
        sortable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        ascSorting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.asc']
        }],
        descSorting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.desc']
        }],
        emptySorting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.sort']
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/cow-keys.pipe.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/pipes/cow-keys.pipe.ts ***!
    \***********************************************/

  /*! exports provided: CowKeysPipe */

  /***/
  function srcAppSharedPipesCowKeysPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CowKeysPipe", function () {
      return CowKeysPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CowKeysPipe = /*#__PURE__*/function () {
      function CowKeysPipe() {
        _classCallCheck(this, CowKeysPipe);
      }

      _createClass(CowKeysPipe, [{
        key: "transform",
        value: function transform(value) {
          var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return value.map(function (cowPropertyKey) {
            return {
              original: cowPropertyKey,
              normalized: cowPropertyKey.split(/(?=[A-Z])/).join(' ')
            };
          });
        }
      }]);

      return CowKeysPipe;
    }();

    CowKeysPipe.ɵfac = function CowKeysPipe_Factory(t) {
      return new (t || CowKeysPipe)();
    };

    CowKeysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "cowKeys",
      type: CowKeysPipe,
      pure: false
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CowKeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'cowKeys',
          pure: false
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/object-keys.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/pipes/object-keys.pipe.ts ***!
    \**************************************************/

  /*! exports provided: ObjectKeysPipe */

  /***/
  function srcAppSharedPipesObjectKeysPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObjectKeysPipe", function () {
      return ObjectKeysPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ObjectKeysPipe = /*#__PURE__*/function () {
      function ObjectKeysPipe() {
        _classCallCheck(this, ObjectKeysPipe);
      }

      _createClass(ObjectKeysPipe, [{
        key: "transform",
        value: function transform(value) {
          var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return Object.keys(value);
        }
      }]);

      return ObjectKeysPipe;
    }();

    ObjectKeysPipe.ɵfac = function ObjectKeysPipe_Factory(t) {
      return new (t || ObjectKeysPipe)();
    };

    ObjectKeysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "objectKeys",
      type: ObjectKeysPipe,
      pure: false
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjectKeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'objectKeys',
          pure: false
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_cow_keys_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pipes/cow-keys.pipe */
    "./src/app/shared/pipes/cow-keys.pipe.ts");
    /* harmony import */


    var _pipes_object_keys_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pipes/object-keys.pipe */
    "./src/app/shared/pipes/object-keys.pipe.ts");
    /* harmony import */


    var _directives_sortable_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./directives/sortable-header.directive */
    "./src/app/shared/directives/sortable-header.directive.ts");
    /* harmony import */


    var _directives_content_editable_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./directives/content-editable.directive */
    "./src/app/shared/directives/content-editable.directive.ts");
    /* harmony import */


    var _directives_digit_only_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./directives/digit-only.directive */
    "./src/app/shared/directives/digit-only.directive.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_pipes_cow_keys_pipe__WEBPACK_IMPORTED_MODULE_2__["CowKeysPipe"], _pipes_object_keys_pipe__WEBPACK_IMPORTED_MODULE_3__["ObjectKeysPipe"], _directives_sortable_header_directive__WEBPACK_IMPORTED_MODULE_4__["SortableHeaderDirective"], _directives_content_editable_directive__WEBPACK_IMPORTED_MODULE_5__["ContentEditableDirective"], _directives_digit_only_directive__WEBPACK_IMPORTED_MODULE_6__["DigitOnlyDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_pipes_cow_keys_pipe__WEBPACK_IMPORTED_MODULE_2__["CowKeysPipe"], _pipes_object_keys_pipe__WEBPACK_IMPORTED_MODULE_3__["ObjectKeysPipe"], _directives_sortable_header_directive__WEBPACK_IMPORTED_MODULE_4__["SortableHeaderDirective"], _directives_content_editable_directive__WEBPACK_IMPORTED_MODULE_5__["ContentEditableDirective"], _directives_digit_only_directive__WEBPACK_IMPORTED_MODULE_6__["DigitOnlyDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_pipes_cow_keys_pipe__WEBPACK_IMPORTED_MODULE_2__["CowKeysPipe"], _pipes_object_keys_pipe__WEBPACK_IMPORTED_MODULE_3__["ObjectKeysPipe"], _directives_sortable_header_directive__WEBPACK_IMPORTED_MODULE_4__["SortableHeaderDirective"], _directives_content_editable_directive__WEBPACK_IMPORTED_MODULE_5__["ContentEditableDirective"], _directives_digit_only_directive__WEBPACK_IMPORTED_MODULE_6__["DigitOnlyDirective"]],
          exports: [_pipes_cow_keys_pipe__WEBPACK_IMPORTED_MODULE_2__["CowKeysPipe"], _pipes_object_keys_pipe__WEBPACK_IMPORTED_MODULE_3__["ObjectKeysPipe"], _directives_sortable_header_directive__WEBPACK_IMPORTED_MODULE_4__["SortableHeaderDirective"], _directives_content_editable_directive__WEBPACK_IMPORTED_MODULE_5__["ContentEditableDirective"], _directives_digit_only_directive__WEBPACK_IMPORTED_MODULE_6__["DigitOnlyDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/mariapetrenko69/angular-todo/angular-training/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map