import React, { useState } from "react";
import { TopNav } from "./TopNav/TopNav";
import logo from "../assets/logodentfx.png";
import styles from "./LandingPage.module.css";

export function LandinPage() {
  return (
    <div>
      <TopNav />
      <img src={logo} alt="logo" className={styles["logo"]} />
    </div>
  );
}
