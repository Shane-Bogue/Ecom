const modal = document.getElementById("myModal");
const btn = document.querySelector("#modalBtn");
const span = document.getElementsByClassName("close")[0];
btn.addEventListener('click', () => modal.style.display = "inline")

span.onclick = function() {
  modal.style.display = "none";
}
