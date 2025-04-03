let box = document.querySelector("#B")
let button = document.querySelector("button")
let body = document.querySelector("body")

button.addEventListener("click", function(){
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    box.style.borderColor = `rgb(${c2},${c1},${c3})`
    body.style.backgroundColor = `rgb(${c3},${c2},${c1})`
    button.style.backgroundColor = `rgb(${c1},${c2},${c3})`
})