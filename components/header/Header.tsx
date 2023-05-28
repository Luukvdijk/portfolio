import React from "react";
import styles from "./Header.module.css";

import bgBigTrees from "./assets/bg-bigTrees.svg";
import bgTrees from "./assets/bg-trees.svg";
import bgMountain from "./assets/bg-mountain.svg";
import bgSky from "./assets/bg-sky.svg";
import Image from "next/image";
import Arrow from "./assets/arrowDown.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={bgSky} alt="sky" className={styles.background} />
      <Image src={bgMountain} alt="mountain" className={styles.middelground} />
      <Image
        src={bgTrees}
        alt="mountain trees"
        className={`${styles.middelground} ${styles.trees}`}
      />
      <Image
        src={bgBigTrees}
        alt="forest trees"
        className={styles.foreground}
      />
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <h1>Luuk van Dijk</h1>
          <h2>Frontend Developer</h2>
        </div>
        <div className={styles.seeMoreContainer}>
          <h3>Bekijk mijn werk</h3>
          <Image src={Arrow} alt="arrow down" className={styles.img} />
        </div>
      </div>
    </header>
  );
}
