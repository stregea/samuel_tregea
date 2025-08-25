import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import GitHub from "@/components/utils/Icons/GitHub/GitHub";
import LinkedIn from "@/components/utils/Icons/LinkedIn/LinkedIn";
import Email from "@/components/utils/Icons/Email/Email";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import NavLink from "@/components/Navbar/NavLink/NavLink";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

type NavbarProps = {
    window?: () => Window;
};

/**
 * Navbar component that displays navigation links and social media icons.
 * It hides on scroll down and shows on scroll up using Material-UI's Slide and useScrollTrigger.
 *
 * Reference: https://mui.com/material-ui/react-app-bar/#hide-app-bar
 *
 * @component
 * @example
 * <Navbar />
 *
 * @param window - Optional window function for server-side rendering.
 */
export default function Navbar({window}: NavbarProps) {

    // Trigger to hide/show the navbar on scroll.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined
    });

    // Function to scroll to a specific section within the page.
    const scrollIntoView = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: "auto"});
        }
    };

    const sections = [
        {id: "aboutMe", text: "About"},
        {id: "experience", text: "Experience"},
        {id: "projects", text: "Projects"},
    ];

    const mediaUrls = {
        linkedIn: "https://www.linkedin.com/in/samueltregea/",
        gitHub: "https://www.github.com/stregea",
        email: "sdtregea@gmail.com"
    }

    return (
        <Slide direction={"down"} in={!trigger} data-testid={"navbar"}>
            <AppBar sx={{backgroundColor: "var(--background)"}}>
                <Toolbar sx={{justifyContent: "space-between"}}>

                    {/* Hamburger menu for mobile view. */}
                    <MobileMenu sections={sections} scrollIntoView={scrollIntoView} navbarVisible={!trigger}/>

                    {/* Navbar links for desktop. */}
                    <Box sx={{display: {xs: "none", md: "flex"}, gap: "1rem", padding: "8px"}}>
                        {sections.map((section) => (
                            <NavLink
                                key={section.id}
                                sectionId={section.id}
                                text={section.text}
                                onClick={scrollIntoView(section.id)}
                            />
                        ))}
                    </Box>

                    {/* Social media icons. */}
                    <Box>
                        <LinkedIn url={mediaUrls.linkedIn}/>
                        <GitHub url={mediaUrls.gitHub}/>
                        <Email email={mediaUrls.email}/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Slide>
    );
}