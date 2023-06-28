import React from "react";
import styles from "./StartProject.module.css";

export default function StartProject() {
  return (
    <div className={styles.mainContainer}>
      <h1>
        Casestudies & voorgaande <br /> projecten
      </h1>
      <p>
        Er zijn verschillende soorten applicaties gebouwd voor diverse
        bedrijven. Als je werk van mij wilt bekijken, kun je blijven scrollen of{" "}
        <a href="#contact">contact met mij opnemen!</a>
      </p>
    </div>
  );
}
