"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/publicationPage",{

/***/ "./components/pubPage.js":
/*!*******************************!*\
  !*** ./components/pubPage.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card2 */ \"./components/Card2.js\");\n/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts */ \"./components/contacts.js\");\n/* harmony import */ var _NavBurg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBurg */ \"./components/NavBurg.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ \"./components/Footer.js\");\n/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Carousel */ \"./components/Carousel.tsx\");\n\n\n\n\n\n\n\nfunction createCard(contact) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        name: contact.name,\n        year: contact.year,\n        img: contact.imgURL,\n        link: contact.link,\n        aut: contact.aut,\n        descr: contact.descr\n    }, contact.id, false, {\n        fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\nfunction PubPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBurg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"heading\",\n                children: \"Publications\"\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"h2-year\",\n                children: \" 2024 \"\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-wrap\",\n                children: _contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((obj)=>obj.year == 2024).map(createCard)\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"h2-year\",\n                children: \" 2023 \"\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-wrap\",\n                children: _contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((obj)=>obj.year == 2023).map(createCard)\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"h2-year\",\n                children: \" 2022 \"\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-wrap\",\n                children: _contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((obj)=>obj.year == 2022).map(createCard)\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"h2-year\",\n                children: \" 2021 \"\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-wrap\",\n                children: _contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((obj)=>obj.year == 2021).map(createCard)\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"h2-year\",\n                children: \" 2020 \"\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-wrap\",\n                children: _contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((obj)=>obj.year == 2020).map(createCard)\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"h2-year\",\n                children: \" 2019 \"\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-wrap\",\n                children: _contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((obj)=>obj.year == 2019).map(createCard)\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"h2-year\",\n                children: \" 2018 \"\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-wrap\",\n                children: _contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((obj)=>obj.year == 2018).map(createCard)\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"h2-year\",\n                children: \" 2017 \"\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-wrap\",\n                children: _contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((obj)=>obj.year == 2017).map(createCard)\n            }, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dpresby/github/2023_myAppWebsite/components/pubPage.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = PubPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PubPage);\nvar _c;\n$RefreshReg$(_c, \"PubPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3B1YlBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRTtBQUNNO0FBQ0Y7QUFDRjtBQUNRO0FBR3RDLFNBQVNNLFdBQVdDLE9BQU8sRUFBRTtJQUN6QixxQkFDSSw4REFBQ04sOENBQUtBO1FBRUZPLE1BQU1ELFFBQVFDLElBQUk7UUFDbEJDLE1BQU1GLFFBQVFFLElBQUk7UUFDbEJDLEtBQUtILFFBQVFJLE1BQU07UUFDbkJDLE1BQU1MLFFBQVFLLElBQUk7UUFDbEJDLEtBQUtOLFFBQVFNLEdBQUc7UUFDaEJDLE9BQU9QLFFBQVFPLEtBQUs7T0FOZlAsUUFBUVEsRUFBRTs7Ozs7QUFTM0I7QUFHQSxTQUFTQyxVQUFVO0lBQ2YscUJBQ0k7OzBCQUNJLDhEQUFDYixnREFBT0E7Ozs7OzBCQUNSLDhEQUFDYztnQkFBR0MsV0FBVTswQkFBVTs7Ozs7OzBCQUV4Qiw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDQztnQkFBR0YsV0FBVTswQkFBVTs7Ozs7OzBCQUN4Qiw4REFBQ0c7Z0JBQUlILFdBQVU7MEJBQ1ZoQix3REFBZSxDQUFDcUIsQ0FBQUEsTUFBT0EsSUFBSWQsSUFBSSxJQUFJLE1BQU1lLEdBQUcsQ0FBQ2xCOzs7Ozs7MEJBR2xELDhEQUFDYztnQkFBR0YsV0FBVTswQkFBVTs7Ozs7OzBCQUN4Qiw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDRTtnQkFBSUgsV0FBVTswQkFDVmhCLHdEQUFlLENBQUNxQixDQUFBQSxNQUFPQSxJQUFJZCxJQUFJLElBQUksTUFBTWUsR0FBRyxDQUFDbEI7Ozs7OzswQkFHbEQsOERBQUNhOzs7OzswQkFDRCw4REFBQ0M7Z0JBQUdGLFdBQVU7MEJBQVU7Ozs7OzswQkFDeEIsOERBQUNHO2dCQUFJSCxXQUFVOzBCQUNWaEIsd0RBQWUsQ0FBQ3FCLENBQUFBLE1BQU9BLElBQUlkLElBQUksSUFBSSxNQUFNZSxHQUFHLENBQUNsQjs7Ozs7OzBCQUdsRCw4REFBQ2E7Ozs7OzBCQUNELDhEQUFDQztnQkFBR0YsV0FBVTswQkFBVTs7Ozs7OzBCQUN4Qiw4REFBQ0c7Z0JBQUlILFdBQVU7MEJBQ1ZoQix3REFBZSxDQUFDcUIsQ0FBQUEsTUFBT0EsSUFBSWQsSUFBSSxJQUFJLE1BQU1lLEdBQUcsQ0FBQ2xCOzs7Ozs7MEJBUWxELDhEQUFDYTs7Ozs7MEJBQ0QsOERBQUNDO2dCQUFHRixXQUFVOzBCQUFVOzs7Ozs7MEJBQ3hCLDhEQUFDRztnQkFBSUgsV0FBVTswQkFDVmhCLHdEQUFlLENBQUNxQixDQUFBQSxNQUFPQSxJQUFJZCxJQUFJLElBQUksTUFBTWUsR0FBRyxDQUFDbEI7Ozs7OzswQkFHbEQsOERBQUNhOzs7OzswQkFDRCw4REFBQ0M7Z0JBQUdGLFdBQVU7MEJBQVU7Ozs7OzswQkFDeEIsOERBQUNHO2dCQUFJSCxXQUFVOzBCQUNWaEIsd0RBQWUsQ0FBQ3FCLENBQUFBLE1BQU9BLElBQUlkLElBQUksSUFBSSxNQUFNZSxHQUFHLENBQUNsQjs7Ozs7OzBCQUdsRCw4REFBQ2E7Ozs7OzBCQUNELDhEQUFDQztnQkFBR0YsV0FBVTswQkFBVTs7Ozs7OzBCQUN4Qiw4REFBQ0c7Z0JBQUlILFdBQVU7MEJBQ1ZoQix3REFBZSxDQUFDcUIsQ0FBQUEsTUFBT0EsSUFBSWQsSUFBSSxJQUFJLE1BQU1lLEdBQUcsQ0FBQ2xCOzs7Ozs7MEJBR2xELDhEQUFDYTs7Ozs7MEJBQ0QsOERBQUNDO2dCQUFHRixXQUFVOzBCQUFVOzs7Ozs7MEJBQ3hCLDhEQUFDRztnQkFBSUgsV0FBVTswQkFDVmhCLHdEQUFlLENBQUNxQixDQUFBQSxNQUFPQSxJQUFJZCxJQUFJLElBQUksTUFBTWUsR0FBRyxDQUFDbEI7Ozs7OzswQkFHbEQsOERBQUNGLCtDQUFNQTs7Ozs7OztBQUduQjtLQTlEU1k7QUFnRVQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJQYWdlLmpzP2E3ZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcmQyIGZyb20gXCIuL0NhcmQyXCI7XG5pbXBvcnQgY29udGFjdHMgZnJvbSBcIi4vY29udGFjdHNcIjtcbmltcG9ydCBOYXZCdXJnIGZyb20gXCIuL05hdkJ1cmdcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICcuL0Nhcm91c2VsJ1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoY29udGFjdCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkMlxuICAgICAgICAgICAga2V5PXtjb250YWN0LmlkfVxuICAgICAgICAgICAgbmFtZT17Y29udGFjdC5uYW1lfVxuICAgICAgICAgICAgeWVhcj17Y29udGFjdC55ZWFyfVxuICAgICAgICAgICAgaW1nPXtjb250YWN0LmltZ1VSTH1cbiAgICAgICAgICAgIGxpbms9e2NvbnRhY3QubGlua31cbiAgICAgICAgICAgIGF1dD17Y29udGFjdC5hdXR9XG4gICAgICAgICAgICBkZXNjcj17Y29udGFjdC5kZXNjcn1cbiAgICAgICAgLz5cbiAgICApO1xufVxuXG5cbmZ1bmN0aW9uIFB1YlBhZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZCdXJnIC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlB1YmxpY2F0aW9uczwvaDE+XG5cbiAgICAgICAgICAgIDxocj48L2hyPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgyLXllYXJcIj4gMjAyNCA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAge2NvbnRhY3RzLmZpbHRlcihvYmogPT4gb2JqLnllYXIgPT0gMjAyNCkubWFwKGNyZWF0ZUNhcmQpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMi15ZWFyXCI+IDIwMjMgPC9oMj5cbiAgICAgICAgICAgIDxocj48L2hyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAge2NvbnRhY3RzLmZpbHRlcihvYmogPT4gb2JqLnllYXIgPT0gMjAyMykubWFwKGNyZWF0ZUNhcmQpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxocj48L2hyPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgyLXllYXJcIj4gMjAyMiA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAge2NvbnRhY3RzLmZpbHRlcihvYmogPT4gb2JqLnllYXIgPT0gMjAyMikubWFwKGNyZWF0ZUNhcmQpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxocj48L2hyPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgyLXllYXJcIj4gMjAyMSA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAge2NvbnRhY3RzLmZpbHRlcihvYmogPT4gb2JqLnllYXIgPT0gMjAyMSkubWFwKGNyZWF0ZUNhcmQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgICAgICA8RW1ibGFDYXJvdXNlbD5cbiAgICAgICAgICAgICAgICAgICAge2NvbnRhY3RzLmZpbHRlcihvYmogPT4gb2JqLnllYXIgPT0gMjAyMSkubWFwKGNyZWF0ZUNhcmQpfVxuICAgICAgICAgICAgICAgIDwvRW1ibGFDYXJvdXNlbD5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDIteWVhclwiPiAyMDIwIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICB7Y29udGFjdHMuZmlsdGVyKG9iaiA9PiBvYmoueWVhciA9PSAyMDIwKS5tYXAoY3JlYXRlQ2FyZCl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDIteWVhclwiPiAyMDE5IDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICB7Y29udGFjdHMuZmlsdGVyKG9iaiA9PiBvYmoueWVhciA9PSAyMDE5KS5tYXAoY3JlYXRlQ2FyZCl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDIteWVhclwiPiAyMDE4IDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICB7Y29udGFjdHMuZmlsdGVyKG9iaiA9PiBvYmoueWVhciA9PSAyMDE4KS5tYXAoY3JlYXRlQ2FyZCl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDIteWVhclwiPiAyMDE3IDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICB7Y29udGFjdHMuZmlsdGVyKG9iaiA9PiBvYmoueWVhciA9PSAyMDE3KS5tYXAoY3JlYXRlQ2FyZCl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFB1YlBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkMiIsImNvbnRhY3RzIiwiTmF2QnVyZyIsIkZvb3RlciIsIkVtYmxhQ2Fyb3VzZWwiLCJjcmVhdGVDYXJkIiwiY29udGFjdCIsIm5hbWUiLCJ5ZWFyIiwiaW1nIiwiaW1nVVJMIiwibGluayIsImF1dCIsImRlc2NyIiwiaWQiLCJQdWJQYWdlIiwiaDEiLCJjbGFzc05hbWUiLCJociIsImgyIiwiZGl2IiwiZmlsdGVyIiwib2JqIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/pubPage.js\n"));

/***/ })

});