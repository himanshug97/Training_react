//JS String template
//multiline
let x =
`
this is the
JS
training
`
console.log(x)

//variable strings
let firstName = "Himashu";
let lastName = "Garg";

let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text)

//expressions
let price = 10;
let vat = 0.25;
let total = `Total: ${(price *(1+ vat).toFixed(2))}`;
console.log(total)

