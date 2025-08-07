import React from "react";
import styles from "./Section.module.css";
import FadeIn from "@/components/utils/FadeIn/FadeIn";


/**
 * Renders a section with a fade-in effect, allowing for smooth transitions.
 *
 * @component
 * @example
 * <Section id="sectionId" delay={1}>Content goes here</Section>
 * or
 * <Section id="sectionId">Content goes here</Section>
 *
 * @param {React.ReactNode} children - The content to display inside the section.
 * @param {string} id - The ID of the section for linking or styling purposes.
 * @param {number} [delay=0] - The optional delay before the fade-in effect starts, in seconds.
 * @returns {JSX.Element} The rendered Section component.
 */
export default function Section({ children, id, delay = 0 }: { children: React.ReactNode, id: string, delay?: number }) {
    return (
        <section className={styles.section} id={id} data-testid={id}>
            <div className={styles.content}>
                <FadeIn delay={delay}>
                    {children}
                </FadeIn>
            </div>
        </section>
    );
};