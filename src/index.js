import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './components/app/App';

render(
  <Provider>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
