import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
class Client_Page_Priceinfo extends Component {
    state = {  }
    render() { 
        return ( <Table responsive striped bordered className="text-light">
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
</Table> );
    }
}
 
export default Client_Page_Priceinfo;