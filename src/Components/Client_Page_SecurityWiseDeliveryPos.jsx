import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from "axios";
class Client_Page_SecurityWiseDeliveryPos extends Component {
    state = {data: {},
             isReady: false
           }
    componentWillReceiveProps(newProps){
      if(newProps.searchInvoked){
        axios
        .post("http://localhost:5000/equity/stock/tradeInfo?s="+newProps.searchedItem)
        .then((resp) => {
        //console.log(resp.data);
        this.setState({data: resp.data,
                       isReady:true 
        });
        
        })
        .catch((err) => {
        console.log(err);
        });
      }
else{
    axios
  .post("http://localhost:5000/equity/index/?s=NIFTY 50")
  .then((resp) => {
    
    this.setState({data: resp.data,
                   isReady: true
    });
    
  })
  .catch((err) => {
    console.log(err);
  });
}
    }
    componentDidMount(){
        if(this.props.searchInvoked){
            axios
            .post("http://localhost:5000/equity/stock/tradeInfo?s="+this.props.searchedItem)
            .then((resp) => {
            //console.log(resp.data);
            this.setState({data: resp.data,
                           isReady:true 
            });
            
            })
            .catch((err) => {
            console.log(err);
            });
          }
    else{
        axios
      .post("http://localhost:5000/equity/index/?s=NIFTY 50")
      .then((resp) => {
        
        this.setState({data: resp.data,
                       isReady: true
        });
        
      })
      .catch((err) => {
        console.log(err);
      });
    }
    }
    render() { 
        let table;
        if(this.state.isReady){
            table=<tr>
                  <td>{this.state.data.securityWiseDP.quantityTraded}</td>
                  <td>{this.state.data.securityWiseDP.deliveryQuantity}</td>
                  <td>{this.state.data.securityWiseDP.deliveryToTradedQuantity}</td>
                  </tr>;
        } 
        return ( <Table responsive striped bordered className="text-light">
        <thead>
        <tr>
            <th>Quantity Traded</th>
            <th>Deliverable Quantity (gross across client level)</th>
            <th>% of Deliverable Quantity to Traded Quantity</th>
        </tr>
        </thead>
        <tbody>
          {table}
        </tbody>
    </Table> );
    }
}
 
export default Client_Page_SecurityWiseDeliveryPos;