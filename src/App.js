import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import Header from './component/Header/Header';
import {HashRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="APP">

        <div className="routes_container" >
          <HashRouter>
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/wizard" component={Wizard} />
            </Switch>
            </HashRouter>
            <Header/>
        </div>
      </div>
    );
  }
}

export default App;
