const Lexer = require('./Lexer.js');
class CommandNotFound {
  constructor(command){
    this.name = 'CommandNotFound';
    this.message = `${command}は存在しないコマンドです.`;
  }
}
module.exports = class ManagerController {
  constructor(userMessage, hearContext) {
    this.lexer = new Lexer(userMessage);
    this.hearContext = hearContext;
    this.managers = {};
    this.importManagers();
  }

  getManager() {
    try {
      this.inputData = this.lexer.lex();
      const manager = this.internalGetManager(this.inputData.command);
      return new manager(this.inputData, this.hearContext);
    }
    catch (e) {
      throw e;
    }
  }

  internalGetManager(managerName) {
    if (this.managers[managerName]) {
      return this.managers[managerName];
    }

    throw new CommandNotFound(managerName);
  }

  importManagers() {
    const filePath = 'managers';
    require('fs').readdirSync(filePath).forEach(filename => {
      if (filename.slice(-10) === 'Manager.js') {
        const key = filename.slice(0, -10);
        const filePath = '../managers';
        this.managers[key] = require(`${filePath}/${filename}`);
      }
    });
  }
};