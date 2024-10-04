const fs = require("fs");

const readStream = fs.createReadStream("./files/lorem.txt", "utf8", (err) => {
  if (err) throw err;
});

const writeStream = fs.createWriteStream("./files/loremTwo.txt", (err) => {
  if (err) throw err;
});

readStream.pipe(writeStream);
