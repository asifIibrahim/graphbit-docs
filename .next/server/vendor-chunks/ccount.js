"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ccount";
exports.ids = ["vendor-chunks/ccount"];
exports.modules = {

/***/ "(rsc)/./node_modules/ccount/index.js":
/*!**************************************!*\
  !*** ./node_modules/ccount/index.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ccount: () => (/* binding */ ccount)\n/* harmony export */ });\n/**\n * Count how often a character (or substring) is used in a string.\n *\n * @param {string} value\n *   Value to search in.\n * @param {string} character\n *   Character (or substring) to look for.\n * @return {number}\n *   Number of times `character` occurred in `value`.\n */ function ccount(value, character) {\n    const source = String(value);\n    if (typeof character !== \"string\") {\n        throw new TypeError(\"Expected character\");\n    }\n    let count = 0;\n    let index = source.indexOf(character);\n    while(index !== -1){\n        count++;\n        index = source.indexOf(character, index + character.length);\n    }\n    return count;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY2NvdW50L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7O0NBU0MsR0FDTSxTQUFTQSxPQUFPQyxLQUFLLEVBQUVDLFNBQVM7SUFDckMsTUFBTUMsU0FBU0MsT0FBT0g7SUFFdEIsSUFBSSxPQUFPQyxjQUFjLFVBQVU7UUFDakMsTUFBTSxJQUFJRyxVQUFVO0lBQ3RCO0lBRUEsSUFBSUMsUUFBUTtJQUNaLElBQUlDLFFBQVFKLE9BQU9LLE9BQU8sQ0FBQ047SUFFM0IsTUFBT0ssVUFBVSxDQUFDLEVBQUc7UUFDbkJEO1FBQ0FDLFFBQVFKLE9BQU9LLE9BQU8sQ0FBQ04sV0FBV0ssUUFBUUwsVUFBVU8sTUFBTTtJQUM1RDtJQUVBLE9BQU9IO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFwaGJpdC1kb2NzLy4vbm9kZV9tb2R1bGVzL2Njb3VudC9pbmRleC5qcz80MzcyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ291bnQgaG93IG9mdGVuIGEgY2hhcmFjdGVyIChvciBzdWJzdHJpbmcpIGlzIHVzZWQgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgIFZhbHVlIHRvIHNlYXJjaCBpbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJcbiAqICAgQ2hhcmFjdGVyIChvciBzdWJzdHJpbmcpIHRvIGxvb2sgZm9yLlxuICogQHJldHVybiB7bnVtYmVyfVxuICogICBOdW1iZXIgb2YgdGltZXMgYGNoYXJhY3RlcmAgb2NjdXJyZWQgaW4gYHZhbHVlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNjb3VudCh2YWx1ZSwgY2hhcmFjdGVyKSB7XG4gIGNvbnN0IHNvdXJjZSA9IFN0cmluZyh2YWx1ZSlcblxuICBpZiAodHlwZW9mIGNoYXJhY3RlciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBjaGFyYWN0ZXInKVxuICB9XG5cbiAgbGV0IGNvdW50ID0gMFxuICBsZXQgaW5kZXggPSBzb3VyY2UuaW5kZXhPZihjaGFyYWN0ZXIpXG5cbiAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgIGNvdW50KytcbiAgICBpbmRleCA9IHNvdXJjZS5pbmRleE9mKGNoYXJhY3RlciwgaW5kZXggKyBjaGFyYWN0ZXIubGVuZ3RoKVxuICB9XG5cbiAgcmV0dXJuIGNvdW50XG59XG4iXSwibmFtZXMiOlsiY2NvdW50IiwidmFsdWUiLCJjaGFyYWN0ZXIiLCJzb3VyY2UiLCJTdHJpbmciLCJUeXBlRXJyb3IiLCJjb3VudCIsImluZGV4IiwiaW5kZXhPZiIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/ccount/index.js\n");

/***/ })

};
;