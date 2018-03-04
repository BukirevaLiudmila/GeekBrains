import { EventEmitter } from 'events';

import {
	FETCH_USERS_START,
	FETCH_USERS_END
} from "../constants/usersConstants";

import dispatcher from '../dispatcher';
import axios from 'axios';

class UserStore extends EventEmitter {
	constructor(props) {
		super(props);

		this.users = [];

		this.fetchUsersStart = this.fetchUsersStart.bind(this);
		this.fetchUsersEnd = this.fetchUsersEnd.bind(this);
		this.change = this.change.bind(this);
		this.handleActions = this.handleActions.bind(this);
	}

	fetchUsersStart() {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				let { data } = response;

				dispatcher.dispatch({
					type: FETCH_USERS_END,
					payload: data
				});
			});
	}

	fetchUsersEnd(users) {
		this.users = users;
		this.change();
	}

	change() {
		this.emit('change', this.users);
	}

	handleActions(action) {
		switch (action.type) {
			case FETCH_USERS_START: {
				this.fetchUsersStart();
				break;
			}
			case FETCH_USERS_END: {
				this.fetchUsersEnd(action.payload);
				break;
			}
		}
	}
}


const uS = new UserStore();
dispatcher.register(uS.handleActions);
export default uS;