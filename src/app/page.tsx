"use client";
import styles from "./page.module.css";
import Intro from "@/components/Intro/Intro";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Intro />
      </main>
    </div>
  );
}
