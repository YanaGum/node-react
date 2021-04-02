require('dotenv').config();
const { Router } = require('express');
const userController = require('../controllers/userController');
const { AUTH_ROUTES } = require('../constants');

const router = new Router();

router.get(AUTH_ROUTES.USERS, userController.user);
router.post(AUTH_ROUTES.SIGNUP, userController.register);

module.exports = router;
