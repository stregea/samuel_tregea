import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "@/components/utils/Header/Header";

/**
 * Header Test Suite
 * 
 * This suite tests the Header component, ensuring it renders correctly.
 */
describe("Header", () => {

    beforeEach(() => {
        render(<Header>{"Test Header"}</Header>);
    });

    afterEach(() => {
        cleanup();
    });

    /**
     * Test to verify the rendering of the Header component.
     */
    test("the rendering of the Header component.", () => {
        const header = screen.getByTestId("header");

        expect(header).toBeDefined();
        expect(header.localName).toEqual("h2");
        expect(header.innerHTML).toEqual("Test Header");
        expect(header.className).toContain("header");
    });
});