// const puppeteer = require('puppeteer');
// const pageUrl = "http://localhost:3101/";
const db = require('./database/index.js');

/*
Not currently used, will need for future testing
let page, browser;
const width = 1200;
const height = 700;
*/

/*
Not currently used, will need for future testing
beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=${width}, ${height}']
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  // browser.close();
});
*/

describe('Database seeds correctly', () => {

  test('Generates exactly 3 tiers in a bundle', () => {
    return db.tiersRequest({ bundleId: 1 })
    .then(results => {
      expect (results.length).toBe(3);
    })
    .catch(err => {
      console.log('error: ', err);
    })
  });

  test('Does not generate less than 2 items in a tier', () => {
    return db.itemsRequest({ tierId: 1 })
    .then(results => {
      expect(results.length).toBeGreaterThan(1);
    })
    .catch(err => {
      console.log('error: ', err);
    })
  });

  test('Does not generate more than 6 items in a tier', () => {
    return db.itemsRequest({ tierId: 1 })
    .then(results => {
      expect(results.length).toBeLessThan(7);
    })
    .catch(err => {
      console.log('error: ', err);
    })
  });
});

describe('Can get tiers by module', () => {

  test('None of the tiers in a module are duplicated', () => {
    return db.tiersRequest({ bundleId: 1})
    .then(results => {
      let unequal = (
        (results[0].tierId !== results[1].tierId) &&
        (results[0].tierId !== results[2].tierId) &&
        (results[1].tierId !== results[2].tierId));
      expect(unequal).toBe(true);
    })
    .catch(err => {
      console.log('error: ', err);
    })
  });

  test('Unused', () => {
    // TODO
    // Add new test here, previous was not useful
  });
});

describe('Can get items by tier', () => {

  test('None of the items in a tier are duplicated', () => {
    return db.itemsRequest({ tierId: 1})
    .then(results => {
      let unequal = (
        (results[0].itemId !== results[1].itemId) &&
        (results[0].itemId !== results[2].itemId) &&
        (results[1].itemId !== results[2].itemId)
      );
      expect(unequal).toBe(true);
    })
    .catch(err => {
      console.log('error: ', err);
    })
  });

  test('There are not less than 2 or more than 6 items in a tier', () => {
    return db.itemsRequest({ tierId: 1 })
    .then(results => {
      expect(results.length).toBeGreaterThan(1) &&
        expect(results.length).toBeLessThan(7);
    })
    .catch(err => {
      console.log('error: ', err);
    })
  });
});

/*
describe('component displays correct tiers', () => {

  // beforeEach(async () => {
  //   await page.goto(pageUrl, { waitUntil: 'networkIdle2' });
  // });

  test('', () => {
    //
  });

  test('', () => {
    //
  });
});

describe('component displays correct items', () => {

  // beforeEach(async () => {
  //   await page.goto(pageUrl, { waitUntil: 'networkIdle2' });
  // });

  test('', () => {
    //
  });

  test('', () => {
    //
  });
});
*/
