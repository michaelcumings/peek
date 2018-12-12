frontend-work-12-11
///Created by Sadiya 
// Point of entry for the application.

import React, { Component } from "react";
// import './App.css';
import Title from "./components/Title";
import Nav from "./components/Nav";
import fb from "./config/firebase";
import PrivatePage from "./pages/PrivatePage";
import Login from './pages/Login'

class App extends Component {
  // Constructor for putting the user in a state.
  constructor(props) {
    super(props);

    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }
  // After the component is done rendering for the first time.
  componentDidMount() {
    this.authListener();
  }
// Called whenever the authentication changes.
  authListener() {
    fb.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem("user");
      }
    });
  }
  render() {
    return (
     <div className = "App">
      <div className="container-fluid">
        <Title></Title>
        <Nav></Nav>
        {this.state.user ? ( <PrivatePage/>) : (<Login />)}
      </div>
     </div>
    );
}
}
 export default App;