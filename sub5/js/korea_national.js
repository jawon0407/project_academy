const manSingle = document.querySelector(".man_single");
const womanSingle = document.querySelector(".woman_single");
const manDouble = document.querySelector(".man_double");
const womanDouble = document.querySelector(".woman_double");
const manSingleBox = document.querySelector(".man_single_box");
const womanSingleBox = document.querySelector(".woman_single_box");
const manDoubleBox = document.querySelector(".man_double_box");
const womanDoubleBox = document.querySelector(".woman_double_box");

manSingle.addEventListener("click", () => {
  womanSingle.classList.remove("click");
  manDouble.classList.remove("click");
  womanDouble.classList.remove("click");
  manSingle.classList.add("click");
  womanSingleBox.classList.add("no_show");
  manDoubleBox.classList.add("no_show");
  womanDoubleBox.classList.add("no_show");
  manSingleBox.classList.remove("no_show");
  manSingleBox.classList.add("show");
});
womanSingle.addEventListener("click", () => {
  manSingle.classList.remove("click");
  manDouble.classList.remove("click");
  womanDouble.classList.remove("click");
  womanSingle.classList.add("click");
  manSingleBox.classList.add("no_show");
  manDoubleBox.classList.add("no_show");
  womanDoubleBox.classList.add("no_show");
  womanSingleBox.classList.remove("no_show");
  womanSingleBox.classList.add("show");
});
manDouble.addEventListener("click", () => {
  manSingle.classList.remove("click");
  womanSingle.classList.remove("click");
  womanDouble.classList.remove("click");
  manDouble.classList.add("click");
  manSingleBox.classList.add("no_show");
  womanSingleBox.classList.add("no_show");
  womanDoubleBox.classList.add("no_show");
  manDoubleBox.classList.remove("no_show");
  manDoubleBox.classList.add("show");
});
womanDouble.addEventListener("click", () => {
  manSingle.classList.remove("click");
  womanSingle.classList.remove("click");
  manDouble.classList.remove("click");
  womanDouble.classList.add("click");
  manSingleBox.classList.add("no_show");
  womanSingleBox.classList.add("no_show");
  manDoubleBox.classList.add("no_show");
  womanDoubleBox.classList.remove("no_show");
  womanDoubleBox.classList.add("show");
});

const contentAreaAnchor = document.querySelectorAll(".contentArea a");
contentAreaAnchor.forEach((i) => {
  i.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
