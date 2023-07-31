'use strict';

module.exports = (capabilities) => {
  return function (req, res, next) {
    console.log(req.user, 'heloooooo');
    if (!req.user.capabilities.includes(capabilities)) {
      if (req.user.id === parseInt(req.params.User_ID)) {
        next();
      } else {
        res.status(403).send('No capabilities');
      }
    } else {
      next();
    }
  };
};
