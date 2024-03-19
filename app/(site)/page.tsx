import styles from "./page.module.css";

import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Projecten from "@/components/projecten/Projecten";
import Skills from "@/components/skills/Skills";

export default async function Home() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <Navbar />
      <About />
      {/* @ts-expect-error Server Component */}
      <Skills />
      <Projecten />
      <Contact />
    </div>
  );
}
