const TeamJoinService = new (require('../worker_service/TeamJoinService.js'))();
const models = require('../models');
const { promisify } = require('util');

module.exports = controller => {
  controller.on('team_join', async (bot, message) => {
    bot.reply(message, 'Welcome, <@' + message.user + '>');

    const welcomeText = TeamJoinService.getWelcomeText();
    bot.say({
      text: welcomeText,
      channel: `${message.user}`
    });


    const user = await promisify(bot.api.users.info)({
      token: process.env.AUTH_TOKEN,
      user: message.user
    }).catch(err => {
      console.error(err);
      return {};
    });

    const today = new Date();
    models.user.create({
      name: user.user.real_name,
      slackId: user.user.id,
      enrolledYear: today.getFullYear(),
      disable: false,
      created_at: today,
      updated_at: today
    });
  });
};


