const FILEPATH = '../worker_service';
module.exports = class BaseManager {
  constructor(inputData, hearContext, includeModules) {
    this.inputData = inputData;
    this.hearContext = hearContext;
    this.includeModules = includeModules;
    this.modules = {};
    this.options = ['help'];
    this.helpArguments = {};
    this.init();
  }

  init() {
    this.helpArguments.list = this.options;
    this.message = this.hearContext.message;
    this.reply = this.hearContext.bot.reply;
    this.includeModule();
  }

  includeModule() {
    this.includeModules.forEach(element => {
      const filePath = `${FILEPATH}/${element}.js`;
      this.modules[element] = new (require(filePath))(this.hearContext);
    }, this);
  }

  optionToMethod(option) {
    if (option === undefined || option === null) return this.defaultMethod;

    const methodName = option.replace(/_[a-z]/g, match => {
      return match.substr(1).toUpperCase();
    });
    const method = this[methodName];

    if (method === undefined || method === null) return this.defaultMethod;

    return method;
  }

  defaultMethod() {
    const message = 'オプションが不適切です.';
    this.reply(this.message, message);
  }

  help() {
    const helps = this.helpArguments[this.inputData.argument];

    if (helps === undefined || helps === null || !(helps instanceof Array)) {
      return this.reply(this.message, '');
    }

    const message = helps.join('\n');
    this.reply(this.message, message);
  }

  run() {
    const method = this.optionToMethod(this.inputData.option);
    method.bind(this)();
  }
};