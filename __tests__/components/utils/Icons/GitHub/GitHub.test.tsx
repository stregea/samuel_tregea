import {describe, test, expect, beforeEach, afterEach} from "vitest";
import {render, screen, cleanup} from "@testing-library/react";
import GitHub from "@/components/utils/Icons/GitHub/GitHub";

/**
 * GitHub Test Suite
 *
 * This suite tests the GitHub component, ensuring it renders correctly.
 */
describe("GitHub Icon", () => {

    beforeEach(() => {
        render(<GitHub url={"https://github.com"}/>);
    });

    afterEach(() => {
        cleanup();
    });

    /**
     * Test to verify the rendering of the GitHub component.
     */
    test("the rendering of the GitHub icon.", () => {
        const button = screen.getByTestId("github-button");
        const icon = screen.getByTestId("github-icon");

        expect(button).toBeDefined();
        expect(icon).toBeDefined();
    });
});