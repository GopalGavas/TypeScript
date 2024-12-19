const array: (string | number)[] = [2, "3", 4, 5, "7"]; // can have mix arrays dont have to worry about  orders

const tUser: [string, number, boolean] = ["25", 7, true]; // it follows a strict order i.e 1st should be number and 2nd string

let rgb: [number, number, number] = [255, 125, 200];

type User = [number, string];

const newUser: User = [112, "example@gmil.com"];

newUser[1] = "hc.com";
newUser.push();
