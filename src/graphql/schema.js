const graphql = require('graphql');
const _ = require('lodash');

const {
	GraphQLObjectType,
	GraphQLList,
	GraphQLID,
	GraphQLInt,
	GraphQLString,
	GraphQLSchema,
	GraphQLNonNull,
} = graphql;

const Game = require('./game');
const GameModel = require('../models/game');

const rootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		game: {
			type: Game,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return GameModel.findById(args.id);
			},
		},
		games: {
			type: new GraphQLList(Game),
			resolve(parent, args) {
				return GameModel.find();
			}
		},
	},
});

const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addGame: {
			type: Game,
			args: {
				winner: { type: new GraphQLNonNull(GraphQLInt) }, // player 1 = 1, player 2 = 2
				start_time: { type: GraphQLString }, // format: YYYY-MM-DD HH:mm:ss
				end_time: { type: GraphQLString }, // format: YYYY-MM-DD HH:mm:ss
				player_one_name: { type: GraphQLString },
				player_one_sign: { type: new GraphQLNonNull(GraphQLString) }, // x OR o
				player_two_name: { type: GraphQLString },
				player_two_sign: { type: new GraphQLNonNull(GraphQLString) }, // x OR o
			},
			resolve(parent, args) {
				const game = new GameModel({
					winner: args.winner,
					start_time: args.start_time,
					end_time: args.end_time,
					player_one_name: args.player_one_name,
					player_one_sign: args.player_one_sign,
					player_two_name: args.player_two_name,
					player_two_sign: args.player_two_sign,
				});
				return game.save();
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: rootQuery,
	mutation,
});
