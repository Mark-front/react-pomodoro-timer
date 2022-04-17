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

/***/ "./src/store/rootReducer.ts":
/*!**********************************!*\
  !*** ./src/store/rootReducer.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.rootReducer = void 0;\r\nvar reducer_1 = __webpack_require__(/*! ../shared/updateTaskInput/reducer */ \"./src/shared/updateTaskInput/reducer.ts\");\r\nvar reducer_2 = __webpack_require__(/*! ./tasks/reducer */ \"./src/store/tasks/reducer.ts\");\r\nvar reducer_3 = __webpack_require__(/*! ./timer/reducer */ \"./src/store/timer/reducer.ts\");\r\nvar reducer_4 = __webpack_require__(/*! ./statistics/reducer */ \"./src/store/statistics/reducer.ts\");\r\nvar reducer_5 = __webpack_require__(/*! ./options/reducer */ \"./src/store/options/reducer.ts\");\r\nvar timerOptionsData = typeof localStorage !== \"undefined\" ? localStorage.getItem('timerOptions') : null;\r\nvar timerOptionsDataJSON = timerOptionsData !== null ? JSON.parse(timerOptionsData) : {};\r\nvar initialState = {\r\n    taskInputText: { text: '' },\r\n    taskArr: { arr: [] },\r\n    options: {\r\n        timePomodor: timerOptionsDataJSON.timePomodor ? timerOptionsDataJSON.timePomodor : 25,\r\n        timeShortRest: timerOptionsDataJSON.timeShortRest ? timerOptionsDataJSON.timeShortRest : 5,\r\n        timeLongRest: timerOptionsDataJSON.timeLongRest ? timerOptionsDataJSON.timeLongRest : 15,\r\n        frequencyLongRest: timerOptionsDataJSON.frequencyLongRest ? timerOptionsDataJSON.frequencyLongRest : 4,\r\n        alertToggle: timerOptionsDataJSON.alertToggle ? timerOptionsDataJSON.alertToggle : false\r\n    },\r\n    timerClock: {\r\n        minutesInTimer: 0,\r\n        minutes: timerOptionsDataJSON.timePomodor === 0 ? 25 : timerOptionsDataJSON.timePomodor === 0,\r\n        seconds: 0,\r\n        isActive: null,\r\n        isRest: false,\r\n        count: 1\r\n    },\r\n    statisticsState: {\r\n        howWeek: 'nowWeek',\r\n        howDay: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),\r\n    }\r\n};\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case 'UPDATE_TASK_INPUT':\r\n            return __assign(__assign({}, state), { taskInputText: (0, reducer_1.taskInputReducer)(state.taskInputText, action) });\r\n        case 'UPDATE_TASK_ARR':\r\n        case 'GET_TASK_ARR':\r\n        case 'DELETE_TASKS_ITEM':\r\n        case 'EDIT_TASKS_ITEM':\r\n        case 'REMOVE_TASK_NUMBER':\r\n        case 'ADD_TASK_NUMBER':\r\n            return __assign(__assign({}, state), { taskArr: (0, reducer_2.taskArrReducer)(state.taskArr, action) });\r\n        case 'START_TIMER':\r\n        case 'TOGGLE_TIMER_REST':\r\n        case 'STOP_TIMER':\r\n        case 'TIMER_RESET':\r\n        case 'TIMER_ADD_TIME':\r\n        case 'TIMER_ALL_TIME':\r\n        case 'NUMBER_OF_TRIGGERED_TIMERS':\r\n        case \"TIMER_SET_STATE\":\r\n            return __assign(__assign({}, state), { timerClock: (0, reducer_3.timerClockReducer)(state.timerClock, action) });\r\n        case \"CHANGE_WEEK\":\r\n        case \"CHANGE_DAY\":\r\n            return __assign(__assign({}, state), { statisticsState: (0, reducer_4.statisticsDataReducer)(state.statisticsState, action) });\r\n        case \"CHANGE_OPTIONS\":\r\n            return __assign(__assign({}, state), { options: (0, reducer_5.optionsReducer)(state.options, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack://reactjs/./src/store/rootReducer.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7e16fad8d2b2d2593034")
/******/ })();
/******/ 
/******/ }
);