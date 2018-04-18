import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createReducer from 'reducers';
import api from 'client';

export default function configureStore(initialState = {}, history) {
  const reactRouterMiddleware = routerMiddleware(history);
  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(
      applyMiddleware(
        thunk.withExtraArgument(api),
        reactRouterMiddleware,
      ),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f,
    ),
  );

  store.injectedReducers = {}; // Reducer registry

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
