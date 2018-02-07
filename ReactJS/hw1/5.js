let url = 'https://jsonplaceholder.typicode.com/users/';

let promiseArray = [];
let promiseResults = [];

for (let i = 1; i <= 10; i++) {
	promiseArray.push(new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url + i, true);
		xhr.onreadystatechange = () => {
			if (xhr.status == 200) {
				promiseResults.push(JSON.parse(xhr.response));
				resolve(promiseResults);
			} else {
				let error = new Error(xhr.statusText);
				error.code = xhr.status;
				reject(error);
			}
		};
		xhr.send();
	}));
}

Promise.all(promiseArray).then(
	(result) => {
		console.log(result);
	},
	(error) => {
		console.log(error);
	});