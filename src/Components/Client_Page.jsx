import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Watchlist from './Watchlist';
import Stock_Data from './Stock_Data';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Connect from './Connect';
import Search_Bar from './SearchBar';
import axios from "axios";

class Client_Page extends Component {
  state = {
           }
  render() {
    return (
    <React.Fragment>
        <Row>
            <Col>
            <Search_Bar handleSearch={this.props.handleSearch}></Search_Bar>
            </Col>
        </Row>
        <Row>
           {this.props.isLoggedIn?(this.props.searchInvoked)?<><Col lg={4} sm={12}><Watchlist></Watchlist></Col><Col lg={8} sm={12}><Stock_Data isLoggedIn={this.props.isLoggedIn} searchedItem={this.props.searchedItem} searchInvoked={this.props.searchInvoked}></Stock_Data></Col></>:<><Col lg={4} sm={12}><Watchlist></Watchlist></Col><Col lg={8} sm={12}><Stock_Data isLoggedIn={this.props.isLoggedIn} searchedItem={this.props.searchedItem} searchInvoked={this.props.searchInvoked}></Stock_Data></Col></> : <><Col lg={12}><Stock_Data isLoggedIn={this.props.isLoggedIn} searchedItem={this.props.searchedItem} searchInvoked={this.props.searchInvoked}></Stock_Data></Col></>}
        </Row>
             
        <Connect/>
    </React.Fragment>);
  }
}

export default Client_Page;
