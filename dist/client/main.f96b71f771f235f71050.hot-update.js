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

/***/ "./src/shared/StatisticsPage/StatisticsPage.tsx":
/*!******************************************************!*\
  !*** ./src/shared/StatisticsPage/StatisticsPage.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.StatisticsPage = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar statisticspage_css_1 = __importDefault(__webpack_require__(/*! ./statisticspage.css */ \"./src/shared/StatisticsPage/statisticspage.css\"));\r\nvar YourActivityContainer_1 = __webpack_require__(/*! ../YourActivityContainer/YourActivityContainer */ \"./src/shared/YourActivityContainer/YourActivityContainer.tsx\");\r\nvar StatisticsDay_1 = __webpack_require__(/*! ../StatisticsDay */ \"./src/shared/StatisticsDay/index.ts\");\r\nvar Indent_1 = __webpack_require__(/*! ../Indent/Indent */ \"./src/shared/Indent/Indent.tsx\");\r\nvar StatisticsTomato_1 = __webpack_require__(/*! ../StatisticsTomato/StatisticsTomato */ \"./src/shared/StatisticsTomato/StatisticsTomato.tsx\");\r\nvar StatisticsWeek_1 = __webpack_require__(/*! ../StatisticsWeek/StatisticsWeek */ \"./src/shared/StatisticsWeek/StatisticsWeek.tsx\");\r\nvar StatisticsFocus_1 = __webpack_require__(/*! ../StatisticsFocus/StatisticsFocus */ \"./src/shared/StatisticsFocus/StatisticsFocus.tsx\");\r\nvar StatisticsTimeOnPause_1 = __webpack_require__(/*! ../StatisticsTimeOnPause/StatisticsTimeOnPause */ \"./src/shared/StatisticsTimeOnPause/StatisticsTimeOnPause.tsx\");\r\nvar StatisticsStops_1 = __webpack_require__(/*! ../StatisticsStops/StatisticsStops */ \"./src/shared/StatisticsStops/StatisticsStops.tsx\");\r\nvar actions_1 = __webpack_require__(/*! ../../store/statistics/actions */ \"./src/store/statistics/actions.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar getDataStat_1 = __webpack_require__(/*! ../utils/js/timerFunction/getDataStat */ \"./src/shared/utils/js/timerFunction/getDataStat.ts\");\r\nvar react_2 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nfunction StatisticsPage() {\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var timerStorageData = typeof localStorage !== \"undefined\" ? localStorage.getItem('timerData') : null;\r\n    var timerStorageDataJSON = timerStorageData !== null ? JSON.parse(timerStorageData) : {};\r\n    var timerStateData = typeof localStorage !== \"undefined\" ? localStorage.getItem('timerState') : null;\r\n    var timerStateDataJSON = timerStateData !== null ? JSON.parse(timerStateData) : {};\r\n    var statisticsState = (0, react_redux_1.useSelector)(function (state) { return state.statisticsState; });\r\n    var data = (0, getDataStat_1.getDataStat)();\r\n    var dataChangeDay = getChangeDay();\r\n    (0, react_2.useEffect)(function () {\r\n        var _a, _b;\r\n        if (timerStorageData !== null) {\r\n            var dateInArr = new Date(timerStorageDataJSON.nowWeek[timerStorageDataJSON.nowWeek.length - 1].dateDay);\r\n            console.log(dateInArr);\r\n            if (dateInArr.getDate() < new Date().getDate()) {\r\n                timerStorageDataJSON.beforeLastWeek = [];\r\n                (_a = timerStorageDataJSON.beforeLastWeek).push.apply(_a, timerStorageDataJSON.lastWeek);\r\n                timerStorageDataJSON.lastWeek = [];\r\n                (_b = timerStorageDataJSON.lastWeek).push.apply(_b, timerStorageDataJSON.nowWeek);\r\n                timerStorageDataJSON.nowWeek = [];\r\n                timerStorageDataJSON.nowWeek = weekDefault('nowWeek');\r\n                localStorage.setItem('timerData', JSON.stringify(timerStorageDataJSON));\r\n            }\r\n        }\r\n        else {\r\n            localStorage.setItem('timerData', JSON.stringify({\r\n                'beforeLastWeek': weekDefault('beforeLastWeek'),\r\n                'lastWeek': weekDefault('lastWeek'),\r\n                'nowWeek': weekDefault('nowWeek')\r\n            }));\r\n        }\r\n    }, []);\r\n    function getChangeDay() {\r\n        if (statisticsState.howWeek === 'nowWeek') {\r\n            return data[\"\" + statisticsState.howWeek].filter(function (day) {\r\n                return day.dateDay === statisticsState.howDay;\r\n            })[0];\r\n        }\r\n        else {\r\n            console.log(statisticsState.howWeek);\r\n            return data[\"\" + statisticsState.howWeek][0];\r\n        }\r\n        ;\r\n    }\r\n    (0, react_2.useEffect)(function () {\r\n        dispatch((0, actions_1.ChangeDayAction)(timerStateDataJSON.howDay));\r\n        dispatch((0, actions_1.ChangeWeekAction)(timerStateDataJSON.howWeek));\r\n    }, []);\r\n    function getDayName() {\r\n        var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];\r\n        var dateArr = statisticsState.howDay.split(\"-\");\r\n        var year = parseInt(dateArr[0]);\r\n        var month = parseInt(dateArr[1]) - 1;\r\n        var day = parseInt(dateArr[2]);\r\n        var date = new Date(year, month, day);\r\n        return days[date.getDay()];\r\n    }\r\n    window === null || window === void 0 ? void 0 : window.addEventListener('beforeunload', function () {\r\n        timerStateDataJSON.howWeek = statisticsState.howWeek;\r\n        timerStateDataJSON.howDay = statisticsState.howDay;\r\n        localStorage.setItem('timerState', JSON.stringify(timerStateDataJSON));\r\n    });\r\n    return (react_1.default.createElement(\"div\", { className: statisticspage_css_1.default.block },\r\n        react_1.default.createElement(YourActivityContainer_1.YourActivityContainer, null),\r\n        react_1.default.createElement(Indent_1.Indent, { indent: 'bottom', size: 30 }),\r\n        react_1.default.createElement(\"div\", { className: statisticspage_css_1.default.infoAndGraphContainer },\r\n            react_1.default.createElement(\"div\", { className: statisticspage_css_1.default.dayAndTomatoContainer },\r\n                react_1.default.createElement(StatisticsDay_1.StatisticsDay, { min: dataChangeDay.totalWorkingMinutes !== 0 ? dataChangeDay.totalWorkingMinutes : undefined, howDay: getDayName() }),\r\n                react_1.default.createElement(Indent_1.Indent, { indent: 'bottom', size: 32 }),\r\n                react_1.default.createElement(StatisticsTomato_1.StatisticsTomato, { number: dataChangeDay.tomatoes !== 0 ? dataChangeDay.tomatoes : undefined })),\r\n            react_1.default.createElement(StatisticsWeek_1.StatisticsWeek, { data: data })),\r\n        react_1.default.createElement(Indent_1.Indent, { indent: 'bottom', size: 32 }),\r\n        react_1.default.createElement(\"div\", { className: statisticspage_css_1.default.infoBlockContainer },\r\n            react_1.default.createElement(StatisticsFocus_1.StatisticsFocus, { value: dataChangeDay.allTimeInTimer !== 0 && dataChangeDay.totalWorkingMinutes !== 0 ? Math.floor((dataChangeDay.totalWorkingMinutes / dataChangeDay.allTimeInTimer) * 100) : 0 }),\r\n            react_1.default.createElement(StatisticsTimeOnPause_1.StatisticsTimeOnPause, { value: dataChangeDay.minutesOnPause !== 0 ? dataChangeDay.minutesOnPause : 0 }),\r\n            react_1.default.createElement(StatisticsStops_1.StatisticsStops, { value: dataChangeDay.stops !== 0 ? dataChangeDay.stops : 0 }))));\r\n}\r\nexports.StatisticsPage = StatisticsPage;\r\n\n\n//# sourceURL=webpack://reactjs/./src/shared/StatisticsPage/StatisticsPage.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b14bee37ea41145eaee2")
/******/ })();
/******/ 
/******/ }
);