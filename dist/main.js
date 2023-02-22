/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ \"./src/todoItem.js\");\n// const prompt = require(\"prompt-sync\")({ sigint: true });\n// import createTodo from \"./todoItem\";\n\n\n\nfunction init() {\n  const arr = [];\n  for (let i = 0; i < 10; i += 1) {\n    arr.push((0,_todoItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"A\", \"A\", 1));\n  }\n\n  // const test = createTodo();\n  // console.log(test.getTitle());\n  // test.setTitle(\"Title\");\n  // console.log(test.getTitle());\n  // console.log(test);\n\n  console.dir(arr);\n}\n\ninit();\n// function init() {\n//   console.log(\"Welcome to your todo list!\");\n\n//   let running = true;\n\n//   while (running) {\n//     console.log(\"Would you like to...\");\n//     console.log(\"1: View default project?\");\n//     console.log(\"2: Create a new project?\");\n\n//     let choice = Number(prompt(\"Choice here: \"));\n\n//     if (choice === 1) {\n//       accessProject();\n//     } else {\n//       return;\n//     }\n//   }\n// }\n\n// function createTodo() {\n//   //    Prompt for todo name, description, priority.\n//   //    Create a new todo item. Assign ID to todo item. (maybe?)\n//   //    Add todo item to Default Project's array.\n// }\n\n// function listTodos() {\n//   //    Iterate through the Default Project's array.\n//   //    Log all Todo Items within that array to the console.\n// }\n\n// function deleteTodo() {\n//   //    View all todos w/ index number\n//   //    Prompt for an index number\n//   //    Delete (splice) that index out of the array.\n// }\n\n// function accessProject() {\n//   console.log(\"Would you like to...\");\n//   console.log(\"1: Create a todo?\");\n//   console.log(\"2: View all todos?\");\n//   console.log(\"3: Delete a todo?\");\n\n//   let choice = Number(prompt(\"Choice here: \"));\n\n//   switch (choice) {\n//     case 1:\n//       createTodo();\n//       break;\n//     case 2:\n//       listTodos();\n//       break;\n//     case 3:\n//       deleteTodo();\n//       break;\n//     default:\n//       break;\n//   }\n// }\n\n// init();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// const todoItemProto = {\n//   getTitle() {\n//     return this.title;\n//   },\n//   setTitle(newTitle) {\n//     this.title = newTitle;\n//   },\n//   getDesc() {\n//     return this.desc;\n//   },\n//   setDesc(newDesc) {\n//     this.desc = newDesc;\n//   },\n//   getPriority() {\n//     return this.priority;\n//   },\n//   setPriority(newPriority) {\n//     this.priority = newPriority;\n//   },\n// };\n\n// function createTodo(title, desc, priority) {\n//   const todo = Object.create(todoItemProto);\n//   todo.title = title;\n//   todo.desc = desc;\n//   todo.priority = priority;\n//   return todo;\n// }\n\nfunction createTodo() {\n  let title = \"\";\n  let desc = \"\";\n  let priority = 0;\n\n  const setTitle = (newTitle) => {\n    title = newTitle;\n  };\n  const getTitle = () => title;\n\n  const setDesc = (newDesc) => {\n    desc = newDesc;\n  };\n  const getDesc = () => desc;\n\n  const setPriority = (newPriority) => {\n    priority = newPriority;\n  };\n  const getPriority = () => priority;\n\n  return {\n    setTitle,\n    getTitle,\n    setDesc,\n    getDesc,\n    setPriority,\n    getPriority,\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodo);\n\n\n//# sourceURL=webpack://todo-list/./src/todoItem.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;