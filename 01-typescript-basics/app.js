function add(input1, input2) {
    return input1 + input2;
}
function printResult(num) {
    console.log("Result: " + num);
}
console.log(printResult(add(5, 7)));
// let someValue =  undefined
var combinedValues;
combinedValues = add;
// combinedValues = printResult;
// combinedValues = 5;
console.log(combinedValues(5, 11));
