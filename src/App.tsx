import React from "react";
import { Switch } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import ChooseColor from "./components/chooseColor";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <ChooseColor />
      <Switch></Switch>
    </Router>
  );
}
