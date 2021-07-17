var express = require("express");
var app = express();
const port = 3000;

const sixKYU =  require("./kata/6kyu/sixKYU");

app.get("/duplicate-count", (req, res) => {
    var output = sixKYU.duplicateCount('test');
  res.send(output);
});

app.listen(port, () => {
  console.log("Katas being tested on PORT", port);
});

