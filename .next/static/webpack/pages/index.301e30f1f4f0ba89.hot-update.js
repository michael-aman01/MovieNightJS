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

/***/ "./components/MovieIndexItem/index.js":
/*!********************************************!*\
  !*** ./components/MovieIndexItem/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MoviesIndexItem; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction MoviesIndexItem() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Avengers Endgame\"), 2), title = _useState[0], setTitle = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), 2), data = _useState1[0], setData = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), 2), searchResults = _useState2[0], setSearchResults = _useState2[1];\n    var getData = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function() {\n            var params, req, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        params = new URLSearchParams({\n                            s: title,\n                            r: \"json\"\n                        });\n                        return [\n                            4,\n                            fetch(\"api/search/\", {\n                                method: \"POST\",\n                                body: JSON.stringify({\n                                    title: title\n                                })\n                            })\n                        ];\n                    case 1:\n                        req = _state.sent();\n                        console.log(req);\n                        setSearchResults(req);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: getData,\n                    children: \"get moviesw\"\n                }, void 0, false, {\n                    fileName: \"/home/michael/MovieNightJS/movie_night_js/components/MovieIndexItem/index.js\",\n                    lineNumber: 29,\n                    columnNumber: 16\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/michael/MovieNightJS/movie_night_js/components/MovieIndexItem/index.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            searchResults && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Data retrieved\"\n            }, void 0, false, {\n                fileName: \"/home/michael/MovieNightJS/movie_night_js/components/MovieIndexItem/index.js\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MoviesIndexItem, \"l2JJqUm0X99UDlyMZetTHhweblM=\");\n_c = MoviesIndexItem;\nvar _c;\n$RefreshReg$(_c, \"MoviesIndexItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vdmllSW5kZXhJdGVtL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFHN0IsU0FBU0csa0JBQWlCOztJQUNyQyxJQUEwQkQsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLHlCQUE1QkUsUUFBbUJGLGNBQVpHLFdBQVlIO0lBQzFCLElBQXdCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLFFBQXpCSSxPQUFpQkosZUFBWEssVUFBV0w7SUFDeEIsSUFBMENBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsUUFBM0NNLGdCQUFtQ04sZUFBcEJPLG1CQUFvQlA7SUFFMUMsSUFBTVE7bUJBQVUsOEVBQVk7Z0JBRWRDLFFBQ0FDLEtBTUhDOzs7Ozs7Ozs7O3dCQVBHRixTQUFTLElBQUlHLGdCQUFnQjs0QkFBQ0MsR0FBR1g7NEJBQU9ZLEdBQUc7d0JBQU07d0JBQzNDOzs0QkFBTUMsTUFBTyxlQUFjO2dDQUNuQ0MsUUFBUTtnQ0FDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29DQUFDLE9BQVFqQjtnQ0FBSzs0QkFDdkM7Ozt3QkFITVEsTUFBTTt3QkFJWlUsUUFBUUMsR0FBRyxDQUFDWDt3QkFDWkgsaUJBQWlCRzs7Ozs7O3dCQUNkQzt3QkFDSFMsUUFBUUMsR0FBRyxDQUFDVjs7Ozs7Ozs7Ozs7UUFFcEI7d0JBWk1IOzs7O0lBZ0JOLHFCQUNJOzswQkFDSSw4REFBQ2M7MEJBQ0UsNEVBQUNDO29CQUFPQyxTQUFTaEI7OEJBQVM7Ozs7Ozs7Ozs7O1lBRTVCRiwrQkFDRyw4REFBQ2dCOzBCQUFJOzs7Ozs7OztBQU9yQixDQUFDO0dBbEN1QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW92aWVJbmRleEl0ZW0vaW5kZXguanM/YjRhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzSW5kZXhJdGVtKCl7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkF2ZW5nZXJzIEVuZGdhbWVcIilcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW3NlYXJjaFJlc3VsdHMsIHNldFNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGUoKVxuXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7czogdGl0bGUsIHI6IFwianNvblwifSlcbiAgICAgICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKGBhcGkvc2VhcmNoL2AsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCBcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XCJ0aXRsZVwiOnRpdGxlfSksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVxKVxuICAgICAgICAgICAgc2V0U2VhcmNoUmVzdWx0cyhyZXEpXG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0RGF0YX0+Z2V0IG1vdmllc3c8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3NlYXJjaFJlc3VsdHMgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIERhdGEgcmV0cmlldmVkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApXG4gICAgXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNb3ZpZXNJbmRleEl0ZW0iLCJ0aXRsZSIsInNldFRpdGxlIiwiZGF0YSIsInNldERhdGEiLCJzZWFyY2hSZXN1bHRzIiwic2V0U2VhcmNoUmVzdWx0cyIsImdldERhdGEiLCJwYXJhbXMiLCJyZXEiLCJlcnJvciIsIlVSTFNlYXJjaFBhcmFtcyIsInMiLCJyIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MovieIndexItem/index.js\n"));

/***/ })

});