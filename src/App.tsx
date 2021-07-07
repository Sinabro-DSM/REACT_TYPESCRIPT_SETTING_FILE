import React from "react";
import { Switch } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch></Switch>
      </Router>
    </>
  );
}