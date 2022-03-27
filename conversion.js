
//type conversion- It converts int values into strings or numbers
let res;
res=String(34);
console.log(res,(typeof res))

let date = String(new Date());
console.log(date,(typeof date))

let boolean = String(true);
console.log(boolean,(typeof boolean))

//typeof
let arr = String([1,2,3,4,5]);//arr length is no of elements and string length is no of chars
console.log(arr.length,(typeof arr));

//.toString()
let i = 8;
console.log(i.toString());

//Number()
let stri = Number("345");
stri= Number(false)
console.log(stri,(typeof stri))

//paresInt and parseFloat
let num = parseFloat(34.09);
console.log(num, (typeof num))

//toFixed
let num1 =34.098;
console.log(num.toFixed(),(typeof num1));


//type coercion
