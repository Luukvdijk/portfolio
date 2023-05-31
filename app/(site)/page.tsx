import styles from "./page.module.css";

import Header from "@/components/header/Header";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Project from "@/components/projecten/Projecten";

export default async function Home() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <About />
      {/* @ts-expect-error Server Component */}
      <Skills />
      {/* @ts-expect-error Server Component */}
      <Project />
    </div>
  );
}
