import {describe, test, beforeEach, afterEach, expect, vi} from "vitest";
import {render, screen, fireEvent, cleanup} from "@testing-library/react";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

/**
 * Test suite for the MobileMenu component
 *
 * These tests validate rendering, menu interactions, and behavior when the navbar visibility changes.
 */
describe("MobileMenu", () => {
    const sections = [
        {id: "aboutMe", text: "About"}
    ];
    let scrollIntoViewMock: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        scrollIntoViewMock = vi.fn(() => vi.fn());
    });

    afterEach(() => {
        cleanup();
        vi.restoreAllMocks();
    });

    /**
     * Helper function to validate the presence of key mobile menu elements.
     */
    const validateMobileMenuRendering = () => {
        expect(screen.getByTestId("mobileMenu")).toBeDefined();
        expect(screen.getByTestId("menu-button")).toBeDefined();
        expect(screen.getByTestId("menu-icon")).toBeDefined();
        expect(screen.getByTestId("menu-item-aboutMe")).toBeDefined();
    };

    /**
     * Tests that the MobileMenu component renders correctly with provided sections.
     */
    test("renders the mobile menu with provided sections.", () => {
        render(
            <MobileMenu
                sections={sections}
                scrollIntoView={scrollIntoViewMock}
                navbarVisible={true}
            />
        );

        validateMobileMenuRendering();
    });

    /**
     * Tests that the MobileMenu component renders correctly when the navbar is not visible.
     */
    test("validates the mobile menu is rendered on the DOM when the nav is not visible.", async () => {
        render(
            <MobileMenu
                sections={sections}
                scrollIntoView={scrollIntoViewMock}
                navbarVisible={false}
            />
        );

        validateMobileMenuRendering();
    });

    /**
     * Tests that clicking the menu button opens the menu and clicking a menu item calls the scrollIntoView function.
     */
    test("opens the menu and clicks the menu item.", async () => {
        render(
            <MobileMenu
                sections={sections}
                scrollIntoView={scrollIntoViewMock}
                navbarVisible={true}
            />
        );

        validateMobileMenuRendering();

        const menuButton = await screen.getByTestId("menu-button");
        fireEvent.click(menuButton);

        const menuItem = await screen.getByTestId("menu-item-aboutMe");
        expect(menuItem).toBeDefined();
        fireEvent.click(menuItem);

        expect(scrollIntoViewMock).toHaveBeenCalledWith("aboutMe");
    });
});