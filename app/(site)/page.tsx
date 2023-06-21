import styles from "./page.module.css";

import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projecten from "@/components/projecten/Projecten";
import Contact from "@/components/contact/Contact";
import Project from "@/components/projecten/project/Project";

export default async function Home() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <Navbar />
      <About />
      {/* @ts-expect-error Server Component */}
      <Skills />
      <Projecten>
        {/* @ts-expect-error Server Component */}
        <Project />
      </Projecten>
      <Contact />
    </div>
  );
}
