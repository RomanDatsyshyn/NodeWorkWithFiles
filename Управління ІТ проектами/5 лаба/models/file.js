let first_25 = [];
let fileContent = [];

module.exports = class File {
  addLine(line) {
    fileContent.push(line);
  }

  addLineToFirst25s(line) {
    first_25.push(line);
  }

  getAllContents() {
    return fileContent;
  }

  getFirst25Lines() {
    return first_25;
  }

  clearDataBase() {
    first_25 = [];
    fileContent = [];
  }
};
