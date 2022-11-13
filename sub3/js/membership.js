const accumulate = document.querySelector(".accumulate");
const payment = document.querySelector(".payment");
const disappear = document.querySelector(".disappear");
const accumulateTextBox = document.querySelector(".accumulate_textbox");
const paymentTextBox = document.querySelector(".payment_textbox");
const disappearTextBox = document.querySelector(".disappear_textbox");
const contentAreaAnchor = document.querySelectorAll(".contentArea a");
const coinImg = document.querySelector(".coins_img")
const paymentImg = document.querySelector(".payment_img")
const disappearImg = document.querySelector(".disappear_img")
const arrColorImg = ["./images/membership/coins_color.png","./images/membership/payment_color.png","./images/membership/trash-bin_color.png"];
const arrBlackImg = ["./images/membership/coins.png","./images/membership/payment.png","./images/membership/trash-bin.png"];


accumulate.addEventListener("click", () => {
  accumulateTextBox.classList.remove("no_show");
  paymentTextBox.classList.add("no_show");
  disappearTextBox.classList.add("no_show");
  coinImg.src = arrColorImg[0];
  paymentImg.src = arrBlackImg[1];
  disappearImg.src = arrBlackImg[2];
});
payment.addEventListener("click", () => {
  accumulateTextBox.classList.add("no_show");
  paymentTextBox.classList.remove("no_show");
  disappearTextBox.classList.add("no_show");
  coinImg.src = arrBlackImg[0];
  paymentImg.src = arrColorImg[1];
  disappearImg.src = arrBlackImg[2];
});
disappear.addEventListener("click", () => {
  accumulateTextBox.classList.add("no_show");
  paymentTextBox.classList.add("no_show");
  disappearTextBox.classList.remove("no_show");
  coinImg.src = arrBlackImg[0];
  paymentImg.src = arrBlackImg[1];
  disappearImg.src = arrColorImg[2];
});


contentAreaAnchor.forEach((i) => {
  i.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
