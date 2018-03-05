webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account-module/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__ = __webpack_require__("./src/app/account-module/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__ = __webpack_require__("./src/app/account-module/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__market_module_market_module__ = __webpack_require__("./src/app/market-module/market.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__market_module_market_module__["a" /* MarketModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__["a" /* SettingsComponent */]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account-module/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".page-title a {\n  color: white;\n  cursor: pointer;\n}\n\nlabel {\n  display: block;\n}\n\n.address {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.page-title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n"

/***/ }),

/***/ "./src/app/account-module/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!--================================\n    START BREADCRUMB AREA\n=================================-->\n<section class=\"breadcrumb-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1 *ngIf=\"address\" class=\"page-title\"><a class=\"address\" target=\"_blank\"\n                                                  href=\"https://ropsten.etherscan.io/address/{{address}}\">{{address}}</a>\n        </h1>\n        <h1 *ngIf=\"!address\" class=\"page-title\">\n          <a class=\"address\" target=\"_blank\" href=\"https://ropsten.etherscan.io/address/{{currentUser.wallet}}\">{{currentUser.wallet}}</a>\n          <a (click)=\"refreshWallet()\"><i class=\"fas fa-sync\" aria-hidden=\"true\"></i></a></h1>\n\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END BREADCRUMB AREA\n=================================-->\n\n<!--================================\n    START AUTHOR AREA\n=================================-->\n<section class=\"author-profile-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-6\">\n        <aside class=\"sidebar sidebar_author\">\n          <div class=\"author-card sidebar-card\">\n            <div class=\"author-infos\">\n\n              <div class=\"author_avatar\">\n                <div class=\"profile-avatar\" *ngIf=\"!address\"\n                     [ngStyle]=\"{'background-image': 'url(' + ms.baseUrl + currentUser.avatar + ')'}\"></div>\n                <div class=\"profile-avatar\" *ngIf=\"address && userProfile\"\n                     [ngStyle]=\"{'background-image': 'url(' + ms.baseUrl + userProfile.avatar + ')'}\"></div>\n              </div>\n                  <label *ngIf=\"!address\" for=\"cover_photo\" class=\"upload_btn\">\n                    <input style=\"display: none\" (change)=\"refreshAvatar($event)\" type=\"file\" type=\"file\"\n                           id=\"cover_photo\">\n                    <span class=\"btn btn--sm btn--round\" aria-hidden=\"true\">Change avatar</span>\n                  </label>\n\n              <div class=\"author\">\n                <h4 *ngIf=\"address\">{{userProfile?.username ? userProfile.username : 'Anonymous'}}</h4>\n                <h4 *ngIf=\"!address\">{{currentUser.username}}</h4>\n                <p *ngIf=\"address\">Signed Up: {{userProfile ? (userProfile.createdAt | date:'MM / dd / yyyy') :\n                  'Unknown'}}</p>\n                <p *ngIf=\"!address\">Signed Up: {{currentUser.createdAt | date:'MM / dd / yyyy'}}</p>\n              </div>\n            </div>\n          </div><!-- end /.author-card -->\n\n        </aside>\n      </div><!-- end /.sidebar -->\n      <div class=\"col-md-4 col-sm-6\">\n        <div class=\"author-info mcolorbg4\">\n          <p>Total Items</p>\n          <h3>{{cardNumber}}</h3>\n        </div>\n      </div><!-- end /.col-md-4 -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n        </div><!-- end /.row -->\n\n\n        <div class=\"row\">\n          <!-- start .col-md-4 -->\n          <div *ngFor=\"let card of cardsUser; let i = index\" class=\"col-md-4 col-lg-3 col-sm-6\">\n            <card *ngIf=\"card\" [card]=\"card\"></card>\n          </div><!-- end /.col-md-4 -->\n\n        </div><!-- end /.row -->\n      </div><!-- end /.col-md-8 -->\n\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END AUTHOR AREA\n=================================-->\n"

/***/ }),

/***/ "./src/app/account-module/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_card_service__ = __webpack_require__("./src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_manager_service__ = __webpack_require__("./src/app/services/manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_socket_service__ = __webpack_require__("./src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fortawesome_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fortawesome_fontawesome_free_solid__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-solid/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(ms, route, socketService, as, cs, _router, us, toastr) {
        var _this = this;
        this.ms = ms;
        this.route = route;
        this.socketService = socketService;
        this.as = as;
        this.cs = cs;
        this._router = _router;
        this.us = us;
        this.toastr = toastr;
        this.cardNumber = 0;
        this.cardsUser = [];
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["a" /* Subscription */]();
        this.address = null;
        __WEBPACK_IMPORTED_MODULE_8__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_9__fortawesome_fontawesome_free_solid__["d" /* faSync */]);
        var _self = this;
        this.socketService.initSocket();
        this.socketService.onEvent('tx-card').subscribe(function (cardId) {
            for (var _i = 0, _a = _this.cardsUser; _i < _a.length; _i++) {
                var c = _a[_i];
                if (c._id == cardId) {
                    _this.cardsUser = [];
                    _this.cs.getCardsByWallet(_this.address == null ? _this.currentUser.wallet : _this.address).subscribe(function (cardsUser) {
                        for (var _i = 0, cardsUser_1 = cardsUser; _i < cardsUser_1.length; _i++) {
                            var card = cardsUser_1[_i];
                            if (card) {
                                _self.cardsUser.push(card);
                                document.getElementsByClassName('modal-backdrop')[0].remove();
                            }
                        }
                        _self.cardNumber = _self.cardsUser.length;
                    });
                    break;
                }
            }
        });
    }
    ProfileComponent.prototype.refreshProfileInfo = function (wallet) {
        var _self = this;
        this.currentUser = this.as.currentUser;
        this.cardsUser = [];
        this.cs.getCardsByWallet(wallet).subscribe(function (cardsUser) {
            for (var _i = 0, cardsUser_2 = cardsUser; _i < cardsUser_2.length; _i++) {
                var card = cardsUser_2[_i];
                if (card) {
                    _self.cardsUser.push(card);
                }
            }
            _self.cardNumber = _self.cardsUser.length;
        });
    };
    ProfileComponent.prototype.refreshWallet = function () {
        var _self = this;
        var toastr = this.toastr;
        this.cs.getAccount().then(function (res) {
            console.log(_self.as.currentUser.wallet, res);
            if (_self.as.currentUser.wallet != res) {
                var save_1 = _self.as.currentUser.wallet;
                _self.as.currentUser.wallet = res;
                _self.subscriptions.add(_self.us.modifyUser(_self.as.currentUser).subscribe(function (res) {
                    if (res != null) {
                        _self.as.setCurrentUser(res);
                        _self.refreshProfileInfo(_self.as.currentUser.wallet);
                    }
                }, function (error) {
                    _self.as.currentUser.wallet = save_1;
                    toastr.error('This wallet is already set on another user.', 'Wallet refresh');
                }));
            }
        });
    };
    ProfileComponent.prototype.refreshAvatar = function (event) {
        var fileList = event.target.files;
        var _self = this;
        if (fileList && fileList.length > 0) {
            var formData = new FormData();
            var file = fileList[0];
            formData.append('avatar', file);
            formData.append('username', _self.as.currentUser.username);
            formData.append('email', _self.as.currentUser.email);
            formData.append('wallet', _self.as.currentUser.wallet);
            formData.append('currency', _self.as.currentUser.currency);
            formData.append('password', _self.as.currentUser.password);
            _self.subscriptions.add(_self.us.modifyUserFormData(formData, _self.as.currentUser).subscribe(function (res) {
                _self.as.setCurrentUser(res);
                _self.refreshProfileInfo(_self.as.currentUser.wallet);
            }));
        }
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _self = this;
        this.currentUser = this.as.currentUser;
        this.subscriptions.add(this.route.params.subscribe(function (params) {
            _this.address = params['address'];
            /*if (this.address == null && this.as.currentUser == null) {
              this._router.navigate(['login']);
            }*/
            if (_this.address == null) {
                _this.refreshProfileInfo(_this.as.currentUser.wallet);
            }
            else {
                _this.subscriptions.add(_this.us.getUserByWallet(_this.address).subscribe(function (res) {
                    if (res == null) {
                        _this._router.navigate(['market']);
                    }
                    else {
                        _self.userProfile = res;
                        _self.refreshProfileInfo(_self.address);
                    }
                }, function (error) {
                    console.log(error);
                }));
            }
        }));
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.socketService.removeListener('tx-card');
        this.subscriptions.unsubscribe();
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/account-module/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/account-module/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_manager_service__["a" /* ManagerService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7__services_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__services_card_service__["a" /* CardService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_toastr__["ToastsManager"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/account-module/settings/settings.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account-module/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/account-module/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/account-module/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/account-module/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/admin-module/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__ = __webpack_require__("./src/app/admin-module/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__market_module_market_module__ = __webpack_require__("./src/app/market-module/market.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_ladda__ = __webpack_require__("./node_modules/angular2-ladda/module/module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_ladda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_ladda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_cards_list_cards_component__ = __webpack_require__("./src/app/admin-module/list-cards/list-cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_manager_service__ = __webpack_require__("./src/app/services/manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__market_module_market_module__["a" /* MarketModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_ladda__["LaddaModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__admin_admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_6__list_cards_list_cards_component__["a" /* ListCardsComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_manager_service__["a" /* ManagerService */]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin-module/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ".dashboard_contents {\n  background: #eff1f5;\n}\n\n.admin_validation {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.error {\n  border: solid 2px #FF0000;\n}\n\n.container-image {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.image-previ {\n  width: 150px;\n  height:150px;\n}\n\n.upload_title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.container-checkbox {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.card-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-bottom: 24px;\n}\n"

/***/ }),

