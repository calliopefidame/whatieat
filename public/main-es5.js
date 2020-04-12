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


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _params_params_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./params/params.component */
    "./src/app/params/params.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'params',
      component: _params_params_component__WEBPACK_IMPORTED_MODULE_3__["ParamsComponent"]
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'frontend';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.pug',
          styleUrls: ['./app.component.css']
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


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-order-pipe */
    "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _params_params_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./params/params.component */
    "./src/app/params/params.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _params_params_component__WEBPACK_IMPORTED_MODULE_7__["ParamsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _params_params_component__WEBPACK_IMPORTED_MODULE_7__["ParamsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _steam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../steam.service */
    "./src/app/steam.service.ts");
    /* harmony import */


    var _person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../person.service */
    "./src/app/person.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-order-pipe */
    "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");

    function HomeComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.messageErreur);
      }
    }

    function HomeComponent_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var paya_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", paya_r8.steamid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paya_r8.nomPersonne);
      }
    }

    function HomeComponent_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var paya_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", paya_r9.steamid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paya_r9.nomPersonne);
      }
    }

    function HomeComponent_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var paya_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", paya_r10.steamid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paya_r10.nomPersonne);
      }
    }

    function HomeComponent_option_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var paya_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", paya_r11.steamid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paya_r11.nomPersonne);
      }
    }

    function HomeComponent_div_34_tr_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var game_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r13.appName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, game_r13.PlayedTime), " heures");
      }
    }

    function HomeComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Jeux");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Moyenne d'heure jou\xE9es");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_34_tr_7_Template, 6, 4, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "orderBy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 1, ctx_r5.games, "PlayedTime", true));
      }
    }

    function HomeComponent_ng_template_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La liste est vide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(steamService, personService, fb) {
        _classCallCheck(this, HomeComponent);

        this.steamService = steamService;
        this.personService = personService;
        this.fb = fb;
        this.userSelection = this.fb.group({
          firstUser: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          secondUser: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          thirdUser: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          forthUser: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.lesPayas = [];
          this.games = new Array();
          var call = this.personService.getAllPaya();
          this.payas = call.toPromise();
          call.subscribe(function (payas) {
            payas.forEach(function (paya) {
              var person = {
                steamid: paya.steamid,
                username: paya.nomPersonne
              };

              if (_this.lesPayas.find(function (unPaya) {
                return unPaya.steamid != person.steamid;
              })) {
                _this.lesPayas.push(person);
              }
            });
          });
        }
      }, {
        key: "compareGames",
        value: function compareGames() {
          var steamid1 = this.userSelection.controls.firstUser.value;
          var steamid2 = this.userSelection.controls.secondUser.value;
          var steamid3 = this.userSelection.controls.thirdUser.value;
          var steamid4 = this.userSelection.controls.forthUser.value;
          this.getGames(steamid1, steamid2, steamid3, steamid4);
        }
      }, {
        key: "getGames",
        value: function getGames(steamid1, steamid2, steamid3, steamid4) {
          var _this2 = this;

          this.steamService.getGames(steamid1).subscribe(function (result1) {
            var games1 = result1;

            _this2.steamService.getGames(steamid2).subscribe(function (result2) {
              var games2 = result2; // console.log(typeof(games1));
              // console.log(typeof(games2));

              if (typeof games1 != 'undefined' && typeof games2 != 'undefined') {
                _this2.games = _this2.getIntersect(games1, games2);

                if (steamid3 != '1') {
                  _this2.steamService.getGames(steamid3).subscribe(function (result3) {
                    var games3 = result3;
                    _this2.games = _this2.getIntersect2(games1, games2, games3);

                    if (steamid4 != '1') {
                      _this2.steamService.getGames(steamid4).subscribe(function (result4) {
                        var games4 = result4;
                        _this2.games = _this2.getIntersect3(games1, games2, games3, games4);

                        _this2.getGamesInfos();
                      });
                    } else {
                      _this2.getGamesInfos();
                    }
                  });
                } else {
                  _this2.getGamesInfos();
                }
              }
            });
          });
        }
      }, {
        key: "getGamesInfos",
        value: function getGamesInfos() {
          var _this3 = this;

          this.games.forEach(function (game) {
            _this3.steamService.getGameInfo(game.appid).subscribe(function (gameInfo) {
              game.appName = gameInfo[0].name;
            });
          });
        }
      }, {
        key: "getIntersect",
        value: function getIntersect(arr1, arr2) {
          var temp = [];

          for (var i = 0; i < arr1.length; i++) {
            for (var k = 0; k < arr2.length; k++) {
              if (arr1[i].appid == arr2[k].appid) {
                arr1[i].PlayedTime = (arr1[i].PlayedTime + arr2[k].PlayedTime) / 2 / 60;
                temp.push(arr1[i]);
                break;
              }
            }
          }

          return temp;
        }
      }, {
        key: "getIntersect2",
        value: function getIntersect2(arr1, arr2, arr3) {
          var temp = [];

          for (var i = 0; i < arr1.length; i++) {
            for (var k = 0; k < arr2.length; k++) {
              for (var l = 0; l < arr3.length; l++) {
                if (arr1[i].appid == arr2[k].appid && arr2[k].appid == arr3[l].appid) {
                  arr1[i].PlayedTime = (arr1[i].PlayedTime + arr2[k].PlayedTime + arr3[l].PlayedTime) / 2 / 60;
                  temp.push(arr1[i]);
                  break;
                }
              }
            }
          }

          return temp;
        }
      }, {
        key: "getIntersect3",
        value: function getIntersect3(arr1, arr2, arr3, arr4) {
          var temp = [];

          for (var i = 0; i < arr1.length; i++) {
            for (var k = 0; k < arr2.length; k++) {
              for (var l = 0; l < arr3.length; l++) {
                for (var m = 0; m < arr4.length; m++) {
                  if (arr1[i].appid == arr2[k].appid && arr2[k].appid == arr3[l].appid && arr3[l].appid == arr4[m].appid) {
                    arr1[i].PlayedTime = (arr1[i].PlayedTime + arr2[k].PlayedTime + arr3[l].PlayedTime + arr4[m].PlayedTime) / 2 / 60;
                    temp.push(arr1[i]);
                    break;
                  }
                }
              }
            }
          }

          return temp;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.isSubmitted = true;
          this.erreurs = false;

          if (!this.userSelection.valid) {
            this.messageErreur = "Veuillez selectionner au moins un joueur sur les deux listes";
            this.erreurs = true;
          } else if (this.isMemeJoueur()) {
            this.erreurs = true;
            this.messageErreur = "Veuillez selectionner deux joueurs différents";
          } else {
            this.compareGames(); // alert(JSON.stringify(this.userSelection.value));
          }

          return false;
        }
      }, {
        key: "isMemeJoueur",
        value: function isMemeJoueur() {
          var steamid1 = this.userSelection.controls.firstUser.value;
          var steamid2 = this.userSelection.controls.secondUser.value;
          return steamid1 === steamid2;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_steam_service__WEBPACK_IMPORTED_MODULE_2__["SteamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 37,
      vars: 16,
      consts: [["class", "alert alert-danger", 4, "ngIf"], [1, "form-group", "table", 3, "formGroup", "ngSubmit"], [1, "tr"], [1, "td"], ["formControlName", "firstUser", "name", "", 1, "form-control"], ["value", "1"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "secondUser", "name", "", 1, "form-control"], ["formControlName", "thirdUser", "name", "", 1, "form-control"], ["formControlName", "forthUser", "name", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "container", 4, "ngIf", "ngIfElse"], ["class", "container"], ["elseBlock", ""], [1, "alert", "alert-danger"], [3, "value"], [1, "container"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Premier joueur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_option_7_Template, 2, 2, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Deuxi\xE8me joueur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_option_14_Template, 2, 2, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Troisi\xE8me joueur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_option_21_Template, 2, 2, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Quatri\xE8me joueur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HomeComponent_option_28_Template, 2, 2, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Recherche des jeux en communs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomeComponent_div_34_Template, 9, 5, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HomeComponent_ng_template_35_Template, 2, 0, "ng-template", 12, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.erreurs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userSelection);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, ctx.payas));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 10, ctx.payas));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 12, ctx.payas));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 14, ctx.payas));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.games.length)("ngIfElse", _r6);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]],
      styles: [".container[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.checkmark[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\r\n  background-color: #ccc;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\r\n  background-color: #2196F3;\r\n}\r\n\r\n\r\n\r\n.checkmark[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\r\n \ttop: 9px;\r\n\tleft: 9px;\r\n\twidth: 8px;\r\n\theight: 8px;\r\n\tborder-radius: 50%;\r\n\tbackground: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUEsNENBQTRDOztBQUM1QztFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQSxpQ0FBaUM7O0FBQ2pDO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBLCtDQUErQzs7QUFDL0M7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUEsNERBQTREOztBQUM1RDtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUEsaURBQWlEOztBQUNqRDtFQUNFLGNBQWM7QUFDaEI7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFLFFBQVE7Q0FDVCxTQUFTO0NBQ1QsVUFBVTtDQUNWLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCByYWRpbyBidXR0b24gKi9cclxuLmNvbnRhaW5lciBpbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBjdXN0b20gcmFkaW8gYnV0dG9uICovXHJcbi5jaGVja21hcmsge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4uY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG5cclxuLyogV2hlbiB0aGUgcmFkaW8gYnV0dG9uIGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xyXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGluZGljYXRvciAodGhlIGRvdC9jaXJjbGUgLSBoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuLmNoZWNrbWFyazphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogU2hvdyB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSB3aGVuIGNoZWNrZWQgKi9cclxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpICovXHJcbi5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XHJcbiBcdHRvcDogOXB4O1xyXG5cdGxlZnQ6IDlweDtcclxuXHR3aWR0aDogOHB4O1xyXG5cdGhlaWdodDogOHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.pug',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _steam_service__WEBPACK_IMPORTED_MODULE_2__["SteamService"]
        }, {
          type: _person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/params/params.component.ts":
  /*!********************************************!*\
    !*** ./src/app/params/params.component.ts ***!
    \********************************************/

  /*! exports provided: ParamsComponent */

  /***/
  function srcAppParamsParamsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParamsComponent", function () {
      return ParamsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _steam_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../steam.service */
    "./src/app/steam.service.ts");
    /* harmony import */


    var _person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../person.service */
    "./src/app/person.service.ts");

    var ParamsComponent =
    /*#__PURE__*/
    function () {
      function ParamsComponent(steamService, personService) {
        _classCallCheck(this, ParamsComponent);

        this.steamService = steamService;
        this.personService = personService;
      }

      _createClass(ParamsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.lesPayas = [];
          this.personService.getAllPaya().subscribe(function (payas) {
            payas.forEach(function (paya) {
              var person = {
                steamid: paya.steamid,
                username: paya.nomPersonne
              };

              if (!_this4.lesPayas.find(function (unPaya) {
                return unPaya.steamid == person.steamid;
              })) {
                _this4.lesPayas.push(person);
              }
            });
          });
        }
      }, {
        key: "updateGames",
        value: function updateGames() {
          var _this5 = this;

          console.log(this.lesPayas);
          this.lesPayas.forEach(function (paya) {
            console.log(paya.username);

            _this5.steamService.updateGamesPlayer(paya.steamid).subscribe(function (result) {
              return console.log('mise à jour faite pour ' + paya.username);
            });
          });
        }
      }]);

      return ParamsComponent;
    }();

    ParamsComponent.ɵfac = function ParamsComponent_Factory(t) {
      return new (t || ParamsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_steam_service__WEBPACK_IMPORTED_MODULE_1__["SteamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"]));
    };

    ParamsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ParamsComponent,
      selectors: [["app-params"]],
      decls: 7,
      vars: 0,
      consts: [[1, "container", "row"], [1, "col"], [1, "btn", "btn-success", 3, "click"]],
      template: function ParamsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mise \xE0 jour des jeux en fonction des informations Steam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParamsComponent_Template_button_click_5_listener() {
            return ctx.updateGames();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Update Games for all users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmFtcy9wYXJhbXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParamsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-params',
          templateUrl: './params.component.pug',
          styleUrls: ['./params.component.css']
        }]
      }], function () {
        return [{
          type: _steam_service__WEBPACK_IMPORTED_MODULE_1__["SteamService"]
        }, {
          type: _person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/person.service.ts":
  /*!***********************************!*\
    !*** ./src/app/person.service.ts ***!
    \***********************************/

  /*! exports provided: PersonService */

  /***/
  function srcAppPersonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonService", function () {
      return PersonService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var optionRequete = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Access-Control-Allow-Origin': '*',
        'mon-entete-personnalise': 'maValeur'
      })
    };

    var PersonService =
    /*#__PURE__*/
    function () {
      function PersonService(httpClient) {
        _classCallCheck(this, PersonService);

        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendURL;
      }

      _createClass(PersonService, [{
        key: "getAllPaya",
        value: function getAllPaya() {
          return this.httpClient.get(this.url + '/person', optionRequete);
        }
      }]);

      return PersonService;
    }();

    PersonService.ɵfac = function PersonService_Factory(t) {
      return new (t || PersonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PersonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PersonService,
      factory: PersonService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/steam.service.ts":
  /*!**********************************!*\
    !*** ./src/app/steam.service.ts ***!
    \**********************************/

  /*! exports provided: SteamService */

  /***/
  function srcAppSteamServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SteamService", function () {
      return SteamService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var optionRequete = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Access-Control-Allow-Origin': '*',
        'mon-entete-personnalise': 'maValeur'
      })
    };

    var SteamService =
    /*#__PURE__*/
    function () {
      function SteamService(httpClient) {
        _classCallCheck(this, SteamService);

        this.httpClient = httpClient;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendURL;
      }

      _createClass(SteamService, [{
        key: "getGames",
        value: function getGames(steamid) {
          return this.httpClient.get(this.url + '/steam/' + steamid + '/getgames', optionRequete);
        }
      }, {
        key: "getAllGames",
        value: function getAllGames() {
          return this.httpClient.get(this.url + '/steam/getAllGames', optionRequete);
        }
      }, {
        key: "getGameInfo",
        value: function getGameInfo(gameid) {
          return this.httpClient.get(this.url + '/steam/' + gameid + '/gameInfo', optionRequete);
        }
      }, {
        key: "updateGamesPlayer",
        value: function updateGamesPlayer(steamid) {
          return this.httpClient.get(this.url + '/steam/' + steamid + '/savegames', optionRequete);
        }
      }]);

      return SteamService;
    }();

    SteamService.ɵfac = function SteamService_Factory(t) {
      return new (t || SteamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    SteamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SteamService,
      factory: SteamService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SteamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
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
      production: false,
      backendURL: 'https://localhost:3000'
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
    /*! D:\website\SteamApp\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map