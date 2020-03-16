import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <NavTabs /> 
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />  
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
