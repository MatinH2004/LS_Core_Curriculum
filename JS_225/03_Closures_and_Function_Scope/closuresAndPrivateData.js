// 1.

function makeCounterLogger(i) {
  return (j) => {
    if (i < j) {
      for (let num = i; num <= j; num++) {
        console.log(num);
      }
    } else {
      for (let num = i; num >= j; num--) {
        console.log(num);
      }
    }
  }
}

let countlog = makeCounterLogger(5);

// countlog(8);
// 5
// 6
// 7
// 8
// countlog(2);
// 5
// 4
// 3
// 2

// 2.

function makeList() {
  const list = [];

  return (todo) => {
    if (!todo && list.length === 0) {
      console.log('The list is empty');
      return;
    } else if (!todo) {
      console.log(list.join("\n"));
      return;
    }

    if (!list.includes(todo)) {
      list.push(todo);
      console.log(`${todo} added!`);
      return;
    } else if (list.includes(todo)) {
      list.splice(list.indexOf(todo), 1);
      console.log(`${todo} removed!`);
      return;
    }
  };
}

let list = makeList();
list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book