const debug = require('debug')('botkit:channel_join');
const ChannelJoinService = new (require('../worker_service/ChannelJoinService.js'))();

module.exports = controller => {
  controller.on('user_channel_join', function(bot, message) {
    bot.reply(message, 'Welcome, <@' + message.user + '>');

    const welcomeText = ChannelJoinService.getWelcomeText();
    bot.say({
        text: welcomeText,
        channel: `${message.user}`
      }
    );
  });
}


