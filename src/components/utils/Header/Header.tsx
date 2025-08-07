import React from "react";
import styles from "./Header.module.css";

/**
 * Renders a header element (<h2>) with custom styling.
 *
 * @component
 * @example
 * <Header>Title</Header>
 *
 * @param props.children - The content to display inside the header.
 * @returns The styled header element.
 */
export default function Header({ children }: { children: React.ReactNode }) {    
	return (
		<h2 className={styles.header} data-testid="header">
			{children}
		</h2>
	);
};