'use strict';
const { dealCollection, claimedDealsCollection } = require('../models/index');

module.exports = (capabilities) => {
  return async function (req, res, next) {
    if (!req.user.capabilities.includes(capabilities)) {
      try {
        const dealId = req.params.id;
        const deal = await dealCollection.read(dealId);
        const claimedDeal = await claimedDealsCollection.read(dealId);
        console.log(claimedDeal.User_ID)
        console.log(deal.User_ID)
        if (deal && deal.User_ID === req.user.id) {
          next();
        }
        else if (claimedDeal && claimedDeal.User_ID === req.user.id) {
          next();
        } else {
          res.status(403).send('No capabilities');
        }
      } catch (error) {
        console.log(error)
        res.status(500).send('Server error');
      }
    } else {
      next();
    }
  };
};
