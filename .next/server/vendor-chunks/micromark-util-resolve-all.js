"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-resolve-all";
exports.ids = ["vendor-chunks/micromark-util-resolve-all"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-util-resolve-all/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark-util-resolve-all/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveAll: () => (/* binding */ resolveAll)\n/* harmony export */ });\n/**\n * @import {Event, Resolver, TokenizeContext} from 'micromark-util-types'\n */ /**\n * Call all `resolveAll`s.\n *\n * @param {ReadonlyArray<{resolveAll?: Resolver | undefined}>} constructs\n *   List of constructs, optionally with `resolveAll`s.\n * @param {Array<Event>} events\n *   List of events.\n * @param {TokenizeContext} context\n *   Context used by `tokenize`.\n * @returns {Array<Event>}\n *   Changed events.\n */ function resolveAll(constructs, events, context) {\n    /** @type {Array<Resolver>} */ const called = [];\n    let index = -1;\n    while(++index < constructs.length){\n        const resolve = constructs[index].resolveAll;\n        if (resolve && !called.includes(resolve)) {\n            events = resolve(events, context);\n            called.push(resolve);\n        }\n    }\n    return events;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtcmVzb2x2ZS1hbGwvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztDQUVDLEdBRUQ7Ozs7Ozs7Ozs7O0NBV0MsR0FDTSxTQUFTQSxXQUFXQyxVQUFVLEVBQUVDLE1BQU0sRUFBRUMsT0FBTztJQUNwRCw0QkFBNEIsR0FDNUIsTUFBTUMsU0FBUyxFQUFFO0lBQ2pCLElBQUlDLFFBQVEsQ0FBQztJQUViLE1BQU8sRUFBRUEsUUFBUUosV0FBV0ssTUFBTSxDQUFFO1FBQ2xDLE1BQU1DLFVBQVVOLFVBQVUsQ0FBQ0ksTUFBTSxDQUFDTCxVQUFVO1FBRTVDLElBQUlPLFdBQVcsQ0FBQ0gsT0FBT0ksUUFBUSxDQUFDRCxVQUFVO1lBQ3hDTCxTQUFTSyxRQUFRTCxRQUFRQztZQUN6QkMsT0FBT0ssSUFBSSxDQUFDRjtRQUNkO0lBQ0Y7SUFFQSxPQUFPTDtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhcGhiaXQtZG9jcy8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1yZXNvbHZlLWFsbC9pbmRleC5qcz9jZDMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGltcG9ydCB7RXZlbnQsIFJlc29sdmVyLCBUb2tlbml6ZUNvbnRleHR9IGZyb20gJ21pY3JvbWFyay11dGlsLXR5cGVzJ1xuICovXG5cbi8qKlxuICogQ2FsbCBhbGwgYHJlc29sdmVBbGxgcy5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5QXJyYXk8e3Jlc29sdmVBbGw/OiBSZXNvbHZlciB8IHVuZGVmaW5lZH0+fSBjb25zdHJ1Y3RzXG4gKiAgIExpc3Qgb2YgY29uc3RydWN0cywgb3B0aW9uYWxseSB3aXRoIGByZXNvbHZlQWxsYHMuXG4gKiBAcGFyYW0ge0FycmF5PEV2ZW50Pn0gZXZlbnRzXG4gKiAgIExpc3Qgb2YgZXZlbnRzLlxuICogQHBhcmFtIHtUb2tlbml6ZUNvbnRleHR9IGNvbnRleHRcbiAqICAgQ29udGV4dCB1c2VkIGJ5IGB0b2tlbml6ZWAuXG4gKiBAcmV0dXJucyB7QXJyYXk8RXZlbnQ+fVxuICogICBDaGFuZ2VkIGV2ZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVBbGwoY29uc3RydWN0cywgZXZlbnRzLCBjb250ZXh0KSB7XG4gIC8qKiBAdHlwZSB7QXJyYXk8UmVzb2x2ZXI+fSAqL1xuICBjb25zdCBjYWxsZWQgPSBbXVxuICBsZXQgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgY29uc3RydWN0cy5sZW5ndGgpIHtcbiAgICBjb25zdCByZXNvbHZlID0gY29uc3RydWN0c1tpbmRleF0ucmVzb2x2ZUFsbFxuXG4gICAgaWYgKHJlc29sdmUgJiYgIWNhbGxlZC5pbmNsdWRlcyhyZXNvbHZlKSkge1xuICAgICAgZXZlbnRzID0gcmVzb2x2ZShldmVudHMsIGNvbnRleHQpXG4gICAgICBjYWxsZWQucHVzaChyZXNvbHZlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cbiJdLCJuYW1lcyI6WyJyZXNvbHZlQWxsIiwiY29uc3RydWN0cyIsImV2ZW50cyIsImNvbnRleHQiLCJjYWxsZWQiLCJpbmRleCIsImxlbmd0aCIsInJlc29sdmUiLCJpbmNsdWRlcyIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-util-resolve-all/index.js\n");

/***/ })

};
;