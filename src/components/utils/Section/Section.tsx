import React from "react";
import styles from "./Section.module.css";
import FadeIn from "@/components/utils/FadeIn/FadeIn";


/**
 * Renders a section with a fade-in effect, allowing for smooth transitions.
 *
 * @component
 * @example
 * <Section id="sectionId">Content goes here</Section>
 *
 * @param {React.ReactNode} children - The content to display inside the section.
 * @param {string} id - The ID of the section for linking or styling purposes.
 * @returns {JSX.Element} The rendered Section component.
 */
export default function Section({ children, id }: { children: React.ReactNode, id: string }) {    
    return (
        <section className={styles.section} id={id}>
            <FadeIn>
                {children}
            </FadeIn>
        </section>
    );
};