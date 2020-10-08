const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const { Sequelize } = require('sequelize');
const { user } = require('./config.js');
const sequelize = new Sequelize('humblebundle', 'root', '', { host: 'localhost', dialect: 'mysql'});
// const Seed = require('./seed.js'); // Not used in this build, will be reimplemented

const connection = mysql.createConnection(mysqlConfig);

var Bundles = sequelize.define('bundles', {
  bundleId: Sequelize.INTEGER,
  tierId: Sequelize.INTEGER,
  cost: Sequelize.INTEGER,
  tierOrder: Sequelize.INTEGER
});

var Tiers = sequelize.define('tiers', {
  tierId: Sequelize.INTEGER,
  itemId: Sequelize.INTEGER,
  itemOrder: Sequelize.INTEGER
});

const seed = () => {
  Bundles.drop()
  .then(() => {
    Bundles.sync({ force: true })
    .then(() => {
      data = Seed.seedBundles();
      Bundles.bulkCreate(data, { validate: true })
      .then(() => {
        console.log('bundles created');
      })
      .catch(err => {
        console.log('failed to create bundles', err);
      })
      .finally(() => {
        sequelize.close();
      })
    })
  });

  Tiers.drop()
  .then(() => {
    Tiers.sync({ force: true })
    .then(() => {
      data = Seed.seedTiers();
      Tiers.bulkCreate(data, { validate: true})
      .then(() => {
        console.log('tiers created');
      })
      .catch(err => {
        console.log('failed to create tiers', err);
      })
      .finally(() => {
        sequelize.close();
      })
    })
  });
};

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
  Bundles, Tiers, seed, tiersRequest, itemsRequest
};
