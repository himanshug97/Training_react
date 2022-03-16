function greet(name){
    console.log(`happy Birthday to ${name}`)
}
greet("himanshu");
greet("vipul");
greet("anuj")


function sum(num1,num2){
    console.log(num1+num2)
}
sum(2,2)
sum(1,2)
//factorial rec with IF else
function fac(num){
    if(num===0){
        return 1;
    }else{
        
        return num*fac(num-1);
    }

}
console.log(fac(4))


//factorial rec with for loop
function value(sum){
    if(value===0)
        return 1;
        for(var i=sum-1;i>=1;i--){
        sum= sum*i;
    }
    return sum;
}
console.log(value(4))

//factorial rec with while loop
function f_v(val){
    var result = val;
    if(val===0)
    return 1;
    while(val>1){
        val--;
        result=result*val;
    }
    return result;
}
console.log(f_v(4))

let a = ["Himanshu", "anuj"]
console.log(a.reverse());

function range(num,start,end){
    if(num>=start && num<=end){
    console.log(`The ${num} is in the range of ${start} and ${end}`);
    }else{
        console.log(`The ${num} is outside the range of ${start} and ${end}`)
    }
}
range(16,10,15)

function evenorodd(num2){
    if(num2 % 2===0){
        console.log(`The ${num2} is even`);
    }else{
        console.log(`The ${num2} is odd`);
    }
}
evenorodd(4)

function large(n1,n2,n3){
    if(n1>=n2 && n1>=n3){
        console.log(`The ${n1} is the largest`);
    }else if(n2>=n3){
        console.log(`The ${n2} is the largest`);
    }else{
        console.log(`The ${n3} is the largest`);
    }
}
large(10,20,5)
