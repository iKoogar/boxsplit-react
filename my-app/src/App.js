import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { BsFillGearFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

function exportWithObjectId() {
  alert('Just to be sure! objectID inside .ejs: ');
}

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li className="buttons">
          <a href="#">home</a>
        </li>

        <li className="buttons">
          <a href="#">search</a>
        </li>

        <li className="buttons">
          <a href="#">boxsplit</a>
        </li>

        <li className="right">
          <a href="#"><FiLogOut/></a>
        </li>

        <li className="right">
          <a href="#"><BsFillGearFill/></a>
        </li>

        <li className="right">
          <a href="#"><FaUserAlt/></a>
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
