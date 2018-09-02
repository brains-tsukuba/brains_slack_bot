const BaseManager = require('./BaseManager');
module.exports = class HelpManager extends BaseManager {
  constructor(inputData, hearContext) {
    super(inputData, hearContext, ['ManagerController']);
  }

  list() {
    const managers = this.modules.ManagerController.managers;
    const commandArray = Object.keys(managers)
      .filter( value => {
        return value !== 'Base' && value !== 'Help';
      }, this)
      .map( value => {
        return value.charAt(0).toLowerCase() + value.slice(1);
      }, this);
    const message = commandArray.join('\n');
    this.reply(this.message, message);
  }
};