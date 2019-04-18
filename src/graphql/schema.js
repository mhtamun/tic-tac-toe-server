const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const { games, Game } = require('./game');

const rootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		game: {
			type: Game,
			args: { id: { type: GraphQLString } },
			resolve(parent, args) {
				return _.find(games, { id: args.id });
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: rootQuery,
});
