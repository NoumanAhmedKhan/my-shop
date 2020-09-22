import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/AboutUs" exact component={AboutUs}/>
      <Route path="/Contact" exact component={Contact}/>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
