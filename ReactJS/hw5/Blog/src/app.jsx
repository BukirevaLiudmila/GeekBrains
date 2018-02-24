import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Home from './app/layouts/Home';
import Users from './app/layouts/Users';
import Posts from './app/layouts/Posts';

class App extends React.Component {

	render() {
		return <div>
			{this.props.children}
		</div>;
	}
}

const PageNotFound = (props) => (<h1>Page not found: {props.location.pathname}</h1>);

ReactDOM.render(
	<HashRouter>
		<App>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/users" component={Users} />
				<Route exact path="/posts" component={Posts} />
				<Route component={PageNotFound}/>
			</Switch>
		</App>
	</HashRouter>,
	document.getElementById('root'));