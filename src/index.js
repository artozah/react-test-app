import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import configureStore from './redux/store';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import { Provider } from 'react-redux';

const initialState = {
  routing: {},
  user: {
    username: 'artem',
    id: 1
  }
};

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <App history={history} store={store}/>
  </Provider>,
  document.getElementById('root')
);
