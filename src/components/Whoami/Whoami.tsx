import styles from "./Whoami.module.css";
import { Typewriter } from "react-simple-typewriter";

export default function Whoami() {
  return (
    <div className={styles.whoami} id="whoami">
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
        <div className={styles.description}>
            {"I build things with code."}
        </div>
    </div>
  );
}