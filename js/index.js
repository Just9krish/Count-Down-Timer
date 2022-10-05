const deadLine = "2023-1-1";

updateTimer(getTimeRemaining(deadLine))

let timeinterval = setInterval(() => {
    updateTimer(getTimeRemaining(deadLine));
}, 1000);

function getTimeRemaining(endTime) {
    // converting the date into miliseconds so that we can subtract two date like value
    const total = Date.parse(endTime) - Date.parse(new Date());
    // now we want to convert miliseconds to seconds, minutes, hours and days
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
        total,
        seconds,
        minutes,
        hours,
        days,
    };
}

function classRemover(className) {
    setTimeout(() => {
        className.classList.remove("flip-animation")
    }, 800)
}

function updateTimer(data) {
    const secondsElements = document.getElementById("timerSeconds");
    const minutesElements = document.getElementById("timerMinutes");
    const hoursElements = document.getElementById("timerHours");
    const daysElements = document.getElementById("timerDays");

    if (data.seconds != secondsElements.innerHTML) {
        secondsElements.classList.add("flip-animation")
        classRemover(secondsElements)
    }
    if (data.minutes != minutesElements.innerHTML) {
        minutesElements.classList.add("flip-animation")
        classRemover(minutesElements)
    }
    if (data.hours != hoursElements.innerHTML) {
        hoursElements.classList.add("flip-animation")
        classRemover(hoursElements)
    }
    if (data.days != daysElements.innerHTML) {
        daysElements.classList.add("flip-animation")
        classRemover(daysElements)
    }

    daysElements.innerHTML = (`0${data.days}`).slice(-2)
    hoursElements.innerHTML = (`0${data.hours}`).slice(-2)
    minutesElements.innerHTML = (`0${data.minutes}`).slice(-2)
    secondsElements.innerHTML = (`0${data.seconds}`).slice(-2)

    if (data.total <= 0) {
        clearInterval(timeinterval);
    }
}
