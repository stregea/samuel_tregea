import styles from "./Experience.module.css";
import FadeIn from "@/components/utils/FadeIn/FadeIn";

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
  const experience = (
    <div className={styles.experience}>
      <h2>Experience</h2>
      <ul>
        <li>
          <strong>Software Engineer at Tech Company</strong> (2020 - Present)
          <p>Developed scalable web applications using React and Node.js.</p>
        </li>
        <li>
          <strong>Junior Developer at Startup</strong> (2018 - 2020)
          <p>Contributed to the development of a mobile app using React Native.</p>
        </li>
      </ul>
    </div>
  );

  return (
    <FadeIn delay={0.5}>
      {experience}
    </FadeIn>
  );
}