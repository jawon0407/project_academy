var xhr = new XMLHttpRequest();

xhr.onload = function() {
  if(xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);
    var newContent = '';
    for (var i = 0; i < responseObject.players.length; i++) {
      newContent += `<li>`
      newContent +=   `<div class="player_intro">`
      newContent +=     `<div>`
      newContent +=       '<img src="'+ responseObject.players[i].img +'" alt="'+ responseObject.players[i].alt +'">';
      newContent +=      `</div>`
      newContent +=  `<div>`
      newContent +=    `<div class="name">`
      newContent +=      `<span>${responseObject.players[i].name}</span>`
      newContent +=      `<br />`
      newContent +=      `<span>${responseObject.players[i].englishName}</span>`
      newContent +=      '<img src="'+ responseObject.players[i].flag +'" alt="'+ responseObject.players[i].flagImgAlt +'" class="flag">';
      newContent +=    `</div>`
      newContent +=    `<div>`
      newContent +=      `<ul class="profile">`
      newContent +=        `<li>출생일 : ${responseObject.players[i].birth}</li>`
      newContent +=        `<li>신 장 : ${responseObject.players[i].height} / ${responseObject.players[i].weight}</li>`
      newContent +=        `<li>주종목 : ${responseObject.players[i].playStyle}</li>`
      newContent +=      `</ul>`
      newContent +=    `</div>`
      newContent +=  `</div>`
      newContent +=`</div>`
      newContent +=`<div class="recent_achievement">`
      newContent +=  `<span>주요성적</span>`
      newContent +=  `<div>`
      newContent +=    `<dl>`
      newContent +=      `<dt>${responseObject.players[i].careerYearOne}</dt>`
      newContent +=      `<dd>${responseObject.players[i].careerOne}</dd>`
      newContent +=      `<dt>${responseObject.players[i].careerYearTwo}</dt>`
      newContent +=      `<dd>${responseObject.players[i].careerTwo}</dd>`
      newContent +=    `</dl>`
      newContent +=  `</div>`
      newContent +=`</div>`
      newContent +=`<div class="support_item">`
      newContent +=  `<div>`
      newContent +=   ` <span>후원용품</span>`
      newContent +=  `</div>`
      newContent +=  `<div>`
      newContent +=    `<span>라켓 : ${responseObject.players[i].supportItemOne}</span>`
      newContent +=    `<span>신발 : ${responseObject.players[i].supportItemTwo}</span>`
      newContent +=  `</div>`
      newContent += `</div>`
      newContent += `</li>`
    }
    document.getElementById('list').innerHTML = newContent;
    
    const player = document.querySelectorAll(".player_list > li");
    
    console.log(player);
    
    //스크롤 위치에 따른 player 슬라이드 애니메이션 구현하기
    
    player.forEach((i) => {
      i.style.opacity = "0";
      i.style.transition = "all 0.5s ease-in-out";
      for (i = 0; i < player.length; i++) {
        if (i % 2 == 0) {
          player[i].style.transform = "translateX(-80px)";
        } else {
          player[i].style.transform = "translateX(80px)";
        }
      }
    });
    
    function playerFirstAni() {
      if (player[0].getBoundingClientRect().top < 960) {
        player[0].style.opacity = "1";
        player[0].style.transform = "translateX(0)";
        player[1].style.opacity = "1";
        player[1].style.transform = "translateX(0)";
      } else {
        player[0].style.opacity = "0";
        player[0].style.transform = "translateX(-80px)";
        player[1].style.opacity = "0";
        player[1].style.transform = "translateX(80px)";
      }
    }
    
    function playerSecondAni() {
      if (player[2].getBoundingClientRect().top < 960) {
        player[2].style.opacity = "1";
        player[2].style.transform = "translateX(0)";
        player[3].style.opacity = "1";
        player[3].style.transform = "translateX(0)";
      } else {
        player[2].style.opacity = "0";
        player[2].style.transform = "translateX(-80px)";
        player[3].style.opacity = "0";
        player[3].style.transform = "translateX(80px)";
      }
    }
    
    function playerThirdAni() {
      if (player[4].getBoundingClientRect().top < 960) {
        player[4].style.opacity = "1";
        player[4].style.transform = "translateX(0)";
        player[5].style.opacity = "1";
        player[5].style.transform = "translateX(0)";
      } else {
        player[4].style.opacity = "0";
        player[4].style.transform = "translateX(-80px)";
        player[5].style.opacity = "0";
        player[5].style.transform = "translateX(80px)";
      }
    }
    
    function playerFourthAni() {
      if (player[6].getBoundingClientRect().top < 960) {
        player[6].style.opacity = "1";
        player[6].style.transform = "translateX(0)";
        player[7].style.opacity = "1";
        player[7].style.transform = "translateX(0)";
      } else {
        player[6].style.opacity = "0";
        player[6].style.transform = "translateX(-80px)";
        player[7].style.opacity = "0";
        player[7].style.transform = "translateX(80px)";
      }
    }
    
    window.addEventListener("scroll", () => {
      playerFirstAni();
      playerSecondAni();
      playerThirdAni();
      playerFourthAni();
    });
  }
}
xhr.open('GET', 'data/playerdata.json', true);        // 요청을 준비한다.
xhr.send(null); 

