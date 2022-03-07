//JS while loop
let x = 0;
while(x<20){
    x++;
    console.log(x)
}

//JS do while loop
let a = 0;
do{
    console.log(a+1);
    a++;
}while(a<10);


//break-It stops the iteration
let b = 0;
do{
    console.log(b+1);
   if(b==5){
       break;
   }
    b++;
}while(b<10);

//continue- It continues the 2nd iteration and skips the 1st

let v = 0;
do{
    if(v===5){
    v+=1;
    continue;
    }
    console.log(v+1);
   v+=1;
}while(v<10);

//for each as array

let arr =[5,4,28,9,52,56]
arr.forEach(function(element){
    console.log(element)
})

//for loop as array
let w = [25,256,54,65,580]
for (let i = 0; i < w.length; i++) {
    const element = w[i];
    console.log(element)
    
}

//Object
let obj = {
    name:"Himanshu",
    age: 24,
    type: "Trainee",
    os: "windows"
}
for (let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}

//(obj[key])