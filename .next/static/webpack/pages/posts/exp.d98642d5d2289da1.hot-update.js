"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/exp",{

/***/ "./pages/posts/exp.js":
/*!****************************!*\
  !*** ./pages/posts/exp.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Axis = ()=>{\n    _s();\n    const ticks = useMemo(()=>{\n        const xScale = d3__WEBPACK_IMPORTED_MODULE_2__.scaleLinear().domain([\n            0,\n            100\n        ]).range([\n            10,\n            290\n        ]);\n        return xScale.ticks().map((value)=>({\n                value,\n                xOffset: xScale(value)\n            }));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M 9.5 0.5 H 290.5\",\n                stroke: \"currentColor\"\n            }, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/posts/exp.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            ticks.map((param)=>/*#__PURE__*/ {\n                let { value , xOffset  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                    transform: \"translate(\".concat(xOffset, \", 0)\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                            y2: \"6\",\n                            stroke: \"currentColor\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dave/github/2023_myAppWebsite/pages/posts/exp.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                            style: {\n                                fontSize: \"10px\",\n                                textAnchor: \"middle\",\n                                transform: \"translateY(20px)\"\n                            },\n                            children: value\n                        }, value, false, {\n                            fileName: \"/Users/dave/github/2023_myAppWebsite/pages/posts/exp.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, value, true, {\n                    fileName: \"/Users/dave/github/2023_myAppWebsite/pages/posts/exp.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dave/github/2023_myAppWebsite/pages/posts/exp.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Axis, \"6h6cL8hGt7LlZh+Me2uhjNnnB/E=\");\n_c = Axis;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Axis);\nvar _c;\n$RefreshReg$(_c, \"Axis\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9leHAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDM0I7QUFFeEIsTUFBTUksT0FBTyxJQUFNOztJQUNmLE1BQU1DLFFBQVFDLFFBQVEsSUFBTTtRQUN4QixNQUFNQyxTQUFTSiwyQ0FBYyxHQUN4Qk0sTUFBTSxDQUFDO1lBQUM7WUFBRztTQUFJLEVBQ2ZDLEtBQUssQ0FBQztZQUFDO1lBQUk7U0FBSTtRQUVwQixPQUFPSCxPQUFPRixLQUFLLEdBQ2RNLEdBQUcsQ0FBQ0MsQ0FBQUEsUUFBVTtnQkFDWEE7Z0JBQ0FDLFNBQVNOLE9BQU9LO1lBQ3BCO0lBQ1IsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNFOzswQkFDRyw4REFBQ0M7Z0JBQ0dDLEdBQUU7Z0JBQ0ZDLFFBQU87Ozs7OztZQUVWWixNQUFNTSxHQUFHLENBQUMsdUJBQ1A7b0JBRFEsRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUU7dUJBQzFCLDhEQUFDSztvQkFFR0MsV0FBVyxhQUFxQixPQUFSTixTQUFROztzQ0FFaEMsOERBQUNPOzRCQUNHQyxJQUFHOzRCQUNISixRQUFPOzs7Ozs7c0NBRVgsOERBQUNLOzRCQUVHQyxPQUFPO2dDQUNIQyxVQUFVO2dDQUNWQyxZQUFZO2dDQUNaTixXQUFXOzRCQUNmO3NDQUNDUDsyQkFOSUE7Ozs7OzttQkFSSkE7Ozs7O1lBZ0JOOzs7Ozs7O0FBSW5CO0dBekNNUjtLQUFBQTtBQTJDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9leHAuanM/ZGNhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5cbmNvbnN0IEF4aXMgPSAoKSA9PiB7XG4gICAgY29uc3QgdGlja3MgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbMCwgMTAwXSlcbiAgICAgICAgICAgIC5yYW5nZShbMTAsIDI5MF0pXG5cbiAgICAgICAgcmV0dXJuIHhTY2FsZS50aWNrcygpXG4gICAgICAgICAgICAubWFwKHZhbHVlID0+ICh7XG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgeE9mZnNldDogeFNjYWxlKHZhbHVlKVxuICAgICAgICAgICAgfSkpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTSA5LjUgMC41IEggMjkwLjVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RpY2tzLm1hcCgoeyB2YWx1ZSwgeE9mZnNldCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICAgICAga2V5PXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7eE9mZnNldH0sIDApYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICB5Mj1cIjZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QW5jaG9yOiBcIm1pZGRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKDIwcHgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXhpczsiXSwibmFtZXMiOlsidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkMyIsIkF4aXMiLCJ0aWNrcyIsInVzZU1lbW8iLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsInJhbmdlIiwibWFwIiwidmFsdWUiLCJ4T2Zmc2V0Iiwic3ZnIiwicGF0aCIsImQiLCJzdHJva2UiLCJnIiwidHJhbnNmb3JtIiwibGluZSIsInkyIiwidGV4dCIsInN0eWxlIiwiZm9udFNpemUiLCJ0ZXh0QW5jaG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/exp.js\n"));

/***/ })

});