const trailerImgList = document.querySelectorAll('.trailer_lst li');

function trailerImgListAppearAni(){
    if(trailerImgList[0].getBoundingClientRect().top < 950){
        trailerImgList[0].classList.add('transform');
    }else{
        trailerImgList[0].classList.remove('transform');
    }
    if(trailerImgList[1].getBoundingClientRect().top < 950){
        trailerImgList[1].classList.add('transform');
    }else{
        trailerImgList[1].classList.remove('transform');
    }
    if(trailerImgList[2].getBoundingClientRect().top < 950){
        trailerImgList[2].classList.add('transform');
    }else{
        trailerImgList[2].classList.remove('transform');
    }
    if(trailerImgList[3].getBoundingClientRect().top < 950){
        trailerImgList[3].classList.add('transform');
    }else{
        trailerImgList[3].classList.remove('transform');
    }
}

window.addEventListener('scroll', function(){
    trailerImgListAppearAni();
});