import {describe, test, expect, beforeEach, afterEach} from "vitest";
import {render, screen, cleanup} from "@testing-library/react";
import Highlight from "@/components/utils/Highlight/Highlight";

/**
 * Highlight Test Suite
 *
 * This suite tests the Highlight component, ensuring it renders correctly.
 */
describe("Highlight", () => {

    beforeEach(() => {
        render(<Highlight>{"TEST"}</Highlight>);
    });

    afterEach(() => {
        cleanup();
    });

    /**
     * Test to verify the rendering of the Highlight component.
     */
    test("the rendering of the Highlight component.", () => {
        const highlight = screen.getByTestId("highlight");

        expect(highlight).toBeDefined();
        expect(highlight.localName).toEqual("span");
        expect(highlight.innerHTML).toEqual("TEST");
        expect(highlight.className).toContain("highlight");
    });
});