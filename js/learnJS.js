// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

let array = ["a", "b", "c"];

var number = function (array) {
  for (let i = 0; i < array.length; i++) {
    let curResult = i + 1 + ": " + array[i];
    array[i] = curResult.toString();
  }

  return array;
};

console.log(number(array));
