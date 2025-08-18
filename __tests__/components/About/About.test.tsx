import { describe, test, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import About from "@/components/About/About";

/**
 * About Test Suite.
 *
 * This suite tests the About component, ensuring it renders correctly.
 */
describe("About", () => {

	beforeEach(() => {
		// tell vitest we use mocked time
		vi.useFakeTimers();
	});

	afterEach(() => {
		cleanup();
		vi.useRealTimers();
	});

	/**
	 * Test to ensure the About component renders correctly after the birthday.
	 */
	test("the rendering of the About component after the birthday.", () => {
		const currentYear = new Date().getFullYear();
		const currentAge = currentYear - 1997;

		const fakeBirthday = new Date(`${currentYear}-07-29`);

		vi.setSystemTime(fakeBirthday);

		render(<About />);

		expect(screen.getByTestId("aboutMe")).toBeDefined();
		expect(screen.getByText(new RegExp(`${currentAge} year old software engineer`, "i"))).toBeDefined();
	});


	/**
	 * Test to ensure the About component renders correctly before the birthday.
	 */
	test("the rendering of the About component before the birthday.", () => {
		const currentYear = new Date().getFullYear();
		const ageBeforeBirthday = (currentYear - 1997) - 1;

		const fakeDayBeforeBirthday = new Date(`${currentYear}-07-27`);

		vi.setSystemTime(fakeDayBeforeBirthday);

		render(<About />);

        expect(screen.getByTestId("aboutMe")).toBeDefined();
        expect(screen.getByText(new RegExp(`${ageBeforeBirthday} year old software engineer`, "i"))).toBeDefined();
	});
});