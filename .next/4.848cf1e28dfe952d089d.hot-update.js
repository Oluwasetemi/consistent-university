webpackHotUpdate(4,{

/***/ "./node_modules/nuka-carousel/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Carousel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_exenv__ = __webpack_require__("./node_modules/exenv/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_exenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_exenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_move_Animate__ = __webpack_require__("./node_modules/react-move/Animate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_move_Animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_move_Animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_ease__ = __webpack_require__("./node_modules/d3-ease/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_controls__ = __webpack_require__("./node_modules/nuka-carousel/es/default-controls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__all_transitions__ = __webpack_require__("./node_modules/nuka-carousel/es/all-transitions.js");
/* unused harmony reexport NextButton */
/* unused harmony reexport PreviousButton */
/* unused harmony reexport PagingDots */
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var addEvent = function addEvent(elem, type, eventHandle) {
  if (elem === null || typeof elem === 'undefined') {
    return;
  }

  if (elem.addEventListener) {
    elem.addEventListener(type, eventHandle, false);
  } else if (elem.attachEvent) {
    elem.attachEvent("on".concat(type), eventHandle);
  } else {
    elem["on".concat(type)] = eventHandle;
  }
};

var removeEvent = function removeEvent(elem, type, eventHandle) {
  if (elem === null || typeof elem === 'undefined') {
    return;
  }

  if (elem.removeEventListener) {
    elem.removeEventListener(type, eventHandle, false);
  } else if (elem.detachEvent) {
    elem.detachEvent("on".concat(type), eventHandle);
  } else {
    elem["on".concat(type)] = null;
  }
};

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel() {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
    _this.displayName = 'Carousel';
    _this.clickSafe = true;
    _this.touchObject = {};
    _this.controlsMap = [{
      funcName: 'renderTopLeftControls',
      key: 'TopLeft'
    }, {
      funcName: 'renderTopCenterControls',
      key: 'TopCenter'
    }, {
      funcName: 'renderTopRightControls',
      key: 'TopRight'
    }, {
      funcName: 'renderCenterLeftControls',
      key: 'CenterLeft'
    }, {
      funcName: 'renderCenterCenterControls',
      key: 'CenterCenter'
    }, {
      funcName: 'renderCenterRightControls',
      key: 'CenterRight'
    }, {
      funcName: 'renderBottomLeftControls',
      key: 'BottomLeft'
    }, {
      funcName: 'renderBottomCenterControls',
      key: 'BottomCenter'
    }, {
      funcName: 'renderBottomRightControls',
      key: 'BottomRight'
    }];

    var _this$getPropsByTrans = _this.getPropsByTransitionMode(_this.props, ['slidesToScroll', 'slidesToShow', 'cellAlign']),
        slidesToScroll = _this$getPropsByTrans.slidesToScroll,
        slidesToShow = _this$getPropsByTrans.slidesToShow,
        cellAlign = _this$getPropsByTrans.cellAlign;

    _this.state = {
      currentSlide: _this.props.slideIndex,
      dragging: false,
      frameWidth: 0,
      left: 0,
      slideCount: 0,
      slidesToScroll: slidesToScroll,
      slidesToShow: slidesToShow,
      slideWidth: 0,
      top: 0,
      cellAlign: cellAlign,
      easing: __WEBPACK_IMPORTED_MODULE_4_d3_ease__["easeCircleOut"],
      isWrappingAround: false,
      wrapToIndex: null,
      resetWrapAroundPosition: false
    };
    _this.getTouchEvents = _this.getTouchEvents.bind(_assertThisInitialized(_this));
    _this.getMouseEvents = _this.getMouseEvents.bind(_assertThisInitialized(_this));
    _this.handleMouseOver = _this.handleMouseOver.bind(_assertThisInitialized(_this));
    _this.handleMouseOut = _this.handleMouseOut.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleSwipe = _this.handleSwipe.bind(_assertThisInitialized(_this));
    _this.swipeDirection = _this.swipeDirection.bind(_assertThisInitialized(_this));
    _this.autoplayIterator = _this.autoplayIterator.bind(_assertThisInitialized(_this));
    _this.startAutoplay = _this.startAutoplay.bind(_assertThisInitialized(_this));
    _this.stopAutoplay = _this.stopAutoplay.bind(_assertThisInitialized(_this));
    _this.resetAutoplay = _this.resetAutoplay.bind(_assertThisInitialized(_this));
    _this.goToSlide = _this.goToSlide.bind(_assertThisInitialized(_this));
    _this.nextSlide = _this.nextSlide.bind(_assertThisInitialized(_this));
    _this.previousSlide = _this.previousSlide.bind(_assertThisInitialized(_this));
    _this.getTargetLeft = _this.getTargetLeft.bind(_assertThisInitialized(_this));
    _this.onResize = _this.onResize.bind(_assertThisInitialized(_this));
    _this.onReadyStateChange = _this.onReadyStateChange.bind(_assertThisInitialized(_this));
    _this.onVisibilityChange = _this.onVisibilityChange.bind(_assertThisInitialized(_this));
    _this.setInitialDimensions = _this.setInitialDimensions.bind(_assertThisInitialized(_this));
    _this.setDimensions = _this.setDimensions.bind(_assertThisInitialized(_this));
    _this.setLeft = _this.setLeft.bind(_assertThisInitialized(_this));
    _this.getFrameStyles = _this.getFrameStyles.bind(_assertThisInitialized(_this));
    _this.getSliderStyles = _this.getSliderStyles.bind(_assertThisInitialized(_this));
    _this.getOffsetDeltas = _this.getOffsetDeltas.bind(_assertThisInitialized(_this));
    _this.getChildNodes = _this.getChildNodes.bind(_assertThisInitialized(_this));
    _this.getSlideHeight = _this.getSlideHeight.bind(_assertThisInitialized(_this));
    _this.findMaxHeightSlide = _this.findMaxHeightSlide.bind(_assertThisInitialized(_this));
    _this.renderControls = _this.renderControls.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setInitialDimensions();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // see https://github.com/facebook/react/issues/3417#issuecomment-121649937
      this.mounted = true;
      this.setDimensions();
      this.bindEvents();

      if (this.props.autoplay) {
        this.startAutoplay();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var slideCount = this.getValidChildren(nextProps.children).length;
      var slideCountChanged = slideCount !== this.state.slideCount;
      this.setState({
        slideCount: slideCount,
        currentSlide: slideCountChanged ? nextProps.slideIndex : this.state.currentSlide
      });

      if (slideCount <= this.state.currentSlide) {
        this.goToSlide(Math.max(slideCount - 1, 0), nextProps);
      }

      var updateDimensions = slideCountChanged || function (curr, next, keys) {
        var shouldUpdate = false;

        for (var i = 0; i < keys.length; i++) {
          if (curr[keys[i]] !== next[keys[i]]) {
            shouldUpdate = true;
            break;
          }
        }

        return shouldUpdate;
      }(this.props, nextProps, ['cellSpacing', 'vertical', 'slideWidth', 'slideHeight', 'heightMode', 'slidesToScroll', 'slidesToShow', 'transitionMode', 'cellAlign']);

      if (updateDimensions) {
        this.setDimensions(nextProps);
      }

      if (this.props.slideIndex !== nextProps.slideIndex && nextProps.slideIndex !== this.state.currentSlide && !this.state.isWrappingAround) {
        this.goToSlide(nextProps.slideIndex, this.props);
      }

      if (this.props.autoplay !== nextProps.autoplay) {
        if (nextProps.autoplay) {
          this.startAutoplay();
        } else {
          this.stopAutoplay();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps, nextState) {
      var slideChanged = nextState.currentSlide !== this.state.currentSlide;
      var heightModeChanged = nextProps.heightMode !== this.props.heightMode;

      if (slideChanged || heightModeChanged) {
        this.setDimensions();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindEvents();
      this.stopAutoplay(); // see https://github.com/facebook/react/issues/3417#issuecomment-121649937

      this.mounted = false;
    }
  }, {
    key: "getPropsByTransitionMode",
    value: function getPropsByTransitionMode(props, keys) {
      var updatedDefaults = {};

      if (props.transitionMode === 'fade') {
        keys.forEach(function (key) {
          switch (key) {
            case 'slidesToShow':
              updatedDefaults[key] = Math.max(parseInt(props.slidesToShow), 1);
              break;

            case 'slidesToScroll':
              updatedDefaults[key] = Math.max(parseInt(props.slidesToShow), 1);
              break;

            case 'cellAlign':
              updatedDefaults[key] = 'left';
              break;

            default:
              updatedDefaults[key] = props[key];
              break;
          }
        });
      } else {
        keys.forEach(function (key) {
          updatedDefaults[key] = props[key];
        });
      }

      return updatedDefaults;
    }
  }, {
    key: "getTouchEvents",
    value: function getTouchEvents() {
      var _this2 = this;

      if (this.props.swiping === false) {
        return null;
      }

      return {
        onTouchStart: function onTouchStart(e) {
          _this2.touchObject = {
            startX: e.touches[0].pageX,
            startY: e.touches[0].pageY
          };

          _this2.handleMouseOver();
        },
        onTouchMove: function onTouchMove(e) {
          var direction = _this2.swipeDirection(_this2.touchObject.startX, e.touches[0].pageX, _this2.touchObject.startY, e.touches[0].pageY);

          if (direction !== 0) {
            e.preventDefault();
          }

          var length = _this2.props.vertical ? Math.round(Math.sqrt(Math.pow(e.touches[0].pageY - _this2.touchObject.startY, 2))) : Math.round(Math.sqrt(Math.pow(e.touches[0].pageX - _this2.touchObject.startX, 2)));
          _this2.touchObject = {
            startX: _this2.touchObject.startX,
            startY: _this2.touchObject.startY,
            endX: e.touches[0].pageX,
            endY: e.touches[0].pageY,
            length: length,
            direction: direction
          };

          _this2.setState({
            left: _this2.props.vertical ? 0 : _this2.getTargetLeft(_this2.touchObject.length * _this2.touchObject.direction),
            top: _this2.props.vertical ? _this2.getTargetLeft(_this2.touchObject.length * _this2.touchObject.direction) : 0
          });
        },
        onTouchEnd: function onTouchEnd(e) {
          _this2.handleSwipe(e);

          _this2.handleMouseOut();
        },
        onTouchCancel: function onTouchCancel(e) {
          _this2.handleSwipe(e);
        }
      };
    }
  }, {
    key: "getMouseEvents",
    value: function getMouseEvents() {
      var _this3 = this;

      if (this.props.dragging === false) {
        return null;
      }

      return {
        onMouseOver: function onMouseOver() {
          return _this3.handleMouseOver();
        },
        onMouseOut: function onMouseOut() {
          return _this3.handleMouseOut();
        },
        onMouseDown: function onMouseDown(e) {
          if (e.preventDefault) {
            e.preventDefault();
          }

          _this3.touchObject = {
            startX: e.clientX,
            startY: e.clientY
          };

          _this3.setState({
            dragging: true
          });
        },
        onMouseMove: function onMouseMove(e) {
          if (!_this3.state.dragging) {
            return;
          }

          var direction = _this3.swipeDirection(_this3.touchObject.startX, e.clientX, _this3.touchObject.startY, e.clientY);

          if (direction !== 0) {
            e.preventDefault();
          }

          var length = _this3.props.vertical ? Math.round(Math.sqrt(Math.pow(e.clientY - _this3.touchObject.startY, 2))) : Math.round(Math.sqrt(Math.pow(e.clientX - _this3.touchObject.startX, 2)));
          _this3.touchObject = {
            startX: _this3.touchObject.startX,
            startY: _this3.touchObject.startY,
            endX: e.clientX,
            endY: e.clientY,
            length: length,
            direction: direction
          };

          _this3.setState({
            left: _this3.props.vertical ? 0 : _this3.getTargetLeft(_this3.touchObject.length * _this3.touchObject.direction),
            top: _this3.props.vertical ? _this3.getTargetLeft(_this3.touchObject.length * _this3.touchObject.direction) : 0
          });
        },
        onMouseUp: function onMouseUp(e) {
          if (!_this3.state.dragging) {
            return;
          }

          _this3.handleSwipe(e);
        },
        onMouseLeave: function onMouseLeave(e) {
          if (!_this3.state.dragging) {
            return;
          }

          _this3.handleSwipe(e);
        }
      };
    }
  }, {
    key: "pauseAutoplay",
    value: function pauseAutoplay() {
      if (this.props.autoplay) {
        this.autoplayPaused = true;
        this.stopAutoplay();
      }
    }
  }, {
    key: "unpauseAutoplay",
    value: function unpauseAutoplay() {
      if (this.props.autoplay && this.autoplayPaused) {
        this.startAutoplay();
        this.autoplayPaused = null;
      }
    }
  }, {
    key: "handleMouseOver",
    value: function handleMouseOver() {
      if (this.props.pauseOnHover) {
        this.pauseAutoplay();
      }
    }
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut() {
      if (this.autoplayPaused) {
        this.unpauseAutoplay();
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      if (this.clickSafe === true) {
        event.preventDefault();
        event.stopPropagation();

        if (event.nativeEvent) {
          event.nativeEvent.stopPropagation();
        }
      }
    }
  }, {
    key: "handleSwipe",
    value: function handleSwipe() {
      if (typeof this.touchObject.length !== 'undefined' && this.touchObject.length > 44) {
        this.clickSafe = true;
      } else {
        this.clickSafe = false;
      }

      var slidesToShow = this.state.slidesToShow;

      if (this.props.slidesToScroll === 'auto') {
        slidesToShow = this.state.slidesToScroll;
      }

      if (this.touchObject.length > this.state.slideWidth / slidesToShow / 5) {
        if (this.touchObject.direction === 1) {
          if (this.state.currentSlide >= this.state.slideCount - slidesToShow && !this.props.wrapAround) {
            this.setState({
              easing: __WEBPACK_IMPORTED_MODULE_4_d3_ease__[this.props.edgeEasing]
            });
          } else {
            this.nextSlide();
          }
        } else if (this.touchObject.direction === -1) {
          if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
            this.setState({
              easing: __WEBPACK_IMPORTED_MODULE_4_d3_ease__[this.props.edgeEasing]
            });
          } else {
            this.previousSlide();
          }
        }
      } else {
        this.goToSlide(this.state.currentSlide);
      }

      this.touchObject = {};
      this.setState({
        dragging: false
      });
    }
  }, {
    key: "swipeDirection",
    value: function swipeDirection(x1, x2, y1, y2) {
      var xDist = x1 - x2;
      var yDist = y1 - y2;
      var r = Math.atan2(yDist, xDist);
      var swipeAngle = Math.round(r * 180 / Math.PI);

      if (swipeAngle < 0) {
        swipeAngle = 360 - Math.abs(swipeAngle);
      }

      if (swipeAngle <= 45 && swipeAngle >= 0) {
        return 1;
      }

      if (swipeAngle <= 360 && swipeAngle >= 315) {
        return 1;
      }

      if (swipeAngle >= 135 && swipeAngle <= 225) {
        return -1;
      }

      if (this.props.vertical === true) {
        if (swipeAngle >= 35 && swipeAngle <= 135) {
          return 1;
        } else {
          return -1;
        }
      }

      return 0;
    }
  }, {
    key: "autoplayIterator",
    value: function autoplayIterator() {
      if (this.props.wrapAround) {
        this.nextSlide();
        return;
      }

      if (this.state.currentSlide !== this.state.slideCount - this.state.slidesToShow) {
        this.nextSlide();
      } else {
        this.stopAutoplay();
      }
    }
  }, {
    key: "startAutoplay",
    value: function startAutoplay() {
      this.autoplayID = setInterval(this.autoplayIterator, this.props.autoplayInterval);
    }
  }, {
    key: "resetAutoplay",
    value: function resetAutoplay() {
      if (this.props.autoplay && !this.autoplayPaused) {
        this.stopAutoplay();
        this.startAutoplay();
      }
    }
  }, {
    key: "stopAutoplay",
    value: function stopAutoplay() {
      if (this.autoplayID) {
        clearInterval(this.autoplayID);
      }
    } // Action Methods

  }, {
    key: "goToSlide",
    value: function goToSlide(index, props) {
      var _this4 = this;

      if (props === undefined) {
        props = this.props;
      }

      this.setState({
        easing: __WEBPACK_IMPORTED_MODULE_4_d3_ease__[props.easing]
      });

      if (index >= this.state.slideCount || index < 0) {
        if (!props.wrapAround) {
          return;
        }

        if (index >= this.state.slideCount) {
          props.beforeSlide(this.state.currentSlide, 0);
          this.setState(function (prevState) {
            return {
              left: props.vertical ? 0 : _this4.getTargetLeft(_this4.state.slideWidth, prevState.currentSlide),
              top: props.vertical ? _this4.getTargetLeft(_this4.state.slideWidth, prevState.currentSlide) : 0,
              currentSlide: 0,
              isWrappingAround: true,
              wrapToIndex: index
            };
          }, function () {
            return setTimeout(function () {
              _this4.setState({
                isWrappingAround: false,
                resetWrapAroundPosition: true
              }, function () {
                _this4.setState({
                  resetWrapAroundPosition: false
                });

                props.afterSlide(0);

                _this4.resetAutoplay();
              });
            }, props.speed);
          });
          return;
        } else {
          var endSlide = this.state.slideCount - this.state.slidesToScroll;
          props.beforeSlide(this.state.currentSlide, endSlide);
          this.setState(function (prevState) {
            return {
              left: props.vertical ? 0 : _this4.getTargetLeft(0, prevState.currentSlide),
              top: props.vertical ? _this4.getTargetLeft(0, prevState.currentSlide) : 0,
              currentSlide: endSlide,
              isWrappingAround: true,
              wrapToIndex: index
            };
          }, function () {
            return setTimeout(function () {
              _this4.setState({
                isWrappingAround: false,
                resetWrapAroundPosition: true
              }, function () {
                _this4.setState({
                  resetWrapAroundPosition: false
                });

                props.afterSlide(endSlide);

                _this4.resetAutoplay();
              });
            }, props.speed);
          });
          return;
        }
      }

      this.props.beforeSlide(this.state.currentSlide, index);
      var previousSlide = this.state.currentSlide;
      this.setState({
        currentSlide: index
      }, function () {
        return setTimeout(function () {
          _this4.resetAutoplay();

          if (index !== previousSlide) {
            _this4.props.afterSlide(index);
          }
        }, props.speed);
      });
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      var childrenCount = this.state.slideCount;
      var slidesToShow = this.state.slidesToShow;

      if (this.props.slidesToScroll === 'auto') {
        slidesToShow = this.state.slidesToScroll;
      }

      if (this.state.currentSlide >= childrenCount - slidesToShow && !this.props.wrapAround && this.props.cellAlign === 'left') {
        return;
      }

      if (this.props.wrapAround) {
        this.goToSlide(this.state.currentSlide + this.state.slidesToScroll);
      } else {
        if (this.props.slideWidth !== 1) {
          this.goToSlide(this.state.currentSlide + this.state.slidesToScroll);
          return;
        }

        var offset = this.state.currentSlide + this.state.slidesToScroll;
        var nextSlideIndex = this.props.cellAlign !== 'left' ? offset : Math.min(offset, childrenCount - slidesToShow);
        this.goToSlide(nextSlideIndex);
      }
    }
  }, {
    key: "previousSlide",
    value: function previousSlide() {
      if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
        return;
      }

      if (this.props.wrapAround) {
        this.goToSlide(this.state.currentSlide - this.state.slidesToScroll);
      } else {
        this.goToSlide(Math.max(0, this.state.currentSlide - this.state.slidesToScroll));
      }
    } // Animation

  }, {
    key: "getTargetLeft",
    value: function getTargetLeft(touchOffset, slide) {
      var offset;
      var target = slide || this.state.currentSlide;

      switch (this.state.cellAlign) {
        case 'left':
          {
            offset = 0;
            offset -= this.props.cellSpacing * target;
            break;
          }

        case 'center':
          {
            offset = (this.state.frameWidth - this.state.slideWidth) / 2;
            offset -= this.props.cellSpacing * target;
            break;
          }

        case 'right':
          {
            offset = this.state.frameWidth - this.state.slideWidth;
            offset -= this.props.cellSpacing * target;
            break;
          }
      }

      var left = this.state.slideWidth * target;
      var lastSlide = this.state.currentSlide > 0 && target + this.state.slidesToScroll >= this.state.slideCount;

      if (lastSlide && this.props.slideWidth !== 1 && !this.props.wrapAround && this.props.slidesToScroll === 'auto') {
        left = this.state.slideWidth * this.state.slideCount - this.state.frameWidth;
        offset = 0;
        offset -= this.props.cellSpacing * (this.state.slideCount - 1);
      }

      offset -= touchOffset || 0;
      return (left - offset) * -1;
    } // Bootstrapping

  }, {
    key: "bindEvents",
    value: function bindEvents() {
      if (__WEBPACK_IMPORTED_MODULE_2_exenv___default.a.canUseDOM) {
        addEvent(window, 'resize', this.onResize);
        addEvent(document, 'readystatechange', this.onReadyStateChange);
        addEvent(document, 'visibilitychange', this.onVisibilityChange);
      }
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.setDimensions(null, this.props.onResize);
    }
  }, {
    key: "onReadyStateChange",
    value: function onReadyStateChange() {
      this.setDimensions();
    }
  }, {
    key: "onVisibilityChange",
    value: function onVisibilityChange() {
      if (document.hidden) {
        this.pauseAutoplay();
      } else {
        this.unpauseAutoplay();
      }
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      if (__WEBPACK_IMPORTED_MODULE_2_exenv___default.a.canUseDOM) {
        removeEvent(window, 'resize', this.onResize);
        removeEvent(document, 'readystatechange', this.onReadyStateChange);
        removeEvent(document, 'visibilitychange', this.onVisibilityChange);
      }
    }
  }, {
    key: "setInitialDimensions",
    value: function setInitialDimensions() {
      var _this5 = this;

      var slideWidth = this.props.vertical ? this.props.initialSlideHeight || 0 : this.props.initialSlideWidth || 0;
      var slideHeight = this.props.vertical ? (this.props.initialSlideHeight || 0) * this.state.slidesToShow : this.props.initialSlideHeight || 0;
      var frameHeight = slideHeight + this.props.cellSpacing * (this.state.slidesToShow - 1);
      this.setState({
        slideHeight: slideHeight,
        frameWidth: this.props.vertical ? frameHeight : '100%',
        slideCount: this.getValidChildren(this.props.children).length,
        slideWidth: slideWidth
      }, function () {
        _this5.setLeft();
      });
    }
  }, {
    key: "findMaxHeightSlide",
    value: function findMaxHeightSlide(slides) {
      var maxHeight = 0;

      for (var i = 0; i < slides.length; i++) {
        if (slides[i].offsetHeight > maxHeight) {
          maxHeight = slides[i].offsetHeight;
        }
      }

      return maxHeight;
    }
  }, {
    key: "getSlideHeight",
    value: function getSlideHeight(props) {
      var childNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var heightMode = props.heightMode,
          vertical = props.vertical,
          initialSlideHeight = props.initialSlideHeight;
      var firstSlide = childNodes[0];

      if (firstSlide && heightMode === 'first') {
        return vertical ? firstSlide.offsetHeight * this.state.slidesToShow : firstSlide.offsetHeight;
      }

      if (heightMode === 'max') {
        return this.findMaxHeightSlide(childNodes);
      }

      if (props.heightMode === 'current') {
        return childNodes[this.state.currentSlide].offsetHeight;
      }

      return initialSlideHeight || 100;
    }
  }, {
    key: "setDimensions",
    value: function setDimensions(props) {
      var _this6 = this;

      var stateCb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      props = props || this.props;

      var _getPropsByTransition = this.getPropsByTransitionMode(props, ['slidesToShow', 'cellAlign']),
          slidesToShow = _getPropsByTransition.slidesToShow,
          cellAlign = _getPropsByTransition.cellAlign;

      var frame = this.frame;
      var childNodes = this.getChildNodes();
      var slideHeight = this.getSlideHeight(props, childNodes);
      var slideWidth;

      if (typeof props.slideWidth !== 'number') {
        slideWidth = parseInt(props.slideWidth);
      } else if (props.vertical) {
        slideWidth = slideHeight / slidesToShow * props.slideWidth;
      } else {
        slideWidth = frame.offsetWidth / slidesToShow * props.slideWidth;
      }

      if (!props.vertical) {
        slideWidth -= props.cellSpacing * ((100 - 100 / slidesToShow) / 100);
      }

      var frameHeight = slideHeight + props.cellSpacing * (slidesToShow - 1);
      var frameWidth = props.vertical ? frameHeight : frame.offsetWidth;

      var _getPropsByTransition2 = this.getPropsByTransitionMode(props, ['slidesToScroll']),
          slidesToScroll = _getPropsByTransition2.slidesToScroll;

      if (slidesToScroll === 'auto') {
        slidesToScroll = Math.floor(frameWidth / (slideWidth + props.cellSpacing));
      }

      this.setState({
        slideHeight: slideHeight,
        frameWidth: frameWidth,
        slideWidth: slideWidth,
        slidesToScroll: slidesToScroll,
        slidesToShow: slidesToShow,
        cellAlign: cellAlign,
        left: props.vertical ? 0 : this.getTargetLeft(),
        top: props.vertical ? this.getTargetLeft() : 0
      }, function () {
        stateCb();

        _this6.setLeft();
      });
    }
  }, {
    key: "getValidChildren",
    value: function getValidChildren(children) {
      // .toArray automatically removes invalid React children
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.toArray(children);
    }
  }, {
    key: "getChildNodes",
    value: function getChildNodes() {
      return this.frame.childNodes[0].childNodes;
    }
  }, {
    key: "setLeft",
    value: function setLeft() {
      var newLeft = this.props.vertical ? 0 : this.getTargetLeft();
      var newTop = this.props.vertical ? this.getTargetLeft() : 0;

      if (newLeft !== this.state.left || newTop !== this.state.top) {
        this.setState({
          left: newLeft,
          top: newTop
        });
      }
    } // Styles

  }, {
    key: "getFrameStyles",
    value: function getFrameStyles() {
      return {
        position: 'relative',
        display: 'block',
        overflow: this.props.frameOverflow,
        height: this.props.vertical ? this.state.frameWidth || 'initial' : 'auto',
        margin: this.props.framePadding,
        padding: 0,
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)',
        msTransform: 'translate(0, 0)',
        boxSizing: 'border-box',
        MozBoxSizing: 'border-box',
        touchAction: "pinch-zoom ".concat(this.props.vertical ? 'pan-x' : 'pan-y')
      };
    }
  }, {
    key: "getSliderStyles",
    value: function getSliderStyles() {
      return {
        position: 'relative',
        display: 'block',
        width: this.props.width,
        height: 'auto',
        boxSizing: 'border-box',
        MozBoxSizing: 'border-box',
        visibility: this.state.slideWidth ? 'inherit' : 'hidden'
      };
    }
  }, {
    key: "getStyleTagStyles",
    value: function getStyleTagStyles() {
      return '.slider-slide > img {width: 100%; display: block;}';
    }
  }, {
    key: "getDecoratorStyles",
    value: function getDecoratorStyles(position) {
      switch (position) {
        case 'TopLeft':
          {
            return {
              position: 'absolute',
              top: 0,
              left: 0
            };
          }

        case 'TopCenter':
          {
            return {
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              WebkitTransform: 'translateX(-50%)',
              msTransform: 'translateX(-50%)'
            };
          }

        case 'TopRight':
          {
            return {
              position: 'absolute',
              top: 0,
              right: 0
            };
          }

        case 'CenterLeft':
          {
            return {
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
              WebkitTransform: 'translateY(-50%)',
              msTransform: 'translateY(-50%)'
            };
          }

        case 'CenterCenter':
          {
            return {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              WebkitTransform: 'translate(-50%, -50%)',
              msTransform: 'translate(-50%, -50%)'
            };
          }

        case 'CenterRight':
          {
            return {
              position: 'absolute',
              top: '50%',
              right: 0,
              transform: 'translateY(-50%)',
              WebkitTransform: 'translateY(-50%)',
              msTransform: 'translateY(-50%)'
            };
          }

        case 'BottomLeft':
          {
            return {
              position: 'absolute',
              bottom: 0,
              left: 0
            };
          }

        case 'BottomCenter':
          {
            return {
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              WebkitTransform: 'translateX(-50%)',
              msTransform: 'translateX(-50%)'
            };
          }

        case 'BottomRight':
          {
            return {
              position: 'absolute',
              bottom: 0,
              right: 0
            };
          }

        default:
          {
            return {
              position: 'absolute',
              top: 0,
              left: 0
            };
          }
      }
    }
  }, {
    key: "getOffsetDeltas",
    value: function getOffsetDeltas() {
      var offset = 0;

      if (this.state.isWrappingAround) {
        offset = this.getTargetLeft(null, this.state.wrapToIndex);
      } else {
        offset = this.getTargetLeft(this.touchObject.length * this.touchObject.direction);
      }

      return {
        tx: [this.props.vertical ? 0 : offset],
        ty: [this.props.vertical ? offset : 0]
      };
    }
  }, {
    key: "getTransitionProps",
    value: function getTransitionProps() {
      return {
        slideWidth: this.state.slideWidth,
        slideHeight: this.state.slideHeight,
        slideCount: this.state.slideCount,
        currentSlide: this.state.currentSlide,
        isWrappingAround: this.state.isWrappingAround,
        top: this.state.top,
        left: this.state.left,
        cellSpacing: this.props.cellSpacing,
        vertical: this.props.vertical,
        dragging: this.props.dragging,
        wrapAround: this.props.wrapAround,
        slidesToShow: this.state.slidesToShow
      };
    }
  }, {
    key: "renderControls",
    value: function renderControls() {
      var _this7 = this;

      if (this.props.withoutControls) {
        return this.controlsMap.map(function () {
          return null;
        });
      } else {
        return this.controlsMap.map(function (_ref) {
          var funcName = _ref.funcName,
              key = _ref.key;
          var func = _this7.props[funcName];
          return func && typeof func === 'function' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "slider-control-".concat(key.toLowerCase()),
            style: _this7.getDecoratorStyles(key),
            key: key
          }, func({
            currentSlide: _this7.state.currentSlide,
            slideCount: _this7.state.slideCount,
            frameWidth: _this7.state.frameWidth,
            slideWidth: _this7.state.slideWidth,
            slidesToScroll: _this7.state.slidesToScroll,
            cellSpacing: _this7.props.cellSpacing,
            slidesToShow: _this7.state.slidesToShow,
            wrapAround: _this7.props.wrapAround,
            nextSlide: function nextSlide() {
              return _this7.nextSlide();
            },
            previousSlide: function previousSlide() {
              return _this7.previousSlide();
            },
            goToSlide: function goToSlide(index) {
              return _this7.goToSlide(index);
            }
          }));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      var duration = this.state.dragging || this.state.resetWrapAroundPosition ? 0 : this.props.speed;
      var frameStyles = this.getFrameStyles();
      var touchEvents = this.getTouchEvents();
      var mouseEvents = this.getMouseEvents();
      var TransitionControl = __WEBPACK_IMPORTED_MODULE_6__all_transitions__["a" /* default */][this.props.transitionMode];
      var validChildren = this.getValidChildren(this.props.children);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: ['slider', this.props.className || ''].join(' '),
        style: _extends({}, this.getSliderStyles(), this.props.style)
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_move_Animate___default.a, {
        show: true,
        start: {
          tx: 0,
          ty: 0
        },
        update: _extends({}, this.getOffsetDeltas(), {
          timing: {
            duration: duration,
            ease: this.state.easing
          },
          events: {
            end: this.setLeft
          }
        }),
        children: function children(_ref2) {
          var tx = _ref2.tx,
              ty = _ref2.ty;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({
            className: "slider-frame",
            ref: function ref(frame) {
              return _this8.frame = frame;
            },
            style: frameStyles
          }, touchEvents, mouseEvents, {
            onClickCapture: _this8.handleClick
          }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TransitionControl, _extends({}, _this8.getTransitionProps(), {
            deltaX: tx,
            deltaY: ty
          }), validChildren));
        }
      }), this.renderControls(), this.props.autoGenerateStyleTag && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        type: "text/css",
        dangerouslySetInnerHTML: {
          __html: this.getStyleTagStyles()
        }
      }));
    }
  }]);

  return Carousel;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


