import React from "react";
import styles from "./Project.module.css";
import Image from "next/image";

import test from "../../../assets/1op1phone.svg";

export default function Project() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.left}>
        <h2>Frontend application</h2>
        <h1>1 op 1 dieet</h1>
        <p>Dieet bedrijf met eigen suplementen</p>
        <p>Gemaakt met: Ionic, React, CSS, Typescript en javascript</p>
        <span>Lees meer {">"}</span>
      </div>
      <div className={styles.right}>
        <Image src={test} alt="test" className={styles.img} />
      </div>
    </div>
  );
}
