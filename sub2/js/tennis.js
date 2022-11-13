const vcore = document.querySelector(".vcore");
const vcore_pro = document.querySelector(".vcore_pro");
const ezone = document.querySelector(".ezone");
const vcore_sv = document.querySelector(".vcore_sv");
const ezone_dr = document.querySelector(".ezone_dr");
const vcoreRacket = document.querySelector(".vcore_racket");
const vcore_proRacket = document.querySelector(".vcore_pro_racket");
const ezoneRacket = document.querySelector(".ezone_racket");
const vcore_svRacket = document.querySelector(".vcore_sv_racket");
const ezone_drRacket = document.querySelector(".ezone_dr_racket");

function vcoreTabOpen() {
  vcore_pro.classList.remove("click");
  ezone.classList.remove("click");
  ezone_dr.classList.remove("click");
  vcore_sv.classList.remove("click");
  vcore.classList.add("click");
  vcore_proRacket.classList.add("no_show");
  ezoneRacket.classList.add("no_show");
  vcore_svRacket.classList.add("no_show");
  ezone_drRacket.classList.add("no_show");
  vcoreRacket.classList.remove("no_show");
  vcoreRacket.classList.add("show");
}
function vcoreProTabOpen() {
  vcore.classList.remove("click");
  ezone.classList.remove("click");
  ezone_dr.classList.remove("click");
  vcore_sv.classList.remove("click");
  vcore_pro.classList.add("click");
  vcoreRacket.classList.add("no_show");
  ezoneRacket.classList.add("no_show");
  vcore_svRacket.classList.add("no_show");
  ezone_drRacket.classList.add("no_show");
  vcore_proRacket.classList.remove("no_show");
  vcore_proRacket.classList.add("show");
}
function ezoneTabOpen() {
  vcore.classList.remove("click");
  vcore_pro.classList.remove("click");
  vcore_sv.classList.remove("click");
  ezone_dr.classList.remove("click");
  ezone.classList.add("click");
  vcoreRacket.classList.add("no_show");
  vcore_proRacket.classList.add("no_show");
  vcore_svRacket.classList.add("no_show");
  ezone_drRacket.classList.add("no_show");
  ezoneRacket.classList.remove("no_show");
  ezoneRacket.classList.add("show");
}
function vcoreSvTabOpen() {
  vcore.classList.remove("click");
  vcore_pro.classList.remove("click");
  ezone.classList.remove("click");
  ezone_dr.classList.remove("click");
  vcore_sv.classList.add("click");
  vcoreRacket.classList.add("no_show");
  vcore_proRacket.classList.add("no_show");
  ezoneRacket.classList.add("no_show");
  ezone_drRacket.classList.add("no_show");
  vcore_svRacket.classList.remove("no_show");
  vcore_svRacket.classList.add("show");
}
function ezoneDrTabOpen() {
  vcore.classList.remove("click");
  vcore_pro.classList.remove("click");
  ezone.classList.remove("click");
  vcore_sv.classList.remove("click");
  ezone_dr.classList.add("click");
  vcoreRacket.classList.add("no_show");
  vcore_proRacket.classList.add("no_show");
  ezoneRacket.classList.add("no_show");
  vcore_svRacket.classList.add("no_show");
  ezone_drRacket.classList.remove("no_show");
  ezone_drRacket.classList.add("show");
}

vcore.addEventListener("click", () => {
  vcoreTabOpen();
});

vcore_pro.addEventListener("click", () => {
  vcoreProTabOpen();
});

ezone.addEventListener("click", () => {
  ezoneTabOpen();
});

vcore_sv.addEventListener("click", () => {
  vcoreSvTabOpen();
});

ezone_dr.addEventListener("click", () => {
  ezoneDrTabOpen();
});

