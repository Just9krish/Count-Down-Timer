const deadLine = "2023-1-1";

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
        days
    }
}


function initializeTimer(id, endTime) {
    const timer = document.getElementById(id)
    const days = document.getElementById("timerDays")
    const hours = document.getElementById("timerHours")
    const minutes = document.getElementById("timerMinutes")
    const seconds = document.getElementById("timerSeconds")

    function updateTimer() {
        const t = getTimeRemaining(endTime)

        days.innerHTML = (`0${t.days}`).slice(-2)
        hours.innerHTML = (`0${t.hours}`).slice(-2)
        minutes.innerHTML = (`0${t.minutes}`).slice(-2)
        seconds.innerHTML = (`0${t.seconds}`).slice(-2)

        if (t.total <= 0) {
            clearInterval(timeinterval)
        }
    }

    updateTimer()

    let timeinterval = setInterval(updateTimer, 1000)
}

// Step that our initializeClock function doing every second
// 1 = calculate the remaining time
// 2 = output the remaining time to our p tag
// 3 = if remaining time gets zero stop the clock

initializeTimer('p', deadLine)

