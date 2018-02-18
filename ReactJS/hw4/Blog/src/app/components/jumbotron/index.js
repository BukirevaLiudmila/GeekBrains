import React from 'react';

export default class Jumbotron extends React.Component {
	render() {
		const {onShowArticles, showArticles} = this.props;
		return <div className="jumbotron">
			<h1>Jumbotron heading</h1>
			<p className="lead">
				Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
			<p>
				<button
					className={`btn btn-lg btn-success ${showArticles ? 'deep-green' : ''}`}
					onClick={onShowArticles}
				>
					{showArticles ? 'Hide' : 'Show'}
				</button>
			</p>
		</div>;
	}
}

