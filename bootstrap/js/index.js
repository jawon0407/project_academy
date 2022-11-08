const mapImg = document.querySelector(".map_container  > img");
const riftIcon = document.querySelector(".rift");
const aramIcon = document.querySelector(".aram");
const mapTitle = document.querySelector(".map_explain > strong");
const mapInfo = document.querySelector(".map_explain > p");

const imgSrc = [
    {
        src : "images/league_of_legends/summoner_rift_map.jpg", 
        alt : "Summoner's Rift Map"
    },
    {
        src : "images/league_of_legends/aram_map.jpg",
        alt : "ARAM Map"
    }
]

const map = [
    {title : "Summoners Rift", info:"As the flagship map of League of Legends, Summoner's Rift is the m ost favored map by many players. As two teams of five champions each, you'll battle through three lanes and expansive jungles. The jungle is filled with neutral monsters that grant powerful effects."},
    {title : "Aram", info:"There is no neutral zone and only one lane. So, unlike other maps, the importance of fighting and confrontation is very high from the beginning of the game to the end of the game, and it ends relatively quickly. Conquering this artifact will quickly restore the champion's health and mana over a short period of time."}
]

const riftChangeMap = (e) => {
    riftIcon.classList.remove("filtered");
    aramIcon.classList.add("filtered");
    mapImg.src = imgSrc[0].src;
    mapImg.alt = imgSrc[0].alt;
    mapTitle.innerText = map[0].title;
    mapInfo.innerText = map[0].info;
}

const aramChangeMap = (e) => {
    riftIcon.classList.add("filtered");
    aramIcon.classList.remove("filtered");
    mapImg.src = imgSrc[1].src;
    mapImg.alt = imgSrc[1].alt;
    mapTitle.innerText = map[1].title;
    mapInfo.innerText = map[1].info;
}

/**
 * Scroll Spy
*/ 

const navChangeColor = (e) => {
    const navList = document.querySelectorAll(".navbar-nav h3");
    const worldCup = document.querySelector("#worldcup");
    const lol = document.querySelector("#lol");
    const tft = document.querySelector("#tft");
    const valorant = document.querySelector("#valorant");
    worldCupTop = worldCup.getBoundingClientRect().top;
    lolTop = lol.getBoundingClientRect().top;
    tftTop = tft.getBoundingClientRect().top;
    valorantTop = valorant.getBoundingClientRect().top;
        console.log(worldCupTop);
    if(window.innerWidth > 768){
        if(worldCupTop < 100 && worldCupTop > -worldCup.clientHeight){
            navList[0].classList.add("here");
            navList[1].classList.remove("here");
            navList[2].classList.remove("here");
            navList[3].classList.remove("here");
        }if(lolTop < 20 && lolTop > -lol.clientHeight ){
            navList[0].classList.remove("here");
            navList[1].classList.add("here");
            navList[2].classList.remove("here");
            navList[3].classList.remove("here");
        } else if(tftTop < 50 && tftTop > -tft.clientHeight + 50){
            navList[0].classList.remove("here");
            navList[1].classList.remove("here");
            navList[2].classList.add("here");
            navList[3].classList.remove("here");
        } else if(valorantTop< 50 && valorantTop > -valorant.clientHeight){
            navList[0].classList.remove("here");
            navList[1].classList.remove("here");
            navList[2].classList.remove("here");
            navList[3].classList.add("here");
        }
        
        if(worldCupTop > 100){
            navList[0].classList.remove("here");
            navList[1].classList.remove("here");
            navList[2].classList.remove("here");
            navList[3].classList.remove("here");
        }
    }
}


const synergyArr = [
    {src:"./images/teamfight_tactics/modal_img/synergy/기병대.jpg",alt:"기병대",info:"기병대"},
    {src:"./images/teamfight_tactics/modal_img/synergy/민첩사수.jpg",alt:"민첩사수",info:"민첩사수"},
    {src:"./images/teamfight_tactics/modal_img/synergy/요술사.jpg",alt:"요술사",info:"요술사"},
    {src:"./images/teamfight_tactics/modal_img/synergy/신기루.jpg",alt:"신기루",info:"신기루"},
    {src:"./images/teamfight_tactics/modal_img/synergy/용술사.jpg",alt:"용술사",info:"용술사"},
    {src:"./images/teamfight_tactics/modal_img/synergy/분노날개.jpg",alt:"분노날개",info:"분노날개"},
    {src:"./images/teamfight_tactics/modal_img/synergy/수호자.jpg",alt:"수호자",info:"수호자"},
    {src:"./images/teamfight_tactics/modal_img/synergy/빛비늘.jpg",alt:"빛비늘",info:"빛비늘"}
]

const littleLegendArr = [
    {src:"./images/teamfight_tactics/modal_img/legendary/펭구.jpg",alt:"펭구", info:"펭구"},
    {src:"./images/teamfight_tactics/modal_img/legendary/ash.jpg",alt:"ash", info:"애쉬"},
    {src:"./images/teamfight_tactics/modal_img/legendary/assuo.jpg",alt:"assuo.", info:"야스오"},
    {src:"./images/teamfight_tactics/modal_img/legendary/Choncc.jpg",alt:"Choncc", info:"배불뚝이"},
    {src:"./images/teamfight_tactics/modal_img/legendary/kaisa.jpg",alt:"kaisa", info:"카이사"},
    {src:"./images/teamfight_tactics/modal_img/legendary/leesin.jpg",alt:"leesin", info:"리신"},
    {src:"./images/teamfight_tactics/modal_img/legendary/ossia.jpg",alt:"ossia", info:"오시아"},
    {src:"./images/teamfight_tactics/modal_img/legendary/kda_hushtail.jpg",alt:"kda_hushtail", info:"살랑꼬리"}
]

const modalTitle = document.querySelector(".modal_header strong");
const modalImg = document.querySelectorAll(".modal_body img");
const modalInfo = document.querySelectorAll(".modal_body span");
const styleModalBtn = document.querySelector(".style_btn");
const combinationModalBtn = document.querySelector(".combination_btn");



//jquery 모달창 fadein fadeout

$(document).ready(function () {
    const modalContainer = document.querySelector(".modal_content");
    $(".btn").click(function () {
      $(".modal").fadeIn();
      $(".modal").css("display", "flex");
    });
    $(".modal_close_btn").click(function (e) {
      e.preventDefault();
      $(".modal").fadeOut();
    });
    $(".modal_background").click(function () {
      $(".modal").fadeOut();
    });
    $(document).keydown(function (e) {
      if (e.key === "Escape") {
        $(".modal").fadeOut();
      }
    });
  });
riftIcon.addEventListener("click", riftChangeMap);
aramIcon.addEventListener("click", aramChangeMap);
window.addEventListener("scroll", navChangeColor);
combinationModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modalTitle.innerText = "시너지";
    for(i=0 ; i<synergyArr.length; i++) {
        modalImg[i].src = synergyArr[i].src;
        modalImg[i].alt = synergyArr[i].alt;
        modalInfo[i].innerHTML = synergyArr[i].info;
        console.log(modalImg[i].src);
    }
});

styleModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modalTitle.innerText = "꼬마 전설이";
    for(i=0 ; i<littleLegendArr.length; i++) {
        modalImg[i].src = littleLegendArr[i].src;
        modalImg[i].alt = littleLegendArr[i].alt;
        modalInfo[i].innerHTML = littleLegendArr[i].info;
    }
});
