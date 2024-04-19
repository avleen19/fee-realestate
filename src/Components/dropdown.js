import Dropdown from 'react-bootstrap/Dropdown';

import React, { useState } from 'react';
import './dropdown.css';

function  DropdownComponent() {
  //   const [showDropdown, setShowDropdown] = useState(false);

  // const handleToggle = () => {
  //   setShowDropdown(!showDropdown);
  // };

  // const handleHide = () => {
  //   setShowDropdown(false);
  // };
  return (
    <Dropdown>
     {/* <Dropdown show={showDropdown} onToggle={handleToggle} onHide={handleHide}></Dropdown> */}
    {/* <Dropdown show={isOpen} onMouseEnter={handleToggle} onMouseLeave={handleClose}></Dropdown> */}
    <Dropdown.Toggle variant="success" id="dropdown-basic">
     All India
    </Dropdown.Toggle>

    <Dropdown.Menu>
    <h2 className="dropdown-heading">Explore real estate in...</h2>
    <br></br>
    <br></br>
    <br></br>
      <Dropdown.Item href="#/action-1">Buy</Dropdown.Item><br></br>
      <Dropdown.Item href="#/action-2">Rent/Lease</Dropdown.Item><br></br>
      <Dropdown.Item href="#/action-3">Plot</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Pg/co-living</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default  DropdownComponent;
