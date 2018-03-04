import React from 'react';
import User from './User';
import { fetchUsers } from '../actions/usersActions';
import UserStore from "../stores/userStore";

export default class UsersList extends React.Component
{
    constructor() {
        super(...arguments);

        this.state = {
            users: []
        };

        this.onUserChange = this.onUserChange.bind(this);
    }

	onUserChange(users) {
		this.setState({
			users
		});
	}

	componentWillMount(){
		UserStore.on('change', this.onUserChange);
	}

	componentDidMount() {
		fetchUsers();
	}

	componentWillUnmount(){
		UserStore.removeListener('change', this.onUserChange);
	}

    render()
    {
        if (!this.state.users.length){
            return null;
        }

        let users = this.state.users.map((user, index) => {
            return <User key={index} {...user}/>
        });

        return (
            <div>
                <h1>Пользователи</h1>
                {users}
            </div>
        );
    }
}