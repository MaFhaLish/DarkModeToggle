let input = document.querySelector(".input");

input.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (input.checked) {
    document.body.style.background = "black";
  } else {
    document.body.style.background = "white";
  }
}

input.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(input.checked));
}
