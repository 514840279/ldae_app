webpackJsonp([0],{

/***/ 140:
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
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 183:
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
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(http, navCtrl, loadingCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.search = "";
        this.icons = 'search';
    }
    //解决切换其他页面回去轮播图不动问题
    HomePage.prototype.ionViewWillEnter = function () {
        this.slides.startAutoplay();
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.slides.stopAutoplay();
    };
    HomePage.prototype.getSearch = function (e) {
        if (e.keyCode == 13) {
            this.dosearch();
        }
    };
    HomePage.prototype.dosearch = function () {
        if (this.search == "") {
            var msg_1 = this.loadingCtrl.create({
                content: '请输入要咨询的问题或关键词' //设置loading时显示的文字
            });
            msg_1.present();
            setTimeout(function () { msg_1.dismiss(); }, 500);
            return;
        }
        var loading = this.loadingCtrl.create({
            content: '正在为您查找最佳答案' //设置loading时显示的文字
        });
        loading.present();
        var url = "http://998xp.vicp.net:8000/api?q=" + this.search;
        var that = this;
        this.http.get(url).subscribe(function (data) {
            that.result = data['_body'];
            that.search = "";
            this.result = that.result;
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
        });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]) === "function" && _a || Object)
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"H:\fuck\git\ldae_app\src\pages\home\home.html"*/'<!-- 头部固定 -->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>丽华抗癌问答</ion-title>\n\n  </ion-navbar>\n\n  <ion-list>\n\n    <!-- start 轮播图-->\n\n    <div class="articleHeader">\n\n      <ion-slides class="slide" [pager]="true" [loop]="true" autoplay="3000">\n\n        <!--</ion-slide>-->\n\n        <ion-slide>\n\n          <a href="http://www.dudu2007.com/ldae_site/index.html" target="_blank" >\n\n            <img src="./assets/img/ad_1.jpg" style="height:120px;"/>\n\n          </a>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <a href="http://www.dudu2007.com/ldae_site/index.html" target="_blank" >\n\n            <img src="./assets/img/ad_2.jpg" style="height:120px;"/>\n\n          </a>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <a href="http://www.dudu2007.com/ldae_site/index.html" target="_blank" >\n\n            <img src="./assets/img/ad_3.jpg" style="height:120px;"/>\n\n          </a>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <a href="http://www.dudu2007.com/ldae_site/index.html" target="_blank">\n\n            <img src="./assets/img/ad_4.jpg"  style="height:120px;"/>\n\n          </a>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <a href="http://www.dudu2007.com/ldae_site/index.html" target="_blank" >\n\n            <img src="./assets/img/ad_5.jpg" style="height:120px;"/>\n\n          </a>\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <a href="http://www.dudu2007.com/ldae_site/index.html" target="_blank">\n\n              <img src="./assets/img/ad_6.jpg" style="height:120px;"/>\n\n            </a>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n  <!-- <ion-list>\n\n   <ion-auto-complete [dataProvider]="autocompleteSer"  [(ngModel)]="search" (change)="getSearch($event)" ></ion-auto-complete>\n\n    \n\n    </ion-list>-->\n\n    <!-- end 轮播图-->\n\n  </ion-list>\n\n</ion-header>\n\n\n\n<!-- 内容 -->\n\n<ion-content padding> \n\n    <ion-list > \n\n      <div [innerHtml]="result" ></div>\n\n    </ion-list>\n\n</ion-content>\n\n<!-- 底部固定 -->\n\n<ion-footer >\n\n    <ion-list> \n\n      <ion-item>\n\n        <ion-input type="text" placeholder="请输入要咨询的问题或关键词" [(ngModel)]="search" (keydown)="getSearch($event)" ></ion-input>\n\n        <button ion-button item-right tappable (click)="dosearch()" style="margin-top:-0px;">\n\n          <ion-icon [name]="icons" color="twitter"></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n    </ion-list>\n\n</ion-footer> '/*ion-inline-end:"H:\fuck\git\ldae_app\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === "function" && _d || Object])
], HomePage);

var _a, _b, _c, _d;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AutocompleteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AutocompleteServiceProvider = (function () {
    function AutocompleteServiceProvider(http) {
        this.http = http;
        this.labelAttribute = "name";
        console.log('Hello AutocompleteServiceProvider Provider');
    }
    AutocompleteServiceProvider.prototype.getResults = function (keyword) {
        return this.http.get("http://998xp.vicp.net:8001/api?action=sug_app&q=" + keyword).map(function (result) {
            console.log(result);
            var aa = result.json().filter(function (item) { return item.name.toLowerCase().startsWith(keyword.toLowerCase()); });
            return aa;
        });
    };
    return AutocompleteServiceProvider;
}());
AutocompleteServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AutocompleteServiceProvider);

//# sourceMappingURL=autocomplete-service.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DiagnosisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiagnosisPage = (function () {
    function DiagnosisPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DiagnosisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiagnosisPage');
    };
    return DiagnosisPage;
}());
DiagnosisPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-diagnosis',template:/*ion-inline-start:"H:\fuck\git\ldae_app\src\pages\diagnosis\diagnosis.html"*/'<!--\n\n  Generated template for the DiagnosisPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>诊断</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <img src="./assets/img/jingqingqidai.gif">\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"H:\fuck\git\ldae_app\src\pages\diagnosis\diagnosis.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], DiagnosisPage);

