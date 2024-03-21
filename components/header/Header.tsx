import styles from "./Header.module.css";

import Image from "next/image";
import Arrow from "./assets/arrowDown.svg";
import bgBigTrees from "./assets/bg-bigTrees.svg";
import bgMountain from "./assets/bg-mountain.svg";
import bgSky from "./assets/bg-sky.svg";
import bgTrees from "./assets/bg-trees.svg";

export default function Header() {
  return (
    <header id="header" className={styles.header}>
      <Image priority src={bgSky} alt="sky" className={styles.background} />
      <Image
        priority
        src={bgMountain}
        alt="mountain"
        className={styles.middelground}
      />
      <Image
        priority
        src={bgTrees}
        alt="mountain trees"
        className={`${styles.middelground} ${styles.trees}`}
      />
      <Image
        priority
        src={bgBigTrees}
        alt="forest trees"
        className={styles.foreground}
      />
      <div className={`${styles.foreground} ${styles.extra}`}></div>
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <h1>Luuk van Dijk</h1>
          <h2>Frontend Developer</h2>
        </div>
        <div className={styles.seeMoreContainer}>
          <a href="#projects">
            <h3>Bekijk mijn werk</h3>
          </a>
          <Image src={Arrow} alt="arrow down" className={styles.img} />
        </div>
      </div>
    </header>
  );
}
