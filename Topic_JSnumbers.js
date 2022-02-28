//JS Numbers

//Numbers can be written with or without decimals
let x = 3.14;
let y = 3;
console.log(x, y)

//JS expponent notation
let a = 123e5;
let b = 123e-5;
console.log(a,b)

//Floating precision

let z = 0.2 + 0.1;
console.log("0.2 + 0.1= "+ x)

//Adding numbers
let m = 10;
let n = 10;
console.log(m+n)

//Adding strings

let p = "10"
let o = "10"
console.log(p+o)

//NAN 
let h = 100
let g = "debu"
console.log(h/g)

//typeof NAN
let j = NaN;
console.log(typeof x)

//Infinity Number

let myNumber = 2;
let txt = "";
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    txt = txt + myNumber + ",";
}
console.log(txt)

//JS number as object

let c = 123; //number
let v = new Number(123); //Number object
console.log(typeof c + typeof v)

//equal operator

let k = 100;
let l = new Number(100);
console.log(k==l)

//not equal operator

let e = 50;
let f = new Number(50);
console.log(e===f)

