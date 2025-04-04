let bt = document.querySelector("button")

let h1 = document.querySelector("h1")
let fill = document.querySelector("#fill")


bt.addEventListener("click",function(){
    bt.innerHTML = "Dwonloading"
    bt.style.opacity = .5
    let d = Math.floor(Math.random()*50) ;
    let c = 0 ;
   let n = setInterval(function(){
    c++;
    h1.innerHTML = c +"%";
    fill.style.width = c+"%"
   },d);
   setTimeout(() => {
     clearInterval(n)
     bt.innerHTML = "Dwonloaded"
     bt.style.opacity = .5;
   }, d*100);
   setTimeout(() => {
    clearInterval(n)
    bt.innerHTML = "ReDwonload"
    bt.style.opacity = 1
    
  }, d*100+1000);
})