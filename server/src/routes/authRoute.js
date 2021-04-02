require('dotenv').config();
const { Router } = require('express');
const authController = require('../controllers/authController');
const { AUTH_ROUTES } = require('../constants');
const authMiddleware = require('../error/authMiddleware');

const router =new Router();
router.get(AUTH_ROUTES.AUTH, authMiddleware, authController.me);
router.get(AUTH_ROUTES.LOGOUT, authController.logout);
router.post(AUTH_ROUTES.LOGIN, authController.login);

module.exports = router;
