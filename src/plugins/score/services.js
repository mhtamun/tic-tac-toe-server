const Score = require("../../models/score");

async function addScore(payload) {
    const score = new Score(payload);
    return await score.save();
}

async function getScores(payload) {
    return await Score.find().exec();
}

module.exports = {
    addScore,
    getScores,
};
