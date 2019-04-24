const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const schema = require('../graphql/schema');

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true });

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

app.listen(process.env.PORT, () => {
	console.log(`Now listening for requests on port ${process.env.PORT}`);
});
