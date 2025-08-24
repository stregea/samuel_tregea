import {describe, test, expect, beforeEach, afterEach} from "vitest";
import {render, screen, cleanup} from "@testing-library/react";
import Email from "@/components/utils/Icons/Email/Email";

/**
 *
 * Email Test Suite
 *
 * This suite tests the Email component, ensuring it renders correctly.
 */
describe("Email Icon", () => {

    beforeEach(() => {
        render(<Email email={"test@test.com"}/>);
    });

    afterEach(() => {
        cleanup();
    });

    /**
     * Test to verify the rendering of the Document component.
     */
    test("the rendering of the Document icon.", () => {
        const button = screen.getByTestId("email-button");
        const icon = screen.getByTestId("email-icon");

        expect(button).toBeDefined();
        expect(icon).toBeDefined();
    });
});