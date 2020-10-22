const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const cors = require('cors');

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
    res.status(500);
  })
});

app.get('/tiersIncluded/:bundleId', (req, res) => {
  const dataString = req.params;
  return db.tiersRequest(dataString)
  .then(tiersData => {
    if (tiersData) {
      return tiersData;
    } else {
      res.status(404).send('no such bundleId');
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
    res.status(500);
  })
});

app.get('/itemsIncluded/:tierId', (req, res) => {
  const dataString = req.params;
  return db.itemsRequest(dataString)
  .then(itemsData => {
    if (itemsData) {
      return itemsData;
    } else {
      res.send(404).send('no such TierId');
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
    res.status(500);
  })
});

app.listen(PORT, () => console.log('listening on port', PORT));
