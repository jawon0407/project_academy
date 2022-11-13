const up = document.querySelector(".up");
const bottom = document.querySelector(".bottom");
const jacket = document.querySelector(".jacket");
const accessory = document.querySelector(".accessory");
const bag_shoes = document.querySelector(".bag_shoes");
const topClothes = document.querySelector(".top_clothes");
const bottomClothes = document.querySelector(".bottom_clothes");
const jacketClothes = document.querySelector(".jacket_clothes");
const accessoryClothes = document.querySelector(".accessory_clothes");
const bag_shoesClothes = document.querySelector(".bag_shoes_clothes");

function topClothesTabOpen() {
  bottom.classList.remove("click");
  jacket.classList.remove("click");
  bag_shoes.classList.remove("click");
  accessory.classList.remove("click");
  up.classList.add("click");
  bottomClothes.classList.add("no_show");
  jacketClothes.classList.add("no_show");
  accessoryClothes.classList.add("no_show");
  bag_shoesClothes.classList.add("no_show");
  topClothes.classList.remove("no_show");
  topClothes.classList.add("show");
}

function bottomClothesTabOpen() {
  up.classList.remove("click");
  jacket.classList.remove("click");
  bag_shoes.classList.remove("click");
  accessory.classList.remove("click");
  bottom.classList.add("click");
  topClothes.classList.add("no_show");
  jacketClothes.classList.add("no_show");
  accessoryClothes.classList.add("no_show");
  bag_shoesClothes.classList.add("no_show");
  bottomClothes.classList.remove("no_show");
  bottomClothes.classList.add("show");
}

function jacketClothesTabOpen() {
  up.classList.remove("click");
  bottom.classList.remove("click");
  accessory.classList.remove("click");
  bag_shoes.classList.remove("click");
  jacket.classList.add("click");
  topClothes.classList.add("no_show");
  bottomClothes.classList.add("no_show");
  accessoryClothes.classList.add("no_show");
  bag_shoesClothes.classList.add("no_show");
  jacketClothes.classList.remove("no_show");
  jacketClothes.classList.add("show");
}

function accessoryClothesTabOpen() {
  up.classList.remove("click");
  bottom.classList.remove("click");
  jacket.classList.remove("click");
  bag_shoes.classList.remove("click");
  accessory.classList.add("click");
  topClothes.classList.add("no_show");
  bottomClothes.classList.add("no_show");
  jacketClothes.classList.add("no_show");
  bag_shoesClothes.classList.add("no_show");
  accessoryClothes.classList.remove("no_show");
  accessoryClothes.classList.add("show");
}

function bagShoesClothesTabOpen() {
  up.classList.remove("click");
  bottom.classList.remove("click");
  jacket.classList.remove("click");
  accessory.classList.remove("click");
  bag_shoes.classList.add("click");
  topClothes.classList.add("no_show");
  bottomClothes.classList.add("no_show");
  jacketClothes.classList.add("no_show");
  accessoryClothes.classList.add("no_show");
  bag_shoesClothes.classList.remove("no_show");
  bag_shoesClothes.classList.add("show");
}

up.addEventListener("click", () => {
  topClothesTabOpen();
});
bottom.addEventListener("click", () => {
  bottomClothesTabOpen();
});
jacket.addEventListener("click", () => {
  jacketClothesTabOpen();
});
accessory.addEventListener("click", () => {
  accessoryClothesTabOpen();
});
bag_shoes.addEventListener("click", () => {
  bagShoesClothesTabOpen();
});

