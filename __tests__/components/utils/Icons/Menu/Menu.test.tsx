import {describe, test, expect, beforeEach, afterEach} from "vitest";
import {render, screen, cleanup} from "@testing-library/react";
import Menu from "@/components/utils/Icons/Menu/Menu";

/**
 * Menu Test Suite
 *
 * This suite tests the Menu component, ensuring it renders correctly.
 */
describe("Menu Icon", () => {

    beforeEach(() => {
        render(<Menu controls={null} onClick={null}/>);
    });

    afterEach(() => {
        cleanup();
    });

    /**
     * Test to verify the rendering of the Menu component.
     */
    test("the rendering of the Menu icon.", () => {
        const button = screen.getByTestId("menu-button");
        const icon = screen.getByTestId("menu-icon");

        expect(button).toBeDefined();
        expect(icon).toBeDefined();
    });
});