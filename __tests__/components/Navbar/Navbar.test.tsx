import {describe, test, expect, afterEach, vi} from "vitest";
import {render, screen, cleanup, fireEvent} from "@testing-library/react";
import Navbar from "@/components/Navbar/Navbar";

describe("Navbar", () => {

    afterEach(() => {
        cleanup();
        vi.restoreAllMocks();
    });

    /**
     * Helper function to validate the presence of key navbar elements.
     */
    const validateNavbarElements = () => {
        expect(screen.getByTestId("navbar")).toBeDefined();

        // Navigation links
        expect(screen.getByTestId("mobileMenu")).toBeDefined();
        expect(screen.getByTestId("navlink-aboutMe")).toBeDefined();
        expect(screen.getByTestId("navlink-experience")).toBeDefined();
        expect(screen.getByTestId("navlink-projects")).toBeDefined();

        // Social media icons
        expect(screen.getByTestId("linkedin-icon")).toBeDefined();
        expect(screen.getByTestId("github-icon")).toBeDefined();
        expect(screen.getByTestId("email-icon")).toBeDefined();
    };

    /**
     * Tests that the Navbar component renders correctly and contains all expected elements.
     */
    test("renders component.", () => {
        render(<Navbar/>);

        validateNavbarElements();
    });

    /**
     * Tests that the Navbar component renders correctly with a mocked window function,
     * simulating a server-side rendering scenario where useScrollTrigger would be undefined.
     */
    test("renders the component with a mocked window to have an undefined useScrollTrigger.", () => {
        const mockWindow = () => window;

        render(<Navbar window={mockWindow}/>);

        validateNavbarElements();
    });

    /**
     * Tests that clicking a navigation link calls the scrollIntoView function.
     */
    test("the scrollIntoView function is called when a navigation link is clicked.", async () => {
        Element.prototype.scrollIntoView = vi.fn();
        render(<Navbar/>);

        validateNavbarElements();

        const section = document.createElement("div");
        section.id = "aboutMe";
        document.body.appendChild(section);

        const navLink = await screen.getByTestId("navlink-aboutMe");

        fireEvent.click(navLink);

        expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
    });
});