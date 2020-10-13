# Tier-Mark
Tier module for HumbleBundle clone


## Usage

> To start server, from root directory in Terminal: "npm run server-dev"
> To run tests, in Terminal: "npm run test"

> API Call
Routing for API calls should be as follows and on PORT 3101:

To retrieve Tiers within a given Module:
'./tiersIncluded/:bundleId'
Will return an an array of objects
[
  { tierId, cost, tierOrder },
  { tierId, cost, tierOrder },
  { tierId, cost, tierOrder }
]

To retrieve Iterms within a given Tier:
'./itemsIncluded/:tierId'
Will return an array of objects
[
  { itemId, itemOrder },
  ...
  { itemId, itemOrder }
]

## Requirements

- Express 4.17.1
- JQuery 3.5.1
- MySQL 2.18.1
- Node 6.13.0
- Nodemon 2.0.4
- React 16.13.1
- ReactDOM 16.13.1
- Sequelize 6.3.5

