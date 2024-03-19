import { getSkills } from "@/sanity/sanity-utils";
import Image from "next/image";
import styles from "./Skills.module.css";

export default async function Skills() {
  const skill = await getSkills();

  return (
    <div id="skills" className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <h1>Skills & experience</h1>
        <p>
          Mijn expertisegebied is front-end ontwikkeling.
          <br /> <br />
          Mijn basis van coderen is begonnen met HTML, CSS, en JS. Hier mee ben
          ik kleine web applicaties gaan bouwen. Daarna ben ik frameworks zoals
          React en Vue gaan leren zodat ik grotere applicaties kon gaan bouwen.
          Hierdoor heb ik ervaring opgebouwd aan de onderstaande skills.
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
