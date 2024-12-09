type Pair<T, U> = {
  first: T;
  second: U;
};

const myPair: Pair<number, string> = {
  first: 42,
  second: "Answer",
};

// const yourPair: Pair<number, string> = {
//   first: "Another answer",                     // Error!
//   second: 42,
// };

//////////////////////////\////////////////////////////////

type KeyValuePairs<T, U> = {
  key: T;
  values: U[];
};

const myPairs: KeyValuePairs<string, number> = {
  key: "Numbers",
  values: [1, 2, 3, 4, 5],
};

// const yourPairs: KeyValuePairs<number, string> = {
//   key: 42,
//   values: ["One", "Two", 3, "Four"],            // Error: string[] contains number type
// };