import React, { Component } from 'react';
import LogInButton from '../components/LogInButton';

class Home extends Component {
  render() {
    return (
      <div>
				<div className="jumbotron jumbotron-fluid">
					<h1 class="display-4">Fluid jumbotron</h1>
					<p class="lead">Placeholder for the map view?</p>
				</div>
				{/* If user is logged in, display the New Peek button. Otherwise, display the Log In button. */}
				<LogInButton />
			</div>
    );
  }
}

export default Home;