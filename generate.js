class Generater {
  constructor(managerName) {
    this.managerName = managerName.charAt(0).toUpperCase() + managerName.slice(1);
    this.path = `./managers/`;
  }

  generate() {
    const fs = require('fs');
    const generateFilePath = this.getFilePath();
    const fileContent = this.getFileContent();

    fs.writeFile(generateFilePath, fileContent);
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
    //this.options.push('');
  }
}
`;

    return fileContent;
  }
}

const generater = new Generater(process.argv[2]);
generater.generate();