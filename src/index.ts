/**
 * Module description
 */
import {TooltipContent, TooltipOptions} from '../index';

class Tooltip {

  /**
   * Tooltip CSS classes
   */
  public get CSS() {
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
   * Module nodes
   */
  public nodes: {
    wrapper: HTMLElement,
    content: HTMLElement,
  } = {
    wrapper: null,
    content: null,
  };

  /**
   * tooltip top offset
   */
  private offsetTop: number = -15;
  private offsetLeft: number = 10;
  private offsetRight: number = 10;

  /**
   * Module constructor
   */
  constructor() {
    this.loadStyles();
    this.prepare();
  }

  /**
   * Show tooltip for toolbox button
   *
   * @param {HTMLElement} element
   * @param {TooltipContent} content
   * @param {TooltipOptions} customOptions
   */
  public show(element: HTMLElement, content: TooltipContent, customOptions: TooltipOptions): void {
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
  public hide(): void {
    this.nodes.wrapper.classList.remove(this.CSS.tooltipShown);

    // remove placement css classes
    this.nodes.wrapper.classList.remove(
      this.CSS.placement.bottom,
      this.CSS.placement.left,
      this.CSS.placement.right,
      this.CSS.placement.top,
    );
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
   * Calculates element coords and moves tooltip top of the element
   *
   * @param {HTMLElement} element
   * @param {TooltipOptions} showingOptions
   */
  private placeTopOfElement(element: HTMLElement, showingOptions: TooltipOptions): void {
    const elementCoords = element.getBoundingClientRect();
    const topPlacement = {
      left: elementCoords.left + element.clientWidth / 2,
      top: elementCoords.top + window.pageYOffset - element.clientHeight - this.nodes.wrapper.clientHeight,
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
  private placeLeftOfElement(element: HTMLElement, showingOptions: TooltipOptions): void {
    const elementCoords = element.getBoundingClientRect();
    const leftPlacement = {
      left: elementCoords.left - this.nodes.wrapper.clientWidth + this.offsetLeft + showingOptions.marginLeft,
      top: elementCoords.top + window.pageYOffset - element.clientHeight / 2 + showingOptions.marginLeft,
    };

    this.nodes.wrapper.classList.add(this.CSS.placement.left);

    this.nodes.wrapper.style.left = `${leftPlacement.left}px`;
    this.nodes.wrapper.style.transform = `translate3d(-50%, ${leftPlacement.top}px, 0)`;
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
      left: elementCoords.right + this.nodes.wrapper.clientWidth / 2 + this.offsetRight + showingOptions.marginRight,
      top: elementCoords.top + window.pageYOffset - element.clientHeight / 2 + showingOptions.marginLeft,
    };

    this.nodes.wrapper.classList.add(this.CSS.placement.right);

    this.nodes.wrapper.style.left = `${rightPlacement.left}px`;
    this.nodes.wrapper.style.transform = `translate3d(-50%, ${rightPlacement.top}px, 0)`;
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

module.exports = new Tooltip();
