const BaseManager = require('./BaseManager');
module.exports = class BrainsManager extends BaseManager {
  constructor(inputData, hearContext) {
    super(inputData, hearContext, ['ChannelJoinService', 'BrainsManagerService']);
    this.helpArguments.get = ['agreement', 'curriculum', 'joinmessage'];
    this.helpArguments.mind = ['1', '2', '3', '4', '5', 'any'];
    this.helpArguments.participation = ['daily'];
    this.options.push('get', 'mind', 'participation');
  }

  REPLY_MESSAGES_FOR_GET_METHOD(target) {
    const joinmessage = this.modules.ChannelJoinService.getWelcomeText();
    const messages = {
      agreement: 'https://github.com/brains-tsukuba/Info-and-Rules',
      curriculum: 'https://github.com/brains-tsukuba/Info-and-Rules/blob/master/documents/curriculum.md',
      joinmessage: joinmessage,
    };

    if (target in messages) {
      return messages[target];
    }

    return '引数が適切ではありません.';
  }

  get() {
    const inputData = this.inputData.argument;
    const message = this.REPLY_MESSAGES_FOR_GET_METHOD(inputData);

    this.reply(this.message, message);
  }

  mind() {
    const attachments = (arg => {
      if (arg === 'any') {
        const actions = this.modules.BrainsManagerService.getBrainsMindButtons();
        return [{
          title: 'Brains Mind',
          fallback: 'fallback',
          callback_id: 'brains_mind_any',
          attachment_type: 'default',
          actions
        }];
      }
      else {
        const mind = this.modules.BrainsManagerService.getBrainsMind(arg);
        return [{
          title: mind,
          pretext: `Brains Mind #${arg}`,
          attachment_type: 'default',
          color: '#2eb886'
        }];
      }
    })(this.inputData.argument);

    this.reply(this.message, { attachments });
  }

  participation() {

    // const channelId = 'C63T11MT7'; //todo: use sequelize.
    const channelId = 'C9QMTFJ77'; //todo: use sequelize.
    const emojiNames = ['join', 'job', 'baito', 'kensa-', 'asobitai', 'yamai'];

    const {promisify} = require('util');
    (async () => {
      const result = await promisify(this.bot.api.channels.history)({
        token: process.env.LEGACY_TOKEN,
        channel: channelId
      }).catch(handleError);
      const ts = await result.messages.filter(message => message.text.includes('participation'))[0].ts;

      await Promise.all(emojiNames.map(async name => await promisify(this.bot.api.reactions.add)({
        token: process.env.LEGACY_TOKEN,
        channel: channelId,
        // channel: bottestChannelId,
        timestamp: ts,
        name: name
      })));

    })();

    this.reply(this.message, 'reaction added');

    function handleError(err) {
      this.reply(this.message, err);
    }

  }

};
