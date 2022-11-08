//js version

const topBtn = document.querySelector(".go_top");

topBtn.style.display = "none";

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    topBtn.style.display = "flex";
    topBtn.classList.add("topbtn_animation");
  } else {
    topBtn.style.display = "none";
    topBtn.classList.remove("topbtn_animation");
  }
});

topBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

topBtn.addEventListener("click", (e) => {
  console.log(e);
});

//-------- jquery version

/*

$(document).ready(function () {
  $(".go_top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});

*/
