require('dotenv').config();
const ApiError = require('../error/error');
const generateJwt = require('../auth/jwt');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

class AuthController {
  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal('User not found'));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal('Wrong Password'));
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }
  async me(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({token})
}
  async logout(req, res) {
    req.logout();
    req.flash('success_msg', 'You are logged out');
  }
}

module.exports = new AuthController();
