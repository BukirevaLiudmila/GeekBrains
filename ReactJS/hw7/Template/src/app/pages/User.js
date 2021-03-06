import React from 'react';
import axios from 'axios';
import UserProfile from '../components/User';

export default class User extends React.Component
{
    constructor()
    {
        super(...arguments);

        this.state = {
            user: null
        };

        axios
            .get(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
            .then((response) => {
                let { data } = response;

                this.setState({
                    user: data
                });
            });
    }

    render()
    {
        return (
            <div>
                {this.state.user && <UserProfile {...this.state.user} />}
            </div>
        );
    }
}