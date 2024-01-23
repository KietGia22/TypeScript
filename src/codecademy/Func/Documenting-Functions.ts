/**
 * Logs a string of a salad based on user inputs
 *
 * @param fruit1 - The first input string
 * @param fruit2 - The second input string
 * @returns void because it only logs the salad string
 */

function makeFruitSalad(fruit1: string, fruit2: string): void {
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2+ fruit1 + fruit1;
  console.log(salad);
}


/**
 * Logs a string with user input repeated
 *
 * @param status - User input string
 * @param repeat - User input number
 * @returns void, only logs the string
 */
function proclaim(status = 'not ready...', repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}