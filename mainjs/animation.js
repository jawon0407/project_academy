const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const mainLogoImgBox = document.querySelectorAll(`.main li`);
const mainLogoImg = document.querySelectorAll(`.main li img`);
const arrMainLogoImgBox = [...mainLogoImgBox];
const progressBar = document.querySelectorAll(".progress_bar div");
const introImage = document.querySelector(`.intro_image`);
const iconList = document.querySelector(".icon_list ul");
const icon = document.querySelectorAll(".icon_list li");
const promotion = document.querySelector(`.promotion`);
const promotionBox = document.querySelector(`.promotion_list`);
const promotionList = document.querySelectorAll(`.promotion_list li`);
const promotionBtn = document.querySelectorAll(".arrow_icon a");
const official = document.querySelector(".official");
const entertainment = document.querySelector(".entertainment");
const newsContent = document.querySelector(".news_lists");
const newsList = document.querySelectorAll(".news_lists > li");
let i = 0;
let images;

playBtn.style.display = "none";
progressBar[0].style.backgroundColor = "white";
progressBar[0].style.width = "30px";
progressBar[0].style.borderRadius = "20px";
progressBar[0].style.transition = ".5s";
progressBar[1].style.transition = ".5s";
progressBar[2].style.transition = ".5s";

function introImgSlide() {
  const introduceTextBox = document.querySelector(".introduce_textbox");
  if (introImage.getBoundingClientRect().top < 1100) {
    introImage.classList.add("introduce_image_slide");
    introduceTextBox.classList.add("textbox_slide");
  } else {
    introImage.classList.remove("introduce_image_slide");
    introduceTextBox.classList.remove("textbox_slide");
  }
}

function iconUp() {
  if (iconList.getBoundingClientRect().top < 1075) {
    icon.forEach((i) => {
      i.classList.add("icon_up");
    });
  } else {
    icon.forEach((i) => {
      i.classList.remove("icon_up");
    });
  }
}

function promotionAnimationFunc() {
  if (promotion.getBoundingClientRect().top < 1100) {
    promotion.classList.add("promotion_up");
  } else {
    promotion.classList.remove("promotion_up");
  }
}

function matchContentAnimation() {
  if (official.getBoundingClientRect().top < 1100) {
    official.classList.add("slideleft");
    entertainment.classList.add("slideright");
  } else {
    official.classList.remove("slideleft");
    entertainment.classList.remove("slideright");
  }
}

function newsListDownAnimation() {
  if (newsContent.getBoundingClientRect().top <= 1110) {
    newsList.forEach((i) => {
      i.classList.add("news_down");
    });
  } else {
    newsList.forEach((i) => i.classList.remove("news_down"));
  }
}

//이미지 슬라이드

function firstImgShowAni() {
  arrMainLogoImgBox[0].classList.remove("noshow");
  mainLogoImg[0].classList.add("size_change");
  arrMainLogoImgBox[1].classList.add("noshow");
  mainLogoImg[1].classList.remove("size_change");
  arrMainLogoImgBox[2].classList.add("noshow");
  mainLogoImg[2].classList.remove("size_change");
  progressBar[0].style.backgroundColor = "white";
  progressBar[0].style.width = "30px";
  progressBar[0].style.borderRadius = "20px";
  progressBar[1].style.backgroundColor = "#666";
  progressBar[1].style.width = "15px";
  progressBar[2].style.backgroundColor = "#666";
  progressBar[2].style.width = "15px";
}

function secondImgShowAni() {
  arrMainLogoImgBox[0].classList.add("noshow");
  mainLogoImg[0].classList.remove("size_change");
  arrMainLogoImgBox[1].classList.remove("noshow");
  mainLogoImg[1].classList.add("size_change");
  arrMainLogoImgBox[2].classList.add("noshow");
  mainLogoImg[2].classList.remove("size_change");
  progressBar[0].style.backgroundColor = "#666";
  progressBar[0].style.width = "15px";
  progressBar[1].style.width = "30px";
  progressBar[1].style.borderRadius = "20px";
  progressBar[1].style.backgroundColor = "white";
  progressBar[2].style.backgroundColor = "#666";
  progressBar[2].style.width = "15px";
}

