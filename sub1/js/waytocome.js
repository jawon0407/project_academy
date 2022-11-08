const publicTransport = document.querySelector(".bus_train");
const car = document.querySelector(".car");

console.log(car.getBoundingClientRect().top);

function publicTransportWayAni(){
    if(publicTransport.getBoundingClientRect().top < 750){
        publicTransport.classList.add("way_up");
    }else{
        publicTransport.classList.remove("way_up");
    }
};

function carWayAni(){
    if(car.getBoundingClientRect().top < 750){
        car.classList.add("way_up");
    }else{
        car.classList.remove("way_up");
    }
}


window.addEventListener("scroll",publicTransportWayAni);
window.addEventListener("scroll",carWayAni);