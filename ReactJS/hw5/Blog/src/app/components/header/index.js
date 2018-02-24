import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return <div className="header clearfix">
			<nav>
				<ul className="nav nav-pills pull-right">
					<li role="presentation"><Link to='/'>Home</Link></li>
					<li role="presentation"><Link to='/users'>Users</Link></li>
					<li role="presentation"><Link to='/posts'>Posts</Link></li>
				</ul>
			</nav>
			<h3 className="text-muted">Project name</h3>
		</div>
	}
}

export default Header;
