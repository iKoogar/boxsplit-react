import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'

function exportWithObjectId() {
  alert('Just to be sure! objectID inside .ejs: ');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to yeet.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="Button" class="btn btn-success" onClick={exportWithObjectId()} >Export to csv</button>      </header>
    </div>
  );
}

// try to access endpoints

export default App;
