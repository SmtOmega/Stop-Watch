const secondsCounter = document.querySelector('.seconds')
const minCounter = document.querySelector('.minute')
const startCounter = document.querySelector('.btn-start')
const stopCounter= document.querySelector('.btn-stop')
const resetCounter = document.querySelector('.btn-reset')

let timer = 0
let interval;
let isRunning = false

const pad = (pd) => {
    return pd < 10 ? '0' + pd : pd
}

const increment = ()=> {
    timer++
    const minuteVal = Math.floor(timer / 60)
    const secondsVal = timer % 60

    secondsCounter.innerText = pad(secondsVal)
    minCounter.innerText = pad(minuteVal)
}





startCounter.addEventListener('click', (e) => {
    if(isRunning) return
    isRunning = true
    interval = setInterval(increment, 1000)
    e.preventDefault
})

const stopWatch = (e)=>{
    e.preventDefault()
    if(!isRunning) return
    isRunning = false
    clearInterval(interval)
}
stopCounter.addEventListener('click',  stopWatch)

resetCounter.addEventListener('click', (e) => {
    timer = 0
    clearInterval(interval)
    secondsCounter.innerText ="00"
    minCounter.innerText = "00"
    if(!isRunning) return
    isRunning =false

})

