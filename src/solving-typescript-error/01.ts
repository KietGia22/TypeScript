interface UserProfile {
  id: string;

  preferences: {
    // theme: "light" | "dark";
    theme: "light" | "dark" | "blue"; //solution 2
    // theme: string -- solution 3
  };
}

let user: UserProfile = {
  id: "123",
  preferences: {
    //problem
    // theme: "blue",
    //solution
    theme: "dark"
  },
};