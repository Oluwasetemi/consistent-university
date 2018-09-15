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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);



var linkStyle = {
  marginRight: 15
};
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
    className: "jsx-994975617"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-994975617" + " " + "header"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "/static/i4.png",
    alt: "logo",
    width: "355",
    height: "120",
    className: "jsx-994975617"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("b", {
    className: "jsx-994975617"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-994975617" + " " + "additional-menu"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/portal"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-994975617"
  }, "My Account")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/webmail"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-994975617"
  }, "Webmail")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/profiles"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-994975617"
  }, "Profiles")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-994975617" + " " + "nav-menu"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/about"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-994975617"
  }, "About")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/admission"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-994975617"
  }, "Admissions")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/colleges"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-994975617"
  }, "Colleges")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/library"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-994975617"
  }, "Library")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/news"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-994975617"
  }, "News")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/publications"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-994975617"
  }, "Publications")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/research"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-994975617"
  }, "Research")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/calender"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-994975617"
  }, "Academics Calender"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "994975617",
    css: [".nav-menu.jsx-994975617{margin-bottom:20px;padding:10px;background-color:#351851;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".nav-menu.jsx-994975617 a.jsx-994975617{-webkit-text-decoration:none;text-decoration:none;padding:20px;color:white;}", ".nav-menu.jsx-994975617 a.jsx-994975617:hover{color:#351851;background-color:white;-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}", ".header.jsx-994975617{display:grid;grid-template-columns:auto 1fr 300px;margin-bottom:5px;}", ".additional-menu.jsx-994975617 a.jsx-994975617{-webkit-text-decoration:none;text-decoration:none;color:white;}", ".additional-menu.jsx-994975617{height:120px;background-color:#351851;grid-column:3 / -1;display:grid;grid-template-columns:repeat(3,100px);-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}", "b.jsx-994975617{height:120px;background-color:#351851;}", "img.jsx-994975617:hover{cursor:pointer;}"]
  }));
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-2030177089"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("b", {
    className: "jsx-2030177089"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    className: "jsx-2030177089"
  }, "\xA9 Consistent University"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("b", {
    className: "jsx-2030177089"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2030177089",
    css: ["div.jsx-2030177089{padding:20px;}"]
  }));
});

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "nuka-carousel"
var external__nuka_carousel_ = __webpack_require__(15);
var external__nuka_carousel__default = /*#__PURE__*/__webpack_require__.n(external__nuka_carousel_);

// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(2);

// CONCATENATED MODULE: ./components/News.js


var News_news = [{
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

var News_getNews = function getNews(news) {
  return news.map(function (news) {
    return external__react__default.a.createElement("li", {
      key: news.id
    }, external__react__default.a.createElement("div", {
      className: "new-item"
    }, external__react__default.a.createElement("div", {
      className: "header"
    }, news.topic), external__react__default.a.createElement("div", {
      className: "message"
    }, news.message)));
  });
};

/* harmony default export */ var News = (function () {
  return external__react__default.a.createElement("div", {
    className: "jsx-1747822534" + " " + "news"
  }, external__react__default.a.createElement("h1", {
    className: "jsx-1747822534"
  }, "News"), external__react__default.a.createElement("ul", {
    className: "jsx-1747822534"
  }, News_getNews(News_news)), external__react__default.a.createElement(style__default.a, {
    styleId: "1747822534",
    css: [".news.jsx-1747822534{border-radius:5px;border:4px solid #35185190;margin-bottom:10px;}", "h1.jsx-1747822534{margin-left:40px;}", "ul.jsx-1747822534{list-style-type:none;height:auto;margin:0;}", "li.jsx-1747822534{margin:0;}"]
  }));
});
// CONCATENATED MODULE: ./components/QuickLinks.js


/* harmony default export */ var QuickLinks = (function () {
  return external__react__default.a.createElement("div", {
    className: "jsx-2166081823" + " " + "quick-link"
  }, external__react__default.a.createElement("h1", {
    className: "jsx-2166081823"
  }, "Quick Links"), external__react__default.a.createElement("p", {
    className: "jsx-2166081823"
  }, "Hello World!"), external__react__default.a.createElement(style__default.a, {
    styleId: "2166081823",
    css: [".quick-link.jsx-2166081823{margin-top:5px;height:40vh;border:1px solid #35185190;}"]
  }));
});
// CONCATENATED MODULE: ./components/Notifications.js


/* harmony default export */ var Notifications = (function () {
  return external__react__default.a.createElement("div", {
    className: "jsx-2906529233" + " " + "notification"
  }, external__react__default.a.createElement("h1", {
    className: "jsx-2906529233"
  }, "Notifications"), external__react__default.a.createElement("p", {
    className: "jsx-2906529233"
  }, "Hello World!"), external__react__default.a.createElement(style__default.a, {
    styleId: "2906529233",
    css: [".notification.jsx-2906529233{margin-top:5px;height:40vh;border:1px solid #35185190;}"]
  }));
});
// CONCATENATED MODULE: ./components/Events.js


/* harmony default export */ var Events = (function () {
  return external__react__default.a.createElement("div", {
    className: "jsx-1855456483" + " " + "events"
  }, external__react__default.a.createElement("h1", {
    className: "jsx-1855456483"
  }, "Events"), external__react__default.a.createElement("p", {
    className: "jsx-1855456483"
  }, "Hello World!"), external__react__default.a.createElement(style__default.a, {
    styleId: "1855456483",
    css: [".events.jsx-1855456483{margin-top:5px;height:40vh;border:1px solid #35185190;}"]
  }));
});
// CONCATENATED MODULE: ./components/Publication.js


/* harmony default export */ var Publication = (function () {
  return external__react__default.a.createElement("div", {
    className: "jsx-2645141677" + " " + "publication"
  }, external__react__default.a.createElement("h1", {
    className: "jsx-2645141677"
  }, "Publication"), external__react__default.a.createElement("p", {
    className: "jsx-2645141677"
  }, "Hello World!"), external__react__default.a.createElement(style__default.a, {
    styleId: "2645141677",
    css: [".publication.jsx-2645141677{margin-top:5px;height:40vh;border:1px solid #35185190;border-radius:5px;margin-bottom:10px;}"]
  }));
});
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.js


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

var pages_App =
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
      return external__react__default.a.createElement("div", {
        className: "wrapper"
      }, external__react__default.a.createElement(external__nuka_carousel__default.a, {
        dragging: true,
        transitionMode: "fade",
        slideIndex: this.state.slideIndex,
        afterSlide: function afterSlide(slideIndex) {
          return _this2.setState({
            slideIndex: slideIndex
          });
        }
      }, external__react__default.a.createElement("img", {
        src: "static/i1.jpeg",
        style: imgStyle
      }), external__react__default.a.createElement("img", {
        src: "static/i2.jpeg",
        style: imgStyle
      }), external__react__default.a.createElement("img", {
        src: "static/i3.jpeg",
        style: imgStyle
      }), external__react__default.a.createElement("img", {
        src: "static/i4.jpeg",
        style: imgStyle
      }), external__react__default.a.createElement("img", {
        src: "static/i5.jpeg",
        style: imgStyle
      }), external__react__default.a.createElement("img", {
        src: "static/i6.jpeg",
        style: imgStyle
      })));
    }
  }]);

  return App;
}(external__react__default.a.Component);

