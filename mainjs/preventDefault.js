const icons = document.querySelectorAll(".arrow_icon a");

icons.forEach((i) => {
  i.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
