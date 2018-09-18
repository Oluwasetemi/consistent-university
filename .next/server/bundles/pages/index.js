module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Events.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\components\\Events.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-1855456483" + " " + "events"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-1855456483"
  }, "Events"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-1855456483"
  }, "Hello World!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1855456483",
    css: ".events.jsx-1855456483{margin-top:5px;height:40vh;border:1px solid #35185190;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEV2ZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLTyxBQUcwQixlQUNILFlBQ2UsMkJBRTdCIiwiZmlsZSI6ImNvbXBvbmVudHNcXEV2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHNldGVtaW9qb1xcRGVza3RvcFxccHJvamVjdHNcXHJcXGVkdWNhdGlvbi13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50c1wiPlxuICAgIDxoMT5FdmVudHM8L2gxPlxuICAgIDxwPkhlbGxvIFdvcmxkITwvcD5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmV2ZW50cyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzUxODUxOTA7XG4gICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=components\\Events.js */"
  }));
});

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\components\\Footer.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-598730991"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-598730991"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-598730991"
  }, "\xA9 Consistent University"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-598730991"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-598730991"
  }, "Made with \uD83D\uDC96\uD83D\uDC96\uD83D\uDC96 by Nike Obe"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "598730991",
    css: "div.jsx-598730991{font-weight:200;padding:20px;border-top:15px solid rgb(36,255,20);background:#351851;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRTyxBQUcyQixnQkFDSCxhQUMwQixxQ0FDcEIsbUJBQ1AsWUFDZCIsImZpbGUiOiJjb21wb25lbnRzXFxGb290ZXIuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzZXRlbWlvam9cXERlc2t0b3BcXHByb2plY3RzXFxyXFxlZHVjYXRpb24td2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPGI+PC9iPlxuICAgIDxzcGFuPiZjb3B5OyBDb25zaXN0ZW50IFVuaXZlcnNpdHk8L3NwYW4+PGJyIC8+XG4gICAgPHNwYW4+TWFkZSB3aXRoIPCfkpbwn5KW8J+SliBieSBOaWtlIE9iZTwvc3Bhbj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCByZ2IoMzYsIDI1NSwgMjApO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzNTE4NTE7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=components\\Footer.js */"
  }));
});

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "C:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\components\\Header.js";



