import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
class Client_Page_MarketDepthOrderBook extends Component {
    state = {  }
    render() { 
        return ( <Table responsive striped bordered className="text-light">
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
</Table> );
    }
}
 
export default Client_Page_MarketDepthOrderBook;