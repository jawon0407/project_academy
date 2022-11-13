const manSingle = document.querySelector(".man_single");
const womanSingle = document.querySelector(".woman_single");
const manDouble = document.querySelector(".man_double");
const womanDouble = document.querySelector(".woman_double");
const manSingleBox = document.querySelector(".man_single_box");
const womanSingleBox = document.querySelector(".woman_single_box");
const manDoubleBox = document.querySelector(".man_double_box");
const womanDoubleBox = document.querySelector(".woman_double_box");

manSingle.addEventListener("click", () => {
  womanSingle.classList.remove("on");
  manDouble.classList.remove("on");
  womanDouble.classList.remove("on");
  manSingle.classList.add("on");
  womanSingleBox.classList.add("hidden");
  manDoubleBox.classList.add("hidden");
  womanDoubleBox.classList.add("hidden");
  manSingleBox.classList.remove("hidden");
  manSingleBox.classList.add("up");
});
womanSingle.addEventListener("click", () => {
  manSingle.classList.remove("on");
  manDouble.classList.remove("on");
  womanDouble.classList.remove("on");
  womanSingle.classList.add("on");
  manSingleBox.classList.add("hidden");
  manDoubleBox.classList.add("hidden");
  womanDoubleBox.classList.add("hidden");
  womanSingleBox.classList.remove("hidden");
  womanSingleBox.classList.add("up");
});
manDouble.addEventListener("click", () => {
  manSingle.classList.remove("on");
  womanSingle.classList.remove("on");
  womanDouble.classList.remove("on");
  manDouble.classList.add("on");
  manSingleBox.classList.add("hidden");
  womanSingleBox.classList.add("hidden");
  womanDoubleBox.classList.add("hidden");
  manDoubleBox.classList.remove("hidden");
  manDoubleBox.classList.add("up");
});
womanDouble.addEventListener("click", () => {
  manSingle.classList.remove("on");
  womanSingle.classList.remove("on");
  manDouble.classList.remove("on");
  womanDouble.classList.add("on");
  manSingleBox.classList.add("hidden");
  womanSingleBox.classList.add("hidden");
  manDoubleBox.classList.add("hidden");
  womanDoubleBox.classList.remove("hidden");
  womanDoubleBox.classList.add("up");
});

const contentAreaAnchor = document.querySelectorAll(".korea_national_area a");
contentAreaAnchor.forEach((i) => {
  i.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
