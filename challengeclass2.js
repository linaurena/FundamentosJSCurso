let name = document.getElementById("name"),
  action = document.getElementById("btn");

action.addEventListener("click", function () {
  alert("The last letter of your name is " + `${name.value.substr(-1)}`);
});
