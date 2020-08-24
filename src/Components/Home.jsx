import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Client_Page from './Client_Page';
import Search_Bar from './SearchBar';
import "../Home.css";
import Connect from "./Connect";
import axios from "axios";
import Home_Table from "./Home_Table";

class Home extends Component {
  state={
    nifty50:[],
    searchItem: null,
    searchInvoked: false
  }
  componentDidMount() {
    console.log("Home");
    axios
      .post("http://localhost:5000/equity/index/?s=NIFTY 50")
      .then((resp) => {
        let arr = resp.data.data;
        this.setState({nifty50: arr});
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getWatchlist(event) {
    
    this.setState({searchedItem: "NIFTY 50"});
    console.log(this.state.searchItem)
  }

  

  symbolSearch = (event) => {
    event.preventDefault(); 
    const data=new FormData(event.target)
    if(data.get('symbol') !== ""){
      this.setState({searchItem: data.get('symbol')});
      this.setState({searchInvoked: true});
    }
   };

  render() {
    let content;
    if(this.state.searchItem !== null){
       content=<Client_Page isLoggedIn={this.props.isLoggedIn} searchedItem={this.state.searchItem} searchInvoked={this.state.searchInvoked}></Client_Page>
    }
    else{
      content=<React.Fragment> 
      <Row>
        <Col>
          <Jumbotron className="mt-1 bg-transparent text-light">
            <Container>
              <h3 className="display-4">Stock Watcher</h3>
              <p>
                Find your favourite stocks from the National Stock Exchange
                and create your own Watchlist instantly for free !
              </p>
              <br></br>
              <p>
                {this.props.isLoggedIn ? (
                  <Button
                    variant="outline-primary"
                    onClick={()=>this.setState({searchItem: "NIFTY 50"})}
                  >
                    Go to your Watchlist -->
                  </Button>
                ) : (
                  <Button variant="outline-primary" href="/about">
                    Learn More
                  </Button>
                )}
              </p>
            </Container>
          </Jumbotron>
          <Search_Bar handleSearch={this.symbolSearch}></Search_Bar>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Card bg="transparent" text="light" className="mt-4" border="light">
            <Card.Header className="border">Top Gainers</Card.Header>
            <Card.Body>
              <Home_Table topic="TOP_GAINERS" data={this.state.nifty50}></Home_Table>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card bg="transparent" text="light" className="mt-4" border="light">
            <Card.Header className="border">Top Losers</Card.Header>
            <Card.Body>
              <Home_Table topic="TOP_LOSERS" data={this.state.nifty50}></Home_Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card bg="transparent" text="light" className="mt-4" border="light">
            <Card.Header className="border">Most Active</Card.Header>
            <Card.Body>
              <Home_Table topic="MOST_ACTIVE" data={this.state.nifty50}></Home_Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Connect {...this.props} />
      </React.Fragment>;
    
    }
    return (<React.Fragment>
     {content}
     </React.Fragment>
    );
  }
}

export default Home;
