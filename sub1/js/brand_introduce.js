const history = document.querySelector(".brand_introduce_history");
const freedom = document.querySelector(".brand_introduce_freedom");
const internationalCup = document.querySelector(".international_cup");

function historyAnimation() {
  if (history.getBoundingClientRect().top < 930) {
    history.classList.add("history_slide");
  } else {
    history.classList.remove("history_slide");
  }
}
function freedomAnimation() {
  if (freedom.getBoundingClientRect().top < 850) {
    freedom.classList.add("freedom_slide");
  } else {
    freedom.classList.remove("freedom_slide");
  }
}
function internationalCupAnimation() {
  if (internationalCup.getBoundingClientRect().top < 960) {
    internationalCup.classList.add("international_cup_up");
  } else {
    internationalCup.classList.remove("international_cup_up");
  }
}

window.addEventListener("scroll", historyAnimation);
window.addEventListener("scroll", freedomAnimation);
window.addEventListener("scroll", internationalCupAnimation);
