import React from 'react';
import ReactDOM from 'react-dom';
import Developer from './components/developer';

class App extends React.Component {
	render() {
		return <div>
			<h1>Главная</h1>
			<Developer/>
		</div>;
	}
}

ReactDOM.render(<App/>,
	document.getElementById('root'));