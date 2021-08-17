let input_a = document.querySelector("#input_a");
let input_b = document.querySelector("#input_b");
let input_c = document.querySelector("#input_c");
let btn = document.querySelector(".btn");
const outputDiv = document.querySelector(".output");

btn.addEventListener("click", submitHandler);

function submitHandler(e) {
  e.preventDefault();
  if (
    Number(input_a.value) + Number(input_b.value) + Number(input_c.value) ===
    180
  ) {
    outputDiv.innerHTML = "It is a triangle";
  } else {
    outputDiv.innerHTML = "It is not a triangle";
  }
}
