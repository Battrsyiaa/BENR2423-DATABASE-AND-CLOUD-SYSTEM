const MongoClient = require("mongodb").MongoClient;
const User = require("./user")

describe("User Account", () => {
	let client;
	beforeAll(async () => {
		client = await MongoClient.connect(
			"mongodb+srv://m001-student:m001-mongodb-basics@sandbox.yn2d1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			{ useNewUrlParser: true },
		);
		User.injectDB(client);
	})

	afterAll(async () => {
		await client.close();
	})

	test("New user registration", async () => {
		const res = await User.register("test", "test")
		expect().toBe()
	})

	test("Duplicate username", async () => {
		const res = await User.register("test", "test")
		expect().toBe()
	})

	test("User login invalid username", async () => {
		const res = await User.login("test", "test")
		expect().toBe()
	})

	test("User login invalid password", async () => {
		const res = await User.login("test", "test")
		expect().toBe()
	})

	test("User login successfully", async () => {
		const res = await User.login("test", "test")
		expect(res).toBe(true)
	})
});