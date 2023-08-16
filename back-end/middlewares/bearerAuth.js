'use strict';

const { userModel } = require('../models/index');

module.exports = async (req, res, next) => {
  // console.log(req.headers, '');
  if (!req.headers.authorization) {
    return next('you are not authorized ??? ');
  }
  const token = req.headers.authorization.split(' ').pop();
  // console.log(token, 'this is the token !@#@#!$%');
  try {
    const validUser = await userModel.authenticateToken(token);
    const userInfo = await userModel.findOne({
      where: {
        Name: validUser.Name,
      },
    });
    if (userInfo) {
      req.user = userInfo;
      req.token = userInfo.token;
      console.log(req.token);
      next();
    } else {
      next('you are not authinticate ???????????????????');
    }
    console.log(userInfo);
  } catch (error) {
    next(error);
  }
};
