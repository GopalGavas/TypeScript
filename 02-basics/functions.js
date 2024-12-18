"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Function
function addTwo(n1, n2) {
    return n1 + n2;
    // return "hello";
}
function toUpper(name) {
    return name.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5, 7);
toUpper("Hitesh");
signUpUser("Gopal", "gopal@dev.com", true);
loginUser("aakash", "aakash@dev.com");
// unions [will cover later]
// function getValue(myVal: number): boolean | string {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200  OK";
// }
var getHello = function (name) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
