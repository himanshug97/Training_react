//If else practice questions normal or with function

//largest
let num1 = 50;
let num2 = 20
let print;
if (num1<num2){
    print = "higher value"
}else{
    print = "lower value"
}
console.log(print)

//
function find_largest(num1,num2){
    if(num1>num2){
        console.log(`${num1}is the largest`);
    }else{
        console.log(`${num2}is the largest`)
    }
}
find_largest(5,2)


//largest of three numbers
let n1=10;
let n2=12;
let n3=5;
let result;
if(n1>n2 && n1>n3){
result="n1 is the largest value";
}else {if(n2>n3){
    result="n2 is the largest value";

}else{
    result="n3 is the largest value";
}
}
console.log(result)


//even or odd
function isEvenorOdd(num){
    if (num % 2 ==0){
        console.log(`${num}is a Even number`)
    }else{
        console.log(`${num} is a odd number`)
    }
}
isEvenorOdd(10);
isEvenorOdd(13)

//simple even or add
let num4 = 10;
let x;
if(num4%2==0){
x="this is even value"
}else{
    x = "this is odd value"
}
console.log(x)

//Inrange with function
function in_range(num,start,end){
    if (num>=start && num<= end){
        console.log(`${num} is between the range ${start} and ${end}`)
    }else{
        console.log(`${num} is outside the range ${start} and ${end}`)
    }
}
in_range(15,11,18)


//with normal
let a = 19;
let b = 11;
let c = 18;
let value;
if(a>=b && a<=c){
value = "In the range"
}else{
    value= "Outside the range"
}
console.log(value)

//Check if input variable is a number or not
function isValid(num){
    if(isNaN(num)){
        console.log(`Is not a number`);
    }else{
        console.log(`Is a number`);
    }
}
isValid("himanshu")

//if a triangle is equilateral, scalene, or isosceles
let side1=12;
let side2=19;
let side3=10;
let type;
if((side1==side2)&& side1==side3){
type="this is  Equilateral triangle"
}else if((side1==side2) || (side2==side3)){
type="this is a iscoceles triangle"
}else{
    type="this is a scalene triangle"
}
console.log(type)

//arithmetic operations on two numbers
function evalNum(v1,v2,op){
    if(op=="add"){
        console.log(`the sum is ${v1+v2}`)
    }else if(op=="sub"){
        console.log(`the sum is ${v1-v2}`)
    }
    else{
        console.log(`${op} is invalid`)
    }
}
evalNum(15,10,"add")
evalNum(10,2,"sub")

//leap year
let year = 2013;
let opt;
if((year%4==0)&&(year%100!=0)){
    opt = "this is a leap year"
}else if(year%400==0){
    opt="this is a leap year"
}else{
    opt= "not a leap year"
}
console.log(opt)

//Find the grade for input marks
let name = "Himanshu";
let marks = 65;
let grade;
if(marks>=90 && marks<=100){
    grade = `${name} is received a A grade`
}else if(marks>=60 && marks <70){
    grade = "received a C grade"
}
else{
    grade = "received a D grade"
}
console.log(grade)

