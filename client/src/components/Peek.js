import React from 'react';
import firebase from "../config/firebase";

class Peek extends React.Component {
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
    
    addPeek = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const peekRef = db.collection("peeks").add({
      username: this.state.username,
      tag: this.state.tag,
      userID: 5,
      description: this.state.description,
      image: this.state.image,
      location: this.state.location,
      ends: this.state.ends,
      private: this.state.private
    });  
    this.setState({
        username: "",
        tag: "",
        userID: "",
        description: "",
        image: "",
        location: "",
        ends: "",
        private: ""
    });
    };
      
  render() {
    return (
        <form onSubmit={this.addPeek}>
          <input
            type="text"
            name="username"
            placeholder="User name"
            onChange={this.updateInput}
            value={this.state.username}
          />
          <input
            type="text"
            name="tag"
            placeholder="Tag"
            onChange={this.updateInput}
            value={this.state.tag}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={this.updateInput}
            value={this.state.description}
          />
          <input
            type="text"
            name="image"
            placeholder="Image"
            onChange={this.updateInput}
            value={this.state.image}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={this.updateInput}
            value={this.state.location}
          />

        <label>
          Ends?:
          <input
            name="ends"
            type="checkbox"
            checked={this.state.ends}
            onChange={this.updateInput} />
        </label>

          {/* <input
            type="text"
            name="ends"
            placeholder="Ends?"
            onChange={this.updateInput}
            value={this.state.ends}
          /> */}

        <label>
          Private?:
          <input
            name="private"
            type="checkbox"
            checked={this.state.private}
            onChange={this.updateInput} />
        </label>


          {/* <input
            type="text"
            name="private"
            placeholder="Private?"
            onChange={this.updateInput}
            value={this.state.private}
          /> */}

          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default Peek;