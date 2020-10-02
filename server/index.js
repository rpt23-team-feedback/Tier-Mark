const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const db = require('../database/index.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '..public')));

const PORT = 3101;

app.listen(PORT, () => console.log('listening on port', PORT));

app.get('./tiersIncluded:bundleId', (req, res) => {
  const dataString = req.params;
  const tiersData = db.tiersRequest(dataString);
  res.send(tiersData);
});

app.get('./itemsIncluded:tierId', (req, res) => {
  const dataString = req.params;
  const itemsData = db.itemsRequest(dataString);
  res.send(itemsData);
});