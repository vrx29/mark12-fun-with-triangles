let input_a = document.querySelector("#input_a");
let input_b = document.querySelector("#input_b");
let btn = document.querySelector(".btn");
let outputDiv = document.querySelector(".output");

btn.addEventListener("click", submitHandler);

function submitHandler(e) {
  e.preventDefault();
  let hypotenuse = Math.sqrt(
    Number(input_a.value) * Number(input_a.value) +
      Number(input_b.value) * Number(input_b.value)
  );
  outputDiv.innerHTML = `Hypotenuse is ${hypotenuse}`;
}
