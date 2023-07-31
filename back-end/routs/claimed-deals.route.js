'use strict';

const express = require('express');
const router = express.Router();
const capabilities = require('../middlewares/listControl');

const bearerAuth = require('../middlewares/bearerAuth');

const {claimedDealsCollection} = require('../models/index');

router.get('/claimed', bearerAuth, capabilities('read'), getClaimed);
router.get('/claimed/:id', bearerAuth, capabilities('read'), getOneClaimed);
router.delete('/claimed/:id', bearerAuth, capabilities('read'), deleteClaimed);
router.put('/claimed/:id', bearerAuth, capabilities('read'), updateClaimed);
router.post('/claimed', bearerAuth, capabilities('read'), createClaimed);

async function getClaimed(req, res) {
  let claimed = await claimedDealsCollection.read();
  res.status(200).json({
    claimed,
  });
}

async function updateClaimed(req, res) {
  let id = req.params.id;
  let obj = req.body;
  let updatedClaimed = await claimedDealsCollection.update(id, obj);
  res.status(202).json(updatedClaimed);
}

async function deleteClaimed(req, res) {
  let id = req.params.id;
  let deletedClaimed = await claimedDealsCollection.delete(id);
  res.status(204).json(deletedClaimed);
}

async function getOneClaimed(req, res) {
  let id = req.params.id;
  let getClaimedOne = await claimedDealsCollection.read(id);
  res.status(200).json(getClaimedOne);
}

async function createClaimed(req, res) {
  const newCliamed = req.body;
  console.log('newwww hereeeeeeeeee', newCliamed);
  const claimed = await claimedDealsCollection.create(newCliamed);
  console.log('here check', claimed);
  const dealClaimed = await claimedDealsCollection.readWithDeal(claimed.id);
  return res.status(201).json(dealClaimed);
}

module.exports = router;
