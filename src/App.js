import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./Home";
import AboutUs from "./AboutUs";

function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/AboutUs" exact component={AboutUs}/>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
