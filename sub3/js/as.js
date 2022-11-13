const orderListBox = document.querySelector(".order_list > ul");
const orderList = document.querySelectorAll(".order_list > ul li");
const ruleTableTitle = document.querySelector(".rule_table h4");
const ruleTable = document.querySelector(".rule_table table");
const serviceTableTitle = document.querySelector(".service_table h4");
const serviceTable = document.querySelector(".service_table table");
const counselBox = document.querySelector(".counsel");
const badmintonTennisCounsel = document.querySelector(
  ".badminton_tennis_counsel"
);
const golfCounsel = document.querySelector(".golf_counsel");

console.log(counselBox.getBoundingClientRect().top);

badmintonTennisCounsel.style.opacity = "0";
golfCounsel.style.opacity = "0";

function orderListAni() {
  if (orderListBox.getBoundingClientRect().top < 850) {
    orderList.forEach((i) => {
      i.classList.add("slide");
    });
  } else {
    orderList.forEach((i) => {
      i.classList.remove("slide");
    });
  }
}

function ruleTableTitleAni() {
  if (ruleTableTitle.getBoundingClientRect().top < 905) {
    ruleTableTitle.classList.add("title_up");
  } else {
    ruleTableTitle.classList.remove("title_up");
  }
}

function ruleTableAni() {
  if (ruleTable.getBoundingClientRect().top < 820) {
    ruleTable.classList.add("up");
  } else {
    ruleTable.classList.remove("up");
  }
}

function serviceTableTitleAni() {
  if (serviceTableTitle.getBoundingClientRect().top < 905) {
    serviceTableTitle.classList.add("title_up");
  } else {
    serviceTableTitle.classList.remove("title_up");
  }
}

function serviceTableAni() {
  if (serviceTable.getBoundingClientRect().top < 820) {
    serviceTable.classList.add("up");
  } else {
    serviceTable.classList.remove("up");
  }
}

function counselBoxAni() {
  if (counselBox.getBoundingClientRect().top < 750) {
    badmintonTennisCounsel.style.opacity = "1";
    badmintonTennisCounsel.style.transition = "all 1.2s ease-in-out";
    golfCounsel.style.opacity = "1";
    golfCounsel.style.transition = "all 1.2s ease-in-out";
  } else {
    badmintonTennisCounsel.style.opacity = "0";
    golfCounsel.style.opacity = "0";
  }
}

window.addEventListener("scroll", orderListAni);
window.addEventListener("scroll", ruleTableTitleAni);
window.addEventListener("scroll", ruleTableAni);
window.addEventListener("scroll", serviceTableTitleAni);
window.addEventListener("scroll", serviceTableAni);
window.addEventListener("scroll", counselBoxAni);
