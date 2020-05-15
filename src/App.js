import React from "react";

import "./App.css";
import Home from "./container/Home/homeIndex";
import Header from "./components/Header/headerIndex";
import Hero from "./Hero/heroIndex";
import Post from "./container/Post/postIndex";

import ContactUs from "./container/contactUs/contactUsIndex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/post/:slug" component={Post} />
      </div>
    </Router>
  );
}

export default App;
