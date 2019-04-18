module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: function (request, h) {
			return '<h1>Welcome to Tic-Tac-Toe Server.</h1>';
		},
	},
];
