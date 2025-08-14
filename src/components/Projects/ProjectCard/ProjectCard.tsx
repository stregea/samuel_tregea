
import styles from "./ProjectCard.module.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import GitHub from "@/components/utils/Icons/GitHub/GitHub";
import YouTube from "@/components/utils/Icons/YouTube/YouTube";
import CardActions from "@mui/material/CardActions";
import Highlight from "@/components/utils/Highlight/Highlight";

export default function ProjectCard({
	project
} : { 
	project: {
			title: string;
			description: string;
			sourceCode: string;
			videoDemo: string;
			languages: string[];
	};
}) {
	return (
		<div className={styles.card}>
		<Card sx={{backgroundColor: "var(--card)"}}>
			<Highlight>
				<CardHeader title={project.title} subheader={project.description}  />
			</Highlight>
			<CardContent sx={{color: "var(--foreground)"}}>
				{project.languages.map((lang, idx) => (
					<span key={idx}>{lang + " "}</span>
				))}
			</CardContent>
			<CardActions disableSpacing>
				{project.sourceCode && <GitHub url={project.sourceCode} />}
				{project.videoDemo && <YouTube url={project.videoDemo} />}
			</CardActions>	
		</Card>
		</div>
	);
};