/***/ "./src/app/admin-module/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div (click)=\"createCardFromName('PrimeTimeFut')\">CREATE CARD</div>-->\n\n<section class=\"search-wrapper\">\n  <div class=\"search-area2 bgimage\">\n    <div class=\"bg_image_holder\">\n      <img src=\"assets/images/search.jpg\" alt=\"\">\n    </div>\n    <div class=\"container content_above\">\n      <div class=\"row\">\n        <div class=\"col-sm-8 col-sm-offset-2\">\n          <div class=\"search\">\n            <div class=\"search__title\"><h3>Enter the channel's url</h3></div>\n            <div class=\"search__field\">\n              <form action=\"#\">\n                <div class=\"field-wrapper\">\n                  <input [(ngModel)]=\"urlChannel\" name=\"urlChannel\" (keyup.enter)=\"loadChannel()\"\n                         class=\"relative-field rounded\" type=\"text\" placeholder=\"Search your channel\">\n                  <button class=\"btn btn--round\" type=\"submit\" [ladda]=\"loadingChannel\" (click)=\"loadChannel()\">Search</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"dashboard_contents\">\n  <div class=\"container\">\n    <form action=\"#\" class=\"setting_form\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"information_module\">\n            <a class=\"toggle_title\" href=\"#collapseInformations\" role=\"button\" data-toggle=\"collapse\"\n               aria-expanded=\"false\" aria-controls=\"collapse1\" id=\"informations-card\">\n              <h4>Card Informations <span class=\"lnr lnr-chevron-down\"></span></h4>\n            </a>\n\n            <div class=\"information__set toggle_module collapse\" id=\"collapseInformations\">\n              <div class=\"information_wrapper form--fields\">\n                <div class=\"form-group\">\n                  <label for=\"cardName\">Card Name:</label>\n                  <input name=\"cardName\" type=\"text\" id=\"cardName\" class=\"text_field\" placeholder=\"Card Name\"\n                         [(ngModel)]=\"cardYoutuber.name\">\n                </div>\n\n                <div class=\"form-group\">\n                  <label for=\"citationCard\">Citation:</label>\n                  <textarea name=\"citationCard\" id=\"citationCard\" class=\"text_field\" placeholder=\"Channel's citation\"\n                            [(ngModel)]=\"cardYoutuber.citation\"></textarea>\n                </div>\n\n                <div class=\"form-group\">\n                  <label for=\"descriptionCard\">Description:</label>\n                  <textarea name=\"descriptionCard\" id=\"descriptionCard\" class=\"text_field\"\n                            placeholder=\"Channel's description\" [(ngModel)]=\"cardYoutuber.description\"></textarea>\n                </div>\n\n                <div class=\"form-group\">\n                  <label for=\"country\">Nationalities:</label>\n                  <div class=\"select-wrap select-wrap2\" id=\"wrapCountry\">\n                    <select [(ngModel)]=\"cardYoutuber.nationality\"  (change)=\"changeInputCountry()\" name=\"country\" id=\"country\" class=\"text_field\">\n                      <option *ngFor=\"let nat of nationalities\" [ngValue]=\"nat\">{{nat.name}}</option>\n                    </select>\n                    <span class=\"lnr lnr-chevron-down\"></span>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"codeCountry\">Country code:</label>\n                      <input name=\"codeCountry\" type=\"text\" id=\"codeCountry\" class=\"text_field\"\n                             placeholder=\"Code country\" [(ngModel)]=\"selectInputs.codeCountry\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"nameCountry\">Country name:</label>\n                      <input name=\"nameCountry\" type=\"text\" id=\"nameCountry\" class=\"text_field\"\n                             placeholder=\"Name country\" [(ngModel)]=\"selectInputs.nameCountry\">\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label for=\"category\">Category:</label>\n                  <div class=\"select-wrap select-wrap2\" id=\"wrapCategory\">\n                    <select [(ngModel)]=\"cardYoutuber.category\" (change)=\"changeInputCategory()\" name=\"category\" id=\"category\" class=\"text_field\">\n                      <option *ngFor=\"let cat of categories\" [ngValue]=\"cat\">{{cat.name}}</option>\n                    </select>\n                    <span class=\"lnr lnr-chevron-down\"></span>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"categoryName\">Category Name:</label>\n                  <input name=\"categoryName\" type=\"text\" id=\"categoryName\" class=\"text_field\" placeholder=\"Category Name\"\n                         [(ngModel)]=\"selectInputs.nameCategory\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-12\">\n          <div class=\"information_module\">\n            <a class=\"toggle_title\" href=\"#collapseStatistics\" role=\"button\" data-toggle=\"collapse\"\n               aria-expanded=\"false\" aria-controls=\"collapse1\" id=\"statistics-card\">\n              <h4>Card Statistics <span class=\"lnr lnr-chevron-down\"></span></h4>\n            </a>\n\n            <div class=\"information__set toggle_module collapse\" id=\"collapseStatistics\">\n              <div class=\"information_wrapper form--fields\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"nbSubscribers\">Number Subscribers:<sup>*</sup></label>\n                      <input name=\"nbSubscribers\" type=\"number\" id=\"nbSubscribers\" class=\"text_field\"\n                             placeholder=\"Number of subscribers\" [(ngModel)]=\"cardYoutuber.nbSubscribers\">\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"nbVideos\">Number Videos:</label>\n                      <input name=\"nbVideos\" type=\"number\" id=\"nbVideos\" class=\"text_field\" placeholder=\"Number of videos\"\n                             [(ngModel)]=\"cardYoutuber.nbVideos\">\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"nbViews\">Number Views:</label>\n                      <input name=\"nbViews\" type=\"number\" id=\"nbViews\" class=\"text_field\" placeholder=\"Number of views\"\n                             [(ngModel)]=\"cardYoutuber.nbViews\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-12\">\n          <div class=\"information_module\">\n            <a class=\"toggle_title\" href=\"#collapseImage\" role=\"button\" data-toggle=\"collapse\" id=\"image-card\">\n              <h4>Image <span class=\"lnr lnr-chevron-down\"></span></h4>\n            </a>\n\n            <div class=\"information__set toggle_module collapse\" id=\"collapseImage\">\n              <div class=\"information_wrapper form--fields\">\n                <div class=\"row\">\n                  <div class=\"prof_img_upload container-image\">\n                    <img [src]=\"cardYoutuber.image\" class=\"image-previ\">\n\n                    <div  class=\"upload_title\">\n                      <p>JPG, GIF or PNG 150x150 px</p>\n                      <label for=\"dp\" class=\"upload_btn\">\n                        <input style=\"display: none\" type=\"file\" id=\"dp\" (change)=\"refreshImage($event)\">\n                        <span class=\"btn btn--sm btn--round\">Upload Image</span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n              </div><!-- end /.information_wrapper -->\n            </div><!-- end /.information__set -->\n          </div>\n        </div>\n\n        <div class=\"col-md-12\">\n          <div class=\"information_module\">\n            <a class=\"toggle_title\" href=\"#collapseType\" role=\"button\" data-toggle=\"collapse\" id=\"price-card\">\n              <h4>Type and Price <span class=\"lnr lnr-chevron-down\"></span></h4>\n            </a>\n\n            <div class=\"information__set toggle_module collapse in\" id=\"collapseType\">\n              <div class=\"information_wrapper form--fields\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"type\">Type:</label>\n                      <div class=\"select-wrap select-wrap2\">\n                        <select [(ngModel)]=\"cardYoutuber.type\" name=\"type\" id=\"type\" class=\"text_field\">\n                          <option *ngFor=\"let type of types\" [ngValue]=\"type\">{{type.name}}</option>\n                        </select>\n                        <span class=\"lnr lnr-chevron-down\"></span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"cardPrice\">Card Price:</label>\n                      <input name=\"cardPrice\" (input)=\"priceChanged()\" type=\"number\" id=\"cardPrice\" class=\"text_field\"\n                             placeholder=\"Card price\" [(ngModel)]=\"cardYoutuber.price\">\n                    </div>\n                  </div>\n                </div>\n              </div><!-- end /.information_wrapper -->\n            </div><!-- end /.information__set -->\n          </div>\n        </div>\n\n      </div>\n    </form>\n\n    <div *ngIf=\"createOrigin\" class=\"row\">\n      <div class=\"col-md-offset-2 col-md-4\">\n        <div class=\"card-container\">\n          <card [card]=\"cardYoutuber\" [modal]=\"false\"></card>\n          <div class=\"container-checkbox\">\n            <div class=\"custom_checkbox\">\n              <input type=\"checkbox\" id=\"isLocked-evo\" class=\"\" name=\"mail_rating_reminder\" [(ngModel)]=\"cardYoutuber.isLocked\">\n              <label for=\"isLocked-evo\">\n                <span class=\"shadow_checkbox\"></span>\n                <span class=\"radio_title\">Locked</span>\n              </label>\n            </div>\n            <div class=\"custom_checkbox\">\n              <input type=\"checkbox\" id=\"isHidden-evo\" class=\"\" name=\"mail_rating_reminder\" [(ngModel)]=\"cardYoutuber.isHidden\">\n              <label for=\"isHidden-evo\">\n                <span class=\"shadow_checkbox\"></span>\n                <span class=\"radio_title\">Hidden</span>\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-offset- col-md-4\">\n        <div class=\"card-container\">\n          <card [card]=\"cardOriginYoutuber\" [modal]=\"false\"></card>\n          <div class=\"container-checkbox\">\n            <div class=\"custom_checkbox\">\n              <input type=\"checkbox\" id=\"isLocked-origin\" class=\"\" name=\"mail_rating_reminder\" [(ngModel)]=\"cardOriginYoutuber.isLocked\">\n              <label for=\"isLocked-origin\">\n                <span class=\"shadow_checkbox\"></span>\n                <span class=\"radio_title\">Locked</span>\n              </label>\n            </div>\n            <div class=\"custom_checkbox\">\n              <input type=\"checkbox\" id=\"isHidden-origin\" class=\"\" name=\"mail_rating_reminder\" [(ngModel)]=\"cardOriginYoutuber.isHidden\">\n              <label for=\"isHidden-origin\">\n                <span class=\"shadow_checkbox\"></span>\n                <span class=\"radio_title\">Hidden</span>\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"!createOrigin\" class=\"row\">\n      <div class=\"col-md-offset-4 col-md-4\">\n        <div class=\"card-container\">\n          <card [card]=\"cardYoutuber\" [modal]=\"false\"></card>\n          <div class=\"container-checkbox\">\n            <div class=\"custom_checkbox\">\n              <input type=\"checkbox\" id=\"isLocked-evo\" class=\"\" name=\"mail_rating_reminder\" [(ngModel)]=\"cardYoutuber.isLocked\">\n              <label for=\"isLocked-evo\">\n                <span class=\"shadow_checkbox\"></span>\n                <span class=\"radio_title\">Locked</span>\n              </label>\n            </div>\n            <div class=\"custom_checkbox\">\n              <input type=\"checkbox\" id=\"isHidden-evo\" class=\"\" name=\"mail_rating_reminder\" [(ngModel)]=\"cardYoutuber.isHidden\">\n              <label for=\"isHidden-evo\">\n                <span class=\"shadow_checkbox\"></span>\n                <span class=\"radio_title\">Hidden</span>\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"dashboard_title_area\">\n          <div class=\"dashboard__title admin_validation\">\n            <div class=\"\">\n              <input type=\"checkbox\" id=\"opt1\" class=\"\" name=\"mail_rating_reminder\" [checked] [(ngModel)]=\"createOrigin\" checked>\n              <label for=\"opt1\">\n                <span class=\"shadow_checkbox\"></span>\n                <span class=\"radio_title\">Create Origin</span>\n              </label>\n            </div>\n            <button type=\"submit\" class=\"btn btn--round btn--md\" [ladda]=\"createLoading\" (click)=\"createCard()\">Create card</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-module/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_youtube_service__ = __webpack_require__("./src/app/services/youtube.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_type_service__ = __webpack_require__("./src/app/services/type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_nationality_service__ = __webpack_require__("./src/app/services/nationality.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_card_service__ = __webpack_require__("./src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminComponent = /** @class */ (function () {
    function AdminComponent(youtubeService, typeService, nationalityService, http, categoryService, cs, userService) {
        var _this = this;
        this.youtubeService = youtubeService;
        this.typeService = typeService;
        this.nationalityService = nationalityService;
        this.http = http;
        this.categoryService = categoryService;
        this.cs = cs;
        this.userService = userService;
        this.types = [];
        this.nationalities = [];
        this.categories = [];
        this.fileYoutuber = null;
        this.createOrigin = true;
        this.loadingChannel = false;
        this.createLoading = false;
        this.formData = new FormData();
        this.responseYoutube = {};
        this.selectInputs = {
            codeCountry: "",
            nameCountry: "",
            nameCategory: ""
        };
        this.cardYoutuber = {
            name: "",
            image: "assets/images/cvrplc.jpg",
            nationality: {
                code: '',
                name: ''
            },
            nbSubscribers: 0,
            nbViews: 0,
            nbTransactions: 0,
            transactions: [],
            nbVideos: 0,
            isHidden: false,
            isLocked: false,
            category: {
                name: ''
            },
            url: "",
            description: "",
            citation: "",
            price: 0.001,
            owner: null,
            type: {
                name: "origin",
                css: "card-origin"
            }
        };
        this.cardOriginYoutuber = {
            name: "",
            image: "assets/images/cvrplc.jpg",
            nationality: null,
            nbSubscribers: 0,
            nbViews: 0,
            nbTransactions: 0,
            transactions: [],
            nbVideos: 0,
            isHidden: false,
            isLocked: false,
            category: null,
            url: "",
            description: "",
            citation: "",
            price: 0.001,
            owner: null,
            type: {
                name: "origin",
                css: "card-origin"
            }
        };
        typeService.getTypes().subscribe(function (res) {
            _this.types = res;
            _this.attributeType();
            _this.formData.append('image', '');
        });
        nationalityService.getNationalities().subscribe(function (res) {
            _this.nationalities = res;
        });
        this.categoryService.getCategories().subscribe(function (res) {
            _this.categories = res;
        });
        userService.getRoot().subscribe(function (res) {
            _this.rootUser = res;
            _this.cardYoutuber.owner = _this.rootUser;
            _this.cardOriginYoutuber.owner = _this.rootUser;
        });
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.attributeType = function () {
        for (var _i = 0, _a = this.types; _i < _a.length; _i++) {
            var type = _a[_i];
            if (type.minSubscribers && type.maxSubscribers && this.cardYoutuber.nbSubscribers != 0) {
                this.cardYoutuber.nbSubscribers = Number(this.cardYoutuber.nbSubscribers);
                if (this.cardYoutuber.nbSubscribers >= type.minSubscribers && this.cardYoutuber.nbSubscribers <= type.maxSubscribers) {
                    this.cardYoutuber.type = type;
                    return;
                }
            }
        }
        this.cardYoutuber.type = this.types[0];
    };
    AdminComponent.prototype.loadChannel = function () {
        var _this = this;
        console.log(this.urlChannel);
        this.loadingChannel = true;
        this.youtubeService.getChannel({ url: this.urlChannel }).subscribe(function (res) {
            _this.responseYoutube = res;
            _this.cardYoutuber.name = res.snippet.title;
            _this.cardYoutuber.image = res.snippet.thumbnails.medium.url;
            _this.cardYoutuber.description = res.snippet.description;
            _this.cardYoutuber.nbSubscribers = parseInt(res.statistics.subscriberCount);
            _this.cardYoutuber.nbVideos = parseInt(res.statistics.videoCount);
            _this.cardYoutuber.nbViews = parseInt(res.statistics.viewCount);
            _this.cardYoutuber.url = _this.urlChannel;
            _this.attributeType();
            _this.linkNationality(res.snippet.country, function (self) {
                var isHidden = self.cardOriginYoutuber.isHidden;
                var isLocked = self.cardOriginYoutuber.isLocked;
                self.cardOriginYoutuber = JSON.parse(JSON.stringify(self.cardYoutuber));
                self.cardOriginYoutuber.type = self.getOriginType();
                self.cardOriginYoutuber.isLocked = isLocked;
                self.cardOriginYoutuber.isHidden = isHidden;
            });
            _this.loadingChannel = false;
        });
    };
    AdminComponent.prototype.linkNationality = function (code, cb) {
        var _this = this;
        if (!code || typeof code == 'undefined') {
            cb(this);
            return;
        }
        this.http.get('https://restcountries.eu/rest/v2/alpha/' + code).subscribe(function (res) {
            var countryInfo = res;
            for (var _i = 0, _a = _this.nationalities; _i < _a.length; _i++) {
                var nat = _a[_i];
                if (nat.code.toLowerCase() == countryInfo.alpha2Code.toLowerCase()) {
                    _this.cardYoutuber.nationality = nat;
                    _this.selectInputs.codeCountry = _this.cardYoutuber.nationality.code;
                    _this.selectInputs.nameCountry = _this.cardYoutuber.nationality.name;
                    cb(_this);
                    return;
                }
            }
            if (_this.cardYoutuber.nationality == null) {
                _this.nationalityService.createNationality({
                    name: countryInfo.name.toLowerCase(),
                    code: countryInfo.alpha2Code.toUpperCase()
                }).subscribe(function (res) {
                    _this.cardYoutuber.nationality = res;
                    _this.selectInputs.codeCountry = _this.cardYoutuber.nationality.code;
                    _this.selectInputs.nameCountry = _this.cardYoutuber.nationality.name;
                    cb(_this);
                });
            }
        });
    };
    AdminComponent.prototype.checkForm = function () {
        this.resetInpputs();
        if (this.selectInputs.nameCountry == '' || this.selectInputs.codeCountry == '' || this.selectInputs.nameCategory == '') {
            var inputsCategory = [$('#wrapCategory'), $('#categoryName')];
            var inputsNationality = [$('#wrapCountry'), $('#codeCountry'), $('#nameCountry')];
            var collapseHead = $('#informations-card');
            var collapseBody = $('#collapseInformations');
            if (!collapseBody.hasClass('in')) {
                collapseHead.click();
            }
            var offset = void 0;
            if (this.selectInputs.nameCountry == '' || this.selectInputs.codeCountry == '') {
                offset = $("#country").offset().top - 100;
                inputsNationality[0].addClass('error');
                inputsNationality[1].addClass('error');
                inputsNationality[2].addClass('error');
            }
            else if (this.selectInputs.nameCategory == '') {
                offset = $("#category").offset().top - 100;
                inputsCategory[0].addClass('error');
                inputsCategory[1].addClass('error');
            }
            $('html, body').animate({
                scrollTop: offset
            }, 1000);
            return false;
        }
        return true;
    };
    AdminComponent.prototype.createCard = function () {
        var _this = this;
        if (!this.checkForm()) {
            return;
        }
        if (this.fileYoutuber) {
            this.formData.set('image', this.fileYoutuber);
            this.cardYoutuber.image = "";
        }
        var self = this;
        var category = this.categories.find(function (obj) {
            return obj.name == self.selectInputs.nameCategory;
        });
        var country = this.nationalities.find(function (obj) {
            return obj.code == self.selectInputs.codeCountry;
        });
        this.createLoading = true;
        var createCardSC = function (self) {
            self.cs.createCardSC(self.cardYoutuber).then(function (cardYT) {
                console.log('Created card evolutive', cardYT);
                if (self.fileYoutuber) {
                    self.cs.setImageCard(cardYT, self.formData).subscribe(function () { });
                }
                if (self.createOrigin) {
                    var isHidden = self.cardOriginYoutuber.isHidden;
                    var isLocked = self.cardOriginYoutuber.isLocked;
                    console.log('isHidden:', isHidden, isLocked);
                    self.cardOriginYoutuber = JSON.parse(JSON.stringify(self.cardYoutuber));
                    self.cardOriginYoutuber.type = self.getOriginType();
                    self.cardOriginYoutuber.isHidden = isHidden;
                    self.cardOriginYoutuber.isLocked = isLocked;
                    self.cs.createCardSC(self.cardOriginYoutuber).then(function (cardOrigin) {
                        console.log('Created card origin', cardOrigin);
                        self.createLoading = false;
                        if (self.fileYoutuber) {
                            self.cs.setImageCard(cardOrigin, self.formData).subscribe(function () {
                            });
                        }
                    });
                }
                else {
                    self.createLoading = false;
                }
            });
        };
        this.cardYoutuber.owner = this.rootUser;
        if (!country) {
            country = {
                code: this.selectInputs.codeCountry,
                name: this.selectInputs.nameCountry
            };
            this.nationalityService.createNationality(country).subscribe(function (res) {
                _this.cardYoutuber.nationality = res;
                if (!category) {
                    category = {
                        name: _this.selectInputs.nameCategory
                    };
                    _this.categoryService.create(category).subscribe(function (res) {
                        _this.cardYoutuber.category = res;
                        createCardSC(_this);
                    });
                }
            });
        }
        else if (!category) {
            category = {
                name: this.selectInputs.nameCategory
            };
            this.categoryService.create(category).subscribe(function (res) {
                _this.cardYoutuber.category = res;
                createCardSC(_this);
            });
        }
        else {
            createCardSC(this);
        }
    };
    AdminComponent.prototype.changeInputCategory = function () {
        this.selectInputs.nameCategory = this.cardYoutuber.category.name;
    };
    AdminComponent.prototype.changeInputCountry = function () {
        this.selectInputs.nameCountry = this.cardYoutuber.nationality.name;
        this.selectInputs.codeCountry = this.cardYoutuber.nationality.code;
    };
    AdminComponent.prototype.createCardFromName = function (name) {
        this.cs.createCardFromName(name).then(function (res) {
            console.log(res);
        });
    };
    AdminComponent.prototype.resetInpputs = function () {
        $('#wrapCategory').removeClass('error');
        $('#categoryName').removeClass('error');
        $('#wrapCountry').removeClass('error');
        $('#codeCountry').removeClass('error');
        $('#nameCountry').removeClass('error');
    };
    AdminComponent.prototype.priceChanged = function () {
        this.cardOriginYoutuber.price = this.cardYoutuber.price;
    };
    AdminComponent.prototype.refreshImage = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList && fileList.length > 0) {
            this.fileYoutuber = fileList[0];
            var reader = new FileReader();
            reader.onload = function (ev) {
                _this.cardYoutuber.image = ev.target.result;
                _this.cardOriginYoutuber.image = ev.target.result;
            };
            reader.readAsDataURL(this.fileYoutuber);
        }
    };
    AdminComponent.prototype.getOriginType = function () {
        for (var _i = 0, _a = this.types; _i < _a.length; _i++) {
            var type = _a[_i];
            if (type.name == "origin") {
                return type;
            }
        }
        return this.types[0];
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/admin-module/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/admin-module/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_youtube_service__["a" /* YoutubeService */], __WEBPACK_IMPORTED_MODULE_2__services_type_service__["a" /* TypeService */],
            __WEBPACK_IMPORTED_MODULE_3__services_nationality_service__["a" /* NationalityService */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_5__services_card_service__["a" /* CardService */],
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin-module/list-cards/list-cards.component.css":
/***/ (function(module, exports) {

module.exports = ".cards-options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.image-title-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  border-right: 1px solid #ececec;\n}\n\n.right-side {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  vertical-align: middle;\n}\n\n.buttons-modify {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\ninput[type=\"checkbox\"] {\n  -webkit-appearance: checkbox !important;\n  -moz-appearance: checkbox !important;\n  -ms-appearance: checkbox !important;\n  -o-appearance: checkbox !important;\n  appearance: checkbox !important;\n}\n"

/***/ }),

/***/ "./src/app/admin-module/list-cards/list-cards.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"search-wrapper\">\n  <div class=\"search-area2 bgimage\">\n    <!--<div class=\"bg_image_holder\">-->\n    <!--<img src=\"images/search.jpg\" alt=\"\">-->\n    <!--</div>-->\n    <div class=\"container content_above youtube_search\">\n      <div class=\"row\">\n        <div class=\"col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1\">\n          <div class=\"search\">\n            <div class=\"search__title\"><h3>Search your YTIcon</h3></div>\n            <div class=\"search__field\">\n              <form action=\"#\">\n                <div class=\"field-wrapper\">\n                  <input (input)=\"onSearchChange($event.target.value)\" name=\"search\" class=\"relative-field rounded\" type=\"text\" placeholder=\"Search your YTIcon\">\n                  <button class=\"btn btn--round\" type=\"submit\">Search</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"filter-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"filter-bar\">\n          <div class=\"filter__option filter--dropdown\">\n            <a href=\"#\" id=\"type\" class=\"dropdown-trigger\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{names.type ? names.type : 'Type'}}<span class=\"lnr lnr-chevron-down\"></span></a>\n            <ul  class=\"dropdown dropdown-menu\">\n              <li (click)=\"selectType('')\"><a>All <i *ngIf=\"!filters.type\" class=\"fa fa-check\"></i></a></li>\n              <li *ngFor=\"let type of types\" (click)=\"selectType(type)\"><a>{{type.name}} <i *ngIf=\"filters.type == type._id\" class=\"fa fa-check\"></i></a></li>\n            </ul>\n          </div>\n\n          <div class=\"filter__option filter--dropdown\">\n            <a href=\"#\" id=\"nationality\" class=\"dropdown-trigger\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{names.nationality ? names.nationality : 'Nationality'}}<span class=\"lnr lnr-chevron-down\"></span></a>\n            <ul  class=\"dropdown dropdown-menu\">\n              <li (click)=\"selectNationality('')\"><a>All <i *ngIf=\"!filters.nationality\" class=\"fa fa-check\"></i></a></li>\n              <li *ngFor=\"let nationality of nationalities\" (click)=\"selectNationality(nationality)\"><a>{{nationality.name}} <i *ngIf=\"filters.nationality == nationality._id\" class=\"fa fa-check\"></i></a></li>\n            </ul>\n          </div>\n\n          <div class=\"filter__option filter--dropdown\">\n            <a href=\"#\" id=\"category\" class=\"dropdown-trigger\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{names.category ? names.category : 'Channel Category'}}<span class=\"lnr lnr-chevron-down\"></span></a>\n            <ul  class=\"dropdown dropdown-menu\">\n              <li (click)=\"selectCategory('')\"><a>All <i *ngIf=\"!filters.category\" class=\"fa fa-check\"></i></a></li>\n              <li *ngFor=\"let category of categories\" (click)=\"selectCategory(category)\"><a>{{category.name}} <i *ngIf=\"filters.category == category._id\" class=\"fa fa-check\"></i></a></li>\n            </ul>\n          </div>\n\n          <div class=\"filter__option filter--dropdown\">\n            <a href=\"#\" id=\"follower\" class=\"dropdown-trigger\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{names.subscribers ? names.subscribers + ' followers' : 'Followers'}}<span class=\"lnr lnr-chevron-down\"></span></a>\n            <ul  class=\"dropdown dropdown-menu\">\n              <li (click)=\"selectFollower('', null, null)\"><a>All <i *ngIf=\"!filters.minSubscribers && !filters.maxSubscribers\" class=\"fa fa-check\"></i></a></li>\n              <li  (click)=\"selectFollower(0,50000, '0 - 50K')\"><a>0 - 50K <i *ngIf=\"filters.minSubscribers == 0 && filters.maxSubscribers == 50000\" class=\"fa fa-check\"></i></a></li>\n              <li  (click)=\"selectFollower(50000,100000, '50K - 100K')\"><a>50K - 100K <i *ngIf=\"filters.minSubscribers == 50000 && filters.maxSubscribers == 100000\" class=\"fa fa-check\"></i></a></li>\n              <li  (click)=\"selectFollower(100000,500000, '100K - 500K')\"><a>100K - 500K <i *ngIf=\"filters.minSubscribers == 100000 && filters.maxSubscribers == 500000\" class=\"fa fa-check\"></i></a></li>\n              <li  (click)=\"selectFollower(500000,1000000, '500K - 1M')\"><a>500K - 1M <i *ngIf=\"filters.minSubscribers == 500000 && filters.maxSubscribers == 1000000\" class=\"fa fa-check\"></i></a></li>\n              <li  (click)=\"selectFollower(1000000,10000000, '1M - 10M')\"><a>1M - 10M <i *ngIf=\"filters.minSubscribers == 1000000 && filters.maxSubscribers == 10000000\" class=\"fa fa-check\"></i></a></li>\n              <li  (click)=\"selectFollower(10000000,null, 'More than 10M')\"><a>More than 10M <i *ngIf=\"filters.minSubscribers == 10000000 && !filters.maxSubscribers\" class=\"fa fa-check\"></i></a></li>\n            </ul>\n          </div>\n\n          <div class=\"filter__option filter--dropdown\">\n            <a href=\"#\" id=\"video\" class=\"dropdown-trigger\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{names.videos ? names.videos + ' videos' : 'Videos'}}<span class=\"lnr lnr-chevron-down\"></span></a>\n            <ul  class=\"dropdown dropdown-menu\">\n              <li (click)=\"selectVideo('', null, null)\"><a>All <i *ngIf=\"!filters.minVideos && !filters.maxVideos\" class=\"fa fa-check\"></i></a></li>\n              <li  (click)=\"selectVideo(0,100, '0 - 100')\"><a>0 - 100 <i *ngIf=\"filters.minVideos == 0 && filters.maxVideos == 100\" class=\"fa fa-check\"></i></a></li>\n              <li  (click)=\"selectVideo(100,200, '100 - 200')\"><a>100 - 200 <i *ngIf=\"filters.minVideos == 100 && filters.maxVideos == 200\" class=\"fa fa-check\"></i></a></li>\n              <li  (click)=\"selectVideo(200,500,'200 - 500')\"><a>200 - 500 <i *ngIf=\"filters.minVideos == 200 && filters.maxVideos == 500\" class=\"fa fa-check\"></i></a></li>\n              <li  (click)=\"selectVideo(500,1000,'500 - 1K')\"><a>500 - 1 000 <i *ngIf=\"filters.minVideos == 500 && filters.maxVideos == 1000\" class=\"fa fa-check\"></i></a></li>\n              <li  (click)=\"selectVideo(1000,5000,'1K - 5K')\"><a>1 000 - 5 000 <i *ngIf=\"filters.minVideos == 1000 && filters.maxVideos == 5000\" class=\"fa fa-check\"></i></a></li>\n              <li  (click)=\"selectVideo(5000,10000,'5K - 10K')\"><a>5 000 - 10 000 <i *ngIf=\"filters.minVideos == 5000 && filters.maxVideos == 10000\" class=\"fa fa-check\"></i></a></li>\n              <li  (click)=\"selectVideo(10000,50000,'10K - 50K')\"><a>10 000 - 50 000 <i *ngIf=\"filters.minVideos == 10000 && filters.maxVideos == 50000\" class=\"fa fa-check\"></i></a></li>\n              <li  (click)=\"selectVideo(50000,null,'More than 50K')\"><a>More than 50 000 <i *ngIf=\"filters.minVideos == 50000 && !filters.maxVideos\" class=\"fa fa-check\"></i></a></li>\n            </ul>\n          </div>\n\n\n          <!--<div class=\"filter__option filter&#45;&#45;dropdown filter&#45;&#45;range\">-->\n          <!--<a href=\"#\" id=\"drop3\" class=\"dropdown-trigger\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Price Range <span class=\"lnr lnr-chevron-down\"></span></a>-->\n          <!--<div class=\"dropdown dropdown-menu\" aria-labelledby=\"drop3\">-->\n          <!--<div class=\"range-slider price-range\"></div>-->\n\n          <!--<div class=\"price-ranges\">-->\n          <!--<span class=\"from rounded\">$30</span>-->\n          <!--<span class=\"to rounded\">$300</span>-->\n          <!--</div>-->\n          <!--</div>-->\n          <!--</div>-->\n\n          <div class=\"filter__option filter--select\">\n            <div class=\"select-wrap\">\n              <select (change)=\"selectSort($event.target.value)\" name=\"price\">\n                <option value=\"createdAt_desc\">Newest</option>\n                <option value=\"createdAt_asc\">Oldest</option>\n                <option value=\"price_desc\">Price : High to low</option>\n                <option value=\"price_asc\">Price : Low to High</option>\n                <option value=\"nbSubscribers_desc\">Rarety : High to low</option>\n                <option value=\"nbSubscribers_asc\">Rarety : Low to High</option>\n                <option value=\"nbVideos_desc\">Video number : High to low</option>\n                <option value=\"nbVideos_asc\">Video number : Low to High</option>\n                <option value=\"nbTransactions_desc\">Transaction number : High to low</option>\n                <option value=\"nbTransactions_asc\">Transaction number : Low to High</option>\n              </select>\n              <span class=\"lnr lnr-chevron-down\"></span>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<section class=\"bgcolor\">\n  <div class=\"section--padding2\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n\n          <div class=\"shortcode_module_title\">\n            <div class=\"dashboard__title\">\n              <div class=\"row\">\n                <div class=\"col-md-4 image-title-container\">\n                    <p>Card</p>\n                </div>\n                <div class=\"col-md-8\">\n                  <div class=\"cards-options\">\n                    <p>Locked</p>\n                    <p>Hidden</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div *ngFor=\"let card of cards\" class=\"shortcode_module_title\">\n            <div class=\"dashboard__title\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <card [card]=\"card\" [modal]=\"false\"></card>\n                </div>\n                <div class=\"col-md-8\">\n                  <div class=\"right-side\">\n                    <div class=\"cards-options\">\n                      <div class=\"custom_checkbox\">\n                        <input type=\"checkbox\" id=\"{{'isLocked' + card.id}}\" (change)=\"triggerSave(card)\" [(ngModel)]=\"card.isLocked\">\n                        <label for=\"{{'isLocked' + card.id}}\"><span class=\"shadow_checkbox\"></span></label>\n                      </div>\n                      <div class=\"custom_checkbox\">\n                        <input type=\"checkbox\" id=\"{{'isHidden' + card.id}}\" (change)=\"triggerSave(card)\" [(ngModel)]=\"card.isHidden\">\n                        <label for=\"{{'isHidden' + card.id}}\"><span class=\"shadow_checkbox\"></span>\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"buttons-modify\">\n                      <button (click)=\"saveCard(card)\" [ladda]=\"card.isSaving\" [class.disabled]=\"!card.modified\" class=\"btn btn--round btn--default\">Save</button>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"maxPages > 0\">\n      <div class=\"col-md-12\">\n        <div class=\"pagination-area\">\n          <nav class=\"navigation pagination\" role=\"navigation\">\n            <div class=\"nav-links\">\n              <a class=\"prev page-numbers\" (click)=\"prevPage()\"><span class=\"lnr lnr-arrow-left\"></span></a>\n\n              <a class=\"prev page-numbers\" *ngIf=\"maxPages > 4\" [class.disabled]=\"filters.page == 1\" (click)=\"loadPage(1)\">First</a>\n\n              <a *ngFor=\"let in of counter(maxPages); let idxPage = index\" class=\"page-numbers\"\n                 [class.current]=\"idxPage + 1 == filters.page\" (click)=\"loadPage(idxPage + 1)\">\n                {{idxPage + 1}}\n              </a>\n\n              <a class=\"prev page-numbers\" *ngIf=\"maxPages > 4\" (click)=\"loadPage(maxPages)\">Last</a>\n              <a class=\"next page-numbers\" [class.disabled]=\"filters.page == maxPages\" (click)=\"nextPage()\"><span class=\"lnr lnr-arrow-right\"></span></a>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/admin-module/list-cards/list-cards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_card_service__ = __webpack_require__("./src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_type_service__ = __webpack_require__("./src/app/services/type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_nationality_service__ = __webpack_require__("./src/app/services/nationality.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListCardsComponent = /** @class */ (function () {
    function ListCardsComponent(cardService, typeService, nationalityService, categoryService, toastr, vcr) {
        var _this = this;
        this.cardService = cardService;
        this.typeService = typeService;
        this.nationalityService = nationalityService;
        this.categoryService = categoryService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.cards = [];
        this.types = [];
        this.nationalities = [];
        this.categories = [];
        this.isLoading = false;
        this.subscribtions = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["a" /* Subscription */]();
        this.maxPages = 0;
        this.names = {
            type: null,
            nationality: null,
            category: null,
            subscribers: null,
            videos: null
        };
        this.filters = {
            page: 1,
            name: null,
            type: null,
            category: null,
            minPrice: null,
            maxPrice: null,
            minSubscribers: null,
            maxSubscribers: null,
            minViews: null,
            maxViews: null,
            minVideos: null,
            maxVideos: null,
            minTransactions: null,
            maxTransactions: null,
            nationality: null,
            sort: "createdAt",
            order: "DESC",
            nbViews: null,
            nbTransactions: null
        };
        this.timeout = null;
        this.getCards();
        this.toastr.setRootViewContainerRef(this.vcr);
        this.subscribtions.add(this.typeService.getTypes().subscribe(function (res) {
            _this.types = res;
        }));
        this.subscribtions.add(this.nationalityService.getNationalities().subscribe(function (res) {
            _this.nationalities = res;
        }));
        this.subscribtions.add(this.categoryService.getCategories().subscribe(function (res) {
            _this.categories = res;
        }));
    }
    ListCardsComponent.prototype.generateQueryParams = function () {
        var obj = {};
        for (var key in this.filters) {
            if (this.filters[key]) {
                obj[key] = this.filters[key];
            }
        }
        return obj;
    };
    ListCardsComponent.prototype.ngOnInit = function () {
    };
    ListCardsComponent.prototype.getCards = function () {
        var _this = this;
        this.isLoading = true;
        this.cards = [];
        this.subscribtions.add(this.cardService.getCardsQueryAdmin(this.generateQueryParams()).subscribe(function (res) {
            _this.isLoading = false;
            _this.cards = res.cards;
            _this.maxPages = res.pages;
            console.log('cards', res);
            for (var _i = 0, _a = _this.cards; _i < _a.length; _i++) {
                var card = _a[_i];
                card.copy = JSON.parse(JSON.stringify(card));
                card.modifed = false;
                card.isSaving = false;
            }
        }));
    };
    ListCardsComponent.prototype.selectType = function (type) {
        this.filters.type = type._id;
        this.names.type = type.name;
        this.getCards();
    };
    ListCardsComponent.prototype.selectNationality = function (nationality) {
        this.filters.nationality = nationality._id;
        this.names.nationality = nationality.name;
        this.getCards();
    };
    ListCardsComponent.prototype.selectCategory = function (category) {
        this.filters.category = category._id;
        this.names.category = category.name;
        this.getCards();
    };
    ListCardsComponent.prototype.selectFollower = function (min, max, s) {
        this.filters.maxSubscribers = max;
        this.filters.minSubscribers = min;
        this.names.subscribers = s;
        this.getCards();
    };
    ListCardsComponent.prototype.selectVideo = function (min, max, s) {
        this.filters.maxVideos = max;
        this.filters.minVideos = min;
        this.names.videos = s;
        this.getCards();
    };
    ListCardsComponent.prototype.selectSort = function (sort) {
        var sort_array = sort.split("_");
        this.filters.sort = sort_array[0];
        this.filters.order = sort_array[1];
        this.getCards();
    };
    ListCardsComponent.prototype.prevPage = function () {
        if (this.filters.page > 1) {
            --this.filters.page;
            this.getCards();
        }
    };
    ListCardsComponent.prototype.nextPage = function () {
        if (this.filters.page < this.maxPages) {
            ++this.filters.page;
            this.getCards();
        }
    };
    ListCardsComponent.prototype.loadPage = function (idx) {
        this.filters.page = idx;
        this.getCards();
    };
    ListCardsComponent.prototype.counter = function (max) {
        var counters = new Array(max);
        return counters;
    };
    ListCardsComponent.prototype.onSearchChange = function (searchValue) {
        if (this.timeout !== null) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(function (self) {
            self.filters.name = searchValue;
            self.getCards();
        }, 1000, this);
    };
    /*** Market component change ***/
    ListCardsComponent.prototype.saveCard = function (card) {
        var _this = this;
        card.isSaving = true;
        var modifyCard = function (card) {
            _this.subscribtions.add(_this.cardService.modifyCard(card).subscribe(function (res) {
                card = _this.initCopyCard(card);
                _this.toastr.success('Card ' + card.name + ' has been modified', 'Card');
            }, function (error) {
                card = _this.initCopyCard(card);
                _this.toastr.warning('Error during the transaction', 'Network');
            }));
        };
        if (card.isLocked != card.copy.isLocked) {
            if (card.isLocked) {
                this.cardService.lockCard(card.id).then(function (resultat) {
                    if (!resultat) {
                        card = _this.initCopyCard(card);
                        return;
                    }
                    card.tx = resultat;
                    modifyCard(card);
                });
            }
            else {
                this.cardService.unlockCard(card.id).then(function (resultat) {
                    if (!resultat) {
                        card = _this.initCopyCard(card);
                        return;
                    }
                    card.tx = resultat;
                    modifyCard(card);
                });
            }
        }
        else {
            modifyCard(card);
        }
    };
    ListCardsComponent.prototype.initCopyCard = function (card) {
        card.isSaving = false;
        card.modified = false;
        card = JSON.parse(JSON.stringify(card.copy));
        return card;
    };
    ListCardsComponent.prototype.triggerSave = function (card) {
        if (card.isHidden != card.copy.isHidden || card.isLocked != card.copy.isLocked ||
            card.type._id != card.copy.type._id) {
            card.modified = true;
        }
        if (card.isHidden == card.copy.isHidden && card.isLocked == card.copy.isLocked &&
            card.type._id == card.copy.type._id) {
            card.modified = false;
        }
    };
    ListCardsComponent.prototype.ngOnDestroy = function () {
        this.subscribtions.unsubscribe();
    };
    ListCardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-cards',
            template: __webpack_require__("./src/app/admin-module/list-cards/list-cards.component.html"),
            styles: [__webpack_require__("./src/app/admin-module/list-cards/list-cards.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_card_service__["a" /* CardService */], __WEBPACK_IMPORTED_MODULE_2__services_type_service__["a" /* TypeService */],
            __WEBPACK_IMPORTED_MODULE_3__services_nationality_service__["a" /* NationalityService */], __WEBPACK_IMPORTED_MODULE_4__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ListCardsComponent);
    return ListCardsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_module_home_home_component__ = __webpack_require__("./src/app/home-module/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__market_module_market_market_component__ = __webpack_require__("./src/app/market-module/market/market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_module_profile_profile_component__ = __webpack_require__("./src/app/account-module/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_module_signin_signin_component__ = __webpack_require__("./src/app/authentication-module/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_module_signup_signup_component__ = __webpack_require__("./src/app/authentication-module/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__faq_module_faq_faq_component__ = __webpack_require__("./src/app/faq-module/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__leaderboard_module_leaderboard_leaderboard_component__ = __webpack_require__("./src/app/leaderboard-module/leaderboard/leaderboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__privacypolicy_module_privacypolicy_privacypolicy_component__ = __webpack_require__("./src/app/privacypolicy-module/privacypolicy/privacypolicy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__legal_module_legal_legal_component__ = __webpack_require__("./src/app/legal-module/legal/legal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_module_admin_admin_component__ = __webpack_require__("./src/app/admin-module/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_module_contact_contact_component__ = __webpack_require__("./src/app/contact-module/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bountyprogram_module_bountyprogram_bountyprogram_component__ = __webpack_require__("./src/app/bountyprogram-module/bountyprogram/bountyprogram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__operation_module_operation_operation_component__ = __webpack_require__("./src/app/operation-module/operation/operation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_is_admin_guard__ = __webpack_require__("./src/app/guards/is-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_authentication_guard__ = __webpack_require__("./src/app/guards/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__live_module_live_live_component__ = __webpack_require__("./src/app/live-module/live/live.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__termsofservice_module_termsofservice_termsofservice_component__ = __webpack_require__("./src/app/termsofservice-module/termsofservice/termsofservice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_module_list_cards_list_cards_component__ = __webpack_require__("./src/app/admin-module/list-cards/list-cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__verifyicon_module_verifyicon_verifyicon_component__ = __webpack_require__("./src/app/verifyicon-module/verifyicon/verifyicon.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_module_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'market',
        component: __WEBPACK_IMPORTED_MODULE_3__market_module_market_market_component__["a" /* MarketComponent */]
    },
    {
        path: 'account',
        component: __WEBPACK_IMPORTED_MODULE_4__account_module_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_16__guards_authentication_guard__["a" /* AuthenticationGuard */]
        ],
        data: {
            redirectTo: '/login'
        }
    },
    {
        path: 'account/:address',
        component: __WEBPACK_IMPORTED_MODULE_4__account_module_profile_profile_component__["a" /* ProfileComponent */],
    },
    {
        path: 'leaderboard',
        component: __WEBPACK_IMPORTED_MODULE_8__leaderboard_module_leaderboard_leaderboard_component__["a" /* LeaderboardComponent */],
    },
    {
        path: 'live',
        component: __WEBPACK_IMPORTED_MODULE_17__live_module_live_live_component__["a" /* LiveComponent */],
    },
    {
        path: 'faq',
        component: __WEBPACK_IMPORTED_MODULE_7__faq_module_faq_faq_component__["a" /* FaqComponent */],
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_12__contact_module_contact_contact_component__["a" /* ContactComponent */],
    },
    {
        path: 'termsofservice',
        component: __WEBPACK_IMPORTED_MODULE_18__termsofservice_module_termsofservice_termsofservice_component__["a" /* TermsOfServiceComponent */],
    },
    {
        path: 'operation',
        component: __WEBPACK_IMPORTED_MODULE_14__operation_module_operation_operation_component__["a" /* OperationComponent */],
    },
    {
        path: 'bountyprogram',
        component: __WEBPACK_IMPORTED_MODULE_13__bountyprogram_module_bountyprogram_bountyprogram_component__["a" /* BountyProgramComponent */],
    },
    {
        path: 'signin',
        component: __WEBPACK_IMPORTED_MODULE_5__authentication_module_signin_signin_component__["a" /* SigninComponent */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_11__admin_module_admin_admin_component__["a" /* AdminComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_15__guards_is_admin_guard__["a" /* IsAdminGuard */]
        ]
    },
    {
        path: 'list-cards',
        component: __WEBPACK_IMPORTED_MODULE_19__admin_module_list_cards_list_cards_component__["a" /* ListCardsComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_15__guards_is_admin_guard__["a" /* IsAdminGuard */]
        ]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_6__authentication_module_signup_signup_component__["a" /* SignupComponent */],
    },
    {
        path: 'privacypolicy',
        component: __WEBPACK_IMPORTED_MODULE_9__privacypolicy_module_privacypolicy_privacypolicy_component__["a" /* PrivacyPolicyComponent */],
    },
    {
        path: 'legal',
        component: __WEBPACK_IMPORTED_MODULE_10__legal_module_legal_legal_component__["a" /* LegalComponent */],
    },
    {
        path: 'verify',
        component: __WEBPACK_IMPORTED_MODULE_20__verifyicon_module_verifyicon_verifyicon_component__["a" /* VerifyIconComponent */],
    },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', redirectTo: '/home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, as, toastr, vcr) {
        this.router = router;
        this.as = as;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                $('html,body').animate({ scrollTop: 0 }, 500);
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_slick__ = __webpack_require__("./node_modules/ngx-slick/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_module_menu_module__ = __webpack_require__("./src/app/menu-module/menu.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_module_footer_module_module__ = __webpack_require__("./src/app/footer-module/footer-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_module_home_module__ = __webpack_require__("./src/app/home-module/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__market_module_market_module__ = __webpack_require__("./src/app/market-module/market.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_module_account_module__ = __webpack_require__("./src/app/account-module/account.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__authentication_module_authentication_module__ = __webpack_require__("./src/app/authentication-module/authentication.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_realvalue_service__ = __webpack_require__("./src/app/services/realvalue.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_card_service__ = __webpack_require__("./src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__faq_module_faq_module__ = __webpack_require__("./src/app/faq-module/faq.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_type_service__ = __webpack_require__("./src/app/services/type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_manager_service__ = __webpack_require__("./src/app/services/manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__leaderboard_module_leaderboard_module__ = __webpack_require__("./src/app/leaderboard-module/leaderboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__privacypolicy_module_privacypolicy_module__ = __webpack_require__("./src/app/privacypolicy-module/privacypolicy.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__legal_module_legal_module__ = __webpack_require__("./src/app/legal-module/legal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_nationality_service__ = __webpack_require__("./src/app/services/nationality.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_currency_service__ = __webpack_require__("./src/app/services/currency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__admin_module_admin_module__ = __webpack_require__("./src/app/admin-module/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_youtube_service__ = __webpack_require__("./src/app/services/youtube.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__contact_module_contact_module__ = __webpack_require__("./src/app/contact-module/contact.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__bountyprogram_module_bountyprogram_module__ = __webpack_require__("./src/app/bountyprogram-module/bountyprogram.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__operation_module_operation_module__ = __webpack_require__("./src/app/operation-module/operation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__directives_directives_module__ = __webpack_require__("./src/app/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__guards_is_admin_guard__ = __webpack_require__("./src/app/guards/is-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__guards_authentication_guard__ = __webpack_require__("./src/app/guards/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_socket_service__ = __webpack_require__("./src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__live_module_live_module__ = __webpack_require__("./src/app/live-module/live.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__termsofservice_module_termsofservice_module__ = __webpack_require__("./src/app/termsofservice-module/termsofservice.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_leaderboard_service__ = __webpack_require__("./src/app/services/leaderboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angular2_ladda__ = __webpack_require__("./node_modules/angular2-ladda/module/module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angular2_ladda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_angular2_ladda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_live_service__ = __webpack_require__("./src/app/services/live.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__verifyicon_module_verifyicon_module__ = __webpack_require__("./src/app/verifyicon-module/verifyicon.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__interceptors_token_interceptor__ = __webpack_require__("./src/app/interceptors/token.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__services_token_service__ = __webpack_require__("./src/app/services/token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ngx_slick__["a" /* SlickModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_5__menu_module_menu_module__["a" /* MenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__footer_module_footer_module_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_7__home_module_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_9__market_module_market_module__["a" /* MarketModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__account_module_account_module__["a" /* AccountModule */],
                __WEBPACK_IMPORTED_MODULE_11__authentication_module_authentication_module__["a" /* AuthenticationModule */],
                __WEBPACK_IMPORTED_MODULE_15__faq_module_faq_module__["a" /* FaqModule */],
                __WEBPACK_IMPORTED_MODULE_21__leaderboard_module_leaderboard_module__["a" /* LeaderboardModule */],
                __WEBPACK_IMPORTED_MODULE_22__privacypolicy_module_privacypolicy_module__["a" /* PrivacyPolicyModule */],
                __WEBPACK_IMPORTED_MODULE_23__legal_module_legal_module__["a" /* LegalModule */],
                __WEBPACK_IMPORTED_MODULE_27__admin_module_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_18__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_29__contact_module_contact_module__["a" /* ContactModule */],
                __WEBPACK_IMPORTED_MODULE_30__bountyprogram_module_bountyprogram_module__["a" /* BountyProgramModule */],
                __WEBPACK_IMPORTED_MODULE_31__operation_module_operation_module__["a" /* OperationModule */],
                __WEBPACK_IMPORTED_MODULE_32__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_37__live_module_live_module__["a" /* LiveModule */],
                __WEBPACK_IMPORTED_MODULE_38__termsofservice_module_termsofservice_module__["a" /* TermsOfServiceModule */],
                __WEBPACK_IMPORTED_MODULE_40_angular2_ladda__["LaddaModule"],
                __WEBPACK_IMPORTED_MODULE_43_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_42__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_44__verifyicon_module_verifyicon_module__["a" /* VerifyIconModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_realvalue_service__["a" /* RealvalueService */],
                __WEBPACK_IMPORTED_MODULE_20__services_manager_service__["a" /* ManagerService */],
                __WEBPACK_IMPORTED_MODULE_35__guards_authentication_guard__["a" /* AuthenticationGuard */],
                __WEBPACK_IMPORTED_MODULE_16__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_14__services_card_service__["a" /* CardService */],
                __WEBPACK_IMPORTED_MODULE_17__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_19__services_type_service__["a" /* TypeService */],
                __WEBPACK_IMPORTED_MODULE_24__services_nationality_service__["a" /* NationalityService */],
                __WEBPACK_IMPORTED_MODULE_25__services_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_26__services_currency_service__["a" /* CurrencyService */],
                __WEBPACK_IMPORTED_MODULE_28__services_youtube_service__["a" /* YoutubeService */],
                __WEBPACK_IMPORTED_MODULE_36__services_socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_39__services_leaderboard_service__["a" /* LeaderboardService */],
                __WEBPACK_IMPORTED_MODULE_33_ng2_cookies__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_34__guards_is_admin_guard__["a" /* IsAdminGuard */],
                __WEBPACK_IMPORTED_MODULE_41__services_live_service__["a" /* LiveService */],
                __WEBPACK_IMPORTED_MODULE_47__services_token_service__["a" /* TokenService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_46__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_45__interceptors_token_interceptor__["a" /* TokenInterceptor */],
                    multi: true
                }
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication-module/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__ = __webpack_require__("./src/app/authentication-module/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__("./src/app/authentication-module/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_directives_module__ = __webpack_require__("./src/app/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_manager_service__ = __webpack_require__("./src/app/services/manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__directives_directives_module__["a" /* DirectivesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__["a" /* SigninComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_8__services_manager_service__["a" /* ManagerService */]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication-module/signin/signin.component.css":
/***/ (function(module, exports) {

module.exports = "#ch2 {\n  display: block;\n  margin: 0;\n}\n\n.custom_checkbox {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.custom_checkbox label .label_text {\n  margin-left: 7px;\n}\n"

/***/ }),

/***/ "./src/app/authentication-module/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "    <!--================================\n        START BREADCRUMB AREA\n    =================================-->\n    <section class=\"breadcrumb-area\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"breadcrumb\">\n                        <ul>\n                            <li><a href=\"index.html\">Home</a></li>\n                            <li class=\"active\"><a href=\"#\">Login</a></li>\n                        </ul>\n                    </div>\n                    <h1 class=\"page-title\">Login</h1>\n                </div><!-- end /.col-md-12 -->\n            </div><!-- end /.row -->\n        </div><!-- end /.container -->\n    </section>\n    <!--================================\n        END BREADCRUMB AREA\n    =================================-->\n\n    <!--================================\n            START LOGIN AREA\n    =================================-->\n    <section class=\"login_area section--padding2\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 col-md-offset-3\">\n                    <form action=\"#\">\n                        <div class=\"cardify login\">\n                            <div class=\"login--header\">\n                                <h3>Welcome Back</h3>\n                                <p>You can sign in with your username or e-mail</p>\n                            </div><!-- end .login_header -->\n\n                            <div class=\"login--form\">\n                                <div class=\"form-group\">\n                                    <label for=\"user_name\">Username</label>\n                                    <input name=\"username\" [(ngModel)]=\"username\" id=\"user_name\" type=\"text\" class=\"text_field\" placeholder=\"Enter your username...\">\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label for=\"pass\">Password</label>\n                                    <input type=\"password\"  name=\"password\" [(ngModel)]=\"password\" id=\"pass\" class=\"text_field\" placeholder=\"Enter your password...\">\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <div class=\"custom_checkbox\">\n                                        <input type=\"checkbox\" id=\"ch2\" (change)=\"rememberMe = !rememberMe\" [checked]=\"rememberMe\">\n                                        <label for=\"ch2\"><span class=\"label_text\">Remember me</span></label>\n                                    </div>\n                                </div>\n\n                                <button class=\"btn btn--md btn--round\" type=\"submit\" (click)=\"signin()\">Login Now</button>\n\n                                <div class=\"login_assist\">\n                                    <p class=\"recover\">Lost your <a href=\"pass-recovery.html\">username</a> or <a href=\"pass-recovery.html\">password</a>?</p>\n                                    <p class=\"signup\">Don't have an <a (click)=\"redirect('signup')\">account</a>?</p>\n                                </div>\n                            </div><!-- end .login--form -->\n                        </div><!-- end .cardify -->\n                    </form>\n                </div><!-- end .col-md-6 -->\n            </div><!-- end .row -->\n        </div><!-- end .container -->\n    </section>\n    <!--================================\n            END LOGIN AREA\n    =================================-->\n"

/***/ }),

/***/ "./src/app/authentication-module/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fortawesome_fontawesome_free_solid__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-solid/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_token_service__ = __webpack_require__("./src/app/services/token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SigninComponent = /** @class */ (function () {
    function SigninComponent(as, _router, cookieService, toastr, tokenService) {
        this.as = as;
        this._router = _router;
        this.cookieService = cookieService;
        this.toastr = toastr;
        this.tokenService = tokenService;
        this.rememberMe = true;
        this.subscribtions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["a" /* Subscription */]();
        __WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_7__fortawesome_fontawesome_free_solid__["a" /* faCheck */]);
    }
    SigninComponent.prototype.signin = function () {
        var _this = this;
        var toastr = this.toastr;
        this.subscribtions.add(this.as.login(this.username, this.password).subscribe(function (res) {
            if (_this.rememberMe) {
                localStorage.setItem('yticons-token', res.token);
            }
            else {
                _this.cookieService.set('yticons-token', res.token);
            }
            _this.as.setCurrentUser(res);
            _this._router.navigate(['account']);
        }, function (error) {
            toastr.error('The entered credentials are incorrect.', 'Authentication');
        }));
    };
    SigninComponent.prototype.redirect = function (pagename) {
        this._router.navigate(['/' + pagename]);
    };
    SigninComponent.prototype.ngOnInit = function () {
        if (this.as.currentUser != null) {
            this._router.navigate(['account']);
        }
    };
    SigninComponent.prototype.ngOnDestroy = function () {
        this.subscribtions.unsubscribe();
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/authentication-module/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/authentication-module/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_cookies__["CookieService"], __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_8__services_token_service__["a" /* TokenService */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/authentication-module/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication-module/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<!--================================\n    START BREADCRUMB AREA\n=================================-->\n<section class=\"breadcrumb-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"breadcrumb\">\n          <ul>\n            <li><a href=\"index.html\">Home</a></li>\n            <li class=\"active\"><a href=\"#\">Signup</a></li>\n          </ul>\n        </div>\n        <h1 class=\"page-title\">Sign up</h1>\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END BREADCRUMB AREA\n=================================-->\n\n<!--================================\n        START SIGNUP AREA\n=================================-->\n<section class=\"signup_area section--padding2\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3\">\n        <form action=\"#\">\n          <div class=\"cardify signup_form\">\n            <div class=\"login--header\">\n              <h3>Create Your Account</h3>\n              <p>Please fill the following fields with appropriate information\n                to register a new MartPlace account.</p>\n            </div><!-- end .login_header -->\n\n            <div class=\"login--form\">\n\n\n              <div class=\"form-group\">\n                <!--<div class=\"float-label-control\">-->\n                  <!--<a class=\"btn btn-sm btn-primary\" href=\"javascript:;\">Upload Contract File-->\n                    <!--<input class=\"uploadfile-style\" (change)=\"fileChange($event)\" name=\"CContractorFPath\" size=\"10\" type=\"file\">-->\n                  <!--</a>-->\n                <!--</div>-->\n                <div class=\"information__set profile_images toggle_module collapse in\">\n\n                  <div class=\"profile_image_area\">\n                    <div class=\"signup-avatar\" [ngStyle]=\"{'background-image': 'url(' + url + ')'}\"\n                         alt=\"Author profile area\"></div>\n                    <div class=\"img_info\">\n                      <p class=\"bold\">Profile Image</p>\n                      <p class=\"subtitle\">JPG, GIF or PNG</p>\n                    </div>\n                    <label for=\"cover_photo\" class=\"upload_btn\">\n                      <input style=\"display: none\" (change)=\"readUrl($event)\" type=\"file\" type=\"file\" id=\"cover_photo\">\n                      <span class=\"btn btn--sm btn--round\" aria-hidden=\"true\">Upload Image</span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"email_ad\">Email Address</label>\n                <input #emailCheck=\"ngModel\" [(ngModel)]=\"email\" name=\"email\" id=\"email_ad\" type=\"email\" class=\"text_field\"\n                       placeholder=\"Enter your email address\" required emailValidatorDirective=\"\">\n\n                <div *ngIf=\"emailCheck.invalid && (emailCheck.dirty || emailCheck.touched)\" class=\"alert alert-danger\">\n\n                  <div *ngIf=\"emailCheck.errors.required\">\n                    Email is required.\n                  </div>\n                  <div *ngIf=\"!emailCheck.errors.required && emailCheck.errors.emailvalidator\">\n                    Email is not valid.\n                  </div>\n\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"user_name\">Username</label>\n                <input #usernameCheck=\"ngModel\" [(ngModel)]=\"username\" name=\"username\" id=\"user_name\" type=\"text\" class=\"text_field\"\n                       minlength=\"4\"  maxlength=\"12\" placeholder=\"Enter your username...\" required>\n\n                <div *ngIf=\"usernameCheck.invalid && (usernameCheck.dirty || usernameCheck.touched)\" class=\"alert alert-danger\">\n\n                  <div *ngIf=\"usernameCheck.errors.required\">\n                    Username is required.\n                  </div>\n                  <div *ngIf=\"usernameCheck.errors.minlength\">\n                    Username must be at least 4 characters\n                  </div>\n                  <div *ngIf=\"usernameCheck.errors.maxlength\">\n                    Username must be less than 12 characters\n                  </div>\n\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"passworda\">Password</label>\n                <input #passworda=\"ngModel\" [(ngModel)]=\"password\" name=\"passworda\" id=\"passworda\" type=\"password\" class=\"text_field\"\n                       minlength=\"6\" maxlength=\"64\" placeholder=\"Enter your password...\" equalValidatorDirective=\"confirmPassword\" reverse=\"true\" required>\n\n                <div *ngIf=\"passworda.invalid && (passworda.dirty || passworda.touched)\" class=\"alert alert-danger\">\n\n                  <div *ngIf=\"passworda.errors.required\">\n                    Password is required.\n                  </div>\n                  <div *ngIf=\"passworda.errors.minlength\">\n                    Password must be at least 6 characters\n                  </div>\n                  <div *ngIf=\"passworda.errors.maxlength\">\n                    Password must be less than 64 characters\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"con_pass\">Confirm Password</label>\n                <input #confirmPassword=\"ngModel\" equalValidatorDirective=\"passworda\" [(ngModel)]=\"conPassword\" name=\"confirmPassword\" id=\"con_pass\" type=\"password\" class=\"text_field\"\n                       placeholder=\"Confirm password\" required>\n\n                <div *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\" class=\"alert alert-danger\">\n\n                  <div *ngIf=\"confirmPassword.errors.required\">\n                    Password match is required.\n                  </div>\n                  <div *ngIf=\"!confirmPassword.errors.required\">\n                    Password must match\n                  </div>\n\n                </div>\n              </div>\n\n              <button (click)=\"signup()\" class=\"btn btn--md btn--round register_btn\" type=\"submit\">Register Now</button>\n\n              <div class=\"login_assist\">\n                <p>Already have an account? <a (click)=\"redirect('signin')\">Login</a></p>\n              </div>\n            </div><!-- end .login--form -->\n          </div><!-- end .cardify -->\n        </form>\n      </div><!-- end .col-md-6 -->\n    </div><!-- end .row -->\n  </div><!-- end .container -->\n</section>\n<!--================================\n        END SIGNUP AREA\n=================================-->\n"

/***/ }),

/***/ "./src/app/authentication-module/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(as, _router, toastr) {
        this.as = as;
        this._router = _router;
        this.toastr = toastr;
        this.subscribtions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["a" /* Subscription */]();
        this.fileList = null;
        this.url = 'assets/images/authplc.png';
    }
    SignupComponent.prototype.redirect = function (pagename) {
        this._router.navigate(['/' + pagename]);
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        if (this.email && this.username && this.password && this.conPassword && this.password == this.conPassword) {
            var toastr = this.toastr;
            var formData = new FormData();
            if (this.fileList && this.fileList.length > 0) {
                var file = this.fileList[0];
                formData.append('avatar', file);
            }
            formData.append('email', this.email);
            formData.append('username', this.username);
            formData.append('password', this.password);
            this.as.register(formData).then(function (res) {
                _this._router.navigate(['signin']);
            }, function (error) {
                _this.toastr.error(error.error.message, 'Sign up');
            });
        }
        this.toastr.error('Please, fill all the fields.', 'Sign up');
    };
    SignupComponent.prototype.readUrl = function (event) {
        var _this = this;
        this.fileList = event.target.files;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        this.subscribtions.unsubscribe();
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/authentication-module/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/authentication-module/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/bountyprogram-module/bountyprogram.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BountyProgramModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bountyprogram_bountyprogram_component__ = __webpack_require__("./src/app/bountyprogram-module/bountyprogram/bountyprogram.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BountyProgramModule = /** @class */ (function () {
    function BountyProgramModule() {
    }
    BountyProgramModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__bountyprogram_bountyprogram_component__["a" /* BountyProgramComponent */]]
        })
    ], BountyProgramModule);
    return BountyProgramModule;
}());



/***/ }),

/***/ "./src/app/bountyprogram-module/bountyprogram/bountyprogram.component.css":
/***/ (function(module, exports) {

module.exports = ".section-title {\n  padding: 50px 0;\n}\n\n.contact_form--wrapper {\n  padding: 0px 0 40px;\n}\n\n.container {\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 4px rgba(108, 111, 115, 0.1);\n  box-shadow: 0 2px 4px rgba(108, 111, 115, 0.1);\n}\n\n.bounty-detail-module {\n  text-align: justify;\n}\n\n.bounty-detail-module .bounty-title {\n  border-bottom: 1px solid #ececec;\n  padding: 0px 30px 11px;\n  font-size: 24px;\n  line-height: 66px;\n}\n\n.bounty-detail-module .bounty-content {\n  padding: 34px 30px 16px;\n}\n\n.bounty-area {\n  background: #f0f1f5;\n}\n\n.bounty-area .container {\n  background: #ffffff;\n}\n\n.bounty-detail-module .bounty-content .content_list {\n  padding-left: 30px;\n  margin-top: 25px;\n}\n\n.bounty-detail-module .bounty-content .content_list li {\n  padding-left: 26px;\n  position: relative;\n  line-height: 30px;\n  color: #555;\n}\n\n.bounty-detail-module .bounty-content .content_list li:before {\n  content: \"\";\n  height: 7px;\n  width: 7px;\n  background: #c5cad4;\n  position: absolute;\n  left: 0;\n  border-radius: 50%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\n.bounty-detail-module .bounty-content .content_list {\n  padding-left: 20px;\n  margin-bottom: 10px;\n  margin-top: 0px;\n}\n\n.bounty-detail-module .bounty-content .content_list li {\n  padding-left: 20px;\n}\n"

/***/ }),

/***/ "./src/app/bountyprogram-module/bountyprogram/bountyprogram.component.html":
/***/ (function(module, exports) {

module.exports = "<!--================================\n    START BREADCRUMB AREA\n=================================-->\n<section class=\"breadcrumb-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"breadcrumb\">\n          <ul>\n            <li><a routerLink=\"/home\">Home</a></li>\n            <li><a routerLink=\"/bountyprogram\">Bounty Program</a></li>\n          </ul>\n        </div>\n        <h1 class=\"page-title\">Bounty Program</h1>\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END BREADCRUMB AREA\n=================================-->\n\n\n<!--================================\n        START JOB AREA\n    =================================-->\n<section class=\"bounty-area section--padding2\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <div class=\"bounty-detail-module\">\n          <!--<h3 class=\"job__title\">Job Description</h3>-->\n          <div class=\"bounty-content\">\n            <p>Anticipating the release of YTIcons, we always wanted to reward our community for helping us creatively\n              spreading the word of our interactive game online.</p>\n            <p>With the launch of YTIcons, we finally get the opportunity to give our “YTIcollectors” what they deserve !</p>\n          </div>\n\n          <h3 class=\"bounty-title\">How can I participate ?</h3>\n          <div class=\"bounty-content\">\n            <p>We are aware that we cannot restrain our community to spread the word on one and only social network.\n              This is why we trust your originality in giving you the freedom to create any type of content\n              (articles, social media posts, podcast…) to promote YTIcons on your preferred platform(s).</p>\n            <p>Once it is done, send us an email with your contributions to <b>dev@yticons.co</b> with your Ethereum\n              wallet address to join the bounty program.\n              Our team will evaluate your submissions and rank your efforts.</p>\n            <p>The contributions will be judged depending on different factors such as the amount of energy,\n              the quality of your content (accuracy, informations…) and the effect of those efforts (reach).</p>\n          </div>\n\n          <h3 class=\"bounty-title\">What are the rewards ?</h3>\n          <div class=\"bounty-content\">\n            <p>We decided to make a top 20 :</p>\n            <ul class=\"content_list\">\n              <li>We will give our <b>top 5</b> users a <b>YTIcon*</b> with a starting price of <b>0.5 ETH</b>.</li>\n              <li>We will give a <b>YTIcon*</b> with a starting price of <b>0.2 ETH</b> to everyone ranked <b>between the 6th and the 11th place included</b>.</li>\n              <li>And finally, <b>from the 12th to the 20th place included</b>, we will give a <b>YTIcon*</b> with a starting price of <b>0.05 ETH</b>.</li>\n            </ul>\n            <p>But do not worry, we did not forget all the other contributors !\n              The participants will be added to our mailing list to receive emails before any YTIcons’ releases !</p>\n            <p><b>*</b> : all of the given YTIcons will be carefully chosen by us to avoid having duplicated requests and to avoid any excess.\n              However, we guarantee to give all of the winners a YTIcon worth its price !</p>\n          </div>\n\n          <h3 class=\"bounty-title\">Is there a deadline ?</h3>\n          <div class=\"bounty-content\">\n            <p>The bounty program will remain until the <b>end of April</b>. Past this date, we will evaluate all the sent contributions and finally contact the winners.</p>\n          </div>\n\n        </div><!-- end /.job_detail_module -->\n      </div><!-- end /.col-md-6 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END JOB AREA\n=================================-->\n"

/***/ }),

/***/ "./src/app/bountyprogram-module/bountyprogram/bountyprogram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BountyProgramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BountyProgramComponent = /** @class */ (function () {
    function BountyProgramComponent() {
    }
    BountyProgramComponent.prototype.ngOnInit = function () {
    };
    BountyProgramComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__("./src/app/bountyprogram-module/bountyprogram/bountyprogram.component.html"),
            styles: [__webpack_require__("./src/app/bountyprogram-module/bountyprogram/bountyprogram.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BountyProgramComponent);
    return BountyProgramComponent;
}());



/***/ }),

/***/ "./src/app/contact-module/contact.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__("./src/app/contact-module/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */]]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "./src/app/contact-module/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ".section-title {\n  padding: 50px 0;\n}\n\n.contact_form--wrapper {\n  padding: 0px 0 40px;\n}\n\n.form-control {\n  border-radius: 2px;\n  -webkit-appearance: none;\n  height: 48px;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  border: 1px solid #e7e7e7;\n  padding: 0 20px;\n  font-size: 16px;\n  color: #757575;\n}\n"

/***/ }),

/***/ "./src/app/contact-module/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!--================================\n    START BREADCRUMB AREA\n=================================-->\n<section class=\"breadcrumb-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"breadcrumb\">\n          <ul>\n            <li><a routerLink=\"/home\">Home</a></li>\n            <li><a routerLink=\"/contact\">Contact us</a></li>\n          </ul>\n        </div>\n        <h1 class=\"page-title\">Contact us</h1>\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END BREADCRUMB AREA\n=================================-->\n\n\n<!--================================\n        START AFFILIATE AREA\n    =================================-->\n<section class=\"contact-area section--padding\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"contact_form cardify\">\n              <div class=\"section-title\">\n                <h1>Is there anything we can help <span class=\"highlighted\">you</span> with ?</h1>\n                <p>To get a faster support related to your account, please provide your Ethereum wallet address in your message.</p>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-8 col-md-offset-2\">\n                  <div class=\"contact_form--wrapper\">\n                    <form action=\"#\">\n                      <div class=\"row\">\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                            <input type=\"text\"  placeholder=\"Name\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                            <input type=\"text\" placeholder=\"Email\">\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <div class=\"form-group\">\n                            <select class=\"form-control\" id=\"subject\">\n                              <option hidden>Subject</option>\n                              <option>2</option>\n                              <option>3</option>\n                              <option>4</option>\n                              <option>5</option>\n                            </select>\n                          </div>\n                        </div>\n\n                      </div>\n\n                      <textarea cols=\"30\" rows=\"10\" placeholder=\"Your text here\"></textarea>\n\n                      <div class=\"sub_btn\">\n                        <button type=\"button\" class=\"btn btn--round btn--default\">Send</button>\n                      </div>\n                    </form>\n                  </div>\n                </div><!-- end /.col-md-8 -->\n              </div><!-- end /.row -->\n            </div><!-- end /.contact_form -->\n          </div><!-- end /.col-md-12 -->\n        </div><!-- end /.row -->\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END AFFILIATE AREA\n=================================-->\n"

/***/ }),

/***/ "./src/app/contact-module/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__("./src/app/contact-module/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact-module/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/directives/directives.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_validator_directive__ = __webpack_require__("./src/app/directives/email-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equal_validator_directive__ = __webpack_require__("./src/app/directives/equal-validator.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__email_validator_directive__["a" /* EmailValidatorDirective */], __WEBPACK_IMPORTED_MODULE_3__equal_validator_directive__["a" /* EqualValidatorDirective */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__email_validator_directive__["a" /* EmailValidatorDirective */],
                __WEBPACK_IMPORTED_MODULE_3__equal_validator_directive__["a" /* EqualValidatorDirective */]
            ],
        })
    ], DirectivesModule);
    return DirectivesModule;
}());



/***/ }),

/***/ "./src/app/directives/email-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailValidatorDirective = /** @class */ (function () {
    function EmailValidatorDirective() {
        this.validator = this.emailValidator();
    }
    EmailValidatorDirective_1 = EmailValidatorDirective;
    EmailValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    EmailValidatorDirective.prototype.emailValidator = function () {
        return function (c) {
            var isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(c.value);
            if (isValid) {
                return null;
            }
            else {
                return {
                    emailvalidator: {
                        valid: false
                    }
                };
            }
        };
    };
    EmailValidatorDirective = EmailValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[emailValidatorDirective][ngModel]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */],
                    useExisting: EmailValidatorDirective_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], EmailValidatorDirective);
    return EmailValidatorDirective;
    var EmailValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/directives/equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidatorDirective = /** @class */ (function () {
    function EqualValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidatorDirective_1 = EqualValidatorDirective;
    Object.defineProperty(EqualValidatorDirective.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidatorDirective.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }
        return null;
    };
    EqualValidatorDirective = EqualValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[equalValidatorDirective][ngModel]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */],
                    useExisting: EqualValidatorDirective_1,
                    multi: true
                }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('equalValidatorDirective')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidatorDirective);
    return EqualValidatorDirective;
    var EqualValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/faq-module/faq.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_faq_component__ = __webpack_require__("./src/app/faq-module/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FaqModule = /** @class */ (function () {
    function FaqModule() {
    }
    FaqModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__faq_faq_component__["a" /* FaqComponent */]]
        })
    ], FaqModule);
    return FaqModule;
}());



