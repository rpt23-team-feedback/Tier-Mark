const db = require('./index.js');


// bundle
// for each bundle 1-100
// 3 random tiers
// random cost 5-20
const seedBundle = () => {
  var bundleId, tierId, cost;
  var bundleData = [];
  for (let i = 1; i <= 100; i++) {
    bundleId = i;
    tierId = Math.floor(Math.random() * 16) + 1;
    cost = Math.floor(Math.random() * 4) * 5;
    bundleData.push({
      bundleId : bundleId,
      tierId : tierId,
      order: 1
    });
    tierId = Math.floor(Math.random() * 16) + 18;
    cost = Math.floor(Math.random() * 4) * 5;
    bundleData.push({
      bundleId : bundleId,
      tierId : tierId,
      cost : cost,
      order: 2
    });
    tierId = Math.floor(Math.random() * 15) + 35;
    cost = Math.floor(Math.random() * 4) * 5;
    bundleData.push({
      bundleId : bundleId,
      tierId : tierId,
      order: 3
    });
  }
  // console.log('bundleData', bundleData);
  return bundleData;
}

// tier
// 2 - 6 items for each
// each item should come from different segment

const seedTiers = () => {
  var tierId, itemId;
  var tierData = [];
  for (let i = 1; i <= 100; i++) {
    tierId = i;
    order = 1;
    itemId = Math.floor(Math.random() * 48) + 1;
    tierData.push ({
      tierId : tierId,
      itemId : itemId,
      order: order
    });
    order++;
    itemId = Math.floor(Math.random() * 48) + 49;
    tierData.push ({
      tierId : tierId,
      itemId : itemId,
      order: order
    });
    order++;
    if (Math.random() < .3 ) {
      itemId = Math.floor(Math.random() * 48) + 97;
      tierData.push ({
        tierId : tierId,
        itemId : itemId,
        order: order
      });
      order++;
    }
    if (Math.random() < .3 ) {
      itemId = Math.floor(Math.random() * 48) + 145;
      tierData.push ({
        tierId : tierId,
        itemId : itemId,
        order: order
      });
      order++;
    }
    if (Math.random() < .3 ) {
      itemId = Math.floor(Math.random() * 48) + 193;
      tierData.push ({
        tierId : tierId,
        itemId : itemId,
        order: order
      });
      order++;
    }
    if (Math.random() < .3 ) {
      itemId = Math.floor(Math.random() * 48) + 241;
      tierData.push ({
        tierId : tierId,
        itemId : itemId,
        order: order
      })
    }
  }
  return tierData;
}



module.exports = {
  seedBundle, seedTiers
};