var linkStyle = {
  marginRight: 15
};
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-3459626919"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-3459626919" + " " + "header"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "/static/i4.png",
    alt: "logo",
    width: "355",
    height: "120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-3459626919"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-3459626919"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-3459626919" + " " + "additional-menu"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/portal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-3459626919"
  }, "My Account")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/webmail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-3459626919"
  }, "Webmail")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/profiles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-3459626919"
  }, "Profiles")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-3459626919" + " " + "nav-menu"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-3459626919"
  }, "About")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/admission",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    className: "jsx-3459626919"
  }, "Admissions")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/colleges",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-3459626919"
  }, "Colleges")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/library",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    className: "jsx-3459626919"
  }, "Library")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-3459626919"
  }, "News")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/publications",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    className: "jsx-3459626919"
  }, "Publications")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/research",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    className: "jsx-3459626919"
  }, "Research")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/calender",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    className: "jsx-3459626919"
  }, "Academics Calender"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3459626919",
    css: ".nav-menu.jsx-3459626919{max-width:100%;margin-bottom:20px;padding:10px;background-color:#351851;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-bottom:15px solid rgb(36,255,20);}.nav-menu.jsx-3459626919 a.jsx-3459626919{-webkit-text-decoration:none;text-decoration:none;padding:20px;color:white;font-weight:200;}.nav-menu.jsx-3459626919 a.jsx-3459626919:hover{color:#351851;background-color:rgb(36,255,20);-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}.header.jsx-3459626919{display:grid;grid-template-columns:auto 1fr 300px;margin-bottom:5px;}.additional-menu.jsx-3459626919 a.jsx-3459626919{-webkit-text-decoration:none;text-decoration:none;color:white;}.additional-menu.jsx-3459626919{height:120px;background-color:#351851;grid-column:3 / -1;display:grid;grid-template-columns:repeat(3,100px);-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}b.jsx-3459626919{height:120px;background-color:#351851;border:none;margin:0;padding:0;}img.jsx-3459626919:hover{cursor:pointer;}@media all and (max-width:600px){.header.jsx-3459626919{grid-template-rows:auto auto;}b.jsx-3459626919{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGdCLEFBR3NCLEFBVU0sQUFPUCxBQU1ELEFBTVEsQUFLUixBQVFBLEFBT0UsQUFJZ0IsQUFHaEIsYUFoQ3NCLEFBV1osQUFRQSxBQWN6QixDQXZDa0MsQ0FqQmYsQUFpRHJCLGNBSUUsS0FwRGEsSUFrQ00sQUFRUCxRQXpCUyxDQWhCSSxHQVFaLEFBZUssQUFJTixBQWVILE9BUkcsRUFTRixHQWZaLENBbkJjLEtBZWQsQ0FvQkEsQ0FUeUMsRUFsQzFCLEdBU0csZ0JBQ2xCLGlCQXlCdUIsYUFuQnZCLHlCQWZpQixzQ0FtQ2pCLG1CQWxDeUIsbUdBQ21CLHdDQUM1QyIsImZpbGUiOiJjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzZXRlbWlvam9cXERlc2t0b3BcXHByb2plY3RzXFxyXFxlZHVjYXRpb24td2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua1N0eWxlID0ge1xuICBtYXJnaW5SaWdodDogMTVcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8bmF2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaTQucG5nXCIgYWx0PVwibG9nb1wiIHdpZHRoPVwiMzU1XCIgaGVpZ2h0PVwiMTIwXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxiPjwvYj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkaXRpb25hbC1tZW51XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGFsXCI+XG4gICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+TXkgQWNjb3VudDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3dlYm1haWxcIj5cbiAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PldlYm1haWw8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlc1wiPlxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PlByb2ZpbGVzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1tZW51XCI+XG4gICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9hZG1pc3Npb25cIj5cbiAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+QWRtaXNzaW9uczwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvY29sbGVnZXNcIj5cbiAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+Q29sbGVnZXM8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL2xpYnJhcnlcIj5cbiAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+TGlicmFyeTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvbmV3c1wiPlxuICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5OZXdzPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9wdWJsaWNhdGlvbnNcIj5cbiAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+UHVibGljYXRpb25zPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9yZXNlYXJjaFwiPlxuICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5SZXNlYXJjaDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvY2FsZW5kZXJcIj5cbiAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+QWNhZGVtaWNzIENhbGVuZGVyPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAubmF2LW1lbnUge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUxODUxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCByZ2IoMzYsIDI1NSwgMjApO1xuICAgIH1cbiAgICAubmF2LW1lbnUgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICB9XG5cbiAgICAubmF2LW1lbnUgYTpob3ZlciB7XG4gICAgICBjb2xvcjogIzM1MTg1MTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgMjU1LCAyMCk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciAzMDBweDtcbiAgICAgIC8vIGFsaWduLWl0ZW06IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLmFkZGl0aW9uYWwtbWVudSBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuYWRkaXRpb25hbC1tZW51IHtcbiAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUxODUxO1xuICAgICAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcbiAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDEwMHB4KTtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgYiB7XG4gICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MTg1MTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIGltZzpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG4gICAgICB9XG4gICAgICBiIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gIDwvbmF2PlxuXG4pIl19 */\n/*@ sourceURL=components\\Header.js */"
  }));
});

/***/ }),

/***/ "./components/News.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\components\\News.js";


