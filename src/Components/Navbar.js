import React from 'react';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
import './Navbar.css'
import Dropdown from './dropdown';
// import { Dropdown } from 'react-bootstrap';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className='leftside'>
      <div className="navbar-brand">99acres</div>
      <div className='india'>
      <Dropdown></Dropdown>
    </div>
      </ul>
      <ul className="navbar-ls">
        <li className="nav-item">
          <a href="#" className="nav-link">For Buyers</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">For tenants</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">For Owners</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">For Dealers/Builders</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Insights</a>
        </li>
        <li className="nav-item">
          <button className='postprop'>Post property <button className='free'>Free</button></button>
        </li>
        <li className="nav-item">
        <div className="icon">
          <i className="fa-solid fa-headphones" style={{ marginRight: '20px' }}></i>
        </div>
        </li>
        <li className="nav-item">
        <div className="icon">
          <i className="fa-solid fa-user" style={{ marginRight: '20px' }}></i>
        </div>
        </li>
        <li className="nav-item">
        <div className="icon">
          <i className="fa-solid fa-bars" style={{ marginRight: '20px' }}></i>
        </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
