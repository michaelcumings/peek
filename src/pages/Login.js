// Dependencies
import React, { Component } from "react";
// import provider and auth that we exported from src/client.js
import fb from "../config/firebase";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import PrivatePage from "./PrivatePage";
import "../App.css"

class Login extends Component {
  state = { isSignedIn: false };
  // Set a UI config. We will redirect on the login options.
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Call back is when the login is successful.
    callbacks: {
      signInSuccess: () => false
    }
  };

  // Call this function once components are mounted.
  componentDidMount = () => {
    fb.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  };
  // StyledFirebaseAuth takes the UI specified above with buttons.
  // isSignedIn will track the state of the user's login status.
  render() {
    return (
      <div className = "App">
        <div className="container-fluid">
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
