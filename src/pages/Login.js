import React, { Component } from "react";
// import provider and auth that we exported from src/client.js
import fb from "../config/firebase";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import PrivatePage from "./PrivatePage";
import Title from "../components/Title";
import Nav from "../components/Nav";

class Login extends Component {
  state = { isSignedIn: false };
  //set a ui config, we will redirect on the login options
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    //call back is when the login is success
    callbacks: {
      signInSuccess: () => false
    }
  };

  //call this function once components are mounted
  componentDidMount = () => {
    fb.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  };
  //StyledFirebaseAuth takes the ui specified above with buttons
  //isSignedIn will track the state of the users login status
  render() {
    return (
      <div className = "App">
      <div className="container-fluid">
        <Title></Title>
      {this.state.isSignedIn ?(
        ( <PrivatePage/> )
      )
        :(
          <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
        ) 
      }
      </div>
      </div>
    )
  }
}
export default Login;
