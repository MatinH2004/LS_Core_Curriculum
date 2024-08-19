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

*/

const ItemCreator = (() => {
  function generateSkuCode(itemName, category) {
    return (deleteSpaces(itemName).slice(0, 3) + deleteSpaces(category).slice(0, 2)).toUpperCase();
  }

  function isValidItemName(itemName) {
    return deleteSpaces(itemName).length >= 5;
  }

  function isValidCategory(category) {
    return deleteSpaces(category).length >= 5 && category.split(' ').length === 1;
  }

  function isValidQuantity(quantity) {
    return quantity && Number.isInteger(quantity);
  }

  function deleteSpaces(string) {
    return string.replace(/\s/g, '');
  }

  return function(itemName, category, quantity) {
    if (isValidItemName(itemName) && isValidCategory(category) && isValidQuantity(quantity)) {
      this.skuCode = generateSkuCode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

const ItemManager = {
  items: [],
  
  getItem(skuCode) {
    return this.items.find(item => item.skuCode === skuCode);
  },

  create(itemName, category, quantity) {
    const item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update(skuCode, itemInfo) {
    Object.assign(this.getItem(skuCode), itemInfo);
  },

  delete(skuCode) {
    this.items.splice(this.items.indexOf(this.getItem(skuCode)), 1);
  },

  list() {
    return this.items;
  },

  inStock() {
    return this.items.filter(({quantity}) => quantity > 0);
  },

  itemsInCategory(targetCategory) {
    return this.items.filter(({category}) => category === targetCategory);
  },
};

const ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(skuCode) {
    const item = this.items.getItem(skuCode);

    return {
      itemInfo() {
        Object.keys(item).forEach(key => {
          console.log(`${key}: ${item[key]}`);
        });
      },
    };
  },

  reportInStock() {
    console.log(this.items.inStock().map(({itemName}) => itemName).join(', '));
  }
}

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