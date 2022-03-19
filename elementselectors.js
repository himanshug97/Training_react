//Element selectors

//single element selector
//let element = document.getElementById('myfirst');
//element = element.className
//element = element.childNodes;
//element = element.parentNode;
//element.style.color = "red";
//element.innerText = "Himanshu";  //# is used for id and . is used for class
//console.log(element);

//let sel = document.querySelector('#myfirst');
//sel = document.querySelector('.child');
//console.log(sel);


//Multi element selector

/*let ele = document.getElementsByClassName('child');
ele = document.getElementsByClassName('container');
ele = document.getElementsByTagName('div')
console.log(ele);

Array.from(ele).forEach(element => {
    console.log(element)
    element.style.color="blue";
});*/


//childern, parent
//let container = document.querySelector('.container');
//console.log(container.children[1].children[0].children)
//.firstchild - shows the first child fo the container
//.firstElement child- shows the name(text, comment)
//.lastchild, .lastelementchild
//.childElementCount
//.ParentNode- show the parent of the DOM
//.nextSibling, .nextElementSibling



//Creating, removing and Replacing elements

//creating elements
let element = document.createElement('li');
let text = document.createTextNode('I am a node');
element.appendChild(text);

//add a class name to the element
element.className = 'childul';
element.id = 'created';
element.setAttribute('title','mytitle');
element.innerText = "hello";
console.log(element);

//replace
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('this is a another node');
elem2.appendChild(tnode);

element.replaceWith(elem2); 

//remove

//elem2.removeAttribute('id'); //it remove the id from the container
//removeChild()-it removes the specific child from the container
