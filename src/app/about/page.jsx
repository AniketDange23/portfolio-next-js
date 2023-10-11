import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import AboutImg from "public/about.png";
import Button from "@/Components/button/Button";
export const metadata = {
  title: "ABout  Page ",
  description: "this is About Page",
};
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={AboutImg} fill={true} alt="img" />

        <div className={styles.text}>
          <h1 className={styles.Imgtitle}>Digital Storytellers</h1>
          <h1 className={styles.imgDesc}>
            Handcrafting award winning digital experience
          </h1>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            eligendi modi. Voluptatum id dolorum ab sit beatae minus iste,
            aspernatur corrupti ipsa rerum odio placeat accusantium non! Nam
            eius fugiat inventore earum <br />
            <br />
            rem minima praesentium a mollitia ipsam molestiae sunt optio quasi
            animi repudiandae omnis voluptas, dicta sapiente debitis impedit?{" "}
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            omnis numquam vel porro quidem eveniet odit. Cumque consequuntur
            repudiandae expedita modi molestiae officiis blanditiis, consequatur
            doloribus nulla sint, aperiam natus!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            eligendi modi. Voluptatum id dolorum ab sit beatae minus iste,
            aspernatur corrupti ipsa rerum odio placeat accusantium non! Nam
            eius fugiat inventore earum <br /> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nihil quis rerum atque magni accusamus
            nesciunt ducimus rem ea non alias!
            <br />
            <br />- Dynamic Websites - Fast and Handy mobile
          </p>

          <br />
          <Button url="about" text="About" />
        </div>
      </div>
    </div>
  );
};

export default page;
