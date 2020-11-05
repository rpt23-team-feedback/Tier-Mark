const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const help = require('./helpers.js');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../dist'));
app.use(cors());

const PORT = 3101;

// This version is only used for dev testing
app.get('/tiersIncluded', (req, res) => {
  const dataString = { bundleId: 1 };
  return db.tiersRequest(dataString)
  .then(tiersData => {
    if (tiersData) {
      return tiersData;
    } else {
      res.status(404);
    }
  })
  .then(data => {
    let tiersData = {
      tier1Id: data[0].tierId,
      tier2Id: data[1].tierId,
      tier3Id: data[2].tierId
    }
    res.json(tiersData);
  })
  .catch(err => {
    res.status(500).send(err);
  })
});

app.get('/tiersIncluded/:bundleId', (req, res) => {
  const dataObj = req.params;
  const bundleId = parseInt(dataObj.bundleId);
  if(bundleId < 1 || bundleId > 100) {
    res.status(404).send('not a valid bundleId');
  };
  return db.tiersRequest(dataObj)
  .then(tiersData => {
    if (tiersData) {
      return tiersData;
    } else {
      const defaults = { tier1Id: null, tier2Id: null, tier3Id: null, tier3Cost: null };
      defaults.tier1Id = (bundleId - 1) * 3 + 1;
      defaults.tier2Id = (bundleId - 1) * 3 + 2;
      defaults.tier3Id = (bundleId - 1) * 3 + 3;
      defaults.tier3Cost = ((Math.floor(bundleId / 25) + 1) * 5);
      console.log('using default tiers', defaults);
      res.json(defaults);
    }
  })
  .then(data => {
    let tiersData = {
      tier1Id: data[0].dataValues.tierId,
      tier2Id: data[1].dataValues.tierId,
      tier3Id: data[2].dataValues.tierId,
      tier3Cost: data[2].dataValues.cost,
    }
    res.json(tiersData);
  })
  .catch(err => {
    res.status(500).send(err);
  })
});

app.get('/itemsIncluded/:tierId', (req, res) => {
  const dataObj = req.params;
  const tierId = parseInt(dataObj.tierId);
  if(tierId < 1 || tierId > 300) {
    res.status(404).send('not a valid tierId');
  };
  return db.itemsRequest(dataObj)
  .then(itemsData => {
    if (itemsData) {
      return itemsData;
    } else {
      const defaults = { item1: null, item2: null, item3: null, item4: null, item5: null, item6: null };

      defaults.item1 = help.numberGenerator((tierId * 1).toString(), (tierId));
      defaults.item2 = help.numberGenerator((tierId * 2).toString(), (tierId));
      if (defaults.item2 === defaults.item1) {
        defaults.item2++;
      };
      defaults.item3 = help.numberGenerator((tierId * 3).toString(), (tierId));
      if (defaults.item3 === defaults.item2) {
        defaults.item3++;
      };
      defaults.item4 = help.numberGenerator((tierId * 4).toString(), (tierId));
      if (defaults.item4 === defaults.item3) {
        defaults.item4++;
      };
      defaults.item5 = help.numberGenerator((tierId * 5).toString(), (tierId));
      if (defaults.item5 === defaults.item4) {
        defaults.item5++;
      };
      defaults.item6 = help.numberGenerator((tierId * 6).toString(), (tierId));
      if (defaults.item6 === defaults.item5) {
        defaults.item6++;
      };
      res.json(defaults);
    }
  })
  .then(data => {
    let itemsData = {
      item1: data[0].dataValues.itemId,
      item2: data[1].dataValues.itemId,
    }
    res.json(itemsData);
  })
  .catch(err => {
    console.log('got caught?', err);
    res.status(500).send(err);
  })
});

