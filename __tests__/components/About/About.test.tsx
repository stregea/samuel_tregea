import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import About from "@/components/About/About";

/**
 * About Test Suite.
 *
 * This suite tests the About component, ensuring it renders correctly.
 */
describe("About", () => {

	beforeEach(() => {
		render(<About />);
	});

	afterEach(() => {
		cleanup();
	});

	/**
	 * Test to ensure the About component renders correctly.
	 */
	test("the rendering of the About component.", () => {
		expect(screen.getByTestId("aboutMe")).toBeDefined();
	});
});