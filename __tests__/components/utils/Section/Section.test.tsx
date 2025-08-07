import {describe, test, expect, beforeEach, afterEach} from "vitest";
import {render, screen, cleanup} from "@testing-library/react";
import Section from "@/components/utils/Section/Section";

/**
 * Section Test Suite
 *
 * This suite tests the Section component, ensuring it renders correctly.
 */
describe("Section", () => {

    beforeEach(() => {
        render(<Section id="section" delay={1}>{"Test Content"}</Section>);
    });

    afterEach(() => {
        cleanup();
    });

    /**
     * Test to verify the rendering of the Section component.
     */
    test("the rendering of the Section component.", () => {
        const section = screen.getByTestId("section");

        expect(section).toBeDefined();
        expect(section.localName).toEqual("section");
        expect(section.innerHTML).toContain("Test Content");
        expect(section.className).toContain("section");
    });
});