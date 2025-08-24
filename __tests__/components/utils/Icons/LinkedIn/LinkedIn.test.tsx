import {describe, test, expect, beforeEach, afterEach} from "vitest";
import {render, screen, cleanup} from "@testing-library/react";
import LinkedIn from "@/components/utils/Icons/LinkedIn/LinkedIn";

/**
 * LinkedIn Test Suite
 *
 * This suite tests the LinkedIn component, ensuring it renders correctly.
 */
describe("LinkedIn Icon", () => {
    beforeEach(() => {
        render(<LinkedIn url={"https://www.linkedin.com/in/username"}/>);
    });

    afterEach(() => {
        cleanup();
    });

    /**
     * Test to verify the rendering of the LinkedIn component.
     */
    test("the rendering of the LinkedIn icon.", () => {
        const button = screen.getByTestId("linkedin-button");
        const icon = screen.getByTestId("linkedin-icon");

        expect(button).toBeDefined();
        expect(icon).toBeDefined();
    });
});