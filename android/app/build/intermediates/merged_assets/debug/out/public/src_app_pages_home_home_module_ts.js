"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 7581:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3646);





let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 2011);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 5413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils.service */ 8270);






let HeaderComponent = class HeaderComponent {
    constructor(alertController, utils) {
        this.alertController = alertController;
        this.utils = utils;
    }
    ngOnInit() { }
    confirmLogout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'Are you sure you want to log out?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Confirm',
                        handler: () => {
                            localStorage.removeItem('user');
                            this.utils.goTo('/login');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService }
];
HeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    backButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-header',
        template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    },
    {
        path: 'country-holidays/:code/:name',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_country-holidays_country-holidays_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./country-holidays/country-holidays.module */ 7010)).then(m => m.CountryHolidaysPageModule)
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 7581);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 5503);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var src_app_state_selectors_holidays_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/state/selectors/holidays.selector */ 7566);
/* harmony import */ var src_app_state_actions_holidays_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/state/actions/holidays.actions */ 3387);








let HomePage = class HomePage {
    constructor(store) {
        this.store = store;
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable();
        this.countries$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable();
        this.result = '';
    }
    ngOnInit() {
        this.loading$ = this.store.select(src_app_state_selectors_holidays_selector__WEBPACK_IMPORTED_MODULE_2__.selectLoading);
        this.countries$ = this.store.select(src_app_state_selectors_holidays_selector__WEBPACK_IMPORTED_MODULE_2__.selectCountriesList);
        this.store.dispatch((0,src_app_state_actions_holidays_actions__WEBPACK_IMPORTED_MODULE_3__.loadCountries)());
    }
    searchCountry(event) {
        this.result = event.target.value;
    }
};
HomePage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 8210:
/*!**********************************************!*\
  !*** ./src/app/pipes/country-filter.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryFilterPipe": () => (/* binding */ CountryFilterPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let CountryFilterPipe = class CountryFilterPipe {
    transform(countries, text) {
        if (text.length === 0) {
            return countries;
        }
        text = text.toLocaleLowerCase();
        return countries.filter(country => {
            return country.name.toLocaleLowerCase().includes(text);
        });
    }
};
CountryFilterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'countryFilter'
    })
], CountryFilterPipe);



/***/ }),

/***/ 5503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _country_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-filter.pipe */ 8210);




let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _country_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.CountryFilterPipe
        ],
        exports: [_country_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.CountryFilterPipe],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]
    })
], PipesModule);



/***/ }),

/***/ 7566:
/*!******************************************************!*\
  !*** ./src/app/state/selectors/holidays.selector.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectCountriesFeature": () => (/* binding */ selectCountriesFeature),
/* harmony export */   "selectHolidaysFeature": () => (/* binding */ selectHolidaysFeature),
/* harmony export */   "selectCountriesList": () => (/* binding */ selectCountriesList),
/* harmony export */   "selectHolidaysList": () => (/* binding */ selectHolidaysList),
/* harmony export */   "selectLoading": () => (/* binding */ selectLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

const selectCountriesFeature = (state) => state.countries;
const selectHolidaysFeature = (state) => state.holidays;
const selectCountriesList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCountriesFeature, (state) => state.countries);
const selectHolidaysList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectHolidaysFeature, (state) => state.holidays);
const selectLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectHolidaysFeature, (state) => state.loading);


/***/ }),

/***/ 5413:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".app-name {\n  font-size: 13px;\n}\n\n.shape-container {\n  position: relative;\n  padding-bottom: 100px;\n  bottom: 5px;\n  background: white;\n}\n\n.custom-shape-divider-top-1625420213 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  line-height: 0;\n}\n\n.custom-shape-divider-top-1625420213 svg {\n  position: relative;\n  display: block;\n  width: calc(100% + 1.3px);\n  height: 100px;\n  transform: rotateY(180deg);\n}\n\n.custom-shape-divider-top-1625420213 .shape-fill {\n  fill: var(--ion-color-tertiary);\n}\n\n/** For mobile devices **/\n\n@media (max-width: 767px) {\n  .custom-shape-divider-top-1625420213 svg {\n    width: calc(176% + 1.3px);\n    height: 92px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7QUFDSjs7QUFJQSx5QkFBQTs7QUFDQTtFQUNJO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0VBRE47QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLW5hbWV7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5zaGFwZS1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uY3VzdG9tLXNoYXBlLWRpdmlkZXItdG9wLTE2MjU0MjAyMTMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uY3VzdG9tLXNoYXBlLWRpdmlkZXItdG9wLTE2MjU0MjAyMTMgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDEuM3B4KTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuLmN1c3RvbS1zaGFwZS1kaXZpZGVyLXRvcC0xNjI1NDIwMjEzIC5zaGFwZS1maWxsIHtcclxuICAgIGZpbGw6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4vKiogRm9yIG1vYmlsZSBkZXZpY2VzICoqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5jdXN0b20tc2hhcGUtZGl2aWRlci10b3AtMTYyNTQyMDIxMyBzdmcge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDE3NiUgKyAxLjNweCk7XHJcbiAgICAgICAgaGVpZ2h0OiA5MnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".p-searchbar {\n  padding: 0px 10px 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUFDSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wLXNlYXJjaGJhcntcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMTBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 2011:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"tertiary\">\n\n    <ion-buttons *ngIf=\"backButton\"  slot=\"start\">\n      <ion-back-button [defaultHref]=\"backButton\"></ion-back-button>      \n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"confirmLogout()\">    \n        <ion-icon style=\"font-size: 30px;\" name=\"log-out-outline\"></ion-icon> \n      </ion-button>\n    </ion-buttons>\n\n    <ion-title><strong>{{title}}</strong> \n      <div class=\"app-name\">HolidaysApp</div>\n    </ion-title>\n\n  </ion-toolbar>\n\n\n\n  <!--================Waves==============-->\n  <div class=\"shape-container\">\n    <div class=\"custom-shape-divider-top-1625420213\">\n      <svg data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 120\" preserveAspectRatio=\"none\">\n        <path\n          d=\"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z\"\n          opacity=\".25\" class=\"shape-fill\"></path>\n        <path\n          d=\"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z\"\n          opacity=\".5\" class=\"shape-fill\"></path>\n        <path\n          d=\"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z\"\n          class=\"shape-fill\"></path>\n      </svg>\n    </div>\n  </div>\n\n</ion-header>";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<app-header title=\"Home\"></app-header>\n\n<ion-content>\n\n  <div class=\"p-searchbar\">\n    <ion-searchbar (ionChange)=\"searchCountry($event)\" placeholder=\"Search Country\" animated mode=\"ios\">\n    </ion-searchbar>\n  </div>\n\n\n  <div *ngIf=\"(!loading$.value)\">\n    <ion-item detail routerLink=\"country-holidays/{{c.code}}/{{c.name}}\"\n      *ngFor=\"let c of countries$ | async | countryFilter: result\">\n      <ion-label>\n        {{c.code}} <br>\n        <ion-text color=\"tertiary\">{{c.name}}</ion-text>\n      </ion-label>\n    </ion-item>\n  </div>\n\n  <div *ngIf=\"(loading$ | async)\">\n    <ion-item *ngFor=\"let c of [1,1,1,1,1,1,1,1,1,1,1,1,1]\">\n      <ion-label>\n        <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </ion-label>\n    </ion-item>\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map