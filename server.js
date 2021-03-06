const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const middlewares = jsonServer.defaults();

const router = jsonServer.router(path.join(__dirname, "db.json"));
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
	console.log("JSON Server is running on", port);
});
