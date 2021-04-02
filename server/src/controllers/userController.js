const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const generateJwt = require('../auth/jwt');

class userController {
  async register(req, res, next) {
    try {
      const { email, password, phone, role } = req.body;
      const candidate = await User.findOne({
        where: {
          email,
        },
      });
      if (candidate) {
        return res.json({
          message: 'Email alredy busy',
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        email,
        password: hashedPassword,
        phone,
        role,
      });
      await user.save();
      const token = generateJwt(user.id, user.email, user.role)
        return res.json({message: ('Signup successful',{token})})
    } catch (error) {
      console.log(`Failed to create user in userController/register`);
      return next(error);
    }
  }
  async user(req, res) {
    const users = await User.findAll();
    res.send(users);
  }
}

module.exports = new userController();
