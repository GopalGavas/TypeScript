function add(input1: number, input2: number) {
  return input1 + input2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

console.log(printResult(add(5, 7)));

// let someValue =  undefined

let combinedValues: (n1: number, n2: number) => number;

combinedValues = add;
// combinedValues = printResult;
// combinedValues = 5;

console.log(combinedValues(5, 11));
