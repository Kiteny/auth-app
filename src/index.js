import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store, App } from './app';
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
