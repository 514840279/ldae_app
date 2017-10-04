webpackJsonp([0],{

/***/ 107:
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
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(188);
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
            setTimeout(function () { msg_1.dismiss(); }, 2000);
            return;
        }
        var loading = this.loadingCtrl.create({
            content: '正在为您查找最佳答案' //设置loading时显示的文字
        });
        loading.present();
        var that = this;
        var url = "http://998xp.vicp.net:8000/api?q=" + this.search;
        that.http.get(url).subscribe(function (data) {
            that.result = data['_body'];
            this.search = "";
            this.result = that.result;
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\wang\wth\ldae_app\src\pages\home\home.html"*/'<!-- 头部固定 -->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>丽华抗癌问答</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- 内容 -->\n\n<ion-content padding>\n\n  <ion-list>\n\n    <div ><img src="http://998xp.vicp.net:8000/statics/img/ad_main.gif" style="width:100%;height:50px;"/> </div>\n\n  </ion-list>\n\n    <ion-list > \n\n      <div [innerHtml]="result" ></div>\n\n    </ion-list>\n\n</ion-content>\n\n<!-- 底部固定 -->\n\n<ion-footer >\n\n    <ion-list> \n\n      <ion-item>\n\n        <ion-input type="text" placeholder="请输入要咨询的问题或关键词" [(ngModel)]="search" (keydown)="getSearch($event)">  \n\n        </ion-input>\n\n        <ion-icon [name]="icons" item-right (click)="dosearch()" color="twitter"></ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n</ion-footer> '/*ion-inline-end:"C:\Users\wang\wth\ldae_app\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        selector: 'page-diagnosis',template:/*ion-inline-start:"C:\Users\wang\wth\ldae_app\src\pages\diagnosis\diagnosis.html"*/'<!--\n  Generated template for the DiagnosisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>诊断</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\wang\wth\ldae_app\src\pages\diagnosis\diagnosis.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], DiagnosisPage);

//# sourceMappingURL=diagnosis.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        selector: 'page-treatment',template:/*ion-inline-start:"C:\Users\wang\wth\ldae_app\src\pages\treatment\treatment.html"*/'<!--\n  Generated template for the TreatmentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>治疗</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\wang\wth\ldae_app\src\pages\treatment\treatment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TreatmentPage);

//# sourceMappingURL=treatment.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnowledgePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        selector: 'page-knowledge',template:/*ion-inline-start:"C:\Users\wang\wth\ldae_app\src\pages\knowledge\knowledge.html"*/'<!--\n  Generated template for the KnowledgePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>知识</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\wang\wth\ldae_app\src\pages\knowledge\knowledge.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], KnowledgePage);

//# sourceMappingURL=knowledge.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurvivalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        selector: 'page-survival',template:/*ion-inline-start:"C:\Users\wang\wth\ldae_app\src\pages\survival\survival.html"*/'<!--\n  Generated template for the SurvivalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <ion-title>存活</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\wang\wth\ldae_app\src\pages\survival\survival.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SurvivalPage);

//# sourceMappingURL=survival.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        selector: 'page-cost',template:/*ion-inline-start:"C:\Users\wang\wth\ldae_app\src\pages\cost\cost.html"*/'<!--\n  Generated template for the CostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>费用</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\wang\wth\ldae_app\src\pages\cost\cost.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CostPage);

//# sourceMappingURL=cost.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        selector: 'page-heart',template:/*ion-inline-start:"C:\Users\wang\wth\ldae_app\src\pages\heart\heart.html"*/'<!--\n  Generated template for the HeartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <ion-title>心里</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\wang\wth\ldae_app\src\pages\heart\heart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], HeartPage);

//# sourceMappingURL=heart.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        selector: 'page-chart',template:/*ion-inline-start:"C:\Users\wang\wth\ldae_app\src\pages\chart\chart.html"*/'<!--\n  Generated template for the ChartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <ion-title>闲聊</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\wang\wth\ldae_app\src\pages\chart\chart.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
], ChartPage);

var _a, _b;
//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        selector: 'page-vip',template:/*ion-inline-start:"C:\Users\wang\wth\ldae_app\src\pages\vip\vip.html"*/'<!--\n  Generated template for the VipPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <ion-title>vip</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\wang\wth\ldae_app\src\pages\vip\vip.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], VipPage);

//# sourceMappingURL=vip.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the QuitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuitPage = (function () {
    function QuitPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QuitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuitPage');
    };
    return QuitPage;
}());
QuitPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-quit',template:/*ion-inline-start:"C:\Users\wang\wth\ldae_app\src\pages\quit\quit.html"*/'<!--\n  Generated template for the QuitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <ion-title>退出</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\wang\wth\ldae_app\src\pages\quit\quit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], QuitPage);

//# sourceMappingURL=quit.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_diagnosis_diagnosis__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_treatment_treatment__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_knowledge_knowledge__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_survival_survival__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cost_cost__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_heart_heart__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chart_chart__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_vip_vip__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_quit_quit__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(192);
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
            __WEBPACK_IMPORTED_MODULE_14__pages_quit_quit__["a" /* QuitPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* JsonpModule */]
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
            __WEBPACK_IMPORTED_MODULE_14__pages_quit_quit__["a" /* QuitPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_diagnosis_diagnosis__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_treatment_treatment__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_knowledge_knowledge__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_survival_survival__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cost_cost__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_heart_heart__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chart_chart__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_vip_vip__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_quit_quit__ = __webpack_require__(202);
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
        this.vip = __WEBPACK_IMPORTED_MODULE_12__pages_vip_vip__["a" /* VipPage */];
        this.quit = __WEBPACK_IMPORTED_MODULE_13__pages_quit_quit__["a" /* QuitPage */];
        this.initializeApp();
        splashScreen.hide();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: '丽华抗癌问答', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: '诊断', component: __WEBPACK_IMPORTED_MODULE_5__pages_diagnosis_diagnosis__["a" /* DiagnosisPage */] },
            { title: '治疗', component: __WEBPACK_IMPORTED_MODULE_6__pages_treatment_treatment__["a" /* TreatmentPage */] },
            { title: '知识', component: __WEBPACK_IMPORTED_MODULE_7__pages_knowledge_knowledge__["a" /* KnowledgePage */] },
            { title: '存活', component: __WEBPACK_IMPORTED_MODULE_8__pages_survival_survival__["a" /* SurvivalPage */] },
            { title: '费用', component: __WEBPACK_IMPORTED_MODULE_9__pages_cost_cost__["a" /* CostPage */] },
            { title: '心里', component: __WEBPACK_IMPORTED_MODULE_10__pages_heart_heart__["a" /* HeartPage */] },
            { title: '闲聊', component: __WEBPACK_IMPORTED_MODULE_11__pages_chart_chart__["a" /* ChartPage */] },
            { title: 'vip', component: __WEBPACK_IMPORTED_MODULE_12__pages_vip_vip__["a" /* VipPage */] },
            { title: '退出', component: __WEBPACK_IMPORTED_MODULE_13__pages_quit_quit__["a" /* QuitPage */] }
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
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\wang\wth\ldae_app\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>丽华抗癌问答</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> '/*ion-inline-end:"C:\Users\wang\wth\ldae_app\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map