/* eslint-disable no-restricted-syntax */
const express = require("express");

const app = express();
require("dotenv").config();

const port = process.env.APP_PORT || 8001;

const cors = require("cors");

const db = require("./config");
const router = require("./router/index");

const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", router);

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Connecté à la database: ${process.env.DB_NAME}`);
  }
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
