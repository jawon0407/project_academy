const director = document.querySelector(".director");
const coach = document.querySelector(".coach");
const playerBox = document.querySelector(".player_list");
const player = document.querySelectorAll(".player_list > li");

console.log(player[0].getBoundingClientRect().top);

//js css 구현 -> CSS로 구현하는게 더 낫지만 js로 구현해보기
director.style.opacity = "0";
director.style.transform = "translateY(80px)";
director.style.transition = "all 0.5s ease-in-out";

coach.style.opacity = "0";
coach.style.transform = "translateY(80px)";
coach.style.transition = "all 0.5s ease-in-out";

player.forEach((i) => {
  i.style.opacity = "0";
  i.style.transition = "all 0.5s ease-in-out";
  console.log(i.style.transition);
  for (i = 0; i < player.length; i++) {
    if (i % 2 == 0) {
      player[i].style.transform = "translateX(-80px)";
    } else {
      player[i].style.transform = "translateX(80px)";
    }
  }
});

director.addEventListener("mouseover", () => {
  director.style.transform = "scale(1.03)";
});
director.addEventListener("mouseout", () => {
  director.style.transform = "scale(1)";
});
coach.addEventListener("mouseover", () => {
  coach.style.transform = "scale(1.03)";
});
coach.addEventListener("mouseout", () => {
  coach.style.transform = "scale(1)";
});
player.forEach((i) => {
  i.addEventListener("mouseover", () => {
    i.style.transform = "scale(1.03)";
  });
  i.addEventListener("mouseout", () => {
    i.style.transform = "scale(1)";
  });
});

function directorAni() {
  if (director.getBoundingClientRect().top < 960) {
    director.style.opacity = "1";
    director.style.transform = "translateY(0)";
  } else {
    director.style.opacity = "0";
    director.style.transform = "translateY(80px)";
  }
}

function coachAni() {
  if (coach.getBoundingClientRect().top < 1000) {
    coach.style.opacity = "1";
    coach.style.transform = "translateY(0)";
  } else {
    coach.style.opacity = "0";
    coach.style.transform = "translateY(80px)";
  }
}

function playerAni() {
  if (playerBox.getBoundingClientRect().top < 600) {
    player.forEach((i) => {
      i.style.opacity = "1";
      i.style.transform = "translateY(0)";
    });
  } else {
    player.forEach((i) => {
      i.style.opacity = "0";
      for (i = 0; i < player.length; i++) {
        if (i % 2 == 0) {
          player[i].style.transform = "translateX(-80px)";
        } else {
          player[i].style.transform = "translateX(80px)";
        }
      }
    });
  }
}

window.addEventListener("scroll", directorAni);
window.addEventListener("scroll", coachAni);
window.addEventListener("scroll", playerAni);
