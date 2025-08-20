import styles from "../Icons.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

/**
 * Renders a LinkedIn icon button that links to the specified LinkedIn URL.
 *
 * @component
 * @example
 * <LinkedIn url={"https://www.linkedin.com/in/username"} />
 *
 * @param url - The URL to the LinkedIn profile. The button will open this link in a new tab.
 * @returns {JSX.Element} The rendered LinkedIn component.
 */
export default function LinkedIn({url}: { url: string }) {
    return (
        <IconButton
            href={url}
            target={"_blank"}
            rel={"noopener noreferrer"}
            aria-label={"LinkedIn"}
            data-testid={"linkedin-button"}>
            <LinkedInIcon data-testid={"linkedin-icon"} className={styles.icon}/>
        </IconButton>
    );
};