var news = [{
  id: 1,
  topic: 'Vice-Chancellor Urges Participants to Maximize Opportunuity at Training Programme on Leadership Skills, Others',
  image: '',
  message: 'The Vice-Chancellor Consistent University Professor Nike Obe has urged participant to use the opportunities that will be coming their way to the very best during the Leadership Training Programme...'
}, {
  id: 2,
  topic: 'SUG commissions a New Lecture Facility',
  image: '',
  message: 'Student Union Government commissioned a new lecture facility in the main complex of college of technology to enhance students ease in quality lecture delivery and further the promise to deliver an optimal service with the opportunity to serve their counterparts. '
}, {
  id: 3,
  topic: 'SUG commissions a New Lecture Facility',
  image: '',
  message: 'Student Union Government commissioned a new lecture facility in the main complex of college of technology to enhance students ease in quality lecture delivery and further the promise to deliver an optimal service with the opportunity to serve their counterparts. '
}];

var getNews = function getNews(news) {
  return news.map(function (news) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: news.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "new-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, news.topic), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }, news.message)));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    className: "jsx-1747822534" + " " + "news"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    className: "jsx-1747822534"
  }, "News"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-1747822534"
  }, getNews(news)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1747822534",
    css: ".news.jsx-1747822534{border-radius:5px;border:4px solid #35185190;margin-bottom:10px;}h1.jsx-1747822534{margin-left:40px;}ul.jsx-1747822534{list-style-type:none;height:auto;margin:0;}li.jsx-1747822534{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE5ld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENPLEFBRzJCLEFBT0QsQUFHSSxBQUtiLFNBQ1YsUUFSQSxDQVA2QixHQVVmLFlBQ0osU0FDVixHQVhxQixtQkFBTSIsImZpbGUiOiJjb21wb25lbnRzXFxOZXdzLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcc2V0ZW1pb2pvXFxEZXNrdG9wXFxwcm9qZWN0c1xcclxcZWR1Y2F0aW9uLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuZXdzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdG9waWM6ICdWaWNlLUNoYW5jZWxsb3IgVXJnZXMgUGFydGljaXBhbnRzIHRvIE1heGltaXplIE9wcG9ydHVudWl0eSBhdCBUcmFpbmluZyBQcm9ncmFtbWUgb24gTGVhZGVyc2hpcCBTa2lsbHMsIE90aGVycycsXG4gICAgaW1hZ2U6ICcnLFxuICAgIG1lc3NhZ2U6ICdUaGUgVmljZS1DaGFuY2VsbG9yIENvbnNpc3RlbnQgVW5pdmVyc2l0eSBQcm9mZXNzb3IgTmlrZSBPYmUgaGFzIHVyZ2VkIHBhcnRpY2lwYW50IHRvIHVzZSB0aGUgb3Bwb3J0dW5pdGllcyB0aGF0IHdpbGwgYmUgY29taW5nIHRoZWlyIHdheSB0byB0aGUgdmVyeSBiZXN0IGR1cmluZyB0aGUgTGVhZGVyc2hpcCBUcmFpbmluZyBQcm9ncmFtbWUuLi4nXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0b3BpYzogJ1NVRyBjb21taXNzaW9ucyBhIE5ldyBMZWN0dXJlIEZhY2lsaXR5JyxcbiAgICBpbWFnZTogJycsXG4gICAgbWVzc2FnZTogJ1N0dWRlbnQgVW5pb24gR292ZXJubWVudCBjb21taXNzaW9uZWQgYSBuZXcgbGVjdHVyZSBmYWNpbGl0eSBpbiB0aGUgbWFpbiBjb21wbGV4IG9mIGNvbGxlZ2Ugb2YgdGVjaG5vbG9neSB0byBlbmhhbmNlIHN0dWRlbnRzIGVhc2UgaW4gcXVhbGl0eSBsZWN0dXJlIGRlbGl2ZXJ5IGFuZCBmdXJ0aGVyIHRoZSBwcm9taXNlIHRvIGRlbGl2ZXIgYW4gb3B0aW1hbCBzZXJ2aWNlIHdpdGggdGhlIG9wcG9ydHVuaXR5IHRvIHNlcnZlIHRoZWlyIGNvdW50ZXJwYXJ0cy4gJ1xuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdG9waWM6ICdTVUcgY29tbWlzc2lvbnMgYSBOZXcgTGVjdHVyZSBGYWNpbGl0eScsXG4gICAgaW1hZ2U6ICcnLFxuICAgIG1lc3NhZ2U6ICdTdHVkZW50IFVuaW9uIEdvdmVybm1lbnQgY29tbWlzc2lvbmVkIGEgbmV3IGxlY3R1cmUgZmFjaWxpdHkgaW4gdGhlIG1haW4gY29tcGxleCBvZiBjb2xsZWdlIG9mIHRlY2hub2xvZ3kgdG8gZW5oYW5jZSBzdHVkZW50cyBlYXNlIGluIHF1YWxpdHkgbGVjdHVyZSBkZWxpdmVyeSBhbmQgZnVydGhlciB0aGUgcHJvbWlzZSB0byBkZWxpdmVyIGFuIG9wdGltYWwgc2VydmljZSB3aXRoIHRoZSBvcHBvcnR1bml0eSB0byBzZXJ2ZSB0aGVpciBjb3VudGVycGFydHMuICdcbiAgfVxuXVxuXG5cbmNvbnN0IGdldE5ld3MgPSAobmV3cykgPT4ge1xuICByZXR1cm4gKFxuICAgIG5ld3MubWFwKG5ld3MgPT4gKFxuICAgICAgPGxpIGtleT17bmV3cy5pZH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LWl0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPntuZXdzLnRvcGljfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPntuZXdzLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICApKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJuZXdzXCI+XG4gIDxoMT5OZXdzPC9oMT5cbiAgICA8dWw+XG4gICAge2dldE5ld3MobmV3cyl9XG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgIC5uZXdzIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjMzUxODUxOTA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7ICAgICAgfVxuICAgICAgLm5ldy1pdGVtIHtcblxuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBtYXJnaW46MDtcbiAgICAgIH1cblxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=components\\News.js */"
  }));
});

