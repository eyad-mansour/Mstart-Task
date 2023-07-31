'use strict';
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const {userModel} = require('../models');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  try {
    const {
      Name,
      Email,
      Password,
      role,
      Server_DateTime,
      DateTime_UTC,
      Update_DateTime_UTC,
      Last_Login_DateTime_UTC,
      Phone,
      Status,
      Gender,
      Date_Of_Birth,
    } = req.body;
    const data = {
      Name,
      Email,
      Password: await bcrypt.hash(Password, 10),
      role,
      Server_DateTime,
      DateTime_UTC,
      Update_DateTime_UTC,
      Last_Login_DateTime_UTC,
      Phone,
      Status,
      Gender,
      Date_Of_Birth,
    };

    const user = await userModel.create(data);

    if (user) {
      res.status(201).json(user);
    }
  } catch (error) {
    console.log(` this error is from  user controller ${error}`);
  }
};

const login = async (req, res) => {
  const basicHeader = req.headers.authorization.split(' ');
  const encodedHeader = basicHeader.pop();
  const decodedValue = base64.decode(encodedHeader);
  // console.log(decodedValue);
  const [Email, Password] = decodedValue.split(':');
  const user = await userModel.findOne({
    where: {
      Email: Email,
    },
  });

  if (user) {
    const isSame = await bcrypt.compare(Password, user.Password);
    if (isSame) {
      res.status(200).json(user);
    } else {
      return res.status(401).send('you are not authorized');
    }
  } else {
    return res.status(401).send('you are not authorized');
  }
};

const allUser = async (req, res) => {
  const users = await userModel.findAll({include: {all: true}});
  console.log(req);
  res.json(users);
};

const deleteUser = async (req, res) => {
  const {id} = req.params;
  await userModel.destroy({where: {id: id}});
  return res.status(204).send('deleted');
};

module.exports = {
  signup,
  allUser,
  login,
  deleteUser,
};
