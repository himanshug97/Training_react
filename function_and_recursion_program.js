//function and recursion program

function fun(add){
    console.log(add*add)
}
fun(10,20)

function profile(name,age){
    console.log(name,age);
}
profile("himanshu",24)

//Recursion practice
//factorial of 5
function value(x){
if(x===0){
    return 1;
}else{
    return x * value(x-1);
}
}
console.log(value(5))

//range program
var range = function(start, end) 
{
  if (end - start === 2) 
  {
    return [start + 1];
  } 
  else 
  {
    var list = range(start, end - 1);
    list.push(end - 1);
    return list;
  }
};

console.log(range(2,9));

//sum of array
var array_sum = function(my_array) {
    if (my_array.length === 1) {
      return my_array[0];
    }
    else {
      return my_array.pop() + array_sum(my_array);
    }
  };
  
  console.log(array_sum([1,2,3,4,5,6]));
  //exponent of a number
  function exp(a,n){
      if (n===0){
          return 1;
      }else{
          return a*exp(a,n-1);
      }
  }
  console.log(exp(4,2))

  //reverse
  function rev(n){
      n = n+"";
      return n.split("").reverse().join("");
  }
  console.log(Number(rev(322)));
