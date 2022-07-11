const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//connect to DB
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", function (req, res) {
  res.send("Hello Beautiful or Ugly World");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
