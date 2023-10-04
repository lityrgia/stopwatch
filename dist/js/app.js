const timer = document.querySelector(".timer")
const minutesHTML = document.querySelector(".minutes")
const secondsHTML = document.querySelector(".seconds")
const milisecondsHTML = document.querySelector(".miliseconds")
const start = document.querySelector(".start")
const reset = document.querySelector(".reset")

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isStart = false;

document.querySelector(".container").addEventListener("click", (e) => {
    let target = e.target

    if (target.className == "start") {
        if (isStart == true) {
            isStart = false;
        } else {
            isStart = true;
            startTimer()
        }
    } else if (target.className == "reset") {
        resetTimer()
    } else {
        return
    }
})

function startTimer() {
    if (isStart == false) return

    miliseconds++
    milisecondsHTML.innerHTML = miliseconds
    if (miliseconds == 60) {
        miliseconds = 0
        seconds++
        secondsHTML.innerHTML = seconds
        if (seconds == 60) {
            seconds = 0
            minutes++
            minutesHTML.innerHTML = minutes
        }
    }

    setTimeout(startTimer, 10)
}

function resetTimer() {
    isStart = false;

    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutesHTML.innerHTML = "00";
    secondsHTML.innerHTML = "00";
    milisecondsHTML.innerHTML = "00";
}