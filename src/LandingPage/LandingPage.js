import React, { useState } from "react";

import styles from "./LandingPage.module.css";
import logo from "../assets/logodentfx.png";

import { TopNav } from "./TopNav/TopNav";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchSuggestion } from "./SearchSuggestion/SearchSuggestion";

export function LandinPage() {
  return (
    <div className={styles.landing}>
      <div className={styles["search-area"]}>
        <TopNav />
        <img src={logo} alt="logo" className={styles.logo} />
        <SearchBar />
        <SearchSuggestion />
      </div>
    </div>
  );
}
