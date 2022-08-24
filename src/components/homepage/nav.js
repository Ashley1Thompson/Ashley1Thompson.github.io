import '../../App.css';
import React from 'react';


function Nav(props) {
  return (
//return navbar html
    <div>  
      <nav className="navbar">
      <a onClick={() => props.setCurrentPage("aboutMe")} href="/">About Me</a>
      <a onClick={() => props.setCurrentPage("projects")}href="/">Projects</a>
      <a onClick={() => props.setCurrentPage("resume")}href="/">Resume</a>
      <a onClick={() => props.setCurrentPage("contact")}href="/">Contact</a>
          
      </nav>
    </div>  
  );
}


export default Nav;