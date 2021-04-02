require('dotenv').config();
const Router = require('express');
const router = new Router();
const authRouter = require('./authRoute');
const userRouter = require('./userRoute');
const { USER, AUTH } = require('../constants');

router.use( USER, userRouter);
router.use( AUTH, authRouter);

module.exports = router;