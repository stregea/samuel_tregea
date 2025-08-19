import {describe, test, expect, beforeEach, afterEach, vi} from "vitest";
import {render, screen, cleanup} from "@testing-library/react";
import JobPanel from "@/components/JobPanel/JobPanel";

// Mock useMediaQuery from MUI
vi.mock("@mui/material/useMediaQuery", () => ({
    __esModule: true,
    default: vi.fn(() => false), // Setting to false allows us to default to a desktop view.
}));

import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * JobPanel Test Suite.
 *
 * This suite tests the JobPanel component, ensuring it renders correctly
 * and displays expected job descriptions.
 */
describe("JobPanel", () => {

    beforeEach(() => {
        render(<JobPanel/>);
    });

    afterEach(() => {
        cleanup();
    });

    /**
     * Test to verify the rendering of the JobPanel component.
     */
    test("the rendering of the JobPanel component.", () => {
        // Verify the tabs are rendered.
        expect(screen.getByTestId("jobTabs")).toBeDefined();

        // Verify a job description is rendered.
        expect(screen.getByTestId("job-description-0")).toBeDefined();
    });

    /**
     * Test to verify the tabs render in a horizontal layout on mobile devices.
     */
    test("the mobile rendering of the JobPanel component.", () => {
        // Mock the mobile view
        cleanup();
        (useMediaQuery as any).mockReturnValue(true);
        render(<JobPanel/>);

        // Verify the tabs are rendered in a horizontal layout.
        const tabs = screen.getByTestId("jobTabs");
        expect(tabs).toBeDefined();
        expect(tabs.className).not.toContain("MuiTabs-vertical");
    });
});