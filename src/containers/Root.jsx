import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import configureStore from '../store/configureStore';
import Routes from '../routes/Routes';

import '../styles/global.scss';

const store = configureStore({});

function Root() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default hot(module)(Root);
