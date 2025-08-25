import {describe, test, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import Copyright from "@/components/Copyright/Copyright";

/**
 * Test suite for the Copyright component.
 *
 * This suite tests the rendering of the Copyright component to ensure it
 * displays the correct information.
 */
describe("Copyright", () => {

    /**
     * Test the rendering of the Copyright component.
     */
    test("renders the Copyright component", () => {
        const currentYear = new Date().getFullYear();
        const expectedText = `© ${currentYear} Samuel Tregea. All rights reserved.`;

        render(<Copyright/>);

        expect(screen.getByTestId("copyright")).toBeDefined();
        expect(screen.getByTestId("copyright-text")).toBeDefined();
        expect(screen.getByTestId("copyright-text").innerHTML).toContain(expectedText);
    });
});