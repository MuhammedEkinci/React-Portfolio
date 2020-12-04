import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";


import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutMe} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
