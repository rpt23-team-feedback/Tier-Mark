const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const db = require('../database/index.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '..public'));

const PORT = 3101;

app.listen(PORT, () => console.log('listening on port', port));

app.get('./tiersIncluded', (req, res) => {
  const dataString = req.body;
  const tiersData = db.tiersRequest(dataString);
  const res.send(tiersData);
});

app.get('./itemsIncluded', (req, res) => {
  const dataString = req.body;
  const itemsData = db.itemsRequest(dataString);
  const res.send(itemsData);
});