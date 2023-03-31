console.log(message); //output : undefined
var message = "The variable Has been hoisted";

var message2;
console.log(message2);
message2 = "The variable Has been hoisted";

showMessage("Good morning"); //Good morning

function showMessage(name) {
  console.log(name);
}