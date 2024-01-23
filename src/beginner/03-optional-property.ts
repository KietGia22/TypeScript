import { expect, it } from "vitest";

export const getName = (params: { first: string; last?: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

console.log(getName({
    first: "Hahaha"
}))

console.log(getName({
    first: "Gia",
    last: "Kiet"
}))
