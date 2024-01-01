"use strict";
exports.id = "component---src-pages-background-js";
exports.ids = ["component---src-pages-background-js"];
exports.modules = {

/***/ "./src/pages/background.js?export=default":
/*!************************************************!*\
  !*** ./src/pages/background.js?export=default ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_fancysalad_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/fancysalad.webp */ "./src/images/fancysalad.webp");



const Section = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "background__Section"
})(["position:relative;background-image:url(", ");background-size:cover;background-position:center;width:100%;height:auto;"], _images_fancysalad_webp__WEBPACK_IMPORTED_MODULE_1__["default"]);
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "background__Overlay"
})(["position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.7);"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "background__Content"
})(["position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;min-height:500px;color:#b4b5ba;text-align:center;"]);
const CTA = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "background__CTA"
})(["padding:10px 20px;margin-top:10px;background-color:#f6cd45;color:#000;font-size:16px;border:none;border-radius:4px;cursor:pointer;width:200px;height:50px;"]);
const H1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "background__H1"
})(["font-size:2rem;color:#f6cd45;"]);
const Background = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Overlay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H1, null, "Welcome to our Restaurant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Discover our delicious menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CTA, null, "Order Now")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Background);

/***/ }),

/***/ "./src/images/fancysalad.webp":
/*!************************************!*\
  !*** ./src/images/fancysalad.webp ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/fancysalad-dd79a1765ead834ce935d9c3f3d6cbe6.webp");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-background-js.js.map