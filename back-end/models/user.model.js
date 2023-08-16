'use strict';
const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    Server_DateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    DateTime_UTC: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    Update_DateTime_UTC: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    Last_Login_DateTime_UTC: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Date_Of_Birth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    token: {
      type: DataTypes.VIRTUAL,
      get: function () {
        return jwt.sign(
          {
            Name: this.Name,
          },
          process.env.JWT_SECRET
        );
      },
      set(tokenObj) {
        const token = jwt.sign(tokenObj, process.env.JWT_SECRET);
        return token;
      },
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      allowNull: false,
      defaultValue: 'user',
    },
    capabilities: {
      type: DataTypes.VIRTUAL,
      get: function () {
        const acl = {
          admin: ['read', 'create', 'delete', 'update'],
          user: ['read', 'create'],
        };
        return acl[this.role];
      },
    },
  });
  User.authenticateToken = (token) => {
    // console.log(token);
    return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return err;
      } else {
        return decoded;
      }
    });
  };
  return User;
};
