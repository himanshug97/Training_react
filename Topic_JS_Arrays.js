//JS Arrays

// creating an array
const cars = ["BMW", "Audi", "Nano"];
console.log(cars)

//New Array
const q = new Array("BMW", "Audi", "Nano");
console.log(q)

//Creating aaray with index number
const w = ["BMW", "Audi", "Nano"]
console.log(w[1])

//Changing an array
const e = ["BMW", "Audi", "Nano"]
e[0] = "kia";
console.log(e)

//Arrays are object
const person = {firstName:"John", lastName:"Doe", age:25}
console.log(person.lastName)

//Arrays properties and methods
//length property

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length)

//Sort method
let fruit1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit1.sort)

//looping array elements
 const fruits2 = ["Banana", "Orange", "Apple", "Mango"]
 let fLen = fruits2.length;

 let text = "<ul>";
for (let i = 0; i < fLen; i++) {
    text +="<li>" + fruits2[i] + "<li>";
}

text +="</ul>";
console.log(text)

//adding an element

let r = ["Banana", "Orange", "Apple", "Mango"];
r.push("lemon")
console.log(r)

//Undefined holes
let t = ["Banana", "Orange", "Apple", "Mango"];
t[6] = "lemon";
let tLen = t.length;
for (i=0; i < tLen; i++){
    text +=t[i] + ",";
}
console.log(text)

//Array numbered indexes
let y = [];
y[0]= "john";
y[1]= "doe"
console.log(y[0])

//Array named indexes
let u = [];
u["firstname"] = "john";
u["lastname"] = "doe";
console.log(u[0])
//isarray
const p = ["Banana", "Orange", "Apple", "Mango"];
console.log(Array.isArray(p));