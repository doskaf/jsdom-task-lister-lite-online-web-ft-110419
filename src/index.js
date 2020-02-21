let newTaskBox = document.getElementById("new-task-description");
let submitButton = document.getElementsByTagName("input")[1];

submitButton.addEventListener("click", function(event) {
  let node = document.createElement("LI");
  let textnode = document.createTextNode(newTaskBox.value);
  node.appendChild(textnode);
  document.getElementById('tasks').appendChild(node);
  let bu
  event.preventDefault();
}, false);

let button = document.getElementsByTagName("BUTTON")[0];
