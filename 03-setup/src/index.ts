// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  private _courseCount = 1;

  readonly city: string = "";
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  get appleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const gopal = new User("gopalgavas@gmail.com", "Gopal");
// gopal.city = "Mumbai";
