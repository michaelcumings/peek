import React, { Component } from "react";
// import Map from "../components/Maps";
import firebase from "firebase";
import allpeeks from "../utils/allpeeks";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/list";
import { Link } from "react-router-dom";

class UserPeeks extends Component {
  state = {
    peeks: [],
    tag: "",
    description: "",
    image: "",
    Location: ""
  };
  componentDidMount() {
    this.loadPeeks();
  }
  loadPeeks = () => {
    allpeeks.query("username", "==", firebase.auth().currentUser.displayName)
      .then((snapshot) => {
        this.setState({ peeks: snapshot });
      });
  };
  render() {
    const peeks = [];

    this.state.peeks.forEach(doc => peeks.push(doc.data()));

    console.log("PEEKS", peeks);

    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <p className = "author">
              All Peeks by: {firebase.auth().currentUser.displayName}{" "}
              <img
                class="profilePic"
                src={firebase.auth().currentUser.photoURL}
                alt="User profile"
              />
            </p>
          </div>

          <Col size="md-6">
            {peeks.length ? (
              <List>
                {peeks.map(peek => (
                  <ListItem key={peek.id}>
                    <Link to={"/UserPeeks/" + peek.id}> </Link>
                      <li>Tag: {peek.tag}</li>
                     <li>description: {peek.description}</li>
                     <li>Location: {peek.location.lat}, {peek.location.lng}</li>
                     <img height= "150px" src= {peek.image} />
                    <div>-----------------------</div>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </div>
      </div>
    );
  }
}

export default UserPeeks;