Carousel.propTypes = {
  afterSlide: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  autoplay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  autoplayInterval: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  autoGenerateStyleTag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  beforeSlide: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  cellAlign: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['left', 'center', 'right']),
  cellSpacing: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  dragging: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  easing: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  edgeEasing: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  frameOverflow: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  framePadding: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  heightMode: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['first', 'current', 'max']),
  transitionMode: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['scroll', 'fade']),
  initialSlideHeight: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  initialSlideWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  onResize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  pauseOnHover: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  renderTopLeftControls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  renderTopCenterControls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  renderTopRightControls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  renderCenterLeftControls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  renderCenterCenterControls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  renderCenterRightControls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  renderBottomLeftControls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  renderBottomCenterControls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  renderBottomRightControls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  slideIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  slidesToScroll: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['auto'])]),
  slidesToShow: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  slideWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
  speed: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  swiping: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  vertical: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  withoutControls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  wrapAround: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
Carousel.defaultProps = {
  afterSlide: function afterSlide() {},
  autoplay: false,
  autoplayInterval: 3000,
  autoGenerateStyleTag: true,
  beforeSlide: function beforeSlide() {},
  cellAlign: 'left',
  cellSpacing: 0,
  dragging: true,
  easing: 'easeCircleOut',
  edgeEasing: 'easeElasticOut',
  framePadding: '0px',
  frameOverflow: 'hidden',
  heightMode: 'max',
  transitionMode: 'scroll',
  onResize: function onResize() {},
  slideIndex: 0,
  slidesToScroll: 1,
  slidesToShow: 1,
  style: {},
  pauseOnHover: true,
  renderCenterLeftControls: function renderCenterLeftControls(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__default_controls__["c" /* PreviousButton */], props);
  },
  renderCenterRightControls: function renderCenterRightControls(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__default_controls__["a" /* NextButton */], props);
  },
  renderBottomCenterControls: function renderBottomCenterControls(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__default_controls__["b" /* PagingDots */], props);
  },
  slideWidth: 1,
  speed: 500,
  swiping: true,
  vertical: false,
  width: '100%',
  withoutControls: false,
  wrapAround: false
};


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_svg_core__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_react_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_free_solid_svg_icons__ = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_nuka_carousel__ = __webpack_require__("./node_modules/nuka-carousel/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_News__ = __webpack_require__("./components/News.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_QuickLinks__ = __webpack_require__("./components/QuickLinks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Notifications__ = __webpack_require__("./components/Notifications.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Events__ = __webpack_require__("./components/Events.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = "C:\\Users\\setemiojo\\Desktop\\projects\\r\\education-website\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_svg_core__["b" /* library */].add(__WEBPACK_IMPORTED_MODULE_5__fortawesome_free_solid_svg_icons__["a" /* faStroopwafel */]);







var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_nuka_carousel__["a" /* default */], {
        dragging: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "static/i1.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "static/i2.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "static/i1.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "static/i2.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }));
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: "jsx-2087038798" + " " + "container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-2087038798" + " " + "header"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    className: "jsx-2087038798" + " " + "news"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_News__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-2087038798" + " " + "carousel"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(App, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    className: "jsx-2087038798" + " " + "quick-link"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_QuickLinks__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    className: "jsx-2087038798" + " " + "notification"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Notifications__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    className: "jsx-2087038798" + " " + "event"
  }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Events__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    className: "jsx-2087038798" + " " + "footer"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2087038798",
    css: ".container.jsx-2087038798{display:grid;grid-template-areas:\"h h h h\" \"c c c n\" \"q no no e\" \"f f f f\";}.header.jsx-2087038798{grid-area:h;margin:0;}.news.jsx-2087038798{grid-area:n;z-index:10;}.carousel.jsx-2087038798{grid-area:c;max-width:60vw;}.quick-link.jsx-2087038798{grid-area:q;}.notification.jsx-2087038798{grid-area:no;}.event.jsx-2087038798{grid-area:e;}.footer.jsx-2087038798{grid-area:f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRE8sQUFJd0IsQUFLQSxBQUtBLEFBSUEsQUFJQSxBQUdDLEFBSWpCLEFBR0EsWUF0QlksQUFLRSxBQUlJLEFBSWpCLEFBTUEsQUFHQSxDQTNCZ0UsQUFxQmhFLFFBZkEsRUFLQSxJQUlBLGdEQWRBIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHNldGVtaW9qb1xcRGVza3RvcFxccHJvamVjdHNcXHJcXGVkdWNhdGlvbi13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7IGZhU3Ryb29wd2FmZWwgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnbnVrYS1jYXJvdXNlbCdcblxuXG5saWJyYXJ5LmFkZChmYVN0cm9vcHdhZmVsKVxuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IE5ld3MgZnJvbSAnLi4vY29tcG9uZW50cy9OZXdzJ1xuaW1wb3J0IFF1aWNrTGluayBmcm9tICcuLi9jb21wb25lbnRzL1F1aWNrTGlua3MnXG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMnXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvRXZlbnRzJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q2Fyb3VzZWwgZHJhZ2dpbmc9e3RydWV9PlxuICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9pMS5wbmdcIi8+XG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2kyLnBuZ1wiLz5cbiAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaTEucG5nXCIvPlxuICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9pMi5wbmdcIi8+XG4gICAgPC9DYXJvdXNlbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzXCI+XG4gICAgICA8TmV3cyAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWxcIj5cbiAgICAgIDxBcHAgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInF1aWNrLWxpbmtcIj48UXVpY2tMaW5rIC8+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25cIj48Tm90aWZpY2F0aW9ucyAvPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj4gPEV2ZW50cyAvPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImggaCBoIGhcIiBcImMgYyBjIG5cIiBcInEgbm8gbm8gZVwiIFwiZiBmIGYgZlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiAgaDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICAubmV3cyB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiAgbjtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgfVxuICAgICAgICAuY2Fyb3VzZWwge1xuICAgICAgICAgIGdyaWQtYXJlYTogIGM7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MHZ3O1xuICAgICAgICB9XG4gICAgICAgIC5xdWljay1saW5rIHtcbiAgICAgICAgICBncmlkLWFyZWE6ICBxO1xuICAgICAgICB9XG4gICAgICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICAgIGdyaWQtYXJlYTogIG5vO1xuICAgICAgICB9XG4gICAgICAgIC5ldmVudCB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBlXG4gICAgICAgIH1cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBmXG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=pages\\index.js */"
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.848cf1e28dfe952d089d.hot-update.js.map