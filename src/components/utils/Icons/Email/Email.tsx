import styles from "../Icons.module.css";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";

/**
 * Renders an Email icon button that links to the specified email address.
 *
 * @component
 * @example
 * <Email email={"your_email@gmail.com"} />
 * @param email - The email address to link to. The button will open the user's default email client
 *                when clicked.
 * @returns {JSX.Element} The rendered Email component.
 */
export default function Email({email}: { email: string }) {
    return (
        <IconButton
            href={`mailto:${email}`}
            target={"_blank"}
            rel={"noopener noreferrer"}
            aria-label={"Email"}
            data-testid={"email-button"}>
            <EmailIcon data-testid={"email-icon"} className={styles.icon}/>
        </IconButton>
    );
};