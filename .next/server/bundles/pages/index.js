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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
var _jsxFileName = "c:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\components\\Events.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-2500162601" + " " + "events"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-2500162601"
  }, "Events"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-2500162601"
  }, "Hello World!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2500162601",
    css: ".events.jsx-2500162601{margin-top:5px;height:40vh;width:97%;border:1px solid #35185190;border-radius:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEV2ZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLTyxBQUcwQixlQUNILFlBQ0YsVUFDaUIsMkJBQ1Qsa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHNcXEV2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiJjOlxcVXNlcnNcXHNldGVtaW9qb1xcRGVza3RvcFxccHJvamVjdHNcXHJcXGVkdWNhdGlvbi13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50c1wiPlxuICAgIDxoMT5FdmVudHM8L2gxPlxuICAgIDxwPkhlbGxvIFdvcmxkITwvcD5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmV2ZW50cyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgICB3aWR0aDogOTclO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNTE4NTE5MDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=components\\Events.js */"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__ = __webpack_require__("@fortawesome/react-fontawesome");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_free_brands_svg_icons__ = __webpack_require__("@fortawesome/free-brands-svg-icons");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_free_brands_svg_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__fortawesome_free_brands_svg_icons__);
var _jsxFileName = "c:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\components\\Footer.js";




/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-2391424365"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-2391424365"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-2391424365"
  }, "\xA9 Consistent University"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-2391424365"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-2391424365" + " " + "social"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__["FontAwesomeIcon"], {
    icon: ['fab', 'facebook'],
    size: "5x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__["FontAwesomeIcon"], {
    icon: ['fab', 'twitter'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__["FontAwesomeIcon"], {
    icon: ['fab', 'youtube'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2391424365",
    css: "div.jsx-2391424365{display:grid;grid-template-columns:100px 1fr 400px 1fr;height:10vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQk8sQUFHd0IsYUFDNkIsMENBQzlCLFlBQ2QiLCJmaWxlIjoiY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlUm9vdCI6ImM6XFxVc2Vyc1xcc2V0ZW1pb2pvXFxEZXNrdG9wXFxwcm9qZWN0c1xcclxcZWR1Y2F0aW9uLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgeyBmYWIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJ1xuXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8Yj48L2I+XG4gICAgPHNwYW4+JmNvcHk7IENvbnNpc3RlbnQgVW5pdmVyc2l0eTwvc3Bhbj5cbiAgICA8Yj48L2I+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic29jaWFsXCI+XG5cbiAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFiJywgJ2ZhY2Vib29rJ119IHNpemU9XCI1eFwiIC8+XG4gICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhYicsICd0d2l0dGVyJ119IC8+XG4gICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhYicsICd5b3V0dWJlJ119IC8+XG4gICAgPC9zcGFuPlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDFmciA0MDBweCAxZnI7XG4gICAgICAgICAgaGVpZ2h0OiAxMHZoO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=components\\Footer.js */"
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
var _jsxFileName = "c:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\components\\Header.js";



var linkStyle = {
  marginRight: 15
};
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-2825863147"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-2825863147" + " " + "header"
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
    className: "jsx-2825863147"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-2825863147"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-2825863147" + " " + "additional-menu"
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
    className: "jsx-2825863147"
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
    className: "jsx-2825863147"
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
    className: "jsx-2825863147"
  }, "Profiles")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-2825863147" + " " + "nav-menu"
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
    className: "jsx-2825863147"
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
    className: "jsx-2825863147"
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
    className: "jsx-2825863147"
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
    className: "jsx-2825863147"
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
    className: "jsx-2825863147"
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
    className: "jsx-2825863147"
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
    className: "jsx-2825863147"
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
    className: "jsx-2825863147"
  }, "Academics Calender"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2825863147",
    css: ".nav-menu.jsx-2825863147{margin-bottom:20px;padding:10px;background-color:#351851;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.nav-menu.jsx-2825863147 a.jsx-2825863147{-webkit-text-decoration:none;text-decoration:none;padding:20px;color:white;}.nav-menu.jsx-2825863147 a.jsx-2825863147:hover{color:#351851;background-color:white;-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}.header.jsx-2825863147{display:grid;grid-template-columns:auto 1fr 300px;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;margin-bottom:5px;}.additional-menu.jsx-2825863147 a.jsx-2825863147{-webkit-text-decoration:none;text-decoration:none;color:white;}.additional-menu.jsx-2825863147{height:120px;background-color:#351851;grid-column:3 / -1;display:grid;grid-template-columns:repeat(3,100px);-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}b.jsx-2825863147{height:120px;background-color:#351851;}img.jsx-2825863147:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGdCLEFBRzBCLEFBT0UsQUFNUCxBQU1ELEFBTVEsQUFLUixBQVFBLEFBSUUsYUF0QnNCLEFBV1osQUFRQSxDQXpCRixDQTZCekIsSUExQ2UsYUFDWSxLQWFKLENBaUJGLEFBUXJCLFlBaENlLEFBYUssQUFLTixPQXZCQyxBQThCRCxLQU5kLENBbEJjLE9BeUIyQixLQXhCekMsaUNBeUJ1QixJQW5CdkIsbUJBWnlCLG9CQWtCTCxrQkFDcEIsZUFhQSw4Q0EvQkEiLCJmaWxlIjoiY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlUm9vdCI6ImM6XFxVc2Vyc1xcc2V0ZW1pb2pvXFxEZXNrdG9wXFxwcm9qZWN0c1xcclxcZWR1Y2F0aW9uLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgbWFyZ2luUmlnaHQ6IDE1XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPG5hdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2k0LnBuZ1wiIGFsdD1cImxvZ29cIiB3aWR0aD1cIjM1NVwiIGhlaWdodD1cIjEyMFwiIC8+XG4gICAgICA8L0xpbms+XG4gICAgICA8Yj48L2I+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZGl0aW9uYWwtbWVudVwiPlxuICAgICAgICA8TGluayBocmVmPVwiL3BvcnRhbFwiPlxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9Pk15IEFjY291bnQ8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi93ZWJtYWlsXCI+XG4gICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5XZWJtYWlsPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZXNcIj5cbiAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5Qcm9maWxlczwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbWVudVwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaXNzaW9uXCI+XG4gICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFkbWlzc2lvbnM8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL2NvbGxlZ2VzXCI+XG4gICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkNvbGxlZ2VzPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9saWJyYXJ5XCI+XG4gICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkxpYnJhcnk8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL25ld3NcIj5cbiAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+TmV3czwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcHVibGljYXRpb25zXCI+XG4gICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PlB1YmxpY2F0aW9uczwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcmVzZWFyY2hcIj5cbiAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+UmVzZWFyY2g8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL2NhbGVuZGVyXCI+XG4gICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFjYWRlbWljcyBDYWxlbmRlcjwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgLm5hdi1tZW51IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MTg1MTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLm5hdi1tZW51IGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAubmF2LW1lbnUgYTpob3ZlciB7XG4gICAgICBjb2xvcjogIzM1MTg1MTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgMzAwcHg7XG4gICAgICBhbGlnbi1pdGVtOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIC5hZGRpdGlvbmFsLW1lbnUgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmFkZGl0aW9uYWwtbWVudSB7XG4gICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MTg1MTtcbiAgICAgIGdyaWQtY29sdW1uOiAzIC8gLTE7XG4gICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxMDBweCk7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIGIge1xuICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTE4NTE7XG4gICAgfVxuICAgIGltZzpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgYH08L3N0eWxlPlxuICA8L25hdj5cblxuKSJdfQ== */\n/*@ sourceURL=components\\Header.js */"
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
var _jsxFileName = "c:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\components\\News.js";


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
    className: "jsx-1517951658" + " " + "news"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    className: "jsx-1517951658"
  }, "News"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-1517951658"
  }, getNews(news)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1517951658",
    css: ".news.jsx-1517951658{width:33vw;border-radius:5px;border:4px solid #35185190;}h1.jsx-1517951658{margin-left:40px;}ul.jsx-1517951658{list-style-type:none;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE5ld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENPLEFBR29CLEFBUU0sQUFHSSxXQVZILE1BUXBCLElBR2MsUUFWZSxJQVc3Qix1QkFWQSIsImZpbGUiOiJjb21wb25lbnRzXFxOZXdzLmpzIiwic291cmNlUm9vdCI6ImM6XFxVc2Vyc1xcc2V0ZW1pb2pvXFxEZXNrdG9wXFxwcm9qZWN0c1xcclxcZWR1Y2F0aW9uLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuZXdzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdG9waWM6ICdWaWNlLUNoYW5jZWxsb3IgVXJnZXMgUGFydGljaXBhbnRzIHRvIE1heGltaXplIE9wcG9ydHVudWl0eSBhdCBUcmFpbmluZyBQcm9ncmFtbWUgb24gTGVhZGVyc2hpcCBTa2lsbHMsIE90aGVycycsXG4gICAgaW1hZ2U6ICcnLFxuICAgIG1lc3NhZ2U6ICdUaGUgVmljZS1DaGFuY2VsbG9yIENvbnNpc3RlbnQgVW5pdmVyc2l0eSBQcm9mZXNzb3IgTmlrZSBPYmUgaGFzIHVyZ2VkIHBhcnRpY2lwYW50IHRvIHVzZSB0aGUgb3Bwb3J0dW5pdGllcyB0aGF0IHdpbGwgYmUgY29taW5nIHRoZWlyIHdheSB0byB0aGUgdmVyeSBiZXN0IGR1cmluZyB0aGUgTGVhZGVyc2hpcCBUcmFpbmluZyBQcm9ncmFtbWUuLi4nXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0b3BpYzogJ1NVRyBjb21taXNzaW9ucyBhIE5ldyBMZWN0dXJlIEZhY2lsaXR5JyxcbiAgICBpbWFnZTogJycsXG4gICAgbWVzc2FnZTogJ1N0dWRlbnQgVW5pb24gR292ZXJubWVudCBjb21taXNzaW9uZWQgYSBuZXcgbGVjdHVyZSBmYWNpbGl0eSBpbiB0aGUgbWFpbiBjb21wbGV4IG9mIGNvbGxlZ2Ugb2YgdGVjaG5vbG9neSB0byBlbmhhbmNlIHN0dWRlbnRzIGVhc2UgaW4gcXVhbGl0eSBsZWN0dXJlIGRlbGl2ZXJ5IGFuZCBmdXJ0aGVyIHRoZSBwcm9taXNlIHRvIGRlbGl2ZXIgYW4gb3B0aW1hbCBzZXJ2aWNlIHdpdGggdGhlIG9wcG9ydHVuaXR5IHRvIHNlcnZlIHRoZWlyIGNvdW50ZXJwYXJ0cy4gJ1xuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdG9waWM6ICdTVUcgY29tbWlzc2lvbnMgYSBOZXcgTGVjdHVyZSBGYWNpbGl0eScsXG4gICAgaW1hZ2U6ICcnLFxuICAgIG1lc3NhZ2U6ICdTdHVkZW50IFVuaW9uIEdvdmVybm1lbnQgY29tbWlzc2lvbmVkIGEgbmV3IGxlY3R1cmUgZmFjaWxpdHkgaW4gdGhlIG1haW4gY29tcGxleCBvZiBjb2xsZWdlIG9mIHRlY2hub2xvZ3kgdG8gZW5oYW5jZSBzdHVkZW50cyBlYXNlIGluIHF1YWxpdHkgbGVjdHVyZSBkZWxpdmVyeSBhbmQgZnVydGhlciB0aGUgcHJvbWlzZSB0byBkZWxpdmVyIGFuIG9wdGltYWwgc2VydmljZSB3aXRoIHRoZSBvcHBvcnR1bml0eSB0byBzZXJ2ZSB0aGVpciBjb3VudGVycGFydHMuICdcbiAgfVxuXVxuXG5cbmNvbnN0IGdldE5ld3MgPSAobmV3cykgPT4ge1xuICByZXR1cm4gKFxuICAgIG5ld3MubWFwKG5ld3MgPT4gKFxuICAgICAgPGxpIGtleT17bmV3cy5pZH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LWl0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPntuZXdzLnRvcGljfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPntuZXdzLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICApKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJuZXdzXCI+XG4gIDxoMT5OZXdzPC9oMT5cbiAgICA8dWw+XG4gICAge2dldE5ld3MobmV3cyl9XG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgIC5uZXdzIHtcbiAgICAgICAgd2lkdGg6IDMzdnc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzM1MTg1MTkwO1xuICAgICAgfVxuICAgICAgLm5ldy1pdGVtIHtcblxuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=components\\News.js */"
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
var _jsxFileName = "c:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\components\\Notifications.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-2074003975" + " " + "notification"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-2074003975"
  }, "Notifications"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-2074003975"
  }, "Hello World!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2074003975",
    css: ".notification.jsx-2074003975{margin-top:5px;height:40vh;width:96%;border:1px solid #35185190;border-radius:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS08sQUFHMEIsZUFDSCxZQUNGLFVBQ2lCLDJCQUNULGtCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzXFxOb3RpZmljYXRpb25zLmpzIiwic291cmNlUm9vdCI6ImM6XFxVc2Vyc1xcc2V0ZW1pb2pvXFxEZXNrdG9wXFxwcm9qZWN0c1xcclxcZWR1Y2F0aW9uLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uXCI+XG4gICAgPGgxPk5vdGlmaWNhdGlvbnM8L2gxPlxuICAgIDxwPkhlbGxvIFdvcmxkITwvcD5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNTE4NTE5MDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=components\\Notifications.js */"
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
var _jsxFileName = "c:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\components\\Publication.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-2118131936" + " " + "publication"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-2118131936"
  }, "Publication"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-2118131936"
  }, "Hello World!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2118131936",
    css: ".publication.jsx-2118131936{margin-top:5px;height:40vh;width:99%;border:1px solid #35185190;border-radius:5px;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFB1YmxpY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtPLEFBRzBCLGVBQ0gsWUFDRixVQUNpQiwyQkFDVCxrQkFDQyxtQkFDckIiLCJmaWxlIjoiY29tcG9uZW50c1xcUHVibGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiYzpcXFVzZXJzXFxzZXRlbWlvam9cXERlc2t0b3BcXHByb2plY3RzXFxyXFxlZHVjYXRpb24td2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInB1YmxpY2F0aW9uXCI+XHJcbiAgICA8aDE+UHVibGljYXRpb248L2gxPlxyXG4gICAgPHA+SGVsbG8gV29ybGQhPC9wPlxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgICAucHVibGljYXRpb24ge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgICAgICAgd2lkdGg6IDk5JTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNTE4NTE5MDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKSJdfQ== */\n/*@ sourceURL=components\\Publication.js */"
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
var _jsxFileName = "c:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\components\\QuickLinks.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-243037505" + " " + "quick-link"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-243037505"
  }, "Quick Links"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-243037505"
  }, "Hello World!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "243037505",
    css: ".quick-link.jsx-243037505{margin-top:5px;height:40vh;width:95%;border:1px solid #35185190;border-radius:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFF1aWNrTGlua3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS08sQUFHMEIsZUFDSCxZQUNGLFVBQ2lCLDJCQUNULGtCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzXFxRdWlja0xpbmtzLmpzIiwic291cmNlUm9vdCI6ImM6XFxVc2Vyc1xcc2V0ZW1pb2pvXFxEZXNrdG9wXFxwcm9qZWN0c1xcclxcZWR1Y2F0aW9uLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicXVpY2stbGlua1wiPlxuICAgIDxoMT5RdWljayBMaW5rczwvaDE+XG4gICAgPHA+SGVsbG8gV29ybGQhPC9wPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAucXVpY2stbGluayB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNTE4NTE5MDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=components\\QuickLinks.js */"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_svg_core__ = __webpack_require__("@fortawesome/fontawesome-svg-core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_svg_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_svg_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_react_fontawesome__ = __webpack_require__("@fortawesome/react-fontawesome");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__fortawesome_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_free_solid_svg_icons__ = __webpack_require__("@fortawesome/free-solid-svg-icons");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_free_solid_svg_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__fortawesome_free_solid_svg_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_nuka_carousel__ = __webpack_require__("nuka-carousel");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_nuka_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_nuka_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_News__ = __webpack_require__("./components/News.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_QuickLinks__ = __webpack_require__("./components/QuickLinks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Notifications__ = __webpack_require__("./components/Notifications.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Events__ = __webpack_require__("./components/Events.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Publication__ = __webpack_require__("./components/Publication.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = "c:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_svg_core__["library"].add(__WEBPACK_IMPORTED_MODULE_5__fortawesome_free_solid_svg_icons__["faStroopwafel"]);







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
        height: '69vh'
      };
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_nuka_carousel___default.a, {
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
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "static/i1.png",
        style: imgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "static/i2.png",
        style: imgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "static/i1.png",
        style: imgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "static/i2.png",
        style: imgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
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
          lineNumber: 49
        },
        className: "jsx-2678353543" + " " + "container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-2678353543" + " " + "header"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-2678353543" + " " + "news"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_News__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-2678353543" + " " + "carousel"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(App, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-2678353543" + " " + "quick-link"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_QuickLinks__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-2678353543" + " " + "notification"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Notifications__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-2678353543" + " " + "event"
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Events__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-2678353543" + " " + "publication"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Publication__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-2678353543" + " " + "footer"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2678353543",
        css: ".container.jsx-2678353543{display:grid;grid-template-areas:\"h h h h\" \"c c c n\" \"q no no e\" \"p p p p\" \"f f f f\";}.header.jsx-2678353543{grid-area:h;margin:0;}.news.jsx-2678353543{grid-area:n;}.carousel.jsx-2678353543{grid-area:c;width:62vw;padding:0;}.quick-link.jsx-2678353543{grid-area:q;}.notification.jsx-2678353543{grid-area:no;}.event.jsx-2678353543{grid-area:e;}.publication.jsx-2678353543{grid-area:p;}.footer.jsx-2678353543{grid-area:f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRU8sQUFJd0IsQUFLQSxBQUtBLEFBSUEsQUFLQSxBQUdDLEFBR0YsQUFHQSxBQUdBLFlBekJILEFBTVgsQUFHYSxBQUtiLEFBTUEsQUFHQSxBQUdBLENBL0IwRSxBQXNCMUUsUUFoQkEsRUFTWSxVQUNaLG9EQWZBIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJjOlxcVXNlcnNcXHNldGVtaW9qb1xcRGVza3RvcFxccHJvamVjdHNcXHJcXGVkdWNhdGlvbi13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7IGZhU3Ryb29wd2FmZWwgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnbnVrYS1jYXJvdXNlbCdcblxuXG5saWJyYXJ5LmFkZChmYVN0cm9vcHdhZmVsKVxuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IE5ld3MgZnJvbSAnLi4vY29tcG9uZW50cy9OZXdzJ1xuaW1wb3J0IFF1aWNrTGluayBmcm9tICcuLi9jb21wb25lbnRzL1F1aWNrTGlua3MnXG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMnXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvRXZlbnRzJ1xuaW1wb3J0IFB1YmxpY2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUHVibGljYXRpb24nXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuXG5jb25zdCBmaXhlZEhlaWdodCA9IHtcbiAgaGVpZ2h0OiAnNTAwcHgnXG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHNsaWRlSW5kZXg6IDBcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGltZ1N0eWxlID0ge1xuICAgICAgaGVpZ2h0OiAnNjl2aCcsXG5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPENhcm91c2VsIGRyYWdnaW5nPXt0cnVlfSB0cmFuc2l0aW9uTW9kZT1cImZhZGVcIiBzbGlkZUluZGV4PXt0aGlzLnN0YXRlLnNsaWRlSW5kZXh9XG4gICAgICBhZnRlclNsaWRlPXtzbGlkZUluZGV4ID0+IHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4IH0pfT5cbiAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaTEucG5nXCIgc3R5bGU9e2ltZ1N0eWxlfSAvPlxuICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9pMi5wbmdcIiBzdHlsZT17aW1nU3R5bGV9Lz5cbiAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaTEucG5nXCIgc3R5bGU9e2ltZ1N0eWxlfS8+XG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2kyLnBuZ1wiIHN0eWxlPXtpbWdTdHlsZX0vPlxuICAgIDwvQ2Fyb3VzZWw+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NcIj5cbiAgICAgIDxOZXdzIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbFwiPlxuICAgICAgPEFwcCAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpY2stbGlua1wiPjxRdWlja0xpbmsgLz48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvblwiPjxOb3RpZmljYXRpb25zIC8+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPiA8RXZlbnRzIC8+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdWJsaWNhdGlvblwiPlxuICAgICAgPFB1YmxpY2F0aW9uIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaCBoIGggaFwiIFwiYyBjIGMgblwiIFwicSBubyBubyBlXCIgXCJwIHAgcCBwXCIgXCJmIGYgZiBmXCI7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBncmlkLWFyZWE6ICBoO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uZXdzIHtcbiAgICAgICAgICBncmlkLWFyZWE6ICBuO1xuICAgICAgICAgIC8vIHotaW5kZXg6IDEwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiAgYztcbiAgICAgICAgICB3aWR0aDogNjJ2dztcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5xdWljay1saW5rIHtcbiAgICAgICAgICBncmlkLWFyZWE6ICBxO1xuICAgICAgICB9XG4gICAgICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICAgIGdyaWQtYXJlYTogIG5vO1xuICAgICAgICB9XG4gICAgICAgIC5ldmVudCB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBlO1xuICAgICAgICB9XG4gICAgICAgIC5wdWJsaWNhdGlvbiB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBwO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIGdyaWQtYXJlYTogZjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=pages\\index.js */"
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

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