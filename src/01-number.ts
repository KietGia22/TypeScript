import { expect, it } from "vitest";

export const addTwoNumbers = (a:number, b:number) => {
  return a + b;
};

console.log(addTwoNumbers(10, 20))

export const add = (a: string, b: number) => {
  return a + ' ' + b;
}

console.log(add("hahahahahahaha", 30))