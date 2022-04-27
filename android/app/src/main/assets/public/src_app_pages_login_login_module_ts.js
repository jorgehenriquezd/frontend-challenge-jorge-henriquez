"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils.service */ 8270);






let LoginPage = class LoginPage {
    constructor(formBuilder, utils) {
        this.formBuilder = formBuilder;
        this.utils = utils;
        this.revealedPassword = false;
        this.form = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
        });
    }
    ngOnInit() {
    }
    submit() {
        if (this.form.valid) {
            this.utils.goTo('/home');
            this.utils.presentToast('Welcome!', 1500, 'tertiary');
            localStorage.setItem('user', this.email.value);
            this.form.reset();
        }
    }
    get email() {
        return this.form.get('email');
    }
    get password() {
        return this.form.get('password');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".form-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n}\n\n.login-container {\n  background-image: url('banner.svg');\n  background-repeat: no-repeat;\n  height: 100%;\n}\n\n.btn-submit {\n  text-transform: capitalize;\n}\n\nion-card {\n  padding: 10px 25px 10px 10px;\n}\n\nion-item {\n  --background: transparent;\n}\n\nform {\n  min-width: 330px;\n}\n\n.error-text {\n  font-size: 13px;\n  text-align: center;\n}\n\nimg {\n  text-align: center;\n  width: 200px;\n}\n\nion-item ion-icon {\n  position: relative;\n  top: 27px;\n}\n\nion-item ion-label {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdBO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLDBCQUFBO0FBQUo7O0FBR0E7RUFDSSw0QkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUNHLGdCQUFBO0FBQUg7O0FBR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDgwJTsgICAgXHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXJ7ICAgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbn1cclxuXHJcbi5idG4tc3VibWl0e1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4IDEwcHggMTBweDsgICBcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICBtaW4td2lkdGg6IDMzMHB4O1xyXG59XHJcblxyXG4uZXJyb3ItdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG5pb24taXRlbSBpb24taWNvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjdweDtcclxufVxyXG5cclxuaW9uLWl0ZW0gaW9uLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"login-container\">\n    <div class=\"form-container\">\n      <div>\n\n        <ion-text class=\"ion-text-center\" color=\"light\">\n          <h1><strong>HOLIDAYS</strong>APP</h1>\n          <div>LOGIN</div>\n        </ion-text>\n\n\n        <ion-card mode=\"ios\" class=\"animate__animated animate__fadeIn\">\n\n          <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n            <!--=========================Email============================-->\n\n            <ion-item>\n              <ion-icon slot=\"start\" color=\"tertiary\" name=\"mail\"></ion-icon>\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input formControlName=\"email\" type=\"email\"></ion-input>\n            </ion-item>\n\n            <div class=\"ion-padding error-text\" *ngIf=\"(email.touched) && email.errors\">\n              <ion-text color=\"danger\">\n                <span *ngIf=\"email.errors?.required\">Email is required</span>\n                <span *ngIf=\"email.errors?.pattern\">Email is invalid. Example: hello@gmail.com</span>\n              </ion-text>\n            </div>\n\n\n            <!--=========================Password============================-->\n            <ion-item>\n              <ion-icon slot=\"start\" color=\"tertiary\" name=\"lock-closed\"></ion-icon>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input formControlName=\"password\" [type]=\"revealedPassword ? 'text' : 'password'\"></ion-input>\n              <ion-icon (click)=\"revealedPassword = !revealedPassword\" slot=\"end\" color=\"medium\"\n                [name]=\"revealedPassword ? 'eye-off' : 'eye'\"></ion-icon>\n            </ion-item>\n\n            <div class=\"ion-padding error-text\" *ngIf=\"(password.touched) && password.errors\">\n              <ion-text color=\"danger\">\n                <span *ngIf=\"password.errors?.required\">Password is required</span>\n                <span *ngIf=\"password.errors?.minlength\">Password must be at least 6 character long</span>\n              </ion-text>\n            </div>\n\n\n            <div class=\"ion-padding ion-text-center\">\n              <ion-button [disabled]=\"!form.valid\" type=\"submit\" color=\"tertiary\" shape=\"round\">\n                Login\n                <ion-icon slot=\"end\" name=\"log-in-outline\"></ion-icon>\n              </ion-button>\n            </div>\n\n          </form>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map