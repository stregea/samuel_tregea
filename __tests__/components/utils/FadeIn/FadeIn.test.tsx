import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import FadeIn from "@/components/utils/FadeIn/FadeIn";

/**
 * Test suite for the FadeIn component.
 * 
 * This suite tests the functionality of the FadeIn component, specifically
 * ensuring that it correctly observes elements and sets their visibility.
 */
describe("FadeIn", () => {
	const unobserve = vi.fn();
  	const observe = vi.fn();

	// Mock IntersectionObserver before each test
	beforeEach(() => {
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

	afterEach(() => {
		cleanup();
	});

	/**
	 * Test to ensure FadeIn component renders correctly.
	 */
	test("the rendering of the FadeIn component.", () => {
		render(
			<FadeIn>
				{"TEST"}
			</FadeIn>
		);

		const element  = screen.getByTestId("fadeIn");

		expect(element).toBeDefined();
		expect(element.innerHTML).toEqual("TEST");
		expect(element.className).toContain("fadeIn");
	});

	/**
	 * Test to ensure FadeIn component renders when it's within the viewport.
	 */
	test("the visibility of the FadeIn component when within view and unobserves.", () => {
		const { getByTestId, unmount } = render(
			<FadeIn>
				<div data-testid="testElement" />
			</FadeIn>
		);

		// Simulate the IntersectionObserver callback being called
		const element = getByTestId("testElement");
		const callback = (window.IntersectionObserver as any).mock.calls[0][0];
		const entry = { isIntersecting: true, target: element };

		// Call the callback with the entry        
		callback([entry]);

		expect(window.IntersectionObserver).toHaveBeenCalled();

		// unmount the component
		unmount();
		expect(unobserve).toHaveBeenCalledWith(entry.target);
	});
});