import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
class Client_Page_SecurityWiseDeliveryPos extends Component {
    state = {  }
    render() { 
        return ( <Table responsive striped bordered className="text-light">
        <thead>
        <tr>
            <th>Quantity Traded</th>
            <th>Deliverable Quantity (gross across client level)</th>
            <th>% of Deliverable Quantity to Traded Quantity</th>
        </tr>
        </thead>
        <tbody>
        
        </tbody>
    </Table> );
    }
}
 
export default Client_Page_SecurityWiseDeliveryPos;