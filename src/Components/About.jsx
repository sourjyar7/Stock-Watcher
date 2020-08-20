import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Connect from './Connect';
class About extends Component {
  componentDidMount(){
    console.log("About")
  }
    
    render() { 
        return (
        <React.Fragment>
           
           <Row>
           <Col>
           <Card bg="transparent" text="light" className="mt-4" border="light">
           <Card.Header className="border display-4"><h4>About</h4></Card.Header>
           <Card.Body>
           <Card.Title className="display-5">What is Stock Watcher?</Card.Title>
           <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
           </Card.Text>
           </Card.Body>
           </Card>
           </Col>
           </Row>     
           <Connect {...this.props} />
              
        </React.Fragment> );
    }
}
 
export default About;