//here i am creating counter using a clouser

// function count (){
//     let ct = 0 ;
//     return (function(){
//         ct++;
//         console.log(ct);
        
//     })
// }

// let rct = count();

// rct()
// rct()

//again using limiter

function limiter (fn , limit ){
    let lmt = 0
    return function(){
      if(lmt <limit){
        lmt++;
        fn();
      }else{
        console.log("Buy Pro to Watch More")
      }
    }
}
 
let fn = limiter(function(){
    console.log("Hi i am Harsh ")
},10)

fn()
fn()
fn()
fn()
fn()
fn()
fn()
fn()
fn()
fn()
fn()
fn()
fn()
fn()
fn()
fn()
fn()