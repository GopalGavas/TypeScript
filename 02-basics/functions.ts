function addTwo(num: number): number {
  return num + 2;
  //   return "hello";
}

function toUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

function loginUser(name: string, email: string, isPaid: boolean = false) {}

const value = addTwo(5);
toUpper("gopal");
signUpUser("gopal", "gopal@ceo.dev", true);
loginUser("gopal", "g@g.com");

// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }

//   return "200 OK";
// }

const getHello = (val: string): string => {
  return "";
};

const heroes = ["thor", "spiderman", "ironman", "batman"];
// const heroes = [1, 2, 3]

heroes.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
