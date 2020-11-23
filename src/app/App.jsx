import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { AuthForm, RegForm } from '../features/user';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={AuthForm} exact/>
        <Route path="/signup" component={RegForm} exact/>
        <Redirect to="/login"/>
      </Switch>
    </Router>
  );
}

export default App;
