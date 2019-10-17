/**
 * Base options interface for tooltips
 */
export interface TooltipOptions {
  /**
   * Tooltip position: top|bottom|left|right
   */
  position?: string;

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
}

/**
 * Tooltip supported content
 */
export type TooltipContent = HTMLElement | DocumentFragment | Node;

declare namespace tooltip {
  /**
   * @param {HTMLElement} element
   * @param {TooltipContent} content
   * @param {TooltipOptions} options
   */
  export function show(
    element: HTMLElement,
    content: TooltipContent,
    options?: TooltipOptions,
  ): void;

  /**
   * Hides tooltip
   */
  export function hide(): void;
}

export default tooltip;