var pages_Index =
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
      return external__react__default.a.createElement("div", {
        className: "jsx-1754823716" + " " + "container"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1754823716" + " " + "header"
      }, external__react__default.a.createElement(Header["a" /* default */], null)), external__react__default.a.createElement("div", {
        className: "jsx-1754823716" + " " + "news"
      }, external__react__default.a.createElement(News, null)), external__react__default.a.createElement("div", {
        className: "jsx-1754823716" + " " + "carousel"
      }, external__react__default.a.createElement(pages_App, null)), external__react__default.a.createElement("div", {
        className: "jsx-1754823716" + " " + "quick-link"
      }, external__react__default.a.createElement(QuickLinks, null)), external__react__default.a.createElement("div", {
        className: "jsx-1754823716" + " " + "notification"
      }, external__react__default.a.createElement(Notifications, null)), external__react__default.a.createElement("div", {
        className: "jsx-1754823716" + " " + "event"
      }, " ", external__react__default.a.createElement(Events, null)), external__react__default.a.createElement("div", {
        className: "jsx-1754823716" + " " + "publication"
      }, external__react__default.a.createElement(Publication, null)), external__react__default.a.createElement("div", {
        className: "jsx-1754823716" + " " + "footer"
      }, external__react__default.a.createElement(Footer["a" /* default */], null)), external__react__default.a.createElement(style__default.a, {
        styleId: "1754823716",
        css: [".container.jsx-1754823716{display:grid;grid-template-areas:\"h h h h\" \"c c c n\" \"q no no e\" \"p p p p\" \"f f f f\";}", ".header.jsx-1754823716{grid-area:h;margin:0;}", ".news.jsx-1754823716{grid-area:n;width:380px;height:-webkit-max-content;height:-moz-max-content;height:max-content;}", ".carousel.jsx-1754823716{grid-area:c;padding:0;margin:0;width:930px;height:70vh;}", ".quick-link.jsx-1754823716{grid-area:q;}", ".notification.jsx-1754823716{grid-area:no;}", ".event.jsx-1754823716{grid-area:e;}", ".publication.jsx-1754823716{grid-area:p;}", ".footer.jsx-1754823716{grid-area:f;}", "@media all and (max-width:1200px){.carousel.jsx-1754823716{width:750px;}}", "@media all and (max-width:960px){.container.jsx-1754823716{display:block;}.carousel.jsx-1754823716{margin-bottom:60px;}.container.jsx-1754823716>*.jsx-1754823716{width:100%;}.nav-menu.jsx-1754823716{font-size:10px;}}"]
      }));
    }
  }]);

  return Index;
}(external__react__default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("nuka-carousel");

/***/ })
/******/ ]);