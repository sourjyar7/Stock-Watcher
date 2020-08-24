import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Watchlist from './Watchlist';
import Stock_Data from './Stock_Data';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Connect from './Connect';
import axios from "axios";

class Client_Page extends Component {
  state = {displaySearchData: {},
           niftyData: []
           };
  componentDidMount(){
      if(this.props.searchInvoked){
            axios
            .post("http://localhost:5000/equity/stock/priceInfo?s="+this.props.searchedItem)
            .then((resp) => {
            
            console.log(resp.data)
            
            })
            .catch((err) => {
            console.log(err);
            });
        }
    else{
        axios
      .post("http://localhost:5000/equity/index/?s=NIFTY 50")
      .then((resp) => {
        
        console.log(resp.data)
        
      })
      .catch((err) => {
        console.log(err);
      });
        }

  }
  render() {
    return (
    <React.Fragment>
        <Row>
            <Col>
               <Form inline >
                    <FormControl type="text" placeholder="Enter company name or symbol. . . ." className="w-75 bg-transparent font-italic" />
                    <Button variant="outline-warning" className="ml-md-4 w-auto">Search</Button>
               </Form>
            </Col>
        </Row>
        <Row>
           {this.props.isLoggedIn? <><Col lg={4} sm={12}><Watchlist></Watchlist></Col><Col lg={8} sm={12}><Stock_Data></Stock_Data></Col></> : <><Col lg={12}><Stock_Data></Stock_Data></Col></>}
        </Row>
             
        <Connect/>
    </React.Fragment>);
  }
}

export default Client_Page;
