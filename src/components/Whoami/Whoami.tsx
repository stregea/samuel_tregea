import styles from "./Whoami.module.css";
import { Typewriter } from "react-simple-typewriter";
import { Alert } from "@mui/material";
import Section from "../utils/Section/Section";

/**
 * Renders the "Whoami" section of the website, introducing the user with a typewriter effect
 * cycling through different roles or titles. Includes a heading and a description that fades in.
 *
 * @component
 * @example
 * <Whoami />
 *
 * @returns {JSX.Element} The rendered Whoami section.
 */
export default function Whoami() {
    const notice = "This website is currently under active construction.";
    const words = ["sam"];
    const description = "i'm a software engineer based in rochester, ny that is passionate about building clean, efficient, and scalable applications that deliver meaningful impact.";
    const id = "whoami";
    return (
        <section className={styles.whoami} id={id} data-testid={id}>
            <div className={styles.content}>
                <div className={styles.alert}>
                    <Alert severity="warning">{notice}</Alert>
                </div>
                <div className={styles.heading}>
                    {"hi, i'm "}
                    <span className={styles.typeWriter}>
                        <Typewriter
                            words={words}
                            loop={1}
                            cursor={true}
                            cursorStyle="|"
                            typeSpeed={175}
                        />
                    </span>
                </div>
                <Section id="whoami-description" delay={1}>
                    <div className={styles.description}>
                        {description}
                    </div>
                </Section>
            </div>
        </section>
  );
};