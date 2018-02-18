import React from 'react';

export default class Header extends React.Component {
	render() {
		return <div className="header clearfix">
			<nav>
				<ul className="nav nav-pills pull-right">
					<li role="presentation"><a href="#">Home</a></li>
					<li role="presentation"><a href="#">About</a></li>
					<li role="presentation"><a href="#">Contact</a></li>
				</ul>
			</nav>
			<h3 className="text-muted">Project name</h3>
		</div>
	}
}

