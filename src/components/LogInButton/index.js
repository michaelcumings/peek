// Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Button which will direct user to the Login page.
function LogInButton() {
  return (
		<Link to="/Login">
			<button type="button" class="btn btn-primary">Log In</button>
		</Link>
  );
};

export default LogInButton;
