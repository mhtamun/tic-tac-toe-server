const boom = require('boom');
const _ = require('lodash');
const Game = require('../../../models/game');

async function addGame(payload) {
	try {
		const game = new Game(payload);
		return await game.save();
	} catch (error) {
		console.log(error);

		return boom.badImplementation(error);
	}
}

async function getGames(payload) {
	try {
		return await Game.find().exec();
	} catch (error) {
		console.log(error);

		return boom.badImplementation(error);
	}
}

module.exports = {
	addGame,
	getGames,
};
