import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

import logo from "../../assets/logoWhite.svg";

export default function Navbar() {
  return (
    <div className={styles.mainContainer}>
      <Image
        src={logo}
        alt="logo"
        width={0}
        height={0}
        className={styles.img}
      />
      <div className={styles.contentContainer}>
        <p>Over mij</p>
        <p>Skills</p>
        <p>Projecten</p>
        <p>Contact</p>
      </div>
    </div>
  );
}
