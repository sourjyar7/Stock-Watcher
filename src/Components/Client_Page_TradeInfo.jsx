import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from "axios";
class Client_Page_TradeInfo extends Component {
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
            table=<tbody><tr>
            <td>Traded Volume(Shares)</td>
            <td>{this.state.data.marketDeptOrderBook.tradeInfo.totalTradedVolume}</td>  
          </tr>
          <tr>
            <td>Traded Value(in Lakhs)</td>
            <td>{this.state.data.marketDeptOrderBook.tradeInfo.totalTradedValue}</td>  
          </tr>
          <tr>
            <td>Total Market Cap.(in Lakhs)</td>
            <td>{this.state.data.marketDeptOrderBook.tradeInfo.totalMarketCap}</td>  
          </tr>
          <tr>
            <td>Free Float Market Cap.(in Lakhs)</td>
            <td>{this.state.data.marketDeptOrderBook.tradeInfo.ffmc}</td>  
          </tr>
          <tr>
            <td>Impact cost</td>
            <td>{this.state.data.marketDeptOrderBook.tradeInfo.impactCost}</td>  
          </tr></tbody>;
        } 
        return (<Table responsive striped bordered className="text-light">
                  {table}
                </Table>  );
    }
}
 
export default Client_Page_TradeInfo;
