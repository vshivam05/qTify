import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav>
      <div className={styles.nav}>
        <Link to="/">
          <Logo />
        </Link>

        <Search
          placeholder="Search a song of your choice"
          searchData={searchData}
        />

        <Button text="GIVE FEEDBACK" eventHandler={{ event: "onClick" }} />
      </div>
    </nav>
  );
}
export default Navbar;
