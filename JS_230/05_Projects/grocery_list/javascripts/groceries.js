// My Solution
// document.addEventListener('DOMContentLoaded', () => {
//   const list = (() => {
//     const groceries = [];
  
//     return {
//       add(name, quantity) {
//         if (!quantity) quantity = '1';
//         groceries.push(`${quantity} ${name}`);
//       },
  
//       items: groceries,
//     }
//   })();

//   const form = document.querySelector('form');
//   const groceryList = document.querySelector('#grocery-list');
//   const getValueOf = selector => form.querySelector(selector).value;

//   form.addEventListener('submit', e => {
//     e.preventDefault();

//     let name = getValueOf('#name');
//     let quantity = getValueOf('#quantity');
//     list.add(name, quantity);

//     let li = document.createElement('li')
//     li.textContent = list.items[list.items.length - 1];
//     groceryList.appendChild(li);

//     form.reset();
//   });

//   groceryList.addEventListener('click', e => {
//     e.stopPropagation();

//     if (e.target.tagName === 'LI') {
//       e.target.classList.toggle('completed');
//     }
//   });
// });

// LS Refactored
(function GroceryListManager() {
  class GroceryList {
    constructor(listContainerElement) {
      this.list = document.querySelector(listContainerElement);
    }

    addItem(name, quantity) {
      var listItem = document.createElement('li');
      listItem.append(`${quantity} ${name}`);

      this.list.append(listItem);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    let myGroceryList = new GroceryList('#grocery-list');

    const getValueOf = selector => form.querySelector(selector).value;
    
    form.addEventListener('submit', e => {
      e.preventDefault();

      let name = getValueOf('#name');
      let quantity = getValueOf('#quantity') || '1';

      myGroceryList.addItem(name, quantity);
      form.reset();
    });

    myGroceryList.list.addEventListener('click', e => {
      e.stopPropagation();
      if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
      }
    });
  });
})();