const TeamJoinService = new (require('../worker_service/TeamJoinService.js'))();

module.exports = controller => {
  controller.on('team_join', (bot, message) => {
    bot.reply(message, 'Welcome, <@' + message.user + '>');

    const welcomeText = TeamJoinService.getWelcomeText();
    bot.say({
      text: welcomeText,
      channel: `${message.user}`
    });
  });
};


