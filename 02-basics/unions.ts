let score: number | string;

score = 55;

score = "73";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let user: User | Admin = {
  name: "Gopal",
  id: 25,
};

user = {
  username: "Gopal",
  id: 7,
};

// function getDbId(id: number | string) {
//   // Making API Call
//   console.log(`DB ID is: ${id}`);
// }

getDbId(7);
getDbId("25");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
  if (typeof id === "number") {
    id += 2;
  }
}

const numbersArray: number[] = [1, 2, 3];
const stringArray: string[] = ["1", "2", "3"];
// const array: number[] | string[] = [1, 4]; // {this means the array can either me string or a number array}

const array: (string | number | boolean)[] = [1, 2, 3, "4", true]; // {with this we can have multiple datatypes in an array}
