import React from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Post from '../../components/Post';

class Posts extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: []
		};
	}

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((response) => {
				let { data } = response;
				this.setState({
					posts: data
				});
			});
	}

	render() {

		if (!this.state.posts.length) {
			return null;
		}

		let posts = this.state.posts.map((post, index) => {
			return <Post key={index} {...post}/>
		});

		return <div className="container">
			<Header/>
			<div>
				<h1>Посты</h1>
				{posts}
			</div>
			<Footer/>
		</div>;
	}
}

export default Posts;

