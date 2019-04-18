const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('../graphql/schema');

const app = express();

// bind express with graphql
app.use('/graphql', graphqlHTTP({
	schema,
    graphiql: true,
}));

app.listen(4567, () => {
	console.log('Now listening for requests on port 4567');
});