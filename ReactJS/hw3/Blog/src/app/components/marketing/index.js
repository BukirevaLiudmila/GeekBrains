import React from 'react';
import Promo from '../promo';

export default class Marketing extends React.Component {
	render() {
		return <div className="row marketing">
				<div className="col-lg-6">
					<Promo/>
					<Promo/>
					<Promo/>
				</div>
				<div className="col-lg-6">
					<Promo/>
					<Promo/>
					<Promo/>
				</div>
			</div>;
	}
}

