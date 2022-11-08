const container = document.querySelector(".qualification_wrap");
const qualification = document.querySelectorAll(".qualification");

function qualificationAni() {
  if (container.getBoundingClientRect().top < 960) {
    qualification.forEach((i) => {
      i.classList.add("opacity");
    });
  } else {
    qualification.forEach((i) => {
      i.classList.remove("opacity");
    });
  }
}

window.addEventListener("scroll", qualificationAni);
