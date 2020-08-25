import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from "axios";
class Client_Page_Priceinfo extends Component {
    state = {data: {},
             isReady: false
           }
    componentWillReceiveProps(newProps){
      if(newProps.searchInvoked){
        axios
        .post("http://localhost:5000/equity/stock/priceInfo?s="+newProps.searchedItem)
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
            .post("http://localhost:5000/equity/stock/priceInfo?s="+this.props.searchedItem)
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
            table=<tr><td>{this.state.data.priceInfo.lastPrice}</td>
                  <td>{this.state.data.priceInfo.open}</td>
                  <td>{this.state.data.priceInfo.close}</td>
                  <td>{this.state.data.priceInfo.previousClose}</td>
                  <td>{this.state.data.priceInfo.vwap}</td>
                  <td>{this.state.data.priceInfo.intraDayHighLow.max}</td>
                  <td>{this.state.data.priceInfo.intraDayHighLow.min}</td>
                  </tr>;
        } 
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
          
            {table}
          
        </tbody>
</Table> );
    }
}
 
export default Client_Page_Priceinfo;