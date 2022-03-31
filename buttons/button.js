const button1 = document.querySelector("#button-one");

button1.addEventListener("mousedown", (e) => {
  button1.classList.add("clicked");
});
button1.addEventListener("mouseup", (e) => {
  button1.classList.remove("clicked");
});
