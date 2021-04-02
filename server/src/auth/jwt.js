require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });
};

module.exports = generateJwt;
