//solution 
type User_02 = {
  name: string;
  //solution
  age?: number;
};

const user_02: User_02 = {
    name: "Kiet",
    age: 21 // solution 
}

//problem
user_02.age = 24;
console.log(user_02.age)