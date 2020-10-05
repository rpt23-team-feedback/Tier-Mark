const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const db = require('../database/index.js');
const { Console } = require('console');

// app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../dist/static/js/bundle.js')));

const PORT = 3101;

app.get('/tiersIncluded', (req, res) => {
  const dataString = { tierId: 1 }; // for testing
  // const tiersData = db.tiersRequest(dataString);
  db.tiersRequest(dataString)
  .then(tiersData => {
    if (tiersData) {
      return tiersData;
    } else {
      res.status(404).send('no such tierId');
    }
  })
  .then(tiersData => {
    if (tiersData) {
      res.send(JSON.stringify(tiersData));
    }
  })
  .catch(err => {
    res.status(500).send('wait and try again', err);
  })
});

app.get('/tiersIncluded:bundleId', (req, res) => {
  const dataString = req.params;
  const tiersData = db.tiersRequest(dataString);
  res.send(tiersData);
});

app.get('/itemsIncluded:tierId', (req, res) => {
  const dataString = req.params;
  const itemsData = db.itemsRequest(dataString);
  res.send(itemsData);
});

app.listen(PORT, () => console.log('listening on port', PORT));
