const db = require('index.js');

const seed = () => {
  return db.bulkCreate(seedBundle());
  seedTiers();
}

// bundle
// for each bundle 1-100
// 3 random tiers
// random cost 5-20
const seedBundle = () => {
  var bundleId, tier1Id, tier2Id, tier3Id, cost;
  var bundleData = [];
  for (let i = 1; i <= 100; i++) {
    bundleId = i;
    tier1Id = Math.floor(Math.random() * 16) + 1;
    tier2Id = Math.floor(Math.random() * 16) + 18;
    tier3Id = Math.floor(Math.random() * 15) + 35;
    cost = Math.floor(Math.random() * 4) * 5;
    bundleData.push({
      id : bundleId,
      tier1Id : tier1Id,
      tier2Id : tier2Id,
      tier3Id : tier3Id,
      cost : cost
    })
  }
  return bundleData;
}

// tier
// 2 - 6 items for each
// each item should come from different segment

const seedTiers = () => {
  var tierId, item0Id, item1Id, item2Id, item3Id, item4Id, item5Id;
  var tierData = [];
  for (let i = 1; i <= 100; i++) {
    tierId = i;
    item0Id = Math.floor(Math.random() * 16) + (100 * tierId - 99);
    item0Id = Math.floor(Math.random() * 16) + 17 + (100 * tierId - 99);
    if (Math.random() < .3 ) {
      item0Id = Math.floor(Math.random() * 16) + 34 + (100 * tierId - 99);
      if (Math.random() < .3 ) {
        item0Id = Math.floor(Math.random() * 16) + 50 + (100 * tierId - 99);
        if (Math.random() < .3 ) {
          item0Id = Math.floor(Math.random() * 16) + 67 + (100 * tierId - 99);
          if (Math.random() < .3 ) {
            item0Id = Math.floor(Math.random() * 16) + 84 + (100 * tierId - 99);
          }
        }
      }
    }
    tierData.push ({
      id : tierId,
      item0Id : item0Id,
      item1Id : item1Id,
      item2Id : item2Id,
      item3Id : item3Id,
      item4Id : item4Id,
      item5Id : item5Id
    })
  }
  return tierData;
}



