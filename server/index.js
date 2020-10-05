const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../dist/static/js/bundle.js'));

const PORT = 3101;

app.get('/tiersIncluded', (req, res) => {
  const dataString = { bundleId: 1 };
  return db.tiersRequest(dataString)
  .then(tiersData => {
    if (tiersData) {
      return tiersData;
    } else {
      res.status(404).send('no such bundleId');
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
  return db.tiersRequest(dataString)
  .then(tiersData => {
    if (tiersData) {
      return tiersData;
    } else {
      res.status(404).send('no such bundleId');
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

app.get('/itemsIncluded:tierId', (req, res) => {
  const dataString = req.params;
  return db.itemsRequest(dataString)
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

app.listen(PORT, () => console.log('listening on port', PORT));
