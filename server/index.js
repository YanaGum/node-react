require('dotenv').config();
const express = require("express");
const path = require("path");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || "3000";

if (process.env.NODE_ENV !== 'production') {
    app.use(
      cors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        preflightContinue: false,
        optionsSuccessStatus: 204,
      }),
    );
  }

app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
  });

app.listen(PORT, () => {
    console.log(`Server has been started on port http://localhost:${process.env.PORT}...`);
  });