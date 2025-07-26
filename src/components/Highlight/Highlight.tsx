import React from "react";
import styles from "./Highlight.module.css";

export default function Highlight({ children }: { children: React.ReactNode }) {    
    return (
        <span className={styles.highlight}>
            {children}
        </span>
    );
}