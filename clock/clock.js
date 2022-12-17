const hourA = document.querySelector(".hour")
const minuteA = document.querySelector(".minute")
const secondA = document.querySelector(".second")

function updateClock(){
    const currentDate = new Date()
    setTimeout(updateClock, 1000)

    const hour = currentDate.getHours()
    const minute = currentDate.getMinutes()
    const second = currentDate.getSeconds()

    const hourDeg = (hour / 12) * 360
    hourA.style.transform = `rotate(${hourDeg}deg)`
    const minuteDeg = (minute / 60) * 360
    minuteA.style.transform = `rotate(${minuteDeg}deg)`
    const secondDeg = (second / 60) * 360
    secondA.style.transform = `rotate(${secondDeg}deg)`
}
updateClock()