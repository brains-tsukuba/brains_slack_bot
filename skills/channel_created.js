const models = require('../models');

module.exports = controller => {
  controller.on('channel_created', async (bot, message) => {
    const channel = message.channel;
    await models.channel.create({
      name: channel.name,
      slackId: channel.id
    }).catch(error => {
      return error;
    });
  });
};