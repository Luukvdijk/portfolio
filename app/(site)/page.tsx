import styles from "./page.module.css";

import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Project from "@/components/projecten/Projecten";
import Contact from "@/components/contact/Contact";

export default async function Home() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <Navbar />
      <About />
      {/* @ts-expect-error Server Component */}
      <Skills />
      {/* @ts-expect-error Server Component */}
      <Project />
      <Contact />
    </div>
  );
}
