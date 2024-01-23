const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
};

// try {
//   somethingDangerous();
// } catch (error) {
//   console.log(error.message); //problem
// }

//solution 1
// try {
//   somethingDangerous();
// } catch (error:any) {
//   console.log(error.message);
// }

//solution 2
// try {
//   somethingDangerous();
// } catch (error) {
//   console.log((error as Error).message);
// }

//solution 3
try {
  somethingDangerous();
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    else {
        throw error;
    }
}