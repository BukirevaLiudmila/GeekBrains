import React from 'react';
import Header from '../../components/header';
import Jumbotron from '../../components/jumbotron';
import Marketing from '../../components/marketing';
import Footer from '../../components/footer';

export default class Main extends React.Component {
	render() {
		return <div className="container">
			<Header/>
			<Jumbotron/>
			<Marketing/>
			<Footer/>
		</div>;
	}
}