/***/ }),

/***/ "./src/app/faq-module/faq/faq.component.css":
/***/ (function(module, exports) {

module.exports = "iframe {\n  width: 50%;\n}\n\n@media (max-width: 767px) {\n  iframe {\n    width: 100%;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  iframe {\n    width: 80%;\n  }\n}\n\n@media (min-width: 991px) and (max-width: 1199px) {\n  iframe {\n    width: 60%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/faq-module/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<!--================================\n    START BREADCRUMB AREA\n=================================-->\n<section class=\"breadcrumb-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"breadcrumb\">\n          <ul>\n            <li><a routerLink=\"/home\">Home</a></li>\n            <li><a routerLink=\"/faq\">FAQs</a></li>\n          </ul>\n        </div>\n        <h1 class=\"page-title\">Frequently Asked Questions</h1>\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END BREADCRUMB AREA\n=================================-->\n\n<!--================================\n        START FAQ AREA\n=================================-->\n<section class=\"faq_area section-faq-padding\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n        <div class=\"cardify faq_module\">\n          <!--<div class=\"faq-title\">-->\n            <!--<span class=\"lnr lnr-file-add\"></span><h4></h4>-->\n          <!--</div>-->\n\n          <div class=\"faqs\">\n            <div class=\"panel-group accordion\" role=\"tablist\" id=\"accordion\">\n\n              <div class=\"panel accordion__single active\">\n                <div class=\"single_acco_title\">\n                  <h4>\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\" class=\"collapsed\" aria-expanded=\"false\">\n                      <span>What are the requirements to play YTIcons ?</span> <i class=\"lnr lnr-chevron-down indicator\"></i></a>\n                  </h4>\n                </div>\n\n                <div id=\"collapse1\" role=\"tabpanel\" class=\"panel-collapse collapse\" aria-expanded=\"false\">\n                  <div class=\"panel-body\">\n                    <p>To play the game and trade your favorite YouTuber cards, you only need a few things :</p>\n                    <ul>\n                      <li>- A computer with a browser capable of using MetaMask (e.g. Chrome, Firefox, Opera).</li>\n                      <li>- A MetaMask  digital wallet.</li>\n                      <li>- And Ether, the Ethereum’s currency to trade YTIcons.</li>\n                    </ul>\n                    <br/>\n                    <p>To learn more about <b>MetaMask</b>, you can refer to the video below.</p>\n                    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/6Gf_kRE4MJU?rel=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                    <p>And to download the extension on your browser, you can directly go on their website through this <b><a href=\"https://metamask.io\" target=\"_blank\">link</a></b>.</p>\n                  </div>\n                </div>\n              </div><!-- end /.accordion__single -->\n\n\n\n              <div class=\"panel accordion__single active\">\n                <div class=\"single_acco_title\">\n                  <h4>\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\" class=\"collapsed\" aria-expanded=\"false\">\n                      <span>What does YTIcons deal with ?</span> <i class=\"lnr lnr-chevron-down indicator\"></i></a>\n                  </h4>\n                </div>\n\n                <div id=\"collapse2\" role=\"tabpanel\" class=\"panel-collapse collapse\" aria-expanded=\"false\">\n                  <div class=\"panel-body\">\n                    <p>YTIcons is first of all a game where you can buy, collect and sell your favorite YouTuber cards (YTIcons). We released it for multiple purposes :</p>\n                    <ul>\n                      <li>- To provide a game to the cryptocurrency’s community.</li>\n                      <li>- To donate to a charity carefully chosen : for each YTIcon’s transaction, 3% of the share is directly sent to an address (especially created for this purpose) if the YTIcon has not been verified by the concerned YouTuber; else, it will directly be sent to the YouTuber’s chosen ETH address (which also might be a charity fund).</li>\n                      <li>- To invest : every time you buy a YTIcon, its price is re-calculated by our algorithm so as to increase and the YTIcon is immediately put back on sale in the marketplace. If someone else wants to buy it, the buyer will have to pay you more than the amount you originally invested in ETH.</li>\n                    </ul>\n                  </div>\n                </div>\n              </div><!-- end /.accordion__single -->\n\n              <div class=\"panel accordion__single active\">\n                <div class=\"single_acco_title\">\n                  <h4>\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse4\" class=\"collapsed\" aria-expanded=\"false\">\n                      <span>You said I could collect cards, but also that they would directly be put back in the marketplace... what is the catch ?</span> <i class=\"lnr lnr-chevron-down indicator\"></i></a>\n                  </h4>\n                </div>\n\n                <div id=\"collapse4\" role=\"tabpanel\" class=\"panel-collapse collapse\" aria-expanded=\"false\">\n                  <div class=\"panel-body\">\n                    <p>There is not any. You actually collect cards as long as nobody else buys it back — and this is part of the fun.</p>\n                    <p>Remember, the price of the YTIcon you previously bought will inevitably increase : if someone purchases it back then you will be able to invest on other cards with your growing wallet to keep playing the game, or even save it for a more valuable YTIcon !</p>\n                  </div>\n                </div>\n              </div><!-- end /.accordion__single -->\n\n\n              <div class=\"panel accordion__single active\">\n                <div class=\"single_acco_title\">\n                  <h4>\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse5\" class=\"collapsed\" aria-expanded=\"false\">\n                      <span>Basically, the more a YouTuber is actually famous, the more valuable his/her YTIcon will be ?</span> <i class=\"lnr lnr-chevron-down indicator\"></i></a>\n                  </h4>\n                </div>\n\n                <div id=\"collapse5\" role=\"tabpanel\" class=\"panel-collapse collapse\" aria-expanded=\"false\">\n                  <div class=\"panel-body\">\n                    <p>Not necessarily : most of the cards will have a starting price, which means the YTIcons’ market will only be influenced by what you make of it : if a card gets continuously purchased, its value will increase.</p>\n                    <p>Do not worry though, if the price of one of your YTIcons fixed by our algorithm does not suit you, you will still be able to lower its value to sell it even faster !</p>\n                  </div>\n                </div>\n              </div><!-- end /.accordion__single -->\n\n\n              <div class=\"panel accordion__single active\">\n                <div class=\"single_acco_title\">\n                  <h4>\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse6\" class=\"collapsed\" aria-expanded=\"false\">\n                      <span>I am confused about your YTIcons’ pricing policy…</span> <i class=\"lnr lnr-chevron-down indicator\"></i></a>\n                  </h4>\n                </div>\n\n                <div id=\"collapse6\" role=\"tabpanel\" class=\"panel-collapse collapse\" aria-expanded=\"false\">\n                  <div class=\"panel-body\">\n                    <p>To put it simply, consider a YTIcon as a stock price : every stock price has its ups and downs.</p>\n                    <p>We want our community to be the market’s actors by letting them estimate their YTIcons’ values : a YTIcon’s market price can be influenced by many things such as the YouTuber’s upcoming events or recent news.</p>\n                    <p>The only things we are setting for you is the highest and lowest possible prices of the YTIcon to avoid any excess, the rest belongs to you.</p>\n                  </div>\n                </div>\n              </div><!-- end /.accordion__single -->\n\n\n              <div class=\"panel accordion__single active\">\n                <div class=\"single_acco_title\">\n                  <h4>\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse7\" class=\"collapsed\" aria-expanded=\"false\">\n                      <span>What if I do not have enough money to even buy one of the available YTIcons ?</span> <i class=\"lnr lnr-chevron-down indicator\"></i></a>\n                  </h4>\n                </div>\n\n                <div id=\"collapse7\" role=\"tabpanel\" class=\"panel-collapse collapse\" aria-expanded=\"false\">\n                  <div class=\"panel-body\">\n                    <p>We currently have few solutions :</p>\n                    <ul>\n                      <li>- Since we allow owners to lower the prices of their cards, we suggest you to keep being updated on the marketplace to seize various opportunities !</li>\n                      <li>- Also, we will continuously release new YTIcons with low starting prices so you can keep playing the game : you can follow us on Twitter (<b><a href=\"https://twitter.com/YT_Icons\" target=\"_blank\">@YT_Icons</a></b>) to keep you updated on every release !</li>\n                    </ul>\n                  </div>\n                </div>\n              </div><!-- end /.accordion__single -->\n\n\n              <div class=\"panel accordion__single active\">\n                <div class=\"single_acco_title\">\n                  <h4>\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse8\" class=\"collapsed\" aria-expanded=\"false\">\n                      <span>Will the game only consist of trading YTIcons ?</span> <i class=\"lnr lnr-chevron-down indicator\"></i></a>\n                  </h4>\n                </div>\n\n                <div id=\"collapse8\" role=\"tabpanel\" class=\"panel-collapse collapse\" aria-expanded=\"false\">\n                  <div class=\"panel-body\">\n                    <p>The main game will indeed focus on trading YTIcons. Nevertheless, since we definitely want our community to be satisfied, we are already planning to make various events to diversify our content and deliver you an enjoyable game !</p>\n                    <p>Do not hesitate to follow us on Twitter (<b><a href=\"https://twitter.com/YT_Icons\" target=\"_blank\">@YT_Icons</a></b>) to keep you updated !</p>\n                  </div>\n                </div>\n              </div><!-- end /.accordion__single -->\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--================================\n        END FAQ AREA\n=================================-->\n"

/***/ }),

