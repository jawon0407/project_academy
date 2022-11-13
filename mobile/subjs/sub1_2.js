const firstHistory = document.querySelector(".first_division");
const middleHistory = document.querySelector(".middle_division");
const lastHistory = document.querySelector(".last_division");
const firstHistoryBox = document.querySelector(".first_history");
const middleHistoryBox = document.querySelector(".middle_history");
const lastHistoryBox = document.querySelector(".last_history");

function firstHistoryUp(){
    firstHistory.classList.add("on");
    middleHistory.classList.remove("on");
    lastHistory.classList.remove("on");
    firstHistoryBox.classList.remove("hidden");
    middleHistoryBox.classList.add("hidden");
    lastHistoryBox.classList.add("hidden");
    firstHistoryBox.classList.add("up");
    middleHistoryBox.classList.remove("up");
    lastHistoryBox.classList.remove("up");
}
function middleHistoryUp(){
    firstHistory.classList.remove("on");
    middleHistory.classList.add("on");
    lastHistory.classList.remove("on");
    firstHistoryBox.classList.add("hidden");
    middleHistoryBox.classList.remove("hidden");
    lastHistoryBox.classList.add("hidden");
    firstHistoryBox.classList.remove("up");
    middleHistoryBox.classList.add("up");
    lastHistoryBox.classList.remove("up");
}
function lastHistoryUp(){
    firstHistory.classList.remove("on");
    middleHistory.classList.remove("on");
    lastHistory.classList.add("on");
    firstHistoryBox.classList.add("hidden");
    middleHistoryBox.classList.add("hidden");
    lastHistoryBox.classList.remove("hidden");
    firstHistoryBox.classList.remove("up");
    middleHistoryBox.classList.remove("up");
    lastHistoryBox.classList.add("up");
}

console.log(lastHistory)

firstHistory.addEventListener("click", (e)=>{
    e.preventDefault();
    firstHistoryUp();
});
middleHistory.addEventListener("click", (e)=>{
    e.preventDefault();
    middleHistoryUp();
});
lastHistory.addEventListener("click", (e)=>{
    e.preventDefault();
    lastHistoryUp();
});