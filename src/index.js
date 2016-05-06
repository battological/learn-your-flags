import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './containers/app';
import configureStore from './store/configureStore';
import { locationChange } from './actions';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
history.listen(location => store.dispatch(locationChange(location.pathname.slice(1))))

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="*" component={App} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('mount')
);
