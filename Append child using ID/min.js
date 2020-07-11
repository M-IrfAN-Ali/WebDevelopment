console.log("JavaScript working fine");
function myFunction() {
  var node = document.createElement("p");
  var textnode = document.createTextNode("Hey Iam text and i appear on putting ID of " + theinput.value);
  node.appendChild(textnode);
var x= document.getElementById(theinput.value);
if(x){
x.appendChild(node);

}
else{
document.getElementById("error").innerHTML="There is not container with the ID " + theinput.value + " please try again";
}
}