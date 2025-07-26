import styles from "./Experience.module.css";
import FadeIn from "@/components/utils/FadeIn/FadeIn";
import Header from "@/components/utils/Header/Header";

import JobPanel from "../JobPanel/JobPanel";


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
    <FadeIn delay={0.5}>
        <div className={styles.experience}>
            <Header>{"// experience"}</Header>
            <JobPanel />
        </div>
    </FadeIn>
  );
};