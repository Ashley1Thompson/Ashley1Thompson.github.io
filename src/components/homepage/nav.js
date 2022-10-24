import '../../styles/App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



function Navigation() {
  return (
//return navbar html
    <Navbar sticky='top' id='navbar'>  
      <Container>
        <Nav className="me-auto">
            <NavLink to="/aboutMe">about me | </NavLink>
            <NavLink to="/projects">projects | </NavLink>
            <NavLink to="/contact">contact | </NavLink>
            <NavLink to="/blog">blog | </NavLink>
            <NavLink to={{pathname: "https://docs.google.com/document/d/1fFdcamhyiypfbkY_ZQD2IQCbhok4YCrWgL2YpDOSUXo/edit?usp=sharing"}} target="_blank">resume</NavLink>
        </Nav>
      </Container>
    </Navbar>  
  );
}


export default Navigation;

