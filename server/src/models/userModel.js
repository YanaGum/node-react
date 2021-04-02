const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_CONNECTION);

const User = sequelize.define(
  'User',
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'USER'
    },
  },
  {
    timestamps: false,
  },
);

User.sync({ alter: true });

module.exports = User;
