import React from 'react';
import twitterlogo from '../twitterlogo.png';
import { Container, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="border-top border-color-light">
    <Container>
      <Nav className="py-5 align-items-stretch text-light">
        <Nav defaultActiveKey="/home" className="flex-column mr-5 justify-content-between">
          <router-link path='/'>
            <img
              alt="_"
              src={twitterlogo}
              width="auto"
              height="30"
              className="d-inline-block align-top mb-2"
            />
          </router-link>
          <router-link path='/'>
            About Us
          </router-link>
          <router-link path='/'>
            Helpcenter
          </router-link>
        </Nav>

        <Nav defaultActiveKey="/home" className="flex-column mr-5 justify-content-between">
          <router-link path='/'>
            User Policies
          </router-link>
          <router-link path='/'>
            Integrity Policies
          </router-link>
          <router-link path='/'>
            Cookie policies
          </router-link>
        </Nav>

        <Nav defaultActiveKey="/home" className="flex-column mr-5 justify-content-between">
          <router-link path='/'>
            Ad Info
          </router-link>
          <router-link path='/'>
            Blog
          </router-link>
          <router-link path='/'>
            Career
          </router-link>
        </Nav>
      </Nav>
    </Container>
    </div>
  );
}

export default Footer;
