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
        <a className="btn btn-primary" href="https://github.com/nicksedillos/peek" role="button">
          Learn more @ GitHub
        </a>
        <hr className="my-4"/>     
      </div>
    );
  }
}
export default Title;