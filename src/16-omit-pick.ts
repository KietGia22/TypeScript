import { Equal, Expect } from "../helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName?: string;
}

type myType1 = Omit<User, "id">

const obj1: myType1 = {
   firstName: "Kiet",
}

type myType2 = Pick<User, "firstName" | "lastName">
const obj2: myType2 = {
   firstName: "Kiet2",
   lastName: "Gia"
}

console.log(obj1.firstName)
console.log(obj2.lastName)