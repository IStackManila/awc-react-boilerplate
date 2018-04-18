import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';

class App extends React.Component {
  render() {
    return (
      <main className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
