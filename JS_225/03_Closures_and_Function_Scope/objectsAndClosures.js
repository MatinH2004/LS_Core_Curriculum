function makeList() {
  const items = [];

  return {
    add(item) {
      items.push(item);
      console.log(`${item} added!`);
    },

    remove(item) {
      let idx = items.indexOf(item);
      items.splice(idx, 1);
      console.log(`${item} removed!`);
    },

    list() {
      if (items.length === 0) {
        console.log('The list is empty!');
      } else {
        console.log(items.join("\n"));
      }
    },

    clear() {
      items = [];
      console.log('all items deleted!');
    }
  }
}

let list = makeList();
list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn