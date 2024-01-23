let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

//Write Your Code here:
const checkCustomersArray = ()=>{
  customersArray.forEach(ele => {
      if(typeof ele != 'string'){
      console.log(`Type error: ${ele} should be a string!`)
    }
  })
}

checkCustomersArray();

function stringPush(val){
  if(typeof val === 'string'){
    customersArray.push(val);
  } 
}