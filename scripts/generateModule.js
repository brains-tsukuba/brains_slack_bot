class Generater {
  constructor(moduleName) {
    this.fs = require('fs');
    this.moduleName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
    this.path = `./worker_service/`;
  }

  generate() {
    const generateFilePath = this.getFilePath();
    const fileContent = this.getFileContent();

    if (this.isExitFile(generateFilePath)) {
      console.error(`ERR! ${generateFilePath} is already exists.`);
      return;
    }

    this.fs.writeFileSync(generateFilePath, fileContent);
    console.log(`generate ${this.moduleName}.js`);
  }

  getFilePath() {
    return `${this.path}${this.moduleName}Service.js`;
  }

  getFileContent() {
    const fileContent =
`module.exports = class ${this.moduleName}Service {
  constructor() {
  }
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