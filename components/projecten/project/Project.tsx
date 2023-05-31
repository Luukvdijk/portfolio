import React from "react";
import styles from "./Project.module.css";
import Image from "next/image";

import { getProjects } from "@/sanity/sanity-utils";

export default async function Project() {
  const project = await getProjects();
  return (
    <>
      {project?.map((element) => {
        return (
          <div key={element._id} className={styles.mainContainer}>
            <div className={styles.left}>
              <h2>{element.functie}</h2>
              <h1>{element.name}</h1>
              <p>{element.uitleg}</p>
              <p>Gemaakt met: {element.talen}</p>
              <span>Lees meer {">"}</span>
            </div>
            <div className={styles.right}>
              <Image
                src={element.image}
                alt={element.name}
                width={0}
                height={0}
                className={styles.img}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
