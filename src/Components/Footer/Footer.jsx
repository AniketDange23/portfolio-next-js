import React from "react";
import style from "./footer.module.css";
import Image from "next/image";
import Instagram from '/public/instagram.png'
import Behance from '/public/behance.png'
import Github from '/public/linkedin.png'
import Facebook from '/public/github.png'



const Footer = () => {
  return (
    <div className={style.container}>
      <div>2023 Anna .All rights reserved</div>
      <div className={style.social}>
        {" "}
        <Image
          src={Instagram}
          width={20}
          height={20}
          alt="instagram"
        />
         <Image
          src={Facebook}
          width={20}
          height={20}
          alt="instagram"
        />
         <Image
          src={Github}
          width={20}
          height={20}
          alt="instagram"
        />
         <Image
          src={Behance}
          width={20}
          height={20}
          alt="instagram"
          
        />
  
      </div>
    </div>
  );
};

export default Footer;
