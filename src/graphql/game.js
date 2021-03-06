const graphql = require('graphql');
const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLInt,
	GraphQLString,
} = graphql;

const Game = new GraphQLObjectType({
	name: 'Game',
	fields: () => ({
		id: { type: GraphQLID },
		winner: { type: GraphQLInt }, // player 1 = 1, player 2 = 2
		start_time: { type: GraphQLString }, // format: YYYY-MM-DD HH:mm:ss
		end_time: { type: GraphQLString }, // format: YYYY-MM-DD HH:mm:ss
		player_one_name: { type: GraphQLString },
		player_one_sign: { type: GraphQLString }, // x OR o
		player_two_name: { type: GraphQLString },
		player_two_sign: { type: GraphQLString }, // x OR o
	}),
});

module.exports = Game;
