const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/auth");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,OPTIONS,PUT,PATCH,DELETE"
  );
  next();
});

app.use((req, res, next) => {
  console.log("Connected to backend");
  next();
})

app.use("/api/user", userRoutes);
app.listen(3000);
