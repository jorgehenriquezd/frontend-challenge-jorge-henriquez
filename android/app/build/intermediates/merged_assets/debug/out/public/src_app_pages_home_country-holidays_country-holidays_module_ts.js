"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_country-holidays_country-holidays_module_ts"],{

/***/ 4274:
/*!********************************************************************************!*\
  !*** ./src/app/pages/home/country-holidays/country-holidays-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryHolidaysPageRoutingModule": () => (/* binding */ CountryHolidaysPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _country_holidays_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-holidays.page */ 9944);




const routes = [
    {
        path: '',
        component: _country_holidays_page__WEBPACK_IMPORTED_MODULE_0__.CountryHolidaysPage
    }
];
let CountryHolidaysPageRoutingModule = class CountryHolidaysPageRoutingModule {
};
CountryHolidaysPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CountryHolidaysPageRoutingModule);



/***/ }),

/***/ 7010:
/*!************************************************************************!*\
  !*** ./src/app/pages/home/country-holidays/country-holidays.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryHolidaysPageModule": () => (/* binding */ CountryHolidaysPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _country_holidays_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-holidays-routing.module */ 4274);
/* harmony import */ var _country_holidays_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-holidays.page */ 9944);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 7581);








let CountryHolidaysPageModule = class CountryHolidaysPageModule {
};
CountryHolidaysPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _country_holidays_routing_module__WEBPACK_IMPORTED_MODULE_0__.CountryHolidaysPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_country_holidays_page__WEBPACK_IMPORTED_MODULE_1__.CountryHolidaysPage]
    })
], CountryHolidaysPageModule);



/***/ }),

/***/ 9944:
/*!**********************************************************************!*\
  !*** ./src/app/pages/home/country-holidays/country-holidays.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryHolidaysPage": () => (/* binding */ CountryHolidaysPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _country_holidays_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-holidays.page.html?ngResource */ 4529);
/* harmony import */ var _country_holidays_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-holidays.page.scss?ngResource */ 6114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var src_app_state_actions_holidays_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/state/actions/holidays.actions */ 3387);
/* harmony import */ var src_app_state_selectors_holidays_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/state/selectors/holidays.selector */ 7566);









let CountryHolidaysPage = class CountryHolidaysPage {
    constructor(actRoute, store) {
        this.actRoute = actRoute;
        this.store = store;
        this.country = {};
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable();
        this.holidays$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable();
        this.country.code = this.actRoute.snapshot.paramMap.get('code');
        this.country.name = this.actRoute.snapshot.paramMap.get('name');
    }
    ngOnInit() {
        this.holidays$ = this.store.select(src_app_state_selectors_holidays_selector__WEBPACK_IMPORTED_MODULE_3__.selectHolidaysList);
        this.loading$ = this.store.select(src_app_state_selectors_holidays_selector__WEBPACK_IMPORTED_MODULE_3__.selectLoading);
        this.store.dispatch((0,src_app_state_actions_holidays_actions__WEBPACK_IMPORTED_MODULE_2__.loadHolidays)(this.country));
    }
};
CountryHolidaysPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store }
];
CountryHolidaysPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-country-holidays',
        template: _country_holidays_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_country_holidays_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CountryHolidaysPage);



/***/ }),

/***/ 6114:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/home/country-holidays/country-holidays.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudHJ5LWhvbGlkYXlzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4529:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/home/country-holidays/country-holidays.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<app-header backButton=\"/home\" [title]=\"country.name + ' Holidays'\"></app-header>\n\n<ion-content>\n\n <div *ngIf=\"(!loading$.value)\">\n  <ion-item *ngFor=\"let h of holidays$ | async\">\n    <ion-label>\n      <div style=\"padding-bottom: 5px;\">{{h.date}}</div>\n      <ion-text color=\"tertiary\">{{h.name}}</ion-text>\n    </ion-label>\n  </ion-item>\n</div>\n\n  <div *ngIf=\"(loading$ | async)\">\n    <ion-item *ngFor=\"let h of [1,1,1,1,1,1,1,1,1,1,1,1,1]\">\n      <ion-label>\n        <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </ion-label>\n    </ion-item>\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_country-holidays_country-holidays_module_ts.js.map