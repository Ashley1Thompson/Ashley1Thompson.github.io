import '../App.css';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';
import Proj1 from '../assets/images/touchgrassnew.png';
import Proj2 from '../assets/images/rerunnew.png'
import Proj3 from '../assets/images/smallchange.png'

function Projects() {
  return (
//return projects page
<Row xs={1} md={2} lg={4} className="g-4">

  <Col>
    <Card className="projectCard" style={{width: '18rem'}}>
      <Card.Img variant="top" src={Proj3} />
      <Card.Body>
        <Card.Title className="projectTitle">Small Change</Card.Title>
        <Card.Text>
        An app that encourages users to commit to one small act of kindness each and every day, and inspire others to as well.

        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="projectCard" border="dark" style={{width: '18rem'}}>
      <Card.Img id="projImg" variant="top" src={Proj2} />
      <Card.Body>
        <Card.Title className="projectTitle">RERUN</Card.Title>
        <Card.Text>
        A fast-paced, heart-racing choose-your-own-adventure game! Login capability, so that users can compete for the high score on the leaderboard.
        </Card.Text>
      </Card.Body>
    </Card>

  <Card className="projectCard" border="dark" style={{width: '18rem'}}>
      <Card.Img id="projImg" variant="top" src={Proj1} />
      <Card.Body>
        <Card.Title className="projectTitle">Touch Grass App</Card.Title>
        <Card.Text >
        A web-based app that allows users to search their target state for National Parks. The search returns a list with links to the parks' websites, so users can plan ahead.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>

</Row>
  )
};


export default Projects;