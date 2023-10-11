import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound;
  }
  return res.json();
}
export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.description,
  };
}
const Blogpost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.MainContainer}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.title}>{data.title} </h1>
          <p className={styles.desc}>{data.description}</p>
          <div className={styles.author}>
            <Image
              src={data.avatar}
              height={40}
              width={40}
              className={styles.avatar}
            />
            <span className={styles.name}>{data.username} </span>
          </div>
        </div>

        <Image
          src={data.img}
          alt="blog"
          className={styles.img}
          width={700}
          height={250}
        />
      </div>

      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default Blogpost;