const contentAreaAnchor = document.querySelectorAll(".contentArea a");
contentAreaAnchor.forEach((i) => {
  i.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const topClothesProduct = document.querySelectorAll(".top_clothes li");
const bottomClothesProduct = document.querySelectorAll(".bottom_clothes li");
const jacketClothesProduct = document.querySelectorAll(".jacket_clothes li");
const accessoryClothesProduct = document.querySelectorAll(
  ".accessory_clothes li"
);
const bagShoesClothesProduct = document.querySelectorAll(
  ".bag_shoes_clothes li"
);

topClothesProduct[0].addEventListener("click", () => {
  ts015.productInfo();
});
topClothesProduct[1].addEventListener("click", () => {
  ts001New.productInfo();
});
topClothesProduct[2].addEventListener("click", () => {
  ts011New.productInfo();
});
topClothesProduct[3].addEventListener("click", () => {
  ts001.productInfo();
});
topClothesProduct[4].addEventListener("click", () => {
  ts013.productInfo();
});
topClothesProduct[5].addEventListener("click", () => {
  ts011.productInfo();
});
bottomClothesProduct[0].addEventListener("click", () => {
  ph001New.productInfo();
});
bottomClothesProduct[1].addEventListener("click", () => {
  ph001.productInfo();
});
bottomClothesProduct[2].addEventListener("click", () => {
  wp018.productInfo();
});
bottomClothesProduct[3].addEventListener("click", () => {
  coupleKnit.productInfo();
});
bottomClothesProduct[4].addEventListener("click", () => {
  ps001New.productInfo();
});
bottomClothesProduct[5].addEventListener("click", () => {
  ps001.productInfo();
});
jacketClothesProduct[0].addEventListener("click", () => {
  wu001.productInfo();
});
jacketClothesProduct[1].addEventListener("click", () => {
  wu009.productInfo();
});
jacketClothesProduct[2].addEventListener("click", () => {
  wu002.productInfo();
});
jacketClothesProduct[3].addEventListener("click", () => {
  wu005New.productInfo();
});
jacketClothesProduct[4].addEventListener("click", () => {
  wu008.productInfo();
});
jacketClothesProduct[5].addEventListener("click", () => {
  wu005.productInfo();
});
accessoryClothesProduct[0].addEventListener("click", () => {
  cc001u.productInfo();
});
accessoryClothesProduct[1].addEventListener("click", () => {
  bn001u.productInfo();
});
accessoryClothesProduct[2].addEventListener("click", () => {
  tw002u.productInfo();
});
accessoryClothesProduct[3].addEventListener("click", () => {
  ac1901.productInfo();
});
accessoryClothesProduct[4].addEventListener("click", () => {
  ac108wex.productInfo();
});
accessoryClothesProduct[5].addEventListener("click", () => {
  as50.productInfo();
});
bagShoesClothesProduct[0].addEventListener("click", () => {
  bt006u.productInfo();
});
bagShoesClothesProduct[1].addEventListener("click", () => {
  bt003u.productInfo();
});
bagShoesClothesProduct[2].addEventListener("click", () => {
  bt005u.productInfo();
});
bagShoesClothesProduct[3].addEventListener("click", () => {
  shb65z3mex.productInfo();
});
bagShoesClothesProduct[4].addEventListener("click", () => {
  shb57ex.productInfo();
});
bagShoesClothesProduct[5].addEventListener("click", () => {
  shb32ex.productInfo();
});

//매개변수가 1개일때 해당 탭으로 바로 이동하는 방법

var value, key;
function getParams() {
  var url = decodeURIComponent(location.href); // 현재 페이지의 url
  url = decodeURIComponent(url); // url = ex.html?num=1&name=홍길동
  // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.

  var params = "";
  params = url.substring(url.indexOf("?") + 1, url.length); //substring : 문자를 잘라내는 함수

  key = params.split("=")[0]; //'num'
  value = params.split("=")[1]; // '1'
  key = Number(value);
}

getParams();

//console.log(key);
if (key === 1) {
  topClothesTabOpen();
} else if (key === 2) {
  bottomClothesTabOpen();
} else if (key === 3) {
  jacketClothesTabOpen();
} else if (key === 4) {
  accessoryClothesTabOpen();
} else if (key === 5) {
  bagShoesClothesTabOpen();
}
