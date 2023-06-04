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
      <div className={styles.hamContainer}>
        <label className={styles.hamburgerMenu}>
          <input type="checkbox" />
        </label>
        <aside className={styles.sidebar}>
          <nav>
            <a href="#about">Over mij</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projecten</a>
            <a href="#contact">Contact</a>
          </nav>
        </aside>
      </div>
    </div>
  );
}
