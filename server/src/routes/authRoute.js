const { Router } = require('express');
const authController = require('../controllers/authController');
const { AUTH_ROUTES } = require('../constants');

const router = Router();

router.post(AUTH_ROUTES.SIGNUP, authController.signup);

module.exports = router;
