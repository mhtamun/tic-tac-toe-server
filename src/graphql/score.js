const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const Score = new GraphQLObjectType({
	name: 'Score',
	fields: () => ({
		_id: { type: GraphQLString },
		winner: { type: GraphQLInt }, // player 1 = 1, player 2 = 2
		start_time: { type: GraphQLString }, // format: YYYY-MM-DD HH:mm:ss
		end_time: { type: GraphQLString }, // format: YYYY-MM-DD HH:mm:ss
		player_one_name: { type: GraphQLString },
		player_two_name: { type: GraphQLString },
		player_one_sign: { type: GraphQLString }, // x OR o
		player_two_sign: { type: GraphQLString }, // x OR o
	}),
});

module.exports = Score;
