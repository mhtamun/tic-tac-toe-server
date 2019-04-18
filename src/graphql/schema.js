const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const Game = require('./game');

const rootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		game: {
			type: Game,
			args: { id: { type: GraphQLString } },
			resolve(parent, args) {
				// TODO logic for serving data
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: rootQuery,
});
