import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>
				<ul className="nav">
  				<li className="nav-item">
    				<a className="nav-link" href="#">Home</a>
  				</li>
					<li className="nav-item">
    				<a className="nav-link" href="#">Login</a>
  				</li>
					<li className="nav-item">
    				<a className="nav-link" href="#">Private</a>
  				</li>
					<li className="nav-item">
    				<a className="nav-link" href="#">My Peeks</a>
  				</li>
				</ul>
      </div>
    );
  }
}

export default Nav;