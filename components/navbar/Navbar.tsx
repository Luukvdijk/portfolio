import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

import logo from "../../assets/logoWhite.svg";

export default function Navbar() {
  return (
    <div className={styles.mainContainer}>
      <a href="#header">
        <Image
          src={logo}
          alt="logo"
          width={0}
          height={0}
          className={styles.img}
        />
      </a>
      <div className={styles.contentContainer}>
        <a href="#about">Over mij</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projecten</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={styles.hamburgerContainer}>
        <svg fill="white" viewBox="0 0 100 100" width="70">
          <rect width="80" height="10" x="10" y="25" rx="5"></rect>
          <rect width="80" height="10" x="10" y="45" rx="5"></rect>
          <rect width="80" height="10" x="10" y="65" rx="5"></rect>
        </svg>
      </div>
    </div>
  );
}
