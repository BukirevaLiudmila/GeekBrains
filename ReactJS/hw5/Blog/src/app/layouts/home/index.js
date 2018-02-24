import React from 'react';
import Header from '../../components/Header';
import Jumbotron from '../../components/Jumbotron';
import Marketing from '../../components/Marketing';
import Footer from '../../components/Footer';

class Home extends React.Component {
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

export default Home;
