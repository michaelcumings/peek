///Created by Sadiya 
///Point of entery for the application

import React, { Component } from 'react';
// import './App.css';
import fb from './config/firebase';
import PrivatePage from './pages/PrivatePage';
import Login from './pages/Login'
class App extends Component {
  //constructor for putting the user in a state
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }
  //After the component is done rendering for the first time 
  componentDidMount() {
    this.authListener();
  }
//called whenever the authentication changes 
  authListener() {
    fb.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }
  render() {
    //Check if the user is logged in. 
    //if this.state.user is true render Home otherwise take them to login page
    return (
     <div className = "App">
     {this.state.user ? ( <PrivatePage/>) : (<Login />)}
     </div>
    );
}
}
 export default App;