function consumerManagementBoxAnimation() {
  const consumerManagementBox = document.querySelector(".customer_mark");
  const consumerMark = document.querySelector(".customer_mark > img");
  const consumerRuleText = document.querySelector(".customer_mark > div");
  if (consumerManagementBox.getBoundingClientRect().top < 960) {
    consumerMark.classList.add("slide_left");
    consumerRuleText.classList.add("slide_right");
  } else {
    consumerMark.classList.remove("slide_left");
    consumerRuleText.classList.remove("slide_right");
  }
}

function awardContainerAnimation() {
  const awardContainer = document.querySelector(".award_container");
  if (awardContainer.getBoundingClientRect().top < 960) {
    awardContainer.classList.add("appear");
  } else {
    awardContainer.classList.remove("appear");
  }
}

window.addEventListener("scroll", () => {
  consumerManagementBoxAnimation();
  awardContainerAnimation();
});
