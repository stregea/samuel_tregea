import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import JobPanel from "@/components/JobPanel/JobPanel";

/**
 * JobPanel Test Suite.
 *
 * This suite tests the JobPanel component, ensuring it renders correctly
 * and displays expected job descriptions.
 */
describe("JobPanel", () => {

	beforeEach(() => {
		render(<JobPanel />);
	});

	afterEach(() => {
		cleanup();
	});

	/**
	 * Test to verify the rendering of the JobPanel component.
	 */
	test("the rendering of the JobPanel component", () => {
		// Verify the tabs are rendered.
		expect(screen.getByTestId("jobTabs")).toBeDefined();

		// Verify a job description is rendered.
		expect(screen.getByTestId("job-description-0")).toBeDefined();
	});
});