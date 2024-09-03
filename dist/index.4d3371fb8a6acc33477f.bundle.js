/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _photo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo.png */ \"./src/photo.png\");\n/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.xml */ \"./src/data.xml\");\n/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_xml__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_csv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.csv */ \"./src/data.csv\");\n/* harmony import */ var _data_csv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_csv__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./print.js */ \"./src/print.js\");\n// import _ from \"lodash\";\n\n\n\n\n\nfunction component() {\n  var element = document.createElement(\"div\");\n  var p = document.createElement(\"p\");\n  p.innerHTML = \"WEBPACK project:<br>\" + \"A project with an individual Webpack configuration file has been created, which necessarily includes the following functionalities:<br>\" + \"<ol>\" + \"<li>Hashing filenames to prevent browser caching issues.</li>\" + \"<li>Support for local fonts to ensure correct display of texts.</li>\" + \"<li>Work with images.</li>\" + \"<li>Integration of CSS styles.</li>\" + \"<li>Optimized use of external libraries to reduce overall build size and improve performance.</li>\" + \"</ol>\";\n  p.classList.add(\"pink-elem\");\n  var btn = document.createElement(\"button\");\n  btn.classList.add(\"blue-elem\");\n  btn.innerHTML = \"Click me\";\n  btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n  var myIcon = new Image();\n  myIcon.src = _photo_png__WEBPACK_IMPORTED_MODULE_1__;\n  console.log((_data_xml__WEBPACK_IMPORTED_MODULE_2___default()));\n  console.log((_data_csv__WEBPACK_IMPORTED_MODULE_3___default()));\n  element.append(p, btn);\n  //   element.appendChild(btn);\n\n  return element;\n}\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack://task34/./src/index.js?");

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ printMe)\n/* harmony export */ });\nfunction printMe() {\n  alert(\"I get called from print.js!\");\n}\n\n//# sourceURL=webpack://task34/./src/print.js?");

/***/ }),

/***/ "./src/data.csv":
/*!**********************!*\
  !*** ./src/data.csv ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = [[\"name\",\" price\",\" description\",\" calories\"],[\"Belgian Waffles\",\" $5.95\",\" Two of our famous Belgian Waffles with plenty of real maple syrup\",\"650\"],[\"Strawberry Belgian Waffles\",\" $7.95\",\" Light Belgian waffles covered with strawberries and whipped cream\",\" 900\"]]\n\n//# sourceURL=webpack://task34/./src/data.csv?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://task34/./src/style.css?");

/***/ }),

/***/ "./src/data.xml":
/*!**********************!*\
  !*** ./src/data.xml ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = {\"breakfast_menu\":{\"food\":[{\"name\":[\"Belgian Waffles\"],\"price\":[\"$5.95\"],\"description\":[\"Two of our famous Belgian Waffles with plenty of real maple syrup\"],\"calories\":[\"650\"]},{\"name\":[\"Strawberry Belgian Waffles\"],\"price\":[\"$7.95\"],\"description\":[\"Light Belgian waffles covered with strawberries and whipped cream\"],\"calories\":[\"900\"]},{\"name\":[\"Berry-Berry Belgian Waffles\"],\"price\":[\"$8.95\"],\"description\":[\"Light Belgian waffles covered with an assortment of fresh berries and whipped cream\"],\"calories\":[\"900\"]},{\"name\":[\"French Toast\"],\"price\":[\"$4.50\"],\"description\":[\"Thick slices made from our homemade sourdough bread\"],\"calories\":[\"600\"]},{\"name\":[\"Homestyle Breakfast\"],\"price\":[\"$6.95\"],\"description\":[\"Two eggs, bacon or sausage, toast, and our ever-popular hash browns\"],\"calories\":[\"950\"]}]}}\n\n//# sourceURL=webpack://task34/./src/data.xml?");

/***/ }),

/***/ "./src/photo.png":
/*!***********************!*\
  !*** ./src/photo.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"31d6cfe0d16ae931b73c.png\";\n\n//# sourceURL=webpack://task34/./src/photo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;