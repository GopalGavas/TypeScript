// Function
function addTwo(n1: number, n2: number): number {
  return n1 + n2;
  // return "hello";
}

function toUpper(name: string) {
  return name.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

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

const getHello = (name: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `Hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
