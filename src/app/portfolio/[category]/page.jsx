"use client";
import React from "react";
import styles from "./page.module.css";
import Button from "@/Components/button/Button";
import Image from "next/image";
import { item } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = item[cat];
  if (data) {
    return data;
  }
  return notFound();
};

// meta SEO

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.cardTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}> {item.title}</h1>
            <p className={styles.desc}> {item.description}</p>
            <Button url="#" text="see more" />
          </div>
          <div className={styles.ImgContent}>
            <Image
              src={item.image}
              alt="illustration"
              fill={true}
              className={styles.Image}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
