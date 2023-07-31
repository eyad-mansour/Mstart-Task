'use strict';

module.exports = (sequelize, DataTypes) => {
  const Deal = sequelize.define('deal', {
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
    Update_DateTime_UTC: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false,
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
  return Deal;
};
