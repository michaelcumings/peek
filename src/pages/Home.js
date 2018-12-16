import React, { Component } from 'react';
import LogInButton from '../components/LogInButton';
import Map from "../components/Maps";

class Home extends Component {
  render() {
    return (
			<div>
					<LogInButton />
					<Map/>
  

				{/* If user is logged in, display the New Peek button. Otherwise, display the Log In button. */}
	
			</div>
    );
  }
}

export default Home;