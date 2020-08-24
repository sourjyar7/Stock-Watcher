import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Signup from './Signup';
import Login from './Login';
class Navbars extends Component {
  componentDidUpdate(){
    console.log(this.props.isLoggedIn)
    
  }
   
    render() { 
        return (<React.Fragment>
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" sticky="top">
        <Navbar.Brand onClick={()=>{this.props.history.push('/')}}>Stock-Watcher</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={()=>{this.props.history.push('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{this.props.history.push('/about')}}>About</Nav.Link>
            <NavDropdown title="Instrument" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Equity</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Equity Derivatives</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Currency Derivatives</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Commodity Derivatives</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            { !this.props.isLoggedIn ? <><Nav.Link onClick={()=>this.props.setLoginModal(true)}>Login</Nav.Link><Nav.Link eventKey={2} onClick={()=>this.props.setSignUpModal(true)}>Sign Up</Nav.Link></> : <Nav.Link onClick={this.props.handleLogout}>Logout</Nav.Link> }  
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
      <Signup id="signUpModal" show={this.props.showSignUpModal} onHide={()=>this.props.setSignUpModal(false)} validated={this.props.signUpValidated} handleSubmit={this.props.handleSignUpSubmit}></Signup>
      <Login id="loginModal" show={this.props.showLoginModal} onHide={()=>this.props.setLoginModal(false)} validated={this.props.loginValidated} handleSubmit={this.props.handleLoginSubmit}></Login>
      </React.Fragment>
      );
    }
}
 
export default Navbars;