import Typography from "@mui/material/Typography";

type NavLinkProps = {
    sectionId: string;
    text: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

/**
 * NavLink component that renders a link to a specific section of the page.
 * It uses Material-UI's Typography component for styling.
 *
 * @component
 * @example
 * <NavLink sectionId="about" text="About Me" onClick={handleClick} />
 *
 * @param sectionId - The ID of the section to link to.
 * @param text - The text to display for the link.
 * @param onClick - Optional click handler for the link, useful for custom scroll behavior or analytics.
 */
export default function NavLink({sectionId, text, onClick}: NavLinkProps) {
    return (
        <Typography
            component="a"
            onClick={onClick}
            href={`#${sectionId}`}
            sx={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "var(--react-light-blue)",
                "&:visited": {color: "var(--react-light-blue)"},
            }}
        >
            {text}
        </Typography>
    );
}