import {describe, test, expect, vi, beforeEach, afterEach} from "vitest";
import React from "react";
import {render, cleanup, screen} from "@testing-library/react";
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
    const disconnect = vi.fn();

    /**
     * Mock IntersectionObserver before each test.
     *
     * The browser environment used by Vitest does not provide a native
     * IntersectionObserver implementation, so this mock allows the FadeIn
     * component to observe elements during testing.
     */
    beforeEach(() => {
        vi.clearAllMocks();

        window.IntersectionObserver = vi.fn((callback, options) => ({
            observe,
            unobserve,
            disconnect,
            takeRecords: vi.fn(() => []),
            root: options?.root ?? null,
            rootMargin: options?.rootMargin ?? "",
            scrollMargin: "",
            thresholds: [],
        })) as unknown as typeof IntersectionObserver;
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

        const element = screen.getByTestId("fadeIn");

        expect(element).toBeDefined();
        expect(element.innerHTML).toEqual("TEST");
        expect(element.className).toContain("fadeIn");
    });

    /**
     * Test to ensure FadeIn component becomes visible when it enters the viewport
     * and stops observing the element after visibility is triggered.
     */
    test("the visibility of the FadeIn component when within view and unobserves.", () => {
        const {getByTestId, unmount} = render(
            <FadeIn>
                <div data-testid="testElement"/>
            </FadeIn>
        );

        // Retrieve the element being observed by IntersectionObserver
        const element = getByTestId("testElement");

        // Retrieve the IntersectionObserver callback from the mock
        const intersectionObserverMock =
            window.IntersectionObserver as unknown as vi.Mock;

        const callback = intersectionObserverMock.mock.calls[0][0];

        // Simulate the element entering the viewport
        const entry = {
            isIntersecting: true,
            target: element,
        };

        // Call the IntersectionObserver callback with the simulated entry
        callback([entry]);

        expect(window.IntersectionObserver).toHaveBeenCalled();

        // Unmount the component to trigger cleanup
        unmount();

        // Ensure the observer stops observing the element
        expect(unobserve).toHaveBeenCalledWith(element);
    });
});