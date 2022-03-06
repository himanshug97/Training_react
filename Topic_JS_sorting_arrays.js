//JS sorting arrays
//sort() function
let q = ["Banana", "Orange", "Apple", "Mango"]
q.sort();
console.log(q)

//reverse() - it reverse the elements
let q1 = ["Banana", "Orange", "Apple", "Mango"]
q1.reverse();
console.log(q1)

//sort with numbers
let y = [40,100,1,45,25]
y.sort(function(a,b){return a-b})
console.log(y)
y.sort(function(a,b){return b-a})
console.log(y)

//max value
const points = [40, 100, 25, 32]
console.log(myArrayMax(points))
function myArrayMax(arr){
    return Math.max.apply(null, arr);
}

//min value
const point1 = [40, 100, 25, 32]
console.log(myArrayMax(point1))
function myArrayMax(arr){
    return Math.min.apply(null, arr);
}


