import {describe, test, expect, beforeEach, afterEach} from "vitest";
import {render, screen, cleanup} from "@testing-library/react";
import Experience from "@/components/Experience/Experience";

/**
 * Experience Test Suite.
 *
 * This suite tests the Experience component, ensuring it renders correctly.
 */
describe("Experience", () => {

    beforeEach(() => {
        render(<Experience/>);
    });

    afterEach(() => {
        cleanup();
    });

    /**
     * Test to ensure the Experience component renders correctly.
     */
    test("the rendering of the Experience component.", () => {
        expect(screen.getByTestId("experience")).toBeDefined();
    });
});