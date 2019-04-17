const service = require("./services");
const Joi = require("joi");
const Relish = require("relish")({
    messages: {
        "data.name": "Tic-Tac-Toe",
    },
});

exports.plugin = {
    name: 'score',
    version: '1.0.0',
    register(server, options) {
        server.route([
                {
                    method: 'POST',
                    path: '/api/v1/scores',
                    handler: (request, h) => {
                        return service.addScore(request.payload);
                    },
                    options: {
                        tags: ['api'],
                        description: 'Insert score',
                        validate: {
                            payload: {
                                winner: Joi.number().integer().required(),
                                start_time: Joi.string().allow(),
                                end_time: Joi.string().allow(),
                                player_one_name: Joi.string().allow(),
                                player_two_name: Joi.string().allow(),
                                player_one_sign: Joi.string().allow(),
                                player_two_sign: Joi.string().allow(),
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
                    path: '/api/v1/scores',
                    handler: (request, h) => {
                        return service.getScores();
                    },
                    options: {
                        tags: ['api'],
                        description: 'Read scores',
                    },
                },
            ]
        );
    },
};
