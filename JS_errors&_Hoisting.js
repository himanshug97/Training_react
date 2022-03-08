//JS errors
//Try nd Catch error and finally

try{
    adddlert("Welcome guest");
}
catch(err){
    console.log(err.message)
    console.log(err.name)
}finally{
    console.log("finally  we will runthis");
}

//throw error
let a = "Fruits";
a= undefined;
if (a!=undefined){
    throw new Error("this is not undefined");
}else{
    console.log("this is undefined")
}

//JS Hoisting
x = 5;
console.log(x);
var x;
//declaration

var x = 5;
y=7
console.log(x+", "+y);
var y;