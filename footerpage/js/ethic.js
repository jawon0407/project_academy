function imgAniFunc() {
  const img = document.querySelectorAll(".imagebox img");
  if (img[0].getBoundingClientRect().top < 960) {
    img.forEach((i) => {
      i.classList.add("img_opacity");
    });
  } else {
    img.forEach((i) => {
      i.classList.remove("img_opacity");
    });
  }
}

function listUpAniFunc() {
  const list = document.querySelector(".contentArea ul");
  if (list.getBoundingClientRect().top < 960) {
    list.classList.add("list_up");
  } else {
    list.classList.remove("list_up");
  }
}

window.addEventListener("scroll", () => {
  imgAniFunc();
  listUpAniFunc();
});