/***/ "./src/app/faq-module/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__("./src/app/faq-module/faq/faq.component.html"),
            styles: [__webpack_require__("./src/app/faq-module/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/footer-module/footer-module.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__ = __webpack_require__("./src/app/footer-module/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */]
            ]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/footer-module/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer-menu {\n  text-align: right;\n}\n\n.section--padding {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n\n.info__logo {\n  max-width: 110px;\n}\n"

/***/ }),

/***/ "./src/app/footer-module/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-area\">\n  <div class=\"footer-big section--padding\">\n    <!-- start .container -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3 col-sm-6\">\n          <div class=\"info-footer\">\n            <div class=\"info__logo\">\n              <img src=\"assets/images/images/yticon_white_logo.png\" alt=\"footer logo\">\n            </div>\n            <p class=\"info--text\">Buy, sell and collect your favorite youtubers powered by Ethereum</p>\n            <ul class=\"info-contact\">\n              <li>\n                <span class=\"lnr lnr-envelope info-icon\"></span>\n                <span class=\"info\">dev@yticons.co</span>\n              </li>\n            </ul>\n          </div><!-- end /.info-footer -->\n          <div class=\"social social--color--filled\">\n            <ul>\n              <li><a href=\"https://www.facebook.com/YTIcons-155634891802441/\"><span class=\"fab fa-facebook-f\"></span></a></li>\n              <li><a href=\"https://twitter.com/YT_Icons\"><span class=\"fab fa-twitter\"></span></a></li>\n              <li><a href=\"https://discord.gg/zFEwyan\"><span class=\"fab fa-discord\"></span></a></li>\n            </ul>\n          </div>\n        </div><!-- end /.col-md-3 -->\n\n        <div class=\"col-md-6 col-md-offset-3 col-sm-6\">\n          <div class=\"footer-menu\">\n            <h4 class=\"footer-widget-title text--white\">The plateform</h4>\n            <ul>\n              <li><a routerLink=\"/operation\">Operation</a></li>\n              <li><a routerLink=\"/verify\">Verify your YTIcon</a></li>\n              <li><a routerLink=\"/bountyprogram\">Bounty program</a></li>\n              <li><a routerLink=\"/contact\">Contact us</a></li>\n            </ul>\n          </div><!-- end /.footer-menu -->\n\n          <div class=\"footer-menu\">\n            <h4 class=\"footer-widget-title text--white\">Help and FAQs</h4>\n            <ul>\n              <li><a routerLink=\"/faq\">FAQ</a></li>\n              <li><a routerLink=\"/privacypolicy\">Privacy policy</a></li>\n              <li><a routerLink=\"/legal\">Legal & Rights</a></li>\n              <li><a routerLink=\"/termsofservice\" >Term of services</a></li>\n            </ul>\n          </div><!-- end /.footer-menu -->\n        </div><!-- end /.col-md-5 -->\n\n      </div><!-- end /.row -->\n    </div><!-- end /.container -->\n  </div><!-- end /.footer-big -->\n\n  <div class=\"mini-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"copyright-text\">\n            <p>&copy; 2018 <a routerLink=\"#\">YTIcons</a>. All rights reserved. Created by <a routerLink=\"#\">LaChilleCrypto</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer-module/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer-module/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer-module/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/guards/authentication.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(as, router) {
        this.as = as;
        this.router = router;
    }
    AuthenticationGuard.prototype.canActivate = function (next, state) {
        var customRedirect = next.data['redirectTo'];
        if (this.as.currentUser) {
            return true;
        }
        var redirect = !!customRedirect ? customRedirect : '/market';
        this.router.navigate([redirect]);
        return false;
    };
    AuthenticationGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/guards/is-admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsAdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IsAdminGuard = /** @class */ (function () {
    function IsAdminGuard(as, router) {
        this.as = as;
        this.router = router;
    }
    IsAdminGuard.prototype.canActivate = function (next, state) {
        var currentUser = this.as.currentUser;
        if (currentUser && currentUser.roles.indexOf('admin') > -1) {
            return true;
        }
        this.router.navigate(['/market']);
        return false;
    };
    IsAdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], IsAdminGuard);
    return IsAdminGuard;
}());



/***/ }),

/***/ "./src/app/home-module/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home-module/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home-module/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".container.flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.about_block {\n  padding: 20px 0px 20px 0px;\n}\n\n.home {\n  padding: 130px 0px;\n}\n\n.hook {\n  margin: 10px 0px 15px;\n}\n\n.description_container {\n  -ms-flex-preferred-size: 50%;\n      flex-basis: 50%;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.picture_container {\n  -ms-flex-preferred-size: 50%;\n      flex-basis: 50%;\n  -ms-flex-item-align: baseline;\n      align-self: baseline;\n  height: 100%;\n  text-align: end;\n}\n\n.home_picture {\n  width: 80%;\n}\n\n.card_picture {\n  width: 12%;\n  height: 12%;\n}\n\n.card-flex {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.cards_block, .about_block, .content_block1 {\n  min-height: 0px;\n}\n\n.content_block1 {\n  padding: 10px 0px 10px 0px;\n}\n\n.about_block, .cards_block {\n  background-color: #f6f7fb;\n}\n\n.about_block .content_area, .content_block1 .content_area {\n  padding: 30px 0;\n}\n\n.cards_block .content_area {\n  padding: 36px 0;\n}\n\n.about_block .content_area .content_area--title .highlight,\n.content_block1 .content_area .content_area--title .highlight,\n.cards_block .content_area .content_area--title .highlight {\n  color: #0674ec;\n}\n\n.about_block .content_area .content_area--title,\n.content_block1 .content_area .content_area--title,\n.cards_block .content_area .content_area--title {\n  font-size: 36px;\n  line-height: 46px;\n  margin-bottom: 23px;\n  color: #000;\n}\n\n.btn.btn--blue:hover {\n  background: #7347c1;\n  color: #fff;\n}\n\n.btn.btn--blue {\n  background: #0674ec;\n  color: #fff;\n}\n\n.home-text {\n  text-align: justify;\n}\n\n@media (max-width: 767px) {\n  .description_container, .picture_container, .content_area--title {\n    text-align: center;\n  }\n\n  .home {\n    padding: 75px 0px;\n  }\n\n  h1 {\n    font-size: 30px !important;\n  }\n\n  p {\n    font-size: 15px;\n  }\n\n  .container.flex {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  .picture_container {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    width: 90%;\n    margin-top: 30px;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  h1 {\n    font-size: 30px;\n  }\n}\n\n/* MEDIA CARD PICTURE */\n\n@media (max-width: 480px) {\n  .card_picture {\n    width: 24%;\n    height: 24%;\n  }\n}\n\n@media (min-width: 481px) and (max-width: 767px) {\n  .card_picture {\n    width: 21%;\n    height: 21%;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .card_picture {\n    width: 18%;\n    height: 18%;\n  }\n}\n\n@media (min-width: 991px) and (max-width: 1199px) {\n  .card_picture {\n    width: 15%;\n    height: 15%;\n  }\n}\n\n/* END MEDIA CARD PICTURE */\n"

/***/ }),

/***/ "./src/app/home-module/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--================================\n    START ABOUT HERO AREA\n=================================-->\n<section class=\"home\">\n  <div class=\"container flex\">\n\n    <div class=\"description_container\">\n      <h1>Collect all of the YTIcons !</h1>\n      <p class=\"hook\">Buy, collect and sell your favorite YouTuber evolutive and unique cards ! </p>\n\n      <div class=\"about_hero_btns\">\n        <a routerLink=\"/market\" class=\"btn btn--blue btn--lg btn--round\">Marketplace</a>\n      </div>\n    </div><!-- end /.description_container -->\n\n    <div class=\"picture_container\">\n      <!--<div class=\"bg_image_holder\">-->\n        <img class=\"home_picture\" src=\"assets/images/home/homePicture.png\" alt=\"\">\n      <!--</div>-->\n    </div>\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END ABOUT HERO AREA\n=================================-->\n\n<!--================================\n    END ABOUT HERO AREA\n=================================-->\n<section class=\"about_mission\">\n  <div class=\"about_block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-5 col-sm-6\">\n          <div class=\"content_area\">\n            <h1 class=\"content_area--title\">About <span class=\"highlight\">YTIcons</span></h1>\n            <p class=\"home-text\">Buy, collect and sell your favorite YouTuber evolutive and unique cards (YTIcons) using blockchain technology !\n              Once you purchase a YTIcon, an algorithm will increase the price and your YTIcon will directly be handed to the marketplace.\n              But do not worry, if someone buys it back, you will get paid in receiving more than the amount you originally invested in ETH !</p>\n            <p class=\"home-text\">The price increase of the YTIcons' is done this way : <b>x2</b> from 0 to 0.05 ETH, <b>x1.5</b> from 0.05 to 0.5 ETH, <b>x1.25</b> from 0.5 to 1 ETH and <b>x1.15</b> from 1 ETH to infinity.</p>\n          </div>\n        </div><!-- end /.col-md-5 -->\n      </div><!-- end /.row -->\n    </div><!-- end /.container -->\n\n    <!--<div class=\"content_image bgimage\">-->\n      <!--<div class=\"bg_image_holder\">-->\n        <!--<img src=\"assets/images/ab1.jpg\" alt=\"\">-->\n      <!--</div>-->\n    <!--</div>-->\n  </div><!-- end /.about -->\n\n  <div class=\"content_block1\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-5 col-sm-6 col-sm-offset-6 col-md-offset-7\">\n          <div class=\"content_area\">\n            <h1 class=\"content_area--title\">How does it <span class=\"highlight\">work</span> ?</h1>\n            <p class=\"home-text\">YTIcons uses the same blockchain technology as Ethereum which features the smart contract functionality :\n              each and every YTIcon is linked to an unique token on the blockchain.</p>\n            <p class=\"home-text\">Moreover, each of the YTIcons' statistics are continuously updated and once it reaches enough followers, the concerned YTIcon will evolve and get another design !</p>\n            <p class=\"home-text\">To purchase a YTIcon, you can simply visit the marketplace and send Ether to the contract using MetaMask.</p>\n          </div>\n        </div><!-- end /.col-md-5 -->\n      </div><!-- end /.row -->\n    </div><!-- end /.container -->\n\n    <!--<div class=\"content_image2 bgimage\">-->\n      <!--<div class=\"bg_image_holder\">-->\n        <!--<img src=\"assets/images/ab2.jpg\" alt=\"\">-->\n      <!--</div>-->\n    <!--</div>-->\n  </div><!-- end /.mission-->\n\n  <div class=\"cards_block\" style=\"padding: 10px 0px 10px 0px\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"content_area card-flex\">\n            <img class=\"card_picture\" src=\"assets/images/home/cardModel0.png\" alt=\"\">\n            <img class=\"card_picture\" src=\"assets/images/home/cardModel1.png\" alt=\"\">\n            <img class=\"card_picture\" src=\"assets/images/home/cardModel2.png\" alt=\"\">\n          </div>\n        </div><!-- end /.col-md-5 -->\n      </div><!-- end /.row -->\n    </div><!-- end /.container -->\n  </div><!-- end /.mission-->\n\n</section>\n<!--================================\n    END ABOUT HERO AREA\n=================================-->\n\n<!--================================\n    START CALL TO ACTION AREA\n=================================-->\n<section class=\"call-to-action\">\n  <div class=\"container content_above\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"call-to-wrap\">\n          <h1 class=\"text--white\">The marketplace is waiting for you !</h1>\n          <h4 class=\"text--white\">Buy your first YTIcon and be part of the YTIcollectors' community !</h4>\n          <a routerLink=\"/market\" class=\"btn btn--lg btn--round btn--white callto-action-btn\">Marketplace</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--================================\n    END CALL TO ACTION AREA\n=================================-->\n"

/***/ }),

/***/ "./src/app/home-module/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home-module/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home-module/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_token_service__ = __webpack_require__("./src/app/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(cookieService, router, tokenService, toaster) {
        this.cookieService = cookieService;
        this.router = router;
        this.tokenService = tokenService;
        this.toaster = toaster;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).catch(function (error) {
            var token = localStorage.getItem('yticons-token') || localStorage.getItem('yticons-token');
            if (error.status === 401 && token) {
                _this.toaster.warning('Your token has expired.', 'Token expired');
                localStorage.removeItem('yticons-token');
                _this.cookieService.delete('yticons-token');
                _this.tokenService.logout();
                _this.router.navigate(['/signin']);
            }
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].throw(error);
        });
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ng2_cookies__["CookieService"], __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_6__services_token_service__["a" /* TokenService */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_toastr__["ToastsManager"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/leaderboard-module/leaderboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaderboard_leaderboard_component__ = __webpack_require__("./src/app/leaderboard-module/leaderboard/leaderboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__("./src/app/pipes/pipes.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LeaderboardModule = /** @class */ (function () {
    function LeaderboardModule() {
    }
    LeaderboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__leaderboard_leaderboard_component__["a" /* LeaderboardComponent */]]
        })
    ], LeaderboardModule);
    return LeaderboardModule;
}());



/***/ }),

/***/ "./src/app/leaderboard-module/leaderboard/leaderboard.component.css":
/***/ (function(module, exports) {

module.exports = ".user_single {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.ellipsis {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.user_desc {\n  min-height: 100px;\n  width: 40%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 28px 0 40px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.first p,.second p,.third p {\n  font-size: 24px;\n}\n\n.first {\n  border-right: 2px solid #FD6B70 !important;\n}\n\n.second {\n  border-right: 2px solid #1777E9 !important;\n}\n\n.third {\n  border-right: 2px solid #724BBE !important;\n}\n\n.default {\n  border-right: 1px solid #ececec !important;\n}\n\n.user_desc .user_avatar {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: -3px;\n  float: none;\n}\n\n.user_stats {\n  display: inline-block;\n  min-height: 100px;\n  vertical-align: middle;\n  padding: 0 30px;\n  position: absolute;\n  right: 0;\n  border-left: 1px solid #ececec;\n  border-right: 0px;\n  margin: 0px 17px 0px 0px;\n}\n\n.user_stats p {\n  margin: 0;\n  line-height: 28px;\n}\n\n.user_informations {\n  width: calc(100% - 75px);\n  padding-left: 15px;\n  display: inline-block;\n}\n\n.user_informations a {\n  font-size: 18px;\n  line-height: 26px;\n  color: #000;\n  font-weight: 500;\n  display: inline-block;\n  padding-bottom: 10px;\n}\n\n.user__status.user__rank {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-width: 60px;\n  min-height: 100px;\n  padding: 0px 28px 0px 18px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.user__status.user__rank h3 {\n  text-align: center;\n}\n\n@media (max-width: 767px) {\n  .user_single {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  .user__status.user__rank {\n    text-align: center;\n    display: block;\n    width: 200px;\n    max-width: 200px;\n    min-height: 0px;\n    padding: 0px 28px;\n  }\n\n  .first {\n    border-bottom: 2px solid #FD6B70;\n    border-right: none !important;\n  }\n\n  .second {\n    border-bottom: 2px solid #1777E9;\n    border-right: none !important;\n  }\n\n  .third {\n    border-bottom: 2px solid #724BBE;\n    border-right: none !important;\n  }\n  .default {\n    border-bottom: 1px solid #ececec;\n    border-right: none !important;\n  }\n\n\n  .user__status.user__rank h3 {\n    text-align: center;\n    margin-bottom: 5px;\n  }\n\n  .user_desc {\n    margin-top: 10px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border-left: none;\n    width: 100%;\n    padding: 0;\n  }\n\n  .user_informations {\n    margin-top: 10px;\n    text-align: center;\n    padding-left: 0;\n  }\n\n  .user_informations a {\n    padding-bottom: 0px;\n  }\n\n  .user_stats {\n    text-align: center;\n    display: block;\n    padding: 0 30px;\n    position: relative;\n    margin: auto;\n    border-left: none;\n    border-right: none;\n  }\n}\n"

/***/ }),

/***/ "./src/app/leaderboard-module/leaderboard/leaderboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!--================================\n    START BREADCRUMB AREA\n=================================-->\n<section class=\"breadcrumb-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"breadcrumb\">\n          <ul>\n            <li><a routerLink=\"/home\">Home</a></li>\n            <li class=\"active\"><a routerLink=\"/leaderboard\">Leaderboard</a></li>\n          </ul>\n        </div>\n        <h1 class=\"page-title\">Leaderboard</h1>\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END BREADCRUMB AREA\n=================================-->\n\n\n\n<!--================================\n    START AUTHOR AREA\n=================================-->\n<section class=\"author-profile-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n          <div class=\"col-md-4 col-sm-4\">\n            <div class=\"author-info mcolorbg4\">\n              <p>Special card + 1 ETH</p>\n              <h3>1st</h3>\n            </div>\n          </div><!-- end /.col-md-4 -->\n\n          <div class=\"col-md-4 col-sm-4\">\n            <div class=\"author-info pcolorbg\">\n              <p>1 ETH</p>\n              <h3>2nd</h3>\n            </div>\n          </div><!-- end /.col-md-4 -->\n\n          <div class=\"col-md-4 col-sm-4\">\n            <div class=\"author-info scolorbg\">\n              <p>0.5 ETH</p>\n              <h3>3rd</h3>\n            </div>\n          </div><!-- end /.col-md-4 -->\n        </div><!-- end /.row -->\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"user_area\">\n              <ul>\n                <li *ngFor=\"let rank of leaderboard; let i = index\" [ngClass]=\"[i == 0 ? 'first-leaderboard' : '',i == 1 ? 'second-leaderboard' : '',i == 2 ? 'third-leaderboard' : '', i > 2 ? 'default' : '' ]\">\n                  <div class=\"user_single\">\n                    <div class=\"user__status user__rank\" [ngClass]=\"['user__status','user__rank', i == 0 ? 'first' : '',i == 1 ? 'second' : '',i == 2 ? 'third' : '', i > 2 ? 'default' : '' ]\">\n                      <div *ngIf=\"rank?.user?._id == currentUser?._id\" class=\"star_user\">\n                        <img src=\"assets/images/images/star.png\" [ngStyle]=\"{'width': '30px', 'max-width': '30px'}\">\n                      </div>\n                      <p>{{i + 1}}</p>\n                    </div>\n                    <div class=\"user_desc\">\n                      <div class=\"user_avatar\">\n                        <div class=\"leaderboard-profile-avatar\" [ngStyle]=\"{'background-image': 'url(' + ms.baseUrl + rank?.user?.avatar + ')'}\" alt=\"\"></div>\n                      </div>\n                      <div class=\"user_informations ellipsis\">\n                        <a *ngIf=\"!rank.user.wallet\">{{rank.user.username}}</a>\n                        <a *ngIf=\"rank.user.wallet\" [routerLink]=\"['/account', rank.user?.wallet]\">{{rank.user.username ? rank.user.username : rank.user.wallet}}</a>\n                        <p *ngIf=\"rank.user.username\">Member since: {{rank.user.createdAt | date:'MMMM yyyy'}}</p>\n                      </div>\n                    </div>\n                    <div class=\"user_stats\">\n                      <p>{{rank.score.nbSubscribers | frenchNumber}} Followers</p>\n                      <p>{{rank.score.nbCards}} Cards</p>\n                      <p>{{rank.score.nbViews | frenchNumber}} Views</p>\n                    </div>\n                  </div><!-- end /.user_single -->\n                </li>\n\n              </ul>\n            </div><!-- end /.user_area -->\n          </div><!-- end /.col-md-12 -->\n        </div><!-- end /.row -->\n      </div><!-- end /.col-md-8 -->\n\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END AUTHOR AREA\n=================================-->\n"

/***/ }),

/***/ "./src/app/leaderboard-module/leaderboard/leaderboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_manager_service__ = __webpack_require__("./src/app/services/manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_leaderboard_service__ = __webpack_require__("./src/app/services/leaderboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent(ms, ls, as, toastr) {
        this.ms = ms;
        this.ls = ls;
        this.as = as;
        this.toastr = toastr;
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["a" /* Subscription */]();
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        var _self = this;
        this.currentUser = this.as.currentUser;
        var toastr = this.toastr;
        this.subscriptions.add(this.ls.getLeaderboard().subscribe(function (res) {
            if (res != null) {
                _self.leaderboard = res.leaderboard;
            }
        }, function (error) {
            toastr.error('This wallet is already set on another user.', 'Leaderboard');
        }));
    };
    LeaderboardComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    LeaderboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-leaderboard',
            template: __webpack_require__("./src/app/leaderboard-module/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__("./src/app/leaderboard-module/leaderboard/leaderboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_manager_service__["a" /* ManagerService */], __WEBPACK_IMPORTED_MODULE_2__services_leaderboard_service__["a" /* LeaderboardService */], __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__["ToastsManager"]])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/legal-module/legal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__legal_legal_component__ = __webpack_require__("./src/app/legal-module/legal/legal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LegalModule = /** @class */ (function () {
    function LegalModule() {
    }
    LegalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__legal_legal_component__["a" /* LegalComponent */]]
        })
    ], LegalModule);
    return LegalModule;
}());



/***/ }),

/***/ "./src/app/legal-module/legal/legal.component.css":
/***/ (function(module, exports) {

module.exports = "\n.term_modules {\n  text-align: justify;\n}\n\n.term_modules .term .paragraph-container {\n  padding: 30px 30px 0px 30px;\n}\n\n.term_modules .term p {\n  padding: 0;\n}\n\nli {\n  font-size: 16px;\n}\n\n.legal_area {\n  background: #f0f1f5;\n}\n"

/***/ }),

/***/ "./src/app/legal-module/legal/legal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--================================\n    START BREADCRUMB AREA\n=================================-->\n<section class=\"breadcrumb-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"breadcrumb\">\n          <ul>\n            <li><a routerLink=\"/home\">Home</a></li>\n            <li><a routerLink=\"/legal\">Legal</a></li>\n          </ul>\n        </div>\n        <h1 class=\"page-title\">Legal & Rights</h1>\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END BREADCRUMB AREA\n=================================-->\n\n<!--================================\n        START PRIVACY POLICY AREA\n=================================-->\n\n<section class=\"legal_area section--padding2\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"cardify term_modules\">\n          <div class=\"term\">\n            <div class=\"paragraph-container\">\n              <p>For us, it is important to inform (but also reassure) you on few aspects related to our platform.</p>\n\n              <p>First of all, <b>YTIcons</b> is legal and we are constantly working so it stays that way. To put it simply :</p>\n\n              <ul>\n                <li>- We do not act on any YouTuber’s behalf and we absolutely do not intend to either.</li>\n                <li>- We do not use any YouTuber’s name, reputation, status or likeness for commercial purposes and again, we do not intend to either.</li>\n                <li>- It is legal to sell pictures or names of any person as long as it is not used to promote a product or a service.</li>\n              </ul>\n              <br/>\n              <p>We do consider that any YouTuber has the right to get royalties, this is why we endeavor in getting partnerships before any related YTIcon’s release.\n              On the other hand, we try to provide our community a playable game so it is still possible to (hopefully temporary) see an unverified YTIcon :\n              in this specific case and as long as the process of getting a partnership lasts, 3% of every transaction will be sent to an address created for charities’ purpose.</p>\n            </div>\n          </div><!-- end /.term -->\n        </div><!-- end /.term_modules -->\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n\n<!--================================\n        END PRIVACY POLICY AREA\n=================================-->\n"

/***/ }),

/***/ "./src/app/legal-module/legal/legal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LegalComponent = /** @class */ (function () {
    function LegalComponent() {
    }
    LegalComponent.prototype.ngOnInit = function () {
    };
    LegalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-legal',
            template: __webpack_require__("./src/app/legal-module/legal/legal.component.html"),
            styles: [__webpack_require__("./src/app/legal-module/legal/legal.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], LegalComponent);
    return LegalComponent;
}());



/***/ }),

/***/ "./src/app/live-module/live.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__live_live_component__ = __webpack_require__("./src/app/live-module/live/live.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__("./src/app/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__market_module_market_module__ = __webpack_require__("./src/app/market-module/market.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_manager_service__ = __webpack_require__("./src/app/services/manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LiveModule = /** @class */ (function () {
    function LiveModule() {
    }
    LiveModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_5__market_module_market_module__["a" /* MarketModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__live_live_component__["a" /* LiveComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_manager_service__["a" /* ManagerService */]
            ]
        })
    ], LiveModule);
    return LiveModule;
}());



/***/ }),

/***/ "./src/app/live-module/live/live.component.css":
/***/ (function(module, exports) {

module.exports = "\n.term_modules .term .paragraph-container {\n  padding: 30px 30px 0px 30px;\n}\n\n.term_modules .term p {\n  padding: 0;\n}\n\nli {\n  font-size: 16px;\n}\n\n.section--padding2 {\n  padding: 70px 0px;\n}\n\n.row-terminal {\n  margin-bottom: 15px;\n  line-height: 30px;\n}\n\n.caret-terminal {\n  color:#939493;\n  font-weight: 500;\n  margin-right: 15px;\n}\n\n.bold {\n  font-weight: 500;\n}\n\n/*** LIVE ***/\n\n.spinner {\n  width: 50px;\n  height: 30px;\n  font-size: 10px;\n}\n\n.spinner > div {\n  background-color: #333;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out;\n}\n\n.spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n\n.spinner .rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n.spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n.spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n  20% { -webkit-transform: scaleY(1.0) }\n}\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4);\n  }  20% {\n       transform: scaleY(1.0);\n       -webkit-transform: scaleY(1.0);\n     }\n}\n"

/***/ }),

