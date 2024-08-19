/*
// item creator
  - makesure all necessary info is present and valid

// item manager
  - create items
  - update info about items
  - delete items
  - query info about the items

// reports manager
  - generate reports for a specific item (generate report object)
    - or all items (constructor handles this)

--- Component Specs

// SKU Code
  - unique id for a product
  - consists first 3 letter of the item + first 2 letters of category
    - If the item name consists of two words and the first word consists of 
    - two letters only, the next letter is taken from the next word.

// Item Name
  - must consist of 5 letters min (spaces don't count)

// Category Name
  - must consist of 5 letters min + must be one word

// Quantity
  - must not be blank, assume a valid num will be input

--- Object Behaviours

# ItemManager
  - create:
    - creates a new item, returns false if creation not successful
    - inherits from ItemCreator
  - update:
    - accepts SKU code as first arg
    - accepts object as second args, and will make changes to the item (assume valid values are provided)
  - delete:
    - accepts SKU code and deletes the item. (assume SKU will always be provided)
  - items:
    - contains a list of all items
  - inStock:
    - lists all items in that have a quantity over 0
  - itemsInCategory:
    - lists all items in a given category

# Reports Manager
  - init:
    - accepts ItemManager as arg and assigns to `items` prop
  - createReporter:
    - accepts SKU code and returns an object
      - the object has one method `itemInfo`
      - it logs all k:v pairs of the item object
  - reportInStock:
    - logs to the console the names of all items in stock
    - ex. football, kitchen pot

--- Data Structure

ItemCreator should be the parent class of ItemManager
  - contains .create method

*/

class ItemCreator {
  create(itemName, category, quantity) {
    if (this.validItem(itemName, category, quantity)) {
      this.#items.push({
        skuCode: this.generateSku(itemName, category),
        itemName,
        category,
        quantity
      });
    } else {
      return { notValid: true };
    }
  }

  generateSku(name, category) {
    return (name.replace(' ', '').slice(0, 3) + category.slice(0, 2)).toUpperCase();
  }

  actualLength(str) {
    return str.replace(' ', '').length;
  }

  validItem(name, category, quantity) {
    return (this.actualLength(name) >= 5 &&
            this.actualLength(category) >= 5 &&
            Number.isInteger(quantity));
  }
}

class _ItemManager extends ItemCreator {
  #items;

  constructor() {
    super();
    this.#items = [];
  }

  update(skuCode, propObj) {
    const item = this.findBySku(skuCode);
    const keys = Object.keys(propObj);

    for (let key of keys) {
      item[key] = propObj[key];
    }
  }

  delete(skuCode) {
    const item = this.findBySku(skuCode);
    this.#items = this.#items.filter(product => product[skuCode] !== item[skuCode]);
  }

  itemsInCategory(category) {
    return this.#items.filter(product => product['category'] === category).join(', ');
  }

  items() {
    return this.#items.join(', ')
  }

  inStock() {
    return this.#items.filter(product => product['quantity'] > 0).join(', ');
  }

  findBySku(sku) {
    return this.#items.find(({skuCode}) => sku === skuCode);
  }
}

class _ReportManager {
  constructor(obj) {
    this.items = obj;
  }

  createReporter(sku) {
    const item = this.items.findBySku(sku);
    item = Object.create({}, item);
    item.itemInfo = function() {
      for (let key in item) {
        console.log(`${key}: ${item[key]}`);
      }
    }
  }

  reportInStock() {
    return this.items.inStock();
  }
}

const ItemManager = new _ItemManager();
const ReportManager = new _ReportManager(ItemManager);

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10