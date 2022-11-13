const ceoImage = document.querySelector(".ceo_image");
const ceoInfo = document.querySelector(".ceo_info");
const ceoGreeting = document.querySelector(".ceo_greetings");
const mainValueList = document.querySelector(".main_value ul");
const mainValueImg = document.querySelectorAll(".main_value img");

function ceoImageAni() {
  if (ceoImage.getBoundingClientRect().top < 1015) {
    ceoImage.classList.add("ceo_image_down");
  } else {
    ceoImage.classList.remove("ceo_image_down");
  }
}
function ceoInfoAni() {
  if (ceoInfo.getBoundingClientRect().top < 1015) {
    ceoInfo.classList.add("ceo_info_up");
  } else {
    ceoInfo.classList.remove("ceo_info_up");
  }
}
function ceoGreetingAni() {
  if (ceoGreeting.getBoundingClientRect().top < 950) {
    ceoGreeting.classList.add("ceo_greeting_show");
  } else {
    ceoGreeting.classList.remove("ceo_greeting_show");
  }
}

function mainValueImgAni() {
  if (mainValueList.getBoundingClientRect().top < 1025) {
    mainValueImg.forEach((i) => {
      i.classList.add("main_value_icon_show");
    });
  } else {
    mainValueImg.forEach((i) => {
      i.classList.remove("main_value_icon_show");
    });
  }
}

window.addEventListener("scroll", ceoImageAni);
window.addEventListener("scroll", ceoInfoAni);
window.addEventListener("scroll", ceoGreetingAni);
window.addEventListener("scroll", mainValueImgAni);