app.get('/itemsByBundleId/:bundleId', (req, res) => {
  const dataObj = req.params;
  const bundleId = parseInt(dataObj.bundleId);
  if(bundleId < 1 || bundleId > 100) {
    res.status(404).send('not a valid bundleId');
  };
  return db.tiersRequest(dataObj)
  .then(tiersData => {
    if (tiersData) {
      return tiersData;
    } else {
      let defaults = { item1: null, item2: null, item3: null, item4: null, item5: null, item6: null, item7: null, item8: null, item9: null, item10: null, item11: null, item12: null, item13: null, item14: null, item15: null, item16: null, item17: null, item18: null };

      let tierId = (bundleId - 1) * 3 + 1;
      defaults.item1 = help.numberGenerator((tierId * 1).toString(), (tierId));
      defaults.item2 = help.numberGenerator((tierId * 2).toString(), (tierId));
      if (defaults.item2 === defaults.item1) {
        defaults.item2++;
      };
      defaults.item3 = help.numberGenerator((tierId * 3).toString(), (tierId));
      if (defaults.item3 === defaults.item2) {
        defaults.item3++;
      };
      defaults.item4 = help.numberGenerator((tierId * 4).toString(), (tierId));
      if (defaults.item4 === defaults.item3) {
        defaults.item4++;
      };
      defaults.item5 = help.numberGenerator((tierId * 5).toString(), (tierId));
      if (defaults.item5 === defaults.item4) {
        defaults.item5++;
      };
      defaults.item6 = help.numberGenerator((tierId * 6).toString(), (tierId));
      if (defaults.item6 === defaults.item5) {
        defaults.item6++;
      };

      tierId = (bundleId - 1) * 3 + 2;
      defaults.item7 = help.numberGenerator((tierId * 1).toString(), (tierId));
      defaults.item8 = help.numberGenerator((tierId * 2).toString(), (tierId));
      if (defaults.item8 === defaults.item7) {
        defaults.item8++;
      };
      defaults.item9 = help.numberGenerator((tierId * 3).toString(), (tierId));
      if (defaults.item9 === defaults.item8) {
        defaults.item9++;
      };
      defaults.item10 = help.numberGenerator((tierId * 4).toString(), (tierId));
      if (defaults.item10 === defaults.item9) {
        defaults.item10++;
      };
      defaults.item11 = help.numberGenerator((tierId * 5).toString(), (tierId));
      if (defaults.item11 === defaults.item10) {
        defaults.item11++;
      };
      defaults.item12 = help.numberGenerator((tierId * 6).toString(), (tierId));
      if (defaults.item12 === defaults.item11) {
        defaults.item12++;
      };

      tierId = (bundleId - 1) * 3 + 3;
      defaults.item13 = help.numberGenerator((tierId * 1).toString(), (tierId));
      defaults.item14 = help.numberGenerator((tierId * 2).toString(), (tierId));
      if (defaults.item14 === defaults.item13) {
        defaults.item14++;
      };
      defaults.item15 = help.numberGenerator((tierId * 3).toString(), (tierId));
      if (defaults.item15 === defaults.item14) {
        defaults.item15++;
      };
      defaults.item16 = help.numberGenerator((tierId * 4).toString(), (tierId));
      if (defaults.item16 === defaults.item15) {
        defaults.item16++;
      };
      defaults.item17 = help.numberGenerator((tierId * 5).toString(), (tierId));
      if (defaults.item17 === defaults.item16) {
        defaults.item17++;
      };
      defaults.item18 = help.numberGenerator((tierId * 6).toString(), (tierId));
      if (defaults.item18 === defaults.item17) {
        defaults.item18++;
      };

      res.json(defaults);
    }
  })
  .then(data => {
    let allItems = {};
    for (let i = 0; i < data.length; i++) {
      let currentTier = { tierId: data[i].dataValues.tierId };
      return db.itemsRequest(currentTier)
      .then(itemsData => {
        if (itemsData) {
          for (let j = 0; j < itemsData.length; j++) {
            let currentItemId = itemsData[j].dataValues.itemId;
            allItems[currentItemId] = currentItemId;
          }
        }
        return allItems;
      })
    }
  })
  .then(itemsData => {
    res.json(itemsData);
  })
  .catch(err => {
    res.status(500).send(err);
  })
});

app.use('*', (req,res) =>{
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

app.listen(PORT, () => console.log('listening on port', PORT));
