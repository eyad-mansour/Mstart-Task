'use strict';

module.exports = (sequelize, DataTypes) => {
  const ClaimedDeals = sequelize.define('claimedDeals', {
    User_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Deal_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Server_DateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    DateTime_UTC: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    Amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    Currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return ClaimedDeals;
};