/***/ "./src/app/live-module/live/live.component.html":
/***/ (function(module, exports) {

module.exports = "<!--================================\n    START BREADCRUMB AREA\n=================================-->\n<section class=\"breadcrumb-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"breadcrumb\">\n          <ul>\n            <li><a routerLink=\"/home\">Home</a></li>\n            <li><a routerLink=\"/live\">Live</a></li>\n          </ul>\n        </div>\n        <h1 class=\"page-title\">Live</h1>\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END BREADCRUMB AREA\n=================================-->\n\n\n<!--================================\n        START JOB AREA\n    =================================-->\n<section class=\"job_area section--padding2\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <div class=\"job_detail_module\">\n          <div class=\"job__content\">\n            <div class=\"spinner\">\n              <div class=\"rect1\"></div>\n              <div class=\"rect2\"></div>\n              <div class=\"rect3\"></div>\n              <div class=\"rect4\"></div>\n              <div class=\"rect5\"></div>\n            </div>\n            <div *ngFor=\"let tr of transactions\" class=\"row-terminal\">\n              <span class=\"caret-terminal\">YTIcons></span><a class=\"bold\"\n                                                             [routerLink]=\"'/account/' + tr?.to?.wallet\">{{tr?.to?.username\n              ? tr?.to?.username : 'Anonymous'}}</a> bought\n              <a data-toggle=\"modal\" [attr.data-target]=\"'#modal-' + tr?.card?.id\" style=\"color: #705fd2;font-weight: 500;\">{{tr?.card?.name}}</a>\n              from\n              <a class=\"bold\" [routerLink]=\"'/account/' + tr?.from?.wallet\">{{tr?.from?.username ?\n                tr?.from?.username : 'Anonymous'}}</a> at\n              <span>{{tr?.price}} ETH</span><span> - {{tr?.createdAt | timeBetweenLive}} ago</span>\n              <app-card-modal *ngIf=\"tr?.card\" [card]=\"tr?.card\"></app-card-modal>\n            </div>\n          </div><!-- end /.job_detail_module -->\n        </div><!-- end /.col-md-6 -->\n      </div><!-- end /.row -->\n    </div><!-- end /.container -->\n  </div>\n</section>\n<!--================================\n    END JOB AREA\n=================================-->\n"

/***/ }),

/***/ "./src/app/live-module/live/live.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_live_service__ = __webpack_require__("./src/app/services/live.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_socket_service__ = __webpack_require__("./src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LiveComponent = /** @class */ (function () {
    function LiveComponent(ls, socketService) {
        this.ls = ls;
        this.socketService = socketService;
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["a" /* Subscription */]();
        this.transactions = [];
    }
    LiveComponent.prototype.ngOnInit = function () {
        var _self = this;
        this.socketService.initSocket();
        this.transactions = [];
        this.socketService.onEvent('live-info').subscribe(function (transaction) {
            if (transaction)
                _self.transactions.unshift(transaction);
        });
        this.subscriptions.add(this.ls.getLastTransactions().subscribe(function (transactions) {
            if (transactions != null) {
                for (var _i = 0, transactions_1 = transactions; _i < transactions_1.length; _i++) {
                    var tr = transactions_1[_i];
                    _self.transactions.push(tr);
                }
            }
        }, function (error) {
            console.log(error);
        }));
    };
    LiveComponent.prototype.ngOnDestroy = function () {
        this.socketService.removeListener('live-info');
        this.subscriptions.unsubscribe();
    };
    LiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-legal',
            template: __webpack_require__("./src/app/live-module/live/live.component.html"),
            styles: [__webpack_require__("./src/app/live-module/live/live.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_live_service__["a" /* LiveService */], __WEBPACK_IMPORTED_MODULE_3__services_socket_service__["a" /* SocketService */]])
    ], LiveComponent);
    return LiveComponent;
}());



/***/ }),

/***/ "./src/app/market-module/card-modal/card-modal.component.css":
/***/ (function(module, exports) {

module.exports = ".cardUI {\n  margin-top: 36px;\n  cursor: pointer;\n}\n\n.product-purchase {\n  margin-top: 10px !important;\n  padding: 10px 10px !important;\n}\n\n.modal-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.modal-body .informations {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  word-break: break-all;\n  overflow: hidden;\n}\n\n.modal-body .informations p {\n  min-width: 138px;\n  display: inline-block;\n  margin-bottom: 0;\n  color: #333;\n  font-weight: 500;\n}\n\n.modal-body .informations .section span {\n  margin-left: 25px;\n}\n\n.modal-body .section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 20px;\n}\n\n.modal-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.modal-header {\n  padding-top: 20px;\n  padding-bottom: 15px;\n}\n\n.modal .modal-title {\n  margin-bottom: 0px;\n}\n\n.ellipsis {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.transactions-container {\n  margin-bottom: 0 !important;\n}\n\ntransactions {\n  min-height: 170px;\n  max-height: 230px;\n  overflow: scroll;\n}\n\n@media (max-width: 767px) {\n  .modal-body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\n\n.price-increase {\n  background-color: #77de51;\n}\n\n.price-decrease {\n  background-color: #9c0c1c;\n}\n\n"

/***/ }),

/***/ "./src/app/market-module/card-modal/card-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade rating_modal\" id=\"{{ 'modal-' + card.id}}\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-md\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n          aria-hidden=\"true\">&times;</span></button>\n        <h3 class=\"modal-title\" id=\"rating_modal\">{{card.name}}</h3>\n        <p>Own by <a [routerLink]=\"['/account', card?.owner?.wallet]\" data-dismiss=\"modal\">{{card?.owner?.username == '' ? 'Anonymous' : card?.owner?.username}}</a></p>\n      </div>\n\n      <div class=\"modal-body\">\n        <div class=\"col-md-5 col-sm-5 col-xs-12\">\n          <div [ngClass]=\"['card', card.type ? card.type.css : '', 'product', 'product--card']\">\n\n            <div class=\"card-title\">\n              <h4>{{card.name}}</h4>\n            </div>\n\n            <div class=\"card-img\">\n              <div class=\"content-img\" *ngIf=\"card?.image?.indexOf('http') > -1 && card?.image?.indexOf('data:image') > -1\" [ngStyle]=\"{'background-image': 'url(' + card.image + ')'}\"></div>\n              <div class=\"content-img\" *ngIf=\"card?.image?.indexOf('http') == -1 && card?.image?.indexOf('data:image') == -1\" [ngStyle]=\"{'background-image': 'url(' + cs.baseUrl + card.image + ')'}\"></div>\n            </div>\n\n            <div class=\"footer-card\">\n              <div class=\"card-line\">\n                <div>\n                  <span class=\"label-footer\">VIDS</span>\n                  <span class=\"value-footer\">{{card.nbVideos | abbreviateNumber}}</span>\n                </div>\n\n                <div>\n                  <span class=\"value-footer\">{{card.nbSubscribers | abbreviateNumber}}</span>\n                  <span class=\"label-footer\">FOLW</span>\n                </div>\n              </div>\n              <div class=\"card-line\">\n                <div>\n                  <span class=\"label-footer\">VIEW</span>\n                  <span class=\"value-footer\">{{card.nbViews | abbreviateNumber}}</span>\n                </div>\n\n                <div>\n                  <span class=\"value-footer\">1W</span>\n                  <span class=\"label-footer\">CARD</span>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"product-purchase\">\n            <div class=\"price_love\">\n              <span>{{card.price | currency}}</span>\n            </div>\n            <div class=\"sell\"><p><span class=\"lnr lnr-cart\"></span><span>{{card.nbTransactions}}</span></p></div>\n          </div>\n        </div>\n        <div class=\"col-md-7 col-sm-7 col-xs-12 informations\">\n          <div class=\"section\">\n            <p>Youtube channel</p>\n            <span class=\"ellipsis\"><a href=\"{{card.url}}\" target=\"_blank\">{{card.url}}</a></span>\n          </div>\n          <!--<div class=\"section\">\n            <p>Subscribers</p>\n            <span>{{card.nbSubscribers}}</span>\n          </div> -->\n          <div class=\"section\">\n            <p>Nationality</p>\n            <span>{{card.nationality?.name?.charAt(0).toUpperCase() + card.nationality?.name?.slice(1)}}</span>\n          </div>\n          <div class=\"section\">\n            <p>Description</p>\n            <span>{{card.description}}</span>\n          </div>\n          <!--<div class=\"section\">\n            <p>Citation</p>\n            <span>{{card.citation}}</span>\n          </div>-->\n          <div class=\"section transactions-container\">\n            <p>Transactions</p>\n            <transactions [transactions]=\"card.transactions\"></transactions>\n          </div>\n          <!--<div class=\"section\">\n            <p>Price history</p>\n            <price-chart [card]=\"card\"></price-chart>\n          </div>-->\n\n\n        </div>\n      </div><!-- end /.modal-body -->\n      <div class=\"modal-footer\">\n        <button *ngIf=\"card?.owner?._id == currentUser?._id\"  data-toggle=\"modal\" [attr.data-target]=\"'#modal-' + card.id + '-changePrice'\" class=\"btn btn--round btn--default\">Change price</button>\n        <button *ngIf=\"card?.owner?._id != currentUser?._id\"  data-toggle=\"modal\" [attr.data-target]=\"'#modal-' + card.id + '-changePrice'\" class=\"btn btn--round btn--default\">Buy</button>\n        <button class=\"btn btn--round modal_close\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"{{ 'modal-' + card.id + '-changePrice'}}\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-md\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n          aria-hidden=\"true\">&times;</span></button>\n        <h3 class=\"modal-title\" id=\"\">Choose price for {{card.name}}</h3>\n      </div>\n\n      <div class=\"modal-body\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n          Actual price : {{card.price.toFixed(4)}} ETH\n          Actual price : {{card.price}} ETH\n          <input step=\".001\" [(ngModel)]=\"newPrice\" name=\"newPrice\" id=\"newPrice\" type=\"number\" class=\"text_field\"\n                 placeholder=\"Enter new price in ETH\" [value]=\"card.price.toFixed(4)\"required>\n        </div>\n      </div><!-- end /.modal-body -->\n      <div class=\"modal-footer\">\n        <button *ngIf=\"card?.owner?._id == currentUser?._id\" (click)=\"changePriceCard(card.id, card.owner.wallet)\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn--round btn--default\">Submit</button>\n        <button *ngIf=\"card?.owner?._id != currentUser?._id\" (click)=\"purchaseCard(card, newPrice)\" data-dismiss=\"modal\" class=\"btn btn--round btn--default\">Buy</button>\n        <button class=\"btn btn--round modal_close\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/market-module/card-modal/card-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Card__ = __webpack_require__("./src/app/models/Card.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_card_service__ = __webpack_require__("./src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardModalComponent = /** @class */ (function () {
    function CardModalComponent(cs, as, toastr, vcr) {
        var _this = this;
        this.cs = cs;
        this.as = as;
        this.toastr = toastr;
        this.newPrice = 0;
        this.toastr.setRootViewContainerRef(vcr);
        this.as.currentUserChange.subscribe(function (user) {
            _this.currentUser = user;
        });
        this.currentUser = this.as.getLocalUser();
    }
    CardModalComponent.prototype.changePriceCard = function (idCard, _wallet) {
        if (this.newPrice != 0) {
            this.cs.changePriceCard(idCard, this.newPrice, _wallet).then(function (res) {
                console.log(res);
            });
        }
        else {
            this.toastr.error('The price must be greater than 0.', 'Price modification');
        }
    };
    CardModalComponent.prototype.purchaseCard = function (card, price) {
        if (price < card.price) {
            price = card.price;
        }
        this.cs.purchaseCard(card.id, price).then(function (res) {
            console.log(res);
        });
    };
    CardModalComponent.prototype.ngOnInit = function () {
        this.currentUser = this.as.currentUser;
        this.newPrice = parseFloat(this.card.price.toFixed(4));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("card"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_Card__["a" /* Card */])
    ], CardModalComponent.prototype, "card", void 0);
    CardModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card-modal',
            template: __webpack_require__("./src/app/market-module/card-modal/card-modal.component.html"),
            styles: [__webpack_require__("./src/app/market-module/card-modal/card-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_card_service__["a" /* CardService */], __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], CardModalComponent);
    return CardModalComponent;
}());



/***/ }),

/***/ "./src/app/market-module/card/card.component.css":
/***/ (function(module, exports) {

module.exports = ".locked {\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%);\n}\n\n.cardUI {\n  margin-top: 36px;\n  cursor: pointer;\n}\n\n.cardUILocked {\n  margin-top: 36px;\n  cursor: not-allowed;\n}\n\n.product-purchase {\n  margin-top: 10px !important;\n  padding: 10px 10px !important;\n}\n\n.modal-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.modal-body .informations {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  word-break: break-all;\n  overflow: hidden;\n}\n\n.modal-body .informations p {\n  min-width: 138px;\n  display: inline-block;\n  margin-bottom: 0;\n  color: #333;\n  font-weight: 500;\n}\n\n.modal-body .informations .section span {\n  margin-left: 25px;\n}\n\n.modal-body .section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 20px;\n}\n\n.modal-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.modal-header {\n  padding-top: 20px;\n  padding-bottom: 15px;\n}\n\n.modal .modal-title {\n  margin-bottom: 0px;\n}\n\n.ellipsis {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.transactions-container {\n  margin-bottom: 0 !important;\n}\n\ntransactions {\n  min-height: 170px;\n  max-height: 230px;\n  overflow: scroll;\n}\n\n@media (max-width: 767px) {\n  .modal-body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\n\n.price-increase {\n  background-color: #77de51;\n}\n\n.price-decrease {\n  background-color: #9c0c1c;\n}\n\n/**** EFFECT ****/\n\n"

/***/ }),

/***/ "./src/app/market-module/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"perspective:2000px;perspective-origin: bottom\"  [ngClass]=\"{locked: card.isLocked}\">\n  <div *ngIf=\"card\" [id]=\"card._id\"[ngClass]=\"[card.isLocked ? 'cardUILocked' : 'cardUI', 'card', card.type ? card.type.css : ''] \" [attr.data-toggle]=\"card.isLocked ? '' : 'modal'\" [attr.data-target]=\"'#modal-' + card.id\">\n\n    <div class=\"card-title\">\n      <h4>{{card.name}}</h4>\n    </div>\n\n    <div class=\"card-img\">\n      <div class=\"content-img\" *ngIf=\"card?.image?.indexOf('http') == -1 && card?.image?.indexOf('data:image') == -1\" [ngStyle]=\"{'background-image': 'url(' + cs.baseUrl + card.image + ')'}\"></div>\n      <div class=\"content-img\" *ngIf=\"card?.image?.indexOf('http') > -1 || card?.image?.indexOf('data:image') > -1\" [ngStyle]=\"{'background-image': 'url(' + card.image + ')'}\"></div>\n    </div>\n\n    <div class=\"footer-card\">\n      <div class=\"card-line\">\n        <div>\n          <span class=\"label-footer label-vids\">VIDS</span>\n          <span class=\"value-footer\">{{card.nbVideos | abbreviateNumber}}</span>\n        </div>\n\n        <div>\n          <span class=\"value-footer value-folw\">{{card.nbSubscribers | abbreviateNumber}}</span>\n          <span class=\"label-footer\">FOLW</span>\n        </div>\n      </div>\n      <div class=\"card-line\">\n        <div>\n          <span class=\"label-footer label-view\">VIEW</span>\n          <span class=\"value-footer\">{{card.nbViews | abbreviateNumber}}</span>\n        </div>\n\n        <div>\n          <span class=\"value-footer value-card\">{{card.createdAt | timeBetween}}</span>\n          <span class=\"label-footer\">CARD</span>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"product-purchase\">\n    <div class=\"price_love\">\n      <span id=\"{{'card-price-' + card.id}}\">{{card.price | currency  }}</span>\n    </div>\n    <div class=\"sell\"><p><span class=\"lnr lnr-cart\"></span><span>{{card.nbTransactions}}</span></p></div>\n  </div>\n\n</div>\n<app-card-modal *ngIf=\"modal\" [card]=\"card\"></app-card-modal>\n"

/***/ }),

/***/ "./src/app/market-module/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Card__ = __webpack_require__("./src/app/models/Card.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_card_service__ = __webpack_require__("./src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardComponent = /** @class */ (function () {
    function CardComponent(authenticationService, cs, router) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.cs = cs;
        this.router = router;
        this.modal = true;
        this.currentUser = {
            _id: ""
        };
        this.authenticationService.currentUserChange.subscribe(function (user) {
            _this.currentUser = user;
        });
        this.currentUser = this.authenticationService.getLocalUser();
    }
    CardComponent.prototype.hoverEffect = function (x, y) {
        var eWidth = this.obj.clientWidth;
        var eHeight = this.obj.clientHeight;
        var xPos = (x - (eWidth / 2)) / 30;
        var yPos = (y - (eHeight / 2)) / 30;
        var rotateX = Math.round(+(yPos * 0.6));
        var rotateY = Math.round(-(xPos * 1));
        this.obj.style.transition = 'all 0s linear';
        this.obj.style.transform = 'scale(1.0) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
        this.obj.style.zIndex = '99';
    };
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.ngAfterViewInit = function () {
        var _self = this;
        this.obj = document.getElementById(this.card._id);
        this.obj.onmousemove = function (event) {
            var viewportOffset = _self.obj.getBoundingClientRect();
            var relX = event.pageX - viewportOffset.left;
            var relY = event.pageY - viewportOffset.top - window.scrollY;
            _self.hoverEffect(relX, relY);
        };
        this.obj.onmouseleave = function () {
            _self.obj.style.transition = 'all 0.8s ease-in-out';
            _self.obj.style.transform = 'rotate(0deg)';
            _self.obj.style.zIndex = '0';
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("card"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_Card__["a" /* Card */])
    ], CardComponent.prototype, "card", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("modal"),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "modal", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'card',
            template: __webpack_require__("./src/app/market-module/card/card.component.html"),
            styles: [__webpack_require__("./src/app/market-module/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__services_card_service__["a" /* CardService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/market-module/market.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_market_component__ = __webpack_require__("./src/app/market-module/market/market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_card_component__ = __webpack_require__("./src/app/market-module/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__("./src/app/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transactions_transactions_component__ = __webpack_require__("./src/app/market-module/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__price_chart_price_chart_component__ = __webpack_require__("./src/app/market-module/price-chart/price-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__card_modal_card_modal_component__ = __webpack_require__("./src/app/market-module/card-modal/card-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_manager_service__ = __webpack_require__("./src/app/services/manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MarketModule = /** @class */ (function () {
    function MarketModule() {
    }
    MarketModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__market_market_component__["a" /* MarketComponent */],
                __WEBPACK_IMPORTED_MODULE_3__card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__transactions_transactions_component__["a" /* TransactionsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__price_chart_price_chart_component__["a" /* PriceChartComponent */],
                __WEBPACK_IMPORTED_MODULE_10__card_modal_card_modal_component__["a" /* CardModalComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__market_market_component__["a" /* MarketComponent */],
                __WEBPACK_IMPORTED_MODULE_3__card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__card_modal_card_modal_component__["a" /* CardModalComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_manager_service__["a" /* ManagerService */]
            ]
        })
    ], MarketModule);
    return MarketModule;
}());



/***/ }),

/***/ "./src/app/market-module/market/market.component.css":
/***/ (function(module, exports) {

module.exports = ".price-increase {\n  background-color: #77de51;\n}\n\n.price-decrease {\n  background-color: #9c0c1c;\n}\n\n.products {\n  padding: 20px 0;\n}\n\n.youtube_search {\n  padding: 24px 0px 24px 0;\n}\n\n.pagination-area {\n  margin-top: 30px;\n}\n\n.filter-bar .filter__option {\n  padding: 10px 0;\n}\n\n@media (max-width: 767px) {\n  .filter__option.filter--dropdown .dropdown-trigger,\n  .filter__option.filter--select {\n    margin: auto;\n  }\n\n  .filter__option.filter--select {\n    display: block;\n  }\n\n}\n\n.empty-market {\n  text-align: center;\n  padding: 112px 0px 112px 0px;\n}\n"

/***/ }),

/***/ "./src/app/market-module/market/market.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"search-wrapper\">\n  <div class=\"search-area2 bgimage\">\n    <!--<div class=\"bg_image_holder\">-->\n    <!--<img src=\"images/search.jpg\" alt=\"\">-->\n    <!--</div>-->\n    <div class=\"container content_above youtube_search\">\n      <div class=\"row\">\n        <div class=\"col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1\">\n          <div class=\"search\">\n            <div class=\"search__title\"><h3>Search your YTIcon</h3></div>\n            <div class=\"search__field\">\n              <form action=\"#\">\n                <div class=\"field-wrapper\">\n                  <input (input)=\"onSearchChange($event.target.value)\" name=\"search\" class=\"relative-field rounded\"\n                         type=\"text\" placeholder=\"Search your YTIcon\">\n                  <button class=\"btn btn--round\" type=\"submit\">Search</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"filter-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"filter-bar\">\n          <div class=\"filter__option filter--dropdown\">\n            <a href=\"#\" id=\"type\" class=\"dropdown-trigger\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{names.type ? names.type : 'Type'}}<span class=\"lnr lnr-chevron-down\"></span></a>\n            <ul  class=\"dropdown dropdown-menu\">\n              <li (click)=\"selectType('')\"><a>All <span *ngIf=\"!filters.type\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li *ngFor=\"let type of types\" (click)=\"selectType(type)\"><a>{{type.name.charAt(0).toUpperCase() + type.name.slice(1)}} <span *ngIf=\"filters.type == type._id\"><i class=\"fas fa-check\"></i></span></a></li>\n            </ul>\n          </div>\n\n          <div class=\"filter__option filter--dropdown\">\n            <a href=\"#\" id=\"nationality\" class=\"dropdown-trigger\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{names.nationality ? names.nationality : 'Nationality'}}<span class=\"lnr lnr-chevron-down\"></span></a>\n            <ul  class=\"dropdown dropdown-menu\">\n              <li (click)=\"selectNationality('')\"><a>All <span *ngIf=\"!filters.nationality\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li *ngFor=\"let nationality of nationalities\" (click)=\"selectNationality(nationality)\"><a>{{nationality.name.charAt(0).toUpperCase() + nationality.name.slice(1)}} <span *ngIf=\"filters.nationality == nationality._id\"><i class=\"fas fa-check\"></i></span></a></li>\n            </ul>\n          </div>\n\n          <div class=\"filter__option filter--dropdown\">\n            <a href=\"#\" id=\"category\" class=\"dropdown-trigger\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{names.category ? names.category : 'Channel Category'}}<span class=\"lnr lnr-chevron-down\"></span></a>\n            <ul  class=\"dropdown dropdown-menu\">\n              <li (click)=\"selectCategory('')\"><a>All <span *ngIf=\"!filters.category\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li *ngFor=\"let category of categories\" (click)=\"selectCategory(category)\"><a>{{category.name.charAt(0).toUpperCase() + category.name.slice(1)}} <span *ngIf=\"filters.category == category._id\"><i class=\"fas fa-check\"></i></span></a></li>\n            </ul>\n          </div>\n\n          <div class=\"filter__option filter--dropdown\">\n            <a href=\"#\" id=\"follower\" class=\"dropdown-trigger\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{names.subscribers ? names.subscribers + ' followers' : 'Followers'}}<span class=\"lnr lnr-chevron-down\"></span></a>\n            <ul  class=\"dropdown dropdown-menu\">\n              <li (click)=\"selectFollower('', null, null)\"><a>All <span *ngIf=\"!filters.minSubscribers && !filters.maxSubscribers\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li  (click)=\"selectFollower(0,50000, '0 - 50K')\"><a>0 - 50K <span *ngIf=\"filters.minSubscribers == 0 && filters.maxSubscribers == 50000\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li  (click)=\"selectFollower(50000,100000, '50K - 100K')\"><a>50K - 100K <span *ngIf=\"filters.minSubscribers == 50000 && filters.maxSubscribers == 100000\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li  (click)=\"selectFollower(100000,500000, '100K - 500K')\"><a>100K - 500K <span *ngIf=\"filters.minSubscribers == 100000 && filters.maxSubscribers == 500000\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li  (click)=\"selectFollower(500000,1000000, '500K - 1M')\"><a>500K - 1M <span *ngIf=\"filters.minSubscribers == 500000 && filters.maxSubscribers == 1000000\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li  (click)=\"selectFollower(1000000,10000000, '1M - 10M')\"><a>1M - 10M <span *ngIf=\"filters.minSubscribers == 1000000 && filters.maxSubscribers == 10000000\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li  (click)=\"selectFollower(10000000,null, 'More than 10M')\"><a>More than 10M <span *ngIf=\"filters.minSubscribers == 10000000 && !filters.maxSubscribers\"><i class=\"fas fa-check\"></i></span></a></li>\n            </ul>\n          </div>\n\n          <div class=\"filter__option filter--dropdown\">\n            <a href=\"#\" id=\"video\" class=\"dropdown-trigger\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{names.videos ? names.videos + ' videos' : 'Videos'}}<span class=\"lnr lnr-chevron-down\"></span></a>\n            <ul  class=\"dropdown dropdown-menu\">\n              <li (click)=\"selectVideo('', null, null)\"><a>All <span *ngIf=\"!filters.minVideos && !filters.maxVideos\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li  (click)=\"selectVideo(0,100, '0 - 100')\"><a>0 - 100 <span *ngIf=\"filters.minVideos == 0 && filters.maxVideos == 100\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li  (click)=\"selectVideo(100,200, '100 - 200')\"><a>100 - 200 <span *ngIf=\"filters.minVideos == 100 && filters.maxVideos == 200\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li  (click)=\"selectVideo(200,500,'200 - 500')\"><a>200 - 500 <span *ngIf=\"filters.minVideos == 200 && filters.maxVideos == 500\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li  (click)=\"selectVideo(500,1000,'500 - 1K')\"><a>500 - 1 000 <span *ngIf=\"filters.minVideos == 500 && filters.maxVideos == 1000\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li  (click)=\"selectVideo(1000,5000,'1K - 5K')\"><a>1 000 - 5 000 <span *ngIf=\"filters.minVideos == 1000 && filters.maxVideos == 5000\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li  (click)=\"selectVideo(5000,10000,'5K - 10K')\"><a>5 000 - 10 000 <span *ngIf=\"filters.minVideos == 5000 && filters.maxVideos == 10000\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li  (click)=\"selectVideo(10000,50000,'10K - 50K')\"><a>10 000 - 50 000 <span *ngIf=\"filters.minVideos == 10000 && filters.maxVideos == 50000\"><i class=\"fas fa-check\"></i></span></a></li>\n              <li  (click)=\"selectVideo(50000,null,'More than 50K')\"><a>More than 50 000 <span *ngIf=\"filters.minVideos == 50000 && !filters.maxVideos\"><i class=\"fas fa-check\"></i></span></a></li>\n            </ul>\n          </div>\n\n\n          <!--<div class=\"filter__option filter&#45;&#45;dropdown filter&#45;&#45;range\">-->\n          <!--<a href=\"#\" id=\"drop3\" class=\"dropdown-trigger\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Price Range <span class=\"lnr lnr-chevron-down\"></span></a>-->\n          <!--<div class=\"dropdown dropdown-menu\" aria-labelledby=\"drop3\">-->\n          <!--<div class=\"range-slider price-range\"></div>-->\n\n          <!--<div class=\"price-ranges\">-->\n          <!--<span class=\"from rounded\">$30</span>-->\n          <!--<span class=\"to rounded\">$300</span>-->\n          <!--</div>-->\n          <!--</div>-->\n          <!--</div>-->\n\n          <div class=\"filter__option filter--select\">\n            <div class=\"select-wrap\">\n              <select (change)=\"selectSort($event.target.value)\" name=\"price\">\n                <option value=\"createdAt_desc\">Newest</option>\n                <option value=\"createdAt_asc\">Oldest</option>\n                <option value=\"price_desc\">Price : High to low</option>\n                <option value=\"price_asc\">Price : Low to High</option>\n                <option value=\"nbSubscribers_desc\">Rarety : High to low</option>\n                <option value=\"nbSubscribers_asc\">Rarety : Low to High</option>\n                <option value=\"nbVideos_desc\">Video number : High to low</option>\n                <option value=\"nbVideos_asc\">Video number : Low to High</option>\n                <option value=\"nbTransactions_desc\">Transaction number : High to low</option>\n                <option value=\"nbTransactions_asc\">Transaction number : Low to High</option>\n              </select>\n              <span class=\"lnr lnr-chevron-down\"></span>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<section class=\"products\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"empty-market\" *ngIf=\"isLoading == true\">\n        <i class=\"fas fa-spinner fa-spin fa-3x fa-fw\"></i>\n        <span class=\"sr-only\">Refreshing...</span>\n        <!--<p>Loading ...</p>-->\n      </div>\n      <div class=\"empty-market\" *ngIf=\"isLoading == false && cards.length == 0\">\n        <p>No youtuber can reach your search criterias :(</p>\n      </div>\n      <div *ngFor=\"let card of cards\">\n        <card class=\"col-lg-3 col-md-4 col-sm-6\" [card]=\"card\"></card>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"maxPages > 1\">\n      <div class=\"col-md-12\">\n        <div class=\"pagination-area\">\n          <nav class=\"navigation pagination\" role=\"navigation\">\n            <div class=\"nav-links\">\n              <a class=\"prev page-numbers\" *ngIf=\"filters.page > 1\" (click)=\"prevPage()\"><span class=\"lnr lnr-arrow-left\"></span></a>\n\n              <a class=\"prev page-numbers\" *ngIf=\"maxPages > 4\" [class.disabled]=\"filters.page == 1\"\n                 (click)=\"loadPage(1)\">First</a>\n\n              <a *ngFor=\"let in of counter(maxPages); let idxPage = index\" class=\"page-numbers\"\n                 [class.current]=\"idxPage + 1 == filters.page\" (click)=\"loadPage(idxPage + 1)\">\n                {{idxPage + 1}}\n              </a>\n\n              <a class=\"prev page-numbers\" *ngIf=\"maxPages > 4\" (click)=\"loadPage(maxPages)\">Last</a>\n              <a class=\"next page-numbers\" *ngIf=\"filters.page < maxPages\" [class.disabled]=\"filters.page == maxPages\" (click)=\"nextPage()\"><span\n                class=\"lnr lnr-arrow-right\"></span></a>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/market-module/market/market.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_card_service__ = __webpack_require__("./src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_type_service__ = __webpack_require__("./src/app/services/type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_nationality_service__ = __webpack_require__("./src/app/services/nationality.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_socket_service__ = __webpack_require__("./src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fortawesome_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fortawesome_fontawesome_free_solid__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-solid/index.es.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MarketComponent = /** @class */ (function () {
    function MarketComponent(cardService, typeService, nationalityService, categoryService, socketService) {
        var _this = this;
        this.cardService = cardService;
        this.typeService = typeService;
        this.nationalityService = nationalityService;
        this.categoryService = categoryService;
        this.socketService = socketService;
        this.cards = [];
        this.types = [];
        this.nationalities = [];
        this.categories = [];
        this.isLoading = false;
        this.subscribtions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["a" /* Subscription */]();
        this.maxPages = 0;
        this.names = {
            type: null,
            nationality: null,
            category: null,
            subscribers: null,
            videos: null
        };
        this.filters = {
            page: 1,
            name: null,
            type: null,
            category: null,
            minPrice: null,
            maxPrice: null,
            minSubscribers: null,
            maxSubscribers: null,
            minViews: null,
            maxViews: null,
            minVideos: null,
            maxVideos: null,
            minTransactions: null,
            maxTransactions: null,
            nationality: null,
            sort: "createdAt",
            order: "DESC",
            nbViews: null,
            nbTransactions: null
        };
        this.timeout = null;
        __WEBPACK_IMPORTED_MODULE_7__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_8__fortawesome_fontawesome_free_solid__["a" /* faCheck */]);
        this.getCards();
        this.subscribtions.add(this.typeService.getTypes().subscribe(function (res) {
            _this.types = res;
        }));
        this.subscribtions.add(this.nationalityService.getNationalities().subscribe(function (res) {
            _this.nationalities = res;
        }));
        this.subscribtions.add(this.categoryService.getCategories().subscribe(function (res) {
            _this.categories = res;
        }));
        this.socketService.initSocket();
        this.socketService.onEvent('tx-card').subscribe(function (cardId) {
            console.log('cardId = ' + cardId);
            _this.cardService.getCard(cardId).subscribe(function (newCard) {
                var idx = 0;
                for (var _i = 0, _a = _this.cards; _i < _a.length; _i++) {
                    var card = _a[_i];
                    if (card._id == cardId) {
                        _this.cards[idx] = newCard;
                        document.getElementsByClassName('modal-backdrop')[0].remove();
                        break;
                    }
                    ++idx;
                }
            });
        });
    }
    MarketComponent.prototype.generateQueryParams = function () {
        var obj = {};
        for (var key in this.filters) {
            if (this.filters[key]) {
                obj[key] = this.filters[key];
            }
        }
        return obj;
    };
    MarketComponent.prototype.ngOnInit = function () {
    };
    MarketComponent.prototype.getCards = function () {
        var _this = this;
        this.isLoading = true;
        this.cards = [];
        this.subscribtions.add(this.cardService.getCardsQuery(this.generateQueryParams()).subscribe(function (res) {
            _this.isLoading = false;
            _this.cards = res.cards;
            _this.maxPages = res.pages;
            console.log('cards', res);
        }));
    };
    MarketComponent.prototype.selectType = function (type) {
        this.filters.type = type._id;
        this.names.type = type.name;
        this.getCards();
    };
    MarketComponent.prototype.selectNationality = function (nationality) {
        this.filters.nationality = nationality._id;
        this.names.nationality = nationality.name;
        this.getCards();
    };
    MarketComponent.prototype.selectCategory = function (category) {
        this.filters.category = category._id;
        this.names.category = category.name;
        this.getCards();
    };
    MarketComponent.prototype.selectFollower = function (min, max, s) {
        this.filters.maxSubscribers = max;
        this.filters.minSubscribers = min;
        this.names.subscribers = s;
        this.getCards();
    };
    MarketComponent.prototype.selectVideo = function (min, max, s) {
        this.filters.maxVideos = max;
        this.filters.minVideos = min;
        this.names.videos = s;
        this.getCards();
    };
    MarketComponent.prototype.selectSort = function (sort) {
        var sort_array = sort.split("_");
        this.filters.sort = sort_array[0];
        this.filters.order = sort_array[1];
        this.getCards();
    };
    MarketComponent.prototype.prevPage = function () {
        if (this.filters.page > 1) {
            --this.filters.page;
            this.getCards();
        }
    };
    MarketComponent.prototype.nextPage = function () {
        if (this.filters.page < this.maxPages) {
            ++this.filters.page;
            this.getCards();
        }
    };
    MarketComponent.prototype.loadPage = function (idx) {
        this.filters.page = idx;
        this.getCards();
    };
    MarketComponent.prototype.counter = function (max) {
        var counters = new Array(max);
        return counters;
    };
    MarketComponent.prototype.onSearchChange = function (searchValue) {
        if (this.timeout !== null) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(function (self) {
            self.filters.name = searchValue;
            self.getCards();
        }, 1000, this);
    };
    MarketComponent.prototype.ngOnDestroy = function () {
        this.socketService.removeListener('tx-card');
        this.subscribtions.unsubscribe();
    };
    MarketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-market',
            template: __webpack_require__("./src/app/market-module/market/market.component.html"),
            styles: [__webpack_require__("./src/app/market-module/market/market.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_card_service__["a" /* CardService */], __WEBPACK_IMPORTED_MODULE_3__services_type_service__["a" /* TypeService */],
            __WEBPACK_IMPORTED_MODULE_4__services_nationality_service__["a" /* NationalityService */], __WEBPACK_IMPORTED_MODULE_5__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_6__services_socket_service__["a" /* SocketService */]])
    ], MarketComponent);
    return MarketComponent;
}());



