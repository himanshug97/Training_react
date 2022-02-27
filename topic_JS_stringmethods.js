//JS strings methods
//JS string length
let txt = "abcdefghijklmnop"
console.log(txt.length)

//JS string Slice, 2 parameters start nd end
let str = "apple, banana, mango, lichi"
console.log(str.slice(13,18))

let stri = "apple, banana, mango, lichi"
console.log(stri.slice(-12,-6))

//JS substring - which slice out the rest of the string
let str1 = "Apple, Banana, Kiwi";
console.log(str1.substr(3))

//replace function
    let text = "Microsoft"
    console.log(text.replace("Microsoft","W3Schools"));
  
    //Lowercase
    let text1 = "Microsoft"
    console.log(text1.toLowerCase())

//UpperCase

let txt1 = "Microsoft"
    console.log(text1.toUpperCase())

//JS Concatination

let x1 = "Hello"
let x2 = "World"
let x3 = x1.concat(" ", x2)
console.log(x3)

//trim function
let x5 = "    Hello"
let x6 = x5.trim();
console.log(x6)

//Padstart function
let a = "5"
let b = a.padStart(5,1);
console.log(b)

//padend function
let w = "5"
let q = w.padEnd(5,1)
console.log(q)

//charAt function
let z = "Hello World"
let char = z.charAt(7)
console.log(char)

//charcodeAt function
let r = "Hello World";
let t = r.charCodeAt(0);
console.log(t)

//split function

let p = "Hello"
const myArr = p.split()

console.log(myArr)