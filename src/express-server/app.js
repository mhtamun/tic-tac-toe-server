const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const schema = require('../graphql/schema');

mongoose.connect('mongodb+srv://mhtamun:YiaQiWpe8EgBfM7i@cluster0-wnsy7.mongodb.net/tic-tac-toe?retryWrites=true', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Connection with mongoDB established.');
});

const app = express();

// allow cross-origin requests
app.use(cors());

// bind express with graphql
app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true,
}));

app.listen(4567, () => {
	console.log('Now listening for requests on port 4567');
});