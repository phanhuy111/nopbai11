import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Details from './components/Detail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={`/detail/:ID`} component={Details} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
