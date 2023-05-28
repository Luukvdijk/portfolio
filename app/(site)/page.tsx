import styles from "./page.module.css";

import Header from "@/components/header/Header";
import About from "@/components/about/About";

export default async function Home() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <About />
    </div>
  );
}
