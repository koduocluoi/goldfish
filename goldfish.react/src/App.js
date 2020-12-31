import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/HomePage/HomePage';
import DynamicPage from './containers/DynamicPage/DynamicPage';
import NoMatch from './containers/NoMatchPage/NoMatchPage';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dynamic" component={DynamicPage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;