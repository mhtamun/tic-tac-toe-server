const boom = require('boom');
const _ = require('lodash');
const Score = require("../../models/score");

async function addScore(payload) {
    try {
        const score = new Score(payload);
        return await score.save();
    } catch (error) {
        console.log(error);

        return boom.badImplementation(error);
    }
}

async function getScores(payload) {
    try {
        return await Score.find().exec();
    } catch (error) {
        console.log(error);

        return boom.badImplementation(error);
    }
}

module.exports = {
    addScore,
    getScores,
};
