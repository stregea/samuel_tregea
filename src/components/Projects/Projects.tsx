import styles from "./Projects.module.css";
import Section from "@/components/utils/Section/Section";
import Header from "@/components/utils/Header/Header";
import Grid from "@mui/material/Grid";
import FadeIn from "@/components/utils/FadeIn/FadeIn";
import ProjectCard from "./ProjectCard/ProjectCard";
import projectData from "@/data/projects.json";

export default function Projects () {
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
                >
                    {projectData.projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 0.35}>
                            <ProjectCard
                                key={index}
                                project={project}
                            />
                        </FadeIn>
                    ))}
                </Grid>
            </div>
        </Section>
    ); 
};