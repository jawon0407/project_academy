const list = document.querySelector(".imglist");
const progressCircle = document.querySelectorAll(".progress_circle");
list.style.transition = "transform 1s";
cnt = 0;

progressCircle.forEach((i) => {
  i.style.transition = "all .5s";
});

progressCircle[0].classList.add("bg-main");
progressCircle[0].style.width = "20px";

function progressCircleFirstAni() {
  progressCircle[0].classList.add("bg-main");
  progressCircle[1].classList.remove("bg-main");
  progressCircle[2].classList.remove("bg-main");
  progressCircle[0].style.width = "20px";
  progressCircle[1].style.width = "10px";
  progressCircle[2].style.width = "10px";
}
function progressCircleSecondAni() {
  progressCircle[0].classList.remove("bg-main");
  progressCircle[1].classList.add("bg-main");
  progressCircle[2].classList.remove("bg-main");
  progressCircle[0].style.width = "10px";
  progressCircle[1].style.width = "20px";
  progressCircle[2].style.width = "10px";
}
function progressCircleThirdAni() {
  progressCircle[0].classList.remove("bg-main");
  progressCircle[1].classList.remove("bg-main");
  progressCircle[2].classList.add("bg-main");
  progressCircle[0].style.width = "10px";
  progressCircle[1].style.width = "10px";
  progressCircle[2].style.width = "20px";
}

function imgSlide() {
  list.style.transform = "translateX(" + -cnt * 33.333 + "%)";
}

function cntAdd() {
  cnt++;
  if (cnt > 2) {
    cnt = 0;
  }
  switch (cnt) {
    case 0:
      progressCircleFirstAni();
      break;
    case 1:
      progressCircleSecondAni();
      break;
    case 2:
      progressCircleThirdAni();
      break;
  }
  imgSlide();
}

let func;

function startEvent() {
  func = setInterval(cntAdd, 4000);
}

function clearEvent() {
  clearInterval(func);
}

progressCircle[0].addEventListener("click", () => {
  clearEvent();
  cnt = 0;
  if (cnt === 0) {
    progressCircleFirstAni();
  }
  imgSlide();
  startEvent();
});
progressCircle[1].addEventListener("click", () => {
  clearEvent();
  cnt = 1;
  if (cnt === 1) {
    progressCircleSecondAni();
  }
  imgSlide();
  startEvent();
});
progressCircle[2].addEventListener("click", () => {
  clearEvent();
  cnt = 2;
  if (cnt === 2) {
    progressCircleThirdAni();
  }
  imgSlide();
  startEvent();
});

startEvent();