const contentAreaAnchor = document.querySelectorAll(".contentArea a");
contentAreaAnchor.forEach((i) => {
  i.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const vcoreRacketProduct = document.querySelectorAll(".vcore_racket li");
const vcoreProRacketProduct = document.querySelectorAll(".vcore_pro_racket li");
const ezoneRacketProduct = document.querySelectorAll(".ezone_racket li");
const vcoreSvRacketProduct = document.querySelectorAll(".vcore_sv_racket li");
const ezoneDrRacketProduct = document.querySelectorAll(".ezone_dr_racket li");

vcoreRacketProduct[0].addEventListener("click", () => {
  vcore95.productInfo();
});
vcoreRacketProduct[1].addEventListener("click", () => {
  vcore98.productInfo();
});
vcoreRacketProduct[2].addEventListener("click", () => {
  vcore98L.productInfo();
});
vcoreRacketProduct[3].addEventListener("click", () => {
  vcore100.productInfo();
});
vcoreRacketProduct[4].addEventListener("click", () => {
  vcore100L.productInfo();
});
vcoreRacketProduct[5].addEventListener("click", () => {
  vcoreGameTour.productInfo();
});
vcoreProRacketProduct[0].addEventListener("click", () => {
  vcorePro97New.productInfo();
});
vcoreProRacketProduct[1].addEventListener("click", () => {
  vcorePro97D.productInfo();
});
vcoreProRacketProduct[2].addEventListener("click", () => {
  vcorePro97H.productInfo();
});
vcoreProRacketProduct[3].addEventListener("click", () => {
  vcorePro97.productInfo();
});
vcoreProRacketProduct[4].addEventListener("click", () => {
  vcorePro97Hd.productInfo();
});
vcoreProRacketProduct[5].addEventListener("click", () => {
  vcorePro100.productInfo();
});
ezoneRacketProduct[0].addEventListener("click", () => {
  ezone98.productInfo();
});
ezoneRacketProduct[1].addEventListener("click", () => {
  ezone98L.productInfo();
});
ezoneRacketProduct[2].addEventListener("click", () => {
  ezone100.productInfo();
});
ezoneRacketProduct[3].addEventListener("click", () => {
  ezoneGame.productInfo();
});
ezoneRacketProduct[4].addEventListener("click", () => {
  ezone98Limited.productInfo();
});
ezoneRacketProduct[5].addEventListener("click", () => {
  ezone100Limited.productInfo();
});
vcoreSvRacketProduct[0].addEventListener("click", () => {
  vcoreSv95.productInfo();
});
vcoreSvRacketProduct[1].addEventListener("click", () => {
  vcoreSv98.productInfo();
});
vcoreSvRacketProduct[2].addEventListener("click", () => {
  vcoreSv100.productInfo();
});
vcoreSvRacketProduct[3].addEventListener("click", () => {
  vcoreSv100S.productInfo();
});
vcoreSvRacketProduct[4].addEventListener("click", () => {
  vcoreSv105.productInfo();
});
vcoreSvRacketProduct[5].addEventListener("click", () => {
  vcoreSvTeam.productInfo();
});
ezoneDrRacketProduct[0].addEventListener("click", () => {
  ezoneDr98Blue.productInfo();
});
ezoneDrRacketProduct[1].addEventListener("click", () => {
  ezoneDr100Blue.productInfo();
});
ezoneDrRacketProduct[2].addEventListener("click", () => {
  ezoneDr98.productInfo();
});
ezoneDrRacketProduct[3].addEventListener("click", () => {
  ezoneDr100.productInfo();
});
ezoneDrRacketProduct[4].addEventListener("click", () => {
  ezoneDrLite.productInfo();
});
ezoneDrRacketProduct[5].addEventListener("click", () => {
  ezoneDrFeel.productInfo();
});

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
  vcoreTabOpen();
} else if (key === 2) {
  vcoreProTabOpen();
} else if (key === 3) {
  ezoneTabOpen();
} else if (key === 4) {
  vcoreSvTabOpen();
} else if (key === 5) {
  ezoneDrTabOpen();
}
