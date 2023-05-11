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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HeaderBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HeaderBar */ \"./components/HeaderBar/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MovieIndexItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MovieIndexItem */ \"./components/MovieIndexItem/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _Searchbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Searchbar */ \"./components/Searchbar/index.js\");\n/* harmony import */ var _MoviesIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MoviesIndex */ \"./components/MoviesIndex/index.js\");\n/* harmony import */ var _BookmarksIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BookmarksIndex */ \"./components/BookmarksIndex/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _pages_store_bookmarks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/store/bookmarks */ \"./pages/store/bookmarks.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction App() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), 2), showBookmarks = _useState[0], setShowBookmarks = _useState[1];\n    var bookmarks = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function(state) {\n        return state.bookmarks;\n    });\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(bookmarks.current), 2), latestBookmarks = _useState1[0], setLatestBookmarks = _useState1[1];\n    // useEffect(() => {\n    //   let updatedBookmarks = loadBookmarks()\n    //   setLatestBookmarks(updatedBookmarks)\n    // },[bookmarks])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n            style: {\n                position: \"relative\"\n            },\n            templateAreas: '\"header header\"\\n                  \"nav main\"\\n                  \"nav footer\"',\n            h: \"100vh\",\n            w: \"100vw\",\n            gap: \"1\",\n            color: \"blackAlpha.700\",\n            fontWeight: \"bold\",\n            position: \"absolute\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.GridItem, {\n                    pl: \"1\",\n                    h: \"100%\",\n                    bg: \"orange.300\",\n                    area: \"header\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/michael/MovieNightJS/movie_night_js/components/App/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 8\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/michael/MovieNightJS/movie_night_js/components/App/index.js\",\n                    lineNumber: 45,\n                    columnNumber: 3\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.GridItem, {\n                    area: \"nav\"\n                }, void 0, false, {\n                    fileName: \"/home/michael/MovieNightJS/movie_night_js/components/App/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 1\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BookmarksIndex__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/michael/MovieNightJS/movie_night_js/components/App/index.js\",\n                    lineNumber: 51,\n                    columnNumber: 1\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.GridItem, {\n                    pl: \"1\",\n                    area: \"main\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MoviesIndex__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/michael/MovieNightJS/movie_night_js/components/App/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 1\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/michael/MovieNightJS/movie_night_js/components/App/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 1\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/michael/MovieNightJS/movie_night_js/components/App/index.js\",\n            lineNumber: 31,\n            columnNumber: 1\n        }, this)\n    }, void 0, false);\n}\n_s(App, \"8QybJpaIjfc6SOGp7slGLoSr1sI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNBO0FBQ1g7QUFDZTtBQUNPO0FBQzJCO0FBQ3RDO0FBQ0k7QUFDTztBQUNOO0FBQ2tCO0FBRzdDLFNBQVNpQixNQUFLOztJQUMzQixJQUEwQ2QsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEtBQUssT0FBakRlLGdCQUFtQ2YsY0FBcEJnQixtQkFBb0JoQjtJQUUxQyxJQUFNaUIsWUFBWUwsd0RBQVdBLENBQUNNLFNBQUFBO2VBQVNBLE1BQU1ELFNBQVM7O0lBQ3RELElBQStDakIsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDaUIsVUFBVUUsT0FBTyxPQUFsRUMsa0JBQXdDcEIsZUFBdEJxQixxQkFBc0JyQjtJQUMvQyxvQkFBb0I7SUFDcEIsMkNBQTJDO0lBQzNDLHlDQUF5QztJQUV6QyxpQkFBaUI7SUFHZixxQkFDSTtrQkFJUiw0RUFBQ0ksbURBQUlBO1lBQ0prQixPQUFPO2dCQUFDLFVBQVc7WUFBVTtZQUM1QkMsZUFBZ0I7WUFLaEJDLEdBQUU7WUFDRkMsR0FBRTtZQUNGQyxLQUFJO1lBQ0pDLE9BQU07WUFDTkMsWUFBVztZQUNYQyxVQUFTOzs4QkFFVCw4REFBQ3hCLHVEQUFRQTtvQkFBQ3lCLElBQUc7b0JBQUlOLEdBQUU7b0JBQU9PLElBQUc7b0JBQWFDLE1BQU07OEJBQzNDLDRFQUFDbkMsa0RBQVNBOzs7Ozs7Ozs7OzhCQUlqQiw4REFBQ1EsdURBQVFBO29CQUFDMkIsTUFBSzs7Ozs7OzhCQUNmLDhEQUFDckIsdURBQWNBOzs7Ozs4QkFRZiw4REFBQ04sdURBQVFBO29CQUFDeUIsSUFBRztvQkFBSUUsTUFBTTs4QkFDdkIsNEVBQUN0QixvREFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYVosQ0FBQztHQTNEdUJJOztRQUdKRixvREFBV0E7OztLQUhQRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FwcC9pbmRleC5qcz80OGFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXJCYXIgZnJvbSBcIi4uL0hlYWRlckJhclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9hcHAubW9kdWxlLmNzc1wiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTW92aWVzSW5kZXhJdGVtIGZyb20gXCIuLi9Nb3ZpZUluZGV4SXRlbVwiO1xuaW1wb3J0IHsgIEJ1dHRvbiwgR3JpZCwgR3JpZEl0ZW0sIFRleHQsIEJveCwgRmxleCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgU2VhcmNoYmFyIGZyb20gXCIuLi9TZWFyY2hiYXJcIjtcbmltcG9ydCBNb3ZpZXNJbmRleCBmcm9tIFwiLi4vTW92aWVzSW5kZXhcIjtcbmltcG9ydCBCb29rbWFya3NJbmRleCAgZnJvbSBcIi4uL0Jvb2ttYXJrc0luZGV4XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9hZEJvb2ttYXJrcyB9IGZyb20gXCIuLi8uLi9wYWdlcy9zdG9yZS9ib29rbWFya3NcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKXtcbiAgY29uc3QgW3Nob3dCb29rbWFya3MsIHNldFNob3dCb29rbWFya3NdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgYm9va21hcmtzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYm9va21hcmtzKVxuICBjb25zdCBbbGF0ZXN0Qm9va21hcmtzLCAgc2V0TGF0ZXN0Qm9va21hcmtzXSA9IHVzZVN0YXRlKGJvb2ttYXJrcy5jdXJyZW50KVxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGxldCB1cGRhdGVkQm9va21hcmtzID0gbG9hZEJvb2ttYXJrcygpXG4gIC8vICAgc2V0TGF0ZXN0Qm9va21hcmtzKHVwZGF0ZWRCb29rbWFya3MpXG5cbiAgLy8gfSxbYm9va21hcmtzXSlcblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuXG5cblxuPEdyaWRcbiBzdHlsZT17e1wicG9zaXRpb25cIjpcInJlbGF0aXZlXCJ9fVxuICB0ZW1wbGF0ZUFyZWFzPXtgXCJoZWFkZXIgaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgIFwibmF2IG1haW5cIlxuICAgICAgICAgICAgICAgICAgXCJuYXYgZm9vdGVyXCJgfVxuXG5cbiAgaD0nMTAwdmgnXG4gIHc9XCIxMDB2d1wiXG4gIGdhcD0nMSdcbiAgY29sb3I9J2JsYWNrQWxwaGEuNzAwJ1xuICBmb250V2VpZ2h0PSdib2xkJ1xuICBwb3NpdGlvbj0nYWJzb2x1dGUnXG4+XG4gIDxHcmlkSXRlbSBwbD0nMScgaD1cIjEwMCVcIiBiZz0nb3JhbmdlLjMwMCcgYXJlYT17J2hlYWRlcid9PlxuICAgICAgIDxIZWFkZXJCYXI+PC9IZWFkZXJCYXI+XG4gICAgICAgXG4gIDwvR3JpZEl0ZW0+XG5cbjxHcmlkSXRlbSBhcmVhPVwibmF2XCI+PC9HcmlkSXRlbT5cbjxCb29rbWFya3NJbmRleD48L0Jvb2ttYXJrc0luZGV4PlxuXG5cblxuXG5cblxuXG48R3JpZEl0ZW0gcGw9XCIxXCIgYXJlYT17XCJtYWluXCJ9ID5cbjxNb3ZpZXNJbmRleD48L01vdmllc0luZGV4PlxuPC9HcmlkSXRlbT5cblxuPC9HcmlkPlxuXG4gICAgXG5cblxuXG5cblxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkhlYWRlckJhciIsInN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNb3ZpZXNJbmRleEl0ZW0iLCJCdXR0b24iLCJHcmlkIiwiR3JpZEl0ZW0iLCJUZXh0IiwiQm94IiwiRmxleCIsIlNlYXJjaGJhciIsIk1vdmllc0luZGV4IiwiQm9va21hcmtzSW5kZXgiLCJ1c2VTZWxlY3RvciIsImxvYWRCb29rbWFya3MiLCJBcHAiLCJzaG93Qm9va21hcmtzIiwic2V0U2hvd0Jvb2ttYXJrcyIsImJvb2ttYXJrcyIsInN0YXRlIiwiY3VycmVudCIsImxhdGVzdEJvb2ttYXJrcyIsInNldExhdGVzdEJvb2ttYXJrcyIsInN0eWxlIiwidGVtcGxhdGVBcmVhcyIsImgiLCJ3IiwiZ2FwIiwiY29sb3IiLCJmb250V2VpZ2h0IiwicG9zaXRpb24iLCJwbCIsImJnIiwiYXJlYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/App/index.js\n"));

/***/ })

});