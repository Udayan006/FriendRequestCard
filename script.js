const name = document.querySelector("#h2");
const remove = document.querySelector("#btn1");
const accept = document.querySelector("#btn2");
const body = document.querySelector(".body");
const all = document.querySelector("#abc");

accept.addEventListener("click", function () {
  accept.innerHTML = "Friends!";
  remove.remove();
  name.innerHTML = "friends!";
  name.style.color = "green";
});
remove.addEventListener("click", function () {
  accept.innerHTML = "stranger!";
  remove.remove();
  accept.remove();
  name.innerHTML = "not friends!";
  name.style.color = "red";
  all.style.backgroundColor="white"
  body.remove();
});
