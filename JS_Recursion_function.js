function countDown(fromNumber){
    console.log(fromNumber);
    let nextNumber = fromNumber - 1;

    if (nextNumber>0){
        countDown(nextNumber);
    }
}
countDown(4);

//factorial

function factorial(x){
    if(x===0){
        return 1;
    }
    else{
        return x * factorial(x-1);
    }
}
const num = 3;
if (num>0){
    let result = factorial(num);
    console.log(`the factorial of ${num} is ${result}`)
}

