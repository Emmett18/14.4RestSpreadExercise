//Emmett Kjolseth
//4/14/2024
//Rest and Spread Exercise

// 1) Refactor code to use rst operator and arrow func
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

// 2) findMin - Finds min value of any size list
const findMin = (...nums) => Math.min(...nums);

// 3) mergeObjects - Takes two objects and returns all of their key and val pairs
const mregeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// 4) doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((arg) => arg * 2),
];

// 5) Slice and Dice
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
  let idx = Math.floor(Math.random * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)]; //Slice the list between the random item removed
}; //Note: When only one index in slice, it slices from there to the end.

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 }); //Need parens around obj to return

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
