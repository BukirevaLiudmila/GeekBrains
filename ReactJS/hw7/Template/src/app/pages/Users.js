import React from 'react';
import UsersList from '../components/UsersList';

import { connect } from 'react-redux';
import { fetchUsers } from "../actions/usersActions";

@connect((store) => {
    return {
        users: store.users.users,
        is_fetching: store.users.is_fetching
    }
})
export default class Users extends React.Component
{
    constructor(props)
    {
        super(props);
        let toDispatch = fetchUsers();
        this.props.dispatch(toDispatch)
    }

    render()
    {
        return (
            <div>
                {
                    (!this.props.children) ?
                        (
                        this.props.is_fetching ?
                            'Pending...' :
                        (<UsersList/>)
                        )
                        :
                        (this.props.children)
                }
            </div>
        );
    }
}