import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
class Home_Table extends Component {
    state = { top_gainers:[],
              top_losers:[],
              most_active:[]  }
    
    
    componentWillReceiveProps(nextProps){
        let nifty50=nextProps.data;
        this.setState({top_gainers : nifty50.slice(1,6)});
       // console.log(nifty50[0]);
        let arr= nifty50.slice(46,51);
        arr.sort((a,b)=>{
            if(a.totalTradedVolume > b.totalTradedVolume)
              return -1;
            else if(a.totalTradedVolume < b.totalTradedVolume)
              return 1;
            else
              return 0;
          });
        this.setState({top_losers : arr});
        
        
        nifty50.sort((a,b)=>{
          if(a.totalTradedVolume > b.totalTradedVolume)
            return -1;
          else if(a.totalTradedVolume < b.totalTradedVolume)
            return 1;
          else
            return 0;
        });  

        this.setState({most_active : nifty50.slice(0,5)});
        
    }
  
       
    renderTable = (symbol,index) =>{
         return (<tr key={symbol.symbol}>
                 <td>{index+1}</td>
                 <td>{symbol.symbol}</td>
                 <td>{symbol.lastPrice}</td>
                 <td>{symbol.pChange}</td>
                 <td>{symbol.totalTradedVolume}</td>
                 </tr>
                 );
      
    }; 

    render() { 
        return (<Table responsive striped bordered hover className="text-light">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Symbol</th>
                      <th>LTP</th>
                      <th>%Change</th>
                      <th>Volume</th>
                    </tr>
                  </thead>
                  <tbody>{ (this.props.topic === 'TOP_GAINERS') ? this.state.top_gainers.map(this.renderTable) : (this.props.topic === 'TOP_LOSERS') ? this.state.top_losers.map(this.renderTable) : this.state.most_active.map(this.renderTable)                             
                         }
                  </tbody>
                </Table>  );
    }
}
 
export default Home_Table;