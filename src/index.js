document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
let submitButton = document.getElementsByTagName("input")[1];
submitButton.addEventListener("click", function(event) {
         document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
         event.preventDefault();
}, false);
