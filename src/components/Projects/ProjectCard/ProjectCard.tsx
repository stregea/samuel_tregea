
import styles from "./ProjectCard.module.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import Highlight from "@/components/utils/Highlight/Highlight";
import GitHub from "@/components/utils/Icons/GitHub/GitHub";
import YouTube from "@/components/utils/Icons/YouTube/YouTube";
import Document from "@/components/utils/Icons/Document/Document";

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
		category: string
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
	
	/**
	 * Creates a chip component for the project category.
	 * @param category - The category of the project.
	 * @returns A Chip component displaying the project category.
	 */
	const createChip = (category: string) => {
		const style = {
			borderColor: category === "Personal" ? "var(--react-light-blue)" : "var(--slate)",
			color: category === "Personal" ? "var(--react-light-blue)" : "var(--slate)",
		};

		return <Chip 
			label={category} 
			variant={"outlined"} 
			sx={style} 
			size={"small"} 
			data-testid={"chip"} />;
	};

	return (
		<div className={styles.card}>
			<Card sx={{backgroundColor: "var(--card)", width: "275px"}} data-testid={"project-card"}>
				<CardHeader 
					title={<Highlight>{project.title}</Highlight>}
					subheader={<div className={styles.subheader}>{getLanguages()}</div>}
					data-testid={"card-header"}
				/>
				<CardContent sx={{color: "var(--foreground)", height: "100px", fontSize: "15px"}} data-testid={"card-content"}>
					{ project.description }
				</CardContent>
				<CardActions disableSpacing sx={{justifyContent: "space-between"}} data-testid={"card-actions"}>
					<div className={styles.chipContainer}>
						{ project.category && createChip(project.category)}
					</div>
					<div>
						{ project.sourceCode && <GitHub url={project.sourceCode} /> }
						{ project.videoDemo && <YouTube url={project.videoDemo} /> }
						{ project.documentation && <Document url={project.documentation} /> }
					</div>
				</CardActions>	
			</Card>
		</div>
	);
};