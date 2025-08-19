import {describe, test, expect, beforeEach, afterEach} from "vitest";
import {cleanup, render, screen} from "@testing-library/react";
import Whoami from "@/components/Whoami/Whoami";

/**
 * Whoami Test Suite.
 *
 * This suite tests the Whoami component, ensuring it renders correctly.
 */
describe("Whoami", () => {

    beforeEach(() => {
        render(<Whoami/>);
    });

    afterEach(() => {
        cleanup();
    });

    /**
     * Test to ensure the Whoami component renders correctly.
     */
    test("The rendering of the Whoami component.", () => {
        expect(screen.getByTestId("whoami")).toBeDefined();
    });
});
