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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n//data fetch api here with getSer\nasync function handler(req, res) {\n    const baseUrl = process.env.REACT_APP_API_BASE;\n    const title = JSON.parse(req.body).title;\n    const query = `s=${title.toLowerCase().split(\" \").join(\"%20\")}&r=json`;\n    const url = `${baseUrl}${query}`;\n    console.log(url);\n    const options = {\n        method: \"GET\",\n        headers: {\n            \"content-type\": \"application/octet-stream\",\n            \"X-RapidAPI-Key\": process.env.REACT_APP_API_KEY,\n            \"X-RapidAPI-Host\": process.env.REACT_APP_API_HOST\n        }\n    };\n    const reqData = await fetch(url, options);\n    if (reqData.status == 200) {\n        try {\n            const data = await reqData.json();\n            console.log(data);\n            return res.status(200).json(data);\n        } catch (error) {\n            console.log(error.response);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpQ0FBaUM7QUFLaEIsZUFBZUEsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUM7SUFDN0MsTUFBTUMsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxrQkFBa0I7SUFDOUMsTUFBTUMsUUFBUUMsS0FBS0MsS0FBSyxDQUFDUixJQUFJUyxJQUFJLEVBQUVILEtBQUs7SUFDeEMsTUFBTUksUUFBUSxDQUFDLEVBQUUsRUFBRUosTUFBTUssV0FBVyxHQUFHQyxLQUFLLENBQUMsS0FBS0MsSUFBSSxDQUFDLE9BQU8sT0FBTyxDQUFDO0lBQ3RFLE1BQU1DLE1BQU0sQ0FBQyxFQUFFWixRQUFRLEVBQUVRLE1BQU0sQ0FBQztJQUNoQ0ssUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU1HLFVBQVU7UUFDZEMsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCLGtCQUFrQmhCLFFBQVFDLEdBQUcsQ0FBQ2dCLGlCQUFpQjtZQUMvQyxtQkFBbUJqQixRQUFRQyxHQUFHLENBQUNpQixrQkFBa0I7UUFDbkQ7SUFDRjtJQUVBLE1BQU1DLFVBQVUsTUFBTUMsTUFBTVQsS0FBS0c7SUFDakMsSUFBR0ssUUFBUUUsTUFBTSxJQUFJLEtBQUk7UUFDdkIsSUFBRztZQUNELE1BQU1DLE9BQU8sTUFBTUgsUUFBUUksSUFBSTtZQUMvQlgsUUFBUUMsR0FBRyxDQUFDUztZQUNaLE9BQU94QixJQUFJdUIsTUFBTSxDQUFDLEtBQUtFLElBQUksQ0FBQ0Q7UUFDOUIsRUFBQyxPQUFNRSxPQUFNO1lBQ1haLFFBQVFDLEdBQUcsQ0FBQ1csTUFBTUMsUUFBUTtRQUM1QjtJQUVGLENBQUM7QUFFSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aWVfbmlnaHRfanMvLi9wYWdlcy9hcGkvc2VhcmNoLmpzPzVkM2EiXSwic291cmNlc0NvbnRlbnQiOlsiLy9kYXRhIGZldGNoIGFwaSBoZXJlIHdpdGggZ2V0U2VyXG5cblxuXG5cbiAgZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XG4gICAgY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfQkFTRVxuICAgIGNvbnN0IHRpdGxlID0gSlNPTi5wYXJzZShyZXEuYm9keSkudGl0bGVcbiAgICBjb25zdCBxdWVyeSA9IGBzPSR7dGl0bGUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIiUyMFwiKX0mcj1qc29uYFxuICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9JHtxdWVyeX1gXG4gICAgY29uc29sZS5sb2codXJsKVxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAgICAgICBcIlgtUmFwaWRBUEktS2V5XCI6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfS0VZLFxuICAgICAgICBcIlgtUmFwaWRBUEktSG9zdFwiOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX0hPU1RcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXFEYXRhID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKVxuICAgIGlmKHJlcURhdGEuc3RhdHVzID09IDIwMCl7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXFEYXRhLmpzb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSlcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKVxuICAgICAgfVxuXG4gICAgfVxuICAgIFxuICB9Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9BUElfQkFTRSIsInRpdGxlIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsInF1ZXJ5IiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsImpvaW4iLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJSRUFDVF9BUFBfQVBJX0tFWSIsIlJFQUNUX0FQUF9BUElfSE9TVCIsInJlcURhdGEiLCJmZXRjaCIsInN0YXR1cyIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJyZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/search.js\n");

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