import React from 'react';
import firebase from "../config/firebase";
import thisuser from "../utils/thisuser.js"
import "../components/style/style.css"

// This component simply provides some fields to test writes to the firestore db

class User extends React.Component {

  // sets the initial state for the user attributes to empty
  constructor() {
        super();
        this.state = {
            bio: "",
            username: ""
        };
    }

    // update state whenever a tracked form field is changed
    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    
    // the function called to add a user to the firestore db  
    addUser = e => {
      // the method thisuser.write is called, passing just the bio text in the
      // "bio" attribute.  The other user information is pulled from firebase
      // knows about the current logged in firebase user in thisuser.js
      thisuser.write({
        bio: this.state.bio,
      });  
    //after the user is added, reset the form field to empty
    this.setState({
        bio: ""
    });
    };
      
  // This is the form rendered 
  render() {
    return (
      <div>
      <p>Add a User Record:</p>
        <form className="form-group" onSubmit={this.addUser}>
        {/* This is the only field included in the form, since the other user information
        will be drawn directly from firebase */}
        <label className="col-form-label" htmlFor="Bio">Bio: </label>
          <input
            type="text"
            name="bio"
            placeholder="Bio"
            onChange={this.updateInput}
            value={this.state.bio}
            className="form-group mx-sm-3 mb-2"
          />
          <button className="btn btn-success"type="submit">Submit</button>
        </form>
        </div>
        );
      }
   }
export default User;