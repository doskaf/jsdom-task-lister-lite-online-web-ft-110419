document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
let submitButton = document.getElementsByTagName("input")[1];
document.getElementsByTagName("input")[1].addEventListener("click", function(event) {
         document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
         event.preventDefault();
}, false);
