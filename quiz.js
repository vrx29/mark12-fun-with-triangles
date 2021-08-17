const quizForm = document.querySelector(".form");
const submitBtn = document.querySelector(".btn");
const scoreDiv = document.querySelector(".output");

const answers = ["90°", "Equilateral", "right angled"];

function SubmitHandler(e) {
  e.preventDefault();
  const formData = new FormData(quizForm);
  let i = 0;
  let score = 0;
  for (let data of formData.values()) {
    if (data == answers[i]) {
      score++;
    }
    i++;
  }
  scoreDiv.innerHTML = `your score is ${score}/3`;
}

submitBtn.addEventListener("click", SubmitHandler);
