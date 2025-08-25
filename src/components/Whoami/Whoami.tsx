import styles from "./Whoami.module.css";
import {Typewriter} from "react-simple-typewriter";
import Section from "@/components/utils/Section/Section";

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
    const words = ["Hi, I'm Sam"];
    const description = "I'm a software engineer based in Rochester, NY that is passionate about building clean, efficient, and scalable applications that deliver meaningful impact.";
    const id = "whoami";
    return (
        <section className={styles.whoami} id={id} data-testid={id}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    {/* {"hi, i'm "} */}
                    <span className={styles.typeWriter}>
						<Typewriter
                            words={words}
                            loop={1}
                            cursor={true}
                            cursorStyle="|"
                            typeSpeed={100}
                        />
					</span>
                </div>
                <Section id="whoami-description" delay={1.3}>
                    <div className={styles.description}>
                        {description}
                    </div>
                </Section>
            </div>
        </section>
    );
};