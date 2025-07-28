import styles from "./Whoami.module.css";
import { Typewriter } from "react-simple-typewriter";
import FadeIn from "@/components/utils/FadeIn/FadeIn";
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
    return (    
        <section className={styles.whoami} id="whoami">
            <div className={styles.content}>
                <div className={styles.heading}>
                    {"hi, im "}
                    <span className={styles.typeWriter}>
                        <Typewriter
                            words={["an engineer", "a creator", "sam"]}
                            loop={1}
                            cursor={true}
                            cursorStyle="|"
                            typeSpeed={100}
                        />
                    </span>
                </div>
                <FadeIn delay={7}>
                    <div className={styles.description}>
                        {"I also like to build things with code."}
                    </div>
                </FadeIn>
            </div>
        </section>
  );
};