const skipNav = document.querySelectorAll("#skipnav a");

skipNav.forEach((i) => {
  i.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    i[0].addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    i[1].addEventListener("click", () => {
      window.scrollTo({ top: 900, behavior: "smooth" });
    });
    i[2].addEventListener("click", () => {
      window.scrollTo({ bottom: 0, behavior: "smooth" });
    });
  });
});
