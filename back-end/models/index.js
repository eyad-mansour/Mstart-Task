'use strict';

const {Sequelize, DataTypes} = require('sequelize');
const User = require('./user.model');
const Deals = require('./deals.model');
const ClaimedDeals = require('./claimed-deals.model');

const collection = require('../collections/user-deal-routes');

const POSTGRES_URL =
  process.env.DATABASE_URL || 'postgresql://localhost:5432/mstart';

const sequelizeOption = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

const sequelize = new Sequelize(
  POSTGRES_URL
  // , sequelizeOption
);

const userModel = User(sequelize, DataTypes);
const dealsModel = Deals(sequelize, DataTypes);
const claimedDealsModel = ClaimedDeals(sequelize, DataTypes);

sequelize
  .authenticate()
  .then(() => {
    console.log('database connected to postgres');
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};
db.sequelize = sequelize;

userModel.hasMany(dealsModel, {
  foreignKey: 'User_ID',
  sourceKey: 'id',
});
userModel.hasMany(claimedDealsModel, {
  foreignKey: 'User_ID',
  sourceKey: 'id',
});

dealsModel.belongsTo(userModel, {
  foreignKey: 'User_ID',
  targetKey: 'id',
});
dealsModel.hasMany(claimedDealsModel, {
  foreignKey: 'Deal_ID',
  sourceKey: 'id',
});

claimedDealsModel.belongsTo(userModel, {
  foreignKey: 'User_ID',
  targetKey: 'id',
});
claimedDealsModel.belongsTo(userModel, {
  foreignKey: 'Deal_ID',
  targetKey: 'id',
});

const userCollection = new collection(userModel);
const dealCollection = new collection(dealsModel);
const claimedDealsCollection = new collection(claimedDealsModel);

module.exports = {
  db: sequelize,
  userCollection,
  dealCollection,
  claimedDealsCollection,
  userModel,
};
