import React from 'react';

class Post extends React.Component {
	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">
						{this.props.title}
					</h3>
				</div>
				<div className="panel-body">
					<p>{this.props.body}</p>
				</div>
			</div>
		);
	}
}

export default Post;
