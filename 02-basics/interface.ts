interface User {
  readonly dbID: number;
  email: string;
  userId: number;
  googleId?: number;
  startTrial(): string;
  getCoupon(couponName: string, discountValue: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const gopal: Admin = {
  role: "admin",
  dbID: 12,
  email: "h@h.com",
  userId: 2221,
  githubToken: "github",
  startTrial: () => {
    return "Trial started";
  },
  getCoupon: (name: "christmas25", off: 10) => {
    return 10;
  },
};

export {};
