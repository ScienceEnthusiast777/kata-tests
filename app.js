var express = require("express");
var app = express();
const port = 3000;

const duplicateCount =  require("./kata/6kyu/CountingDuplicates");

app.get("/duplicate-count", (req, res) => {
    var output = duplicateCount.duplicateCount('test');
  res.send(output);
});

app.listen(port, () => {
  console.log("Katas being tested on PORT", port);
});

