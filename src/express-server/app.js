const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

// bind express with graphql
app.use('/graphql', graphqlHTTP({
	// pass in a schema property
}));

app.listen(4567, () => {
	console.log('Now listening for requests on port 4567');
});