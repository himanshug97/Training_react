function rec(arr){
    if(arr.length<1){
        return 0;
    }
    return arr.pop()+rec(arr);
}
console.log(rec([1,2,3]))