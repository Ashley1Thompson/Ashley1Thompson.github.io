import '../../styles/App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
// const videoUrl = ('')


function Header(props) {
  return (
//return header html
  <Container>
    <Col>
        <div id="hero">
              {/* <video className="video" autoPlay muted loop>
                <source src={props.videoUrl}  type={props.type} />
              </video> */}
        </div>
    </Col>
  </Container>  
  );
}


export default Header;