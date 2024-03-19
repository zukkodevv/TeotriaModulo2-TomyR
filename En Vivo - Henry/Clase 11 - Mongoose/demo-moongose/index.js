const moongose = require("moongose");

const URI =
  "mongodb+srv://tomyrios2006:ze9UiSmcPlgJ5SuD@cluster0.n3gsi6w.mongodb.net/";

const dbConecction = async () => {
  await moongose.connect(URI);
};

module.exports = dbConecction;
