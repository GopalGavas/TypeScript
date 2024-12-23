"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please input proper id");
        return;
    }
    return id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
    else {
        // do nothing
    }
}
function isAdminOrNot(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        // console.log("Fish Food");
        pet;
        return "Fish Food";
    }
    else {
        // console.log("Bird Food");
        pet;
        return "Bird Food";
    }
}
function getTrueShape(shape) {
    if (shape.type === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    //   return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.type) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforShape = shape;
            return _defaultforShape;
    }
}
