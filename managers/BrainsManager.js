const BaseManager = require('./BaseManager');
module.exports = class BrainsManager extends BaseManager {
  constructor(inputData, hearContext) {
    super(inputData, hearContext, ['TeamJoinService', 'BrainsManagerService']);
    this.helpArguments.get = ['agreement', 'curriculum', 'joinmessage'];
    this.helpArguments.mind = ['1', '2', '3', '4', '5', 'any'];
    this.options.push('get', 'mind');
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
};