import React from 'react';
import './App.scss';
import Homepage from './page/Homepage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './page/About';
import Contacts from './page/Contacts';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
