const cardQuestion = document.querySelectorAll(".card-question");
const panel = document.querySelectorAll(".panel");
const questionImage = document.querySelectorAll(".question-image");
const main = document.querySelector("main");
const screenWidth = window.innerWidth;

cardQuestion.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
    showPanel();
  });
});

//show hidden panel
function showPanel() {
  for (let i = 0; i < cardQuestion.length; i++) {
    if (cardQuestion[i].classList.contains("active")) {
      panel[i].style.display = "block";
      questionImage[i].src = "./assets/images/icon-minus.svg";
    } else {
      panel[i].style.display = "none";
      questionImage[i].src = "./assets/images/icon-plus.svg";
    }
  }
}
