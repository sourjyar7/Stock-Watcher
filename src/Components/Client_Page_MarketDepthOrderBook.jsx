import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from "axios";
class Client_Page_MarketDepthOrderBook extends Component {
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
        
        renderTable = (val,index) =>{
           return (<tr key={index}>
                    <td>{val.quantity1}</td>
                    <td>{val.bid}</td>
                    <td>{val.ask}</td>
                    <td>{val.quantity2}</td>
                  </tr>) ;  
        }

    render() { 
        let temp=[];
        if(this.state.isReady){
            let bid=this.state.data.marketDeptOrderBook.bid;
            let ask=this.state.data.marketDeptOrderBook.ask;
            bid.map((val,index)=>{
                var obj={}
                obj.quantity1=val.quantity;
                obj.bid=val.price;
                temp.push(obj);
            })
            ask.map((val,index)=>{
                temp[index].ask=val.price;
                temp[index].quantity2=val.quantity;
            }) 
           
            
        }
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
          {(this.state.isReady)?temp.map(this.renderTable):<tr></tr>}
          
        </tbody>
</Table> );
    }
}
 
export default Client_Page_MarketDepthOrderBook;