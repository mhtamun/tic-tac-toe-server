const hapi = require("hapi");
const inert = require('inert');
const vision = require('vision');
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ticTacToeServer", {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(`Connection with mongoDB established.`);
});

const server = hapi.server({
    host: "localhost",
    port: 4567,
});

const init = async () => {
    await server.register([
        inert,
        vision,
        require('./plugins/score'),
    ]);

    server.route([
        {
            method: "GET",
            path: "/",
            handler: function (request, h) {
                return '<h1>Welcome to Tic-Tac-Toe Server.</h1>'
            },
        },
    ]);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();
