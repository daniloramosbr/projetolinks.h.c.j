let button = document.getElementById('switch')
let html = document.documentElement
let img = document.querySelector("#profile img")

button.addEventListener("click",() => {
    html.classList.toggle('light')
})

