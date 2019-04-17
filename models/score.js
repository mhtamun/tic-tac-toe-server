const mongoose = require("mongoose");

const scoreModel = mongoose.model("score", {
    winner: Number, // player 1 = 1, player 2 = 2
    startTime: String, // format: YYYY-MM-DD HH:mm:ss
    endTime: String, // format: YYYY-MM-DD HH:mm:ss
    playerOneName: String,
    playerTwoName: String,
});
