const BaseManager = require('./BaseManager');
module.exports = class BrainsManager extends BaseManager {
  constructor(inputData, hearContext) {
    super(inputData, hearContext, ['ChannelJoinService', 'BrainsManagerService']);
    this.helpArguments.get = ['agreement', 'curriculum', 'joinmessage'];
    this.helpArguments.mind = ['1', '2', '3', '4', '5', 'any'];
    this.options.push('get', 'mind', 'diary');
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

  diary() {
    const models = require('../models');
    const { promisify } = require('util');

    (async () => {
      const generalChannel = await models.channel.findOne({
        where: {
          name: 'general'
        }
      }).catch(err => {
        console.error(err);
        return { slackId: 0 };
      });

      const result = await promisify(this.bot.api.channels.history)({
        token: process.env.AUTH_TOKEN,
        channel: generalChannel.slackId,
        count: 15
      }).catch(err => {
        console.error(err);
        return {
          messages: ['API ACCESS ERROR!']
        };
      });

      const reactionUsers = result.messages.map(value => {
        if (value.bot_id !== 'B5FV4NUEL') return;
        if (value.attachments[0].title !== 'Brains 活動') return;

        return value.reactions
          .filter(value => value.name === 'join' || value.name === 'late')
          .map(value => value.users);
      });

      //TODO: reactionUsersを1次元にする.
      //TODO: 1次元化された配列からランダムで ID を取得し, テーブルから user を取得
      //TODO: 取得した user をメンションして投稿する

      const replyMessage = 'reply';
      this.reply(this.message, replyMessage);
    })();
  }
};
