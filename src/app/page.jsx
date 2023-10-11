import Image from "next/image";
import styles from "./page.module.css";
import HeroImage from "public/hero.png";
import Button from "@/Components/button/Button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Batter design for your digital products
        </h1>
        <p className={styles.desc}>
          Turing your idea into Reality. We bring together the teams from the
          global tech industry
        </p>
        <Button url="contact" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={HeroImage} alt="Hero" className={styles.img} />
      </div>
    </div>
  );
}
