import React from 'react';
import { Link } from "react-router-dom";


class Nav extends React.Component {
	render() {
		return (
			
			<ul className="nav nav-tabs">
			<li className="nav-item">
				<Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
					Public peeks
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/Login"
					className={window.location.pathname === "/Login" ? "nav-link active" : "nav-link"}
				>
				Peek it
				</Link>
			</li>

		<li className="nav-item">
		<Link
			to="/UserPeeks"
			className={window.location.pathname === "/UserPeeks" ? "nav-link active" : "nav-link"}
		>
		My Peeks
		</Link>
		</li>
			
		</ul>
		);
	}
}

export default Nav;
