import { expect, it } from "vitest";

export const addTwoNumbers = (params: {
    first: number,
    second: number
}) => {
  return params.first + params.second;
};

console.log(addTwoNumbers({
    first: 10,
    second: 15
}))


type AddTwoNumbersArgs = {
  first: number;
  second: number;
};

export const addTwoNumbers2 = (params: AddTwoNumbersArgs) => {
  return params.first + params.second;
};

console.log(addTwoNumbers2({
    first: 55,
    second: 45
}))

