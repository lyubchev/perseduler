module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/CTA.js":
/*!*******************************!*\
  !*** ./src/components/CTA.js ***!
  \*******************************/
/*! exports provided: CTA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTA", function() { return CTA; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./src/components/Container.js");
var _jsxFileName = "/home/lyubo/Projects/perseduler/src/components/CTA.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CTA = () => __jsx(_Container__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  flexDirection: "row",
  position: "fixed",
  bottom: "0",
  width: "100%",
  maxWidth: "48rem",
  py: 2,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  isExternal: true,
  href: "https://chakra-ui.com",
  flexGrow: 1,
  mx: 2,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  width: "100%",
  variant: "outline",
  variantColor: "green",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
}, "chakra-ui")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  isExternal: true,
  href: "https://github.com/zeit/next.js/blob/canary/examples/with-chakra-ui",
  flexGrow: 3,
  mx: 2,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  width: "100%",
  variant: "solid",
  variantColor: "green",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }
}, "View Repo")));

/***/ }),

/***/ "./src/components/Container.js":
/*!*************************************!*\
  !*** ./src/components/Container.js ***!
  \*************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/lyubo/Projects/perseduler/src/components/Container.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Container = props => {
  const {
    colorMode
  } = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["useColorMode"])();
  const bgColor = {
    light: 'gray.50',
    dark: 'gray.900'
  };
  const color = {
    light: 'black',
    dark: 'white'
  };
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], _extends({
    direction: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    bg: bgColor[colorMode],
    color: color[colorMode]
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }));
};

/***/ }),

/***/ "./src/components/DarkModeSwitch.js":
/*!******************************************!*\
  !*** ./src/components/DarkModeSwitch.js ***!
  \******************************************/
/*! exports provided: DarkModeSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkModeSwitch", function() { return DarkModeSwitch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/lyubo/Projects/perseduler/src/components/DarkModeSwitch.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const DarkModeSwitch = () => {
  const {
    colorMode,
    toggleColorMode
  } = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["useColorMode"])();
  const isDark = colorMode === 'dark';
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    position: "fixed",
    top: "1rem",
    right: "1rem",
    color: "green",
    isChecked: isDark,
    onChange: toggleColorMode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  });
};

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/lyubo/Projects/perseduler/src/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const Footer = props => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], _extends({
  as: "footer",
  py: "8rem"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 32
  }
}));

/***/ }),

/***/ "./src/components/Hero.js":
/*!********************************!*\
  !*** ./src/components/Hero.js ***!
  \********************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/lyubo/Projects/perseduler/src/components/Hero.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Hero = ({
  title
}) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
  fontSize: "10vw",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, title));
Hero.defaultProps = {
  title: 'with-chakra-ui'
};

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/lyubo/Projects/perseduler/src/components/Main.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const Main = props => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], _extends({
  spacing: "1.5rem",
  width: "100%",
  maxWidth: "48rem",
  mt: "-45vh",
  pt: "8rem",
  px: "1rem"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}));

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion-theming */ "emotion-theming");
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion_theming__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero */ "./src/components/Hero.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Main */ "./src/components/Main.js");
/* harmony import */ var _components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DarkModeSwitch */ "./src/components/DarkModeSwitch.js");
/* harmony import */ var _components_CTA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CTA */ "./src/components/CTA.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
var _jsxFileName = "/home/lyubo/Projects/perseduler/src/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Index = () => __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_4__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }
}, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_3__["Hero"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}), __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_5__["Main"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 7
  }
}, "Example repository of ", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Code"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 31
  }
}, "Next.js"), " + ", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Code"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 54
  }
}, "chakra-ui"), "."), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
  spacing: 3,
  my: 0,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListIcon"], {
  icon: "check-circle",
  color: "green.500",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 11
  }
}), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  isExternal: true,
  href: "https://chakra-ui.com",
  flexGrow: 1,
  mr: 2,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 11
  }
}, "Chakra UI ", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
  name: "external-link",
  mx: "2px",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 23
  }
}))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListIcon"], {
  icon: "check-circle",
  color: "green.500",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 11
  }
}), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  isExternal: true,
  href: "https://nextjs.org",
  flexGrow: 1,
  mr: 2,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 11
  }
}, "Next.js ", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
  name: "external-link",
  mx: "2px",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 21
  }
}))))), __jsx(_components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_6__["DarkModeSwitch"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }
}), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["Footer"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 7
  }
}, "Next \u2764\uFE0F Chakra")), __jsx(_components_CTA__WEBPACK_IMPORTED_MODULE_7__["CTA"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Object(emotion_theming__WEBPACK_IMPORTED_MODULE_1__["withTheme"])(Index));

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lyubo/Projects/perseduler/src/pages/index.js */"./src/pages/index.js");


/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core");

/***/ }),

/***/ "emotion-theming":
/*!**********************************!*\
  !*** external "emotion-theming" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion-theming");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map