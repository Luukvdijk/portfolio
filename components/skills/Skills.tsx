import React from "react";
import styles from "./Skills.module.css";
import Image from "next/image";
import { getSkills } from "@/sanity/sanity-utils";

export default async function Skills() {
  const skill = await getSkills();

  return (
    <div id="skills" className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <h1>Skills & experience</h1>
        <p>
          Het belangrijkste expertisegebied is front-end ontwikkeling.
          <br /> <br />
          HTML, CSS en JS heb ik geleerd voor het bouwen voor kleine web
          applicaties. Met Vue of React samen met plugins, features en animaties
          kunnen er grotere web aplicaties bebouwd worden. Ook hier heb ik al
          ervaring mee.
        </p>
        <div className={styles.skillsContainer}>
          {skill?.map((skill) => {
            return (
              <div key={skill._id} className={styles.skill}>
                <Image
                  src={skill.image}
                  alt={skill.title}
                  width={0}
                  height={0}
                  className={styles.img}
                />
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
