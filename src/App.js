import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './components/common/header';
import Footer from './components/common/footer';
import Home from './components/pages/home';
import About from './components/pages/about';
import Team from './components/pages/team';
import Contact from './components/pages/contact';

function App() {
  return (
    <div>
    <Router>
    <Header />
    <Switch>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/team'>
          <Team />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
        
      </Switch>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
