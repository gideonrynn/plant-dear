import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* <Route exact path="/dashboard" component={Dashboard}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
