import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import JobDescription from "@/components/JobPanel/JobDescription/JobDescription";

/**
 * JobDescription Test Suite.
 *
 * This suite tests the JobDescription component, ensuring it renders correctly.
 */
describe("JobDescription", () => {
	const job = {
		title: "Software Engineer",
		company: "My Company",
		location: "Rochester, NY",
		duration: "Jan 2025 - Aug 2025",
		description: ["This is a job description."]
	};
	const selectedTabIndex = 0;
	const currentTabIndex = 0;

	beforeEach(() => {
		render(<JobDescription selectedTabIndex={selectedTabIndex} currentTabIndex={currentTabIndex} job={job} />);
	});

	afterEach(() => {
		cleanup();
	});

	/**
	 * Test to verify the rendering of the JobDescription component.
	 */
	test("Renders the JobDescription component.", () => {
		expect(screen.getByTestId(`job-description-${currentTabIndex}`)).toBeDefined();
	});
});
