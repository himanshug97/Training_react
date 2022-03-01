//JS Number methods

//toString() method - it retuns the number as string
let x = 123;
console.log(x.toString())

 //toExponential() method- returns a string
 let y = 9.656;
 console.log(y.toExponential())

 //toFixed() method- returns a string with the number
 let q = 9.656;
 console.log(q.toFixed(0) + ","+ q.toFixed(1) + ", " + q.toFixed(5))

//toPrecision method- returns a string with a number with specified length
let w = 9.656;
console.log(w.toPrecision() + "," + w.toPrecision(6))

//value() method -returns a number as a number
let e = 123;
console.log(e.valueOf() + (100 + 23).valueOf())

//Number() method- convert JS variables to numbers
console.log(Number(true), Number(false), Number("10"), Number("John"))

//ParseInt() and Parsefloat()
console.log(parseInt("10"), parseFloat("-10.33"))

//ma_value- return the max number in JS
let z = Number.MAX_VALUE;
console.log(z)

//min_value

let c = Number.MIN_VALUE;
console.log(c)

//Negative Infinity
let v = -1/0;
console.log(v)

//Positive Infinity
let u = 100/0;
console.log(u)