class Generater {
  constructor(managerName) {
    this.fs = require('fs');
    this.managerName = managerName.charAt(0).toUpperCase() + managerName.slice(1);
    this.path = `./managers/`;
  }

  generate() {
    const generateFilePath = this.getFilePath();
    const fileContent = this.getFileContent();

    if (this.isExitFile(generateFilePath)) {
      console.error(`ERR! ${generateFilePath} is already exists.`);
      return;
    }

    this.fs.writeFileSync(generateFilePath, fileContent);
    console.log(`generate ${this.managerName}Manager.js`);
  }

  getFilePath() {
    return `${this.path}${this.managerName}Manager.js`;
  }

  getFileContent() {
    const fileContent =
`const BaseManager = require('./BaseManager');
module.exports = class ${this.managerName}Manager extends BaseManager {
  constructor(inputData, hearContext) {
    super(inputData, hearContext, ['']);
    //this.helpArguments.option1 = ['arg1', 'arg2', ...];
    //this.helpArguments.option2 = ['arg1', 'arg2', ...];
    //this.options.push('option1', 'option2');
  }

  /**
  option1() {
    const message = 'Hello world!';
    this.replay(this.message, message);
  }
  */

}
`;

    return fileContent;
  }

  isExitFile(filePath) {
    try {
      this.fs.accessSync(filePath);
      return true;
    } catch (error) {
      if (error.code === 'ENOENT') return false;
    }
  }
}

const generater = new Generater(process.argv[2]);
generater.generate();