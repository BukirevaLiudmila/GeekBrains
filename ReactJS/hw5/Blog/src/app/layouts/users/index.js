import React from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import User from '../../components/User';

class Users extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			users: []
		};
	}

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				let { data } = response;
				this.setState({
					users: data
				});
			});
	}

	render() {
		if (!this.state.users.length) {
			return null;
		}

		let users = this.state.users.map((user, index) => {
			return <User key={index} {...user}/>
		});

		return <div className="container">
			<Header/>
			<div>
				<h1>Пользователи</h1>
				{users}
			</div>
			<Footer/>
		</div>;
	}
}

export default Users;
