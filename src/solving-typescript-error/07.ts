// class User {
//   private username: string; //problem
// }

// class User {
//   private username: string = ""; //solution 1
// }


//solution 2
class User {
  private username: string;

  constructor(){
    this.username = ""
  }
}
