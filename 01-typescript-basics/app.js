// "unknown"
var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
// "never"
function generateError(message, statusCode) {
    throw { message: message, statusCode: statusCode };
}
generateError("something went wrong", 500);
