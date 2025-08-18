import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import {cleanup, render, screen, fireEvent } from "@testing-library/react";
import Projects from "@/components/Projects/Projects";

// Mock useMediaQuery from MUI
vi.mock("@mui/material/useMediaQuery", () => ({
	__esModule: true,
	default: vi.fn(() => false), // Setting to false allows us to default to a desktop view.
}));

import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * Test suite for the Projects component.
 *
 * This suite tests the functionality of the Projects component, specifically
 * ensuring that it correctly observes elements and sets their visibility.
 */
describe("Projects", () => {

	afterEach(() => {
		cleanup();
	});

	/**
	 * Helper function to validate the presence of project elements.
	 */
	const validateProjects = () => {
		const projectsSection = screen.getByTestId("projects");
		const projectGrid = screen.getByTestId("project-grid");
		const projectPagination = screen.getByTestId("project-pagination");

		expect(projectsSection).toBeDefined();
		expect(projectGrid).toBeDefined();
		expect(projectPagination).toBeDefined();
	};

	/**
	 * Test the rendering of the Projects component.
	 */
	test("renders the Projects component", () => {
		render(<Projects />);

		validateProjects();
	});

	/**
	 * Test the rendering of the Projects component in mobile view.
	 */
	test("renders the Projects component in mobile view", () => {
		// Mock the mobile view
		(useMediaQuery as any).mockReturnValue(true);

		render(<Projects />);

		validateProjects();
	});

	/**
	 * Test to ensure that the pagination controls are rendered correctly
	 */
	test("should render projects correctly", async () => {
		render(<Projects />);

		validateProjects();

		// Find page 2 within the pagination controls.
		const page2 = await screen.getByLabelText(/Go to page 2/);

		expect(page2).toBeDefined();

		// Fire off the event.
		fireEvent.click(page2);

		// Validate that page one no longer has the 'selected' class.
		const page1 = await screen.getByLabelText(/Go to page 1/);

		expect(page1.classList).not.toContain("Mui-selected");
	});

});