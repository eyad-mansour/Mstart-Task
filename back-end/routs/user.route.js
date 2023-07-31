'use strict';

const {
  signup,
  allUser,
  login,
  deleteUser,
} = require('../controller/userControllers');
const bearerAuth = require('../middlewares/bearerAuth');
const capabilities = require('../middlewares/listControl');

const router = require('express').Router();
const userAuth = require('../middlewares/userAuth');

router.post('/login', login);
router.post('/signup', userAuth.saveUser, signup);
router.get('/users', bearerAuth, capabilities('update'), allUser);
router.delete('/user/:id', bearerAuth, capabilities('delete'), deleteUser);

module.exports = router;
