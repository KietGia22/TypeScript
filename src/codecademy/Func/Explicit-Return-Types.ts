function returnFruit():string{
  let num = Math.random();
  switch(num){
    case 1 : return f1();
		case 2 : return f2();
		case 3 : return f3();
		case 4 : return f4();
		case 5 : return f5();
		case 6 : return f6();
		case 7 : return f7();
		case 8 : return f8();
		case 9 : return f9();
		case 10 : return f10();
		case 11 : return f11();
		case 12 : return f12();
  }
  return 'durian.jpg'
}

console.log(returnFruit())