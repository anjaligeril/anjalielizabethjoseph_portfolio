import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import PortFolio from './containers/PortFolio'

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter><PortFolio/></BrowserRouter>
      </div>
    );
  }
}

export default App;
