import React from 'react';
import {Link} from 'react-router';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Footer from '../pages/Footer';

export default class Layout extends React.Component {

    constructor() {
        super(...arguments);
        this.brand = 'ReactJS Blog';
    }

    isActive(href) {
        return window.location.pathname === href;
    }

    render() {
        return (
            <div>
                <Menu brand={this.brand}>
                    <MenuItem href="/" active={this.isActive('/')}>Главная</MenuItem>
                    <MenuItem href="/users" active={this.isActive('/users')}>Пользователи</MenuItem>
                    <MenuItem href="/comments" active={this.isActive('/comments')}>Комментарии</MenuItem>
                </Menu>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {this.props.children}
                            <Link to="/errorpage">Перейти на страницу с ошибкой</Link>
                        </div>
                    </div>
                </div>
                <Footer>&copy; 2018</Footer>
            </div>
        );
    }
}