import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Data from './Data'
import Time from './Time';
import Nav from './Nav';
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
function App() {
  return (
    <div >
      <Data/>
      <Time/>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      
      
    </div>
  );
}

export default App;
