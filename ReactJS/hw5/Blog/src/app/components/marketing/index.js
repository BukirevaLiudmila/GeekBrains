import React from 'react';
import Promo from '../promo';

class Marketing extends React.Component {
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

export default Marketing;
