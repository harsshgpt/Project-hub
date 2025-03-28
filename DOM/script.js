let box = document.querySelector('#box');
let button = document.querySelector('button');
let c = 0;

button.addEventListener("click", () => {
    c++;
    box.style.backgroundColor = c % 2 !== 0 ? "red" : "wheat";
    console.log(c);
});