function thirdImgShowAni() {
  arrMainLogoImgBox[0].classList.add("noshow");
  mainLogoImg[0].classList.remove("size_change");
  arrMainLogoImgBox[1].classList.add("noshow");
  mainLogoImg[1].classList.remove("size_change");
  arrMainLogoImgBox[2].classList.remove("noshow");
  mainLogoImg[2].classList.add("size_change");
  progressBar[0].style.backgroundColor = "#666";
  progressBar[0].style.width = "15px";
  progressBar[1].style.backgroundColor = "#666";
  progressBar[1].style.width = "15px";
  progressBar[2].style.width = "30px";
  progressBar[2].style.borderRadius = "20px";
  progressBar[2].style.backgroundColor = "white";
  i = -1;
}

function imgBoxChange() {
  i++;
  if (i === 0) {
    firstImgShowAni();
  } else if (i === 1) {
    secondImgShowAni();
  } else if (i === 2) {
    thirdImgShowAni();
    return i;
  } else {
    i = 0;
  }
}

//이미지 슬라이드 setInterval 함수

function startEvent() {
  images = setInterval(imgBoxChange, 4000);
}

//clearInterval 함수

function clearEvent() {
  clearInterval(images);
}

//이벤트 위임(원을 선택한 이미지 체인지)

progressBar[0].addEventListener("click", () => {
  clearEvent();
  i = -1;
  if ((i = -1)) {
    firstImgShowAni();
  }
  console.log(progressBar[0], i);
  startEvent();
});

progressBar[1].addEventListener("click", () => {
  clearEvent();
  i = 1;
  if ((i = 1)) {
    secondImgShowAni();
  }
  console.log(i);
  startEvent();
});

progressBar[2].addEventListener("click", () => {
  clearEvent();
  i = 2;
  if ((i = 2)) {
    thirdImgShowAni();
  }
  console.log(i);
  startEvent();
});

//이벤트 위임(앞, 뒤 버튼 클릭 시 이미지 변경)

prevBtn.addEventListener("click", () => {
  clearEvent();

  i--;
  //i값 조정

  if (i === 0) {
    firstImgShowAni();
  } else if (i === 1) {
    secondImgShowAni();
  } else if (i === 2) {
    thirdImgShowAni();
  } else if (i === -1) {
    thirdImgShowAni();
    i = 2;
  } else if (i === -2) {
    secondImgShowAni();
    i = 1;
  }
  /* 
  i === 0 에서 prevbtn을 누르면 마지막 이미지가 보여야 하므로 i = 2로 리턴해줘야 함.
  i = 2면 -1로 리턴하니 prevbtn을 누르면 -2가 찍히니 -2에서 2의 전 이미지 출력시키고
  또 전 버튼 누르면 첫번째 이미지가 보여야하므로 i = 1로 조정
  */
  pauseBtn.style.display = "block";
  playBtn.style.display = "none";
  startEvent();
});

nextBtn.addEventListener("click", () => {
  clearEvent();
  i++;
  if (i >= 3) {
    i = -1;
    return i;
  }
  console.log(i);
  if (i === 0) {
    firstImgShowAni();
  } else if (i === 1) {
    secondImgShowAni();
  } else if (i === 2) {
    thirdImgShowAni();
  }
  pauseBtn.style.display = "block";
  playBtn.style.display = "none";
  startEvent();
});

//재생 일시정지 버튼 구현

pauseBtn.addEventListener("click", () => {
  clearEvent();
  pauseBtn.style.display = "none";
  playBtn.style.display = "block";
});

playBtn.addEventListener("click", () => {
  pauseBtn.style.display = "block";
  playBtn.style.display = "none";
  startEvent();
});

//이미지 자동 슬라이드 구현
startEvent();

