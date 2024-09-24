// const person: {
//   name: string;
//   age: number;
// } = {

// NOTE: Better syntax
const person = {
  name: "Gopal",
  age: 21,
};

console.log(person.name);

// [Nested Objects]
// const product: {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   };
// } = {

const product = {
  id: "abc1",
  price: 12.99,
  // "Arrays"
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

console.log(product.tags);

// [Arrays]

for (const tag of product.tags) {
  console.log(tag.toUpperCase());
}

let favoriteActivities: string[];
favoriteActivities = ["COOKING", "SPORTS"];

favoriteActivities.map((activity) => {
  console.log(activity.toLowerCase());
});

// [Tuples]
// NOTE: "Tuples are not supported in javascript but typeScript supports it"
// NOTE: "Tuples have fixed length and fixed data type "

const user: {
  name: string;
  age: number;
  role: [number, string];
} = {
  name: "Gopal",
  age: 21,
  role: [1, "author"],
};

user.role.push("admin"); // "(EXCEPTION): this is allowed"
// user.role[1] = 10; // "this is not"
// user.role = [1, "author", "admin"]; // "this is  also not allowed, Tuples gives a fix length"

// [ENUMS]
/*
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
*/

// Better alternative
// NOTE: 'you can assign your own number or even strings'
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const user1 = {
  name: "Gopal",
  age: 21,
  role: Role.AUTHOR,
};

if (user1.role === Role.AUTHOR) {
  console.log("Author..");
}
