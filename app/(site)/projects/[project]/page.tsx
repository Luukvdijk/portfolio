import { getProject } from "@/sanity/sanity-utils";
import styles from "./page.module.css";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className={styles.mainContainer}>
      <header>
        <h1>{project.name}</h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </header>
      <div className={styles.content}>
        <PortableText value={project.content} />
      </div>
      <Image
        src={project.image}
        alt={project.alt}
        width={750}
        height={400}
        className={styles.img}
      />
    </div>
  );
}
