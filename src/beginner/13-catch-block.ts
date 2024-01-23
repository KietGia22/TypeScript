import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e: any) {
    return e.message;
  }
};  

// cách 2:

// const tryCatchDemo = (state: "fail" | "succeed") => {
//   try {
//     if (state === "fail") {
//       throw new Error("Failure!");
//     }
//   } catch (e) {
//     return (e as Error).message;
//   }
// };  


// cách 3: 
// const tryCatchDemo = (state: "fail" | "succeed") => {
//   try {
//     if (state === "fail") {
//       throw new Error("Failure!");
//     }
//   } catch (e) {
//     if(e instanceof Error) {
//     return e.message;
//   }
// };  