/***/ }),

/***/ "./components/Notifications.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\components\\Notifications.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-2906529233" + " " + "notification"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-2906529233"
  }, "Notifications"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-2906529233"
  }, "Hello World!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2906529233",
    css: ".notification.jsx-2906529233{margin-top:5px;height:40vh;border:1px solid #35185190;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS08sQUFHMEIsZUFDSCxZQUNlLDJCQUU3QiIsImZpbGUiOiJjb21wb25lbnRzXFxOb3RpZmljYXRpb25zLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcc2V0ZW1pb2pvXFxEZXNrdG9wXFxwcm9qZWN0c1xcclxcZWR1Y2F0aW9uLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uXCI+XG4gICAgPGgxPk5vdGlmaWNhdGlvbnM8L2gxPlxuICAgIDxwPkhlbGxvIFdvcmxkITwvcD5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzUxODUxOTA7XG4gICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=components\\Notifications.js */"
  }));
});

/***/ }),

/***/ "./components/Publication.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\components\\Publication.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-2645141677" + " " + "publication"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-2645141677"
  }, "Publication"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-2645141677"
  }, "Hello World!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2645141677",
    css: ".publication.jsx-2645141677{margin-top:5px;height:40vh;border:1px solid #35185190;border-radius:5px;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFB1YmxpY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtPLEFBRzBCLGVBQ0gsWUFDZSwyQkFDVCxrQkFDQyxtQkFDckIiLCJmaWxlIjoiY29tcG9uZW50c1xcUHVibGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzZXRlbWlvam9cXERlc2t0b3BcXHByb2plY3RzXFxyXFxlZHVjYXRpb24td2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInB1YmxpY2F0aW9uXCI+XHJcbiAgICA8aDE+UHVibGljYXRpb248L2gxPlxyXG4gICAgPHA+SGVsbG8gV29ybGQhPC9wPlxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgICAucHVibGljYXRpb24ge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM1MTg1MTkwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pIl19 */\n/*@ sourceURL=components\\Publication.js */"
  }));
});

/***/ }),

