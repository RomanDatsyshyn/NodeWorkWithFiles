const express = require("express");
const bodyParser = require("body-parser");
const fileRouter = require("./routes/fileRouter");

const app = express();

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", fileRouter);

app.listen(3000);
