import React from "react";

import logo from "../assets/logodentfx.png";
import styles from "./NavBar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";

export function NavBar() {
  return (
    <div className={styles["nav-bar"]}>
      <img src={logo} alt={logo} className={styles.logo} />
      <SearchBar />
      <button className={`button ${styles["nav-button"]}`}> Sign In</button>
      <button className={`button ${styles["nav-button"]}`}> Register</button>
    </div>
  );
}
