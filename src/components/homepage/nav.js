import '../../App.css';
import React from 'react';


function Nav(props) {
  return (
//return navbar html
    <div>  
      <nav className="navbar">
      <a onClick={() => props.setCurrentPage("aboutMe")} href="/">about me</a>
      <a onClick={() => props.setCurrentPage("projects")}href="/">projects</a>
      <a onClick={() => props.setCurrentPage("resume")}href="/">resume</a>
      <a onClick={() => props.setCurrentPage("contact")}href="/">contact</a>
          
      </nav>
    </div>  
  );
}


export default Nav;