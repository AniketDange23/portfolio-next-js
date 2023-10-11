import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

// meta SEO
export const metadata = {
  title: "portfolio Page ",
  description: "this is portfolio",
};
const portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.SelectTitle}>Choose a gallery</div>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/Websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/Applications" className={styles.item}>
          <span className={styles.title}> Applications</span>
        </Link>
        <Link href="/portfolio/wireframe" className={styles.item}>
          <span className={styles.title}> wireframe</span>
        </Link>
      </div>
    </div>
  );
};

export default portfolio;
