const BaseManager = require('./BaseManager');
module.exports = class ConnpassManager extends BaseManager {
  constructor(inputData, hearContext) {
    super(inputData, hearContext, []);
    this.helpArguments.event = ['キーワード'];
    this.options.push('event');
  }

  event() {
    (async () => {
      const query = this.inputData.argument;
      const axios = require('axios');
      const result = await axios.get('https://connpass.com/api/v1/event/', {
        params: {
          keyword: query
        }
      });

      const replyMessage = result.data.events.map(value => {
        return `${value.title} : ${value.event_url}`;
      }).join('\n');

      this.reply(this.message, replyMessage);
    })();
  }

};
