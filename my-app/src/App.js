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
          <a href="#profile"><FaUserAlt/></a>
        </li>

      </ul>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur facilisis nunc at 
      imperdiet. Quisque interdum, massa vel semper euismod, libero quam lobortis lacus, a bibendum 
      sapien diam eget nibh. Fusce elementum nec diam et consequat. Donec condimentum arcu at arcu 
      commodo dignissim. Mauris porttitor euismod erat sed luctus. Nunc malesuada mi faucibus mauris 
      accumsan, eu luctus velit mattis. Cras id hendrerit odio. Mauris egestas, nibh id blandit accumsan, 
      mi enim dignissim turpis, sed lacinia sapien turpis nec velit. Donec fringilla nibh sit amet mauris
      pellentesque sagittis. Aliquam et venenatis lacus. Sed facilisis ac ex non congue. Cras ligula dui, 
      sodales ut consectetur et, bibendum sit amet lorem. Morbi sed ullamcorper diam, quis consectetur 
      orci. Aenean sollicitudin mattis mauris.
      Sed sed augue volutpat felis mollis auctor. Ut ac ipsum quis turpis suscipit ullamcorper et a metus. 
      Phasellus metus erat, gravida nec magna eu, convallis mattis magna. Nullam ut lacinia nulla, nec 
      accumsan arcu. Sed congue diam eu ipsum vulputate, quis semper metus fermentum. Vestibulum magna sem, 
      ultricies ut diam nec, commodo mollis purus. In volutpat urna eget urna rutrum, in elementum orci 
      fringilla. Pellentesque pretium sem erat, id egestas nibh porta a. Cras sit amet lorem dolor.
      </p>
      <header>
        <Button onClick={() => exportWithObjectId()}>Show Toast</Button>
      </header>
        
    </div>
  );
}

// try to access endpoints

export default App;
