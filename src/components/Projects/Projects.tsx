import {useState} from "react";
import styles from "./Projects.module.css";
import Section from "@/components/utils/Section/Section";
import Header from "@/components/utils/Header/Header";
import Grid from "@mui/material/Grid";
import FadeIn from "@/components/utils/FadeIn/FadeIn";
import ProjectCard from "@/components/Projects/ProjectCard/ProjectCard";
import projectData from "@/data/projects.json";
import Pagination from "@mui/material/Pagination";
import useMediaQuery from "@mui/material/useMediaQuery";

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
export default function Projects() {
    // Check if the screen is mobile-sized.
    const isMobile = useMediaQuery("(max-width: 600px)");

    // Set the max number of projects per page.
    const projectsPerPage = isMobile ? 3 : 6;

    // Have the delay be slower on mobile.
    const delay = isMobile ? 0.2 : 0.15

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
                        <FadeIn key={`project-${index}-${project.description}`} delay={index * delay}>
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