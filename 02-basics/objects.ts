/*
const User = {
  name: "Gopal",
  email: "gopal@dev.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

const newUser = { name: "Gopal", isPaid: true, email: "gopal@gmail.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}
*/

// Type Aliases
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return user;
}

createUser({ name: "Gopal", email: "gopal7@dev.com", isActive: true });
