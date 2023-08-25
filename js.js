const deg = 6
const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sec = document.querySelector('#sec')
const dayElement = document.querySelector('#day')
const date = document.querySelector('#date')

setInterval(() => {
    const day = new Date()
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg
    let ss = day.getSeconds() * deg

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sec.style.transform = `rotateZ(${ss}deg)`

    dayElement.textContent = day.toLocaleDateString(undefined, { weekday: 'long' })
    date.textContent = day.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' })
}, 1000)