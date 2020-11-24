import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { AuthForm, RegForm } from '../features/user';
import { userSelectors } from '../features/user/_userSlice_';

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
    routes = <Redirect to="/"/>;
  }

  return (
    <Router>
      <Switch>
        {routes}
      </Switch>
    </Router>
  );
}

export default App;
