const topBtn = document.querySelector(".top_btn");

topBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({top:0, behavior:"smooth"});
});

function gameSectionAnimation(){
    const gameSection = document.querySelector(".game_section");
    if(gameSection.getBoundingClientRect().top < 950){
        gameSection.classList.add("up");
    }else{
        gameSection.classList.remove("up");
    }
}
function cartoonSectionAnimation(){
    const cartoonSection = document.querySelector(".cartoon_section");
        if(cartoonSection.getBoundingClientRect().top < 950){
        cartoonSection.classList.add("up");
    }else{
        cartoonSection.classList.remove("up");
    }
}
function badmintonSectionAnimation(){
    const badmintonSection = document.querySelector(".badminton_section");
        if(badmintonSection.getBoundingClientRect().top < 950){
        badmintonSection.classList.add("up");
    }else{
        badmintonSection.classList.remove("up");
    }
}
function mountainSectionAnimation(){
    const mountainSection = document.querySelector(".mountain_section");
        if(mountainSection.getBoundingClientRect().top < 950){
        mountainSection.classList.add("up");
    }else{
        mountainSection.classList.remove("up");
    }
}

window.addEventListener("scroll",()=>{
    gameSectionAnimation();
    cartoonSectionAnimation();
    badmintonSectionAnimation();
    mountainSectionAnimation();
})