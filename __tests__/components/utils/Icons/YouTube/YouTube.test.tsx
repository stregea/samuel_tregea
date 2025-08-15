import {describe, test, expect, beforeEach, afterEach} from "vitest";
import {render, screen, cleanup} from "@testing-library/react";
import YouTube from "@/components/utils/Icons/YouTube/YouTube";

/**
 * YouTube Test Suite
 *
 * This suite tests the YouTube component, ensuring it renders correctly.
 */
describe("YouTube Icon", () => {

    beforeEach(() => {
        render(<YouTube url={"https://youtube.com"} />);
    });

    afterEach(() => {
        cleanup();
    });

    /**
     * Test to verify the rendering of the YouTube component.
     */
    test("the rendering of the YouTube icon.", () => {
        const button = screen.getByTestId("youtube-button");
        const icon = screen.getByTestId("youtube-icon");

        expect(button).toBeDefined();
        expect(icon).toBeDefined();
    });
});