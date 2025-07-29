import styles from "./Whoami.module.css";
import { Typewriter } from "react-simple-typewriter";
import FadeIn from "@/components/utils/FadeIn/FadeIn";
import { Alert } from "@mui/material";

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
    const description = "im a software engineer based in rochester, ny where i develop innovative solutions that address real-world challenges.";
    
    return (
        <section className={styles.whoami} id="whoami">
            <div className={styles.content}>
                <div className={styles.alert}>
                    <Alert severity="warning">{notice}</Alert>
                </div>
                <div className={styles.heading}>
                    {"hi, im "}
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
                <FadeIn delay={1}>
                    <div className={styles.description}>
                        {description}
                    </div>
                </FadeIn>
            </div>
        </section>
  );
};