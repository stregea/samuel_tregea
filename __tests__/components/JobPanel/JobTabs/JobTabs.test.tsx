import { describe, expect, vi, test, beforeEach, afterEach } from "vitest";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import careerData from "@/data/career.json";
import JobTabs from "@/components/JobPanel/JobTabs/JobTabs";

// Mock useMediaQuery from MUI
vi.mock("@mui/material/useMediaQuery", () => ({
  __esModule: true,
  default: vi.fn(() => false), // Setting to false allows us to default to a desktop view.
}));

import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * JobTabs Test Suite
 *
 * This suite tests the JobTabs component, ensuring it renders correctly in both vertical
 * and horizontal layouts, as well as properly handling tab switching functionality.
 */
describe("JobTabs Suite", () => {
  // Mock that mimicks the React State setter function.
  const setSelectedTabMock = vi.fn();

  beforeEach(() => {
    // Mount the JobTabs component to the DOM.
    render(
      <JobTabs
        career={careerData.career}
        selectedTab={0}
        setSelectedTab={setSelectedTabMock}
      />
    );
  });

  afterEach(() => {
     // Unmount the JobTabs component from the DOM.
    cleanup();
  });

  test("the vertical rendering of the tabs.", () => {
    // Validate the tabs are rendered in a vertical layout.
    const tabs = screen.getByTestId("jobTabs");

    expect(tabs).toBeDefined();
    expect(tabs.className).toContain("MuiTabs-vertical");
  });

  test("the horizontal rendering of the tabs.", () => {
    // Mock the mobile view
    cleanup();
    (useMediaQuery as any).mockReturnValue(true);
    render(
      <JobTabs career={careerData.career} selectedTab={0} setSelectedTab={setSelectedTabMock} />
    );

    // Validate the tabs are rendered in a horizontal layout.
    const tabs = screen.getByTestId("jobTabs");

    expect(tabs).toBeDefined();
    expect(tabs.className).not.toContain("MuiTabs-vertical");
  });

  test("the functionality of switching tabs.", async () => {
    const nextTab = await screen.findByTestId("tab-1");

    fireEvent.click(nextTab);
    expect(setSelectedTabMock).toHaveBeenCalled();
  });
});