import '../styles/App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';
import Proj1 from '../assets/images/touchgrassnew.png';
import Proj2 from '../assets/images/rerunnew.png'
import Proj3 from '../assets/images/smallchange.png'

function Projects() {
  return (
//return projects page
<Container fluid="sm" className="projContainer">
    <Row>
      <Col className="projCol">
        <Card className="projectCard " style={{ width: '18rem' }}>
          <Card.Img id="projImg" variant="top" src={Proj3} />          
          <Card.Body>
            <Card.Title className="projectTitle">Small Change</Card.Title>
            <Card.Text className="description">
            An app that encourages users to commit to one small act of kindness each and every day, and inspire others to as well.
            </Card.Text>
            <Button href="https://smallchange-app.herokuapp.com/" className="projButton" >Check it out!</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="projCol">
        <Card className="projectCard " style={{ width: '18rem' }}>
          <Card.Img id="projImg" variant="top" src={Proj2} />
          <Card.Body>
            <Card.Title className="projectTitle">RERUN</Card.Title>
            <Card.Text className="description">
            A fast-paced, heart-racing choose-your-own-adventure game! Login capability, so that users can compete for the high score on the leaderboard.
            </Card.Text>
            <Button href="https://rerun-game.herokuapp.com/" className="projButton" >Check it out!</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="projCol">
        <Card className="projectCard " style={{ width: '18rem' }}>
          <Card.Img id="projImg" variant="top" src={Proj1} />
          <Card.Body>
            <Card.Title className="projectTitle">Touch Grass App</Card.Title>
            <Card.Text className="description">
            A web-based app that allows users to search their target state for National Parks. The search returns a list with links to the parks' websites, so users can plan ahead.
            </Card.Text>
            <Button href=" https://ashley1thompson.github.io/touch-grass-app-national-park-finder/" className="projButton" >Check it out!</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
</Container>
  )
};


export default Projects;