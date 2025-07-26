import React from "react";
import styles from "./Highlight.module.css";

/**
 * Highlights text by wrapping it in a styled span.
 * 
 * @param {React.ReactNode} children - The content to highlight.
 * 
 * Usage:
 * <Highlight>Important Text</Highlight>
 */
export default function Highlight({ children }: { children: React.ReactNode }) {    
    return (
        <span className={styles.highlight}>
            {children}
        </span>
    );
}