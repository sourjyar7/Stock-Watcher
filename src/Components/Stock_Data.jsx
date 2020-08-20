import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
class Stock_Data extends Component {
    
    render() { 
        return (
        <React.Fragment>
            <Card bg="transparent" text="light" border="light" className="mt-sm-4">
            <Card.Header className="border text-center">Stock Name</Card.Header>
            <button className="btn-light">
                Add to Watchlist
            </button>
                     <Card.Body>
                         <Card.Title>Price Information</Card.Title>
             <Table responsive striped bordered className="text-light">
                          <thead>
                            <tr>
                              <th>LTP</th>
                              <th>Open</th>
                              <th>Close</th>
                              <th>Prev. Close</th>
                              <th>VWAP</th>
                              <th>High</th>
                              <th>Low</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            
                          </tbody>
             </Table>
             <br/>
             <Card.Title>Market Depth Order Book</Card.Title>
             <Table responsive striped bordered className="text-light">
                          <thead>
                            <tr>
                              <th>Quantity</th>
                              <th>Bid</th>
                              <th>Ask</th>
                              <th>Quantity</th>
                            </tr>
                          </thead>
                          <tbody>
                            
                          </tbody>
             </Table>
             <br/>
             <Card.Title>Trade Information</Card.Title>
             <Table responsive striped bordered className="text-light">
                          
                          <tbody>
                            <tr>
                              <td>Traded Volume(Shares)</td>
                              <td></td>  
                            </tr>
                            <tr>
                              <td>Traded Value(in Lakhs)</td>
                              <td></td>  
                            </tr>
                            <tr>
                              <td>Total Market Cap.(in Lakhs)</td>
                              <td></td>  
                            </tr>
                            <tr>
                              <td>Free Float Market Cap.(in Lakhs)</td>
                              <td></td>  
                            </tr>
                            <tr>
                              <td>Impact cost</td>
                              <td></td>  
                            </tr>
                          </tbody>
             </Table>
             </Card.Body>
             </Card>
        </React.Fragment>  );
    }
}
 
export default Stock_Data;