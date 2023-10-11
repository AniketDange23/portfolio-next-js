"use client ";
import React, { useContext } from "react";
import styles from "./DarkModeToLight.module.css";

import { BsMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToLight = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>
        <BsMoonFill />
      </div>
      <div className={styles.icon}>
        <BsFillSunFill color="yellow" />
      </div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModeToLight;
