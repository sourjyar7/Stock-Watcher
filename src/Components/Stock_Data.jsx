import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Client_Page_Priceinfo from './Client_Page_Priceinfo';
import Client_Page_TradeInfo from './Client_Page_TradeInfo';
import Client_Page_MarketDepthOrderBook from './Client_Page_MarketDepthOrderBook';
import Client_Page_SecurityWiseDeliveryPos from './Client_Page_SecurityWiseDeliveryPos';
class Stock_Data extends Component {
    
    render() { 
        return (
        <React.Fragment>
            <Card bg="transparent" text="light" border="light" className="mt-sm-4">
            <Card.Header className="border text-center">{this.props.searchedItem}</Card.Header>
            <button className="btn-light">
                Add to Watchlist
            </button>
            <Card.Body>
             <Card.Title>Price Information</Card.Title>
             
             <Client_Page_Priceinfo isLoggedIn={this.props.isLoggedIn} searchedItem={this.props.searchedItem} searchInvoked={this.props.searchInvoked}></Client_Page_Priceinfo>
             
             <br/>
             <Card.Title>Market Depth Order Book</Card.Title>
             <Client_Page_MarketDepthOrderBook isLoggedIn={this.props.isLoggedIn} searchedItem={this.props.searchedItem} searchInvoked={this.props.searchInvoked}></Client_Page_MarketDepthOrderBook>
             
             <br/>
             <Card.Title>Trade Information</Card.Title>
             <Client_Page_TradeInfo isLoggedIn={this.props.isLoggedIn} searchedItem={this.props.searchedItem} searchInvoked={this.props.searchInvoked}></Client_Page_TradeInfo>
             
             <br/>
             <Card.Title>Security Wise Delivery Position</Card.Title>
             <Client_Page_SecurityWiseDeliveryPos isLoggedIn={this.props.isLoggedIn} searchedItem={this.props.searchedItem} searchInvoked={this.props.searchInvoked}></Client_Page_SecurityWiseDeliveryPos>
                
             </Card.Body>
             </Card>
        </React.Fragment>  );
    }
}
 
export default Stock_Data;