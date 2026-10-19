import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Tooltip from '../src/index';

/**
 * Time the tooltip waits after hiding before it releases its element and listener,
 * so the hiding transition can play out
 */
const RELEASE_DELAY = 100;

/**
 * Net number of `scroll` listeners the tooltip has registered on `window`
 */
function scrollListeners(add: ReturnType<typeof vi.spyOn>, remove: ReturnType<typeof vi.spyOn>): number {
  const count = (spy: ReturnType<typeof vi.spyOn>): number => spy.mock.calls.filter(([type]) => type === 'scroll').length;

  return count(add) - count(remove);
}

/**
 * The tooltip's wrapper element, if it is in the document
 */
function wrapper(): Element | null {
  return document.body.querySelector('.ct');
}

describe('Tooltip', () => {
  let add: ReturnType<typeof vi.spyOn>;
  let remove: ReturnType<typeof vi.spyOn>;
  let target: HTMLElement;

  beforeEach(() => {
    vi.useFakeTimers();
    add = vi.spyOn(window, 'addEventListener');
    remove = vi.spyOn(window, 'removeEventListener');
    target = document.createElement('button');
    document.body.appendChild(target);
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    document.body.innerHTML = '';
  });

  it('registers nothing and adds nothing to the page until shown', () => {
    new Tooltip();

    expect(scrollListeners(add, remove)).toBe(0);
    expect(wrapper()).toBeNull();
  });

  it('attaches its element and listens for scroll while shown', () => {
    const tooltip = new Tooltip();

    tooltip.show(target, 'Hint', {});

    expect(wrapper()).not.toBeNull();
    expect(scrollListeners(add, remove)).toBe(1);
  });

  it('releases its element and scroll listener once a hide completes', () => {
    const tooltip = new Tooltip();

    tooltip.show(target, 'Hint', {});
    tooltip.hide(true);
    vi.advanceTimersByTime(RELEASE_DELAY);

    expect(wrapper()).toBeNull();
    expect(scrollListeners(add, remove)).toBe(0);
  });

  it('keeps its element until the hiding transition has had time to play', () => {
    const tooltip = new Tooltip();

    tooltip.show(target, 'Hint', {});
    tooltip.hide(true);

    expect(wrapper()).not.toBeNull();
  });

  it('releases only after a delayed hide has completed', () => {
    const tooltip = new Tooltip();

    tooltip.show(target, 'Hint', { hidingDelay: 200 });
    tooltip.hide();
    vi.advanceTimersByTime(RELEASE_DELAY);

    expect(wrapper()).not.toBeNull();

    vi.advanceTimersByTime(200 + RELEASE_DELAY);

    expect(wrapper()).toBeNull();
    expect(scrollListeners(add, remove)).toBe(0);
  });

  it('stays attached, with one scroll listener, when shown again before it is released', () => {
    const tooltip = new Tooltip();

    tooltip.show(target, 'Hint', {});
    tooltip.hide(true);
    tooltip.show(target, 'Hint', {});
    vi.advanceTimersByTime(RELEASE_DELAY);

    expect(wrapper()).not.toBeNull();
    expect(scrollListeners(add, remove)).toBe(1);
  });

  it('does nothing when hidden without having been shown', () => {
    const tooltip = new Tooltip();

    expect(() => tooltip.hide(true)).not.toThrow();
    expect(() => tooltip.hide()).not.toThrow();
    vi.runAllTimers();

    expect(wrapper()).toBeNull();
    expect(scrollListeners(add, remove)).toBe(0);
  });

  it('hides when the page scrolls while shown', () => {
    const tooltip = new Tooltip();

    tooltip.show(target, 'Hint', { delay: 0 });
    window.dispatchEvent(new Event('scroll'));

    expect(wrapper()?.classList.contains('ct--shown')).toBe(false);
  });

  it('releases everything on destroy, including pending timers', () => {
    const tooltip = new Tooltip();

    tooltip.show(target, 'Hint', { delay: 70 });
    tooltip.destroy();
    vi.runAllTimers();

    expect(wrapper()).toBeNull();
    expect(scrollListeners(add, remove)).toBe(0);
  });

  it('can be shown again after destroy', () => {
    const tooltip = new Tooltip();

    tooltip.show(target, 'Hint', {});
    tooltip.destroy();
    tooltip.show(target, 'Hint', {});

    expect(wrapper()).not.toBeNull();
    expect(scrollListeners(add, remove)).toBe(1);
  });
});
