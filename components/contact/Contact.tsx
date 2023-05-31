import React from "react";
import styles from "./Contact.module.css";
import Image from "next/image";

import send from "./send.svg";

export default function Contact() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h2>Heb jij een idee?</h2>
        <h1>Vertel mij er over</h1>
      </div>
      <form>
        <div className={styles.inputContainer}>
          Van: Luukvandijk2003@gmail.com
        </div>
        <div className={styles.inputContainer}>
          <p>Aan:</p>
          <input />
        </div>
        <div className={styles.inputContainer}>
          <p>Onderwerp:</p>
          <input />
        </div>
        <div className={styles.inputContainer}>
          <p>Jouw bericht:</p>
          <textarea
            defaultValue={`Beste Luuk van Dijk,
            
Ik heb een geweldig idee namelijk ...
            
Vriendelijk groet,
...`}
          ></textarea>
        </div>
        <button type="submit">
          Gewoon versturen
          <Image src={send} alt="verstuur icon" width={16} height={16} />
        </button>
      </form>
    </div>
  );
}
