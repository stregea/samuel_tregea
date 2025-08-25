import {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@/components/utils/Icons/Menu/Menu";
import Menu from "@mui/material/Menu";

type MenuProps = {
    sections: { id: string; text: string }[];
    scrollIntoView: (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => void;
    navbarVisible: boolean;
};

/**
 * MobileMenu component that renders a hamburger menu for mobile viewports.
 * It uses Material-UI's Menu and MenuItem components to display navigation options.
 * Reference: https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu
 *
 * @component
 * @example
 * <MobileMenu sections={[{id: "aboutMe", text: "About"}, {id: "experience", text: "Experience"}]} scrollIntoView={scrollIntoView} navbarVisible={true} />
 *
 * @param sections - Array of section objects with id and text properties.
 * @param scrollIntoView - Function to scroll to a specific section of the page.
 * @param navbarVisible - Boolean indicating if the navbar is currently visible.
 */
export default function MobileMenu({sections, scrollIntoView, navbarVisible}: MenuProps) {

    // State to manage the anchor element for the menu.
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

    // Handler to open the menu.
    const openMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget as HTMLElement);
    };

    // Handler to close the menu.
    const closeMenu = () => {
        setAnchorElement(null);
    };

    // Handler for menu item click that scrolls to the designated section and closes the menu.
    const menuItemClick = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
        scrollIntoView(id)(event);
        closeMenu();
    };

    // Automatically close menu when navbar hides.
    useEffect(() => {
        if (!navbarVisible) {
            closeMenu();
        }
    }, [navbarVisible]);

    return (
        <Box sx={{flexGrow: 0, display: {xs: "flex", md: "none" }}} data-testid={"mobileMenu"}>
            <MenuIcon controls={"menu-appbar"} onClick={openMenu}/>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElement}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                open={Boolean(anchorElement)}
                onClose={closeMenu}
                sx={{display: {xs: "block", md: "none"}}}
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: "var(--card)",
                            color: "var(--react-light-blue)",
                        },
                    },
                }}
                // This prevents the navbar from jumping when the menu is opened.
                disableScrollLock={true}
            >
                {/* Dynamically generate menu items from the pages prop. */}
                {sections.map((section) => (
                    <MenuItem
                        key={section.id}
                        onClick={menuItemClick(section.id)}
                        component={"a"}
                        href={`#${section.id}`}
                        data-testid={`menu-item-${section.id}`}
                    >
                        {section.text}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}