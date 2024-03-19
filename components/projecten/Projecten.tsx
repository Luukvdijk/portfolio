"use client";

import styles from "./Projecten.module.css";
import StartProject from "./startProject/StartProject";


export default function Projecten() {
  return (
    <div id="projects" className={styles.mainContainer}>
      <StartProject />
    </div>
  );
}
