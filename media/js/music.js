function clipAppear(){
    const clipBox = document.querySelector('.clip');
    const clip = document.querySelectorAll('.clip li');
    if(clipBox.getBoundingClientRect().top < 850){
        clip.forEach((i)=>{
            i.classList.add('opacity');
        })
    }else{
        clip.forEach((i)=>{
            i.classList.remove('opacity');
        })
    }
}

window.addEventListener('scroll', () => {
    clipAppear();
});

