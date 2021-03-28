import React, { useState } from 'react';
import { Button, Popover, ListGroup } from 'react-bootstrap';
import './NavbarUserPopover.css'


const NavbarUserPopover = () => {
  const [show, setShow] = useState(false);

  return (
    <div
    className="position-relative" 
    onMouseOver={() => setShow(true)}
    onMouseLeave={() => setShow(false)}
    >
      
      <Button 
      variant="transparent" 
      className="p-0 outline-none"
      onClick={() => setShow(prev => !prev)}
      onFocus={() => setShow(true)}
      >
        <img
          alt="d"
          className="rounded-circle"
          height="30"
          width="auto"
          src="https://www.qvphysiotherapy.com/wp-content/uploads/2018/12/profile-placeholder.png"
        />
      </Button>

      {show && <div className="popover__container p-2 position-absolute">
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item action onClick={() => console.log("PROFILE")}>
          Your profile
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => console.log("LOGOUT")}>
          Logout
        </ListGroup.Item>
      </ListGroup>
      </div>}

    </div>
  );
}

export default NavbarUserPopover;
