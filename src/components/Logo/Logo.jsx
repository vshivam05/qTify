import React from "react";
import LogoImage from "../../assets/logo.png";
import styles from "../Navbar/Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  let navigate = useNavigate();
  return (
    <div>
      <img
        src={LogoImage}
        alt=""
        className={styles.img}
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Logo;
