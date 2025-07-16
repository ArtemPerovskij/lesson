function add(a, b) {
  //блок выравнивания по длине

  console.log("a.length = ", a.length);
  console.log("b.length = ", b.length);
  console.log(b.length - a.length);

  let dif =  Math.abs(a.length - b.length)

  if (a.length > b.length) {
    for (let i = 0; i < dif; i++) {
      b = "0" + b;
    }
  } else if (a.length < b.length) {
    for (let i = 0; i < dif; i++) {
      a = "0" + a;
    }
  }

  console.log("a = ", a);
  console.log("b = ", b);

  // преобразования для удобства
  a = [...a].reverse();
  b = [...b].reverse();

  // блок сложения
  let result = [];
  let counter = 0;

  for (let i = 0; i <= a.length - 1; i++) {
    // console.log ("counter = ", counter)
    let currentSum = Number(a[i]) + Number(b[i]) + counter;
    // console.log ("currentsum = ", currentSum)

    if (currentSum < 10) {
      counter = 0;
      result.push(currentSum);
    } else {
      if (i == a.length - 1) {
        result.push(currentSum - 10);
        result.push(1);
      } else {
        result.push(currentSum - 10);
        counter = 1;
      }
    }
  }

  //return resultNotReverse
  return [...result].reverse().join("");
}

// console.log(add("1", "1"));
// console.log("-----");
console.log(add("12", "456"));
console.log("-----");

// console.log(add("123", "45"));
// console.log("-----");
console.log(add("63829983432984289347293874", "90938498237058927340892374089"));
console.log("-----");

// console.log(add("888", "222"));
// console.log("-----");
