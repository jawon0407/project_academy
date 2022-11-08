
function annaAppearAni(){
    const annaSection = document.querySelector('.anna');
    if(annaSection.getBoundingClientRect().top < 850){
        annaSection.classList.add('appear');
    }else{
        annaSection.classList.remove('appear');
    }
}

function elsaAppearAni(){
    const elsaSection = document.querySelector('.elsa');
    if(elsaSection.getBoundingClientRect().top < 850){
        elsaSection.classList.add('appear');
    }else{
        elsaSection.classList.remove('appear');
    }
}

function kristoffAppearAni(){
    const kristoffSection = document.querySelector('.kristoff');
    if(kristoffSection.getBoundingClientRect().top < 850){
        kristoffSection.classList.add('appear');
    }else{
        kristoffSection.classList.remove('appear');
    }
}

function olafAppearAni(){
    const olafSection = document.querySelector('.olaf');
    if(olafSection.getBoundingClientRect().top < 850){
        olafSection.classList.add('appear');
    }else{
        olafSection.classList.remove('appear');
    }
}

function etcAppearAni(){
    const etcSection = document.querySelector('.etc_character');
    const etcCharacter = document.querySelectorAll('.etc_character li');
    if(etcSection.getBoundingClientRect().top < 850){
        etcCharacter.forEach((i)=>{
            i.classList.add('opacity');
        })
    }else{
        etcCharacter.forEach((i)=>{
            i.classList.remove('opacity');
        })
    }
}

window.addEventListener('scroll', () => {
    annaAppearAni();
    elsaAppearAni();
    kristoffAppearAni();
    olafAppearAni();
    etcAppearAni();
});