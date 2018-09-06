const BaseManager = require('./BaseManager');
module.exports = class RandomManager extends BaseManager {
  constructor(inputData, hearContext) {
    super(inputData, hearContext, []);
    this.helpArguments.num = ['数字'];
    this.options.push('num');
  }

  num() {
    const getRandomNumberStringFromString = string_number => {
      return String(Math.floor(Math.random() * Math.floor(Number(string_number))));
    };

    const random_num_str = getRandomNumberStringFromString(this.inputData.argument);
    const replyMessage = [`0から${this.inputData.argument}で選びます。`, random_num_str].join('\n');
    this.reply(this.message, replyMessage);

  }
};
