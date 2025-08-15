import { useState } from "react";
import styles from "./Projects.module.css";
import Section from "@/components/utils/Section/Section";
import Header from "@/components/utils/Header/Header";
import Grid from "@mui/material/Grid";
import FadeIn from "@/components/utils/FadeIn/FadeIn";
import ProjectCard from "@/components/Projects/ProjectCard/ProjectCard";
import projectData from "@/data/projects.json";
import Pagination from "@mui/material/Pagination";

/**
 * Renders the "Projects" section of the website, displaying my personal and college projects
 * in a grid layout.
 * 
 * @component
 * @example
 * <Projects />
 *
 * @returns {JSX.Element} The rendered Projects component.
 */
export default function Projects () {
	// Set the max number of projects per page.
	const projectsPerPage = 6;

	// Calculate the total number of pages.
    const totalPages = Math.ceil(projectData.projects.length / projectsPerPage);

	// Page state
	const [page, setPage] = useState(1);

	// Handler for page change.
	const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
		setPage(page);
	};

	// Slice the projects for the current page.
	const projects = projectData.projects.slice((page - 1) * projectsPerPage, page * projectsPerPage);

	return (
		<Section id="projects">
			<Header>{"// projects"}</Header>
			<div className={styles.projects}>
				<Grid
					container
					rowSpacing={2}
					columnSpacing={2}
					justifyContent={"center"}
					alignItems={"center"}
					data-testid={"project-grid"}
				>
					{projects.map((project, index) => (
						<FadeIn key={index} delay={index * 0.2}>
							<ProjectCard
								key={index}
								project={project}
							/>
						</FadeIn>
					))}
				</Grid>
			</div>
			<div className={styles.pagination}>
				<Pagination
					count={totalPages}
					page={page}
					onChange={handleChange}
					data-testid={"project-pagination"}
				/>
			</div>
		</Section>
	);
};