import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/styles.css';
import 'popper.js';
import $ from 'jquery';
import 'bootstrap';
// import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './common/navigation';
import { SecurityContext, securityCtx } from './routers/seurity-context';

function App() {
  return (
    <SecurityContext.Provider value={ securityCtx }>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Navigation />
      </div>
    </SecurityContext.Provider>
  );
}

export default App;
