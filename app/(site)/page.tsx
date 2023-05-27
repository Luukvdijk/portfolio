import Image from "next/image";
import styles from "./page.module.css";
import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className={styles.mainContainer}>
      <h1>
        Hello Im <span>Luuk!</span>
      </h1>
      <p>Aloha everyone! CHeck out my projects!</p>

      <h2>My Projects</h2>
      <div className={styles.projectContainer}>
        {projects.map((project) => {
          return (
            <Link
              href={`/projects/${project.slug}`}
              className={styles.mainContent}
              key={project._id}
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={250}
                  height={100}
                  className={styles.pImg}
                />
              )}
              <div className={styles.pName}>{project.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
