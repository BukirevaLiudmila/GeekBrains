import React from 'react';
import axios from 'axios';
import User from './User';

export default class UsersList extends React.Component
{
    constructor()
    {
        super(...arguments);

        this.state = {
            users: []
        };

        //Получение пользователей
        axios
            //.get('https://jsonplaceholder.typicode.com/users')
            .get('http://localhost:8082/api/users')
            .then((response) => {
                let { data } = response;
                this.setState({
                    users: data
                });
            });
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