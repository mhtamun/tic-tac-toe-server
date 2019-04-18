exports.plugin = {
	name: 'graphql',
	version: '1.0.0',
	register(server, options) {
		server.route(require('./routes'));
	},
};
