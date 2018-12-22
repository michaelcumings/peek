import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import Title from "./components/Title";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivatePage from "./pages/PrivatePage";
import UserPeeks from "./pages/UserPeeks";
import pageNotFound from "./pages/pageNotFound";

import Footer from "./components/footer"

function App() {
  return (
    <Router>
      <div className="container">
        <Title></Title>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/PrivatePage" component={Login} />
          <Route exact path="/UserPeeks" component={UserPeeks} />
          <Route component={pageNotFound} />

          </Switch>
          <Footer/>   
      </div>

     
    </Router>

  );
}

export default App;
