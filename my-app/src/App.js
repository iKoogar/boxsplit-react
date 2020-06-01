import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { FaBars } from 'react-icons/fa';

function exportWithObjectId() {
  alert('Just to be sure! objectID inside .ejs: ');
}

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li className="buttons">boxsplit</li>
        <li className="buttons">
          <a href="#">home</a>
        </li>
        <li className="buttons">
          <a href="#">search</a>
        </li>
        <li className="right">
          <a href="javascript:void(0)" className="dropbutn"><FaBars/></a>
          <div className="dropcontent">
            <a href="#">profile</a>
            <a href="#">settings</a>
            <a href="#">logout</a>
          </div>
        </li>
      </ul>
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
        <Button onClick={() => exportWithObjectId()}>Show Toast</Button>
        </header>
    </div>
  );
}

// try to access endpoints

export default App;
