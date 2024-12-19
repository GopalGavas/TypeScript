var score;
score = 55;
score = "73";
var user = {
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
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    if (typeof id === "number") {
        id += 2;
    }
}
var numbersArray = [1, 2, 3];
var stringArray = ["1", "2", "3"];
// const array: number[] | string[] = [1, 4]; // {this means the array can either me string or a number array}
var array = [1, 2, 3, "4", true]; // {with this we can have multiple datatypes in an array}
