import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div id="about" className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.left}>
          <h1>
            Ik ben Luuk, een <br /> web developer
          </h1>
          <h2>Front-end Developer</h2>
        </div>
        <div className={styles.right}>
          <p>
            Ik ben een ICT student met de focus op web development. <br />
            <br /> Ik ben een probleem oplosser en heb een oog voor detail. Ik
            ben geïnteresseerd in de frontend wereld en ik werk graag aan
            ambitieuze projecten met interessante mensen.
          </p>
        </div>
      </div>
    </div>
  );
}
