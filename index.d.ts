/**
 * Base options interface for tooltips
 */
export interface TooltipOptions {
  /**
   * Tooltip placement: top|bottom|left|right
   */
  placement?: string;

  /**
   * Tooltip top margin
   */
  marginTop?: number;

  /**
   * Tooltip left margin
   */
  marginLeft?: number;

  /**
   * Tooltip right margin
   */
  marginRight?: number;

  /**
   * Tooltip bottom margin
   */
  marginBottom?: number;

  /**
   * Timout before showing
   */
  delay?: number;

  /**
   * Timout before hiding
   */
  hidingDelay?: number;
}

/**
 * Tooltip supported content
 */
export type TooltipContent = HTMLElement | DocumentFragment | Node | string;

declare class Tooltip {
  /**
   * Class constructor. Loads styles.
   */
  constructor();

  /**
   * Shows the Tooltip near passed element
   *
   * @param {HTMLElement} element — Tooltip will be showed near this element
   * @param {TooltipContent} content - Content that will be appended to the Tooltip
   * @param {TooltipOptions} options - Some displaying options, see below
   */
  public show(
    element: HTMLElement,
    content: TooltipContent,
    options?: TooltipOptions,
  ): void;

  /**
   * Hides the Tooltip
   */
  public hide(): void;

  /**
   * Decorator for showing Tooltip by mouseenter/mouseleave
   *
   * @param {HTMLElement} element — Tooltip will be showed near this element
   * @param {TooltipContent} content - Content that will be appended to the Tooltip
   * @param {TooltipOptions} options - Some displaying options, see below
   */
  public onHover(
    element: HTMLElement,
    content: TooltipContent,
    options?: TooltipOptions,
  ): void;
}

export default Tooltip;
