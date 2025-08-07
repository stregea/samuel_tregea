import styles from "./Experience.module.css";
import Header from "@/components/utils/Header/Header";
import JobPanel from "../JobPanel/JobPanel";
import Section from "../utils/Section/Section";


/**
 * Renders the Experience section of the application, showcasing professional experience and skills.
 *
 * @component
 * @example
 * <Experience />
 *
 * @returns {JSX.Element} The rendered Experience section component.
 */
export default function Experience() {
  return (
    <Section id="experience">
        <Header>{"// experience"}</Header>
        <div className={styles.experience}>
            <JobPanel />
        </div>
    </Section>
  );
};