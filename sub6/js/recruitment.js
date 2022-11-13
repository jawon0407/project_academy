function iconAni() {
  const iconBox = document.querySelector(".recruitment_icon_list");
  const icon = document.querySelectorAll(".recruitment_icon_list > li");
  if (iconBox.getBoundingClientRect().top < 960) {
    icon.forEach((i) => {
      i.classList.add("up");
    });
  } else {
    icon.forEach((i) => {
      i.classList.remove("up");
    });
  }
}

function recruitmentTextAni() {
  const recruitmentText = document.querySelector(".recruitment_text");
  if (recruitmentText.getBoundingClientRect().top < 960) {
    recruitmentText.classList.add("text_up");
  } else {
    recruitmentText.classList.remove("text_up");
  }
}

window.addEventListener("scroll", iconAni);
window.addEventListener("scroll", recruitmentTextAni);
