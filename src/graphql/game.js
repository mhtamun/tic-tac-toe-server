const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const games = [
	{
		id: "1",
		winner: 1,
		start_time: "2019-04-18T17:04:48.207Z",
		end_time: "2019-04-18T17:09:48.207Z",
		player_one_name: "Maruf Hossain",
		player_one_sign: "x",
		player_two_name: "Niger Sultana",
		player_two_sign: "o",
	},
	{
		id: "2",
		winner: 2,
		start_time: "2019-04-18T17:10:48.207Z",
		end_time: "2019-04-18T17:15:48.207Z",
		player_one_name: "Maruf Hossain",
		player_one_sign: "x",
		player_two_name: "Niger Sultana",
		player_two_sign: "o",
	}
];

const Game = new GraphQLObjectType({
	name: 'Game',
	fields: () => ({
		id: { type: GraphQLString },
		winner: { type: GraphQLInt }, // player 1 = 1, player 2 = 2
		start_time: { type: GraphQLString }, // format: YYYY-MM-DD HH:mm:ss
		end_time: { type: GraphQLString }, // format: YYYY-MM-DD HH:mm:ss
		player_one_name: { type: GraphQLString },
		player_one_sign: { type: GraphQLString }, // x OR o
		player_two_name: { type: GraphQLString },
		player_two_sign: { type: GraphQLString }, // x OR o
	}),
});

module.exports = {games, Game};
