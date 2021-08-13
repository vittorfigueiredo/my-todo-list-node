const express = require("express");
const router = require("./src/routes");

const app = express();
const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
