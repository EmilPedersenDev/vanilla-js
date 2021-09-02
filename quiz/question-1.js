const allAnswers = document.getElementsByName("age");
const ageButton = document.getElementById("btn-age");
let answer = "";

const checkingAnswer = (e) => {
  answer = e.target.value;
};

const goToNext = () => {
  let isRightScore = correctAnswers.find((correct) => correct === answer);
  if (isRightScore) {
    score++;
  }
  localStorage.setItem("score", score);
};

allAnswers.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    checkingAnswer(e);
  });
});

ageButton.addEventListener("click", goToNext);
