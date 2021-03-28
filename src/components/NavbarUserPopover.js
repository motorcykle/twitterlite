import React, { useState } from 'react';
import { Button, Popover, ListGroup } from 'react-bootstrap';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FaceIcon from '@material-ui/icons/Face';

import './NavbarUserPopover.css'
import { RecentActorsOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';


const NavbarUserPopover = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);

  return (
    <div
    className="position-relative" 
    onMouseOver={() => setShow(true)}
    onMouseLeave={() => setShow(false)}
    >
      
      <Button 
      variant="transparent" 
      className="p-0 outline-none "
      onClick={() => setShow(prev => !prev)}
      onFocus={() => setShow(true)}
      >
        <img
          alt="d"
          className="rounded-circle shadow"
          height="35"
          width="auto"
          src="https://www.qvphysiotherapy.com/wp-content/uploads/2018/12/profile-placeholder.png"
        />
      </Button>

      {show && <div className="popover__container p-2 position-absolute">
      <ListGroup defaultActiveKey="#link1">
        
        <ListGroup.Item action onClick={() => history.push("/profile")}>
          <FaceIcon /> Your profile
        </ListGroup.Item>
        
        <ListGroup.Item action className="bg-secondary text-light" onClick={() => console.log("LOGOUT")}>
          <ExitToAppIcon /> Logout
        </ListGroup.Item>
      </ListGroup>
      </div>}

    </div>
  );
}

export default NavbarUserPopover;
