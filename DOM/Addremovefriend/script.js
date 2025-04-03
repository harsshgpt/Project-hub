let box = document.querySelector("#box");
let bt = document.querySelector("button")
let h3 = document.querySelector("h3");

let c = 0 ;

bt.addEventListener("click",function(){
    if(c == 0){
      h3.style.color = "Green"
      h3.innerHTML = "Friends"
      bt.innerHTML = "Remove Friends"
      c = 1;
    }else{
        h3.style.color = "Red"
      h3.innerHTML = "Stranger"
      bt.innerHTML = "Add Friend"
      c = 1;
     c = 0 ;
    }
})