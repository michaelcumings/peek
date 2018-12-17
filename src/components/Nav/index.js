import React from 'react';
import { Link } from "react-router-dom";

class Nav extends React.Component {
	render() {
		return (
			<ul className="nav nav-tabs">
			<li className="nav-item">
				<Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
					Home
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/Login"
					className={window.location.pathname === "/Login" ? "nav-link active" : "nav-link"}
				>
				Private Page
				</Link>
			</li>

		<li className="nav-item">
		<Link
			to="/UserPeeks"
			className={window.location.pathname === "/UserPeeks" ? "nav-link active" : "nav-link"}
		>
		User Peeks
		</Link>
	</li>
			</ul>
		);
	}
}

export default Nav;
