import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
class Watchlist extends Component {
    state = {  }
    render() { 
        return (<Card bg="transparent" text="light" className="mt-4" border="light">
                    <Card.Header className="border">Watchlist</Card.Header>
                     <Card.Body>
                     <Table responsive striped bordered hover className="text-light">
                          <thead>
                            <tr>
                              
                              <th>Symbol</th>
                              <th>LTP</th>
                              <th>%Change</th>
                              <th>Volume</th>
                              <th><a href="https://www.facebook.com"><FontAwesomeIcon id="fb" icon={faTrashAlt}></FontAwesomeIcon></a></th>
                            </tr>
                          </thead>
                          <tbody>
                            
                          </tbody>
                      </Table>
                     </Card.Body>
                   </Card>  );
    }
}
 
export default Watchlist;