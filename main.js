const MongoClient = require("mongodb").MongoClient;

const User = require("./user");


MongoClient.connect(
	"mongodb+srv://m001-student:m001-mongodb-basics@sandbox.yn2d1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{ useNewUrlParser: true },
).catch(err => {
	console.error(err.stack)
	process.exit(1)
}).then(async client => {
	console.log('Connected to MongoDB');
	User.injectDB(client);
})
