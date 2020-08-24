import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
class Client_Page_TradeInfo extends Component {
    state = {  }
    render() { 
        return (<Table responsive striped bordered className="text-light">
                          
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
</Table>  );
    }
}
 
export default Client_Page_TradeInfo;
