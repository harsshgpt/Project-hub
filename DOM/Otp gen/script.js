let b = document.querySelector("button");
let o = document.getElementById("otp");

b.addEventListener('click', function() {
    let n = Math.floor(1000 + Math.random() * 9000); // Ensures a 4-digit number
    o.innerHTML = n;
});