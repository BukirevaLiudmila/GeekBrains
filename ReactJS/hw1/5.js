let url = 'https://jsonplaceholder.typicode.com/users/';

let promiseArray = [];

//AJAX
for (let i = 1; i <= 10; i++) {
	promiseArray.push(new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url + i, true);
		xhr.onreadystatechange = () => {
			if (xhr.status == 200) {
				resolve(JSON.parse(xhr.response));
			} else {
				let error = new Error(xhr.statusText);
				error.code = xhr.status;
				reject(error);
			}
		};
		xhr.send();
	}));
}

//fetch (альтернатива)
/*for (let i = 1; i <= 10; i++) {
	promiseArray.push(fetch(url + 1).then((response) => response.json()));
}*/

Promise.all(promiseArray).then(
	(result) => {
		console.log(result);
	},
	(error) => {
		console.log(error);
	});

