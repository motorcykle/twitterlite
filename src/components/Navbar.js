import React from 'react';
import twitterlogo from '../twitterlogo.png';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {
Link
} from "react-router-dom";
import NavbarUserPopover from './NavbarUserPopover.js';
import NavbarSearchInput from './NavbarSearchInput.js';

const NavbarComponent = () => {

  return (
    <Navbar bg="dark" variant="dark" className="border-bottom border-light py-3 shadow">
      <Container>
        {/* router link bellow */}
      <Link to='/'>
      <Navbar.Brand> 
        <img
          alt="_"
          src={twitterlogo}
          width="auto"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

        </Nav>
        <NavbarSearchInput />
        <NavbarUserPopover />
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
