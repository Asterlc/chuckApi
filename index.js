const controller = require('./controllers/chuckControllers');
const express = require('express');
const server = express();
const port = 9999 || process.env.port;

server.use(express.json());
server.listen(port, () => {
    console.log(`Running on port ${port}`)
});

server.get('/random', controller.get);
server.get('/categories', controller.getCategories);
// server.get('/random?y?:valu', controller.getByCategory);