"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import Image from "next/image";

import send from "./send.svg";

export default function Contact() {
  const [mail, setMail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

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
        console.log("message sent succesfully");
        setLoading(false);
        setMail("");
        setSubject("");
        setMessage("");
      }
      if (!response.ok) {
        console.log("error sending message");
        setLoading(false);
      }
    } else {
      console.log("mag nie");
      setLoading(false);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h2>Heb jij een idee?</h2>
        <h1>Vertel mij er over</h1>
      </div>
      <form onSubmit={handelSubmit}>
        <div className={styles.inputContainer}>
          Van: Luukvandijk2003@gmail.com
        </div>
        <div className={styles.inputContainer}>
          <p>Aan:</p>
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
      </form>
    </div>
  );
}
