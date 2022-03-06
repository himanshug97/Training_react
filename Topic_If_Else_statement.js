//If Else statement
//if statement

if (new Date().getHours()<18)
{
    console.log("good day")
}
//else statement
let x = new Date().getHours();
let greeting;
if (x < 18){
    greeting = "good day";
}
else{
    greeting = "good evening";

}
console.log(greeting)

//else if statemnt

let time = new Date().getHours();
let a;

if (time<10){
    a = "Good Morning";
} else if (time<20)
{
    a="Good Day";
}else
{
    a = "Good evening";
}
console.log(a)



//self example

let w = 50;
let b;
if(w<20){
    b = "less number";
}else if(w>20){
    b = "more than";
}else{
    b= "undefined";
}
console.log(b)