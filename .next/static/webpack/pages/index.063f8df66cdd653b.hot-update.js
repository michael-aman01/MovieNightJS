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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MoviesIndex; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _Searchbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Searchbar */ \"./components/Searchbar/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _MovieIndexItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MovieIndexItem */ \"./components/MovieIndexItem/index.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction MoviesIndex() {\n    var _this = this;\n    _s();\n    var stateMovies = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.movies;\n    });\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), 2), movies = _useState[0], setMovies = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (Object.values(stateMovies).length > 0) {\n            setMovies(stateMovies.movies);\n        }\n    }, [\n        stateMovies\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"movies\", movies);\n    }, [\n        movies\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: movies && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.SimpleGrid, {\n            columns: 4,\n            pacingX: \"10px\",\n            spacingY: \"20px\",\n            className: styles.movies_index_container,\n            children: Object.values(movies).map(function(movie, i) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MovieIndexItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    movieData: movie\n                }, i, false, {\n                    fileName: \"/home/michael/MovieNightJS/movie_night_js/components/MoviesIndex/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 46\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/home/michael/MovieNightJS/movie_night_js/components/MoviesIndex/index.js\",\n            lineNumber: 32,\n            columnNumber: 1\n        }, this)\n    }, void 0, false);\n}\n_s(MoviesIndex, \"gOYtEQcCcKrJWCALSAp5p+x87zE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = MoviesIndex;\nvar _c;\n$RefreshReg$(_c, \"MoviesIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vdmllc0luZGV4L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDMkQ7QUFDbEU7QUFDSztBQUNNO0FBSWpDLFNBQVNjLGNBQWE7OztJQUNqQyxJQUFNQyxjQUFjSCx3REFBV0EsQ0FBQ0ksU0FBQUE7ZUFBU0EsTUFBTUMsTUFBTTs7SUFDckQsSUFBNEJoQixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLFFBQTdCZ0IsU0FBcUJoQixjQUFiaUIsWUFBYWpCO0lBRTVCQyxnREFBU0EsQ0FBQyxXQUFNO1FBQ1osSUFBR2lCLE9BQU9DLE1BQU0sQ0FBQ0wsYUFBYU0sTUFBTSxHQUFHLEdBQUU7WUFDckNILFVBQVVILFlBQVlFLE1BQU07UUFDaEMsQ0FBQztJQUNMLEdBQUU7UUFBQ0Y7S0FBWTtJQUVmYixnREFBU0EsQ0FBQyxXQUFNO1FBQ1pvQixRQUFRQyxHQUFHLENBQUMsVUFBVU47SUFDMUIsR0FBRTtRQUFDQTtLQUFPO0lBSVYscUJBQ0k7a0JBR0tBLHdCQUViLDhEQUFDVix3REFBVUE7WUFBQ2lCLFNBQVM7WUFBR0MsU0FBUTtZQUFPQyxVQUFTO1lBQVFDLFdBQVdDLE9BQU9DLHNCQUFzQjtzQkFDM0ZWLE9BQU9DLE1BQU0sQ0FBQ0gsUUFBUWEsR0FBRyxDQUFDLFNBQUNDLE9BQU1DO3FDQUFPLDhEQUFDbkIsdURBQWVBO29CQUFDb0IsV0FBV0Y7bUJBQVlDOzs7Ozs7Ozs7Ozs7QUFZckYsQ0FBQztHQW5DdUJsQjs7UUFDQUYsb0RBQVdBOzs7S0FEWEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZXNJbmRleC9pbmRleC5qcz8wYWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0LCBTdGFjaywgQ29udGFpbmVyLCBCb3gsIFNpbXBsZUdyaWQsIFZTdGFjaywgU3RhY2tEaXZpZGVyLCBGbGV4fSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFNlYXJjaGJhciBmcm9tIFwiLi4vU2VhcmNoYmFyXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IE1vdmllc0luZGV4SXRlbSBmcm9tIFwiLi4vTW92aWVJbmRleEl0ZW1cIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllc0luZGV4KCl7XG4gICAgY29uc3Qgc3RhdGVNb3ZpZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tb3ZpZXMpXG4gICAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKE9iamVjdC52YWx1ZXMoc3RhdGVNb3ZpZXMpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgc2V0TW92aWVzKHN0YXRlTW92aWVzLm1vdmllcylcbiAgICAgICAgfVxuICAgIH0sW3N0YXRlTW92aWVzXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibW92aWVzXCIsIG1vdmllcylcbiAgICB9LFttb3ZpZXNdKVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG5cbiBcbiAgICAgICAgICAgIHttb3ZpZXMgICYmIFxuICAgICAgICBcbjxTaW1wbGVHcmlkIGNvbHVtbnM9ezR9IHBhY2luZ1g9JzEwcHgnIHNwYWNpbmdZPScyMHB4JyAgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVzX2luZGV4X2NvbnRhaW5lcn0+XG4gICAge09iamVjdC52YWx1ZXMobW92aWVzKS5tYXAoKG1vdmllLGkpID0+ICg8TW92aWVzSW5kZXhJdGVtIG1vdmllRGF0YT17bW92aWV9IGtleT17aX0+PC9Nb3ZpZXNJbmRleEl0ZW0+KSl9XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgIFxuXG5cbiAgICAgICAgPC8+XG4gICAgKVxuXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbnB1dCIsIlN0YWNrIiwiQ29udGFpbmVyIiwiQm94IiwiU2ltcGxlR3JpZCIsIlZTdGFjayIsIlN0YWNrRGl2aWRlciIsIkZsZXgiLCJTZWFyY2hiYXIiLCJ1c2VTZWxlY3RvciIsIk1vdmllc0luZGV4SXRlbSIsIk1vdmllc0luZGV4Iiwic3RhdGVNb3ZpZXMiLCJzdGF0ZSIsIm1vdmllcyIsInNldE1vdmllcyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjb2x1bW5zIiwicGFjaW5nWCIsInNwYWNpbmdZIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwibW92aWVzX2luZGV4X2NvbnRhaW5lciIsIm1hcCIsIm1vdmllIiwiaSIsIm1vdmllRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MoviesIndex/index.js\n"));

/***/ })

});