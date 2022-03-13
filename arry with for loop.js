//arry  with for loop
const arr = [1,2,3];
for(i=0;i<=arr.length;i++){
    console.log(arr[i]);
}

//for in loop
let cap = {
    a:"car",
    b:"bike",
    c:"truck"
};
for(let key in cap){
    console.log(key+":"+cap[key])
}

//
for(let i = 0; i<10;i++){
    console.log(i)
}

//
function val(x){
    
        for(x=0;x<10;x++){
        x;
        }
}
val(10)

//

let h = 0;
do{
    console.log(h);
    h++;
}while(h<10)

//
let b = 0;
while(b<20){
    console.log(b)
    b++;
}


//poer function

function newpow(num,pow){
    var res=1;
    for(var i=0;i<pow;i++){
        res=res*num;    }
        return res;
}
console.log(newpow(2,3))


//
function exp(num1,num2){
if(num2===0){
    return 1;
}else{
return num1*exp(num1,num2-1);
}
}
console.log(exp(2,3))

function fun(name){
name+="";
return name.split("");
}
console.log(fun("himanshu"))

//
function countdown(number){
    if(number===0){
        return;
    }else{
        console.log(number)
        return countdown(number-1);
    }
}
console.log(countdown(10))

//

function evenorodd(n){
    if(n===0){
            return 'Even';
    }else if(n===1){
        return 'odd';
    }else{
        return evenorodd(n-2);
    }
    }

console.log(evenorodd(21))