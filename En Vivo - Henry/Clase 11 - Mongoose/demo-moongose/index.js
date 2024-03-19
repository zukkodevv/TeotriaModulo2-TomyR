const moongose = require("moongose");

const URI =
  "";

const dbConecction = async () => {
  await moongose.connect(URI);
};

module.exports = dbConecction;
