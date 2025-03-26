import '../../styles/App.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import React from 'react';
//import { Container } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
//import Burger from '../../assets/images/burger-icon.png'

function Navigation() {
  return (
    
    <Navbar 
      sticky='top' 
      id='navBar'
      collapseOnSelect
      expand="lg"
      className="fixed ms-auto me-auto"
    >  
      <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navTog" />
      <Navbar.Collapse id="responsive-navbar-nav">        
        <Nav className='me-auto ms-auto'> 
          <NavLink to="/aboutMe"> about me |</NavLink>
          <NavLink to="/projects"> projects |</NavLink>
          <NavLink to="/blog"> blog |</NavLink>
          <NavLink to="/contact">contact </NavLink>
        </Nav>        
      </Navbar.Collapse>
    </Navbar> 

  );
}
//return navbar html

    
    
    
/*<nav className='navBar'>
      <ul className='navList'>
        <li><a href='/aboutMe'>about me</a></li>
        <li><a href='projects'>projects</a></li>
        <li><a href='blog'>blog</a></li>
        <li><a href=''>resume</a></li>
        <li><a href='contact'>get in touch</a></li>
      </ul>
    </nav>*/


export default Navigation;

