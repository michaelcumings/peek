import React, { Component } from "react";
import fb from "../config/firebase";
import User from "../components/User.js";
import Peek from "../components/Peek.js";
import firebase from "firebase";
import Login from "./Login";

class PrivatePage extends Component {
  //simple button with on Click
  render() {
    const { userID } = this.props;
    return (
      <div className="col-md-6">

    <span>

         <button onClick={() => firebase.auth().signOut()}> Sign Out</button>
         <h1>Welcome - {firebase.auth().currentUser.displayName}</h1>
         <img alt="" width="100px" height="100px"
         src ={firebase.auth().currentUser.photoURL}></img>
         </span>

        <User userID={userID} />
        <p />
        <Peek userID={userID} />
      </div>
    );
  }
}
export default PrivatePage;
