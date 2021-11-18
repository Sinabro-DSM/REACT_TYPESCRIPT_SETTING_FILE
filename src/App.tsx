import React from "react";
import { Switch } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/public/header";
import Feed from "./components/feed/index";
import Detail from "./components/detail/index";
import Upload from "./components/upload/index";
import Signin from "./components/login/signin";
import Signup from "./components/login/signup/index";
import Profile from "./components/mypage/profile";
import MyCloset from "./components/mypage/myCloset/index";
import ChooseColor from "./components/chooseColor";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={ChooseColor} />
        <Route path="/feed" component={Feed} />
        <Route path="/detail" component={Detail} />
        <Route path="/upload" component={Upload} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="/mycloth" component={MyCloset} />
      </Switch>
    </Router>
  );
}
