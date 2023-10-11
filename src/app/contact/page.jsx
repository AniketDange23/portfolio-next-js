import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import contactImg from "/public/contact.png";
import Button from "@/Components/button/Button";

// meta SEO
export const metadata = {
  title: "Contact Page ",
  description: "this is My Contact Page",
};
const contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src={contactImg}
            alt="img"
            width={500}
            className={styles.Image}
          />
        </div>
        <div className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            name="text"
            id="message"
            cols="30"
            rows="10"
            className={styles.input}
          ></textarea>
          <div>
            <Button url="contact" text="contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
