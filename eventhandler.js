console.log('this is a event handler');

/*document.getElementById('heading').addEventListener('click',function(e){
    let variable;
    console.log('You have clicked the heading');
    //console.log(e);
   // variable = e.target;
    //variable = e.target.className;  
    //variable = e.target.id;
    //variable = e.offsetX;
    console.log(variable);

})*/

/* more event functions
let btn = document.getElementById('btn');
btn.addEventListener('dblclick', func1);

function func1(e){
    console.log("Thanks its a double click",e);
}
*/

/*document.querySelector('.child').addEventListener('mouseenter', function(){
    console.log('you entered child');
})

document.querySelector('.child').addEventListener('mouseleave', function(){
    console.log('you exited child');
})

document.querySelector('.child').addEventListener('mousemove', function(){
    console.log('mouse is moving');
}) */

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 154)`;
    console.log('you entered child');
})