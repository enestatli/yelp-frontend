import React, { useState } from "react";
import { TopNav } from "./TopNav/TopNav";
import logo from "../assets/logodentfx.png";
import styles from "./LandingPage.module.css";
import { SearchBar } from "../SearchBar/SearchBar";

export function LandinPage() {
  return (
    <div>
      <TopNav />
      <img src={logo} alt="logo" className={styles["logo"]} />
      <SearchBar />
    </div>
  );
}
