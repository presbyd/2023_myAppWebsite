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

/***/ "./pages/components/App.js":
/*!*********************************!*\
  !*** ./pages/components/App.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card2 */ \"./pages/components/Card2.js\");\n/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contacts */ \"./pages/contacts.js\");\n/* harmony import */ var _NavBurg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBurg */ \"./pages/components/NavBurg.js\");\n\n\n\n\n\n\n\nfunction createCard(contact) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        name: contact.name,\n        year: contact.year,\n        img: contact.imgURL,\n        link: contact.link,\n        aut: contact.aut,\n        descr: contact.descr\n    }, contact.id, false, {\n        fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\nfunction App() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBurg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"heading\",\n                children: \"My Publications\"\n            }, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \" 2022 \"\n            }, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-wrap\",\n                children: _contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((obj)=>obj.year == 2022).map(createCard)\n            }, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"h2-year\",\n                children: \" 2021 \"\n            }, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-wrap\",\n                children: _contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((obj)=>obj.year == 2021).map(createCard)\n            }, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \" 2020 \"\n            }, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-wrap\",\n                children: _contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((obj)=>obj.year == 2020).map(createCard)\n            }, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \" 2019 \"\n            }, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-wrap\",\n                children: _contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((obj)=>obj.year == 2019).map(createCard)\n            }, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \" 2018 \"\n            }, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-wrap\",\n                children: _contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((obj)=>obj.year == 2018).map(createCard)\n            }, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \" 2017 \"\n            }, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-wrap\",\n                children: _contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].filter((obj)=>obj.year == 2017).map(createCard)\n            }, void 0, false, {\n                fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dave/github/2023_myAppWebsite/pages/components/App.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDRTtBQUNPO0FBQ0g7QUFDTTtBQUNBO0FBR3RDLFNBQVNNLFdBQVdDLE9BQU8sRUFBRTtJQUN6QixxQkFDSSw4REFBQ04sOENBQUtBO1FBRUZPLE1BQU1ELFFBQVFDLElBQUk7UUFDbEJDLE1BQU1GLFFBQVFFLElBQUk7UUFDbEJDLEtBQUtILFFBQVFJLE1BQU07UUFDbkJDLE1BQU1MLFFBQVFLLElBQUk7UUFDbEJDLEtBQUtOLFFBQVFNLEdBQUc7UUFDaEJDLE9BQU9QLFFBQVFPLEtBQUs7T0FOZlAsUUFBUVEsRUFBRTs7Ozs7QUFTM0I7QUFHQSxTQUFTQyxNQUFNO0lBQ1gscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ2QsZ0RBQU9BOzs7OzswQkFDUiw4REFBQ2U7Z0JBQUdDLFdBQVU7MEJBQVU7Ozs7OzswQkFDeEIsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzs7OzswQkFDRCw4REFBQ0o7Z0JBQUlFLFdBQVU7MEJBQ1ZqQix3REFBZSxDQUFDcUIsQ0FBQUEsTUFBT0EsSUFBSWQsSUFBSSxJQUFJLE1BQU1lLEdBQUcsQ0FBQ2xCOzs7Ozs7MEJBR2xELDhEQUFDYztnQkFBR0QsV0FBVTswQkFBVTs7Ozs7OzBCQUN4Qiw4REFBQ0U7Ozs7OzBCQUNELDhEQUFDSjtnQkFBSUUsV0FBVTswQkFDVmpCLHdEQUFlLENBQUNxQixDQUFBQSxNQUFPQSxJQUFJZCxJQUFJLElBQUksTUFBTWUsR0FBRyxDQUFDbEI7Ozs7OzswQkFHbEQsOERBQUNjOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzs7OzswQkFDRCw4REFBQ0o7Z0JBQUlFLFdBQVU7MEJBQ1ZqQix3REFBZSxDQUFDcUIsQ0FBQUEsTUFBT0EsSUFBSWQsSUFBSSxJQUFJLE1BQU1lLEdBQUcsQ0FBQ2xCOzs7Ozs7MEJBR2xELDhEQUFDYzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNKO2dCQUFJRSxXQUFVOzBCQUNWakIsd0RBQWUsQ0FBQ3FCLENBQUFBLE1BQU9BLElBQUlkLElBQUksSUFBSSxNQUFNZSxHQUFHLENBQUNsQjs7Ozs7OzBCQUdsRCw4REFBQ2M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDSjtnQkFBSUUsV0FBVTswQkFDVmpCLHdEQUFlLENBQUNxQixDQUFBQSxNQUFPQSxJQUFJZCxJQUFJLElBQUksTUFBTWUsR0FBRyxDQUFDbEI7Ozs7OzswQkFHbEQsOERBQUNjOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzs7OzswQkFDRCw4REFBQ0o7Z0JBQUlFLFdBQVU7MEJBQ1ZqQix3REFBZSxDQUFDcUIsQ0FBQUEsTUFBT0EsSUFBSWQsSUFBSSxJQUFJLE1BQU1lLEdBQUcsQ0FBQ2xCOzs7Ozs7Ozs7Ozs7QUFNOUQ7S0E1Q1NVO0FBOENULCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvQXBwLmpzP2FkMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcmQyIGZyb20gXCIuL0NhcmQyXCI7XG5pbXBvcnQgY29udGFjdHMgZnJvbSBcIi4uL2NvbnRhY3RzXCI7XG5pbXBvcnQgTmF2QnVyZyBmcm9tIFwiLi9OYXZCdXJnXCI7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcblxuXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGNvbnRhY3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZDJcbiAgICAgICAgICAgIGtleT17Y29udGFjdC5pZH1cbiAgICAgICAgICAgIG5hbWU9e2NvbnRhY3QubmFtZX1cbiAgICAgICAgICAgIHllYXI9e2NvbnRhY3QueWVhcn1cbiAgICAgICAgICAgIGltZz17Y29udGFjdC5pbWdVUkx9XG4gICAgICAgICAgICBsaW5rPXtjb250YWN0Lmxpbmt9XG4gICAgICAgICAgICBhdXQ9e2NvbnRhY3QuYXV0fVxuICAgICAgICAgICAgZGVzY3I9e2NvbnRhY3QuZGVzY3J9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZCdXJnIC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPk15IFB1YmxpY2F0aW9uczwvaDE+XG4gICAgICAgICAgICA8aDI+IDIwMjIgPC9oMj5cbiAgICAgICAgICAgIDxocj48L2hyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAge2NvbnRhY3RzLmZpbHRlcihvYmogPT4gb2JqLnllYXIgPT0gMjAyMikubWFwKGNyZWF0ZUNhcmQpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMi15ZWFyXCI+IDIwMjEgPC9oMj5cbiAgICAgICAgICAgIDxocj48L2hyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAge2NvbnRhY3RzLmZpbHRlcihvYmogPT4gb2JqLnllYXIgPT0gMjAyMSkubWFwKGNyZWF0ZUNhcmQpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoMj4gMjAyMCA8L2gyPlxuICAgICAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICB7Y29udGFjdHMuZmlsdGVyKG9iaiA9PiBvYmoueWVhciA9PSAyMDIwKS5tYXAoY3JlYXRlQ2FyZCl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGgyPiAyMDE5IDwvaDI+XG4gICAgICAgICAgICA8aHI+PC9ocj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgIHtjb250YWN0cy5maWx0ZXIob2JqID0+IG9iai55ZWFyID09IDIwMTkpLm1hcChjcmVhdGVDYXJkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aDI+IDIwMTggPC9oMj5cbiAgICAgICAgICAgIDxocj48L2hyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAge2NvbnRhY3RzLmZpbHRlcihvYmogPT4gb2JqLnllYXIgPT0gMjAxOCkubWFwKGNyZWF0ZUNhcmQpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoMj4gMjAxNyA8L2gyPlxuICAgICAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICB7Y29udGFjdHMuZmlsdGVyKG9iaiA9PiBvYmoueWVhciA9PSAyMDE3KS5tYXAoY3JlYXRlQ2FyZCl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvZGl2ID5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQyIiwiY29udGFjdHMiLCJOYXZCdXJnIiwiUm93IiwiQ29sIiwiY3JlYXRlQ2FyZCIsImNvbnRhY3QiLCJuYW1lIiwieWVhciIsImltZyIsImltZ1VSTCIsImxpbmsiLCJhdXQiLCJkZXNjciIsImlkIiwiQXBwIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJoMiIsImhyIiwiZmlsdGVyIiwib2JqIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/App.js\n"));

/***/ })

});