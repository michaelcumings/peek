import React, { Component } from 'react';
import "../Title/style.css"
import LogInButton from '../LogInButton/index';
import firebase from "firebase";

// <p className="lead">
// This app allows you to share information about anything and everything. All you have to do is enable location settings, add images, tags and descriptions.
// </p>
class Title extends Component {
  render() {

    return (
      <div className="container title"> 
        <h1 className="text-center display-4">
          PEEK!
        </h1>
     
        <a className="btn btn-primary" href="https://github.com/nicksedillos/peek" role="button">
          Learn more @ GitHub
        </a>
        <hr className="my-4"/>     
      </div>
    );
  }
}

export default Title;