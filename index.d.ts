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
}

/**
 * Tooltip supported content
 */
export type TooltipContent = HTMLElement | DocumentFragment | Node | string;

declare namespace tooltip {
  /**
   * Shows the Tooltip near passed element
   *
   * @param {HTMLElement} element — Tooltip will be showed near this element
   * @param {TooltipContent} content - Content that will be appended to the Tooltip
   * @param {TooltipOptions} options - Some displaying options, see below
   */
  export function show(
    element: HTMLElement,
    content: TooltipContent,
    options?: TooltipOptions,
  ): void;

  /**
   * Hides the Tooltip
   */
  export function hide(): void;

  /**
   * Decorator for showing Tooltip by mouseenter/mosueleave
   *
   * @param {HTMLElement} element — Tooltip will be showed near this element
   * @param {TooltipContent} content - Content that will be appended to the Tooltip
   * @param {TooltipOptions} options - Some displaying options, see below
   */
  export function onHover(
    element: HTMLElement,
    content: TooltipContent,
    options?: TooltipOptions,
  ): void;
}

export default tooltip;
