'use strict';
const express = require('express');
const cors = require('cors');
const app = express();

const userRouter = require('./routs/user.route');
const claimeDeal = require('./routs/claimed-deals.route');
const deal = require('./routs/deals.route');

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(deal);
app.use(claimeDeal);

app.get('/', (req, res) => {
  res.status(200).send('hello Mstart');
});

function start(port) {
  app.listen(port, () => console.log(`server is listining to ${port}`));
}
module.exports = {
  start,
  app,
};
