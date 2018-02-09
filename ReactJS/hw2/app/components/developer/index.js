import React from 'react';

class Developer extends React.Component {
	render() {
		return <div>
			<dl>
				<dt>Фамилия:</dt>
				<dd>Букирёва</dd>

				<dt>Имя:</dt>
				<dd>Людмила</dd>

				<dt>Отчество:</dt>
				<dd>Александровна</dd>
			</dl>
			<button onClick={
				() => {
					let d = new Date();
					alert(d);
				}
			}>Показать дату</button>
		</div>;
	}
}

export default Developer;