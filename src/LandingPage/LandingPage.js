import React, { useState } from "react";
import { TopNav } from "./TopNav/TopNav";
import logo from "../assets/logodentfx.png";
import styles from "./LandingPage.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchSuggestion } from "./SearchSuggestion/SearchSuggestion";

export function LandinPage() {
  return (
    <div>
      <TopNav />
      <img src={logo} alt="logo" className={styles["logo"]} />
      <SearchBar />
      <SearchSuggestion />
    </div>
  );
}
