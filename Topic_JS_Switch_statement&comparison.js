//JS Switch statement


let day;
switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thrusday";
        break;
    case 5:
        day = "friday";
        break;
    case 6:
        day = "Saturday";
}
console.log("Today is"+" "+ day)

// JS Comparison and Logical Operators

let age = 10;
let x;
if(age<18){
    x = "too young for drink";
}
else{
    x= "eligible for the drink";

}
console.log(x)