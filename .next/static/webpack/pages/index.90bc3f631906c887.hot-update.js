"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/index-body/News/NewsContainer.js":
/*!*****************************************************!*\
  !*** ./components/index-body/News/NewsContainer.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NewsContainer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewsContainer.module.css */ \"./components/index-body/News/NewsContainer.module.css\");\n/* harmony import */ var _NewsContainer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NewsContainer_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NewsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsItem */ \"./components/index-body/News/NewsItem.js\");\n\n\n\nconst NewsContainer = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_NewsContainer_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"news-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_NewsContainer_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"news-item\"])\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/sustain_value_synths/components/index-body/News/NewsContainer.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_NewsContainer_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"news-item\"])\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/sustain_value_synths/components/index-body/News/NewsContainer.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_NewsContainer_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"news-item\"])\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/sustain_value_synths/components/index-body/News/NewsContainer.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Carlito/Desktop/repos/sustain_value_synths/components/index-body/News/NewsContainer.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NewsContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsContainer);\nvar _c;\n$RefreshReg$(_c, \"NewsContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LWJvZHkvTmV3cy9OZXdzQ29udGFpbmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0Q7QUFDZDtBQUVsQyxNQUFNRSxnQkFBZ0I7SUFDcEIscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVdKLG9GQUF3Qjs7MEJBQzFDLDhEQUFDSztnQkFBSUQsV0FBV0osK0VBQW1COzs7Ozs7MEJBQ25DLDhEQUFDSztnQkFBSUQsV0FBV0osK0VBQW1COzs7Ozs7MEJBQ25DLDhEQUFDSztnQkFBSUQsV0FBV0osK0VBQW1COzs7Ozs7Ozs7Ozs7QUFHekM7S0FSTUU7QUFVTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2luZGV4LWJvZHkvTmV3cy9OZXdzQ29udGFpbmVyLmpzPzdkM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9OZXdzQ29udGFpbmVyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBOZXdzSXRlbSBmcm9tIFwiLi9OZXdzSXRlbVwiO1xuXG5jb25zdCBOZXdzQ29udGFpbmVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzW1wibmV3cy1jb250YWluZXJcIl19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm5ld3MtaXRlbVwiXX0+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibmV3cy1pdGVtXCJdfT48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJuZXdzLWl0ZW1cIl19PjwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3NDb250YWluZXI7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiTmV3c0l0ZW0iLCJOZXdzQ29udGFpbmVyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/index-body/News/NewsContainer.js\n"));

/***/ }),

/***/ "./components/index-body/News/NewsItem.js":
/*!************************************************!*\
  !*** ./components/index-body/News/NewsItem.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NewsItem = (param)=>{\n    let { news } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"news-item\"\n    }, void 0, false, {\n        fileName: \"/Users/Carlito/Desktop/repos/sustain_value_synths/components/index-body/News/NewsItem.js\",\n        lineNumber: 2,\n        columnNumber: 10\n    }, undefined);\n};\n_c = NewsItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsItem);\nvar _c;\n$RefreshReg$(_c, \"NewsItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LWJvZHkvTmV3cy9OZXdzSXRlbS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsV0FBVztRQUFDLEVBQUVDLElBQUksRUFBRTtJQUN4QixxQkFBTyw4REFBQ0M7UUFBSUMsV0FBVTs7Ozs7O0FBQ3hCO0tBRk1IO0FBSU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC1ib2R5L05ld3MvTmV3c0l0ZW0uanM/ZDU3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBOZXdzSXRlbSA9ICh7IG5ld3MgfSkgPT4ge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJuZXdzLWl0ZW1cIj48L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdzSXRlbTtcbiJdLCJuYW1lcyI6WyJOZXdzSXRlbSIsIm5ld3MiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/index-body/News/NewsItem.js\n"));

/***/ })

});