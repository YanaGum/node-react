require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRouter = require('./src/routes/userRoute');
// const authRouter = require('./src/routes/authRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use( '/user', userRouter);
// app.use( '/auth', authRouter);

if (process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    }),
  );
};

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server has been started on port ${process.env.PORT}...`);
});

module.exports = app;
