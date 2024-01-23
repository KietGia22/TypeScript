import { expect, it } from "vitest";

export const getName = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

console.log(getName("Hahaha"))

console.log(getName("Gia","Kiet"))