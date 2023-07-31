'use strict';

const {userModel} = require('../models');

const saveUser = async (req, res, next) => {
  try {
    const username = await userModel.findOne({
      where: {
        Name: req.body.Name,
      },
    });
    if (username) {
      return res.status(409).send('User name already taken');
    }
    const email = await userModel.findOne({
      where: {
        Email: req.body.Email,
      },
    });
    if (email) {
      return res.status(409).send('Email already taken');
    }
    next();
  } catch (error) {
    console.log(`this error is from auth ${error}`);
  }
};
module.exports = {saveUser};
