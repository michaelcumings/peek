import React, { Component } from 'react';
import Map from "../components/Maps";

class Home extends Component {
  render() {
    return (
			<div>
			<button type="button" className="btn btn-primary">New Peek</button>
			<Map/>
			</div>
    );
  }
}

export default Home;