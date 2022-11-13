const characterBox = document.querySelector('.character_list');
const characterList = document.querySelectorAll('.character_list > li');
console.log(characterBox.getBoundingClientRect().top);
console.log(characterList)

function characterListAppearAni(){
    if(characterBox.getBoundingClientRect().top < 850){
        characterList.forEach((i) => {
            i.classList.add('appear');
        }) 
    }else{
        characterList.forEach((i) => {
            i.classList.remove('appear');
        }) 
    }
}



window.addEventListener('scroll', () => {
    characterListAppearAni();
});