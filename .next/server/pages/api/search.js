"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/search";
exports.ids = ["pages/api/search"];
exports.modules = {

/***/ "(api)/./pages/api/search.js":
/*!*****************************!*\
  !*** ./pages/api/search.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n//data fetch api here with getSer\nasync function handler(req, res) {\n    const baseUrl = process.env.REACT_APP_API_BASE;\n    const title = JSON.parse(req.body).title;\n    const query = `s=${title.toLowerCase().split(\" \").join(\"%20\")}&r=json`;\n    const url = `${baseUrl}${query}`;\n    console.log(url);\n    const options = {\n        method: \"GET\",\n        headers: {\n            \"content-type\": \"application/octet-stream\",\n            \"X-RapidAPI-Key\": process.env.REACT_APP_API_KEY,\n            \"X-RapidAPI-Host\": process.env.REACT_APP_API_HOST\n        }\n    };\n    const reqData = await fetch(url, options);\n    if (reqData.status == 200) {\n        try {\n            const data = await reqData.json();\n            console.log(data);\n            return res.status(200).json({\n                test: \"food\"\n            });\n        } catch (error) {\n            console.log(error.response);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpQ0FBaUM7QUFLaEIsZUFBZUEsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUM7SUFDN0MsTUFBTUMsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxrQkFBa0I7SUFDOUMsTUFBTUMsUUFBUUMsS0FBS0MsS0FBSyxDQUFDUixJQUFJUyxJQUFJLEVBQUVILEtBQUs7SUFDeEMsTUFBTUksUUFBUSxDQUFDLEVBQUUsRUFBRUosTUFBTUssV0FBVyxHQUFHQyxLQUFLLENBQUMsS0FBS0MsSUFBSSxDQUFDLE9BQU8sT0FBTyxDQUFDO0lBQ3RFLE1BQU1DLE1BQU0sQ0FBQyxFQUFFWixRQUFRLEVBQUVRLE1BQU0sQ0FBQztJQUNoQ0ssUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU1HLFVBQVU7UUFDZEMsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCLGtCQUFrQmhCLFFBQVFDLEdBQUcsQ0FBQ2dCLGlCQUFpQjtZQUMvQyxtQkFBbUJqQixRQUFRQyxHQUFHLENBQUNpQixrQkFBa0I7UUFDbkQ7SUFDRjtJQUVBLE1BQU1DLFVBQVUsTUFBTUMsTUFBTVQsS0FBS0c7SUFDakMsSUFBR0ssUUFBUUUsTUFBTSxJQUFJLEtBQUk7UUFDdkIsSUFBRztZQUNELE1BQU1DLE9BQU8sTUFBTUgsUUFBUUksSUFBSTtZQUMvQlgsUUFBUUMsR0FBRyxDQUFDUztZQUNaLE9BQU94QixJQUFJdUIsTUFBTSxDQUFDLEtBQUtFLElBQUksQ0FBQztnQkFBQ0MsTUFBTTtZQUFNO1FBQzNDLEVBQUMsT0FBTUMsT0FBTTtZQUNYYixRQUFRQyxHQUFHLENBQUNZLE1BQU1DLFFBQVE7UUFDNUI7SUFFRixDQUFDO0FBRUgsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllX25pZ2h0X2pzLy4vcGFnZXMvYXBpL3NlYXJjaC5qcz81ZDNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vZGF0YSBmZXRjaCBhcGkgaGVyZSB3aXRoIGdldFNlclxuXG5cblxuXG4gIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpe1xuICAgIGNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX0JBU0VcbiAgICBjb25zdCB0aXRsZSA9IEpTT04ucGFyc2UocmVxLmJvZHkpLnRpdGxlXG4gICAgY29uc3QgcXVlcnkgPSBgcz0ke3RpdGxlLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCIlMjBcIil9JnI9anNvbmBcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfSR7cXVlcnl9YFxuICAgIGNvbnNvbGUubG9nKHVybClcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICAgICAgXCJYLVJhcGlkQVBJLUtleVwiOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX0tFWSxcbiAgICAgICAgXCJYLVJhcGlkQVBJLUhvc3RcIjogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9IT1NUXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVxRGF0YSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucylcbiAgICBpZihyZXFEYXRhLnN0YXR1cyA9PSAyMDApe1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxRGF0YS5qc29uKClcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt0ZXN0OiBcImZvb2RcIn0pXG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSlcbiAgICAgIH1cblxuICAgIH1cbiAgICBcbiAgfSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQVBJX0JBU0UiLCJ0aXRsZSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJxdWVyeSIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJqb2luIiwidXJsIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiUkVBQ1RfQVBQX0FQSV9LRVkiLCJSRUFDVF9BUFBfQVBJX0hPU1QiLCJyZXFEYXRhIiwiZmV0Y2giLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsInRlc3QiLCJlcnJvciIsInJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/search.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/search.js"));
module.exports = __webpack_exports__;

})();