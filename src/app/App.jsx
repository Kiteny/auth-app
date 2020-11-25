import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { AuthForm, RegForm } from '../features/user';
import UserProfile from '../features/user/UserProfile/UserProfile';
import { userSelectors } from '../features/user/_userSlice_';
import CriticalErrosBoundary from './components/CriticalErrorsBoundary/CriticalErrorsBoundary';

const App = () => {
  const isSignIn = useSelector(userSelectors.isSignIn);

  let routes;

  if (!isSignIn ) {
    routes = (
      <>
        <Route path="/login" component={AuthForm} exact/>
        <Route path="/signup" component={RegForm} exact/>
        <Redirect to="/login"/>
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" component={UserProfile} exact/>
        <Redirect to="/"/>
      </>
    );
  }

  return (
    <CriticalErrosBoundary>
      <Router>
        <Switch>
          {routes}
        </Switch>
      </Router>
    </CriticalErrosBoundary>
  );
}

export default App;
