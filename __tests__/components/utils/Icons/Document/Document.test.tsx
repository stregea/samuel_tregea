import {describe, test, expect, beforeEach, afterEach} from "vitest";
import {render, screen, cleanup} from "@testing-library/react";
import Document from "@/components/utils/Icons/Document/Document";

/**
 * Document Test Suite
 *
 * This suite tests the Document component, ensuring it renders correctly.
 */
describe("Document Icon", () => {

    beforeEach(() => {
        render(<Document url={"https://docs.com"} />);
    });

    afterEach(() => {
        cleanup();
    });

    /**
     * Test to verify the rendering of the Document component.
     */
    test("the rendering of the Document icon.", () => {
        const button = screen.getByTestId("document-button");
        const icon = screen.getByTestId("document-icon");

        expect(button).toBeDefined();
        expect(icon).toBeDefined();
    });
});