const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const Score = require('./score');

const rootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		score: {
			type: Score,
			args: { _id: { type: GraphQLString } },
			resolve(parent, args) {
				// TODO logic for serving data
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: rootQuery
});
