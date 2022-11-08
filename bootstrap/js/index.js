const mapImg = document.querySelector(".map_container  > img");
const riftIcon = document.querySelector(".rift");
const aramIcon = document.querySelector(".aram");

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


const riftChangeMap = (e) => {
    riftIcon.classList.remove("filtered");
    aramIcon.classList.add("filtered");
    mapImg.src = imgSrc[0].src;
    mapImg.alt = imgSrc[0].alt;
}

const aramChangeMap = (e) => {
    riftIcon.classList.add("filtered");
    aramIcon.classList.remove("filtered");
    mapImg.src = imgSrc[1].src;
    mapImg.alt = imgSrc[1].alt;
}

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

riftIcon.addEventListener("click", riftChangeMap);
aramIcon.addEventListener("click", aramChangeMap);
window.addEventListener("scroll", navChangeColor);