import {TooltipContent, TooltipOptions} from '../index';

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
export default class Tooltip {

  /**
   * Tooltip CSS classes
   */
  private get CSS() {
    return {
      tooltip: 'ce-tooltip',
      tooltipContent: 'ce-tooltip__content',
      tooltipShown: 'ce-tooltip--shown',
      placement: {
        left: 'ce-tooltip--left',
        bottom: 'ce-tooltip--bottom',
        right: 'ce-tooltip--right',
        top: 'ce-tooltip--top',
      },
    };
  }
  /**
   * Module nodes
   */
  private nodes: {
    wrapper: HTMLElement,
    content: HTMLElement,
  } = {
    wrapper: null,
    content: null,
  };

  /**
   * Offset above the Tooltip
   */
  private offsetTop: number = 10;

  /**
   * Offset at the left from the Tooltip
   */
  private offsetLeft: number = 10;

  /**
   * Offset at the right from the Tooltip
   */
  private offsetRight: number = 10;

  /**
   * Store timeout before showing to clear it on hide
   */
  private showingTimeout: NodeJS.Timer;

  /**
   * Module constructor
   */
  constructor() {
    this.loadStyles();
    this.prepare();
  }

  /**
   * Show Tooltip near passed element with specified HTML content
   *
   * @param {HTMLElement} element - target element to place Tooltip near that
   * @param {TooltipContent} content — any HTML Element of String that will be used as content
   * @param {TooltipOptions} options — Available options {@link TooltipOptions}
   */
  public show(element: HTMLElement, content: TooltipContent, options: TooltipOptions): void {
    if (!this.nodes.wrapper) {
      this.prepare();
    }

    const basicOptions = {
      placement: 'bottom',
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      delay: 70,
    };
    const showingOptions = Object.assign(basicOptions, options);

    this.nodes.content.innerHTML = '';

    if (typeof content === 'string') {
      this.nodes.content.appendChild(document.createTextNode(content));
    } else if (content instanceof Node) {
      this.nodes.content.appendChild(content);
    } else {
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

    if (showingOptions && showingOptions.delay) {
      this.showingTimeout = setTimeout(() => {
        this.nodes.wrapper.classList.add(this.CSS.tooltipShown);
      }, showingOptions.delay);
    } else {
      this.nodes.wrapper.classList.add(this.CSS.tooltipShown);
    }

  }

  /**
   * Hide toolbox tooltip and clean content
   */
  public hide(): void {
    this.nodes.wrapper.classList.remove(this.CSS.tooltipShown);

    if (this.showingTimeout) {
      clearTimeout(this.showingTimeout);
    }
  }

  /**
   * Mouseover/Mouseleave decorator
   *
   * @param {HTMLElement} element - target element to place Tooltip near that
   * @param {TooltipContent} content — any HTML Element of String that will be used as content
   * @param {TooltipOptions} options — Available options {@link TooltipOptions}
   */
  public onHover(element, content, options) {
    element.addEventListener('mouseenter', () => {
      this.show(element, content, options);
    });
    element.addEventListener('mouseleave', () => {
      this.hide();
    });
  }

  /**
   * Module Preparation method
   */
  private prepare() {
    this.nodes.wrapper = this.make('div', this.CSS.tooltip);
    this.nodes.content = this.make('div', this.CSS.tooltipContent);

    this.append(this.nodes.wrapper, this.nodes.content);
    this.append(document.body, this.nodes.wrapper);
  }

  private loadStyles(): void {
    const styles = require('../styles/main.css');
    const tag = this.make('style', null, {
      textContent: styles.toString(),
    });

    /**
     * Append styles at the top of HEAD tag
     */
    this.prepend(document.head, tag);
  }

  /**
   * Calculates element coords and moves tooltip bottom of the element
   *
   * @param {HTMLElement} element
   * @param {TooltipOptions} showingOptions
   */
  private placeBottomOfElement(element: HTMLElement, showingOptions: TooltipOptions): void {
    const elementCoords = element.getBoundingClientRect();
    const bottomPlacement = {
      left: elementCoords.left + element.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2,
      top: elementCoords.bottom + window.pageYOffset + this.offsetTop + showingOptions.marginTop,
    };

    this.nodes.wrapper.classList.add(this.CSS.placement.bottom);

    this.nodes.wrapper.style.left = `${bottomPlacement.left}px`;
    this.nodes.wrapper.style.top = `${bottomPlacement.top}px`;
  }

  /**
   * Calculates element coords and moves tooltip top of the element
   *
   * @param {HTMLElement} element
   * @param {TooltipOptions} showingOptions
   */
  private placeTopOfElement(element: HTMLElement, showingOptions: TooltipOptions): void {
    const elementCoords = element.getBoundingClientRect();
    const topPlacement = {
      left: elementCoords.left + element.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2,
      top: elementCoords.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop,
    };

    this.nodes.wrapper.classList.add(this.CSS.placement.top);

    this.nodes.wrapper.style.left = `${topPlacement.left}px`;
    this.nodes.wrapper.style.top = `${topPlacement.top}px`;
  }

  /**
   * Calculates element coords and moves tooltip left of the element
   *
   * @param {HTMLElement} element
   * @param {TooltipOptions} showingOptions
   */
  private placeLeftOfElement(element: HTMLElement, showingOptions: TooltipOptions): void {
    const elementCoords = element.getBoundingClientRect();
    const leftPlacement = {
      left: elementCoords.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - showingOptions.marginLeft,
      top: elementCoords.top + window.pageYOffset + element.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2,
    };

    this.nodes.wrapper.classList.add(this.CSS.placement.left);

    this.nodes.wrapper.style.left = `${leftPlacement.left}px`;
    this.nodes.wrapper.style.top = `${leftPlacement.top}px`;
  }

  /**
   * Calculates element coords and moves tooltip right of the element
   *
   * @param {HTMLElement} element
   * @param {TooltipOptions} showingOptions
   */
  private placeRightOfElement(element: HTMLElement, showingOptions: TooltipOptions): void {
    const elementCoords = element.getBoundingClientRect();
    const rightPlacement = {
      left: elementCoords.right + this.offsetRight + showingOptions.marginRight,
      top: elementCoords.top + window.pageYOffset + element.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2,
    };

    this.nodes.wrapper.classList.add(this.CSS.placement.right);

    this.nodes.wrapper.style.left = `${rightPlacement.left}px`;
    this.nodes.wrapper.style.top = `${rightPlacement.top}px`;
  }

  /**
   * Helper for making Elements with classname and attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {array|string} classNames  - list or name of CSS classname(s)
   * @param  {Object} attributes        - any attributes
   * @return {HTMLElement}
   */
  private make(tagName: string, classNames: string|string[] = null, attributes: object = {}): HTMLElement {
    const el = document.createElement(tagName);

    if ( Array.isArray(classNames) ) {
      el.classList.add(...classNames);
    } else if ( classNames ) {
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
  private append(parent: Element|DocumentFragment, elements: Element|Element[]|DocumentFragment): void {
    if ( Array.isArray(elements) ) {
      elements.forEach( (el) => parent.appendChild(el) );
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
  private prepend(parent: Element, elements: Element|Element[]): void {
    if ( Array.isArray(elements) ) {
      elements = elements.reverse();
      elements.forEach( (el) => parent.prepend(el) );
    } else {
      parent.prepend(elements);
    }
  }
}
