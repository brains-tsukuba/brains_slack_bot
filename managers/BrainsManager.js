const BaseManager = require('./BaseManager');
const Sequelize = require('sequelize');
const models = require('../models');
const { promisify } = require('util');
const shuffle = require('lodash/fp/shuffle');

module.exports = class BrainsManager extends BaseManager {
  constructor(inputData, hearContext) {
    super(inputData, hearContext, ['TeamJoinService', 'BrainsManagerService']);
    this.helpArguments.get = ['agreement', 'curriculum', 'joinmessage'];
    this.helpArguments.mind = ['1', '2', '3', '4', '5', 'any'];
    this.helpArguments.diary = ['現在このオプションに引数はありません'];
    this.options.push('get', 'mind', 'diary');
  }

  REPLY_MESSAGES_FOR_GET_METHOD(target) {
    const joinmessage = this.modules.TeamJoinService.getWelcomeText();
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
    const { gte } = Sequelize.Op;
    const { GOOGLE_CALENDAR_BOT_ID, BRAINS_BOT_ID } = require('../const_values/text.js');

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
        count: 50
      }).catch(err => {
        console.error(err);
        return {
          messages: ['API ACCESS ERROR!']
        };
      });

      const targetMessage = result.messages.filter(value => value.bot_id === GOOGLE_CALENDAR_BOT_ID && value.attachments[0].pretext === 'Event starting in 1 day:')[0] ;
      const reactionUserSlackIds = targetMessage.reactions
        .filter(value => value.name === 'join' || value.name === 'late')
        .map(value => value.users)
        .reduce((previous, current) => {
          previous.push(...current);
          return previous;
        }, []);

      const latestDiaryUserText = result.messages
        .find(value => value.bot_id === BRAINS_BOT_ID && /^今日の日報を書く人は,/.test(value.text) === true).text;
      const latestDiaryUser = latestDiaryUserText.match(/[A-Z0-9]+/g)[0];
      const exitLatestDiaryUser = reactionUserSlackIds.find(v => v === latestDiaryUser);
      const candidateUserSlackIds = reactionUserSlackIds.filter(v => v !== exitLatestDiaryUser);

      const targetSlackIds = await models.user.findAll({
        attributes: ['slackId'],
        where: {
          slackId: candidateUserSlackIds,
          enrolledYear: {
            [gte]: (new Date().getFullYear() - 1)
          }
        }
      });
      const targetUser = shuffle(targetSlackIds.map(v => v.slackId)).concat([exitLatestDiaryUser]).shift() || shuffle(reactionUserSlackIds).shift();

      this.reply(this.message, `今日の日報を書く人は, <@${targetUser}>です.`);
    })();

  }
};
