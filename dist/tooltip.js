/*!
 * CodeX.Tooltips
 * 
 * @version 1.0.0
 * 
 * @licence Apache-2.0
 * @author CodeX <https://codex.so>
 * 
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tooltip"] = factory();
	else
		root["tooltip"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!*******************************************************************************************************!*\
  !*** /Users/khaydarovm/Development/editorjs/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************************************************!*\
  !*** /Users/khaydarovm/Development/editorjs/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************************************************!*\
  !*** /Users/khaydarovm/Development/editorjs/node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************************************************!*\
  !*** /Users/khaydarovm/Development/editorjs/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!*****************************************************************************************************!*\
  !*** /Users/khaydarovm/Development/editorjs/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!*******************************************************************************************************!*\
  !*** /Users/khaydarovm/Development/editorjs/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!*******************************************************************************************************!*\
  !*** /Users/khaydarovm/Development/editorjs/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "../../../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "../../../../node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "../../../../node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../../../node_modules/@babel/runtime/helpers/toConsumableArray.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_toConsumableArray2, _classCallCheck2, _createClass2) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  _toConsumableArray2 = _interopRequireDefault(_toConsumableArray2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);

  var Tooltip =
  /*#__PURE__*/
  function () {
    /**
     * Module constructor
     */
    function Tooltip() {
      (0, _classCallCheck2.default)(this, Tooltip);

      /**
       * Module nodes
       */
      this.nodes = {
        wrapper: null,
        content: null
      };
      /**
       * tooltip top offset
       */

      this.offsetTop = -15;
      this.offsetLeft = 10;
      this.offsetRight = 10;
      this.loadStyles();
      this.prepare();
    }
    /**
     * Tooltip CSS classes
     */


    (0, _createClass2.default)(Tooltip, [{
      key: "show",

      /**
       * Show tooltip for toolbox button
       *
       * @param {HTMLElement} element
       * @param {TooltipContent} content
       * @param {TooltipOptions} customOptions
       */
      value: function show(element, content, customOptions) {
        if (!this.nodes.wrapper) {
          this.prepare();
        }

        var basicOptions = {
          placement: 'bottom',
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0
        };
        var showingOptions = Object.assign(basicOptions, customOptions);
        this.nodes.content.innerHTML = '';
        this.nodes.content.appendChild(content);

        switch (showingOptions.placement) {
          case 'top':
            this.placeTopOfElement(element, showingOptions);
            break;

          case 'left':
            this.placeLeftOfElement(element, showingOptions);
            break;

          case 'right':
            this.placeRightOfElement(element, showingOptions);
            break;

          case 'bottom':
          default:
            this.placeBottomOfElement(element, showingOptions);
            break;
        }

        this.nodes.wrapper.classList.add(this.CSS.tooltipShown);
      }
      /**
       * Hide toolbox tooltip and clean content
       */

    }, {
      key: "hide",
      value: function hide() {
        this.nodes.wrapper.classList.remove(this.CSS.tooltipShown); // remove placement css classes

        this.nodes.wrapper.classList.remove(this.CSS.placement.bottom, this.CSS.placement.left, this.CSS.placement.right, this.CSS.placement.top);
      }
      /**
       * Module Preparation method
       */

    }, {
      key: "prepare",
      value: function prepare() {
        this.nodes.wrapper = this.make('div', this.CSS.tooltip);
        this.nodes.content = this.make('div', this.CSS.tooltipContent);
        this.append(this.nodes.wrapper, this.nodes.content);
        this.append(document.body, this.nodes.wrapper);
      }
    }, {
      key: "loadStyles",
      value: function loadStyles() {
        var styles = __webpack_require__(/*! ../styles/main.css */ "./styles/main.css");

        var tag = this.make('style', null, {
          textContent: styles.toString()
        });
        /**
         * Append styles at the top of HEAD tag
         */

        this.prepend(document.head, tag);
      }
      /**
       * Calculates element coords and moves tooltip top of the element
       *
       * @param {HTMLElement} element
       * @param {TooltipOptions} showingOptions
       */

    }, {
      key: "placeTopOfElement",
      value: function placeTopOfElement(element, showingOptions) {
        var elementCoords = element.getBoundingClientRect();
        var topPlacement = {
          left: elementCoords.left + element.clientWidth / 2,
          top: elementCoords.top + window.pageYOffset - element.clientHeight - this.nodes.wrapper.clientHeight
        };
        this.nodes.wrapper.classList.add(this.CSS.placement.top);
        this.nodes.wrapper.style.left = "".concat(topPlacement.left, "px");
        this.nodes.wrapper.style.transform = "translate3d(-50%, ".concat(topPlacement.top, "px, 0)");
      }
      /**
       * Calculates element coords and moves tooltip left of the element
       *
       * @param {HTMLElement} element
       * @param {TooltipOptions} showingOptions
       */

    }, {
      key: "placeLeftOfElement",
      value: function placeLeftOfElement(element, showingOptions) {
        var elementCoords = element.getBoundingClientRect();
        var leftPlacement = {
          left: elementCoords.left - this.nodes.wrapper.clientWidth + this.offsetLeft + showingOptions.marginLeft,
          top: elementCoords.top + window.pageYOffset - element.clientHeight / 2 + showingOptions.marginLeft
        };
        this.nodes.wrapper.classList.add(this.CSS.placement.left);
        this.nodes.wrapper.style.left = "".concat(leftPlacement.left, "px");
        this.nodes.wrapper.style.transform = "translate3d(-50%, ".concat(leftPlacement.top, "px, 0)");
      }
      /**
       * Calculates element coords and moves tooltip right of the element
       *
       * @param {HTMLElement} element
       * @param {TooltipOptions} showingOptions
       */

    }, {
      key: "placeRightOfElement",
      value: function placeRightOfElement(element, showingOptions) {
        var elementCoords = element.getBoundingClientRect();
        var rightPlacement = {
          left: elementCoords.right + this.nodes.wrapper.clientWidth / 2 + this.offsetRight + showingOptions.marginRight,
          top: elementCoords.top + window.pageYOffset - element.clientHeight / 2 + showingOptions.marginLeft
        };
        this.nodes.wrapper.classList.add(this.CSS.placement.right);
        this.nodes.wrapper.style.left = "".concat(rightPlacement.left, "px");
        this.nodes.wrapper.style.transform = "translate3d(-50%, ".concat(rightPlacement.top, "px, 0)");
      }
      /**
       * Calculates element coords and moves tooltip bottom of the element
       *
       * @param {HTMLElement} element
       * @param {TooltipOptions} showingOptions
       */

    }, {
      key: "placeBottomOfElement",
      value: function placeBottomOfElement(element, showingOptions) {
        var elementCoords = element.getBoundingClientRect();
        var bottomPlacement = {
          left: elementCoords.left + element.clientWidth / 2,
          top: elementCoords.bottom + window.pageYOffset + this.offsetTop + showingOptions.marginTop
        };
        this.nodes.wrapper.classList.add(this.CSS.placement.bottom);
        this.nodes.wrapper.style.left = "".concat(bottomPlacement.left, "px");
        this.nodes.wrapper.style.transform = "translate3d(-50%, ".concat(bottomPlacement.top, "px, 0)");
      }
      /**
       * Helper for making Elements with classname and attributes
       *
       * @param  {string} tagName           - new Element tag name
       * @param  {array|string} classNames  - list or name of CSS classname(s)
       * @param  {Object} attributes        - any attributes
       * @return {HTMLElement}
       */

    }, {
      key: "make",
      value: function make(tagName) {
        var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var el = document.createElement(tagName);

        if (Array.isArray(classNames)) {
          var _el$classList;

          (_el$classList = el.classList).add.apply(_el$classList, (0, _toConsumableArray2.default)(classNames));
        } else if (classNames) {
          el.classList.add(classNames);
        }

        for (var attrName in attributes) {
          if (attributes.hasOwnProperty(attrName)) {
            el[attrName] = attributes[attrName];
          }
        }

        return el;
      }
      /**
       * Append one or several elements to the parent
       *
       * @param  {Element|DocumentFragment} parent    - where to append
       * @param  {Element|Element[]} elements - element or elements list
       */

    }, {
      key: "append",
      value: function append(parent, elements) {
        if (Array.isArray(elements)) {
          elements.forEach(function (el) {
            return parent.appendChild(el);
          });
        } else {
          parent.appendChild(elements);
        }
      }
      /**
       * Append element or a couple to the beginning of the parent elements
       *
       * @param {Element} parent - where to append
       * @param {Element|Element[]} elements - element or elements list
       */

    }, {
      key: "prepend",
      value: function prepend(parent, elements) {
        if (Array.isArray(elements)) {
          elements = elements.reverse();
          elements.forEach(function (el) {
            return parent.prepend(el);
          });
        } else {
          parent.prepend(elements);
        }
      }
    }, {
      key: "CSS",
      get: function get() {
        return {
          tooltip: 'ce-tooltip',
          tooltipContent: 'ce-tooltip__content',
          tooltipShown: 'ce-tooltip--shown',
          placement: {
            left: 'ce-tooltip--placement-left',
            bottom: 'ce-tooltip--placement-bottom',
            right: 'ce-tooltip--placement-right',
            top: 'ce-tooltip--placement-top'
          }
        };
      }
    }]);
    return Tooltip;
  }();

  Tooltip.displayName = "Tooltip";
  module.exports = new Tooltip();
});

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ce-tooltip{position:absolute;z-index:999;top:25px;border-radius:5px;opacity:0;background:#eff2f5;-webkit-box-shadow:0 10px 12px -9px rgba(26,39,54,.32),0 3px 2px -2px rgba(33,48,73,.05);box-shadow:0 10px 12px -9px rgba(26,39,54,.32),0 3px 2px -2px rgba(33,48,73,.05);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity .15s ease-in,left .1s linear;transition:opacity .15s ease-in,left .1s linear;will-change:opacity,left}@media (--mobile){.ce-tooltip{display:none}}.ce-tooltip__content{padding:6px 10px;color:#5c6174;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ce-tooltip--shown{opacity:1;-webkit-transition-delay:.1s,0s;transition-delay:.1s,0s}.ce-tooltip:before{content:\"\";width:10px;height:10px;position:absolute;background-color:#eff2f5;z-index:-1}.ce-tooltip--placement-left:before{top:50%;left:100%;-webkit-transform:translateY(-50%) rotate(-45deg);transform:translateY(-50%) rotate(-45deg)}.ce-tooltip--placement-bottom:before{top:-5px;left:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.ce-tooltip--placement-top:before{top:100%;left:50%;-webkit-transform:translateY(-50%) rotate(-45deg);transform:translateY(-50%) rotate(-45deg)}.ce-tooltip--placement-right:before{top:50%;left:0;-webkit-transform:translateY(-50%) rotate(-45deg);transform:translateY(-50%) rotate(-45deg)}"

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=tooltip.js.map