import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { AuthForm, RegForm } from '../features/user';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthForm} exact/>
        <Route path="/reg" component={RegForm} exact/>
        <Redirect to="/auth"/>
      </Switch>
    </Router>
  );
}

export default App;
