const hapi = require("hapi");
const mongoose = require("mongoose");

const server = hapi.server({
    host: "localhost",
    port: 4567,
});

const init = async () => {
    server.route([
        {
            method: "GET",
            path: "/",
            handler: function (request, h) {
                return '<h1>Welcome to Tic-Tac-Toe Server.</h1>'
            },
        },
        {
            method: "GET",
            path: "/test",
            handler: function (request, h) {
                return 'Welcome to Tic-Tac-Toe Test Server.'
            },
        },
    ]);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();

mongoose.connect("mongodb://localhost/ticTacToeServer");
