import styles from "../Icons.module.css";
import { Description } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

/**
 * Renders a Document icon button that links to the specified documentation.
 *
 * @component
 * @example
 * <Document url={"https://www.whateverwebsite.com/my_document.docx"} />
 * 
 * @param url - The URL to the documentation. The button will open this link in a new tab.
 * @returns {JSX.Element} The rendered Document component.
 */
export default function Document({url} : {url: string}) {
	return (
		<IconButton 
            href={url} 
            target={"_blank"}
            rel={"noopener noreferrer"}
            aria-label={"Documentation"}
			data-testid={"document-button"}>
			<Description data-testid={"document-icon"} className={styles.icon}/>
		</IconButton>
	);
}