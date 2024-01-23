interface Dog {
  bark: boolean;
}

let cat = { purr: true };

// let dog = cat as Dog; // problem

let dog = cat as any as Dog;