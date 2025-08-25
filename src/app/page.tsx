"use client";
import styles from "./page.module.css";
import Whoami from "@/components/Whoami/Whoami";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Navbar from "@/components/Navbar/Navbar";
import Copyright from "@/components/Copyright/Copyright";

/**
 * Home component serves as the main entry point for the application.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.content}>
                    <Whoami/>
                    <About/>
                    <Experience/>
                    <Projects/>
                </div>
                {/* todo: copyright */}
                <Copyright />
            </main>
        </div>
    );
}
