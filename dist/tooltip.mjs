(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(`.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px #1d202b2b,0 4px 5px -3px #05060c7d;border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports (-webkit-mask-box-image:url()){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translate(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translate(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translate(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translate(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`)),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
class h {
  /**
   * Module constructor
   */
  constructor() {
    this.nodes = {
      wrapper: null,
      content: null
    }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
      this.showed && this.hide(!0);
    }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: !0 });
  }
  /**
   * Tooltip CSS classes
   */
  get CSS() {
    return {
      tooltip: "ct",
      tooltipContent: "ct__content",
      tooltipShown: "ct--shown",
      placement: {
        left: "ct--left",
        bottom: "ct--bottom",
        right: "ct--right",
        top: "ct--top"
      }
    };
  }
  /**
   * Show Tooltip near passed element with specified HTML content
   *
   * @param {HTMLElement} element - target element to place Tooltip near that
   * @param {TooltipContent} content — any HTML Element of String that will be used as content
   * @param {TooltipOptions} options — Available options {@link TooltipOptions}
   */
  show(t, e, i) {
    this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
    const s = Object.assign({
      placement: "bottom",
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      delay: 70,
      hidingDelay: 0
    }, i);
    if (s.hidingDelay && (this.hidingDelay = s.hidingDelay), this.nodes.content.innerHTML = "", typeof e == "string")
      this.nodes.content.appendChild(document.createTextNode(e));
    else if (e instanceof Node)
      this.nodes.content.appendChild(e);
    else
      throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof e + " given.");
    switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), s.placement) {
      case "top":
        this.placeTop(t, s);
        break;
      case "left":
        this.placeLeft(t, s);
        break;
      case "right":
        this.placeRight(t, s);
        break;
      case "bottom":
      default:
        this.placeBottom(t, s);
        break;
    }
    s && s.delay ? this.showingTimeout = setTimeout(() => {
      this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
    }, s.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
  }
  /**
   * Hide toolbox tooltip and clean content
   * @param {boolean} skipDelay - forces hiding immediately
   */
  hide(t = !1) {
    if (this.hidingDelay && !t) {
      this.hidingTimeout && clearTimeout(this.hidingTimeout), this.hidingTimeout = setTimeout(() => {
        this.hide(!0);
      }, this.hidingDelay);
      return;
    }
    this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
  }
  /**
   * Mouseover/Mouseleave decorator
   *
   * @param {HTMLElement} element - target element to place Tooltip near that
   * @param {TooltipContent} content — any HTML Element of String that will be used as content
   * @param {TooltipOptions} options — Available options {@link TooltipOptions}
   */
  onHover(t, e, i) {
    t.addEventListener("mouseenter", () => {
      this.show(t, e, i);
    }), t.addEventListener("mouseleave", () => {
      this.hide();
    });
  }
  /**
   * Release DOM and event listeners
   */
  destroy() {
    this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
  }
  /**
   * Module Preparation method
   */
  prepare() {
    this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
  }
  /**
   * Append CSS file
   */
  loadStyles() {
    const t = "codex-tooltips-style";
    if (document.getElementById(t))
      return;
    const e = fetch("../styles/main.css"), i = this.make("style", null, {
      textContent: e.toString(),
      id: t
    });
    this.prepend(document.head, i);
  }
  /**
   * Calculates element coords and moves tooltip bottom of the element
   *
   * @param {HTMLElement} element
   * @param {TooltipOptions} showingOptions
   */
  placeBottom(t, e) {
    const i = t.getBoundingClientRect(), o = i.left + t.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, s = i.bottom + window.pageYOffset + this.offsetTop + e.marginTop;
    this.applyPlacement("bottom", o, s);
  }
  /**
   * Calculates element coords and moves tooltip top of the element
   *
   * @param {HTMLElement} element
   * @param {TooltipOptions} showingOptions
   */
  placeTop(t, e) {
    const i = t.getBoundingClientRect(), o = i.left + t.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, s = i.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
    this.applyPlacement("top", o, s);
  }
  /**
   * Calculates element coords and moves tooltip left of the element
   *
   * @param {HTMLElement} element
   * @param {TooltipOptions} showingOptions
   */
  placeLeft(t, e) {
    const i = t.getBoundingClientRect(), o = i.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - e.marginLeft, s = i.top + window.pageYOffset + t.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
    this.applyPlacement("left", o, s);
  }
  /**
   * Calculates element coords and moves tooltip right of the element
   *
   * @param {HTMLElement} element
   * @param {TooltipOptions} showingOptions
   */
  placeRight(t, e) {
    const i = t.getBoundingClientRect(), o = i.right + this.offsetRight + e.marginRight, s = i.top + window.pageYOffset + t.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
    this.applyPlacement("right", o, s);
  }
  /**
   * Set wrapper position
   */
  applyPlacement(t, e, i) {
    this.nodes.wrapper.classList.add(this.CSS.placement[t]), this.nodes.wrapper.style.left = `${e}px`, this.nodes.wrapper.style.top = `${i}px`;
  }
  /**
   * Helper for making Elements with classname and attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {array|string} classNames  - list or name of CSS classname(s)
   * @param  {Object} attributes        - any attributes
   * @return {HTMLElement}
   */
  make(t, e = null, i = {}) {
    const o = document.createElement(t);
    Array.isArray(e) ? o.classList.add(...e) : e && o.classList.add(e);
    for (const s in i)
      i.hasOwnProperty(s) && (o[s] = i[s]);
    return o;
  }
  /**
   * Append one or several elements to the parent
   *
   * @param  {Element|DocumentFragment} parent    - where to append
   * @param  {Element|Element[]} elements - element or elements list
   */
  append(t, e) {
    Array.isArray(e) ? e.forEach((i) => t.appendChild(i)) : t.appendChild(e);
  }
  /**
   * Append element or a couple to the beginning of the parent elements
   *
   * @param {Element} parent - where to append
   * @param {Element|Element[]} elements - element or elements list
   */
  prepend(t, e) {
    Array.isArray(e) ? (e = e.reverse(), e.forEach((i) => t.prepend(i))) : t.prepend(e);
  }
}
export {
  h as default
};