//스크롤 이벤트 구현
window.addEventListener("scroll", introImgSlide);
window.addEventListener("scroll", iconUp);
window.addEventListener("scroll", promotionAnimationFunc);
window.addEventListener("scroll", matchContentAnimation);
window.addEventListener("scroll", newsListDownAnimation);

// //프로모션 무한 루프 슬라이드

// //현재 보이는 index값 설정 --> current값을 증가 or 감소시켜서 보여줄 이미지를 바꿔준다.
// let currentIdx = 0;

// // 프로모션 배열 처음, 마지막값 복사
// for (let i = 0; i < promotionList.length; i++) {
//   promotionBox.appendChild(promotionList[i].cloneNode(true));
// }
// for (let i = promotionList.length - 1; i >= 0; i--) {
//   promotionBox.prepend(promotionList[i].cloneNode(true));
// }

// // 복사한 배열을 추가해서 새로운 프로모션 리스트 생성
// const newPromotionList = document.querySelectorAll(".promotion_list li");

// // 프로모션 리스트 하나의 넓이를 변수로 지정
// const promotionListWidth = newPromotionList[0].clientWidth;
// const promotionMargin = 80;

// //새로운 프로모션 박스 넓이를 변수로 지정
// const promotionBoxWidth = `${
//   (promotionMargin + promotionListWidth + promotionMargin) *
//   newPromotionList.length
// }`;

// //프로모션 넓이를 새로운 프로모션 박스 넓이로 지정
// promotionBox.style.width = `${promotionBoxWidth}px`;

// // ------------------ 복제한 프로모션 리스트들을 새로운 배열에 담고 promotionBox의 넓이를 복제된 프로모션 리스트들을 포함한 넓이로 새롭게 지정해줌으로써 한 열에 다 있게 보게함

// setTimeout(() => {
//   promotionBox.classList.add("animated");
// }, 100);

// /*
//  setTimeout을 써주는 이유 : 로딩 되고 나서 복제된 프로모션들이 안 보이게 끔 처리해 주기 위해서
//  안쓰면 로딩되면서 복제된 프로모션이 뒤로 밀리는 현상이 발생함
// */

// promotionBtn[0].addEventListener("click", () => {
//   moveSlide(currentIdx - 1);
//   //click할 때마다 currentIdx값을 1씩 감소시켜서 왼쪽으로 이동
// });

// promotionBtn[1].addEventListener("click", () => {
//   moveSlide(currentIdx + 1);
//   //click할 때마다 currentIdx값을 1씩 증가시켜서 오른쪽으로 이동 처음부터 1로 설정한 이유 : 처음에는 0이라서 0+1이 되어서 1번째 이미지가 보이게 됨
// });

// function moveSlide(num) {
//   promotionBox.style.transform = `translateX(${
//     -num * (promotionMargin + promotionListWidth + promotionMargin)
//   }px)`;
//   //currentIdx 값에 따라서 promotionBox를 translateX(px) 만큼 이동

//   currentIdx = num;
//   //currentIdx = num으로 설정해주는 이유 : currentIdx값을 계속해서 증가시켜주기 위해서

//   console.log(currentIdx, newPromotionList.length);

//   if (currentIdx === 7 || currentIdx === -7) {
//     setTimeout(() => {
//       promotionBox.classList.remove("animated");
//       promotionBox.style.transform = `translateX(0px)`;
//       currentIdx = 0;
//     }, 300);
//     //setTimeout을 써주는 이유 : 7번째에 도착해서 8번째로 넘어가는 순간에는 0으로 돌아가게 할 때 0으로 돌아가는 순간에는 애니메이션이 없어야 하기 때문에

//     setTimeout(() => {
//       promotionBox.classList.add("animated");
//     }, 400);
//     //setTimeout의 시간이 400인 이유 : 300으로 설정하면 300ms만큼 뒤에 animation이 적용되는데 이 시간이 처음에 css로 준 transition: .3s 에 걸려서 400으로 설정해줌
//   }
// }
