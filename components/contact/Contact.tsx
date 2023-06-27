"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import Image from "next/image";

import send from "./send.svg";
import succes from "./succes.svg";
import error from "./error.svg";

export default function Contact() {
  const [mail, setMail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [wait, setWait] = useState("");

  const handelSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    if (mail !== "" && subject !== "" && message !== "") {
      const data = {
        mail,
        subject,
        message,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setWait("succes");
        setLoading(false);
        setMail("");
        setSubject("");
        setMessage("");
      }
      if (!response.ok) {
        setWait("error");
        setLoading(false);
      }
    } else {
      setWait("error");
    }
  };

  return (
    <div id="contact" className={styles.mainContainer}>
      <div className={styles.title}>
        <h2>Heb jij een idee?</h2>
        <h1>Vertel mij er over</h1>
      </div>
      <form onSubmit={handelSubmit}>
        <div className={styles.inputContainer}>
          Aan: Luukvandijk2003@gmail.com
        </div>
        <div className={styles.inputContainer}>
          <p>Van:</p>
          <input
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <p>Onderwerp:</p>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <p>Jouw bericht:</p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          ></textarea>
        </div>
        <button disabled={loading} type="submit">
          Gewoon versturen
          <Image src={send} alt="verstuur icon" width={16} height={16} />
        </button>
        {wait === "succes" ? (
          <div className={styles.popupContainer}>
            <Image src={succes} alt="succes icon" width={256} height={256} />
            <p>
              Ik heb jouw bericht ontvangen en ik zal er zo snel mogelijk naar
              kijken.
            </p>
            <p>Wacht een tijdje voor dat je nog een bericht kan sturen.</p>
          </div>
        ) : null}
        {wait === "error" ? (
          <div className={styles.popupContainer}>
            <Image src={error} alt="error icon" width={256} height={256} />
            <p>Jouw bericht is helaas niet binnen gekomen.</p>
            <span onClick={() => setWait("")}>
              Klik hier om het opniew te proberen
            </span>
          </div>
        ) : null}
      </form>
    </div>
  );
}
