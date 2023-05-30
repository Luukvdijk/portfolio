import styles from "./page.module.css";

import Header from "@/components/header/Header";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";

export default async function Home() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <About />
      {/* @ts-expect-error Server Component */}
      <Skills />
    </div>
  );
}