/***/ }),

/***/ "./src/app/market-module/price-chart/price-chart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/market-module/price-chart/price-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas id=\"{{'chart-' + card.id}}\"></canvas>\n"

/***/ }),

/***/ "./src/app/market-module/price-chart/price-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceChartComponent = /** @class */ (function () {
    function PriceChartComponent() {
        this.datas = [];
    }
    PriceChartComponent.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.card.transactions; _i < _a.length; _i++) {
            var tx = _a[_i];
            this.datas.push(tx.price);
        }
        this.datas.push(this.card.price);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("card"),
        __metadata("design:type", Object)
    ], PriceChartComponent.prototype, "card", void 0);
    PriceChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'price-chart',
            template: __webpack_require__("./src/app/market-module/price-chart/price-chart.component.html"),
            styles: [__webpack_require__("./src/app/market-module/price-chart/price-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PriceChartComponent);
    return PriceChartComponent;
}());



/***/ }),

/***/ "./src/app/market-module/transactions/transactions.component.css":
/***/ (function(module, exports) {

module.exports = ".withdraw_history {\n  padding-bottom: 0px;\n}\n\n.table.withdraw__table {\n  margin-bottom: 0px;\n}\n"

/***/ }),

/***/ "./src/app/market-module/transactions/transactions.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"withdraw_module withdraw_history\">\n  <div class=\"table-responsive\">\n    <table class=\"table withdraw__table\">\n      <thead>\n      <tr>\n        <th>From</th>\n        <th>Price</th>\n        <th>Date</th>\n      </tr>\n      </thead>\n\n      <tbody>\n      <tr *ngFor=\"let tx of transactions\">\n        <td><a (click)=\"redirectToUser(tx)\" target=\"_blank\" data-dismiss=\"modal\">{{tx?.to?.username == '' ? 'Anonymous' : tx?.to?.username}}</a></td>\n        <td class=\"bold\">{{tx.price.toFixed(4)}}</td>\n        <td>{{tx.createdAt | date: 'MMM d, y, HH:mm'}}</td>\n      </tr>\n\n      <tr *ngIf=\"transactions.length == 0\">\n        <td>No transaction yet.</td>\n      </tr>\n\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/market-module/transactions/transactions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(router) {
        this.router = router;
    }
    TransactionsComponent.prototype.ngOnInit = function () {
    };
    TransactionsComponent.prototype.redirectToUser = function (tx) {
        this.router.navigate(['/account', tx.to.wallet]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("transactions"),
        __metadata("design:type", Object)
    ], TransactionsComponent.prototype, "transactions", void 0);
    TransactionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'transactions',
            template: __webpack_require__("./src/app/market-module/transactions/transactions.component.html"),
            styles: [__webpack_require__("./src/app/market-module/transactions/transactions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "./src/app/menu-module/currency-selector/currency-selector.component.css":
/***/ (function(module, exports) {

module.exports = ".dropdown {\n  min-width: 0px;\n}\n\n.dropdown.dropdown—currency {\n  padding: 10px 6px;\n  right: 0;\n  min-width: calc(100% + 20px);\n}\n\n.dropdown.dropdown—currency ul li {\n  text-align: center;\n}\n\n.dropdown:before {\n  left: 50%;\n}\n\n.currency-button {\n  min-width: 80px;\n  line-height: normal;\n  height: 34px;\n}\n\n.dropdown.dropdown—currency ul li a {\n  border-radius: 3px;\n}\n\n.dropdown.dropdown—currency ul li a:hover {\n  background: #0674ec;\n  color: #fff;\n}\n"

/***/ }),

/***/ "./src/app/menu-module/currency-selector/currency-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inline\">\n  <div class=\"has_dropdown\">\n    <button class=\"btn btn--light btn--bordered btn-md currency-button\">{{currency}}</button>\n    <div class=\"dropdown dropdown—currency\">\n      <ul>\n        <li><a (click)=\"setCurrency('ETH')\"><i class=\"fab fa-ethereum\"></i> ETH</a></li>\n        <li><a (click)=\"setCurrency('USD')\"><i class=\"fas fa-dollar-sign\"></i> USD</a></li>\n        <li><a (click)=\"setCurrency('EUR')\"><i class=\"fas fa-euro-sign\"></i> EUR</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/menu-module/currency-selector/currency-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencySelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_currency_service__ = __webpack_require__("./src/app/services/currency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_brands__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-brands/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome_free_solid__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-solid/index.es.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CurrencySelectorComponent = /** @class */ (function () {
    function CurrencySelectorComponent(currencyService, as) {
        var _this = this;
        this.currencyService = currencyService;
        this.as = as;
        this.currency = "ETH";
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["a" /* Subscription */]();
        __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_brands__["a" /* default */]);
        __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome_free_solid__["b" /* faDollarSign */]);
        __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome_free_solid__["c" /* faEuroSign */]);
        this.subscriptions.add(this.as.currentUserChange.subscribe(function (user) {
            _this.currency = user.currency;
        }));
        this.subscriptions.add(this.currencyService.currentCurrencyChange.subscribe(function (currency) {
            _this.currency = currency;
        }));
        this.currency = this.currencyService.getCurrency();
    }
    CurrencySelectorComponent.prototype.ngOnInit = function () {
    };
    CurrencySelectorComponent.prototype.setCurrency = function (currency) {
        this.currency = currency;
        this.currencyService.setCurrency(currency);
    };
    CurrencySelectorComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    CurrencySelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'currency-selector',
            template: __webpack_require__("./src/app/menu-module/currency-selector/currency-selector.component.html"),
            styles: [__webpack_require__("./src/app/menu-module/currency-selector/currency-selector.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_currency_service__["a" /* CurrencyService */], __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]])
    ], CurrencySelectorComponent);
    return CurrencySelectorComponent;
}());



/***/ }),

/***/ "./src/app/menu-module/menu.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__ = __webpack_require__("./src/app/menu-module/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_info_user_info_component__ = __webpack_require__("./src/app/menu-module/user-info/user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifications_notifications_component__ = __webpack_require__("./src/app/menu-module/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__currency_selector_currency_selector_component__ = __webpack_require__("./src/app/menu-module/currency-selector/currency-selector.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_font_awesome__["a" /* AngularFontAwesomeModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_info_user_info_component__["a" /* UserInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__currency_selector_currency_selector_component__["a" /* CurrencySelectorComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__["a" /* MenuComponent */]
            ]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/menu-module/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.logs_container, .profile_container {\n  float: right;\n}\n\n.profile_container {\n  padding: 0;\n}\n\n.logs_wrap, .profile_wrap {\n  position: relative;\n}\n\n.logs_button {\n  background: #0674ec;\n  color: #fff;\n  padding: 0 17px;\n  display: inline-block;\n  line-height: 34px;\n  border-radius: 21px;\n  font-weight: 500;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.navbar-toggle {\n  padding: 9px 0;\n}\n\n.mainmenu__menu .navbar-collapse {\n  height: auto;\n}\n\n.logs_infos_container {\n  display: none;\n}\n\n.collapse.navbar-collapse {\n  margin-right: auto;\n}\n\n.logs_container, .profile_container {\n  margin-left: auto;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.menu-container {\n   border-bottom: 1px solid #efefef;\n}\n\n.margin-left {\n  margin-left: 20px;\n}\n\n.logo {\n  max-width: 100%;\n  height: 18px;\n  width: 71px;\n  vertical-align: text-bottom;\n  display: inline-block;\n}\n\n@media (max-width: 767px) {\n  .navbar-toggle {\n    margin-right: auto;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .mainmenu__menu .navbar-nav > li {\n    margin-right: 30px;\n  }\n}\n\n@media (max-width: 991px) {\n  .logs_infos_container {\n    display: initial;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/menu-module/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- start .mainmenu_area -->\n<div class=\"mainmenu\">\n  <!-- start .container -->\n  <div class=\"container\">\n    <!-- start .row-->\n    <div class=\"row\">\n      <!-- start .col-md-12 -->\n      <div class=\"col-md-12 menu-container\">\n\n        <!-- NAVBAR RESPONSIVE -->\n        <div class=\"navbar-header flex\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"lnr lnr-menu\"></span>\n          </button>\n\n          <div *ngIf=\"router.url == '/market'\" class=\"hidden-lg hidden-md hidden-sm\">\n            <currency-selector></currency-selector>\n          </div>\n\n          <div *ngIf=\"!isAuthenticated()\" class=\"logs_container hidden-lg hidden-md hidden-sm\" [ngClass]=\"{'margin-left': router.url == '/market'}\">\n            <div class=\"logs_wrap\">\n              <a routerLink=\"/login\" href=\"\" class=\"logs_button inline\">Login</a>\n            </div>\n          </div><!-- end logs -->\n\n          <!-- start profile -->\n          <div *ngIf=\"isAuthenticated()\" class=\"profile_container hidden-lg hidden-md hidden-sm\" [ngClass]=\"{'margin-left': router.url == '/market'}\">\n            <div class=\"profile_wrap\">\n              <app-user-info></app-user-info>\n            </div>\n          </div><!-- end profile -->\n\n        </div>\n        <!-- END NAVBAR RESPONSIVE -->\n\n        <nav class=\"navbar navbar-default mainmenu__menu flex\">\n          <!-- Collect the nav links, forms, and other content for toggling -->\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n              <li>\n                <a routerLink=\"/home\">\n                  <img src=\"assets/images/menu/icon_dark_grey_bold.png\" class=\"logo\" onmouseover=\"this.src='assets/images/menu/icon_blue_bold.png'\" onmouseout=\"this.src='assets/images/menu/icon_dark_grey_bold.png'\">\n                </a>\n              </li>\n              <li>\n                <a routerLink=\"/market\">Market</a>\n              </li>\n              <li>\n                <a routerLink=\"/leaderboard\">Leaderboard</a>\n              </li>\n              <li>\n                <a routerLink=\"/live\">Live</a>\n              </li>\n              <li>\n                <a routerLink=\"/faq\">FAQ</a>\n              </li>\n              <li *ngIf=\"isAdmin()\">\n                <a routerLink=\"/admin\">Admin</a>\n              </li>\n              <li *ngIf=\"isAdmin()\">\n                <a routerLink=\"/list-cards\">List Cards</a>\n              </li>\n            </ul>\n          </div><!-- /.navbar-collapse -->\n\n          <div *ngIf=\"router.url == '/market'\" class=\"hidden-xs\">\n            <currency-selector></currency-selector>\n          </div>\n\n          <!-- start logs -->\n          <div *ngIf=\"!isAuthenticated()\" class=\"logs_container hidden-xs\" [ngClass]=\"{'margin-left': router.url == '/market'}\">\n            <div class=\"logs_wrap\">\n              <a routerLink=\"/signin\" href=\"\" class=\"logs_button inline\">Login</a>\n            </div>\n          </div><!-- end logs -->\n\n          <!-- start profile -->\n          <div *ngIf=\"isAuthenticated()\" class=\"profile_container hidden-xs\" [ngClass]=\"{'margin-left': router.url == '/market'}\">\n            <div class=\"profile_wrap\">\n              <app-user-info></app-user-info>\n            </div>\n          </div><!-- end profile -->\n\n        </nav>\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row-->\n  </div><!-- start .container -->\n</div><!-- end /.mainmenu-->\n"

/***/ }),

/***/ "./src/app/menu-module/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(as, router) {
        var _this = this;
        this.as = as;
        this.router = router;
        this.currentUser = null;
        this.as.currentUserChange.subscribe(function (user) {
            _this.currentUser = user;
        });
        this.currentUser = this.as.currentUser;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.isAuthenticated();
    };
    MenuComponent.prototype.isAuthenticated = function () {
        this.currentUser = this.as.currentUser;
        return this.currentUser ? true : false;
    };
    MenuComponent.prototype.isAdmin = function () {
        return !!(this.currentUser && this.currentUser.roles.indexOf('admin') > -1);
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("./src/app/menu-module/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/menu-module/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/menu-module/notifications/notifications.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu-module/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"author__notification_area\">\n  <ul>\n    <li class=\"has_dropdown\">\n      <div class=\"icon_wrap\">\n        <span class=\"lnr lnr-alarm\"></span> <span class=\"notification_count noti\">25</span>\n      </div>\n\n      <div class=\"dropdown notification--dropdown\">\n\n        <div class=\"dropdown_module_header\">\n          <h4>My Notifications</h4>\n          <a href=\"notification.html\">View All</a>\n        </div>\n\n        <div class=\"notifications_module\">\n          <div class=\"notification\">\n            <div class=\"notification__info\">\n              <div class=\"info_avatar\">\n                <img src=\"assets/images/notification_head.png\" alt=\"\">\n              </div>\n              <div class=\"info\">\n                <p><span>Anderson</span> added to Favourite <a href=\"#\">Mccarther Coffee Shop</a></p>\n                <p class=\"time\">Just now</p>\n              </div>\n            </div><!-- end /.notifications -->\n\n            <div class=\"notification__icons \">\n              <span class=\"lnr lnr-heart loved noti_icon\"></span>\n            </div><!-- end /.notifications -->\n          </div><!-- end /.notifications -->\n\n          <div class=\"notification\">\n            <div class=\"notification__info\">\n              <div class=\"info_avatar\">\n                <img src=\"assets/images/notification_head2.png\" alt=\"\">\n              </div>\n              <div class=\"info\">\n                <p><span>Michael</span> commented on <a href=\"#\">MartPlace Extension Bundle</a></p>\n                <p class=\"time\">Just now</p>\n              </div>\n            </div><!-- end /.notifications -->\n\n            <div class=\"notification__icons \">\n              <span class=\"lnr lnr-bubble commented noti_icon\"></span>\n            </div><!-- end /.notifications -->\n          </div><!-- end /.notifications -->\n\n          <div class=\"notification\">\n            <div class=\"notification__info\">\n              <div class=\"info_avatar\">\n                <img src=\"assets/images/notification_head3.png\" alt=\"\">\n              </div>\n              <div class=\"info\">\n                <p><span>Khamoka </span>purchased <a href=\"#\">  Visibility Manager Subscriptions</a></p>\n                <p class=\"time\">Just now</p>\n              </div>\n            </div><!-- end /.notifications -->\n\n            <div class=\"notification__icons \">\n              <span class=\"lnr lnr-cart purchased noti_icon\"></span>\n            </div><!-- end /.notifications -->\n          </div><!-- end /.notifications -->\n\n          <div class=\"notification\">\n            <div class=\"notification__info\">\n              <div class=\"info_avatar\">\n                <img src=\"assets/images/notification_head4.png\" alt=\"\">\n              </div>\n              <div class=\"info\">\n                <p><span>Anderson</span> added to Favourite <a href=\"#\">Mccarther Coffee Shop</a></p>\n                <p class=\"time\">Just now</p>\n              </div>\n            </div><!-- end /.notifications -->\n\n            <div class=\"notification__icons \">\n              <span class=\"lnr lnr-star reviewed noti_icon\"></span>\n            </div><!-- end /.notifications -->\n          </div><!-- end /.notifications -->\n        </div><!-- end /.dropdown -->\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/menu-module/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__("./src/app/menu-module/notifications/notifications.component.html"),
            styles: [__webpack_require__("./src/app/menu-module/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/menu-module/user-info/user-info.component.css":
/***/ (function(module, exports) {

module.exports = "\n.avatar {\n  width: 40px;\n  height: 40px;\n}\n\n@media (max-width: 480px) {\n\n  .autor__info {\n    display: none;\n  }\n\n}\n"

/***/ }),

/***/ "./src/app/menu-module/user-info/user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile_menu inline has_dropdown\" *ngIf=\"isAuthenticated()\">\n  <div class=\"author__avatar\">\n    <!--<img src=\"assets/images/usr_avatar.png\" alt=\"user avatar\">-->\n    <img [attr.src]=\"baseUrl + currentUser.avatar\" alt=\"user avatar\" class=\"avatar\">\n  </div>\n  <div class=\"autor__info\">\n    <p class=\"name\">\n      {{currentUser.username}}\n    </p>\n    <!--<p class=\"ammount\">$20.45</p>-->\n  </div>\n\n  <div class=\"dropdown dropdown--author\">\n    <ul>\n      <li><a routerLink=\"/account\"><span class=\"lnr lnr-user\"></span>Profile</a></li>\n      <li><a (click)=\"logout()\"><span class=\"lnr lnr-exit\"></span>Logout</a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/menu-module/user-info/user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(as, _router) {
        this.as = as;
        this._router = _router;
        this.baseUrl = as.baseUrl;
    }
    UserInfoComponent.prototype.logout = function () {
        this.as.logout();
        // this._router.navigateByUrl('/login');
    };
    UserInfoComponent.prototype.ngOnInit = function () {
        this.isAuthenticated();
    };
    UserInfoComponent.prototype.isAuthenticated = function () {
        this.currentUser = this.as.currentUser;
        return this.currentUser ? true : false;
    };
    UserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__("./src/app/menu-module/user-info/user-info.component.html"),
            styles: [__webpack_require__("./src/app/menu-module/user-info/user-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/models/Card.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
var Card = /** @class */ (function () {
    function Card() {
    }
    return Card;
}());



/***/ }),

/***/ "./src/app/operation-module/operation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operation_operation_component__ = __webpack_require__("./src/app/operation-module/operation/operation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OperationModule = /** @class */ (function () {
    function OperationModule() {
    }
    OperationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__operation_operation_component__["a" /* OperationComponent */]]
        })
    ], OperationModule);
    return OperationModule;
}());



/***/ }),

/***/ "./src/app/operation-module/operation/operation.component.css":
/***/ (function(module, exports) {

module.exports = ".section-title {\n  padding: 50px 0;\n}\n\n.contact_form--wrapper {\n  padding: 0px 0 40px;\n}\n\n.container {\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 4px rgba(108, 111, 115, 0.1);\n  box-shadow: 0 2px 4px rgba(108, 111, 115, 0.1);\n}\n\n.operation-detail-module {\n  text-align: justify;\n}\n\n.operation-detail-module .operation-title {\n  border-bottom: 1px solid #ececec;\n  padding: 0px 30px 11px;\n  font-size: 24px;\n  line-height: 66px;\n}\n\n.operation-detail-module .operation-content {\n  padding: 34px 30px 16px;\n}\n\n.operation-area {\n  background: #f0f1f5;\n}\n\n.operation-area .container {\n  background: #ffffff;\n}\n\n.operation-detail-module .operation-content .content_list {\n  padding-left: 30px;\n  margin-top: 25px;\n}\n\n.operation-detail-module .operation-content .content_list li {\n  padding-left: 26px;\n  position: relative;\n  line-height: 30px;\n  color: #555;\n}\n\n.operation-detail-module .operation-content .content_list li:before {\n  content: \"\";\n  height: 7px;\n  width: 7px;\n  background: #c5cad4;\n  position: absolute;\n  left: 0;\n  border-radius: 50%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\n.operation-detail-module .operation-content .content_list {\n  padding-left: 20px;\n  margin-bottom: 10px;\n  margin-top: 0px;\n}\n\n.operation-detail-module .operation-content .content_list li {\n  padding-left: 20px;\n}\n"

/***/ }),

/***/ "./src/app/operation-module/operation/operation.component.html":
/***/ (function(module, exports) {

module.exports = "<!--================================\n    START BREADCRUMB AREA\n=================================-->\n<section class=\"breadcrumb-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"breadcrumb\">\n          <ul>\n            <li><a routerLink=\"/home\">Home</a></li>\n            <li><a routerLink=\"/operation\">Operation</a></li>\n          </ul>\n        </div>\n        <h1 class=\"page-title\">Operation</h1>\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END BREADCRUMB AREA\n=================================-->\n\n\n<!--================================\n        START JOB AREA\n    =================================-->\n<section class=\"operation-area section--padding2\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <div class=\"operation-detail-module\">\n          <div class=\"operation-content\">\n            <p>Because we are really concerned about the relationship between YTIcons and its community,\n              we want to provide a total transparency for all of the current and future YTIcollectors.</p>\n            <p>YTIcons is a unique Smart Contract (also referred as “SC”) and every YouTuber card is one Smart Contract\n              token, i.e. once you purchase a card, it belongs to you and nobody else can steal it from you except\n              if one person buys it from you.</p>\n            <p>At every purchase, the bought YouTuber card (referred as “YTIcon”) will get its price increased.\n              This rise is carefully calculated by the SC to avoid any excess :</p>\n            <ul class=\"content_list\">\n              <li><b>x2</b> from 0 to 0.05 ETH.</li>\n              <li><b>x1.5</b> from 0.05 to 0.5 ETH.</li>\n              <li><b>x1.25</b> from 0.5 to 1 ETH.</li>\n              <li><b>x1.15</b> from 1 ETH to infinity.</li>\n            </ul>\n          </div>\n\n          <h3 class=\"operation-title\">Scenario</h3>\n          <div class=\"operation-content\">\n            <p>Let’s consider that you purchase a <b>YTIcon</b> for <b>0.1 ETH</b> and get your transaction validated by the blockchain :\n              it is yours and its price doubles (<b>x1.5</b> since 0.1 ETH is between 0 and 0.05 ETH) so its value is now equal to <b>0.15 ETH</b>.</p>\n\n            <p>You can <b>set the price</b> from <b>half of the current YTIcon’s price</b> (0.1 ETH) up to <b>its current price</b> (0.15 ETH),\n              but you are convinced that the YTIcon you bought is worth its value.</p>\n\n            <p>You were right since someone else directly buys it from you and get his/her transaction validated by the blockchain.\n              For this transaction (note that we will use the example values but <b>the percentages cited below are inscribed\n                in the Smart Contract and cannot be modified in any way</b>) :</p>\n\n            <ul class=\"content_list\">\n              <li>The <b>seller</b> gets <b>92% of the price</b>. In this case, as your YTIcon is worth 0.15 ETH, you will gain 1.395 ETH.</li>\n              <li>If the <b>YTIcon is verified</b> by a YouTuber, <b>3%</b> will be sent <b>to an address she/he carefully chose</b>. On the other hand,\n                if the <b>YTIcon is not verified</b>, these <b>3%</b> will be sent to an address especially created for <b>charity purposes</b>.</li>\n              <li>With the remaining percentages, <b>1%</b> will be sent to an address created for <b>YTIcons’ development</b> which includes\n                communication, server fees, maintenance, giveaway, events’ rewards and more.</li>\n              <li>Finally <b>4%</b> will be <b>shared between all of the YTIcons’ creators (which will be )</b>.</li>\n            </ul>\n          </div>\n\n          <h3 class=\"operation-title\">Charity</h3>\n          <div class=\"operation-content\">\n\n            <p>With all of the cryptocurrency’s projects’ stories, we totally understand your state of mind and this is why\n              our Smart Contract is publicly open for you to read and analyse it <b><a routerLink=\"/faq\">here</a></b>.</p>\n            <p>In contrary of other similar cryptocurrencies projects, the donations are directly stored — through our Smart Contract\n              — to an address with this specific purpose.</p>\n            <p>Finally, since a lot of the existing charities and organisations serve different purposes to make the world\n              a better place, we will notify you through our Twitter (<b><a href=\"https://twitter.com/YT-Icons\" target=\"-blank\">@YT-Icons</a></b>)\n              every time a change has been decided or when a donation has been done through this address so you can track it off thanks to the blockchain.</p>\n            <p>We want our community to be aware of everything related to the charities and this is why we engage ourselves\n              to provide you updates following every transaction done through this wallet and evidences once the Ether has been donated.</p>\n          </div>\n\n        </div><!-- end /.operation-detail-module -->\n      </div><!-- end /.col-md-6 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END JOB AREA\n=================================-->\n"

/***/ }),

/***/ "./src/app/operation-module/operation/operation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperationComponent = /** @class */ (function () {
    function OperationComponent() {
    }
    OperationComponent.prototype.ngOnInit = function () {
    };
    OperationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operation',
            template: __webpack_require__("./src/app/operation-module/operation/operation.component.html"),
            styles: [__webpack_require__("./src/app/operation-module/operation/operation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OperationComponent);
    return OperationComponent;
}());



/***/ }),