/***/ "./components/QuickLinks.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\components\\QuickLinks.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-2166081823" + " " + "quick-link"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-2166081823"
  }, "Quick Links"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-2166081823"
  }, "Hello World!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2166081823",
    css: ".quick-link.jsx-2166081823{margin-top:5px;height:40vh;border:1px solid #35185190;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFF1aWNrTGlua3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS08sQUFHMEIsZUFDSCxZQUNlLDJCQUU3QiIsImZpbGUiOiJjb21wb25lbnRzXFxRdWlja0xpbmtzLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcc2V0ZW1pb2pvXFxEZXNrdG9wXFxwcm9qZWN0c1xcclxcZWR1Y2F0aW9uLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicXVpY2stbGlua1wiPlxuICAgIDxoMT5RdWljayBMaW5rczwvaDE+XG4gICAgPHA+SGVsbG8gV29ybGQhPC9wPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAucXVpY2stbGluayB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzUxODUxOTA7XG4gICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=components\\QuickLinks.js */"
  }));
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuka_carousel__ = __webpack_require__("nuka-carousel");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuka_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuka_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_News__ = __webpack_require__("./components/News.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_QuickLinks__ = __webpack_require__("./components/QuickLinks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Notifications__ = __webpack_require__("./components/Notifications.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Events__ = __webpack_require__("./components/Events.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Publication__ = __webpack_require__("./components/Publication.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = "C:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var fixedHeight = {
  height: '500px'
};

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        slideIndex: 0
      }
    }), _temp));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var imgStyle = {
        height: '485px'
      };
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_nuka_carousel___default.a, {
        dragging: true,
        transitionMode: "fade",
        slideIndex: this.state.slideIndex,
        afterSlide: function afterSlide(slideIndex) {
          return _this2.setState({
            slideIndex: slideIndex
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "static/i1.jpeg",
        style: imgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "static/i2.jpeg",
        style: imgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "static/i3.jpeg",
        style: imgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "static/i4.jpeg",
        style: imgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "static/i5.jpeg",
        style: imgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "static/i6.jpeg",
        style: imgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })));
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var Index =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Index, _React$Component2);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-504211628" + " " + "container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-504211628" + " " + "header"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-504211628" + " " + "news"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_News__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-504211628" + " " + "carousel"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(App, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-504211628" + " " + "quick-link"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_QuickLinks__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-504211628" + " " + "notification"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Notifications__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-504211628" + " " + "event"
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Events__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-504211628" + " " + "publication"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Publication__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-504211628" + " " + "footer"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "504211628",
        css: ".container.jsx-504211628{font-weight:200;display:grid;grid-template-areas:\"h h h h\" \"c c c n\" \"q no no e\" \"p p p p\" \"f f f f\";}.header.jsx-504211628{grid-area:h;margin:0;}.news.jsx-504211628{grid-area:n;width:380px;height:-webkit-max-content;height:-moz-max-content;height:max-content;}.carousel.jsx-504211628{grid-area:c;padding:0;margin:0;width:930px;height:70vh;}.quick-link.jsx-504211628{grid-area:q;}.notification.jsx-504211628{grid-area:no;}.event.jsx-504211628{grid-area:e;}.publication.jsx-504211628{grid-area:p;}.footer.jsx-504211628{grid-area:f;}@media all and (max-width:1200px){.carousel.jsx-504211628{width:750px;}}@media all and (max-width:960px){.container.jsx-504211628{display:block;}.carousel.jsx-504211628{margin-bottom:60px;}.container.jsx-504211628>*.jsx-504211628{width:100%;}.nav-menu.jsx-504211628{font-size:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRE8sQUFJMkIsQUFNSCxBQUtBLEFBTUEsQUFPQSxBQUdDLEFBR0YsQUFHQSxBQUdBLEFBS0UsQUFPRSxBQUdLLEFBR1IsQUFHRyxXQUZoQixDQWhEUyxBQUtHLEFBTUYsQUFPWixBQU1BLEFBR0EsQUFHQSxBQUtFLENBZEYsQ0FxQkUsQ0FTQSxDQXpEYSxHQW1EYixFQTVDRixDQVdXLEVBTlUsS0FYcUQsRUFrQjVELFlBQ0EsWUFDZCx1Q0FQQSxPQVpBIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHNldGVtaW9qb1xcRGVza3RvcFxccHJvamVjdHNcXHJcXGVkdWNhdGlvbi13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ251a2EtY2Fyb3VzZWwnXG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgTmV3cyBmcm9tICcuLi9jb21wb25lbnRzL05ld3MnXG5pbXBvcnQgUXVpY2tMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvUXVpY2tMaW5rcydcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucydcbmltcG9ydCBFdmVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9FdmVudHMnXG5pbXBvcnQgUHVibGljYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QdWJsaWNhdGlvbidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5cbmNvbnN0IGZpeGVkSGVpZ2h0ID0ge1xuICBoZWlnaHQ6ICc1MDBweCdcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc2xpZGVJbmRleDogMFxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW1nU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6ICc0ODVweCcsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxDYXJvdXNlbCBkcmFnZ2luZz17dHJ1ZX0gdHJhbnNpdGlvbk1vZGU9XCJmYWRlXCIgc2xpZGVJbmRleD17dGhpcy5zdGF0ZS5zbGlkZUluZGV4fVxuICAgICAgYWZ0ZXJTbGlkZT17c2xpZGVJbmRleCA9PiB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleCB9KX0+XG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2kxLmpwZWdcIiBzdHlsZT17aW1nU3R5bGV9IC8+XG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2kyLmpwZWdcIiBzdHlsZT17aW1nU3R5bGV9IC8+XG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2kzLmpwZWdcIiBzdHlsZT17aW1nU3R5bGV9IC8+XG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2k0LmpwZWdcIiBzdHlsZT17aW1nU3R5bGV9IC8+XG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2k1LmpwZWdcIiBzdHlsZT17aW1nU3R5bGV9IC8+XG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2k2LmpwZWdcIiBzdHlsZT17aW1nU3R5bGV9IC8+XG5cbiAgICA8L0Nhcm91c2VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzXCI+XG4gICAgICA8TmV3cyAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWxcIj5cbiAgICAgIDxBcHAgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInF1aWNrLWxpbmtcIj48UXVpY2tMaW5rIC8+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25cIj48Tm90aWZpY2F0aW9ucyAvPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj4gPEV2ZW50cyAvPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHVibGljYXRpb25cIj5cbiAgICAgIDxQdWJsaWNhdGlvbiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaCBoIGggaFwiIFwiYyBjIGMgblwiIFwicSBubyBubyBlXCIgXCJwIHAgcCBwXCIgXCJmIGYgZiBmXCI7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBncmlkLWFyZWE6ICBoO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uZXdzIHtcbiAgICAgICAgICBncmlkLWFyZWE6ICBuO1xuICAgICAgICAgIHdpZHRoOiAzODBweDtcbiAgICAgICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgICAgICAgIC8vIHotaW5kZXg6IDEwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiAgYztcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB3aWR0aDogOTMwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA3MHZoO1xuICAgICAgICB9XG4gICAgICAgIC5xdWljay1saW5rIHtcbiAgICAgICAgICBncmlkLWFyZWE6ICBxO1xuICAgICAgICB9XG4gICAgICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICAgIGdyaWQtYXJlYTogIG5vO1xuICAgICAgICB9XG4gICAgICAgIC5ldmVudCB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBlO1xuICAgICAgICB9XG4gICAgICAgIC5wdWJsaWNhdGlvbiB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBwO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIGdyaWQtYXJlYTogZjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgICAgICB3aWR0aDogNzUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyPiAqIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LW1lbnUge1xuICAgICAgICAgICAgZm9udC1zaXplOjEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=pages\\index.js */"
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "nuka-carousel":
/***/ (function(module, exports) {

module.exports = require("nuka-carousel");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map