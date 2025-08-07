"use client";
import styles from "./page.module.css";
import Whoami from "@/components/Whoami/Whoami";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";

/**
 * Home component serves as the main entry point for the application.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
			{/* todo: navbar */}
			<div className={styles.content}>
				<Whoami />
				<About />
				<Experience />
				{/* todo: projects */}
				{/* todo: copyright */}
				</div>
				{/* todo: footer */}
			</main>
		</div>
	);
}
