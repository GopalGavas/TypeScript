function detectType(val: string | number) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }

  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please input proper id");
    return;
  }

  return id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  } else {
    // do nothing
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminOrNot(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    // console.log("Fish Food");
    pet;
    return "Fish Food";
  } else {
    // console.log("Bird Food");
    pet;
    return "Bird Food";
  }
}

interface Circle {
  type: "circle";
  radius: number;
}

interface Square {
  type: "square";
  side: number;
}

interface Rectangle {
  type: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.type === "circle") {
    return Math.PI * shape.radius ** 2;
  }

  //   return shape.side * shape.side;
}

function getArea(shape: Shape) {
  switch (shape.type) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side ** 2;

    case "rectangle":
      return shape.length * shape.width;

    default:
      const _defaultforShape: never = shape;
      return _defaultforShape;
  }
}
