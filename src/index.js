import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const ReactApp = () => (
  <MuiThemeProvider store={createStoreWithMiddleware(reducers)}>
    <App />
  </MuiThemeProvider>
);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <ReactApp />
  </Provider>
  , document.querySelector('#app'));
