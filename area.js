let input_a = document.querySelector("#input_a");
let input_b = document.querySelector("#input_b");
let btn = document.querySelector(".btn");
const outputDiv = document.querySelector(".output");

btn.addEventListener("click", submitHandler);

function submitHandler(e) {
  e.preventDefault();
  let area = (Number(input_a.value) * Number(input_b.value)) / 2;
  outputDiv.innerHTML = `Area of triangle is ${area}`;
}