//# sourceMappingURL=diagnosis.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TreatmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TreatmentPage = (function () {
    function TreatmentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TreatmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TreatmentPage');
    };
    return TreatmentPage;
}());
TreatmentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-treatment',template:/*ion-inline-start:"H:\fuck\git\ldae_app\src\pages\treatment\treatment.html"*/'<!--\n\n  Generated template for the TreatmentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>治疗</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <img src="./assets/img/jingqingqidai.gif">\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"H:\fuck\git\ldae_app\src\pages\treatment\treatment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TreatmentPage);

//# sourceMappingURL=treatment.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnowledgePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the KnowledgePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KnowledgePage = (function () {
    function KnowledgePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KnowledgePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KnowledgePage');
    };
    return KnowledgePage;
}());
KnowledgePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-knowledge',template:/*ion-inline-start:"H:\fuck\git\ldae_app\src\pages\knowledge\knowledge.html"*/'<!--\n\n  Generated template for the KnowledgePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>知识</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <img src="./assets/img/jingqingqidai.gif">\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"H:\fuck\git\ldae_app\src\pages\knowledge\knowledge.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], KnowledgePage);

//# sourceMappingURL=knowledge.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurvivalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SurvivalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurvivalPage = (function () {
    function SurvivalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SurvivalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurvivalPage');
    };
    return SurvivalPage;
}());
SurvivalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-survival',template:/*ion-inline-start:"H:\fuck\git\ldae_app\src\pages\survival\survival.html"*/'<!--\n\n  Generated template for the SurvivalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>存活</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <img src="./assets/img/jingqingqidai.gif">\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"H:\fuck\git\ldae_app\src\pages\survival\survival.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SurvivalPage);

//# sourceMappingURL=survival.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CostPage = (function () {
    function CostPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CostPage');
    };
    return CostPage;
}());
CostPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cost',template:/*ion-inline-start:"H:\fuck\git\ldae_app\src\pages\cost\cost.html"*/'<!--\n\n  Generated template for the CostPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>费用</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <img src="./assets/img/jingqingqidai.gif">\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"H:\fuck\git\ldae_app\src\pages\cost\cost.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CostPage);

//# sourceMappingURL=cost.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HeartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HeartPage = (function () {
    function HeartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HeartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HeartPage');
    };
    return HeartPage;
}());
HeartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-heart',template:/*ion-inline-start:"H:\fuck\git\ldae_app\src\pages\heart\heart.html"*/'<!--\n\n  Generated template for the HeartPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>心里</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <img src="./assets/img/jingqingqidai.gif">\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"H:\fuck\git\ldae_app\src\pages\heart\heart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], HeartPage);

//# sourceMappingURL=heart.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChartPage = (function () {
    function ChartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChartPage');
    };
    return ChartPage;
}());
ChartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chart',template:/*ion-inline-start:"H:\fuck\git\ldae_app\src\pages\chart\chart.html"*/'<!--\n\n  Generated template for the ChartPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>闲聊</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <img src="./assets/img/jingqingqidai.gif">\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"H:\fuck\git\ldae_app\src\pages\chart\chart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ChartPage);

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransmitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TransmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransmitPage = (function () {
    function TransmitPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransmitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransmitPage');
    };
    return TransmitPage;
}());
TransmitPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-transmit',template:/*ion-inline-start:"H:\fuck\git\ldae_app\src\pages\transmit\transmit.html"*/'<!--\n\n  Generated template for the TransmitPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>转发</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <img src="./assets/img/jingqingqidai.gif">\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"H:\fuck\git\ldae_app\src\pages\transmit\transmit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TransmitPage);

