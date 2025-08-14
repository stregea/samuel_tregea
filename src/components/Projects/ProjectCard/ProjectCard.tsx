
import styles from "./ProjectCard.module.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import GitHub from "@/components/utils/Icons/GitHub/GitHub";
import YouTube from "@/components/utils/Icons/YouTube/YouTube";
import Document from "@/components/utils/Icons/Document/Document";
import CardActions from "@mui/material/CardActions";
import Highlight from "@/components/utils/Highlight/Highlight";

/**
 * Renders a project card within the <Projects /> component. This will display the project's 
 * title, description, and relevant links.
 *
 * @component
 * @example
 * <ProjectCard project={project} />
 *
 * @returns {JSX.Element} The rendered ProjectCard component.
 */
export default function ProjectCard({
	project
} : { 
	project: {
		title: string;
		description: string;
		sourceCode?: string;
		videoDemo?: string;
		documentation?: string
		languages: string[];
	};
}) {
	/**
	 * Format the list of programming languages into a comma-separated string.
	 * @returns A list of languages used in the project.
	 */
	const getLanguages = () => {
		return project.languages.map((lang, idx) => (
			<span key={idx}>{lang + (idx < project.languages.length - 1 ? ", " : "")}</span>
		));
	};
	
	return (
		<div className={styles.card}>
			<Card sx={{backgroundColor: "var(--card)", width: "275px"}}>
				<CardHeader 
					title={<Highlight>{project.title}</Highlight>}
					subheader={<div className={styles.subheader}>{getLanguages()}</div>}
				/>
				<CardContent sx={{color: "var(--foreground)", height: "100px"}}>
					{project.description}
				</CardContent>
				<CardActions disableSpacing sx={{justifyContent: "flex-end"}}>
					{project.sourceCode && <GitHub url={project.sourceCode} />}
					{project.videoDemo && <YouTube url={project.videoDemo} />}
					{project.documentation && <Document url={project.documentation} />}
				</CardActions>	
			</Card>
		</div>
	);
};