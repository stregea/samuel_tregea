import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import GitHub from "@/components/utils/Icons/GitHub/GitHub";
import LinkedIn from "@/components/utils/Icons/LinkedIn/LinkedIn";
import Email from "@/components/utils/Icons/Email/Email";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import NavLink from "@/components/Navbar/NavLink/NavLink";

type NavbarProps = {
    window?: () => Window;
};

/**
 * Navbar component that provides navigation links and social media icons.
 * It hides on scroll down and reappears on scroll up.
 *
 * @component
 * @example
 * <Navbar />
 *
 * @param props - `window` (optional): a function that returns the global `Window` object, used for scroll trigger calculations.
 * @returns {JSX.Element} The rendered Navbar component.
 */
export default function Navbar({ window }: NavbarProps) {

    // Use the useScrollTrigger hook to determine when to show or hide the Navbar based on scroll position.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    /**
     * Scrolls the page to the specified element with a smooth animation.
     */
    const scrollIntoView = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "auto" });
        }
    };
    // todo: make hamburger menu on mobile devices
    return (
        <Slide appear={false} direction="right" in={!trigger}>
            <AppBar sx={{backgroundColor: 'var(--background)'}}>
                <Toolbar sx={{justifyContent: "space-between"}}>
                    <div style={{display: "flex", gap: "1rem"}}>
                        <NavLink
                            sectionId="aboutMe"
                            text={"About"}
                            onClick={scrollIntoView("aboutMe")}/>
                        <NavLink
                            sectionId="experience"
                            text={"Experience"}
                            onClick={scrollIntoView("experience")}/>
                        <NavLink
                            sectionId="projects"
                            text={"Projects"}
                            onClick={scrollIntoView("projects")}/>
                    </div>
                    <div>
                        <LinkedIn url={"https://www.linkedin.com/in/samueltregea/"}/>
                        <GitHub url={"https://www.github.com/stregea"}/>
                        <Email email={"sdtregea@gmail.com"}/>
                    </div>
                </Toolbar>
            </AppBar>
        </Slide>
    );
};