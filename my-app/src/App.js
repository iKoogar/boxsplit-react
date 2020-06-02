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
    <div>
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
      </div>
      <div className="body">
        <header>
          <table className="tble">
            <tr>
              <th>What is BoxSplit?</th>
              <th>How does it work?</th>
            </tr>
            <tr>
              <td>
                BoxSplit is a site where people who buy items in sets, can sell those items as a 'split'.
                People who likes to buy in these 'splits' finds it easier and cheaper to buy these items can
                come onto this site and buy it off of there. 
              </td>
              <td>
                1. You search for your desired items.
                2. Once you find the desired split, let the seller know that you want to buy desired item.
                3. If the seller agrees to sell to you, then you can proceed with payments.
                We are not responsible for any lose of money. The transactions that happen on this site will be between you and the seller only. 
              </td>
            </tr>
          </table>
          <Button onClick={() => exportWithObjectId()}>Show Toast</Button>
        </header>
      </div>
    </div>
  );
}

// try to access endpoints

export default App;
