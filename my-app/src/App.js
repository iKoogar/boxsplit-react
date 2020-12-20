import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { BsFillGearFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

function exportWithObjectId() {
  fetch(`50.116.50.126:8000/user_test`)
  .then(data => console.log(data));

}
//asasdfasdf
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
        <h1 className="title">
          boxsplit
        </h1>
        <header>
          <table className="tble">
            <tr>
              <th>What is BoxSplit?</th>
              <th>How does it work?</th>
            </tr>
            <tr>
              <td>
                BoxSplit is a site where people who buy items in sets, can sell those items as a 'split'.<br/>
                People who likes to buy in these 'splits' finds it easier and cheaper to buy these items can
                come onto this site and buy it off of there.
              </td>
              <td>
                  1. You search for your desired items.<br/>
                  2. Once you find the desired split, let the seller know that you want to buy desired item.<br/>
                  3. If the seller agrees to sell to you, then you can proceed with payments.<br/>
                  <i>
                    We are not responsible for any loss of money. The transactions that happen on this site will be between you and the seller only.
                  </i>
              </td>
            </tr>
          </table>
          <Button onClick={() => exportWithObjectId()}>Show Toast</Button>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, mauris id condimentum
          hendrerit, mauris turpis aliquet dolor, et pretium dolor orci et nulla. Proin in finibus enim.
          Ut tincidunt, tellus ut posuere tristique, odio orci condimentum mi, id dignissim arcu sapien
          eget magna. Vivamus blandit at lacus vitae ornare. Aliquam blandit orci quis orci lacinia
          dapibus. Vivamus eget tellus non ex condimentum dapibus mattis eu risus. Aliquam eget felis ut
          ipsum tincidunt elementum a rhoncus arcu. Nulla molestie et ante at porta. Duis scelerisque odio
          nec lorem bibendum, eget porttitor mauris ultrices. Ut euismod sollicitudin neque, vestibulum
          semper risus gravida et. Donec luctus dui et ex rutrum, ac lobortis sem mattis. Curabitur
          placerat, nisl at pellentesque lobortis, metus lorem dictum dolor, vel dictum elit urna in lorem. Etiam a velit a mauris pellentesque molestie.
          </p>
        </header>
      </div>
    </div>
  );
}

// try to access endpoints

export default App;