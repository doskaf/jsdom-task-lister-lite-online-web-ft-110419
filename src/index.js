let newTaskBox = document.getElementById("new-task-description");
let submitButton = document.getElementsByTagName("input")[1];

submitButton.addEventListener("click", function(event) {
  let node = document.createElement("LI");
  let textnode = document.createTextNode(`${newTaskBox.value} `);
  node.appendChild(textnode);
  document.getElementById('tasks').appendChild(node);
  let button = document.createElement("BUTTON");
  button.innerText = "X";
  node.appendChild(button);
  event.preventDefault();
}, false);

let buttons = document.getElementsByTagName("BUTTON");

var array = ['all', 'what', 'you', 'want'];

function buttonFuntionality () {
    for (var i = 0; i < array.length; i++)
    document.getElementById(array[i]).addEventListener('click', eventFunction);
};