/***/ "./src/app/pipes/abbreviate-number.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbbreviateNumberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AbbreviateNumberPipe = /** @class */ (function () {
    function AbbreviateNumberPipe() {
        this.units = ['K', 'M', 'B', 'T'];
    }
    AbbreviateNumberPipe.prototype.transform = function (value, args) {
        var isNegative = value < 0;
        var abbreviatedNumber;
        abbreviatedNumber = this.abbreviate(Math.abs(value), 1);
        return isNegative ? '-' + abbreviatedNumber : abbreviatedNumber;
    };
    AbbreviateNumberPipe.prototype.abbreviate = function (number, decPlaces) {
        decPlaces = Math.pow(10, decPlaces);
        var numberOrigin = number;
        for (var i = this.units.length - 1; i >= 0; i--) {
            var size = Math.pow(10, (i + 1) * 3);
            if (size <= number) {
                number = Math.round(number * decPlaces / size) / decPlaces;
                if ((number === 1000) && (i < this.units.length - 1)) {
                    number = 1;
                    i++;
                }
                var numberStr = number.toString();
                var splitNumber = numberStr.split('.');
                if (splitNumber.length > 1) {
                    if (splitNumber[0].length == 3) {
                        numberStr = splitNumber[0];
                    }
                    else {
                        numberStr = splitNumber[0] + '.' + splitNumber[1].charAt(0);
                    }
                    number = parseFloat(numberStr);
                }
                number += this.units[i];
                break;
            }
        }
        return number;
    };
    AbbreviateNumberPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'abbreviateNumber'
        })
    ], AbbreviateNumberPipe);
    return AbbreviateNumberPipe;
}());



/***/ }),

/***/ "./src/app/pipes/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/pipes/currency.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_realvalue_service__ = __webpack_require__("./src/app/services/realvalue.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_currency_service__ = __webpack_require__("./src/app/services/currency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CurrencyPipe = /** @class */ (function () {
    function CurrencyPipe(currencyService, realvalueService, as) {
        var _this = this;
        this.currencyService = currencyService;
        this.realvalueService = realvalueService;
        this.as = as;
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["a" /* Subscription */]();
        this.subscriptions.add(this.currencyService.currencyPipeChange.subscribe(function (currency) {
            _this.currentCurrency = currency;
        }));
        this.currentCurrency = this.currencyService.currentCurrency;
    }
    CurrencyPipe.prototype.transform = function (value, args) {
        switch (this.currentCurrency) {
            case "ETH":
                return this.precisionRoundEth((value)).toString() + " ETH";
            case "USD":
                return this.precisionRound(value * this.realvalueService.valueUSD).toString() + " USD";
            case "EUR":
                return this.precisionRound(value * this.realvalueService.valueEUR).toString() + " EUR";
            default:
                return value;
        }
    };
    CurrencyPipe.prototype.precisionRoundEth = function (num) {
        return num.toFixed(4);
    };
    CurrencyPipe.prototype.precisionRound = function (num) {
        return (Math.round(num * 100) / 100);
    };
    CurrencyPipe.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    CurrencyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'currency',
            pure: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_currency_service__["a" /* CurrencyService */], __WEBPACK_IMPORTED_MODULE_1__services_realvalue_service__["a" /* RealvalueService */], __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]])
    ], CurrencyPipe);
    return CurrencyPipe;
}());



/***/ }),

/***/ "./src/app/pipes/french-number.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrenchNumberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FrenchNumberPipe = /** @class */ (function () {
    function FrenchNumberPipe() {
    }
    FrenchNumberPipe.prototype.transform = function (val) {
        if (val !== undefined && val !== null) {
            return val.toLocaleString('fr-FR');
        }
        else {
            return '';
        }
    };
    FrenchNumberPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'frenchNumber'
        })
    ], FrenchNumberPipe);
    return FrenchNumberPipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__currency_pipe__ = __webpack_require__("./src/app/pipes/currency.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__capitalize_pipe__ = __webpack_require__("./src/app/pipes/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abbreviate_number_pipe__ = __webpack_require__("./src/app/pipes/abbreviate-number.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__time_between_pipe__ = __webpack_require__("./src/app/pipes/time-between.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__french_number_pipe__ = __webpack_require__("./src/app/pipes/french-number.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__time_between_live_pipe__ = __webpack_require__("./src/app/pipes/time-between-live.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__currency_pipe__["a" /* CurrencyPipe */],
                __WEBPACK_IMPORTED_MODULE_3__capitalize_pipe__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_4__abbreviate_number_pipe__["a" /* AbbreviateNumberPipe */],
                __WEBPACK_IMPORTED_MODULE_5__time_between_pipe__["a" /* TimeBetweenPipe */],
                __WEBPACK_IMPORTED_MODULE_6__french_number_pipe__["a" /* FrenchNumberPipe */],
                __WEBPACK_IMPORTED_MODULE_7__time_between_live_pipe__["a" /* TimeBetweenLivePipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__currency_pipe__["a" /* CurrencyPipe */],
                __WEBPACK_IMPORTED_MODULE_3__capitalize_pipe__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"],
                __WEBPACK_IMPORTED_MODULE_5__time_between_pipe__["a" /* TimeBetweenPipe */],
                __WEBPACK_IMPORTED_MODULE_4__abbreviate_number_pipe__["a" /* AbbreviateNumberPipe */],
                __WEBPACK_IMPORTED_MODULE_6__french_number_pipe__["a" /* FrenchNumberPipe */],
                __WEBPACK_IMPORTED_MODULE_7__time_between_live_pipe__["a" /* TimeBetweenLivePipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/pipes/time-between-live.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeBetweenLivePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeBetweenLivePipe = /** @class */ (function () {
    function TimeBetweenLivePipe() {
    }
    TimeBetweenLivePipe.prototype.transform = function (_date) {
        var date1 = new Date(_date);
        var date2 = new Date();
        if (_date) {
            var diff = Math.abs(date1.getTime() - date2.getTime());
            var diffMonths = date2.getMonth() - date1.getMonth();
            var diffDays = date2.getDate() - date1.getDate();
            var diffWeeks = Math.floor(diffDays / 7);
            var diffYears = date2.getFullYear() - date1.getFullYear();
            var diffHours = date2.getHours() - date1.getHours();
            var diffMinutes = date2.getMinutes() - date1.getMinutes();
            var diffSeconds = date2.getSeconds() - date1.getSeconds();
            diffMonths += 12 * diffYears;
            if (diffSeconds >= 0 && !diffMinutes && !diffHours && !diffDays && !diffWeeks && !diffMonths && !diffYears) {
                return diffSeconds + 's';
            }
            if (diffMinutes >= 0 && !diffHours && !diffDays && !diffWeeks && !diffMonths && !diffYears) {
                return diffMinutes + 'm';
            }
            if (diffHours >= 0 && !diffDays && !diffWeeks && !diffMonths && !diffYears) {
                return diffHours + 'H';
            }
            if (diffWeeks > 0 && !diffMonths && !diffYears) {
                return diffWeeks + 'W';
            }
            if (diffMonths > 0 && !diffYears) {
                return diffMonths + 'M';
            }
            else if (diffYears > 0) {
                return diffYears + 'Y';
            }
            return diffDays + 'D';
        }
        return 0;
    };
    TimeBetweenLivePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'timeBetweenLive'
        })
    ], TimeBetweenLivePipe);
    return TimeBetweenLivePipe;
}());



/***/ }),

/***/ "./src/app/pipes/time-between.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeBetweenPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeBetweenPipe = /** @class */ (function () {
    function TimeBetweenPipe() {
    }
    TimeBetweenPipe.prototype.transform = function (_date) {
        var date1 = new Date(_date);
        var date2 = new Date();
        if (_date) {
            var diff = Math.abs(date1.getTime() - date2.getTime());
            var diffMonths = date2.getMonth() - date1.getMonth();
            var diffDays = date2.getDate() - date1.getDate();
            var diffWeeks = Math.floor(diffDays / 7);
            var diffYears = date2.getFullYear() - date1.getFullYear();
            var diffHours = date2.getHours() - date1.getHours();
            diffMonths += 12 * diffYears;
            if (diffHours >= 0 && !diffDays && !diffWeeks && !diffMonths && !diffYears) {
                return diffHours + 'H';
            }
            if (diffWeeks > 0 && !diffMonths && !diffYears) {
                return diffWeeks + 'W';
            }
            if (diffMonths > 0 && !diffYears) {
                return diffMonths + 'M';
            }
            else if (diffYears > 0) {
                return diffYears + 'Y';
            }
            return diffDays + 'D';
        }
        return 0;
    };
    TimeBetweenPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'timeBetween'
        })
    ], TimeBetweenPipe);
    return TimeBetweenPipe;
}());



/***/ }),

/***/ "./src/app/privacypolicy-module/privacypolicy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacypolicy_privacypolicy_component__ = __webpack_require__("./src/app/privacypolicy-module/privacypolicy/privacypolicy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PrivacyPolicyModule = /** @class */ (function () {
    function PrivacyPolicyModule() {
    }
    PrivacyPolicyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__privacypolicy_privacypolicy_component__["a" /* PrivacyPolicyComponent */]]
        })
    ], PrivacyPolicyModule);
    return PrivacyPolicyModule;
}());



/***/ }),

/***/ "./src/app/privacypolicy-module/privacypolicy/privacypolicy.component.css":
/***/ (function(module, exports) {

module.exports = "\n.term_modules {\n  text-align: justify;\n}\n\n.term_modules .term .paragraph-container {\n  padding: 30px 30px 0px 30px;\n}\n\n.term_modules .term p {\n  padding: 0;\n}\n\nli {\n  font-size: 16px;\n}\n\n.privacypolicy-area {\n  background: #f0f1f5;\n}\n"

/***/ }),

/***/ "./src/app/privacypolicy-module/privacypolicy/privacypolicy.component.html":
/***/ (function(module, exports) {

module.exports = "<!--================================\n    START BREADCRUMB AREA\n=================================-->\n<section class=\"breadcrumb-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"breadcrumb\">\n          <ul>\n            <li><a routerLink=\"/home\">Home</a></li>\n            <li><a routerLink=\"/privacypolicy\">Privacy Policy</a></li>\n          </ul>\n        </div>\n        <h1 class=\"page-title\">Privacy Policy</h1>\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END BREADCRUMB AREA\n=================================-->\n\n<!--================================\n        START PRIVACY POLICY AREA\n=================================-->\n\n<section class=\"privacypolicy-area section--padding2\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"cardify term_modules\">\n          <div class=\"term\">\n            <div class=\"paragraph-container\">\n              <p>As the legality of our platform, your privacy is our main priority and this is why we want you to be aware of how the informations are collected,\n                used and protected when you log in or purchase a YouTuber’s card (<b>YTIcon</b>) on our website (<a href=\"www.yticons.co\">www.yticons.co</a>), along with others.</p>\n\n              <p>In this policy, the whole system covering the Smart Contracts and our platform (the website) will be referred as the “Application”. By using this Application, you agree that we can collect, use and disclose your information according to this policy.\n                  This Privacy policy only applies to the Game — meaning not any other websites, products or services accessible through the Application (e.g. MetaMask).</p>\n\n              <p>If any changes are done to this Policy, you will be notified differently depending on the extend of the occurred changes :\n                we will either use the website to notify you through a banner announcement,\n                directly send you an email or even all of the ways cited above if there are any major changes.</p>\n\n              <p>Even if we really care about your privacy by notifying you at every change,\n                we totally understand the fact that you still can be concerned about your privacy using our Application.\n                This is why we suggest you to keep being updated by occasionally checking back here.</p>\n            </div>\n          </div><!-- end /.term -->\n\n          <div class=\"term\">\n            <div class=\"term__title\">\n              <h4>Collected informations</h4>\n            </div>\n            <div class=\"paragraph-container\">\n              <p>To fully use the Application, we will ask you to provide us your address email, your Ethereum wallet address.</p>\n\n              <p>We also collect log-in informations and basic analytics. These informations can be collected from third-party providers like Google Analytics. They may include, among other things, the type of the device you are using, your IP address and more.\n                These providers may also use cookies or pixels, which are accepted by most of the existing web browsers by default. You can set your browser to remove or reject cookies or pixels, however, your experience using the Application might be affected.</p>\n            </div>\n          </div><!-- end /.term -->\n\n          <div class=\"term\">\n            <div class=\"term__title\">\n              <h4>Informations not collected</h4>\n            </div>\n            <div class=\"paragraph-container\">\n            <p>We do not collect any other personal information except if you provide it to us : by filling a form, communicating with us via social media applications or email.\n              Also, we only collect your Ethereum wallet address as a payment information (and that is all).</p>\n            </div>\n          </div><!-- end /.term -->\n\n          <div class=\"term\">\n            <div class=\"term__title\">\n              <h4>Use of the collected informations</h4>\n            </div>\n            <div class=\"paragraph-container\">\n              <p>Any collected information will be used to :</p>\n              <ul>\n                <li>- Improve the Application.</li>\n                <li>- Analyze trends to improve and implement features you actually want.</li>\n                <li>- Contact you to send you technical updates, confirmations for sales, informations regarding security, Application updates and more.</li>\n                <li>- Responding to any questions or support issues you may have.</li>\n              </ul>\n              <br/>\n              <p>We may share the collected informations with the used third-parties to improve the game, however, as your privacy is our priority number one,\n                we endeavor to only provide them the informations they need to work on our behalf.</p>\n            </div>\n          </div><!-- end /.term -->\n\n          <div class=\"term\">\n            <div class=\"term__title\">\n              <h4>What we <b>do not</b> do with your informations</h4>\n            </div>\n            <div class=\"paragraph-container\">\n              <p>As previously implied, we do not share any information that directly identifies you with any third party provider except :</p>\n              <ul>\n                <li>- To comply with applicable law, regulation or law enforcement.</li>\n                <li>- To respond to claims and/or legal process.</li>\n                <li>- To protect our rights, our property or to enforce our terms of service.</li>\n                <li>- To preserve and ensure the safety of a person or a group of people.</li>\n                <li>- To prevent any unethical or illegal behavior.</li>\n                <li>- With your consent or at your request.</li>\n                <li>- For any other reason cited in this Policy.</li>\n              </ul>\n            </div>\n          </div><!-- end /.term -->\n\n          <div class=\"term\">\n            <div class=\"term__title\">\n              <h4>Informations storing and processing</h4>\n            </div>\n            <div class=\"paragraph-container\">\n              <p>Any collected information is governed by our home country. By using our Application,\n                you acknowledge that your informations may be transferred to or maintained on a system outside of your country of residence,\n                where the privacy laws may be as not as protective as those in where you are located.\n                By using our application, or by providing informations to us, you agree to have your information stored and processed in our home country.</p>\n            </div>\n          </div><!-- end /.term -->\n\n          <div class=\"term\">\n            <div class=\"term__title\">\n              <h4>Informations security</h4>\n            </div>\n            <div class=\"paragraph-container\">\n              <p>We are really careful about the informations you provide us and work hard to keep them secure :\n                we will take reasonable administrative, physical and electronic measure to protect your informations from loss,\n                theft, misuse, unauthorized access, disclosure, destruction or alteration. Nevertheless,\n                even with our will to protect your informations as much as possible,\n                we cannot guarantee them the absolute security because no information on the Internet is ever completely secure.</p>\n            </div>\n          </div><!-- end /.term -->\n\n          <div class=\"term\">\n            <div class=\"term__title\">\n              <h4>Minor-age accounts</h4>\n            </div>\n            <div class=\"paragraph-container\">\n              <p>The Application is not intended for children under the age of 13.\n                If you are the parent or guardian of a child under the required minimum age and you believe\n                (or you are already aware) that your child has provided us personal informations without your (and their) consent,\n                contact us at <b>yt-icons@gmail.com</b>. We will immediately remove those informations from our files.</p>\n            </div>\n          </div><!-- end /.term -->\n\n          <div class=\"term\">\n            <div class=\"term__title\">\n              <h4>Contact us</h4>\n            </div>\n            <div class=\"paragraph-container\">\n              <p>If you have any questions or want to know the informations we currently have about you (if any), please contact us at <b>yt-icons@gmail.com</b>.</p>\n            </div>\n          </div><!-- end /.term -->\n\n        </div><!-- end /.term_modules -->\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n\n<!--================================\n        END PRIVACY POLICY AREA\n=================================-->\n"

/***/ }),

/***/ "./src/app/privacypolicy-module/privacypolicy/privacypolicy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacypolicy',
            template: __webpack_require__("./src/app/privacypolicy-module/privacypolicy/privacypolicy.component.html"),
            styles: [__webpack_require__("./src/app/privacypolicy-module/privacypolicy/privacypolicy.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_service__ = __webpack_require__("./src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manager_service__ = __webpack_require__("./src/app/services/manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__token_service__ = __webpack_require__("./src/app/services/token.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AuthenticationService = /** @class */ (function (_super) {
    __extends(AuthenticationService, _super);
    function AuthenticationService(http, cs, cookieService, tokenService) {
        var _this = _super.call(this, http) || this;
        _this.cs = cs;
        _this.cookieService = cookieService;
        _this.tokenService = tokenService;
        _this.currentUserChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var localToken = localStorage.getItem('yticons-token');
        var cookieToken = _this.cookieService.get('yticons-token');
        var token = localToken || cookieToken;
        if (token) {
            _this.getUserByToken(token).subscribe(function (res) {
                _this.currentUser = res;
                _this.tokenService.currentUser = _this.currentUser;
                _this.currentUserChange.next(_this.currentUser);
                console.log('CurrentUser changed', _this.currentUser);
            });
        }
        else {
            _this.currentUser = null;
            _this.tokenService.currentUser = _this.currentUser;
            _this.currentUserChange.next(_this.currentUser);
        }
        _this.tokenService.tokenChange.subscribe(function (res) {
            _this.currentUser = null;
        });
        return _this;
    }
    AuthenticationService.prototype.ngOnInit = function () {
    };
    AuthenticationService.prototype.login = function (_username, _password) {
        return this.post('/signin', { username: _username, password: _password });
    };
    AuthenticationService.prototype.register = function (_formData) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.cs.getAccount()];
                    case 1:
                        _a.address = _b.sent();
                        if (this.address && this.address != '')
                            _formData.append('wallet', this.address);
                        return [2 /*return*/, this.post('/users', _formData).toPromise()];
                }
            });
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('yticons-token');
        this.cookieService.delete('yticons-token');
        this.tokenService.currentUser = null;
        this.currentUser = null;
    };
    AuthenticationService.prototype.getUserByToken = function (token) {
        return this.get('/token/' + token);
    };
    AuthenticationService.prototype.setCurrentUser = function (user) {
        this.currentUser = user;
        this.tokenService.currentUser = this.currentUser;
        this.currentUserChange.next(this.currentUser);
    };
    AuthenticationService.prototype.getLocalUser = function () {
        return this.currentUser;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__card_service__["a" /* CardService */], __WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_6__token_service__["a" /* TokenService */]])
    ], AuthenticationService);
    return AuthenticationService;
}(__WEBPACK_IMPORTED_MODULE_4__manager_service__["a" /* ManagerService */]));



/***/ }),

/***/ "./src/app/services/card.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manager_service__ = __webpack_require__("./src/app/services/manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Web3 = __webpack_require__("./node_modules/web3/src/index.js");
var tokenAbi = __webpack_require__("./src/app/services/token/tokenContract.json");
var CardService = /** @class */ (function (_super) {
    __extends(CardService, _super);
    function CardService(http, toastr) {
        var _this = _super.call(this, http) || this;
        _this.toastr = toastr;
        _this._account = null;
        _this._tokenContractAddress = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].tokenAddress;
        if (typeof window.web3 !== 'undefined') {
            _this._web3 = new Web3(window.web3.currentProvider);
            var web3 = _this._web3;
            var toastr_1 = _this.toastr;
            _this._web3.eth.net.getId().then(function (id) {
                if (id !== 3) {
                    toastr_1.warning('You are not connected to the right network on MetaMask.', 'Network');
                }
            });
            _this._tokenContract = new _this._web3.eth.Contract(tokenAbi, _this._tokenContractAddress);
        }
        else {
            toastr.warning('You need to install MetaMask to be able to trade cards.', 'Cards trading');
        }
        return _this;
    }
    CardService.prototype.getAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var toastr, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        toastr = this.toastr;
                        _a = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this._web3.eth.getAccounts(function (err, accs) {
                                    if (err != null) {
                                        toastr.error('There was an error while fetching your accounts.', 'Account');
                                        return;
                                    }
                                    if (accs.length === 0) {
                                        toastr.error('The account(s)\' retrieval had failed. Please make sure your Ethereum client is correctly configured.', '');
                                        _this._account = null;
                                        resolve(null);
                                    }
                                    resolve(accs[0]);
                                });
                            })];
                    case 1:
                        _a._account = (_b.sent());
                        if (this._account)
                            this._web3.eth.defaultAccount = this._account;
                        return [2 /*return*/, Promise.resolve(this._account)];
                }
            });
        });
    };
    // public async refreshWallet() {
    //   let _self = this;
    //   this.getAccount().then(function(res: string) {
    //     console.log(res);
    //     _self.http.post('http://localhost:3000/users/' + _self.as.currentUser.wallet, {wallet: res});
    //   });
    // }
    CardService.prototype.getCardNumberByAddress = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var _web3 = _this._web3;
                        _this._tokenContract.methods.balanceOf(account).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                                resolve(0);
                            }
                            resolve(result);
                        });
                    })];
            });
        });
    };
    CardService.prototype.lockCard = function (_idCard) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                var toastr = _this.toastr;
                                console.log(account);
                                _this._tokenContract.methods.lock(_idCard).send({
                                    from: account,
                                    gas: 4000000,
                                    value: 0
                                }, function (error, result) {
                                    if (!error) {
                                        toastr.success('Your lock has been successfully done.', 'Transaction');
                                        resolve(result);
                                    }
                                    else {
                                        toastr.error('Transaction closed', 'Transaction');
                                        console.log(error);
                                        resolve(null);
                                    }
                                });
                            })];
                }
            });
        });
    };
    CardService.prototype.unlockCard = function (_idCard) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                var toastr = _this.toastr;
                                _this._tokenContract.methods.unlock(_idCard).send({
                                    from: account,
                                    gas: 4000000,
                                    value: 0
                                }, function (error, result) {
                                    if (!error) {
                                        toastr.success('Your unlock has been successfully done.', 'Transaction');
                                        resolve(result);
                                    }
                                    else {
                                        toastr.error('Transaction closed', 'Transaction');
                                        console.log(error);
                                        resolve(null);
                                    }
                                });
                            })];
                }
            });
        });
    };
    CardService.prototype.purchaseCard = function (_idCard, _price) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                var toastr = _this.toastr;
                                _this._tokenContract.methods.purchase(_idCard).send({
                                    from: account,
                                    gas: 4000000,
                                    value: _this._web3.utils.toWei(_price.toString(), 'ether')
                                }, function (error, result) {
                                    console.log('result', result);
                                    if (!error) {
                                        toastr.success('Your purchase has been successfully done.', 'Transaction');
                                        resolve(1);
                                    }
                                    else {
                                        toastr.error('Transaction closed', 'Transaction');
                                        console.log(error);
                                        resolve(0);
                                    }
                                });
                            })];
                }
            });
        });
    };
    CardService.prototype.changePriceCard = function (_idCard, _price, _walletCard) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, toastr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        toastr = this.toastr;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                if (account != _walletCard) {
                                    toastr.error('The wallet on Metamask is not the same as the card holder', 'Price modification');
                                    resolve(0);
                                }
                                else {
                                    _this._tokenContract.methods.setPrice(_idCard, _this._web3.utils.toWei(_price.toString(), 'ether')).send({
                                        from: account,
                                        gas: 4000000,
                                        value: 0
                                    }, function (error, result) {
                                        if (!error) {
                                            toastr.success('The price of your YTIcon has been successfully modified.', 'Price modification');
                                            resolve(1);
                                        }
                                        else {
                                            toastr.error('Transaction closed', 'Price modification');
                                            console.log(error);
                                            resolve(0);
                                        }
                                    });
                                }
                            })];
                }
            });
        });
    };
    CardService.prototype.createCardFromName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                var toastr = _this.toastr;
                                _this._tokenContract.methods.createCardFromName(name).send({
                                    from: account,
                                    gas: 4000000,
                                    value: 0
                                }, function (error, result) {
                                    if (!error) {
                                        toastr.success('The YTIcon named "' + name + '" has been successfully created.', 'Card creation');
                                        resolve(1);
                                    }
                                    else {
                                        toastr.error('An error occured while creating the YTIcon "' + name + '"', 'Card creation');
                                        console.log(error);
                                        resolve(0);
                                    }
                                });
                            })];
                }
            });
        });
    };
    CardService.prototype.createCardSC = function (card) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, toastr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        toastr = this.toastr;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                var self = _this;
                                _this._tokenContract.methods.createCard(card.name, card.price, null, null, card.isLocked).send({
                                    from: account,
                                    gas: 4000000,
                                    value: 0
                                }, function (error, result) {
                                    if (!error) {
                                        self.getCountCards().subscribe(function (res) {
                                            card.id = res.count;
                                            card.tx = result;
                                            self.createCard(card).subscribe(function (res) {
                                                resolve(card);
                                            });
                                        });
                                    }
                                    else {
                                        toastr.success('An error occured while creating the YTIcon "' + card.name + '"', 'Card creation');
                                        console.log(error);
                                        resolve(null);
                                    }
                                });
                            })];
                }
            });
        });
    };
    CardService.prototype.getCardsByAddress = function (account) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _web3 = _this._web3;
            _this._tokenContract.methods.getOwnerCards(account).call(function (err, result) {
                if (err != null) {
                    reject(err);
                }
                resolve(result);
            });
        });
    };
    CardService.prototype.setImageCard = function (card, cardForm) {
        return this.post('/cards/images/' + card.id, cardForm);
    };
    CardService.prototype.getCountCards = function () {
        return this.get('/cards/count');
    };
    CardService.prototype.getCardByIdSmartContract = function (id) {
        return this.get('/cards/bySmartId/' + id);
    };
    CardService.prototype.createCard = function (card) {
        return this.post('/cards', card);
    };
    CardService.prototype.getCard = function (id) {
        return this.get('/cards/' + id);
    };
    CardService.prototype.getCards = function () {
        return this.get('/cards');
    };
    CardService.prototype.modifyCard = function (card) {
        return this.put('/cards/' + card._id, card);
    };
    ;
    CardService.prototype.getCardsByWallet = function (wallet) {
        return this.get('/cards/byWallet/' + wallet);
    };
    CardService.prototype.getCardsQuery = function (query) {
        return this.getQuery('/cards', query);
    };
    CardService.prototype.getCardsQueryAdmin = function (query) {
        return this.getQuery('/cards/admin', query);
    };
    CardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"]])
    ], CardService);
    return CardService;
}(__WEBPACK_IMPORTED_MODULE_2__manager_service__["a" /* ManagerService */]));



/***/ }),

/***/ "./src/app/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager_service__ = __webpack_require__("./src/app/services/manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = /** @class */ (function (_super) {
    __extends(CategoryService, _super);
    function CategoryService(http) {
        return _super.call(this, http) || this;
    }
    CategoryService.prototype.getCategories = function () {
        return this.get('/categories');
    };
    CategoryService.prototype.create = function (body) {
        return this.post('/categories', body);
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], CategoryService);
    return CategoryService;
}(__WEBPACK_IMPORTED_MODULE_1__manager_service__["a" /* ManagerService */]));



/***/ }),

/***/ "./src/app/services/currency.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CurrencyService = /** @class */ (function () {
    function CurrencyService(authenticationService, userService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.currentCurrencyChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.currencyPipeChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["a" /* Subscription */]();
        this.subscriptions.add(this.authenticationService.currentUserChange.subscribe(function (user) {
            _this.currentCurrency = user.currency;
            _this.currentCurrencyChange.next(user.currency);
            _this.currencyPipeChange.next(_this.currentCurrency);
        }));
        this.currentCurrency = "ETH";
        this.currentCurrencyChange.next(this.currentCurrencyChange);
    }
    CurrencyService.prototype.setCurrency = function (currency) {
        this.currentCurrency = currency;
        this.currencyPipeChange.next(this.currentCurrency);
        if (this.authenticationService.currentUser) {
            this.authenticationService.currentUser.currency = currency;
            this.subscriptions.add(this.userService.modifyUser(this.authenticationService.currentUser).subscribe(function () { }));
        }
    };
    CurrencyService.prototype.getCurrency = function () {
        return this.currentCurrency;
    };
    CurrencyService.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    CurrencyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], CurrencyService);
    return CurrencyService;
}());



/***/ }),

/***/ "./src/app/services/leaderboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manager_service__ = __webpack_require__("./src/app/services/manager.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeaderboardService = /** @class */ (function (_super) {
    __extends(LeaderboardService, _super);
    function LeaderboardService(http) {
        return _super.call(this, http) || this;
    }
    LeaderboardService.prototype.getLeaderboard = function () {
        return this.get('/leaderboards/bySubscribers/');
    };
    LeaderboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], LeaderboardService);
    return LeaderboardService;
}(__WEBPACK_IMPORTED_MODULE_2__manager_service__["a" /* ManagerService */]));



/***/ }),

/***/ "./src/app/services/live.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manager_service__ = __webpack_require__("./src/app/services/manager.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LiveService = /** @class */ (function (_super) {
    __extends(LiveService, _super);
    function LiveService(http) {
        return _super.call(this, http) || this;
    }
    LiveService.prototype.getLastTransactions = function () {
        return this.get('/transactions/last');
    };
    LiveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], LiveService);
    return LiveService;
}(__WEBPACK_IMPORTED_MODULE_2__manager_service__["a" /* ManagerService */]));



/***/ }),

