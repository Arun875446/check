const fsPromises = require("fs").promises;
const path = require("path");
const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );
    console.log(data);

    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    console.log("new File created successfully");
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    console.log("starter File deleted successfully");
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nThis is appended line"
    );
    console.log("line Appended successfully");
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseCompleted.txt")
    );
    console.log("new File Renamed successfully");
  } catch (err) {
    console.log(err);
  }
};

fileOps();
