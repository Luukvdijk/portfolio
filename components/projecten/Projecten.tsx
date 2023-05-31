import React from "react";
import styles from "./Projecten.module.css";
import StartProject from "./startProject/StartProject";
import Project from "./project/Project";

export default function Projecten() {
  return (
    <div className={styles.mainContainer}>
      {/* <StartProject /> */}
      <Project />
    </div>
  );
}
