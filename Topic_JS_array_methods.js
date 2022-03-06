//JS array methods


//toString() converts an array to a string of (comma separated) array values
let q = ["Banana", "Orange", "Apple", "Mango"];
console.log(q.toString());

//join() method
let w = ["Banana", "Orange", "Apple", "Mango"];
console.log(w.join("*"))

//Pop() and push()- removes and add elements from the array
let q1 = ["Banana", "Orange", "Apple", "Mango"]
q1.pop(0);
q1.push("lemon");
console.log(q1)

//shift() and unshift
let w1 = ["Banana", "Orange", "Apple", "Mango"]
w1.shift();
w1.unshift("lemon");
console.log(w1)

//changin elements
let e1 = ["Banana", "Orange", "Apple", "Mango"]
e1[0] = "kiwi";
console.log(e1)

//length
let r1 = ["Banana", "Orange", "Apple", "Mango"]
r1[r1.length] = "kiwi";
console.log(r1)

//delete()
let w2 = ["Banana", "Orange", "Apple", "Mango"]
delete w2[0];
console.log(w2)

//concat-merging
let t = ["Himanshu", "debu", "vipul"]
let t1 = ["john", "pablo"]
let t2 = t.concat(t1);
console.log(t2)

//Splice method- add new item to an array
let u = ["Banana", "Orange", "Apple", "Mango"]
u.splice(2,0, "Lemon", "Kiwi")
console.log(u)

//Slice method- removes an item
let u1 = ["Banana", "Orange", "Apple", "Mango"]
u1.slice(0);
console.log(u1)