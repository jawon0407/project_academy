const astrox = document.querySelector(".astrox");
const nanoflare = document.querySelector(".nanoflare");
const duora = document.querySelector(".duora");
const arcsavor = document.querySelector(".arcsavor");
const nanoray = document.querySelector(".nanoray");
const astroxRacket = document.querySelector(".astrox_racket");
const nanoflareRacket = document.querySelector(".nanoflare_racket");
const duoraRacket = document.querySelector(".duora_racket");
const arcsavorRacket = document.querySelector(".arcsavor_racket");
const nanorayRacket = document.querySelector(".nanoray_racket");
const contentAreaAnchor = document.querySelectorAll(".contentArea a");

function astroxTabOpen() {
  nanoflare.classList.remove("click");
  duora.classList.remove("click");
  nanoray.classList.remove("click");
  arcsavor.classList.remove("click");
  astrox.classList.add("click");
  nanoflareRacket.classList.add("no_show");
  duoraRacket.classList.add("no_show");
  arcsavorRacket.classList.add("no_show");
  nanorayRacket.classList.add("no_show");
  astroxRacket.classList.remove("no_show");
  astroxRacket.classList.add("show");
}
function nanoflareTabOpen() {
  astrox.classList.remove("click");
  duora.classList.remove("click");
  nanoray.classList.remove("click");
  arcsavor.classList.remove("click");
  nanoflare.classList.add("click");
  astroxRacket.classList.add("no_show");
  duoraRacket.classList.add("no_show");
  arcsavorRacket.classList.add("no_show");
  nanorayRacket.classList.add("no_show");
  nanoflareRacket.classList.remove("no_show");
  nanoflareRacket.classList.add("show");
}
function duoraTabOpen() {
  astrox.classList.remove("click");
  nanoflare.classList.remove("click");
  arcsavor.classList.remove("click");
  nanoray.classList.remove("click");
  duora.classList.add("click");
  astroxRacket.classList.add("no_show");
  nanoflareRacket.classList.add("no_show");
  arcsavorRacket.classList.add("no_show");
  nanorayRacket.classList.add("no_show");
  duoraRacket.classList.remove("no_show");
  duoraRacket.classList.add("show");
}
function arcsavorTabOpen() {
  astrox.classList.remove("click");
  nanoflare.classList.remove("click");
  duora.classList.remove("click");
  nanoray.classList.remove("click");
  arcsavor.classList.add("click");
  astroxRacket.classList.add("no_show");
  nanoflareRacket.classList.add("no_show");
  duoraRacket.classList.add("no_show");
  nanorayRacket.classList.add("no_show");
  arcsavorRacket.classList.remove("no_show");
  arcsavorRacket.classList.add("show");
}
function nanorayTabOpen() {
  astrox.classList.remove("click");
  nanoflare.classList.remove("click");
  duora.classList.remove("click");
  arcsavor.classList.remove("click");
  nanoray.classList.add("click");
  astroxRacket.classList.add("no_show");
  nanoflareRacket.classList.add("no_show");
  duoraRacket.classList.add("no_show");
  arcsavorRacket.classList.add("no_show");
  nanorayRacket.classList.remove("no_show");
  nanorayRacket.classList.add("show");
}

astrox.addEventListener("click", () => {
  astroxTabOpen();
});
nanoflare.addEventListener("click", () => {
  nanoflareTabOpen();
});
duora.addEventListener("click", () => {
  duoraTabOpen();
});
arcsavor.addEventListener("click", () => {
  arcsavorTabOpen();
});
nanoray.addEventListener("click", () => {
  nanorayTabOpen();
});

contentAreaAnchor.forEach((i) => {
  i.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

//모달창

const astroxRacketProduct = document.querySelectorAll(".astrox_racket li");
const nanoflareRacketProduct = document.querySelectorAll(
  ".nanoflare_racket li"
);
const duoraRacketProduct = document.querySelectorAll(".duora_racket li");
const arcsavorRacketProduct = document.querySelectorAll(".arcsavor_racket li");
const nanorayRacketProduct = document.querySelectorAll(".nanoray_racket li");

astroxRacketProduct[0].addEventListener("click", () => {
  astrox100zz.productInfo();
});
astroxRacketProduct[1].addEventListener("click", () => {
  astrox99Pro.productInfo();
});
astroxRacketProduct[2].addEventListener("click", () => {
  astrox88Pro.productInfo();
});
astroxRacketProduct[3].addEventListener("click", () => {
  astrox88D.productInfo();
});
astroxRacketProduct[4].addEventListener("click", () => {
  astrox77.productInfo();
});
astroxRacketProduct[5].addEventListener("click", () => {
  astrox66.productInfo();
});
nanoflareRacketProduct[0].addEventListener("click", () => {
  nanoflare700.productInfo();
});
nanoflareRacketProduct[1].addEventListener("click", () => {
  nanoflare555.productInfo();
});
nanoflareRacketProduct[2].addEventListener("click", () => {
  nanoflare170.productInfo();
});
nanoflareRacketProduct[3].addEventListener("click", () => {
  nanoflareX7.productInfo();
});
nanoflareRacketProduct[4].addEventListener("click", () => {
  nanoflare001Clear.productInfo();
});
nanoflareRacketProduct[5].addEventListener("click", () => {
  nanoflare001Feel.productInfo();
});
duoraRacketProduct[0].addEventListener("click", () => {
  duoraZStrike.productInfo();
});
duoraRacketProduct[1].addEventListener("click", () => {
  duora10.productInfo();
});
duoraRacketProduct[2].addEventListener("click", () => {
  duora10Lt.productInfo();
});
duoraRacketProduct[3].addEventListener("click", () => {
  duora9.productInfo();
});
duoraRacketProduct[4].addEventListener("click", () => {
  duora7.productInfo();
});
duoraRacketProduct[5].addEventListener("click", () => {
  duora6.productInfo();
});
arcsavorRacketProduct[0].addEventListener("click", () => {
  arcsavor11Pro.productInfo();
});
arcsavorRacketProduct[1].addEventListener("click", () => {
  arcsavor10.productInfo();
});
arcsavorRacketProduct[2].addEventListener("click", () => {
  arcsavor11New.productInfo();
});
arcsavorRacketProduct[3].addEventListener("click", () => {
  arcsavor2I.productInfo();
});
arcsavorRacketProduct[4].addEventListener("click", () => {
  arcsavor11.productInfo();
});
arcsavorRacketProduct[5].addEventListener("click", () => {
  arcsavorFb.productInfo();
});
nanorayRacketProduct[0].addEventListener("click", () => {
  nanorayGlanZ.productInfo();
});
nanorayRacketProduct[1].addEventListener("click", () => {
  nanorayZSpeed.productInfo();
});
nanorayRacketProduct[2].addEventListener("click", () => {
  nanoray900.productInfo();
});
nanorayRacketProduct[3].addEventListener("click", () => {
  nanoray800.productInfo();
});
nanorayRacketProduct[4].addEventListener("click", () => {
  nanoray750.productInfo();
});
nanorayRacketProduct[5].addEventListener("click", () => {
  nanoray700Fx.productInfo();
});


/* url에 num 변수를 만들어서 원하는 탭으로 이동하는 함수 */ 
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
  astroxTabOpen();
} else if (key === 2) {
  nanoflareTabOpen();
} else if (key === 3) {
  duoraTabOpen();
} else if (key === 4) {
  arcsavorTabOpen();
} else if (key === 5) {
  nanorayTabOpen();
}
