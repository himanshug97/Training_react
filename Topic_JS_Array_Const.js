//JS Array Const

//An array declared with const cannot be reassigned:
try {
const cars = ["Saab", "Volvo", "BMW"];
  cars = ["Toyota", "Volvo", "Audi"];
}
catch(err){
    console.log(err)
}

//Elements Can be Reassigned

const x = ["Saab", "Volvo", "BMW"];
x.push("audi");
console.log(x)

//Blocked scope
const c = ["Saab", "Volvo", "BMW"];
// Here c[0] is "Saab"
{  
  const c = ["Toyota", "Volvo", "BMW"]; 
  // Here c[0] is "Toyota"
}
// Here c[0] is "Saab"
console.log(c[0])

//with var

var f = ["Saab", "Volvo", "BMW"];
// Here f[0] is "Saab"
{  
  var f = ["Toyota", "Volvo", "BMW"]; 
  // Here c[0] is "Toyota"
}
// Here c[0] is "Saab"
console.log(f[0])

