import React, { Component } from 'react';
import fb from '../config/firebase';

class PrivatePage extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

//signout with firebase
    logout() {
        fb.auth().signOut();
    }

    //simple button with on Click
    render() {
        return (
    
<div className = "col-md-6">
            <h1>Welcome to Private Peek Page </h1>
            <button onClick={this.logout}>Logout</button>
        </div>
        );
        }
    
    }
    export default PrivatePage;
    