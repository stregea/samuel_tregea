"use client";
import styles from "./page.module.css";
import Whoami from "@/components/Whoami/Whoami";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.content}>
            <Whoami />
            <About />
            <Experience />
          </div>
      </main>
    </div>
  );
}
