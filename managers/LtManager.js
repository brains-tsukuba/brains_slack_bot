const BaseManager = require('./BaseManager');
const models = require('../models');
const { promisify } = require('util');
const flatten = require('lodash/fp/flatten');
const shuffle = require('lodash/fp/shuffle');

module.exports = class LtManager extends BaseManager {
  constructor(inputData, hearContext) {
    super(inputData, hearContext, []);
    this.helpArguments.open = [];
    this.helpArguments.close = [];
    this.options.push('open', 'close');
  }

  open() {
    const replayMessage = 'LT発表者はこのメッセージに :join: のリアクションをしてください';
    this.bot.reply(this.message, replayMessage);
  }

  close() {
    (async () => {
      const generalChannel = await models.channel.findOne({
        where: {
          name: 'general'
        }
      });

      const targetMessage = (await promisify(this.bot.api.channels.history)({
        token: process.env.AUTH_TOKEN,
        channel: generalChannel.slackId,
        count: 1
      })).messages[0];

      const reactionUserSlackIds = flatten(targetMessage.reactions
        .filter(reaction => reaction.name === 'join')
        .map(reaction => reaction.users)
      );

      const ltOrder = shuffle(reactionUserSlackIds)
        .map(value => `<@${value}>`)
        .join('\n');
      this.bot.reply(this.message, ltOrder);
    })();
  }

};
