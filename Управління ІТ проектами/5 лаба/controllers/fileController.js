const fs = require("fs");
const readline = require("readline");

const File = require("../models/file");

let newFile = new File();

let line_no = 0;
let pages = [1];
let page = 1;

module.exports = {
  loadStartPage: (req, res) => {
    res.render("uploadFile.hbs");
  },

  uploadFile: (req, res) => {
    newFile.clearDataBase();
    let rl = readline.createInterface({
      input: fs.createReadStream(req.body.file),
    });

    rl.on("line", (line) => {
      newFile.addLine(line);
      line_no++;

      if (line_no < 26) {
        newFile.addLineToFirst25s(line);
      }

      if (line_no % 25 === 0) {
        page++;
        pages.push([page]);
      }
    });

    res.render("fileContentPage.hbs", {
      fileContent: newFile.getFirst25Lines(),
      pages: pages,
    });
  },

  paginationPages: (req, res) => {
    let store = newFile.getAllContents();

    let p = req.body.page - 1;
    let arr = [];

    for (let i = p * 25; i < p * 25 + 25; i++) {
      arr.push(store[i]);
    }

    res.render("fileContentPage.hbs", {
      fileContent: arr,
      pages: pages,
    });
  },
};
