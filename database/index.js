const { Sequelize } = require('sequelize');
const password = require('./config.js').password;
const sequelize = new Sequelize('humblebundle', 'mark', password, { host: 'localhost', dialect: 'mysql'});

const Bundles = sequelize.define('bundles', {
  bundleId: Sequelize.INTEGER,
  tierId: Sequelize.INTEGER,
  cost: Sequelize.INTEGER,
  tierOrder: Sequelize.INTEGER
});

const Tiers = sequelize.define('tiers', {
  tierId: Sequelize.INTEGER,
  itemId: Sequelize.INTEGER,
  itemOrder: Sequelize.INTEGER
});


const tiersRequest = (data) => {
  let bundleId = data.bundleId;
  return Bundles.findAll({
    where: {
      bundleId: bundleId
    }
  })
  .then(data => {
    return data;
  })
  .catch(err => {
    console.log('error', err);
  })
};

const itemsRequest = (data) => {
  let tierId = data.tierId;
  return Tiers.findAll({
    where: {
      tierId: tierId
    }
  })
  .then(data => {
    return data;
  })
  .catch(err => {
    console.log('error', err);
  })
};

module.exports = {
  Bundles, Tiers, tiersRequest, itemsRequest,
};
