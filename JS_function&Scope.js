//JS function

//program to print a text   //${}-to define a variable
//declaring a function
function greet(name, thanks)
{
    console.log(`Happy Birthday ${name} wish you a very happy birthday. ${thanks}!`)
}
let name = "Himanshu";
let name2 = "Debu";
greet(name, 'Thanks a lot');

//
const obj = {
    name: "Skill",
    game: function(){
        return "GTA";
    }
}
console.log(obj.game())

//
arr = ["name", "age", "city"];
arr.forEach(function(element, index, array){
    console.log(element, index, array)
})


//Scope

  if(1){
      var i =250;
      console.log(i);
  }
  console.log(i);

  function ui(name){
      let i = 9;
      console.log(i);
      return `This is a ${name} ui`;
  }
  console.log(ui("Himanshu"),i)