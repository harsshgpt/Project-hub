let bt = document.querySelector("button")
let img1 = document.querySelector("#A")
let img2 = document.querySelector("#B")

bt.addEventListener('click', function(){
   let u1 =  img1.getAttribute("src");
   let u2 = img2.getAttribute("src");

   img1.setAttribute("src",u2)
   img2.setAttribute("src",u1)
})