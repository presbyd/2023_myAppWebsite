"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/exp";
exports.ids = ["pages/posts/exp"];
exports.modules = {

/***/ "./pages/posts/exp.js":
/*!****************************!*\
  !*** ./pages/posts/exp.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"d3\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([d3__WEBPACK_IMPORTED_MODULE_2__]);\nd3__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Axis = ({ domain =[\n    0,\n    100\n] , range =[\n    10,\n    290\n]  })=>{\n    const ticks = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        const xScale = d3__WEBPACK_IMPORTED_MODULE_2__.scaleLinear().domain(domain).range(range);\n        const width = range[1] - range[0];\n        const pixelsPerTick = 30;\n        const numberOfTicksTarget = Math.max(1, Math.floor(width / pixelsPerTick));\n        return xScale.ticks(numberOfTicksTarget).map((value)=>({\n                value,\n                xOffset: xScale(value)\n            }));\n    }, [\n        domain.join(\"-\"),\n        range.join(\"-\")\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: [\n                    \"M\",\n                    range[0],\n                    6,\n                    \"v\",\n                    -6,\n                    \"H\",\n                    range[1],\n                    \"v\",\n                    6\n                ].join(\" \"),\n                fill: \"none\",\n                stroke: \"currentColor\"\n            }, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/posts/exp.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            ticks.map(({ value , xOffset  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                    transform: `translate(${xOffset}, 0)`,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                            y2: \"6\",\n                            stroke: \"currentColor\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dave/github/2023_myAppWebsite/pages/posts/exp.js\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                            style: {\n                                fontSize: \"10px\",\n                                textAnchor: \"middle\",\n                                transform: \"translateY(20px)\"\n                            },\n                            children: value\n                        }, value, false, {\n                            fileName: \"/Users/dave/github/2023_myAppWebsite/pages/posts/exp.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, value, true, {\n                    fileName: \"/Users/dave/github/2023_myAppWebsite/pages/posts/exp.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dave/github/2023_myAppWebsite/pages/posts/exp.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axis);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9leHAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUNwQztBQUV4QixNQUFNSyxPQUFPLENBQUMsRUFDVkMsUUFBUztJQUFDO0lBQUc7Q0FBSSxHQUNqQkMsT0FBUTtJQUFDO0lBQUk7Q0FBSSxHQUNwQixHQUFLO0lBQ0YsTUFBTUMsUUFBUUwsOENBQU9BLENBQUMsSUFBTTtRQUN4QixNQUFNTSxTQUFTTCwyQ0FBYyxHQUN4QkUsTUFBTSxDQUFDQSxRQUNQQyxLQUFLLENBQUNBO1FBRVgsTUFBTUksUUFBUUosS0FBSyxDQUFDLEVBQUUsR0FBR0EsS0FBSyxDQUFDLEVBQUU7UUFDakMsTUFBTUssZ0JBQWdCO1FBQ3RCLE1BQU1DLHNCQUFzQkMsS0FBS0MsR0FBRyxDQUNoQyxHQUNBRCxLQUFLRSxLQUFLLENBQ05MLFFBQVFDO1FBSWhCLE9BQU9ILE9BQU9ELEtBQUssQ0FBQ0sscUJBQ2ZJLEdBQUcsQ0FBQ0MsQ0FBQUEsUUFBVTtnQkFDWEE7Z0JBQ0FDLFNBQVNWLE9BQU9TO1lBQ3BCO0lBQ1IsR0FBRztRQUNDWixPQUFPYyxJQUFJLENBQUM7UUFDWmIsTUFBTWEsSUFBSSxDQUFDO0tBQ2Q7SUFFRCxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQztnQkFDR0MsR0FBRztvQkFDQztvQkFBS2hCLEtBQUssQ0FBQyxFQUFFO29CQUFFO29CQUNmO29CQUFLLENBQUM7b0JBQ047b0JBQUtBLEtBQUssQ0FBQyxFQUFFO29CQUNiO29CQUFLO2lCQUNSLENBQUNhLElBQUksQ0FBQztnQkFDUEksTUFBSztnQkFDTEMsUUFBTzs7Ozs7O1lBRVZqQixNQUFNUyxHQUFHLENBQUMsQ0FBQyxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBRSxpQkFDMUIsOERBQUNPO29CQUVHQyxXQUFXLENBQUMsVUFBVSxFQUFFUixRQUFRLElBQUksQ0FBQzs7c0NBRXJDLDhEQUFDUzs0QkFDR0MsSUFBRzs0QkFDSEosUUFBTzs7Ozs7O3NDQUVYLDhEQUFDSzs0QkFFR0MsT0FBTztnQ0FDSEMsVUFBVTtnQ0FDVkMsWUFBWTtnQ0FDWk4sV0FBVzs0QkFDZjtzQ0FDQ1Q7MkJBTklBOzs7Ozs7bUJBUkpBOzs7Ozs7Ozs7OztBQW9CekI7QUFFQSxpRUFBZWIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3Bvc3RzL2V4cC5qcz9kY2E0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcblxuY29uc3QgQXhpcyA9ICh7XG4gICAgZG9tYWluID0gWzAsIDEwMF0sXG4gICAgcmFuZ2UgPSBbMTAsIDI5MF0sXG59KSA9PiB7XG4gICAgY29uc3QgdGlja3MgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgICAgICAucmFuZ2UocmFuZ2UpXG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSByYW5nZVsxXSAtIHJhbmdlWzBdXG4gICAgICAgIGNvbnN0IHBpeGVsc1BlclRpY2sgPSAzMFxuICAgICAgICBjb25zdCBudW1iZXJPZlRpY2tzVGFyZ2V0ID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICB3aWR0aCAvIHBpeGVsc1BlclRpY2tcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgICAgIHJldHVybiB4U2NhbGUudGlja3MobnVtYmVyT2ZUaWNrc1RhcmdldClcbiAgICAgICAgICAgIC5tYXAodmFsdWUgPT4gKHtcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICB4T2Zmc2V0OiB4U2NhbGUodmFsdWUpXG4gICAgICAgICAgICB9KSlcbiAgICB9LCBbXG4gICAgICAgIGRvbWFpbi5qb2luKFwiLVwiKSxcbiAgICAgICAgcmFuZ2Uuam9pbihcIi1cIilcbiAgICBdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Zz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD17W1xuICAgICAgICAgICAgICAgICAgICBcIk1cIiwgcmFuZ2VbMF0sIDYsXG4gICAgICAgICAgICAgICAgICAgIFwidlwiLCAtNixcbiAgICAgICAgICAgICAgICAgICAgXCJIXCIsIHJhbmdlWzFdLFxuICAgICAgICAgICAgICAgICAgICBcInZcIiwgNixcbiAgICAgICAgICAgICAgICBdLmpvaW4oXCIgXCIpfVxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHt0aWNrcy5tYXAoKHsgdmFsdWUsIHhPZmZzZXQgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgICAgIGtleT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3hPZmZzZXR9LCAwKWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgeTI9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFuY2hvcjogXCJtaWRkbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgyMHB4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF4aXM7Il0sIm5hbWVzIjpbInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsImQzIiwiQXhpcyIsImRvbWFpbiIsInJhbmdlIiwidGlja3MiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsIndpZHRoIiwicGl4ZWxzUGVyVGljayIsIm51bWJlck9mVGlja3NUYXJnZXQiLCJNYXRoIiwibWF4IiwiZmxvb3IiLCJtYXAiLCJ2YWx1ZSIsInhPZmZzZXQiLCJqb2luIiwic3ZnIiwicGF0aCIsImQiLCJmaWxsIiwic3Ryb2tlIiwiZyIsInRyYW5zZm9ybSIsImxpbmUiLCJ5MiIsInRleHQiLCJzdHlsZSIsImZvbnRTaXplIiwidGV4dEFuY2hvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/exp.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/***/ ((module) => {

module.exports = import("d3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/exp.js"));
module.exports = __webpack_exports__;

})();