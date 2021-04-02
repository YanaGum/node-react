require('dotenv').config();
const express = require('express');
const cors = require('cors');
const flash = require('connect-flash');
const path = require('path');
const app = express();
const { API } = require('./src/constants');
const router = require('./src/routes/indexRoute');
const errorHandler = require('./src/error/errorMiddleware');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.use( API, router);
app.use(errorHandler);

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server has been started on port ${process.env.PORT}...`);
});