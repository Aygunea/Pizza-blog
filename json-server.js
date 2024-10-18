const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors()); // CORS'u etkinleştir
server.use(middlewares);
server.use(router);

const port = 3005;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
