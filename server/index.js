const express = require('express');
// const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const db = require('../database/index.js');
// const { Console } = require('console');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// app.use(express.static(path.join(__dirname, '/../dist/js/bundle.js')));
app.use(express.static(__dirname + '/../dist/js/bundle.js'));

const PORT = 3101;

app.get('/test', (req, res) => {
  console.log('got here');
  res.status(200).send('test worked');
})

app.get('/tiersIncluded', (req, res) => {
  const dataString = { bundleId: 1 };
  // const tiersData = db.tiersRequest(dataString);
  return db.tiersRequest(dataString)
  .then(tiersData => {
    // console.log('received db data: ', tiersData);
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
    // console.log('received db data: ', tiersData);
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
    // console.log('received db data: ', tiersData);
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
