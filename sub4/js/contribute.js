const options = {
    threshold: 0,
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('up');
            
        }else{
            observer.unobserve;
        }
    })
}, options);

const targets = document.querySelectorAll('.social_contribution_box li');

targets.forEach(target => {
    observer.observe(target)
});