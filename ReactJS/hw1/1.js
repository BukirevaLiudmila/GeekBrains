const loop = (times = 0, callback = null) => {
	if (callback) {
		for (let i = 0; i < times; i++) {
			callback();
		}
	}
};

loop(4, () => {console.log('Hello, it\'s me')});
loop(4);

