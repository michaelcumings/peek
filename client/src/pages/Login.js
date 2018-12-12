////// Created by Sadiya /////
//// THis creates the form and sets the state for the user email / password

import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import fb from '../config/firebase';

class Login extends Component {
    constructor(props) {
      super(props);
      //binding the methods
      this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.signup = this.signup.bind(this);
      this.state = {
        email: '',
        password: ''
      };
    }
  
    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
  
    //Using the method from firebase.js which includes our set up
    //telling it to sign in with email and password
    login(event) {
      event.preventDefault();
      fb.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      }).catch((error) => {
          console.log(error);
        });
    }
  //prevent default action
    signup(event){
      event.preventDefault();
      fb.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
          console.log(error);
        })
    }
    render() {
      return (
         <div className="col-md-6">
         <form>
        <div className="form-group">
         <label htmlFor="exampleInputEmail1">Email address</label>
         <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
         <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
        <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
   </form>
   </div>
      );
    }
  }
  export default Login;