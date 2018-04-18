import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from 'configureStore';
// import { getConference } from 'modules/global';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'sanitize.css/sanitize.css';
import 'themes/global';

import App from 'containers/App';
import NotFoundPage from 'containers/NotFoundPage';

import { browserHistory, history } from './history';

// import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');
const store = configureStore({}, history);
// store.dispatch(getConference());

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={browserHistory}>
        <Switch>
          <Route exact path="/not-found" component={NotFoundPage} />
          <Route path="/" component={App} />
          <Redirect to="/not-found" />
        </Switch>
      </ConnectedRouter>
    </Provider>,
    target,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(target);
    render();
  });
}

render();
// registerServiceWorker();
