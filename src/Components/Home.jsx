import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Table from "react-bootstrap/Table";
import "../Home.css";
import Connect from "./Connect";
import axios from "axios";
import Home_Table from "./Home_Table";

class Home extends Component {
  state={
    nifty50:[]
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

  getWatchlist = () => {
    this.props.history.push("/client_page");
  };

  getClientPage = () => {
    this.props.history.push("/client_page");
  };

  render() {
    return (
      <React.Fragment>
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
                      onClick={this.getWatchlist}
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
            <Form inline>
              <FormControl
                type="text"
                placeholder="Enter company name or symbol. . . ."
                className="w-75 bg-transparent font-italic"
              />
              <Button variant="outline-warning" className="ml-md-4 w-auto" onClick={()=>this.props.handleSearch}>
                Search
              </Button>
            </Form>
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
      </React.Fragment>
    );
  }
}

export default Home;
