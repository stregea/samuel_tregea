import styles from "../Icons.module.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import IconButton from "@mui/material/IconButton";

/**
 * Renders a YouTube icon button that links to the specified YouTube URL.
 *
 * @component
 * @example
 * <YouTube url={"https://www.youtube.com/watch?v=video_id"} />
 *
 * @param url - The URL to the YouTube video. The button will open this link in a new tab.
 * @returns {JSX.Element} The rendered YouTube component.
 */
export default function YouTube({url} : {url: string}) {
	return (
		<IconButton
			href={url}
			target={"_blank"}
			rel={"noopener noreferrer"}
			aria-label={"YouTube"}
			data-testid={"youtube-button"}>
				<YouTubeIcon data-testid={"youtube-icon"} className={styles.icon} fontSize="large"/>
		</IconButton>
	);
};