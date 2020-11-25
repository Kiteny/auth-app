import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { AuthForm, RegForm, userSelectors, UserProfile } from '../features/user';
import CriticalErrosBoundary from './components/CriticalErrorsBoundary';

const App = () => {
  const isSignIn = useSelector(userSelectors.isSignIn);

  let routes;

  if (!isSignIn ) {
    routes = (
      <Switch>
        <Route path="/login" component={AuthForm} exact/>
        <Route path="/signup" component={RegForm} exact/>
        <Redirect from="/" to="/login"/>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" component={UserProfile} exact/>
        <Redirect to="/"/>
      </Switch>
    );
  }

  return (
    <CriticalErrosBoundary>
      <Router>
        {routes}
      </Router>
    </CriticalErrosBoundary>
  );
}

export default App;
