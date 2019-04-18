const graphql = require('graphql');
const _ = require('lodash');

const {
	GraphQLObjectType,
	GraphQLList,
	GraphQLID,
	GraphQLSchema,
} = graphql;

const { Game, games } = require('./game');

const rootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		game: {
			type: Game,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return _.find(games, { id: args.id });
			},
		},
		games: {
			type: new GraphQLList(Game),
			resolve(parent, args) {
				return _.pullAll(games, []);
			}
		},
	},
});

module.exports = new GraphQLSchema({
	query: rootQuery,
});
