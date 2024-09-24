// 'TYPE ALIASES'
type Combinable = number | string;
type ResultDescription = "as-number" | "as-string";

// "UNION TYPES"
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ResultDescription // 'literal types'
) {
  let result;
  // {runtime time check will not be always required but most of the time it will be required}
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(25, 30, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("25", "30", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Leo", "Antonella", "as-string");
console.log(combinedNames);

// 'TYPE ALIASES' : 'can also be used to create your types for eg: '

// "Instead of this you can use type ALiases"
// function greet(user: { name: string; age: number }) {
//   console.log("Hi, I am " + user.name);
// }

// greet({ name: "Gopal", age: 21 });

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }

// console.log(isOlder({ name: "Aakash", age: 21 }, 30));

type User = { name: string; age: number };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

greet({ name: "Gopal", age: 21 });

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

console.log(isOlder({ name: "Aakash", age: 21 }, 30));
