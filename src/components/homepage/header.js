import '../../App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
// const videoUrl = ('')


function Header(props) {
  return (
//return header html
  <Container>
    <header>
        <div id="hero">
              {/* <video className="video" autoPlay muted loop>
                <source src={props.videoUrl}  type={props.type} />
              </video> */}
        </div>
    </header>
  </Container>  
  );
}


export default Header;