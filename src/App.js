import React from "react";
import { LandinPage } from "./LandingPage/LandingPage";
import { Switch, Route } from "react-router-dom";
import { Search } from "./Search/Search";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/" component={LandinPage} />
      </Switch>
    </div>
  );
}

export default App;
