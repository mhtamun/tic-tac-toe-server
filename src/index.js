const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const mongoose = require('mongoose');

const { graphqlHapi, graphiqlHapi } = require('apollo-server-hapi');
const graphQLSchema = require('./graphql/schema');


mongoose.connect('mongodb://localhost/ticTacToe', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('Connection with mongoDB established.');
});

const server = hapi.server({
	host: 'localhost',
	port: 4567,
});

const init = async () => {

	await server.register([
		inert,
		vision,
		require('./plugins/score'),
		{
			plugin: graphqlHapi,
			options: {
				path: '/graphql',
				graphqlOptions: {
					graphQLSchema
				},
				route: {
					cors: true
				}
			}
		},
		{
			plugin: graphiqlHapi,
			options: {
				path: '/graphiql',
				graphiqlOptions: {
					endpointURL: 'graphql'
				},
				route: {
					cors: true
				},
			}
		}
	]);

	server.route(require('./routes'));

	try {
		await server.start();
		console.log(`Server running at: ${server.info.uri}`);
	} catch (error) {
		console.log(`Error while starting server: ${error.message}`);
	}
};

init();
