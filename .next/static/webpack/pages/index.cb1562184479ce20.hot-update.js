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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HeaderBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HeaderBar */ \"./components/HeaderBar/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MovieIndexItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MovieIndexItem */ \"./components/MovieIndexItem/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _Searchbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Searchbar */ \"./components/Searchbar/index.js\");\n/* harmony import */ var _MoviesIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MoviesIndex */ \"./components/MoviesIndex/index.js\");\n/* harmony import */ var _BookmarksIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BookmarksIndex */ \"./components/BookmarksIndex/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _pages_store_bookmarks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/store/bookmarks */ \"./pages/store/bookmarks.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction App() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), 2), showBookmarks = _useState[0], setShowBookmarks = _useState[1];\n    var bookmarks = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function(state) {\n        return state.bookmarks;\n    });\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(bookmarks.current), 2), latestBookmarks = _useState1[0], setLatestBookmarks = _useState1[1];\n    // useEffect(() => {\n    //   let updatedBookmarks = loadBookmarks()\n    //   setLatestBookmarks(updatedBookmarks)\n    // },[bookmarks])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Flex, {}, void 0, false, {\n                fileName: \"/home/michael/MovieNightJS/movie_night_js/components/App/index.js\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/michael/MovieNightJS/movie_night_js/components/App/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BookmarksIndex__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/michael/MovieNightJS/movie_night_js/components/App/index.js\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MoviesIndex__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/michael/MovieNightJS/movie_night_js/components/App/index.js\",\n                lineNumber: 44,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"8QybJpaIjfc6SOGp7slGLoSr1sI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNBO0FBQ1g7QUFDZTtBQUNPO0FBQzJCO0FBQ3RDO0FBQ0k7QUFDTztBQUNOO0FBQ2tCO0FBRzdDLFNBQVNpQixNQUFLOztJQUMzQixJQUEwQ2QsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEtBQUssT0FBakRlLGdCQUFtQ2YsY0FBcEJnQixtQkFBb0JoQjtJQUUxQyxJQUFNaUIsWUFBWUwsd0RBQVdBLENBQUNNLFNBQUFBO2VBQVNBLE1BQU1ELFNBQVM7O0lBQ3RELElBQStDakIsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDaUIsVUFBVUUsT0FBTyxPQUFsRUMsa0JBQXdDcEIsZUFBdEJxQixxQkFBc0JyQjtJQUMvQyxvQkFBb0I7SUFDcEIsMkNBQTJDO0lBQzNDLHlDQUF5QztJQUV6QyxpQkFBaUI7SUFHZixxQkFDSTs7MEJBQ0osOERBQUNRLG1EQUFJQTs7Ozs7MEJBSUgsOERBQUNYLGtEQUFTQTs7Ozs7MEJBTVosOERBQUNjLHVEQUFjQTs7Ozs7MEJBTWpCLDhEQUFDRCxvREFBV0E7Ozs7Ozs7QUFVZCxDQUFDO0dBeEN1Qkk7O1FBR0pGLG9EQUFXQTs7O0tBSFBFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXBwL2luZGV4LmpzPzQ4YWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlckJhciBmcm9tIFwiLi4vSGVhZGVyQmFyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2FwcC5tb2R1bGUuY3NzXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBNb3ZpZXNJbmRleEl0ZW0gZnJvbSBcIi4uL01vdmllSW5kZXhJdGVtXCI7XG5pbXBvcnQgeyAgQnV0dG9uLCBHcmlkLCBHcmlkSXRlbSwgVGV4dCwgQm94LCBGbGV4IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBTZWFyY2hiYXIgZnJvbSBcIi4uL1NlYXJjaGJhclwiO1xuaW1wb3J0IE1vdmllc0luZGV4IGZyb20gXCIuLi9Nb3ZpZXNJbmRleFwiO1xuaW1wb3J0IEJvb2ttYXJrc0luZGV4ICBmcm9tIFwiLi4vQm9va21hcmtzSW5kZXhcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBsb2FkQm9va21hcmtzIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL3N0b3JlL2Jvb2ttYXJrc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpe1xuICBjb25zdCBbc2hvd0Jvb2ttYXJrcywgc2V0U2hvd0Jvb2ttYXJrc10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBib29rbWFya3MgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5ib29rbWFya3MpXG4gIGNvbnN0IFtsYXRlc3RCb29rbWFya3MsICBzZXRMYXRlc3RCb29rbWFya3NdID0gdXNlU3RhdGUoYm9va21hcmtzLmN1cnJlbnQpXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgbGV0IHVwZGF0ZWRCb29rbWFya3MgPSBsb2FkQm9va21hcmtzKClcbiAgLy8gICBzZXRMYXRlc3RCb29rbWFya3ModXBkYXRlZEJvb2ttYXJrcylcblxuICAvLyB9LFtib29rbWFya3NdKVxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgPEZsZXg+XG4gICAgICBcbiAgICA8L0ZsZXg+XG5cbiAgICAgIDxIZWFkZXJCYXI+PC9IZWFkZXJCYXI+XG4gICAgICAgIFxuXG5cbiAgICBcblxuICAgIDxCb29rbWFya3NJbmRleD48L0Jvb2ttYXJrc0luZGV4PlxuXG5cblxuXG5cbiAgPE1vdmllc0luZGV4PjwvTW92aWVzSW5kZXg+XG5cbiAgICBcblxuXG5cblxuXG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsiSGVhZGVyQmFyIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1vdmllc0luZGV4SXRlbSIsIkJ1dHRvbiIsIkdyaWQiLCJHcmlkSXRlbSIsIlRleHQiLCJCb3giLCJGbGV4IiwiU2VhcmNoYmFyIiwiTW92aWVzSW5kZXgiLCJCb29rbWFya3NJbmRleCIsInVzZVNlbGVjdG9yIiwibG9hZEJvb2ttYXJrcyIsIkFwcCIsInNob3dCb29rbWFya3MiLCJzZXRTaG93Qm9va21hcmtzIiwiYm9va21hcmtzIiwic3RhdGUiLCJjdXJyZW50IiwibGF0ZXN0Qm9va21hcmtzIiwic2V0TGF0ZXN0Qm9va21hcmtzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/App/index.js\n"));

/***/ })

});