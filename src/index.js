const express = require('express');
const config = require('./config');
const Loaders = require('./loaders');
const Logger = require('./loaders/logger');

async function startServer() {
  const app = express();

  await Loaders({ expressApp: app });

  app
    .listen(config.port, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on('error', err => {
      Logger.error(err);
      process.exit(1);
    });
    app.get('/wsd', (req, res) => {
      res.send('Testing 123');
    });
}

startServer();
