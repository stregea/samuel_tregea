import styles from "./Copyright.module.css";
import Section from "@/components/utils/Section/Section";

/**
 * Component that displays general copyright information.
 *
 * @component
 * @example
 * <Copyright />
 */
export default function Copyright() {
    const currentYear = new Date().getFullYear();
    const text = `© ${currentYear} Samuel Tregea. All rights reserved.`;

    return (
        <Section id={"copyright"} data-testid={"copyright"}>
            <p className={styles.copyright} data-testid={"copyright-text"}>{text}</p>
        </Section>
    );
};