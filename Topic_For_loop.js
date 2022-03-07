//For loop

for(let i=0; i<10;i++){
    console.log(i)
}
let a=34;
a += 1;
a++;
console.log(a)

//For In loop
 const person = {fname:"john", lname:"doe"
 };
 let txt = "";
 for (let x in person){
     txt += person[x] + " ";
 }
console.log(txt)

//For Of loop
let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x + "<br>";
}
console.log(text+ ",")

