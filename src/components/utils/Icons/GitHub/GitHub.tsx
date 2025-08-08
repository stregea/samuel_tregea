import styles from "../Icons.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

/**
 * Renders a GitHub icon button that links to the specified GitHub URL.
 *
 * @component
 * @example
 * <GitHub url={"https://www.github.com/username"} />
 * 
 * @param url - The URL to the GitHub profile or repository. The button will open this link in a new tab.
 * @returns {JSX.Element} The rendered GitHub component.
 */
export default function GitHub({url} : {url: string}) {
	return (
		<IconButton 
			href={url} 
			target={"_blank"}
			rel={"noopener noreferrer"}
			aria-label={"GitHub"}
			data-testid={"github-button"}>
				<GitHubIcon data-testid={"github-icon"} className={styles.icon}/>
		</IconButton>
	);
};