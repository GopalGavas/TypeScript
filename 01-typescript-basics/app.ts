// "unknown"
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

// "never"

function generateError(message: string, statusCode: number): never {
  throw { message: message, statusCode: statusCode };
}

generateError("something went wrong", 500);
