import React, { Component } from 'react';
import "../Title/style.css"
import LogInButton from '../LogInButton/index';
import firebase from "firebase";

class Title extends Component {
  render() {
    return (
      <div className="titleContainer"> 
        <h1 className="text-center display-4">
          PEEK!
        </h1>
        <hr className="my-4"/>     
      </div>
    );
  }
}
export default Title;