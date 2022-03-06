const keys = require('keys');
//Js Array Iteration
//Array forEach()
const num = [45,5, 2, 20];
let text = "";
num.forEach(myFunction);
console.log(text);

function myFunction(value, index, array){
    text += value + "<br>";
}

//map() function- it performs functions
let x = [2, 3,4,5,6];
let y = x.map(myFunction);

console.log(y);
function myFunction(value, index, array){
    return value*2;
}

//filter() method- it passes the test
let x1 = [2, 3,4,5,6];
let y1 = x1.filter(myFunction);

console.log(y1);
function myFunction(value, index, array){
    return value>4;
}

//reduce functon
let a = [2,4,6,8,10]
let b = a.reduce(myFunction);
console.log("the sum is" + b)

function myFunction(total, value, index, array){
return total+value;
}

//every()- it passes all 
let c = [25,30,45,88];
let v = c.every(myFunction);
console.log("the statement is" + v);

function myFunction(value, index, array){
    return value > 20;
}

//Indexof()- shows the first postion of the element
//lastindexof()-shows the last positon

//find()

let c1 = [25,30,45,88];
let v1 = c1.find(myFunction);
console.log("the statement is" + v1);

function myFunction(value, index, array){
    return value > 20;
}

//Array.from()returns an Array object from any object with a length property or any iterable object
let g = Array.from("ABCDEFG");
console.log(g)


