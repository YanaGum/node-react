require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

module.exports = {
  async register(req, res, next) {
    try {
      const { email, password, phone } = req.body;
      const candidate = await User.findOne({
        where: {
          email,
        },
      });
      if (candidate) {
        return res.json({
          msg: 'email alredy busy',
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        email,
        password: hashedPassword,
        phone,
      });
      await user.save();
      return res.json({
        msg: ('success.signup', { email }),
      });
    } catch (error) {
      console.log(`Failed to create user in userController/register`);
      return next(error);
    }
  },
  async user(req, res) {
    const users = await User.findAll();
    res.send(users);
  },
};
