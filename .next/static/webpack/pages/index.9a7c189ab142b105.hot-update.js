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

/***/ "./components/App/index.js":
/*!*********************************!*\
  !*** ./components/App/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HeaderBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HeaderBar */ \"./components/HeaderBar/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MovieIndexItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MovieIndexItem */ \"./components/MovieIndexItem/index.js\");\n/* harmony import */ var _Searchbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Searchbar */ \"./components/Searchbar/index.js\");\n/* harmony import */ var _MoviesIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MoviesIndex */ \"./components/MoviesIndex/index.js\");\n/* harmony import */ var _BookmarksIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BookmarksIndex */ \"./components/BookmarksIndex/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _pages_store_bookmarks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/store/bookmarks */ \"./pages/store/bookmarks.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction App() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), 2), showBookmarks = _useState[0], setShowBookmarks = _useState[1];\n    var bookmarks = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function(state) {\n        return state.bookmarks;\n    });\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(bookmarks.current), 2), latestBookmarks = _useState1[0], setLatestBookmarks = _useState1[1];\n    // useEffect(() => {\n    //   let updatedBookmarks = loadBookmarks()\n    //   setLatestBookmarks(updatedBookmarks)\n    // },[bookmarks])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/michael/MovieNightJS/movie_night_js/components/App/index.js\",\n                lineNumber: 30,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BookmarksIndex__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/michael/MovieNightJS/movie_night_js/components/App/index.js\",\n                lineNumber: 36,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MoviesIndex__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/michael/MovieNightJS/movie_night_js/components/App/index.js\",\n                lineNumber: 42,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"8QybJpaIjfc6SOGp7slGLoSr1sI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ0E7QUFDWDtBQUNlO0FBQ087QUFDMkI7QUFDdEM7QUFDSTtBQUNPO0FBQ047QUFDa0I7QUFHN0MsU0FBU2lCLE1BQUs7O0lBQzNCLElBQTBDZCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsS0FBSyxPQUFqRGUsZ0JBQW1DZixjQUFwQmdCLG1CQUFvQmhCO0lBRTFDLElBQU1pQixZQUFZTCx3REFBV0EsQ0FBQ00sU0FBQUE7ZUFBU0EsTUFBTUQsU0FBUzs7SUFDdEQsSUFBK0NqQixhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUNpQixVQUFVRSxPQUFPLE9BQWxFQyxrQkFBd0NwQixlQUF0QnFCLHFCQUFzQnJCO0lBQy9DLG9CQUFvQjtJQUNwQiwyQ0FBMkM7SUFDM0MseUNBQXlDO0lBRXpDLGlCQUFpQjtJQUdmLHFCQUNJOzswQkFHRCw4REFBQ0gsa0RBQVNBOzs7OzswQkFNZiw4REFBQ2MsdURBQWNBOzs7OzswQkFNakIsOERBQUNELG9EQUFXQTs7Ozs7OztBQVVaLENBQUM7R0F0Q3VCSTs7UUFHSkYsb0RBQVdBOzs7S0FIUEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHAvaW5kZXguanM/NDhhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyQmFyIGZyb20gXCIuLi9IZWFkZXJCYXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYXBwLm1vZHVsZS5jc3NcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE1vdmllc0luZGV4SXRlbSBmcm9tIFwiLi4vTW92aWVJbmRleEl0ZW1cIjtcbmltcG9ydCB7ICBCdXR0b24sIEdyaWQsIEdyaWRJdGVtLCBUZXh0LCBCb3gsIEZsZXggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IFNlYXJjaGJhciBmcm9tIFwiLi4vU2VhcmNoYmFyXCI7XG5pbXBvcnQgTW92aWVzSW5kZXggZnJvbSBcIi4uL01vdmllc0luZGV4XCI7XG5pbXBvcnQgQm9va21hcmtzSW5kZXggIGZyb20gXCIuLi9Cb29rbWFya3NJbmRleFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGxvYWRCb29rbWFya3MgfSBmcm9tIFwiLi4vLi4vcGFnZXMvc3RvcmUvYm9va21hcmtzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCl7XG4gIGNvbnN0IFtzaG93Qm9va21hcmtzLCBzZXRTaG93Qm9va21hcmtzXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGJvb2ttYXJrcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmJvb2ttYXJrcylcbiAgY29uc3QgW2xhdGVzdEJvb2ttYXJrcywgIHNldExhdGVzdEJvb2ttYXJrc10gPSB1c2VTdGF0ZShib29rbWFya3MuY3VycmVudClcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBsZXQgdXBkYXRlZEJvb2ttYXJrcyA9IGxvYWRCb29rbWFya3MoKVxuICAvLyAgIHNldExhdGVzdEJvb2ttYXJrcyh1cGRhdGVkQm9va21hcmtzKVxuXG4gIC8vIH0sW2Jvb2ttYXJrc10pXG5cblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICBcblxuICAgICAgIDxIZWFkZXJCYXI+PC9IZWFkZXJCYXI+XG4gICAgICAgXG5cblxuICBcblxuICA8Qm9va21hcmtzSW5kZXg+PC9Cb29rbWFya3NJbmRleD5cblxuXG5cblxuXG48TW92aWVzSW5kZXg+PC9Nb3ZpZXNJbmRleD5cblxuICAgIFxuXG5cblxuXG5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJIZWFkZXJCYXIiLCJzdHlsZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTW92aWVzSW5kZXhJdGVtIiwiQnV0dG9uIiwiR3JpZCIsIkdyaWRJdGVtIiwiVGV4dCIsIkJveCIsIkZsZXgiLCJTZWFyY2hiYXIiLCJNb3ZpZXNJbmRleCIsIkJvb2ttYXJrc0luZGV4IiwidXNlU2VsZWN0b3IiLCJsb2FkQm9va21hcmtzIiwiQXBwIiwic2hvd0Jvb2ttYXJrcyIsInNldFNob3dCb29rbWFya3MiLCJib29rbWFya3MiLCJzdGF0ZSIsImN1cnJlbnQiLCJsYXRlc3RCb29rbWFya3MiLCJzZXRMYXRlc3RCb29rbWFya3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/App/index.js\n"));

/***/ })

});