/***/ "./src/app/services/manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManagerService = /** @class */ (function () {
    function ManagerService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
        this.cookieService = new __WEBPACK_IMPORTED_MODULE_4_ng2_cookies__["CookieService"]();
    }
    ManagerService.prototype.generateHeadersAuth = function (headers) {
        var token = localStorage.getItem('yticons-token') || localStorage.getItem('yticons-token');
        if (token) {
            headers = headers.append('x-access-token', token);
        }
        return headers;
    };
    ManagerService.prototype.get = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
        headers = this.generateHeadersAuth(headers);
        return this.http.get(this.baseUrl + url, {
            headers: headers
        });
    };
    ManagerService.prototype.getQuery = function (url, queryParams) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
        headers = this.generateHeadersAuth(headers);
        return this.http.get(this.baseUrl + url, {
            params: queryParams,
            headers: headers
        });
    };
    ManagerService.prototype.post = function (url, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
        headers = this.generateHeadersAuth(headers);
        return this.http.post(this.baseUrl + url, body, {
            headers: headers
        });
    };
    ManagerService.prototype.put = function (url, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
        headers = this.generateHeadersAuth(headers);
        return this.http.put(this.baseUrl + url, body, {
            headers: headers
        });
    };
    ManagerService.prototype.delete = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
        headers = this.generateHeadersAuth(headers);
        return this.http.delete(this.baseUrl + url, {
            headers: headers
        });
    };
    ManagerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ManagerService);
    return ManagerService;
}());



/***/ }),

/***/ "./src/app/services/nationality.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NationalityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manager_service__ = __webpack_require__("./src/app/services/manager.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NationalityService = /** @class */ (function (_super) {
    __extends(NationalityService, _super);
    function NationalityService(http) {
        return _super.call(this, http) || this;
    }
    NationalityService.prototype.getNationalities = function () {
        return this.get('/nationalities');
    };
    NationalityService.prototype.createNationality = function (body) {
        return this.post('/nationalities', body);
    };
    NationalityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], NationalityService);
    return NationalityService;
}(__WEBPACK_IMPORTED_MODULE_2__manager_service__["a" /* ManagerService */]));



/***/ }),

/***/ "./src/app/services/realvalue.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealvalueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RealvalueService = /** @class */ (function () {
    function RealvalueService(http) {
        var _this = this;
        this.http = http;
        this.valueBTC = 0;
        this.valueUSD = 0;
        this.valueEUR = 0;
        this.http.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR')
            .subscribe(function (res) {
            _this.valueBTC = res.BTC;
            _this.valueUSD = res.USD;
            _this.valueEUR = res.EUR;
        });
    }
    RealvalueService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], RealvalueService);
    return RealvalueService;
}());



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SERVER_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.prototype.initSocket = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(SERVER_URL);
    };
    SocketService.prototype.onEvent = function (event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on(event, function (data) { return observer.next(data); });
        });
    };
    SocketService.prototype.removeListener = function (event) {
        //console.log('removed listener : '+ event);
        this.socket.removeAllListeners(event);
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenService = /** @class */ (function () {
    function TokenService(cookieService) {
        this.cookieService = cookieService;
        this.currentUser = null;
        this.tokenChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    TokenService.prototype.logout = function () {
        localStorage.removeItem('yticons-token');
        this.cookieService.delete('yticons-token');
        this.currentUser = null;
        this.tokenChange.next(this.currentUser);
    };
    TokenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_cookies__["CookieService"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/services/token/tokenContract.json":
/***/ (function(module, exports) {

module.exports = [{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"getOwnerCards","outputs":[{"name":"ownerTokens","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SYMBOL","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"_allowedAddresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"supply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getCard","outputs":[{"name":"cardName","type":"string"},{"name":"generation","type":"uint16"},{"name":"isLocked","type":"bool"},{"name":"price","type":"uint256"},{"name":"owner","type":"address"},{"name":"isVerified","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getHighestPrice","outputs":[{"name":"highestPrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"implementsERC721","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"NAME","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"_generation","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"unlock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"currentAddress","type":"address"},{"name":"newAddress","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"lock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenId","type":"uint256"},{"name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"newPrice","type":"uint256"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"YTIconSold","type":"event"},{"constant":false,"inputs":[{"name":"cardName","type":"string"},{"name":"beneficiaryAddress","type":"address"}],"name":"setBeneficiaryAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cardName","type":"string"}],"name":"createCardFromName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"newPrice","type":"uint256"}],"name":"PriceModified","type":"event"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"takeOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"cardName","type":"string"},{"name":"price","type":"uint256"},{"name":"cardOwner","type":"address"},{"name":"beneficiary","type":"address"},{"name":"isLocked","type":"bool"}],"name":"createCard","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newGeneration","type":"uint16"}],"name":"evolveGeneration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"purchase","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"payout","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newCharityFund","type":"address"}],"name":"setCharityFund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

/***/ }),

/***/ "./src/app/services/type.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manager_service__ = __webpack_require__("./src/app/services/manager.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypeService = /** @class */ (function (_super) {
    __extends(TypeService, _super);
    function TypeService(http) {
        return _super.call(this, http) || this;
    }
    TypeService.prototype.getTypes = function () {
        return this.get('/types');
    };
    TypeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], TypeService);
    return TypeService;
}(__WEBPACK_IMPORTED_MODULE_2__manager_service__["a" /* ManagerService */]));



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manager_service__ = __webpack_require__("./src/app/services/manager.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        return _super.call(this, http) || this;
    }
    UserService.prototype.modifyUser = function (user) {
        return this.put('/users/' + user._id, user);
    };
    UserService.prototype.modifyUserFormData = function (formData, user) {
        return this.put('/users/' + user._id, formData);
    };
    UserService.prototype.getUser = function (user) {
        return this.get('/users/' + user._id);
    };
    UserService.prototype.getUserByWallet = function (wallet) {
        return this.get('/users/byWallet/' + wallet);
    };
    UserService.prototype.getRoot = function () {
        return this.get('/users/root');
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_2__manager_service__["a" /* ManagerService */]));



/***/ }),

/***/ "./src/app/services/youtube.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager_service__ = __webpack_require__("./src/app/services/manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YoutubeService = /** @class */ (function (_super) {
    __extends(YoutubeService, _super);
    function YoutubeService(http) {
        return _super.call(this, http) || this;
    }
    YoutubeService.prototype.getChannel = function (body) {
        return this.post('/channel', body);
    };
    YoutubeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], YoutubeService);
    return YoutubeService;
}(__WEBPACK_IMPORTED_MODULE_1__manager_service__["a" /* ManagerService */]));



/***/ }),

/***/ "./src/app/termsofservice-module/termsofservice.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsOfServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__termsofservice_termsofservice_component__ = __webpack_require__("./src/app/termsofservice-module/termsofservice/termsofservice.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TermsOfServiceModule = /** @class */ (function () {
    function TermsOfServiceModule() {
    }
    TermsOfServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__termsofservice_termsofservice_component__["a" /* TermsOfServiceComponent */]]
        })
    ], TermsOfServiceModule);
    return TermsOfServiceModule;
}());



/***/ }),

/***/ "./src/app/termsofservice-module/termsofservice/termsofservice.component.css":
/***/ (function(module, exports) {

module.exports = "\n.term_modules .term .paragraph-container {\n  padding: 30px 30px 0px 30px;\n}\n\n.term_modules .term p {\n  padding: 0;\n}\n\nli {\n  font-size: 16px;\n}\n"

/***/ }),

/***/ "./src/app/termsofservice-module/termsofservice/termsofservice.component.html":
/***/ (function(module, exports) {

module.exports = "<!--================================\n    START BREADCRUMB AREA\n=================================-->\n<section class=\"breadcrumb-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"breadcrumb\">\n          <ul>\n            <li><a routerLink=\"/home\">Home</a></li>\n            <li><a routerLink=\"/termsofservice\">Terms of service</a></li>\n          </ul>\n        </div>\n        <h1 class=\"page-title\">Terms of service</h1>\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END BREADCRUMB AREA\n=================================-->\n\n\n<!--================================\n        START JOB AREA\n    =================================-->\n<section class=\"job_area section--padding2\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <div class=\"job_detail_module\">\n          <div class=\"job__content\">\n            <p>The YTIcons application runs on the Ethereum network and utilizes smart contracts (with each being known as a “Smart Contract”) to allow users to buy and own unique, one-of-a-kind celebrity digital contracts.<br>\n              Throughout these Terms of Service, the Smart Contracts and the Site hosting the app will be known as the “App”. <br>\n              By choosing to use the App, users can purchase amazing cards of your their favorites youtubers.<br><br>\n              YTIcons is making the App available for you.\n              To begin using the App, you must agree to these Terms of Service. <br><br>\n\n              Read the following Terms of Service carefully before using the App, purchasing Smart Contracts, or using the Site.\n              Unless we have a separate, written agreement with you that differs from the below Terms of Service, the following Terms of Service govern your use of the App, the purchase of Smart Contracts, and ownership of Smart Contracts.\n              The app, the Smart Contracts and the Site will be available to you only if you accepts all of these terms.\n              By using this App, the Smart Contracts, the Site, or any part of YTIcons, or by clicking “agree”, you confirm that you understand these Terms and accept these Terms.\n              In the case that you are accepting these terms on behalf of a company or an other legal entity, you indicate that you have the legal authority to accept these Terms on that entity’s behalf. In this case “you” mean that entity.\n              If you do not have the authority to represent another party or if you do not agree to these terms, then you do not have the permission to use the App, the Smart Contracts or the Site.\n            </p>\n          </div>\n\n          <h3 class=\"job__title\">Smart Contracts</h3>\n          <div class=\"job__content\">\n            <p>We have used the channel name and the likeness of famous youtubers to create a unique Smart Contrat on the Ethereum blockchain. This Smart Contract has absolutely none link with the person apearing on the card. <br><br>\n              We will release new youtubers Smart Contracts depends on our community demand or youtubers demand. <br><br>\n              Each youtuber Smart Contract may be purchased by you utilizing ether. You may purchase any youtuber Smart Contract you choose, and any other party may purchase a youtuber Smart Contract that you currently own if the other party is willing to pay you a higher sum as hard coded into the smart contract. <br><br>\n              You may not stop another party from purchasing a youtuber Smart Contract that you currently own, and no other third party may stop you from purchasing a youtuber Smart Contract that you wish to own. Whichever party is willing to pay the cost of the youtuber Smart Contract may own said Smart Contract after he or she completes the transaction.\n            </p>\n          </div>\n\n          <h3 class=\"job__title\">The App</h3>\n          <div class=\"job__content\">\n            <p>This App requires that you utilize a Google Chrome or Firefox web browser that currently has a MetaMask\n              browser extension installed. MetaMask is an electronic wallet created by a third party that allows you to purchase, store, and engage in transactions using Ethereum cryptocurrency.\n              You may not use any other electronic wallet on the App other than MetaMask;\n              however, you can use other electronic wallets and third-party applications to transfer funds to your MetaMask wallet in order to make purchases and receive payment on the App.\n              If you do not log on to the App with the correct browser (either Google Chrome or Mozilla Firefox) and/or if the browser\n              does not have the MetaMask extension installed, you will be recognized and notify by the App and you will not be able to use the App. <br><br>\n\n              Any and all transactions that take place in the App occur via the Ethereum blockchain. You understand that by using the App, your Ethereum public address will be made visible to other users of the App as well as third parties each and every time you engage in a transaction on the App.\n              We do not own and we do not control any of the following third-party products used for the function of this App: MetaMask, Coinbase, Google Chrome, Mozilla Firefox, or the Ethereum network.\n              We do not own and we do not control any other third-party site, product or service that you may choose to access, visit, or use for the purpose of interacting with or using the App. We will not be held liable, and are not liable, for the acts or omissions by any such third party, nor are we liable, or will we be held liable, for any damage that you may suffer as a result of interacting with or using any of the mentioned or unmentioned third parties.\n              You must provide accurate and complete registration information when you create an account to utilize the App. You are solely responsible for the safety and security of your MetaMask wallet and/or any other electronic wallet you utilize to interact with the App.\n              You are solely responsible for the safety and security of your account with us. If you become aware of security breach in regards to your password or your account, you agree to notify us immediately upon discovery at dev@yticons.co.\n            </p>\n          </div>\n\n          <h3 class=\"job__title\">Fees and Paiement</h3>\n          <div class=\"job__content\">\n            <p>If you choose to purchase any “youtuber Smart Contract” on the App, any and all transactions will be conducted through the Ethereum network utilizing a MetaMask electronic wallet. We will not have any insight into or control over these payments or transactions, nor will we be able to reverse any transaction that occurs. Because of this, we will have no liability to you or any other third party for any claims or damages that may occur due to any transaction that takes place on the App and/or in regards to any of the youtuber Smart Contracts that we have created. <br><br>\n              The Ethereum network requires that you pay a transaction fee, commonly known as “Gas”, for every transaction that occurs on the Ethereum network. Gas is intended to fund the hardware and software that runs the Ethereum network, as well as to prevent misuse and spam. If you choose to interact with the App via our Site or without using the App or our Site as a portal, you will still need to pay fee for any and every transaction you make on the Ethereum network. <br><br>\n              We charge a 8% commission on every transaction conducted on our Site and in our Game in addition to the Gas charged by the Ethereum network. 3% of this commission is reserved for charity donations or royalties paid to the concerned youtuber. By using our Site and our App, and by purchasing a youtuber Smart Contract, you acknowledge this and agree that the commission will be transferred directly to us through the Ethereum network. We do not charge this fee for interactions that do not occur on our App’s marketplace. <br><br>\n              You are solely and unequivocally responsible to pay any and all sales, use, value-added, and other taxes, as well as any duties and assessments now or hereafter claimed or imposed by any government authority associated with your use of the App. This includes, but is not limited to, any taxes, duties, and/or assessments that you become responsible for by owning or purchasing any youtuber Smart Contract. Excluding income taxes levied on YTIcons, by using this App you agree to pay or reimburse us for all taxes and assessments in any jurisdiction with the authority to levy said taxes and assessments. This includes value-added taxes, taxes required by international trade treaties, import or export taxes, and any amounts levied based on charges set, services performed, or transactions made. You are not now or ever entitled to deduct the amount of any taxes, duties, or assessments levied from payments that you have made to us, including the commission collected when you complete a transaction on our App.\n            </p>\n          </div>\n\n          <h3 class=\"job__title\">Ownership and Restrictions</h3>\n          <div class=\"job__content\">\n            <p>\n              By using this App, you acknowledge and agree that we and/or our licenses own all legal rights, titles, and interests in and to any and all elements of the App, including any and all intellectual property. This includes, but is not limited to: graphics, designs, information, systems, computer code, software, services, organization, content, compilation of content, data, design, and any and all other elements of the App. We retain complete and full ownership of all of these elements, as well as any other element related to the App not listed in these Terms of Service. Each and every one of these elements is owned by YTIcons, and protected by copyright, trade, dress, patent, trademark laws, international conventions, and every other applicable property and proprietary rights laws. Your use of the App, the Site, or of any and all celebrity Smart Contracts does not grant you ownership of or any rights to the content, code, data, and other materials you may use and see on the Site. Although you own the Smart Contract itself, you do not own the youtuber name, channel, likeness, contract design, nor any other elements. <br><br>\n\n              Any comments, bug reports, ideas, or any other type of feedback regarding the App provided by you is welcome by YTIcons. However, once you willingly submit such comments, bug reports, ideas, or feedback, you agree that we are free to utilize that information and those ideas in any way we see fit without any compensation to you. We are free to disclose that information and those ideas to any third party we deem necessary. But submitting any comments, bug reports, ideas, or any other type of feedback, you grant use perpetual, irrevocable license to that content and/or ideas, and we immediately retain complete rights to that information, content, and/or ideas. <br><br>\n\n              By using this App and this Site, you agree that you are completely and unequivocally responsible for your conduct during use of this App and this Site, as well as any repercussions or consequences that occur because of said conduct. <br><br>\n\n              By using this App and this Site, you agree that you will abide by the above and below Terms of Service, any and all applicable laws and regulations, and that you will only use the App and the Site for legal and proper purposes. <br><br>\n\n              In addition to this, you are not allowed to, and may not permit any third party to: <br>\n                - upload or distribute any unlawful, defamatory, abusive, fraudulent, obscene, or otherwise objectionable content; <br>\n                - distribute viruses, worms, defects, Trojan horses, corrupted files, hoaxes, or any other items of a damaging or dishonest nature;<br>\n                - impersonate another person in any way, shape, or form;<br>\n                - upload, post, transmit or otherwise make available through the App any content that infringes on the intellectual proprietary rights of any party, including YTIcons, any third party associated with us, and any user of the App or the Site;<br>\n                - use the App to violate the legal rights of others or to engage in, promote, or encourage any type of illegal activity;<br>\n                - use the App for any unauthorized commercial purpose, or modify, adapt, translate, or reverse engineer any portion of the Game for any personal or commercial purposes;<br>\n                - reformat or frame any portion of the App, including remove any copyright, trademark or other proprietary rights notices contained in or on the App;<br>\n                - display any content on the App that contains any hate-related or violent content;<br>\n                - use any robot, spider, or other device or program to compile or index any portion of the App or the content posted on the App, or to collect information about its users for any purpose;<br>\n                - create user accounts by automated means or under false or fraudulent pretenses.\n\n            </p>\n          </div>\n\n          <h3 class=\"job__title\">Termination</h3>\n          <div class=\"job__content\">\n            <p>\n              The only way to terminate the Terms contained herein is by cancelling your account on the App and discontinuing any and all use or access to the App. If you choose to cancel your account, you will not receive any refunds for any transactions made in the App or any payments made to us. <br><br>\n\n              By using this App, you agree that we have the right to terminate these terms and cancel or suspend your account for any reason we deem necessary. You also agree that we are not required to provide you with any advanced notice of any suspension or termination of your account, and that we are not liable to you or any other third party for any damages or consequences caused by the suspension or termination of your account. <br><br>\n\n              In the event that we decide to suspend or terminate your account, or restrict your access to your account or the App, due to suspected fraud, abuse, or illegal activity on your part, then we may also take any and all actions allowed by law. <br><br>\n\n              If your account is suspended or terminated by us or by your choice, you will no longer have access to information that you have posted on the App or any information that is related to your account. In both events, whether we terminate or suspend your account or you choose to terminate your account, you acknowledge and agree that we are under no obligation to maintain any of your information in our databases, nor are we obligated to forward any of that information to you or to any third party.\n\n            </p>\n          </div>\n\n\n          <h3 class=\"job__title\">Disclaimers</h3>\n          <div class=\"job__content\">\n            <p>\n              By using this App, you understand and agree that your access to and use of this App is at your own risk.\n              You acknowledge and accept that this App is provided on an As-Is and As-Available basis, and that we make no express or implied warranty regarding this App or access to this App.\n              We, and any party associated with us, make no warranty and disclaim any and all implied warranties regarding the App, including the Site and Smart Contracts.\n              This includes any implied warranty regarding product value, fitness for a specific purpose, non-infringement, correctness, and/or reliability.\n              Neither us nor any of our subsidiaries or affiliates guarantee or warrant that your access or use of the App will meet your requirements and/or expectations;\n              your access to the App or Site will be uninterrupted, free from error, or secure; or, that any data represented in the content, services, or features are accurate and/or free of viruses or other harmful content or components.\n            </p>\n          </div>\n\n          <h3 class=\"job__title\">Limitation of Liability</h3>\n          <div class=\"job__content\">\n            <p>\n              By using this App and this Site, you understand and agree that neither we nor any of our subsidiaries or affiliates are liable to you or any other third party for any indirect, incidental, consequential, or exemplary damages that you may incur, no matter how those damages occurred. We and our subsidiaries and affiliates are also not responsible for any financial loss, loss of goodwill, loss of business reputation, loss of personal reputation, cost of purchasing any substitute goods or services, or any and all other potential intangible losses, even if we had previous knowledge that there was a risk of damages and/or losses. <br><br>\n\n              By using this App and this Site, you agree that our total liability to you for any and all claims arising out of or relating to these Terms or your access to or use of this App or this Site is limited to the greater of: the amount you paid to us during the 12-month period preceding the date of the claim; or, $100. <br><br>\n\n              By using this App and this Site, you understand and agree that we have made this App available to you and entered into these Terms with you as a way to provide the App to you. These limitations of liability outlined in these Terms reflect a reasonable and fair allocation of risk between us and you.\n\n            </p>\n          </div>\n\n          <h3 class=\"job__title\">Indemnification</h3>\n          <div class=\"job__content\">\n            <p>\n              By using this App and this Site, you agree to hold YTIcons harmless and to indemnify us and any of our subsidiaries and affiliates, as well as any of our officers, agents, employees, advertisers, suppliers, or licensors, from and against any claim, liability, loss, actual damage, and consequential damage of any kind or nature, including suits, judgements, litigation costs, and attorneys’ fees that occur or arise due to your breach of these Terms and/or your violation of any applicable laws, rules, and regulations.\n            </p>\n          </div>\n\n          <h3 class=\"job__title\">External Sites</h3>\n          <div class=\"job__content\">\n            <p>\n              In some cases, this App and this Site may contain hyperlinks to other websites and/or resources as a convenience to you and our other users. We have no control over the safety of or content found on these sites. You acknowledge and agree that we are not responsible for the availability of any links to external sites, and that we do not endorse the advertisements on the sites, the products or services made available on those sites, or any other materials found on those sites. You acknowledge and agree that we are not liable for any loss or damage that may be incurred by you or any third party as the result of the availability or lack of availability of these sites, including any reliance placed by you upon the need for those sites and/or for those sites’ completeness and/or accuracy.\n            </p>\n          </div>\n\n          <h3 class=\"job__title\">Changes to the Terms</h3>\n          <div class=\"job__content\">\n            <p>\n              As the App will be updated the Terms may change. When we make these changes, the updated Terms will be available on the App and on the Site and feature a “Last Updated” date. It is your responsibility to check these Terms periodically for any changes. Your continued access to the App and the Site will constitute your binding acceptance of the updates. Any and all changes made are applicable on the date that they are made.\n            </p>\n          </div>\n\n          <h3 class=\"job__title\">Changes to the App</h3>\n          <div class=\"job__content\">\n            <p>\n              We are always working toward improving and expanding the Game in order to provide you and our other users with the best, most robust experience. By using the Game and the Site, you understand and agree that any part of this Game or this Site may change at any time without any prior notice to you. We can and will add new features and alter aspects of the Game or the Site at any time without notice.\n            </p>\n          </div>\n\n          <h3 class=\"job__title\">Children</h3>\n          <div class=\"job__content\">\n            <p>\n              By using this Game and this Site, you affirm that you are over the age of 13. This Game and this Site are not intended for use by any child under the age of 13. If you are older than 13 years of age but younger than 18 years of age, or if your jurisdiction has an older age of majority, then you agree to review these terms with your parent or guardian to make sure that you and your parent or guardian understand and agree to all of these Terms. By using this Game and this Site, you agree to have your parent or guardian review and accept these Terms on your behalf. If you are a parent or guardian agreeing to the Terms for the benefit of a child older than 13 but younger than 18 or your jurisdiction’s age of majority (whichever is older), then you agree to accept full responsibility for that child’s use of this Game and this Site, including, but not limited to, any financial charges or legal liability that he or she may incur.\n            </p>\n          </div>\n\n          <h3 class=\"job__title\">Privacy Policy</h3>\n          <div class=\"job__content\">\n            <p>\n              By using the App and the Site, you agree to let us collect and use your data according with our Privacy Policy.\n            </p>\n          </div>\n\n          <h3 class=\"job__title\">General</h3>\n          <div class=\"job__content\">\n            <p>\n              These Terms in their entirety constitute the legal agreement between you and YTIcons, and govern your access to and use of the App and the Site. They replace any prior agreements between the parties related to your access to or use of the App or the Site, whether oral or written. There are no third-party beneficiaries to these terms; any third party is an independent contractor, and these Terms do not form any agency, partnership, or joint venture. You understand and agree that the language in these terms should and will be interpreted as to its fair meaning, and not strictly for or against any party. You may not assign any of your rights or obligations under these Terms without prior written consent from us. However, we may assign our rights and obligations under these Terms to an affiliate or in connection with an acquisition, sale, or merger at our sole discretion.<br><br>\n\n              In the event that any part of these Terms be deemed invalid or unenforceable by proper legal authorities, that portion will be struck while the remaining portions remain in full force and effect. Any potential failure on our part to enforce these Terms is not and will not be deemed a waiver of these Terms, in part or in whole. Any legal action or proceeding arising under these Terms will be handled by the courts in United States, and the parties irrevocably consent to the personal jurisdiction and venue there. <br><br>\n\n              Finally, we are not liable and will not be held liable for any failure or delay in performance of our obligation under these Terms that result from any condition beyond our control. This includes government action, acts of terrorism, earthquakes, floods, fire, power failures, internet disturbances, or acts of omission by any third party. You agree that we may provide you with a notice of any changes to these Terms by email, regular mail, or by posting on the App or the Site. By providing us with your email address, you consent to forgo receiving any notices via postal mail.\n\n            </p>\n          </div>\n\n\n\n        </div><!-- end /.job_detail_module -->\n      </div><!-- end /.col-md-6 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END JOB AREA\n=================================-->\n"

/***/ }),

/***/ "./src/app/termsofservice-module/termsofservice/termsofservice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsOfServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsOfServiceComponent = /** @class */ (function () {
    function TermsOfServiceComponent() {
    }
    TermsOfServiceComponent.prototype.ngOnInit = function () {
    };
    TermsOfServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacypolicy',
            template: __webpack_require__("./src/app/termsofservice-module/termsofservice/termsofservice.component.html"),
            styles: [__webpack_require__("./src/app/termsofservice-module/termsofservice/termsofservice.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], TermsOfServiceComponent);
    return TermsOfServiceComponent;
}());



/***/ }),

/***/ "./src/app/verifyicon-module/verifyicon.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyIconModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verifyicon_verifyicon_component__ = __webpack_require__("./src/app/verifyicon-module/verifyicon/verifyicon.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VerifyIconModule = /** @class */ (function () {
    function VerifyIconModule() {
    }
    VerifyIconModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__verifyicon_verifyicon_component__["a" /* VerifyIconComponent */]]
        })
    ], VerifyIconModule);
    return VerifyIconModule;
}());



/***/ }),

/***/ "./src/app/verifyicon-module/verifyicon/verifyicon.component.css":
/***/ (function(module, exports) {

module.exports = "\n.container {\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 4px rgba(108, 111, 115, 0.1);\n  box-shadow: 0 2px 4px rgba(108, 111, 115, 0.1);\n}\n\n.verify-detail-module {\n  text-align: justify;\n}\n\n.verify-detail-module .verify-title {\n  border-bottom: 1px solid #ececec;\n  padding: 0px 30px 11px;\n  font-size: 24px;\n  line-height: 66px;\n}\n\n.verify-detail-module .verify-content {\n  padding: 34px 30px 16px;\n}\n\n.verify-area {\n  background: #f0f1f5;\n}\n\n.verify-area .container {\n  background: #ffffff;\n}\n\n.verify-detail-module .verify-content .content_list {\n  padding-left: 30px;\n  margin-top: 25px;\n}\n\n.verify-detail-module .verify-content .content_list li {\n  padding-left: 26px;\n  position: relative;\n  line-height: 30px;\n  color: #555;\n}\n\n.verify-detail-module .verify-content .content_list li:before {\n  content: \"\";\n  height: 7px;\n  width: 7px;\n  background: #c5cad4;\n  position: absolute;\n  left: 0;\n  border-radius: 50%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\n.verify-detail-module .verify-content .content_list {\n  padding-left: 20px;\n  margin-bottom: 10px;\n  margin-top: 0px;\n}\n\n.verify-detail-module .verify-content .content_list li {\n  padding-left: 20px;\n}\n"

/***/ }),

/***/ "./src/app/verifyicon-module/verifyicon/verifyicon.component.html":
/***/ (function(module, exports) {

module.exports = "<!--================================\n    START BREADCRUMB AREA\n=================================-->\n<section class=\"breadcrumb-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"breadcrumb\">\n          <ul>\n            <li><a routerLink=\"/home\">Home</a></li>\n            <li><a routerLink=\"/verify\">YTIcon verification</a></li>\n          </ul>\n        </div>\n        <h1 class=\"page-title\">Verify your YTIcon</h1>\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END BREADCRUMB AREA\n=================================-->\n\n\n<!--================================\n        START JOB AREA\n    =================================-->\n<section class=\"verify-area section--padding2\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <div class=\"verify-detail-module\">\n          <div class=\"verify-content\">\n            <p>We obviously do consider that you have the right to get royalties, which is why we endeavor in getting partnerships before any related YTIcon’s release.\n              Nevertheless, we try to provide our community a playable game so it is still possible that your YTIcon has not been verified yet but is currently available on our platform :\n              in this specific case and as long as the process of getting a partnership lasted, 3% of every transaction on your YTIcon has been sent to an address created for charities’ purpose.\n            In verifying your YTIcon, you will be able to give us an address of your choice to get your percentages of all upcoming transactions and we will mark your YTIcon as officially verified. <br><br>\n            <br>You want to verify your YTIcon or actually have your YTIcon created and released on our platform ? <br> Please send us an email at <b>dev@yticons.co</b>.</p>\n          </div>\n        </div><!-- end /.verify-detail_module -->\n\n      </div><!-- end /.col-md-12 -->\n    </div><!-- end /.row -->\n  </div><!-- end /.container -->\n</section>\n<!--================================\n    END JOB AREA\n=================================-->\n"

/***/ }),

/***/ "./src/app/verifyicon-module/verifyicon/verifyicon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VerifyIconComponent = /** @class */ (function () {
    function VerifyIconComponent() {
    }
    VerifyIconComponent.prototype.ngOnInit = function () {
    };
    VerifyIconComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacypolicy',
            template: __webpack_require__("./src/app/verifyicon-module/verifyicon/verifyicon.component.html"),
            styles: [__webpack_require__("./src/app/verifyicon-module/verifyicon/verifyicon.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], VerifyIconComponent);
    return VerifyIconComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000',
    tokenAddress: '0x2141f457eb3b345f6cbec4c24cf256c806e37015'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map