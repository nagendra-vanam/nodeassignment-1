const fs = require("fs/promises");
const myFileWriter = async (fileName, fileContent) => {
  try {
    await fs.writeFile(`./${fileName}.txt`, `${fileContent}`);
    console.log("file  created");
  } catch {
    console.log("something wrong with file creation");
  }
};
const myFileReader = async (fileName) => {
  try {
    return await fs.readFile(`./${fileName}.txt`, "utf-8");
    console.log("file read");
  } catch {
    console.log("something wrong with reading the file");
  }
};

const myFileUpdater = async (fileName, fileContent) => {
  try {
    await fs.appendFile(`./${fileName}.txt`, `${fileContent}`);

    console.log("file updated");
  } catch {
    console.log("error found");
  }
};

const myFileDeleter = async (fileName) => {
  try {
    await fs.unlink(`./${fileName}.txt`);
    console.log("succesfully deleted");
  } catch {
    console.log("something wrong with deletion");
  }
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
