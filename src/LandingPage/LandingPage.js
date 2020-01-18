import React, { useState } from "react";
import useReactRouter from "use-react-router";

import styles from "./LandingPage.module.css";
import logo from "../assets/logodentfx.png";

import { TopNav } from "./TopNav/TopNav";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchSuggestion } from "./SearchSuggestion/SearchSuggestion";

export function LandinPage() {
  const { history } = useReactRouter();

  function search(term, location) {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  }
  return (
    <div className={styles.landing}>
      <div className={styles["search-area"]}>
        <TopNav />
        <img src={logo} alt="logo" className={styles.logo} />
        <SearchBar search={search} />
        <SearchSuggestion />
      </div>
    </div>
  );
}
