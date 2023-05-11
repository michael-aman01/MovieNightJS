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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MoviesIndex; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _Searchbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Searchbar */ \"./components/Searchbar/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _MovieIndexItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MovieIndexItem */ \"./components/MovieIndexItem/index.js\");\n/* harmony import */ var _movieindex_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movieindex.module.css */ \"./components/MoviesIndex/movieindex.module.css\");\n/* harmony import */ var _movieindex_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_movieindex_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction MoviesIndex() {\n    var _this = this;\n    _s();\n    var stateMovies = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.movies;\n    });\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), 2), movies = _useState[0], setMovies = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (Object.values(stateMovies).length > 0) {\n            setMovies(stateMovies.movies);\n        }\n    }, [\n        stateMovies\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"movies\", movies);\n    }, [\n        movies\n    ]);\n    if (movies !== undefined) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: movies && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.SimpleGrid, {\n                columns: 4,\n                pacingX: \"10px\",\n                spacingY: \"20px\",\n                className: (_movieindex_module_css__WEBPACK_IMPORTED_MODULE_7___default().movies_index_container),\n                children: Object.values(movies).map(function(movie, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MovieIndexItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        movieData: movie\n                    }, i, false, {\n                        fileName: \"/home/michael/MovieNightJS/movie_night_js/components/MoviesIndex/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 46\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/michael/MovieNightJS/movie_night_js/components/MoviesIndex/index.js\",\n                lineNumber: 32,\n                columnNumber: 1\n            }, this)\n        }, void 0, false);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Center, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                color: \"white\",\n                size: \"lg\",\n                fontSize: \"50px\",\n                children: \"Enter a Movie Above to Begin Search\"\n            }, void 0, false, {\n                fileName: \"/home/michael/MovieNightJS/movie_night_js/components/MoviesIndex/index.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/michael/MovieNightJS/movie_night_js/components/MoviesIndex/index.js\",\n            lineNumber: 47,\n            columnNumber: 9\n        }, this);\n    }\n}\n_s(MoviesIndex, \"gOYtEQcCcKrJWCALSAp5p+x87zE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = MoviesIndex;\nvar _c;\n$RefreshReg$(_c, \"MoviesIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vdmllc0luZGV4L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUN5RTtBQUNoRjtBQUNLO0FBQ007QUFFSjtBQUU3QixTQUFTaUIsY0FBYTs7O0lBQ2pDLElBQU1DLGNBQWNKLHdEQUFXQSxDQUFDSyxTQUFBQTtlQUFTQSxNQUFNQyxNQUFNOztJQUNyRCxJQUE0Qm5CLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsUUFBN0JtQixTQUFxQm5CLGNBQWJvQixZQUFhcEI7SUFFNUJDLGdEQUFTQSxDQUFDLFdBQU07UUFDWixJQUFHb0IsT0FBT0MsTUFBTSxDQUFDTCxhQUFhTSxNQUFNLEdBQUcsR0FBRTtZQUNyQ0gsVUFBVUgsWUFBWUUsTUFBTTtRQUNoQyxDQUFDO0lBQ0wsR0FBRTtRQUFDRjtLQUFZO0lBRWZoQixnREFBU0EsQ0FBQyxXQUFNO1FBQ1p1QixRQUFRQyxHQUFHLENBQUMsVUFBVU47SUFDMUIsR0FBRTtRQUFDQTtLQUFPO0lBR2QsSUFBR0EsV0FBV08sV0FBVTtRQUNwQixxQkFDSTtzQkFHS1Asd0JBRWIsOERBQUNiLHdEQUFVQTtnQkFBQ3FCLFNBQVM7Z0JBQUdDLFNBQVE7Z0JBQU9DLFVBQVM7Z0JBQU9DLFdBQVdmLHNGQUE2QjswQkFDMUZNLE9BQU9DLE1BQU0sQ0FBQ0gsUUFBUWEsR0FBRyxDQUFDLFNBQUNDLE9BQU1DO3lDQUFPLDhEQUFDcEIsdURBQWVBO3dCQUFDcUIsV0FBV0Y7dUJBQVlDOzs7Ozs7Ozs7Ozs7SUFXckYsT0FBSztRQUNELHFCQUVJLDhEQUFDeEIsb0RBQU1BO3NCQUNILDRFQUFDQyxrREFBSUE7Z0JBQUN5QixPQUFNO2dCQUFRQyxNQUFLO2dCQUFLQyxVQUFTOzBCQUFPOzs7Ozs7Ozs7OztJQUkxRCxDQUFDO0FBR0QsQ0FBQztHQTdDdUJ0Qjs7UUFDQUgsb0RBQVdBOzs7S0FEWEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZXNJbmRleC9pbmRleC5qcz8wYWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0LCBTdGFjaywgQ29udGFpbmVyLCBCb3gsIFNpbXBsZUdyaWQsIFZTdGFjaywgU3RhY2tEaXZpZGVyLCBGbGV4LCBDZW50ZXIsIFRleHR9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgU2VhcmNoYmFyIGZyb20gXCIuLi9TZWFyY2hiYXJcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTW92aWVzSW5kZXhJdGVtIGZyb20gXCIuLi9Nb3ZpZUluZGV4SXRlbVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL21vdmllaW5kZXgubW9kdWxlLmNzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllc0luZGV4KCl7XG4gICAgY29uc3Qgc3RhdGVNb3ZpZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tb3ZpZXMpXG4gICAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKE9iamVjdC52YWx1ZXMoc3RhdGVNb3ZpZXMpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgc2V0TW92aWVzKHN0YXRlTW92aWVzLm1vdmllcylcbiAgICAgICAgfVxuICAgIH0sW3N0YXRlTW92aWVzXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibW92aWVzXCIsIG1vdmllcylcbiAgICB9LFttb3ZpZXNdKVxuXG5cbmlmKG1vdmllcyAhPT0gdW5kZWZpbmVkKXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuXG4gXG4gICAgICAgICAgICB7bW92aWVzICAmJiBcbiAgICAgICAgXG48U2ltcGxlR3JpZCBjb2x1bW5zPXs0fSBwYWNpbmdYPScxMHB4JyBzcGFjaW5nWT0nMjBweCcgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVzX2luZGV4X2NvbnRhaW5lcn0gPlxuICAgIHtPYmplY3QudmFsdWVzKG1vdmllcykubWFwKChtb3ZpZSxpKSA9PiAoPE1vdmllc0luZGV4SXRlbSBtb3ZpZURhdGE9e21vdmllfSBrZXk9e2l9PjwvTW92aWVzSW5kZXhJdGVtPikpfVxuICAgICAgPC9TaW1wbGVHcmlkPlxuICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICBcblxuXG4gICAgICAgIDwvPlxuICAgIClcbn1lbHNle1xuICAgIHJldHVybiAoXG4gIFxuICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIHNpemU9XCJsZ1wiIGZvbnRTaXplPVwiNTBweFwiPkVudGVyIGEgTW92aWUgQWJvdmUgdG8gQmVnaW4gU2VhcmNoPC9UZXh0PlxuICAgICAgICA8L0NlbnRlcj5cblxuICAgIClcbn1cblxuXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbnB1dCIsIlN0YWNrIiwiQ29udGFpbmVyIiwiQm94IiwiU2ltcGxlR3JpZCIsIlZTdGFjayIsIlN0YWNrRGl2aWRlciIsIkZsZXgiLCJDZW50ZXIiLCJUZXh0IiwiU2VhcmNoYmFyIiwidXNlU2VsZWN0b3IiLCJNb3ZpZXNJbmRleEl0ZW0iLCJzdHlsZXMiLCJNb3ZpZXNJbmRleCIsInN0YXRlTW92aWVzIiwic3RhdGUiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwiY29sdW1ucyIsInBhY2luZ1giLCJzcGFjaW5nWSIsImNsYXNzTmFtZSIsIm1vdmllc19pbmRleF9jb250YWluZXIiLCJtYXAiLCJtb3ZpZSIsImkiLCJtb3ZpZURhdGEiLCJjb2xvciIsInNpemUiLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MoviesIndex/index.js\n"));

/***/ })

});