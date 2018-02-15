import React from 'react';
import ReactDOM from 'react-dom';
import Main from './app/layouts/main/index';
import './app/styles/main.css';

class App extends React.Component {
	render() {
		return <Main/>;
	}
}

ReactDOM.render(<App/>,
	document.getElementById('root'));