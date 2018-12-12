import React from 'react';
import firebase from "../config/firebase";

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            bio: "",
            username: ""
        };
    }

    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    
    addUser = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("users").add({
      username: this.state.username,
      bio: this.state.bio
    });  
    this.setState({
        username: "",
        bio: ""
    });
    };
      
  render() {
    return (
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="username"
            placeholder="User name"
            onChange={this.updateInput}
            value={this.state.username}
          />
          <input
            type="text"
            name="bio"
            placeholder="Bio"
            onChange={this.updateInput}
            value={this.state.bio}
          />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default User;