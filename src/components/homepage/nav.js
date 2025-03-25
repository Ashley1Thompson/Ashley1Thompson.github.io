import '../../styles/App.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import React from 'react';
// import { Container } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
//import Burger from '../../assets/images/burger-icon.png'

function Navigation() {
  return (
//return navbar html
    <Navbar 
      sticky='top' 
      id='navbar'
      collapseOnSelect
      expand="lg"
      className="fixed ms-auto me-auto"
    >  
      <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navTog" />
      <Navbar.Collapse id="responsive-navbar-nav">        
        <Nav className='me-auto ms-auto'> 
          <NavLink to="/aboutMe"> about me |</NavLink>
          <NavLink to="/projects"> projects |</NavLink>
          <NavLink to="/contact"> contact |</NavLink>
          <NavLink to="/blog"> blog |</NavLink>
          <Nav.Link href="https://docs.google.com/document/d/1fFdcamhyiypfbkY_ZQD2IQCbhok4YCrWgL2YpDOSUXo/edit?usp=sharing "target="_blank" > resume |</Nav.Link>
        </Nav>        
      </Navbar.Collapse>
    </Navbar>  
  );
}


export default Navigation;

