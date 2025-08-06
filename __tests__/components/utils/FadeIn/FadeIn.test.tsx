import { describe, test, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import FadeIn from '@/components/utils/FadeIn/FadeIn';

/**
 * Test suite for the FadeIn component.
 * This suite tests the functionality of the FadeIn component, specifically
 * ensuring that it correctly observes elements and sets their visibility.
 */
describe('FadeIn Test Suite', () => {
  let unobserve: ReturnType<typeof vi.fn>;
  let observe: ReturnType<typeof vi.fn>;

  // Mock IntersectionObserver before each test
  beforeEach(() => {
    unobserve = vi.fn();
    observe = vi.fn();
    window.IntersectionObserver = vi.fn((callback, options) => ({
      observe,
      unobserve,
      disconnect: vi.fn(),
      takeRecords: vi.fn(),
      root: options?.root,
      rootMargin: options?.rootMargin,
      thresholds: options?.threshold,
      callback,
    }));
  });

  test("sets isVisible to true when element is in view and unobserves", () => {
    const { getByTestId, unmount } = render(
        <FadeIn>
            <div data-testid="test-fade-element" />
        </FadeIn>
    );

    // Simulate the IntersectionObserver callback being called
    const targetDiv = getByTestId("test-fade-element")
    const callback = (window.IntersectionObserver as any).mock.calls[0][0];
    const entry = { isIntersecting: true, target: targetDiv };

    // Call the callback with the entry        
    callback([entry]);

    expect(window.IntersectionObserver).toHaveBeenCalled();

    // unmount the component
    unmount();
    expect(unobserve).toHaveBeenCalledWith(entry.target);
  });
});