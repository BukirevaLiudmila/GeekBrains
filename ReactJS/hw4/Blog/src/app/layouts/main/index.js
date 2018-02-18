import React from 'react';
import Header from '../../components/header';
import Jumbotron from '../../components/jumbotron';
import Marketing from '../../components/marketing';
import Footer from '../../components/footer';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showArticles: false
		};

		this.onShowArticles = this.onShowArticles.bind(this);
	}

	onShowArticles() {
		this.setState((prevState) => ({
			showArticles: !prevState.showArticles
		}));
	}

	render() {
		return <div className="container">
			<Header/>
			<Jumbotron
				onShowArticles={this.onShowArticles}
				showArticles={this.state.showArticles}
			/>
			{this.state.showArticles && <Marketing/>}
			<Footer/>
		</div>;
	}
}

