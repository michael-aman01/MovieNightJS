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

/***/ "./components/MoviesIndex/index.js":
/*!*****************************************!*\
  !*** ./components/MoviesIndex/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MoviesIndex; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _Searchbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Searchbar */ \"./components/Searchbar/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _MovieIndexItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MovieIndexItem */ \"./components/MovieIndexItem/index.js\");\n/* harmony import */ var _movieindex_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movieindex.module.css */ \"./components/MoviesIndex/movieindex.module.css\");\n/* harmony import */ var _movieindex_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_movieindex_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction MoviesIndex() {\n    var _this = this;\n    _s();\n    var stateMovies = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.movies;\n    });\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), 2), movies = _useState[0], setMovies = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (Object.values(stateMovies).length > 0) {\n            setMovies(stateMovies.movies);\n        }\n    }, [\n        stateMovies\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"movies\", movies);\n    }, [\n        movies\n    ]);\n    if (movies !== undefined) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: movies && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.SimpleGrid, {\n                columns: 4,\n                pacingX: \"10px\",\n                spacingY: \"20px\",\n                className: (_movieindex_module_css__WEBPACK_IMPORTED_MODULE_7___default().movies_index_container),\n                children: Object.values(movies).map(function(movie, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MovieIndexItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        movieData: movie\n                    }, i, false, {\n                        fileName: \"/home/michael/MovieNightJS/movie_night_js/components/MoviesIndex/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 46\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/michael/MovieNightJS/movie_night_js/components/MoviesIndex/index.js\",\n                lineNumber: 32,\n                columnNumber: 1\n            }, this)\n        }, void 0, false);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Center, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                children: \"gwgw\"\n            }, void 0, false, {\n                fileName: \"/home/michael/MovieNightJS/movie_night_js/components/MoviesIndex/index.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/michael/MovieNightJS/movie_night_js/components/MoviesIndex/index.js\",\n            lineNumber: 46,\n            columnNumber: 9\n        }, this);\n    }\n}\n_s(MoviesIndex, \"gOYtEQcCcKrJWCALSAp5p+x87zE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = MoviesIndex;\nvar _c;\n$RefreshReg$(_c, \"MoviesIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vdmllc0luZGV4L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUNtRTtBQUMxRTtBQUNLO0FBQ007QUFFSjtBQUU3QixTQUFTZ0IsY0FBYTs7O0lBQ2pDLElBQU1DLGNBQWNKLHdEQUFXQSxDQUFDSyxTQUFBQTtlQUFTQSxNQUFNQyxNQUFNOztJQUNyRCxJQUE0QmxCLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsUUFBN0JrQixTQUFxQmxCLGNBQWJtQixZQUFhbkI7SUFFNUJDLGdEQUFTQSxDQUFDLFdBQU07UUFDWixJQUFHbUIsT0FBT0MsTUFBTSxDQUFDTCxhQUFhTSxNQUFNLEdBQUcsR0FBRTtZQUNyQ0gsVUFBVUgsWUFBWUUsTUFBTTtRQUNoQyxDQUFDO0lBQ0wsR0FBRTtRQUFDRjtLQUFZO0lBRWZmLGdEQUFTQSxDQUFDLFdBQU07UUFDWnNCLFFBQVFDLEdBQUcsQ0FBQyxVQUFVTjtJQUMxQixHQUFFO1FBQUNBO0tBQU87SUFHZCxJQUFHQSxXQUFXTyxXQUFVO1FBQ3BCLHFCQUNJO3NCQUdLUCx3QkFFYiw4REFBQ1osd0RBQVVBO2dCQUFDb0IsU0FBUztnQkFBR0MsU0FBUTtnQkFBT0MsVUFBUztnQkFBT0MsV0FBV2Ysc0ZBQTZCOzBCQUMxRk0sT0FBT0MsTUFBTSxDQUFDSCxRQUFRYSxHQUFHLENBQUMsU0FBQ0MsT0FBTUM7eUNBQU8sOERBQUNwQix1REFBZUE7d0JBQUNxQixXQUFXRjt1QkFBWUM7Ozs7Ozs7Ozs7OztJQVdyRixPQUFLO1FBQ0QscUJBQ0ksOERBQUN2QixvREFBTUE7c0JBQ0gsNEVBQUN5QjswQkFBSzs7Ozs7Ozs7Ozs7SUFHbEIsQ0FBQztBQUdELENBQUM7R0EzQ3VCcEI7O1FBQ0FILG9EQUFXQTs7O0tBRFhHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW92aWVzSW5kZXgvaW5kZXguanM/MGFlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCwgU3RhY2ssIENvbnRhaW5lciwgQm94LCBTaW1wbGVHcmlkLCBWU3RhY2ssIFN0YWNrRGl2aWRlciwgRmxleCwgQ2VudGVyfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFNlYXJjaGJhciBmcm9tIFwiLi4vU2VhcmNoYmFyXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IE1vdmllc0luZGV4SXRlbSBmcm9tIFwiLi4vTW92aWVJbmRleEl0ZW1cIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9tb3ZpZWluZGV4Lm1vZHVsZS5jc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXNJbmRleCgpe1xuICAgIGNvbnN0IHN0YXRlTW92aWVzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubW92aWVzKVxuICAgIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZSgpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihPYmplY3QudmFsdWVzKHN0YXRlTW92aWVzKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHNldE1vdmllcyhzdGF0ZU1vdmllcy5tb3ZpZXMpXG4gICAgICAgIH1cbiAgICB9LFtzdGF0ZU1vdmllc10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmllc1wiLCBtb3ZpZXMpXG4gICAgfSxbbW92aWVzXSlcblxuXG5pZihtb3ZpZXMgIT09IHVuZGVmaW5lZCl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cblxuIFxuICAgICAgICAgICAge21vdmllcyAgJiYgXG4gICAgICAgIFxuPFNpbXBsZUdyaWQgY29sdW1ucz17NH0gcGFjaW5nWD0nMTBweCcgc3BhY2luZ1k9JzIwcHgnIGNsYXNzTmFtZT17c3R5bGVzLm1vdmllc19pbmRleF9jb250YWluZXJ9ID5cbiAgICB7T2JqZWN0LnZhbHVlcyhtb3ZpZXMpLm1hcCgobW92aWUsaSkgPT4gKDxNb3ZpZXNJbmRleEl0ZW0gbW92aWVEYXRhPXttb3ZpZX0ga2V5PXtpfT48L01vdmllc0luZGV4SXRlbT4pKX1cbiAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgXG5cblxuICAgICAgICA8Lz5cbiAgICApXG59ZWxzZXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgPFRleHQ+Z3dndzwvVGV4dD5cbiAgICAgICAgPC9DZW50ZXI+XG4gICAgKVxufVxuXG5cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIklucHV0IiwiU3RhY2siLCJDb250YWluZXIiLCJCb3giLCJTaW1wbGVHcmlkIiwiVlN0YWNrIiwiU3RhY2tEaXZpZGVyIiwiRmxleCIsIkNlbnRlciIsIlNlYXJjaGJhciIsInVzZVNlbGVjdG9yIiwiTW92aWVzSW5kZXhJdGVtIiwic3R5bGVzIiwiTW92aWVzSW5kZXgiLCJzdGF0ZU1vdmllcyIsInN0YXRlIiwibW92aWVzIiwic2V0TW92aWVzIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsImNvbHVtbnMiLCJwYWNpbmdYIiwic3BhY2luZ1kiLCJjbGFzc05hbWUiLCJtb3ZpZXNfaW5kZXhfY29udGFpbmVyIiwibWFwIiwibW92aWUiLCJpIiwibW92aWVEYXRhIiwiVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MoviesIndex/index.js\n"));

/***/ })

});