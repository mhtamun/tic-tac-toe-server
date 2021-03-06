const service = require('./services');
const Joi = require('joi');
const Relish = require('relish')({
	messages: {
		'data.name': 'Tic-Tac-Toe',
	},
});

module.exports = [
	{
		method: 'POST',
		path: '/api/v1/games',
		handler: (request, h) => {
			return service.addGame(request.payload);
		},
		options: {
			tags: ['api'],
			description: 'Insert game',
			validate: {
				payload: {
					winner: Joi.number().integer().required(),
					start_time: Joi.string().allow('', null).optional(),
					end_time: Joi.string().allow('', null).optional(),
					player_one_name: Joi.string().allow('', null).optional(),
					player_two_name: Joi.string().allow('', null).optional(),
					player_one_sign: Joi.string().allow('', null).optional(),
					player_two_sign: Joi.string().allow('', null).optional(),
				},
				options: {
					// if true then return with first error, if false then return with all the error
					abortEarly: false,
				},
				failAction: Relish.failAction,
			},
		},
	},
	{
		method: 'GET',
		path: '/api/v1/games',
		handler: (request, h) => {
			return service.getGames();
		},
		options: {
			tags: ['api'],
			description: 'Read games',
		},
	},
];
