const mongoose = require("mongoose");

const schema = mongoose.Schema({
    winner: Number, // player 1 = 1, player 2 = 2
    start_time: String, // format: YYYY-MM-DD HH:mm:ss
    end_time: String, // format: YYYY-MM-DD HH:mm:ss
    player_one_name: String,
    player_two_name: String,
    player_one_sign: String, // x OR o
    player_two_sign: String, // x OR o
});

const Score = mongoose.model('Score', schema);

module.exports = Score;


