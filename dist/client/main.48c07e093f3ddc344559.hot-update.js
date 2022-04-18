"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatereactjs"]("main",{

/***/ "./src/shared/utils/js/timerFunction/weekDefault.ts":
/*!**********************************************************!*\
  !*** ./src/shared/utils/js/timerFunction/weekDefault.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.weekDefault = void 0;\r\nvar createData_1 = __webpack_require__(/*! ./createData */ \"./src/shared/utils/js/timerFunction/createData.ts\");\r\nvar createDefaultDay_1 = __webpack_require__(/*! ./createDefaultDay */ \"./src/shared/utils/js/timerFunction/createDefaultDay.ts\");\r\nvar weekDefault = function (howWeek) {\r\n    var weekArr = [];\r\n    var current = new Date();\r\n    var year = current.getUTCFullYear();\r\n    var month = current.getUTCMonth();\r\n    var dayNow = function () {\r\n        switch (howWeek) {\r\n            case (\"nowWeek\"):\r\n                return (current.getDate() - current.getDay()) + 2;\r\n            case (\"lastWeek\"):\r\n                return (current.getDate() - 14) + 2;\r\n            case (\"beforeLastWeek\"):\r\n                return (current.getDate() - 21) + 2;\r\n        }\r\n    };\r\n    for (var index = 0; index < 7; index++) {\r\n        weekArr.push((0, createDefaultDay_1.createDefaultDay)((0, createData_1.createData)(year, month, dayNow + index)));\r\n    }\r\n    return weekArr;\r\n};\r\nexports.weekDefault = weekDefault;\r\n\n\n//# sourceURL=webpack://reactjs/./src/shared/utils/js/timerFunction/weekDefault.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bc64508797d0c11f7f00")
/******/ })();
/******/ 
/******/ }
);