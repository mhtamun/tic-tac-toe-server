const Lab = require('lab');
const Code = require('code');
const Hapi = require('hapi');

const routes = require('../routes');
const scoreRoutes = require('../plugins/score/routes');

// Test files must require the lab module, and export a tests script
const lab = (exports.lab = Lab.script());

// shortcuts from lab
const {
	beforeEach, after, describe, it,
} = lab;

// shortcuts from code
const expect = Code.expect;

describe('inject request with server.inject,', () => {
	it('inject a request', async () => {
		const server = new Hapi.Server();

		server.route(routes);

		const injectOptions = {
			method: 'GET',
			url: '/',
		};

		const response = await server.inject(injectOptions);

		expect(response.statusCode).to.equal(200);
		expect(response.payload).to.equal('<h1>Welcome to Tic-Tac-Toe Server.</h1>');
	});
});

describe('Add score,', () => {
	const server = new Hapi.Server();
	server.route(scoreRoutes);

	it('returns bad request when winner is not given', async () => {
		const injectOptions = {
			method: 'POST',
			url: '/api/v1/scores',
			payload: {
				player_one_sign: 'x',
				player_two_sign: 'o',
			},
		};

		const response = await server.inject(injectOptions);

		expect(response.statusCode).to.equal(400);
	});

	it('returns bad request when winner is sent as alphabets', async () => {
		const injectOptions = {
			method: 'POST',
			url: '/api/v1/scores',
			payload: {
				winner: 'hey',
			},
		};

		const response = await server.inject(injectOptions);

		expect(response.statusCode).to.equal(400);
	});
});
