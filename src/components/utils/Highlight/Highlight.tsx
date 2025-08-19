import React from "react";
import styles from "./Highlight.module.css";

/**
 * Renders highlighted text by wrapping children in a <span> with bold styling and a custom color.
 *
 * @component
 * @example
 * <Highlight>Important text</Highlight>
 *
 * @param {React.ReactNode} props.children - The text or elements to highlight.
 * @returns {JSX.Element} The rendered Highlight component.
 */
export default function Highlight({children}: { children: React.ReactNode }) {
    return (
        <span className={styles.highlight} data-testid="highlight">
			{children}
		</span>
    );
};