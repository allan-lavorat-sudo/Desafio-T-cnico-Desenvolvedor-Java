const restify = require('restify');
const { sequelize } = require('./models');

const server = restify.createServer({
  name: 'agenda-api'
});

// allow CORS from browser frontend
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  return next();
});
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

// register routes
require('./routes/contatoRoutes')(server);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to sync database:', err);
});