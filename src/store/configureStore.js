import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import rootReducer from '../reducers/app';

export default function configureStore(initialState) {
  const store = createStore(combineReducers({ app: rootReducer, routing: routerReducer }), initialState,
      window.devToolsExtension ? window.devToolsExtension() : undefined
    );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/app', () => {
      const nextReducer = require('../reducers/app').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
