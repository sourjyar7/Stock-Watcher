import React ,{ Component }from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbars from './Components/Navbars';
import Home from './Components/Home';
import About from './Components/About';
import SignUp from './Components/Signup';
import Client_Page from './Components/Client_Page';
import Container from 'react-bootstrap/Container';

class App extends Component {
  state = { showSignUpModal: false,
    showLoginModal: false,
    loginValidated: false,
    signUpValidated: false,
    isLoggedIn: false,
    searchItem: ""  
  }

  componentDidMount(){
    console.log("App")
  }
  
  handleLogout=()=>{
     this.setState({isLoggedIn: false});
  }

  setLoginModal=(x)=>{this.setState({showLoginModal: x})}
  setSignUpModal=(x)=>{this.setState({showSignUpModal: x})}

  handleLoginSubmit = (event) => {
   event.preventDefault();
   
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("validation failed")
        event.stopPropagation();
    }
    else{
      
      this.setState({showLoginModal: false,isLoggedIn: true});
    }
          
   this.setState({loginValidated: true});
   console.log(this.state);
  };        



  handleSignUpSubmit = (event) => {
    event.preventDefault();
    
     const form = event.currentTarget;
     if (form.checkValidity() === false) {
       console.log("validation failed")
         event.stopPropagation();
     }
     else{
       console.log("Submitted")
       this.setState({showSignUpModal: false})
     }
           
    this.setState({signUpValidated: true});
    console.log(this.state);
   };               

   symbolSearch = (data) => {
     console.log("search")
   };
  
  render(){
    
  return (
    <Router>
      <Container fluid id="back">
      <Route render={(props)=><Navbars {...props} isLoggedIn={this.state.isLoggedIn} showLoginModal={this.state.showLoginModal} showSignUpModal={this.state.showSignUpModal} loginValidated={this.state.loginValidated} signUpValidated={this.state.signUpValidated} handleLoginSubmit={this.handleLoginSubmit} handleSignUpSubmit={this.handleSignUpSubmit} setLoginModal={this.setLoginModal} setSignUpModal={this.setSignUpModal} handleLogout={this.handleLogout} searchItem={this.symbolSearch} />}/> 
               <hr className="border m-0"/>
               <br/>
       
      <Route path="/" exact render={(props)=><Home {...props} isLoggedIn={this.state.isLoggedIn} handleSearch={this.symbolSearch}/>}/>
      <Route path="/About" component={About} />
      <Route path="/signup" component={SignUp} />
      <Route path="/client_page" render={(props)=><Client_Page {...props} isLoggedIn={this.state.isLoggedIn} searchItem={this.state.searchItem} />}/>
      </Container>
    
      
    </Router>
    
  );
}
}

export default App;
