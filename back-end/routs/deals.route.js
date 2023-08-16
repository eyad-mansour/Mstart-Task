'use strict';

const express = require('express');
const router = express.Router();
const bearerAuth = require('../middlewares/bearerAuth');

const capabilities = require('../middlewares/listControl');

const {
  dealCollection,
  userCollection,
  claimedDealsCollection,
} = require('../models/index');

router.get('/deal/:id', bearerAuth, capabilities('read'), getOneDeal);
router.post('/deal', bearerAuth, capabilities('create'), createDeal);
router.get('/deals', bearerAuth, capabilities('read'), getDeals);
router.delete(
  '/deal/:id',
  bearerAuth,
  capabilities('delete'),
  deleteDeal
);
router.put('/deal/:id', bearerAuth, capabilities('update'), updateDeal);

async function getDeals(req, res) {
  let deals = await dealCollection.read();
  res.status(200).json({
    deals,
  });
}

async function createDeal(req, res) {
  //   console.log(req.body, '====================================');
  let newDeal = req.body;
  //   console.log(newDeal);
  let deal = await dealCollection.create(newDeal);

  res.status(201).json(deal);
}

async function getOneDeal(req, res) {
  let id = req.params.id;
  let deal = await dealCollection.read(id);
  res.status(200).json(deal);
}

async function deleteDeal(req, res) {
  let id = req.params.id;
  let deletedDeal = await dealCollection.delete(id);
  res.status(204).json(deletedDeal);
}

async function updateDeal(req, res) {
  let id = req.params.id;
  let obj = req.body;
  // let deal = await dealCollection.read(id);
  let updatedDeal = await dealCollection.update(id, obj);
  res.status(202).json(updatedDeal);
}

module.exports = router;
