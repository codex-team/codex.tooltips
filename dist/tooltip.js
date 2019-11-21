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
		exports["Tooltip"] = factory();
	else
		root["Tooltip"] = factory();
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tooltip; });
/**
 *
 * Tiny any beautiful tooltips module.
 *
 * Can be showed near passed Element with any specified HTML content
 *
 * https://github.com/codex-team/codex.tooltips <- ★ Star if you like it ( ͡° ͜ ͡°)
 *
 * @author CodeX <codex.so>
 * @licence MIT
 */
class Tooltip {
    /**
     * Module constructor
     */
    constructor() {
        /**
         * Module nodes
         */
        this.nodes = {
            wrapper: null,
            content: null,
        };
        /**
         * Offset above the Tooltip
         */
        this.offsetTop = 10;
        /**
         * Offset at the left from the Tooltip
         */
        this.offsetLeft = 10;
        /**
         * Offset at the right from the Tooltip
         */
        this.offsetRight = 10;
        this.loadStyles();
        this.prepare();
    }
    /**
     * Tooltip CSS classes
     */
    get CSS() {
        return {
            tooltip: 'ce-tooltip',
            tooltipContent: 'ce-tooltip__content',
            tooltipShown: 'ce-tooltip--shown',
            placement: {
                left: 'ce-tooltip--placement-left',
                bottom: 'ce-tooltip--placement-bottom',
                right: 'ce-tooltip--placement-right',
                top: 'ce-tooltip--placement-top',
            },
        };
    }
    /**
     * Show Tooltip near passed element with specified HTML content
     *
     * @param {HTMLElement} element - target element to place Tooltip near that
     * @param {TooltipContent} content — any HTML Element of String that will be used as content
     * @param {TooltipOptions} customOptions — Available options {@link TooltipOptions}
     */
    show(element, content, customOptions) {
        if (!this.nodes.wrapper) {
            this.prepare();
        }
        const basicOptions = {
            placement: 'bottom',
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
        };
        const showingOptions = Object.assign(basicOptions, customOptions);
        this.nodes.content.innerHTML = '';
        if (typeof content === 'string') {
            this.nodes.content.appendChild(document.createTextNode(content));
        }
        else if (content instanceof Node) {
            this.nodes.content.appendChild(content);
        }
        else {
            throw Error('[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. ' +
                'But ' + typeof content + ' given.');
        }
        this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement));
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
    hide() {
        return;
        this.nodes.wrapper.classList.remove(this.CSS.tooltipShown);
    }
    /**
     * Module Preparation method
     */
    prepare() {
        this.nodes.wrapper = this.make('div', this.CSS.tooltip);
        this.nodes.content = this.make('div', this.CSS.tooltipContent);
        this.append(this.nodes.wrapper, this.nodes.content);
        this.append(document.body, this.nodes.wrapper);
    }
    loadStyles() {
        const styles = __webpack_require__(/*! ../styles/main.css */ "./styles/main.css");
        const tag = this.make('style', null, {
            textContent: styles.toString(),
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
    placeTopOfElement(element, showingOptions) {
        const elementCoords = element.getBoundingClientRect();
        const topPlacement = {
            left: elementCoords.left + element.clientWidth / 2,
            top: elementCoords.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop,
        };
        this.nodes.wrapper.classList.add(this.CSS.placement.top);
        this.nodes.wrapper.style.left = `${topPlacement.left}px`;
        this.nodes.wrapper.style.transform = `translate3d(-50%, ${topPlacement.top}px, 0)`;
    }
    /**
     * Calculates element coords and moves tooltip left of the element
     *
     * @param {HTMLElement} element
     * @param {TooltipOptions} showingOptions
     */
    placeLeftOfElement(element, showingOptions) {
        const elementCoords = element.getBoundingClientRect();
        const leftPlacement = {
            left: elementCoords.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - showingOptions.marginLeft,
            top: elementCoords.top + window.pageYOffset + element.clientHeight / 2,
        };
        this.nodes.wrapper.classList.add(this.CSS.placement.left);
        this.nodes.wrapper.style.left = `${leftPlacement.left}px`;
        this.nodes.wrapper.style.transform = `translate3d(0, ${leftPlacement.top}px, 0)`;
    }
    /**
     * Calculates element coords and moves tooltip right of the element
     *
     * @param {HTMLElement} element
     * @param {TooltipOptions} showingOptions
     */
    placeRightOfElement(element, showingOptions) {
        const elementCoords = element.getBoundingClientRect();
        const rightPlacement = {
            left: elementCoords.right + this.offsetRight + showingOptions.marginRight,
            top: elementCoords.top + window.pageYOffset - element.clientHeight / 2 + showingOptions.marginLeft,
        };
        this.nodes.wrapper.classList.add(this.CSS.placement.right);
        this.nodes.wrapper.style.left = `${rightPlacement.left}px`;
        this.nodes.wrapper.style.transform = `translate3d(0, ${rightPlacement.top}px, 0)`;
    }
    /**
     * Calculates element coords and moves tooltip bottom of the element
     *
     * @param {HTMLElement} element
     * @param {TooltipOptions} showingOptions
     */
    placeBottomOfElement(element, showingOptions) {
        const elementCoords = element.getBoundingClientRect();
        const bottomPlacement = {
            left: elementCoords.left + element.clientWidth / 2,
            top: elementCoords.bottom + window.pageYOffset + this.offsetTop + showingOptions.marginTop,
        };
        this.nodes.wrapper.classList.add(this.CSS.placement.bottom);
        this.nodes.wrapper.style.left = `${bottomPlacement.left}px`;
        this.nodes.wrapper.style.transform = `translate3d(-50%, ${bottomPlacement.top}px, 0)`;
    }
    /**
     * Helper for making Elements with classname and attributes
     *
     * @param  {string} tagName           - new Element tag name
     * @param  {array|string} classNames  - list or name of CSS classname(s)
     * @param  {Object} attributes        - any attributes
     * @return {HTMLElement}
     */
    make(tagName, classNames = null, attributes = {}) {
        const el = document.createElement(tagName);
        if (Array.isArray(classNames)) {
            el.classList.add(...classNames);
        }
        else if (classNames) {
            el.classList.add(classNames);
        }
        for (const attrName in attributes) {
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
    append(parent, elements) {
        if (Array.isArray(elements)) {
            elements.forEach((el) => parent.appendChild(el));
        }
        else {
            parent.appendChild(elements);
        }
    }
    /**
     * Append element or a couple to the beginning of the parent elements
     *
     * @param {Element} parent - where to append
     * @param {Element|Element[]} elements - element or elements list
     */
    prepend(parent, elements) {
        if (Array.isArray(elements)) {
            elements = elements.reverse();
            elements.forEach((el) => parent.prepend(el));
        }
        else {
            parent.prepend(elements);
        }
    }
}


/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ce-tooltip{position:absolute;z-index:999;border-radius:9px;top:0;left:0;opacity:0;-webkit-box-shadow:0 4px 5px -3px rgba(5,6,12,.49),0 8px 12px 0 rgba(29,32,43,.17);box-shadow:0 4px 5px -3px rgba(5,6,12,.49),0 8px 12px 0 rgba(29,32,43,.17);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 70ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 70ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 70ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 70ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity;-webkit-transform:scale(.8);transform:scale(.8);background:#1d202b}.ce-tooltip:before{content:\"\";left:0;top:0;bottom:0;right:0;position:absolute;background-color:#1d202b;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z\"/></svg>') 48% 41% 37.9% 53.3%;z-index:-1}@media (--mobile){.ce-tooltip{display:none}}.ce-tooltip__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ce-tooltip--shown{opacity:1;-webkit-transform:none;transform:none}.ce-tooltip:after{content:\"\";width:10px;height:10px;position:absolute;background-color:#1d202b;z-index:-1}.ce-tooltip--placement-left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ce-tooltip--placement-bottom:after{top:-5px}.ce-tooltip--placement-bottom:after,.ce-tooltip--placement-top:after{left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ce-tooltip--placement-top:after{top:auto;bottom:-5px}.ce-tooltip--placement-right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}"

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=tooltip.js.map