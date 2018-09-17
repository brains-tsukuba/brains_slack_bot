class JsonParseError {
  constructor (message) {
    this.name = 'JsonParseError';
    this.message = message;
  }
}
const BRAINS_BOT_ID = '@U9RKJ2QTZ';
module.exports = class Lexer {
  constructor(userMessage) {
    this.userMessage = userMessage;
  }

  lex() {
    const dividedUserMessage = this.formatString(this.userMessage)
      .split(' ')
      .filter(value => value !== 'Reminder:' && value !== `<${BRAINS_BOT_ID}>`);
    const command  = dividedUserMessage[0].charAt(0).toUpperCase() + dividedUserMessage[0].slice(1);
    const option   = dividedUserMessage[1];
    const argument = this.buildArgs(dividedUserMessage.slice(2, dividedUserMessage.length));
    return {
      command,
      option,
      argument
    };
  }

  buildArgs(argsOriginal) {
    if (argsOriginal === undefined || argsOriginal === null || argsOriginal.length === 0) {
      return;
    }
    if (argsOriginal[0].charAt(0) === '{') {
      return this.buildJson(argsOriginal);
    }

    return argsOriginal[0];
  }

  buildJson(argsOriginal) {
    try {
      return JSON.parse(`${argsOriginal.join('')}`);
    }
    catch (e){
      throw new JsonParseError('Jsonパースに失敗しました.');
    }
  }

  formatString (string) {
    return string
      .replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      })
      .replace(/，/g, ',')
      .replace(/“/g, '"')
      .replace(/”/g, '"');
  }
};