import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Watchlist from './Watchlist';
import Stock_Data from './Stock_Data';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Connect from './Connect';
class Client_Page extends Component {
  state = {};
  render() {
    return (
    <React.Fragment>
        <Row>
            <Col>
               <Form inline >
                    <FormControl type="text" placeholder="Enter company name or symbol. . . ." className="w-75 bg-transparent font-italic" />
                    <Button variant="outline-warning" className="ml-md-4 w-auto">Search</Button>
               </Form>
            </Col>
        </Row>
        <Row>
           {this.props.isLoggedIn? <><Col lg={4} sm={12}><Watchlist></Watchlist></Col><Col lg={8} sm={12}><Stock_Data></Stock_Data></Col></> : <><Col lg={12}><Stock_Data></Stock_Data></Col></>}
        </Row>
        <Row>
            <Col>
            <Card bg="transparent" text="light" className="mt-4" border="light">
            <Card.Header className="border">Security-wise Delivery Position</Card.Header>
                <Card.Body>
                <Table responsive striped bordered className="text-light">
                    <thead>
                    <tr>
                        <th>Quantity Traded</th>
                        <th>Deliverable Quantity (gross across client level)</th>
                        <th>% of Deliverable Quantity to Traded Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </Table>
                </Card.Body>
            </Card>
            </Col>
        </Row>
                
        <Connect/>
    </React.Fragment>);
  }
}

export default Client_Page;