//# sourceMappingURL=transmit.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(266);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_diagnosis_diagnosis__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_treatment_treatment__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_knowledge_knowledge__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_survival_survival__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cost_cost__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_heart_heart__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chart_chart__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_vip_vip__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_transmit_transmit__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic2_auto_complete__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_autocomplete_service_autocomplete_service__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_diagnosis_diagnosis__["a" /* DiagnosisPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_treatment_treatment__["a" /* TreatmentPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_knowledge_knowledge__["a" /* KnowledgePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_survival_survival__["a" /* SurvivalPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_cost_cost__["a" /* CostPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_heart_heart__["a" /* HeartPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_chart_chart__["a" /* ChartPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_vip_vip__["a" /* VipPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_transmit_transmit__["a" /* TransmitPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_17_ionic2_auto_complete__["a" /* AutoCompleteModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_diagnosis_diagnosis__["a" /* DiagnosisPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_treatment_treatment__["a" /* TreatmentPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_knowledge_knowledge__["a" /* KnowledgePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_survival_survival__["a" /* SurvivalPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_cost_cost__["a" /* CostPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_heart_heart__["a" /* HeartPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_chart_chart__["a" /* ChartPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_vip_vip__["a" /* VipPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_transmit_transmit__["a" /* TransmitPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_autocomplete_service_autocomplete_service__["a" /* AutocompleteServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_diagnosis_diagnosis__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_treatment_treatment__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_knowledge_knowledge__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_survival_survival__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cost_cost__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_heart_heart__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chart_chart__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_transmit_transmit__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// 引用








//import { VipPage } from '../pages/vip/vip';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // 使用
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.diagnosis = __WEBPACK_IMPORTED_MODULE_5__pages_diagnosis_diagnosis__["a" /* DiagnosisPage */];
        this.treatment = __WEBPACK_IMPORTED_MODULE_6__pages_treatment_treatment__["a" /* TreatmentPage */];
        this.Knowledge = __WEBPACK_IMPORTED_MODULE_7__pages_knowledge_knowledge__["a" /* KnowledgePage */];
        this.survival = __WEBPACK_IMPORTED_MODULE_8__pages_survival_survival__["a" /* SurvivalPage */];
        this.cost = __WEBPACK_IMPORTED_MODULE_9__pages_cost_cost__["a" /* CostPage */];
        this.heart = __WEBPACK_IMPORTED_MODULE_10__pages_heart_heart__["a" /* HeartPage */];
        this.chart = __WEBPACK_IMPORTED_MODULE_11__pages_chart_chart__["a" /* ChartPage */];
        //vip: any = VipPage;
        this.transmit = __WEBPACK_IMPORTED_MODULE_12__pages_transmit_transmit__["a" /* TransmitPage */];
        this.initializeApp();
        splashScreen.hide();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: '默认', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icons: 'fds' },
            { title: '诊断', component: __WEBPACK_IMPORTED_MODULE_5__pages_diagnosis_diagnosis__["a" /* DiagnosisPage */], icons: 'fds' },
            { title: '治疗', component: __WEBPACK_IMPORTED_MODULE_6__pages_treatment_treatment__["a" /* TreatmentPage */], icons: 'fds' },
            { title: '知识', component: __WEBPACK_IMPORTED_MODULE_7__pages_knowledge_knowledge__["a" /* KnowledgePage */], icons: 'fds' },
            { title: '存活', component: __WEBPACK_IMPORTED_MODULE_8__pages_survival_survival__["a" /* SurvivalPage */], icons: 'fds' },
            { title: '费用', component: __WEBPACK_IMPORTED_MODULE_9__pages_cost_cost__["a" /* CostPage */], icons: 'fds' },
            { title: '心理', component: __WEBPACK_IMPORTED_MODULE_10__pages_heart_heart__["a" /* HeartPage */], icons: 'fds' },
            { title: '闲聊', component: __WEBPACK_IMPORTED_MODULE_11__pages_chart_chart__["a" /* ChartPage */], icons: 'fds' },
            //{ title: 'VIP', component: VipPage },
            { title: '转发', component: __WEBPACK_IMPORTED_MODULE_12__pages_transmit_transmit__["a" /* TransmitPage */], icons: 'fds' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.close = function () {
        this.platform.exitApp();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"H:\fuck\git\ldae_app\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>丽华抗癌问答</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer>\n\n    <ion-list>\n\n      <button menuClose ion-item (click)="close()">退出 </button>\n\n    </ion-list>\n\n  </ion-footer>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> '/*ion-inline-end:"H:\fuck\git\ldae_app\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VipPage = (function () {
    function VipPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VipPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VipPage');
    };
    return VipPage;
}());
VipPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-vip',template:/*ion-inline-start:"H:\fuck\git\ldae_app\src\pages\vip\vip.html"*/'<!--\n\n  Generated template for the VipPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>vip</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <img src="./assets/img/jingqingqidai.gif">\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"H:\fuck\git\ldae_app\src\pages\vip\vip.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], VipPage);

//# sourceMappingURL=vip.js.map

/***/ })

},[261]);
//# sourceMappingURL=main.js.map