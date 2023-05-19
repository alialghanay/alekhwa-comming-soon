const express = require("express");

const app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use("/img", express.static(process.cwd() + "/img"));

//Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });


app.listen(3000, () => {
    console.log("Server is running at port " + 3000 + "...");
  });