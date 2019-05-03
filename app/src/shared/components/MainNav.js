import React from "react";

import {LinkContainer} from "react-router-bootstrap"


export const MainNav = () =>
	<>
		<nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
					  aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav">

					<LinkContainer exact to="/">
						<li className="nav-item">
							<a className="nav-link">Home</a>
						</li>
					</LinkContainer>
					<LinkContainer  to="profile">
						<li className="nav-item">
							<a className="nav-link">Profile</a>
						</li>
					</LinkContainer>
				</ul>
			</div>
		</nav>
	</>;
