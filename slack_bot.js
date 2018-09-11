require('dotenv').config();

if (!process.env.TOKEN) {
  // console.dir('Error: Specify token in environment');
  process.exit(1);
}

const Botkit = require('botkit');

const controller = Botkit.slackbot({
  interactive_replies: true,
  json_file_store: './db_bot/',
  debug: false,
}).configureSlackApp(
  {
    clientId: process.env.SLACK_CLIENT_ID,
    clientSecret: process.env.SLACK_CLIENT_SECRET,
    scopes: ['bot']
  }
);

controller.setupWebserver(process.env.PORT, (err, webserver) => {
  controller.createOauthEndpoints(webserver, (err, req, res) => {
    if (err) res.status(500).send(`ERROR: ${err}`);
    else res.send('Success!');
  });

  webserver.get('/', (req, res) => {
    res.send('I\'m fine.');
  });

  controller.createWebhookEndpoints(webserver);
});

controller.spawn({
  token: process.env.TOKEN
}).startRTM();

const normalizedPath = require('path').join(__dirname, 'skills');
require('fs').readdirSync(normalizedPath).forEach(function(file) {
  if (file.slice(-3) === '.js')  require('./skills/' + file)(controller);
});