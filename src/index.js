document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
let submitButton = document.getElementsByTagName("input")[1];

submitButton.addEventListener("click", function(event) {
  let node = document.createElement("LI");
  let textnode = document.createTextNode("Water");   
  document.getElementById('tasks').appendChild(node);
  event.preventDefault();
}, false);
