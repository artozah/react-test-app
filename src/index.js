import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import configureStore from './redux/store';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import initialState from './redux/reducers/initialState';

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <App history={history} store={store}/>
  </Provider>,
  document.getElementById('root')
);
