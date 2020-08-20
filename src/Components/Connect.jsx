import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
class Connect extends Component {
    
    render() { 
        return (
        <React.Fragment>
            <Row className="text-center m-4">
                   <Col className="col-lg-12 col-md-12 col-sm-12">
                     <hr className="border m-1"/>
                     <h4 className="display-5 text-light m-2">Connect</h4>
                     <hr className="border m-1"/>  
                   </Col>
                </Row>
                <Row className="text-center">   
                   <Col className="col-lg-12 col-md-12 col-sm-12 social padding">
                     <a href="https://www.facebook.com"><FontAwesomeIcon id="fb" icon={faFacebookSquare}></FontAwesomeIcon></a>
                     <a href="https://www.facebook.com"><FontAwesomeIcon id="git" icon={faGithub}></FontAwesomeIcon></a>
                     <a href="https://www.facebook.com"><FontAwesomeIcon id="insta" icon={faInstagramSquare}></FontAwesomeIcon></a>
                     <a href="https://www.facebook.com"><FontAwesomeIcon id="link" icon={faLinkedin}></FontAwesomeIcon></a>
                   </Col>
               </Row>
               <Row className="text-center text-light">
                   <Col className="col-lg-12 col-md-12 col-sm-12 m-2">
                   <hr className="border m-3"/>
                   <h3 className="display-5">Site Map</h3>
                   <p className="text-info"><a onClick={()=>{this.props.history.push('/')}}>Home</a> | <a onClick={()=>{this.props.history.push('/about')}}>About</a> | <a>Instruments</a> | <a>Contact</a></p> 
                   <p>Developed by Sourjya Mukherjee (CS Undergrad at Calcutta University)</p>
                   <p>Email: sourjyar7@gmail.com  |   Mobile: 9874052864</p>      
                   </Col>
               </Row>
        </React.Fragment>  );
    }
}
 
export default Connect;