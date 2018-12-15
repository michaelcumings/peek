import React from 'react';
import firebase from "../config/firebase";
import thisuser from "../utils/thisuser.js"

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
      thisuser.write({
        bio: this.state.bio,
      });  
    // e.preventDefault();
    // const db = firebase.firestore();
    // db.settings({
    //   timestampsInSnapshots: true
    // });
    // const userRef = db.collection("users").add({
    //   userID: firebase.auth().currentUser.uid,
    //   username: this.state.username,
    //   bio: this.state.bio
    // });  
    this.setState({
        bio: ""
    });
    };
      
  render() {
    return (
      <div>
      <p>Add a User Record:</p>
        <form onSubmit={this.addUser}>
          {/* <input
            type="text"
            name="username"
            placeholder="User name"
            onChange={this.updateInput}
            value={this.state.username}
          /> */}
          <input
            type="text"
            name="bio"
            placeholder="Bio"
            onChange={this.updateInput}
            value={this.state.bio}
          />
          <button type="submit">Submit</button>
        </form>
        </div>
        );
      }
   }
export default User;